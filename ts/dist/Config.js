"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Geodescription',
        slug: "geodescription",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://free.geodescription.com",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            lonlongitude: {},
            reverse_geocoding: {},
            text_part: {},
        }
    };
    entity = {
        "lonlongitude": {
            "fields": [
                {
                    "name": "boundary",
                    "short": "Name of the administrative boundary",
                    "type": "`$STRING`"
                },
                {
                    "name": "level",
                    "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
                    "type": "`$STRING`"
                },
                {
                    "name": "place",
                    "short": "Name of the place",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of place (e.g., village, city, town)",
                    "type": "`$STRING`"
                },
                {
                    "name": "wayName",
                    "short": "Name of the street or road",
                    "type": "`$STRING`"
                },
                {
                    "name": "wayRef",
                    "short": "Reference identifier for the way (e.g., road number)",
                    "type": "`$STRING`"
                }
            ],
            "name": "lonlongitude",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 51.3034,
                                        "kind": "param",
                                        "name": "latitude",
                                        "orig": "latitude",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": -0.3063,
                                        "kind": "param",
                                        "name": "longitude",
                                        "orig": "longitude",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/textParts/lat={latitude}/lon={longitude}",
                            "segments": [
                                {
                                    "lit": "textParts"
                                },
                                {
                                    "lit": "lat={latitude}"
                                },
                                {
                                    "lit": "lon={longitude}"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "key",
                                    "latitude",
                                    "longitude"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "textParts",
                                "lat={latitude}",
                                "lon={longitude}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "reverse_geocoding": {
            "fields": [],
            "name": "reverse_geocoding",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 51.3034,
                                        "kind": "query",
                                        "name": "lat",
                                        "orig": "lat",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": -0.3063,
                                        "kind": "query",
                                        "name": "lon",
                                        "orig": "lon",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/text",
                            "segments": [
                                {
                                    "lit": "text"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "key",
                                    "lat",
                                    "lon"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "text"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 51.3034,
                                        "kind": "param",
                                        "name": "latitude",
                                        "orig": "latitude",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": -0.3063,
                                        "kind": "param",
                                        "name": "longitude",
                                        "orig": "longitude",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/text/lat={latitude}/lon={longitude}",
                            "segments": [
                                {
                                    "lit": "text"
                                },
                                {
                                    "lit": "lat={latitude}"
                                },
                                {
                                    "lit": "lon={longitude}"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "key",
                                    "latitude",
                                    "longitude"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "text",
                                "lat={latitude}",
                                "lon={longitude}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "text_part": {
            "fields": [
                {
                    "name": "boundary",
                    "short": "Name of the administrative boundary",
                    "type": "`$STRING`"
                },
                {
                    "name": "level",
                    "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
                    "type": "`$STRING`"
                },
                {
                    "name": "place",
                    "short": "Name of the place",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Type of place (e.g., village, city, town)",
                    "type": "`$STRING`"
                },
                {
                    "name": "wayName",
                    "short": "Name of the street or road",
                    "type": "`$STRING`"
                },
                {
                    "name": "wayRef",
                    "short": "Reference identifier for the way (e.g., road number)",
                    "type": "`$STRING`"
                }
            ],
            "name": "text_part",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 51.3034,
                                        "kind": "query",
                                        "name": "lat",
                                        "orig": "lat",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": -0.3063,
                                        "kind": "query",
                                        "name": "lon",
                                        "orig": "lon",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/textParts",
                            "segments": [
                                {
                                    "lit": "textParts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "key",
                                    "lat",
                                    "lon"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "textParts"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map