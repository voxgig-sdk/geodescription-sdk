import { LonlongitudeEntity } from './entity/LonlongitudeEntity';
import { ReverseGeocodingEntity } from './entity/ReverseGeocodingEntity';
import { TextPartEntity } from './entity/TextPartEntity';
export type * from './GeodescriptionTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GeodescriptionEntityBase } from './GeodescriptionEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class GeodescriptionSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Lonlongitude(entopts?: Record<string, any>): LonlongitudeEntity;
    ReverseGeocoding(entopts?: Record<string, any>): ReverseGeocodingEntity;
    TextPart(entopts?: Record<string, any>): TextPartEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GeodescriptionSDK;
    tester(testopts?: any, sdkopts?: any): GeodescriptionSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GeodescriptionSDK;
export { stdutil, config, BaseFeature, GeodescriptionEntityBase, GeodescriptionSDK, SDK, };
