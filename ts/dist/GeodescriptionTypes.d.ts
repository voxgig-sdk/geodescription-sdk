export interface Lonlongitude {
    boundary?: string;
    level?: string;
    place?: string;
    type?: string;
    wayName?: string;
    wayRef?: string;
}
export interface LonlongitudeListMatch {
    latitude: number;
    longitude: number;
    key?: string;
}
export interface ReverseGeocoding {
}
export interface ReverseGeocodingLoadMatch {
    key?: string;
    lat: number;
    lon: number;
}
export interface TextPart {
    boundary?: string;
    level?: string;
    place?: string;
    type?: string;
    wayName?: string;
    wayRef?: string;
}
export interface TextPartListMatch {
    key?: string;
    lat: number;
    lon: number;
}
