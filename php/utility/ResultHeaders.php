<?php
declare(strict_types=1);

// Geodescription SDK utility: result_headers

class GeodescriptionResultHeaders
{
    public static function call(GeodescriptionContext $ctx): ?GeodescriptionResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
