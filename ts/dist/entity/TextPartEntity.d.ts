import { GeodescriptionEntityBase } from '../GeodescriptionEntityBase';
import type { GeodescriptionSDK } from '../GeodescriptionSDK';
import type { Control } from '../types';
import type { TextPart, TextPartListMatch } from '../GeodescriptionTypes';
declare class TextPartEntity extends GeodescriptionEntityBase<TextPart> {
    constructor(client: GeodescriptionSDK, entopts: any);
    make(this: TextPartEntity): TextPartEntity;
    list(this: any, reqmatch?: TextPartListMatch, ctrl?: Control): Promise<TextPartEntity[]>;
}
export { TextPartEntity };
