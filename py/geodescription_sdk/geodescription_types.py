# Typed models for the Geodescription SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Lonlongitude(TypedDict, total=False):
    boundary: str
    level: str
    place: str
    type: str
    wayName: str
    wayRef: str


class LonlongitudeListMatchRequired(TypedDict):
    latitude: float
    longitude: float


class LonlongitudeListMatch(LonlongitudeListMatchRequired, total=False):
    key: str


class ReverseGeocoding(TypedDict):
    pass


class ReverseGeocodingLoadMatchRequired(TypedDict):
    lat: float
    lon: float


class ReverseGeocodingLoadMatch(ReverseGeocodingLoadMatchRequired, total=False):
    key: str


class TextPart(TypedDict, total=False):
    boundary: str
    level: str
    place: str
    type: str
    wayName: str
    wayRef: str


class TextPartListMatchRequired(TypedDict):
    lat: float
    lon: float


class TextPartListMatch(TextPartListMatchRequired, total=False):
    key: str
