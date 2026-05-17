<?php
declare(strict_types=1);

// Geodescription SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GeodescriptionFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GeodescriptionBaseFeature();
            case "test":
                return new GeodescriptionTestFeature();
            default:
                return new GeodescriptionBaseFeature();
        }
    }
}
