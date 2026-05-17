<?php
declare(strict_types=1);

// Geodescription SDK utility: result_body

class GeodescriptionResultBody
{
    public static function call(GeodescriptionContext $ctx): ?GeodescriptionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
