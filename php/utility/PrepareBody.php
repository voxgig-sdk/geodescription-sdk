<?php
declare(strict_types=1);

// Geodescription SDK utility: prepare_body

class GeodescriptionPrepareBody
{
    public static function call(GeodescriptionContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
