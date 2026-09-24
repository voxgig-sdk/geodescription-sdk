
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeodescriptionSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GeodescriptionSDK.test()
    equal(testsdk instanceof GeodescriptionSDK, true,
      'GeodescriptionSDK.test() must return a client synchronously')
  })

})
