-- Typed models for the Geodescription SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Lonlongitude
---@field boundary? string
---@field level? string
---@field place? string
---@field type? string
---@field wayName? string
---@field wayRef? string

---@class LonlongitudeListMatch
---@field latitude number
---@field longitude number
---@field key? string

---@class ReverseGeocoding

---@class ReverseGeocodingLoadMatch
---@field key? string
---@field lat number
---@field lon number

---@class TextPart
---@field boundary? string
---@field level? string
---@field place? string
---@field type? string
---@field wayName? string
---@field wayRef? string

---@class TextPartListMatch
---@field key? string
---@field lat number
---@field lon number

local M = {}

return M
