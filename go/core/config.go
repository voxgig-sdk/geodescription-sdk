package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Geodescription",
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
				"prefix": "Bearer",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "place",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "way_name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "way_ref",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "lonlongitude",
				"op": map[string]any{
					"list": map[string]any{
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
											"active": true,
										},
										map[string]any{
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
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
											"active": true,
										},
										map[string]any{
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "level",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "place",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "way_name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "way_ref",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "text_part",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
