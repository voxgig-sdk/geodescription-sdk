
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Geodescription',
        slug: "geodescription",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://free.geodescription.com",

    auth: {
      prefix: '',
      in: 'query',
      name: 'key',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        lonlongitude: {
        },
  
        text_part: {
        },
  
    }
  }


  entity = {
    "lonlongitude": {
      "fields": [
        {
          "name": "boundary",
          "title": "Boundary",
          "type": "`$STRING`",
          "short": "Name of the administrative boundary"
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$STRING`",
          "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)"
        },
        {
          "name": "place",
          "title": "Place",
          "type": "`$STRING`",
          "short": "Name of the place"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Type of place (e.g., village, city, town)"
        },
        {
          "name": "wayName",
          "title": "Way Name",
          "type": "`$STRING`",
          "short": "Name of the street or road"
        },
        {
          "name": "wayRef",
          "title": "Way Ref",
          "type": "`$STRING`",
          "short": "Reference identifier for the way (e.g., road number)"
        }
      ],
      "name": "lonlongitude",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/textParts/lat={latitude}/lon={longitude}",
              "segments": [
                {
                  "lit": "textParts"
                },
                {
                  "lit": "lat={latitude}"
                },
                {
                  "lit": "lon={longitude}"
                }
              ],
              "parts": [
                "textParts",
                "lat={latitude}",
                "lon={longitude}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "latitude",
                    "orig": "latitude",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 51.3034
                  },
                  {
                    "name": "longitude",
                    "orig": "longitude",
                    "type": "`$NUMBER`",
                    "kind": "param",
                    "reqd": true,
                    "example": -0.3063
                  }
                ],
                "query": [
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "latitude",
                  "longitude"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "text_part": {
      "fields": [
        {
          "name": "boundary",
          "title": "Boundary",
          "type": "`$STRING`",
          "short": "Name of the administrative boundary"
        },
        {
          "name": "level",
          "title": "Level",
          "type": "`$STRING`",
          "short": "Administrative level of the boundary (e.g., -6, -4, -2, top)"
        },
        {
          "name": "place",
          "title": "Place",
          "type": "`$STRING`",
          "short": "Name of the place"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Type of place (e.g., village, city, town)"
        },
        {
          "name": "wayName",
          "title": "Way Name",
          "type": "`$STRING`",
          "short": "Name of the street or road"
        },
        {
          "name": "wayRef",
          "title": "Way Ref",
          "type": "`$STRING`",
          "short": "Reference identifier for the way (e.g., road number)"
        }
      ],
      "name": "text_part",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/textParts",
              "segments": [
                {
                  "lit": "textParts"
                }
              ],
              "parts": [
                "textParts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "lat",
                    "orig": "lat",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "reqd": true,
                    "example": 51.3034
                  },
                  {
                    "name": "lon",
                    "orig": "lon",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "reqd": true,
                    "example": -0.3063
                  }
                ]
              },
              "select": {
                "exist": [
                  "lat",
                  "lon"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

