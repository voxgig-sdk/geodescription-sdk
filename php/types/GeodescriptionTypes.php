<?php
declare(strict_types=1);

// Typed models for the Geodescription SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Lonlongitude entity data model. */
class Lonlongitude
{
    public ?string $boundary = null;
    public ?string $level = null;
    public ?string $place = null;
    public ?string $type = null;
    public ?string $way_name = null;
    public ?string $way_ref = null;
}

/** Request payload for Lonlongitude#list. */
class LonlongitudeListMatch
{
    public float $latitude;
    public float $longitude;
}

/** ReverseGeocoding entity data model. */
class ReverseGeocoding
{
}

/** Request payload for ReverseGeocoding#load. */
class ReverseGeocodingLoadMatch
{
    public float $latitude;
    public float $longitude;
}

/** TextPart entity data model. */
class TextPart
{
    public ?string $boundary = null;
    public ?string $level = null;
    public ?string $place = null;
    public ?string $type = null;
    public ?string $way_name = null;
    public ?string $way_ref = null;
}

/** Request payload for TextPart#list. */
class TextPartListMatch
{
    public ?string $boundary = null;
    public ?string $level = null;
    public ?string $place = null;
    public ?string $type = null;
    public ?string $way_name = null;
    public ?string $way_ref = null;
}

