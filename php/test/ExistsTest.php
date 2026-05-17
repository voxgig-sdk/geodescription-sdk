<?php
declare(strict_types=1);

// Geodescription SDK exists test

require_once __DIR__ . '/../geodescription_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GeodescriptionSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
