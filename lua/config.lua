-- Geodescription SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Geodescription",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://free.geodescription.com",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["lonlongitude"] = {},
        ["reverse_geocoding"] = {},
        ["text_part"] = {},
      },
    },
    entity = {
      ["lonlongitude"] = {
        ["fields"] = {
          {
            ["name"] = "boundary",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "place",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wayName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wayRef",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "lonlongitude",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 51.3034,
                      ["kind"] = "param",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = -0.3063,
                      ["kind"] = "param",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/textParts/lat={latitude}/lon={longitude}",
                ["parts"] = {
                  "textParts",
                  "lat={latitude}",
                  "lon={longitude}",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "latitude",
                    "longitude",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["reverse_geocoding"] = {
        ["fields"] = {},
        ["name"] = "reverse_geocoding",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 51.3034,
                      ["kind"] = "query",
                      ["name"] = "lat",
                      ["orig"] = "lat",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = -0.3063,
                      ["kind"] = "query",
                      ["name"] = "lon",
                      ["orig"] = "lon",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/text",
                ["parts"] = {
                  "text",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "lat",
                    "lon",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 51.3034,
                      ["kind"] = "param",
                      ["name"] = "latitude",
                      ["orig"] = "latitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = -0.3063,
                      ["kind"] = "param",
                      ["name"] = "longitude",
                      ["orig"] = "longitude",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/text/lat={latitude}/lon={longitude}",
                ["parts"] = {
                  "text",
                  "lat={latitude}",
                  "lon={longitude}",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "latitude",
                    "longitude",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["text_part"] = {
        ["fields"] = {
          {
            ["name"] = "boundary",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "level",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "place",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wayName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "wayRef",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "text_part",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 51.3034,
                      ["kind"] = "query",
                      ["name"] = "lat",
                      ["orig"] = "lat",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = -0.3063,
                      ["kind"] = "query",
                      ["name"] = "lon",
                      ["orig"] = "lon",
                      ["reqd"] = true,
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/textParts",
                ["parts"] = {
                  "textParts",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "lat",
                    "lon",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
