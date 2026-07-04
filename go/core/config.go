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
						"active": true,
						"name": "boundary",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "level",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "place",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "way_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "way_ref",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "lonlongitude",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 51.3034,
											"kind": "param",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 51.3034,
											"kind": "param",
											"name": "latitude",
											"orig": "latitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": -0.3063,
											"kind": "param",
											"name": "longitude",
											"orig": "longitude",
											"reqd": true,
											"type": "`$NUMBER`",
											"index$": 1,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
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
								"index$": 1,
							},
						},
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
						"active": true,
						"name": "boundary",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "level",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "place",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "way_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "way_ref",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
				},
				"name": "text_part",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": 51.3034,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"active": true,
											"example": -0.3063,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": true,
											"type": "`$NUMBER`",
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
								"index$": 0,
							},
						},
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
