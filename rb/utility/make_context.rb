# Geodescription SDK utility: make_context
require_relative '../core/context'
module GeodescriptionUtilities
  MakeContext = ->(ctxmap, basectx) {
    GeodescriptionContext.new(ctxmap, basectx)
  }
end
