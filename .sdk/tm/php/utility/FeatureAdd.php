<?php
declare(strict_types=1);

// Geodescription SDK utility: feature_add

class GeodescriptionFeatureAdd
{
    public static function call(GeodescriptionContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
