# Geodescription SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GeodescriptionUtility.registrar = ->(u) {
  u.clean = GeodescriptionUtilities::Clean
  u.done = GeodescriptionUtilities::Done
  u.make_error = GeodescriptionUtilities::MakeError
  u.feature_add = GeodescriptionUtilities::FeatureAdd
  u.feature_hook = GeodescriptionUtilities::FeatureHook
  u.feature_init = GeodescriptionUtilities::FeatureInit
  u.fetcher = GeodescriptionUtilities::Fetcher
  u.make_fetch_def = GeodescriptionUtilities::MakeFetchDef
  u.make_context = GeodescriptionUtilities::MakeContext
  u.make_options = GeodescriptionUtilities::MakeOptions
  u.make_request = GeodescriptionUtilities::MakeRequest
  u.make_response = GeodescriptionUtilities::MakeResponse
  u.make_result = GeodescriptionUtilities::MakeResult
  u.make_point = GeodescriptionUtilities::MakePoint
  u.make_spec = GeodescriptionUtilities::MakeSpec
  u.make_url = GeodescriptionUtilities::MakeUrl
  u.param = GeodescriptionUtilities::Param
  u.prepare_auth = GeodescriptionUtilities::PrepareAuth
  u.prepare_body = GeodescriptionUtilities::PrepareBody
  u.prepare_headers = GeodescriptionUtilities::PrepareHeaders
  u.prepare_method = GeodescriptionUtilities::PrepareMethod
  u.prepare_params = GeodescriptionUtilities::PrepareParams
  u.prepare_path = GeodescriptionUtilities::PreparePath
  u.prepare_query = GeodescriptionUtilities::PrepareQuery
  u.result_basic = GeodescriptionUtilities::ResultBasic
  u.result_body = GeodescriptionUtilities::ResultBody
  u.result_headers = GeodescriptionUtilities::ResultHeaders
  u.transform_request = GeodescriptionUtilities::TransformRequest
  u.transform_response = GeodescriptionUtilities::TransformResponse
}
