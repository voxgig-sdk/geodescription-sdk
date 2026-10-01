

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"boundary":{"a":true,"h":"Boundary","n":"boundary","r":false,"sh":"Name of the administrative boundary","t":"`$STRING`","key$":"boundary","index$":0},"level":{"a":true,"h":"Level","n":"level","r":false,"sh":"Administrative level of the boundary (e.g., -6, -4, -2, top)","t":"`$STRING`","key$":"level","index$":1},"place":{"a":true,"h":"Place","n":"place","r":false,"sh":"Name of the place","t":"`$STRING`","key$":"place","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Type of place (e.g., village, city, town)","t":"`$STRING`","key$":"type","index$":3},"wayName":{"a":true,"h":"Way Name","n":"wayName","r":false,"sh":"Name of the street or road","t":"`$STRING`","key$":"wayName","index$":4},"wayRef":{"a":true,"h":"Way Ref","n":"wayRef","r":false,"sh":"Reference identifier for the way (e.g., road number)","t":"`$STRING`","key$":"wayRef","index$":5}},"name":"lonlongitude","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /textParts/lat={latitude}/lon={longitude}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":51.3034,"k":"param","n":"latitude","or":"latitude","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":-0.3063,"k":"param","n":"longitude","or":"longitude","r":true,"t":"`$NUMBER`","index$":1}],"query":[{"a":true,"k":"query","n":"key","or":"key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/textParts/lat={latitude}/lon={longitude}","q":{"exist":["key","latitude","longitude"]},"r":{},"s":[{"lit":"textParts"},{"lit":"lat={latitude}"},{"lit":"lon={longitude}"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lonlongitude","name__orig":"lonlongitude","Name":"Lonlongitude","name_":"lonlongitude","name-":"lonlongitude","NAME":"LONLONGITUDE","index$":0}, {"active":true,"entity":"lonlongitude","key$":"BasicLonlongitudeFlow","kind":"basic","name":"BasicLonlongitudeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"latitude":"latitude01","longitude":"longitude01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"lonlongitude_ref01"}}],"index$":0}]}, 'Lonlongitude', {"GET /textParts/lat={latitude}/lon={longitude}":{"protocol":"http","parameters":[{"name":"latitude","in":"path","required":true,"description":"Latitude coordinate","schema":{"type":"number","format":"double","minimum":-90,"maximum":90},"example":51.3034,"index$":0},{"name":"longitude","in":"path","required":true,"description":"Longitude coordinate","schema":{"type":"number","format":"double","minimum":-180,"maximum":180},"example":-0.3063,"index$":1},{"name":"key","in":"query","required":false,"description":"API key (required for paid tier at api.geodescription.com)","schema":{"type":"string"},"index$":2}]}})
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
    ['lonlongitude01','lonlongitude02','lonlongitude03','latitude01','longitude01'],
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
  
