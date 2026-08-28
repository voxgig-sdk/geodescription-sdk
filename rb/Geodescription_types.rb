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
# @!attribute [rw] wayName
#   @return [String, nil]
#
# @!attribute [rw] wayRef
#   @return [String, nil]
Lonlongitude = Struct.new(
  :boundary,
  :level,
  :place,
  :type,
  :wayName,
  :wayRef,
  keyword_init: true
)

# Request payload for Lonlongitude#list.
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] key
#   @return [String, nil]
LonlongitudeListMatch = Struct.new(
  :latitude,
  :longitude,
  :key,
  keyword_init: true
)

# ReverseGeocoding entity data model.
class ReverseGeocoding
end

# Request payload for ReverseGeocoding#load.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float]
#
# @!attribute [rw] lon
#   @return [Float]
ReverseGeocodingLoadMatch = Struct.new(
  :key,
  :lat,
  :lon,
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
# @!attribute [rw] wayName
#   @return [String, nil]
#
# @!attribute [rw] wayRef
#   @return [String, nil]
TextPart = Struct.new(
  :boundary,
  :level,
  :place,
  :type,
  :wayName,
  :wayRef,
  keyword_init: true
)

# Request payload for TextPart#list.
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float]
#
# @!attribute [rw] lon
#   @return [Float]
TextPartListMatch = Struct.new(
  :key,
  :lat,
  :lon,
  keyword_init: true
)

