import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "lonlongitude",
    "accessor": "Lonlongitude",
    "op": "list",
    "method": "GET",
    "path": "/textParts/lat={latitude}/lon={longitude}",
    "args": [
      {
        "name": "latitude",
        "wire": "latitude",
        "value": 51.3034
      },
      {
        "name": "longitude",
        "wire": "longitude",
        "value": -0.3063
      }
    ],
    "select": {
      "key": "v1"
    },
    "headers": [],
    "query": [
      "key"
    ],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "wayName": "Leatherhead Road",
        "wayRef": "A24"
      },
      {
        "place": "Ashtead",
        "type": "village"
      },
      {
        "boundary": "Mole Valley",
        "level": "-6"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "reverse_geocoding",
    "accessor": "ReverseGeocoding",
    "op": "load",
    "method": "GET",
    "path": "/text",
    "args": [],
    "select": {
      "key": "v1",
      "lat": 51.3034,
      "lon": -0.3063
    },
    "headers": [],
    "query": [
      "lat",
      "lon",
      "key"
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "reverse_geocoding",
    "accessor": "ReverseGeocoding",
    "op": "load",
    "method": "GET",
    "path": "/text/lat={latitude}/lon={longitude}",
    "args": [
      {
        "name": "latitude",
        "wire": "latitude",
        "value": 51.3034
      },
      {
        "name": "longitude",
        "wire": "longitude",
        "value": -0.3063
      }
    ],
    "select": {
      "key": "v1"
    },
    "headers": [],
    "query": [
      "key"
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "text_part",
    "accessor": "TextPart",
    "op": "list",
    "method": "GET",
    "path": "/textParts",
    "args": [],
    "select": {
      "key": "v1",
      "lat": 51.3034,
      "lon": -0.3063
    },
    "headers": [],
    "query": [
      "lat",
      "lon",
      "key"
    ],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "wayName": "Leatherhead Road",
        "wayRef": "A24"
      },
      {
        "place": "Ashtead",
        "type": "village"
      },
      {
        "boundary": "Mole Valley",
        "level": "-6"
      }
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
