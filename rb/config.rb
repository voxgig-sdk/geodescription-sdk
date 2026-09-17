# Geodescription SDK configuration

module GeodescriptionConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Geodescription",
        "slug" => "geodescription",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://free.geodescription.com",
        "auth" => {
          "prefix" => "",
          "in" => "query",
          "name" => "key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "lonlongitude" => {},
          "reverse_geocoding" => {},
          "text_part" => {},
        },
      },
      "entity" => {
        "lonlongitude" => {
          "fields" => [
            {
              "name" => "boundary",
              "short" => "Name of the administrative boundary",
              "type" => "`$STRING`",
            },
            {
              "name" => "level",
              "short" => "Administrative level of the boundary (e.g., -6, -4, -2, top)",
              "type" => "`$STRING`",
            },
            {
              "name" => "place",
              "short" => "Name of the place",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type of place (e.g., village, city, town)",
              "type" => "`$STRING`",
            },
            {
              "name" => "wayName",
              "short" => "Name of the street or road",
              "type" => "`$STRING`",
            },
            {
              "name" => "wayRef",
              "short" => "Reference identifier for the way (e.g., road number)",
              "type" => "`$STRING`",
            },
          ],
          "name" => "lonlongitude",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 51.3034,
                        "kind" => "param",
                        "name" => "latitude",
                        "orig" => "latitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -0.3063,
                        "kind" => "param",
                        "name" => "longitude",
                        "orig" => "longitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/textParts/lat={latitude}/lon={longitude}",
                  "segments" => [
                    {
                      "lit" => "textParts",
                    },
                    {
                      "lit" => "lat={latitude}",
                    },
                    {
                      "lit" => "lon={longitude}",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "key",
                      "latitude",
                      "longitude",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "textParts",
                    "lat={latitude}",
                    "lon={longitude}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "reverse_geocoding" => {
          "fields" => [],
          "name" => "reverse_geocoding",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 51.3034,
                        "kind" => "query",
                        "name" => "lat",
                        "orig" => "lat",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -0.3063,
                        "kind" => "query",
                        "name" => "lon",
                        "orig" => "lon",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/text",
                  "segments" => [
                    {
                      "lit" => "text",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "key",
                      "lat",
                      "lon",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "text",
                  ],
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 51.3034,
                        "kind" => "param",
                        "name" => "latitude",
                        "orig" => "latitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -0.3063,
                        "kind" => "param",
                        "name" => "longitude",
                        "orig" => "longitude",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/text/lat={latitude}/lon={longitude}",
                  "segments" => [
                    {
                      "lit" => "text",
                    },
                    {
                      "lit" => "lat={latitude}",
                    },
                    {
                      "lit" => "lon={longitude}",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "key",
                      "latitude",
                      "longitude",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "text",
                    "lat={latitude}",
                    "lon={longitude}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "text_part" => {
          "fields" => [
            {
              "name" => "boundary",
              "short" => "Name of the administrative boundary",
              "type" => "`$STRING`",
            },
            {
              "name" => "level",
              "short" => "Administrative level of the boundary (e.g., -6, -4, -2, top)",
              "type" => "`$STRING`",
            },
            {
              "name" => "place",
              "short" => "Name of the place",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type of place (e.g., village, city, town)",
              "type" => "`$STRING`",
            },
            {
              "name" => "wayName",
              "short" => "Name of the street or road",
              "type" => "`$STRING`",
            },
            {
              "name" => "wayRef",
              "short" => "Reference identifier for the way (e.g., road number)",
              "type" => "`$STRING`",
            },
          ],
          "name" => "text_part",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 51.3034,
                        "kind" => "query",
                        "name" => "lat",
                        "orig" => "lat",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -0.3063,
                        "kind" => "query",
                        "name" => "lon",
                        "orig" => "lon",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/textParts",
                  "segments" => [
                    {
                      "lit" => "textParts",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "key",
                      "lat",
                      "lon",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "textParts",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GeodescriptionFeatures.make_feature(name)
  end
end
