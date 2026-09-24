

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"reverse_geocoding","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /text","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"key","or":"key","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":51.3034,"k":"query","n":"lat","or":"lat","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"ex":-0.3063,"k":"query","n":"lon","or":"lon","r":true,"t":"`$NUMBER`","index$":2}]},"k":"http","m":"GET","o":"/text","q":{"exist":["key","lat","lon"]},"r":{},"s":[{"lit":"text"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /text/lat={latitude}/lon={longitude}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":51.3034,"k":"param","n":"latitude","or":"latitude","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":-0.3063,"k":"param","n":"longitude","or":"longitude","r":true,"t":"`$NUMBER`","index$":1}],"query":[{"a":true,"k":"query","n":"key","or":"key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/text/lat={latitude}/lon={longitude}","q":{"exist":["key","latitude","longitude"]},"r":{},"s":[{"lit":"text"},{"lit":"lat={latitude}"},{"lit":"lon={longitude}"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"reverse_geocoding","name__orig":"reverse_geocoding","Name":"ReverseGeocoding","name_":"reverse_geocoding","name-":"reverse-geocoding","NAME":"REVERSE_GEOCODING","index$":1}, {"active":true,"entity":"reverse_geocoding","key$":"BasicReverseGeocodingFlow","kind":"basic","name":"BasicReverseGeocodingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"reverse_geocoding_ref01","srcdatavar":"reverse_geocoding_ref01_data","suffix":"_dt0"},"m":{"latitude":"latitude01","longitude":"longitude01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-reverse_geocoding_ref01"}}],"index$":0}]}, 'ReverseGeocoding', {"GET /text":{"protocol":"http","operationId":"getTextDescriptionQuery","responses":{"200":{"description":"Successful response with location description","content":{"text/plain":{"schema":{"type":"string"},"example":"Leatherhead Road (A24), Ashtead, Mole Valley, Surrey, England, United Kingdom"}}},"400":{"description":"Bad request - invalid coordinates"},"401":{"description":"Unauthorized - invalid or missing API key (paid tier only)"},"429":{"description":"Rate limit exceeded"}},"parameters":[{"name":"lat","in":"query","required":true,"description":"Latitude coordinate","schema":{"type":"number","format":"double","minimum":-90,"maximum":90},"example":51.3034,"index$":0},{"name":"lon","in":"query","required":true,"description":"Longitude coordinate","schema":{"type":"number","format":"double","minimum":-180,"maximum":180},"example":-0.3063,"index$":1},{"name":"key","in":"query","required":false,"description":"API key (required for paid tier at api.geodescription.com)","schema":{"type":"string"},"index$":2}],"security":[{},{"ApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"key","description":"API key for paid tier access (prepaid or subscription). Not required for free tier."}}},"GET /text/lat={latitude}/lon={longitude}":{"protocol":"http","operationId":"getTextDescriptionPath","responses":{"200":{"description":"Successful response with location description","content":{"text/plain":{"schema":{"type":"string"},"example":"Leatherhead Road (A24), Ashtead, Mole Valley, Surrey, England, United Kingdom"}}},"400":{"description":"Bad request - invalid coordinates"},"401":{"description":"Unauthorized - invalid or missing API key (paid tier only)"},"429":{"description":"Rate limit exceeded"}},"parameters":[{"name":"latitude","in":"path","required":true,"description":"Latitude coordinate","schema":{"type":"number","format":"double","minimum":-90,"maximum":90},"example":51.3034,"index$":0},{"name":"longitude","in":"path","required":true,"description":"Longitude coordinate","schema":{"type":"number","format":"double","minimum":-180,"maximum":180},"example":-0.3063,"index$":1},{"name":"key","in":"query","required":false,"description":"API key (required for paid tier at api.geodescription.com)","schema":{"type":"string"},"index$":2}],"security":[{},{"ApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"key","description":"API key for paid tier access (prepaid or subscription). Not required for free tier."}}}})
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
    ['reverse_geocoding01','reverse_geocoding02','reverse_geocoding03','latitude01','longitude01'],
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
  
