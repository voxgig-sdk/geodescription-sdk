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
						"title": "Boundary",
						"type": "`$STRING`",
						"short": "Name of the administrative boundary",
					},
					map[string]any{
						"name": "level",
						"title": "Level",
						"type": "`$STRING`",
						"short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
					},
					map[string]any{
						"name": "place",
						"title": "Place",
						"type": "`$STRING`",
						"short": "Name of the place",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of place (e.g., village, city, town)",
					},
					map[string]any{
						"name": "wayName",
						"title": "Way Name",
						"type": "`$STRING`",
						"short": "Name of the street or road",
					},
					map[string]any{
						"name": "wayRef",
						"title": "Way Ref",
						"type": "`$STRING`",
						"short": "Reference identifier for the way (e.g., road number)",
					},
				},
				"name": "lonlongitude",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"textParts",
									"lat={latitude}",
									"lon={longitude}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "latitude",
											"orig": "latitude",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
											"example": 51.3034,
										},
										map[string]any{
											"name": "longitude",
											"orig": "longitude",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
											"example": -0.3063,
										},
									},
									"query": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"latitude",
										"longitude",
									},
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
								"kind": "http",
								"method": "GET",
								"orig": "/text",
								"segments": []any{
									map[string]any{
										"lit": "text",
									},
								},
								"parts": []any{
									"text",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lat",
											"orig": "lat",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 51.3034,
										},
										map[string]any{
											"name": "lon",
											"orig": "lon",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": -0.3063,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"lat",
										"lon",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"text",
									"lat={latitude}",
									"lon={longitude}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "latitude",
											"orig": "latitude",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
											"example": 51.3034,
										},
										map[string]any{
											"name": "longitude",
											"orig": "longitude",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
											"example": -0.3063,
										},
									},
									"query": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"latitude",
										"longitude",
									},
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
						"title": "Boundary",
						"type": "`$STRING`",
						"short": "Name of the administrative boundary",
					},
					map[string]any{
						"name": "level",
						"title": "Level",
						"type": "`$STRING`",
						"short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
					},
					map[string]any{
						"name": "place",
						"title": "Place",
						"type": "`$STRING`",
						"short": "Name of the place",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of place (e.g., village, city, town)",
					},
					map[string]any{
						"name": "wayName",
						"title": "Way Name",
						"type": "`$STRING`",
						"short": "Name of the street or road",
					},
					map[string]any{
						"name": "wayRef",
						"title": "Way Ref",
						"type": "`$STRING`",
						"short": "Reference identifier for the way (e.g., road number)",
					},
				},
				"name": "text_part",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/textParts",
								"segments": []any{
									map[string]any{
										"lit": "textParts",
									},
								},
								"parts": []any{
									"textParts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lat",
											"orig": "lat",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": 51.3034,
										},
										map[string]any{
											"name": "lon",
											"orig": "lon",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
											"example": -0.3063,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"lat",
										"lon",
									},
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
