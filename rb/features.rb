# Geodescription SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GeodescriptionFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeodescriptionBaseFeature.new
    when "ratelimit"
      GeodescriptionRatelimitFeature.new
    when "retry"
      GeodescriptionRetryFeature.new
    when "test"
      GeodescriptionTestFeature.new
    when "timeout"
      GeodescriptionTimeoutFeature.new
    else
      GeodescriptionBaseFeature.new
    end
  end
end
