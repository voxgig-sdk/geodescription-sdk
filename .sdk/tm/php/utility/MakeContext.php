<?php
declare(strict_types=1);

// Geodescription SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GeodescriptionMakeContext
{
    public static function call(array $ctxmap, ?GeodescriptionContext $basectx): GeodescriptionContext
    {
        return new GeodescriptionContext($ctxmap, $basectx);
    }
}
