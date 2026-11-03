import { LonlongitudeEntity } from './entity/LonlongitudeEntity';
import { TextPartEntity } from './entity/TextPartEntity';
export type * from './GeodescriptionTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GeodescriptionEntityBase } from './GeodescriptionEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
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
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Lonlongitude(entopts?: Record<string, any>): LonlongitudeEntity;
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
export type { DirectResult };
