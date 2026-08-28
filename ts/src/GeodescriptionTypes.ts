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
  wayName?: string
  wayRef?: string
}

export interface LonlongitudeListMatch {
  latitude: number
  longitude: number
  key?: string
}

export interface ReverseGeocoding {
}

export interface ReverseGeocodingLoadMatch {
  key?: string
  lat: number
  lon: number
}

export interface TextPart {
  boundary?: string
  level?: string
  place?: string
  type?: string
  wayName?: string
  wayRef?: string
}

export interface TextPartListMatch {
  key?: string
  lat: number
  lon: number
}

