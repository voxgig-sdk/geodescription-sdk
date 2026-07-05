# frozen_string_literal: true

# Typed models for the Geodescription SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Lonlongitude entity data model.
#
# @!attribute [rw] boundary
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] place
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] way_name
#   @return [String, nil]
#
# @!attribute [rw] way_ref
#   @return [String, nil]
Lonlongitude = Struct.new(
  :boundary,
  :level,
  :place,
  :type,
  :way_name,
  :way_ref,
  keyword_init: true
)

# Request payload for Lonlongitude#list.
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
LonlongitudeListMatch = Struct.new(
  :latitude,
  :longitude,
  keyword_init: true
)

# ReverseGeocoding entity data model.
class ReverseGeocoding
end

# Request payload for ReverseGeocoding#load.
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
ReverseGeocodingLoadMatch = Struct.new(
  :latitude,
  :longitude,
  keyword_init: true
)

# TextPart entity data model.
#
# @!attribute [rw] boundary
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] place
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] way_name
#   @return [String, nil]
#
# @!attribute [rw] way_ref
#   @return [String, nil]
TextPart = Struct.new(
  :boundary,
  :level,
  :place,
  :type,
  :way_name,
  :way_ref,
  keyword_init: true
)

# Request payload for TextPart#list.
#
# @!attribute [rw] boundary
#   @return [String, nil]
#
# @!attribute [rw] level
#   @return [String, nil]
#
# @!attribute [rw] place
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] way_name
#   @return [String, nil]
#
# @!attribute [rw] way_ref
#   @return [String, nil]
TextPartListMatch = Struct.new(
  :boundary,
  :level,
  :place,
  :type,
  :way_name,
  :way_ref,
  keyword_init: true
)

