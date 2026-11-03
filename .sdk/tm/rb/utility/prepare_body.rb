# Geodescription SDK utility: prepare_body
require_relative 'media'
module GeodescriptionUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GeodescriptionUtilities.raw_body(ctx.reqdata) if GeodescriptionUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
