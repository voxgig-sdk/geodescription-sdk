# Geodescription SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GeodescriptionFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeodescriptionBaseFeature.new
    when "test"
      GeodescriptionTestFeature.new
    else
      GeodescriptionBaseFeature.new
    end
  end
end
