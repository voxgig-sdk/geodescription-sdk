import { GeodescriptionEntityBase } from '../GeodescriptionEntityBase';
import type { GeodescriptionSDK } from '../GeodescriptionSDK';
import type { Control } from '../types';
import type { Lonlongitude, LonlongitudeListMatch } from '../GeodescriptionTypes';
declare class LonlongitudeEntity extends GeodescriptionEntityBase<Lonlongitude> {
    constructor(client: GeodescriptionSDK, entopts: any);
    make(this: LonlongitudeEntity): LonlongitudeEntity;
    list(this: any, reqmatch?: LonlongitudeListMatch, ctrl?: Control): Promise<LonlongitudeEntity[]>;
}
export { LonlongitudeEntity };
