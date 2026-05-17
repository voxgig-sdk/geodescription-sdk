
import { Context } from './Context'


class GeodescriptionError extends Error {

  isGeodescriptionError = true

  sdk = 'Geodescription'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GeodescriptionError
}

