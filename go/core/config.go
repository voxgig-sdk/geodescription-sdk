package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Geodescription",
			"slug": "geodescription",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://free.geodescription.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"lonlongitude": map[string]any{},
				"reverse_geocoding": map[string]any{},
				"text_part": map[string]any{},
			},
		},
		"entity": map[string]any{
			"lonlongitude": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "boundary",
						"short": "Name of the administrative boundary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "place",
						"short": "Name of the place",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of place (e.g., village, city, town)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wayName",
						"short": "Name of the street or road",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wayRef",
						"short": "Reference identifier for the way (e.g., road number)",
						"type": "`$STRING`",
					},
				},
				"name": "lonlongitude",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 51.3034,
											"kind": "param",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/textParts/lat={latitude}/lon={longitude}",
								"segments": []any{
									map[string]any{
										"lit": "textParts",
									},
									map[string]any{
										"lit": "lat={latitude}",
									},
									map[string]any{
										"lit": "lon={longitude}",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"latitude",
										"longitude",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"textParts",
									"lat={latitude}",
									"lon={longitude}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reverse_geocoding": map[string]any{
				"fields": []any{},
				"name": "reverse_geocoding",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/text",
								"segments": []any{
									map[string]any{
										"lit": "text",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"lat",
										"lon",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"text",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 51.3034,
											"kind": "param",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/text/lat={latitude}/lon={longitude}",
								"segments": []any{
									map[string]any{
										"lit": "text",
									},
									map[string]any{
										"lit": "lat={latitude}",
									},
									map[string]any{
										"lit": "lon={longitude}",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"latitude",
										"longitude",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"text",
									"lat={latitude}",
									"lon={longitude}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"text_part": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "boundary",
						"short": "Name of the administrative boundary",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "level",
						"short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "place",
						"short": "Name of the place",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of place (e.g., village, city, town)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wayName",
						"short": "Name of the street or road",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wayRef",
						"short": "Reference identifier for the way (e.g., road number)",
						"type": "`$STRING`",
					},
				},
				"name": "text_part",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/textParts",
								"segments": []any{
									map[string]any{
										"lit": "textParts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"lat",
										"lon",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"textParts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
