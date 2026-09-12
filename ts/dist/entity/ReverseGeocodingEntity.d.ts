import { GeodescriptionEntityBase } from '../GeodescriptionEntityBase';
import type { GeodescriptionSDK } from '../GeodescriptionSDK';
import type { Control } from '../types';
import type { ReverseGeocoding, ReverseGeocodingLoadMatch } from '../GeodescriptionTypes';
declare class ReverseGeocodingEntity extends GeodescriptionEntityBase<ReverseGeocoding> {
    constructor(client: GeodescriptionSDK, entopts: any);
    make(this: ReverseGeocodingEntity): ReverseGeocodingEntity;
    load(this: any, reqmatch?: ReverseGeocodingLoadMatch, ctrl?: Control): Promise<ReverseGeocodingEntity>;
}
export { ReverseGeocodingEntity };
