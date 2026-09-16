

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


describe('ReverseGeocodingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEODESCRIPTION_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEODESCRIPTION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeodescriptionSDK.test()
    const ent = testsdk.ReverseGeocoding()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEODESCRIPTION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reverse_geocoding.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"reverse_geocoding","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"key","orig":"key","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":51.3034,"kind":"query","name":"lat","orig":"lat","reqd":true,"type":"`$NUMBER`","index$":1},{"active":true,"example":-0.3063,"kind":"query","name":"lon","orig":"lon","reqd":true,"type":"`$NUMBER`","index$":2}]},"contract":{"id":"GET /text","json":"{\"operationId\":\"getTextDescriptionQuery\",\"parameters\":[{\"description\":\"Latitude coordinate\",\"example\":51.3034,\"in\":\"query\",\"name\":\"lat\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"description\":\"Longitude coordinate\",\"example\":-0.3063,\"in\":\"query\",\"name\":\"lon\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}},{\"description\":\"API key (required for paid tier at api.geodescription.com)\",\"in\":\"query\",\"name\":\"key\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"example\":\"Leatherhead Road (A24), Ashtead, Mole Valley, Surrey, England, United Kingdom\",\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with location description\"},\"400\":{\"description\":\"Bad request - invalid coordinates\"},\"401\":{\"description\":\"Unauthorized - invalid or missing API key (paid tier only)\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{},{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for paid tier access (prepaid or subscription). Not required for free tier.\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/text","segments":[{"lit":"text"}],"select":{"exist":["key","lat","lon"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":51.3034,"kind":"param","name":"latitude","orig":"latitude","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"example":-0.3063,"kind":"param","name":"longitude","orig":"longitude","reqd":true,"type":"`$NUMBER`","index$":1}],"query":[{"active":true,"kind":"query","name":"key","orig":"key","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /text/lat={latitude}/lon={longitude}","json":"{\"operationId\":\"getTextDescriptionPath\",\"parameters\":[{\"description\":\"Latitude coordinate\",\"example\":51.3034,\"in\":\"path\",\"name\":\"latitude\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"description\":\"Longitude coordinate\",\"example\":-0.3063,\"in\":\"path\",\"name\":\"longitude\",\"required\":true,\"schema\":{\"format\":\"double\",\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}},{\"description\":\"API key (required for paid tier at api.geodescription.com)\",\"in\":\"query\",\"name\":\"key\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"example\":\"Leatherhead Road (A24), Ashtead, Mole Valley, Surrey, England, United Kingdom\",\"schema\":{\"type\":\"string\"}}},\"description\":\"Successful response with location description\"},\"400\":{\"description\":\"Bad request - invalid coordinates\"},\"401\":{\"description\":\"Unauthorized - invalid or missing API key (paid tier only)\"},\"429\":{\"description\":\"Rate limit exceeded\"}},\"security\":[{},{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for paid tier access (prepaid or subscription). Not required for free tier.\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/text/lat={latitude}/lon={longitude}","segments":[{"lit":"text"},{"lit":"lat={latitude}"},{"lit":"lon={longitude}"}],"select":{"exist":["key","latitude","longitude"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"reverse_geocoding","name__orig":"reverse_geocoding","Name":"ReverseGeocoding","name_":"reverse_geocoding","name-":"reverse-geocoding","NAME":"REVERSE_GEOCODING","index$":1}, {"active":true,"entity":"reverse_geocoding","key$":"BasicReverseGeocodingFlow","kind":"basic","name":"BasicReverseGeocodingFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"reverse_geocoding_ref01","srcdatavar":"reverse_geocoding_ref01_data","suffix":"_dt0"},"match":{"latitude":"latitude01","longitude":"longitude01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-reverse_geocoding_ref01"}}],"index$":0}]}, 'ReverseGeocoding')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reverse_geocoding_ref01_data = Object.values(setup.data.existing.reverse_geocoding)[0] as any

    // LOAD
    const reverse_geocoding_ref01_ent = client.ReverseGeocoding()
    const reverse_geocoding_ref01_match_dt0: any = {}
    const reverse_geocoding_ref01_data_dt0 = (await reverse_geocoding_ref01_ent.load(reverse_geocoding_ref01_match_dt0)).data()
    assert(null != reverse_geocoding_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reverse_geocoding/ReverseGeocodingTestData.json')

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
    ['reverse_geocoding01','reverse_geocoding02','reverse_geocoding03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEODESCRIPTION_TEST_REVERSE_GEOCODING_ENTID': idmap,
    'GEODESCRIPTION_TEST_LIVE': 'FALSE',
    'GEODESCRIPTION_TEST_EXPLAIN': 'FALSE',
    'GEODESCRIPTION_APIKEY': '',
  })

  idmap = env['GEODESCRIPTION_TEST_REVERSE_GEOCODING_ENTID']

  const live = 'TRUE' === env.GEODESCRIPTION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEODESCRIPTION_TEST_REVERSE_GEOCODING_ENTID']
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
  
