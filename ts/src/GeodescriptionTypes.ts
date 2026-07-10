// Typed models for the Geodescription SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Lonlongitude {
  boundary?: string
  level?: string
  place?: string
  type?: string
  way_name?: string
  way_ref?: string
}

export interface LonlongitudeListMatch {
  latitude: number
  longitude: number
}

export interface ReverseGeocoding {
}

export interface ReverseGeocodingLoadMatch {
  latitude?: number
  longitude?: number
}

export interface TextPart {
  boundary?: string
  level?: string
  place?: string
  type?: string
  way_name?: string
  way_ref?: string
}

export interface TextPartListMatch {
  boundary?: string
  level?: string
  place?: string
  type?: string
  way_name?: string
  way_ref?: string
}

