// Typed models for the Geodescription SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Lonlongitude is the typed data model for the lonlongitude entity.
type Lonlongitude struct {
	Boundary *string `json:"boundary,omitempty"`
	Level *string `json:"level,omitempty"`
	Place *string `json:"place,omitempty"`
	Type *string `json:"type,omitempty"`
	WayName *string `json:"way_name,omitempty"`
	WayRef *string `json:"way_ref,omitempty"`
}

// LonlongitudeListMatch is the typed request payload for Lonlongitude.ListTyped.
type LonlongitudeListMatch struct {
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

// ReverseGeocoding is the typed data model for the reverse_geocoding entity.
type ReverseGeocoding struct {
}

// ReverseGeocodingLoadMatch is the typed request payload for ReverseGeocoding.LoadTyped.
type ReverseGeocodingLoadMatch struct {
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

// TextPart is the typed data model for the text_part entity.
type TextPart struct {
	Boundary *string `json:"boundary,omitempty"`
	Level *string `json:"level,omitempty"`
	Place *string `json:"place,omitempty"`
	Type *string `json:"type,omitempty"`
	WayName *string `json:"way_name,omitempty"`
	WayRef *string `json:"way_ref,omitempty"`
}

// TextPartListMatch mirrors the text_part fields as an all-optional match
// filter (Go analog of Partial<TextPart>).
type TextPartListMatch struct {
	Boundary *string `json:"boundary,omitempty"`
	Level *string `json:"level,omitempty"`
	Place *string `json:"place,omitempty"`
	Type *string `json:"type,omitempty"`
	WayName *string `json:"way_name,omitempty"`
	WayRef *string `json:"way_ref,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
