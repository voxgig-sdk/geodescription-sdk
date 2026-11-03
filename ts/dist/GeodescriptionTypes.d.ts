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
