# Geodescription SDK configuration


def make_config():
    return {
        "main": {
            "name": "Geodescription",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://free.geodescription.com",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "lonlongitude": {},
                "reverse_geocoding": {},
                "text_part": {},
            },
        },
        "entity": {
      "lonlongitude": {
        "fields": [
          {
            "name": "boundary",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "level",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "place",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "way_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "way_ref",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "lonlongitude",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -0.3063,
                      "kind": "param",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/textParts/lat={latitude}/lon={longitude}",
                "parts": [
                  "textParts",
                  "lat={latitude}",
                  "lon={longitude}",
                ],
                "select": {
                  "exist": [
                    "key",
                    "latitude",
                    "longitude",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "reverse_geocoding": {
        "fields": [],
        "name": "reverse_geocoding",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 51.3034,
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -0.3063,
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/text",
                "parts": [
                  "text",
                ],
                "select": {
                  "exist": [
                    "key",
                    "lat",
                    "lon",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 51.3034,
                      "kind": "param",
                      "name": "latitude",
                      "orig": "latitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -0.3063,
                      "kind": "param",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/text/lat={latitude}/lon={longitude}",
                "parts": [
                  "text",
                  "lat={latitude}",
                  "lon={longitude}",
                ],
                "select": {
                  "exist": [
                    "key",
                    "latitude",
                    "longitude",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "text_part": {
        "fields": [
          {
            "name": "boundary",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "level",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "place",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "way_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "way_ref",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
        ],
        "name": "text_part",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 51.3034,
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -0.3063,
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/textParts",
                "parts": [
                  "textParts",
                ],
                "select": {
                  "exist": [
                    "key",
                    "lat",
                    "lon",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
