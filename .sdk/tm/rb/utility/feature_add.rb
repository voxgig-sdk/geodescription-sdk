# Geodescription SDK utility: feature_add
module GeodescriptionUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
