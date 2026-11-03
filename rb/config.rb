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
            "now" => "`$FUNCTION`",
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
          "text_part" => {},
        },
      },
      "entity" => {
        "lonlongitude" => {
          "fields" => [
            {
              "name" => "boundary",
              "title" => "Boundary",
              "type" => "`$STRING`",
              "short" => "Name of the administrative boundary",
            },
            {
              "name" => "level",
              "title" => "Level",
              "type" => "`$STRING`",
              "short" => "Administrative level of the boundary (e.g., -6, -4, -2, top)",
            },
            {
              "name" => "place",
              "title" => "Place",
              "type" => "`$STRING`",
              "short" => "Name of the place",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Type of place (e.g., village, city, town)",
            },
            {
              "name" => "wayName",
              "title" => "Way Name",
              "type" => "`$STRING`",
              "short" => "Name of the street or road",
            },
            {
              "name" => "wayRef",
              "title" => "Way Ref",
              "type" => "`$STRING`",
              "short" => "Reference identifier for the way (e.g., road number)",
            },
          ],
          "name" => "lonlongitude",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
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
                  "parts" => [
                    "textParts",
                    "lat={latitude}",
                    "lon={longitude}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "latitude",
                        "orig" => "latitude",
                        "type" => "`$NUMBER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 51.3034,
                      },
                      {
                        "name" => "longitude",
                        "orig" => "longitude",
                        "type" => "`$NUMBER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => -0.3063,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "latitude",
                      "longitude",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
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
              "title" => "Boundary",
              "type" => "`$STRING`",
              "short" => "Name of the administrative boundary",
            },
            {
              "name" => "level",
              "title" => "Level",
              "type" => "`$STRING`",
              "short" => "Administrative level of the boundary (e.g., -6, -4, -2, top)",
            },
            {
              "name" => "place",
              "title" => "Place",
              "type" => "`$STRING`",
              "short" => "Name of the place",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Type of place (e.g., village, city, town)",
            },
            {
              "name" => "wayName",
              "title" => "Way Name",
              "type" => "`$STRING`",
              "short" => "Name of the street or road",
            },
            {
              "name" => "wayRef",
              "title" => "Way Ref",
              "type" => "`$STRING`",
              "short" => "Reference identifier for the way (e.g., road number)",
            },
          ],
          "name" => "text_part",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/textParts",
                  "segments" => [
                    {
                      "lit" => "textParts",
                    },
                  ],
                  "parts" => [
                    "textParts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "lat",
                        "orig" => "lat",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => 51.3034,
                      },
                      {
                        "name" => "lon",
                        "orig" => "lon",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => -0.3063,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "lat",
                      "lon",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
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
