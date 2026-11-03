package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/geodescription-sdk/go"
	"github.com/voxgig-sdk/geodescription-sdk/go/core"

	vs "github.com/voxgig-sdk/geodescription-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const lonlongitudeEntityLiveStrict = true


func TestLonlongitudeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Lonlongitude(nil)
		if ent == nil {
			t.Fatal("expected non-nil LonlongitudeEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Lonlongitude(nil).List(map[string]any{"latitude": "x", "longitude": 1}, nil)
		if sdkerr, ok := err.(*core.GeodescriptionError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := lonlongitudeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "lonlongitude." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _liveKey, _liveEx := range map[string]any{"latitude01": float64(51.3034), "longitude01": float64(-0.3063)} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					setup.idmap[_liveKey] = _liveEx
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		lonlongitudeRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.lonlongitude")))
		var lonlongitudeRef01Data map[string]any
		if len(lonlongitudeRef01DataRaw) > 0 {
			lonlongitudeRef01Data = core.ToMapAny(lonlongitudeRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = lonlongitudeRef01Data

		// LIST
		lonlongitudeRef01Ent := client.Lonlongitude(nil)
		lonlongitudeRef01Match := map[string]any{
			"latitude": setup.idmap["latitude01"],
			"longitude": setup.idmap["longitude01"],
		}

		lonlongitudeRef01ListResult, err := lonlongitudeRef01Ent.List(lonlongitudeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, lonlongitudeRef01ListOk := lonlongitudeRef01ListResult.([]any)
		if !lonlongitudeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", lonlongitudeRef01ListResult)
		}

	})
}

func lonlongitudeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "lonlongitude", "LonlongitudeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read lonlongitude test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse lonlongitude test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"lonlongitude01", "lonlongitude02", "lonlongitude03", "latitude01", "longitude01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("GEODESCRIPTION_TEST_LONLONGITUDE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GEODESCRIPTION_TEST_LONLONGITUDE_ENTID": idmap,
		"GEODESCRIPTION_TEST_LIVE":      "FALSE",
		"GEODESCRIPTION_TEST_EXPLAIN":   "FALSE",
		"GEODESCRIPTION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["GEODESCRIPTION_TEST_LONLONGITUDE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["GEODESCRIPTION_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["GEODESCRIPTION_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewGeodescriptionSDK(core.ToMapAny(mergedOpts))
	}

	live := env["GEODESCRIPTION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["GEODESCRIPTION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
