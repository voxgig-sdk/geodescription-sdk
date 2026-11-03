"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TextPartEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GEODESCRIPTION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GEODESCRIPTION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GeodescriptionSDK.test();
        const ent = testsdk.TextPart();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('text_part hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.GeodescriptionSDK.test(offline).TextPart().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.GeodescriptionSDK.test(offline).TextPart()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.GeodescriptionSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.TextPart().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.GeodescriptionSDK.test().TextPart().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.GeodescriptionSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.TextPart().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.TextPart().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.GeodescriptionSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TextPart().list({ "key": 1, "lat": 1, "lon": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GEODESCRIPTION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'text_part.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "boundary": { "a": true, "h": "Boundary", "n": "boundary", "r": false, "sh": "Name of the administrative boundary", "t": "`$STRING`", "key$": "boundary", "index$": 0 }, "level": { "a": true, "h": "Level", "n": "level", "r": false, "sh": "Administrative level of the boundary (e.g., -6, -4, -2, top)", "t": "`$STRING`", "key$": "level", "index$": 1 }, "place": { "a": true, "h": "Place", "n": "place", "r": false, "sh": "Name of the place", "t": "`$STRING`", "key$": "place", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of place (e.g., village, city, town)", "t": "`$STRING`", "key$": "type", "index$": 3 }, "wayName": { "a": true, "h": "Way Name", "n": "wayName", "r": false, "sh": "Name of the street or road", "t": "`$STRING`", "key$": "wayName", "index$": 4 }, "wayRef": { "a": true, "h": "Way Ref", "n": "wayRef", "r": false, "sh": "Reference identifier for the way (e.g., road number)", "t": "`$STRING`", "key$": "wayRef", "index$": 5 } }, "name": "text_part", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /textParts", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "key", "or": "key", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 51.3034, "k": "query", "n": "lat", "or": "lat", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": -0.3063, "k": "query", "n": "lon", "or": "lon", "r": true, "t": "`$NUMBER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/textParts", "q": { "exist": ["lat", "lon"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "textParts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "text_part", "name__orig": "text_part", "Name": "TextPart", "name_": "text_part", "name-": "text-part", "NAME": "TEXT_PART", "index$": 1 }, { "active": true, "entity": "text_part", "key$": "BasicTextPartFlow", "kind": "basic", "name": "BasicTextPartFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "text_part_ref01" } }], "index$": 0 }] }, 'TextPart', { "GET /textParts": { "protocol": "http", "parameters": [{ "name": "lat", "in": "query", "required": true, "description": "Latitude coordinate", "schema": { "type": "number", "format": "double", "minimum": -90, "maximum": 90 }, "example": 51.3034, "index$": 0 }, { "name": "lon", "in": "query", "required": true, "description": "Longitude coordinate", "schema": { "type": "number", "format": "double", "minimum": -180, "maximum": 180 }, "example": -0.3063, "index$": 1 }, { "name": "key", "in": "query", "required": false, "description": "API key (required for paid tier at api.geodescription.com)", "schema": { "type": "string" }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let text_part_ref01_data = Object.values(setup.data.existing.text_part)[0];
        // LIST
        const text_part_ref01_ent = client.TextPart();
        const text_part_ref01_match = {};
        const text_part_ref01_list = (await text_part_ref01_ent.list(text_part_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/text_part/TextPartTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GeodescriptionSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['text_part01', 'text_part02', 'text_part03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GEODESCRIPTION_TEST_TEXT_PART_ENTID': idmap,
        'GEODESCRIPTION_TEST_LIVE': 'FALSE',
        'GEODESCRIPTION_TEST_EXPLAIN': 'FALSE',
        'GEODESCRIPTION_APIKEY': '',
    });
    idmap = env['GEODESCRIPTION_TEST_TEXT_PART_ENTID'];
    const live = 'TRUE' === env.GEODESCRIPTION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GEODESCRIPTION_TEST_TEXT_PART_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GeodescriptionSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.GEODESCRIPTION_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GEODESCRIPTION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TextPartEntity.test.js.map