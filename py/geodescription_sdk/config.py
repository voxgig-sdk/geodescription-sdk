# Geodescription SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Geodescription",
            "slug": "geodescription",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://free.geodescription.com",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "key",
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
            "short": "Name of the administrative boundary",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
            "type": "`$STRING`",
          },
          {
            "name": "place",
            "short": "Name of the place",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of place (e.g., village, city, town)",
            "type": "`$STRING`",
          },
          {
            "name": "wayName",
            "short": "Name of the street or road",
            "type": "`$STRING`",
          },
          {
            "name": "wayRef",
            "short": "Reference identifier for the way (e.g., road number)",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": -0.3063,
                      "kind": "param",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/textParts/lat={latitude}/lon={longitude}",
                "segments": [
                  {
                    "lit": "textParts",
                  },
                  {
                    "lit": "lat={latitude}",
                  },
                  {
                    "lit": "lon={longitude}",
                  },
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
                "parts": [
                  "textParts",
                  "lat={latitude}",
                  "lon={longitude}",
                ],
              },
            ],
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 51.3034,
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": -0.3063,
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/text",
                "segments": [
                  {
                    "lit": "text",
                  },
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
                "parts": [
                  "text",
                ],
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
                    },
                    {
                      "example": -0.3063,
                      "kind": "param",
                      "name": "longitude",
                      "orig": "longitude",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/text/lat={latitude}/lon={longitude}",
                "segments": [
                  {
                    "lit": "text",
                  },
                  {
                    "lit": "lat={latitude}",
                  },
                  {
                    "lit": "lon={longitude}",
                  },
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
                "parts": [
                  "text",
                  "lat={latitude}",
                  "lon={longitude}",
                ],
              },
            ],
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
            "short": "Name of the administrative boundary",
            "type": "`$STRING`",
          },
          {
            "name": "level",
            "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)",
            "type": "`$STRING`",
          },
          {
            "name": "place",
            "short": "Name of the place",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of place (e.g., village, city, town)",
            "type": "`$STRING`",
          },
          {
            "name": "wayName",
            "short": "Name of the street or road",
            "type": "`$STRING`",
          },
          {
            "name": "wayRef",
            "short": "Reference identifier for the way (e.g., road number)",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 51.3034,
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": -0.3063,
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/textParts",
                "segments": [
                  {
                    "lit": "textParts",
                  },
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
                "parts": [
                  "textParts",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
