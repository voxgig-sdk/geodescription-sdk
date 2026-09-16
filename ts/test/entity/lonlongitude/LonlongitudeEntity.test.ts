

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GeodescriptionSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LonlongitudeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEODESCRIPTION_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEODESCRIPTION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeodescriptionSDK.test()
    const ent = testsdk.Lonlongitude()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEODESCRIPTION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lonlongitude.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"boundary","req":false,"short":"Name of the administrative boundary","type":"`$STRING`","index$":0},{"active":true,"name":"level","req":false,"short":"Administrative level of the boundary (e.g., -6, -4, -2, top)","type":"`$STRING`","index$":1},{"active":true,"name":"place","req":false,"short":"Name of the place","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":false,"short":"Type of place (e.g., village, city, town)","type":"`$STRING`","index$":3},{"active":true,"name":"wayName","req":false,"short":"Name of the street or road","type":"`$STRING`","index$":4},{"active":true,"name":"wayRef","req":false,"short":"Reference identifier for the way (e.g., road number)","type":"`$STRING`","index$":5}],"name":"lonlongitude","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":51.3034,"kind":"param","name":"latitude","orig":"latitude","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"example":-0.3063,"kind":"param","name":"longitude","orig":"longitude","reqd":true,"type":"`$NUMBER`","index$":1}],"query":[{"active":true,"kind":"query","name":"key","orig":"key","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /textParts/lat={latitude}/lon={longitude}","json":"{\"operationId\":\"getTextPartsPath\",\"parameters\":[{\"description\":\"Latitude coordinate\",\"example\":51.3034,\"in\":\"path\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"description\":\"Longitude coordinate\",\"example\":-0.3063,\"in\":\"path\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}},{\"description\":\"API key (required for paid tier at api.geodescription.com)\",\"in\":\"query\",\"name\":\"key\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"wayName\":\"Leatherhead Road\",\"wayRef\":\"A24\"},{\"place\":\"Ashtead\",\"type\":\"village\"},{\"boundary\":\"Mole Valley\",\"level\":\"-6\"},{\"boundary\":\"Surrey\",\"level\":\"-4\"},{\"boundary\":\"England\",\"level\":\"-2\"},{\"boundary\":\"United Kingdom\",\"level\":\"top\"}],\"schema\":{\"items\":{\"description\":\"A component of a location description\",\"properties\":{\"boundary\":{\"description\":\"Name of the administrative boundary\",\"type\":\"string\"},\"level\":{\"description\":\"Administrative level of the boundary (e.g., -6, -4, -2, top)\",\"type\":\"string\"},\"place\":{\"description\":\"Name of the place\",\"type\":\"string\"},\"type\":{\"description\":\"Type of place (e.g., village, city, town)\",\"type\":\"string\"},\"wayName\":{\"description\":\"Name of the street or road\",\"type\":\"string\"},\"wayRef\":{\"description\":\"Reference identifier for the way (e.g., road number)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with structured location components\"},\"400\":{\"description\":\"Bad request - invalid coordinates\"},\"401\":{\"description\":\"Unauthorized - invalid or missing API key (paid tier only)\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{},{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for paid tier access (prepaid or subscription). Not required for free tier.\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/textParts/lat={latitude}/lon={longitude}","segments":[{"lit":"textParts"},{"lit":"lat={latitude}"},{"lit":"lon={longitude}"}],"select":{"exist":["key","latitude","longitude"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lonlongitude","name__orig":"lonlongitude","Name":"Lonlongitude","name_":"lonlongitude","name-":"lonlongitude","NAME":"LONLONGITUDE","index$":0}, {"active":true,"entity":"lonlongitude","key$":"BasicLonlongitudeFlow","kind":"basic","name":"BasicLonlongitudeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"latitude":"latitude01","longitude":"longitude01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"lonlongitude_ref01"}}],"index$":0}]}, 'Lonlongitude')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lonlongitude_ref01_data = Object.values(setup.data.existing.lonlongitude)[0] as any

    // LIST
    const lonlongitude_ref01_ent = client.Lonlongitude()
    const lonlongitude_ref01_match: any = {}
    lonlongitude_ref01_match['latitude'] = setup.idmap['latitude01']
    lonlongitude_ref01_match['longitude'] = setup.idmap['longitude01']

    const lonlongitude_ref01_list = (await lonlongitude_ref01_ent.list(lonlongitude_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/lonlongitude/LonlongitudeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GeodescriptionSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['lonlongitude01','lonlongitude02','lonlongitude03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEODESCRIPTION_TEST_LONLONGITUDE_ENTID': idmap,
    'GEODESCRIPTION_TEST_LIVE': 'FALSE',
    'GEODESCRIPTION_TEST_EXPLAIN': 'FALSE',
    'GEODESCRIPTION_APIKEY': '',
  })

  idmap = env['GEODESCRIPTION_TEST_LONLONGITUDE_ENTID']

  const live = 'TRUE' === env.GEODESCRIPTION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEODESCRIPTION_TEST_LONLONGITUDE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GeodescriptionSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.GEODESCRIPTION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GEODESCRIPTION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
