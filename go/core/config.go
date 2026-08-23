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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://free.geodescription.com",
			"auth": map[string]any{
				"prefix": "",
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
								"parts": []any{
									"textParts",
									"lat={latitude}",
									"lon={longitude}",
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
								"parts": []any{
									"text",
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
								"parts": []any{
									"text",
									"lat={latitude}",
									"lon={longitude}",
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
								"parts": []any{
									"textParts",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
