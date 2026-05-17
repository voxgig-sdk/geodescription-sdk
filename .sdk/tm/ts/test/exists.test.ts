
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeodescriptionSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GeodescriptionSDK.test()
    equal(null !== testsdk, true)
  })

})
