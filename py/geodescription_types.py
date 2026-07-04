# Typed models for the Geodescription SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Lonlongitude:
    boundary: Optional[str] = None
    level: Optional[str] = None
    place: Optional[str] = None
    type: Optional[str] = None
    way_name: Optional[str] = None
    way_ref: Optional[str] = None


@dataclass
class LonlongitudeListMatch:
    latitude: float
    longitude: float


@dataclass
class ReverseGeocoding:
    pass


@dataclass
class ReverseGeocodingLoadMatch:
    latitude: float
    longitude: float


@dataclass
class TextPart:
    boundary: Optional[str] = None
    level: Optional[str] = None
    place: Optional[str] = None
    type: Optional[str] = None
    way_name: Optional[str] = None
    way_ref: Optional[str] = None


@dataclass
class TextPartListMatch:
    boundary: Optional[str] = None
    level: Optional[str] = None
    place: Optional[str] = None
    type: Optional[str] = None
    way_name: Optional[str] = None
    way_ref: Optional[str] = None

