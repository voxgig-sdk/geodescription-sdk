<?php
declare(strict_types=1);

// TextPart entity test

require_once __DIR__ . '/../geodescription_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TextPartEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GeodescriptionSDK::test(null, null);
        $ent = $testsdk->TextPart(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = text_part_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "text_part." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GEODESCRIPTION_TEST_TEXT_PART_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $text_part_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.text_part")));
        $text_part_ref01_data = null;
        if (count($text_part_ref01_data_raw) > 0) {
            $text_part_ref01_data = Helpers::to_map($text_part_ref01_data_raw[0][1]);
        }

        // LIST
        $text_part_ref01_ent = $client->TextPart(null);
        $text_part_ref01_match = [];

        [$text_part_ref01_list_result, $err] = $text_part_ref01_ent->list($text_part_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($text_part_ref01_list_result);

    }
}

function text_part_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/text_part/TextPartTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GeodescriptionSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["text_part01", "text_part02", "text_part03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GEODESCRIPTION_TEST_TEXT_PART_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GEODESCRIPTION_TEST_TEXT_PART_ENTID" => $idmap,
        "GEODESCRIPTION_TEST_LIVE" => "FALSE",
        "GEODESCRIPTION_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GEODESCRIPTION_TEST_TEXT_PART_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["GEODESCRIPTION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new GeodescriptionSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["GEODESCRIPTION_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GEODESCRIPTION_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
