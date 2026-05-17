<?php
declare(strict_types=1);

// Geodescription SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GeodescriptionUtility::setRegistrar(function (GeodescriptionUtility $u): void {
    $u->clean = [GeodescriptionClean::class, 'call'];
    $u->done = [GeodescriptionDone::class, 'call'];
    $u->make_error = [GeodescriptionMakeError::class, 'call'];
    $u->feature_add = [GeodescriptionFeatureAdd::class, 'call'];
    $u->feature_hook = [GeodescriptionFeatureHook::class, 'call'];
    $u->feature_init = [GeodescriptionFeatureInit::class, 'call'];
    $u->fetcher = [GeodescriptionFetcher::class, 'call'];
    $u->make_fetch_def = [GeodescriptionMakeFetchDef::class, 'call'];
    $u->make_context = [GeodescriptionMakeContext::class, 'call'];
    $u->make_options = [GeodescriptionMakeOptions::class, 'call'];
    $u->make_request = [GeodescriptionMakeRequest::class, 'call'];
    $u->make_response = [GeodescriptionMakeResponse::class, 'call'];
    $u->make_result = [GeodescriptionMakeResult::class, 'call'];
    $u->make_point = [GeodescriptionMakePoint::class, 'call'];
    $u->make_spec = [GeodescriptionMakeSpec::class, 'call'];
    $u->make_url = [GeodescriptionMakeUrl::class, 'call'];
    $u->param = [GeodescriptionParam::class, 'call'];
    $u->prepare_auth = [GeodescriptionPrepareAuth::class, 'call'];
    $u->prepare_body = [GeodescriptionPrepareBody::class, 'call'];
    $u->prepare_headers = [GeodescriptionPrepareHeaders::class, 'call'];
    $u->prepare_method = [GeodescriptionPrepareMethod::class, 'call'];
    $u->prepare_params = [GeodescriptionPrepareParams::class, 'call'];
    $u->prepare_path = [GeodescriptionPreparePath::class, 'call'];
    $u->prepare_query = [GeodescriptionPrepareQuery::class, 'call'];
    $u->result_basic = [GeodescriptionResultBasic::class, 'call'];
    $u->result_body = [GeodescriptionResultBody::class, 'call'];
    $u->result_headers = [GeodescriptionResultHeaders::class, 'call'];
    $u->transform_request = [GeodescriptionTransformRequest::class, 'call'];
    $u->transform_response = [GeodescriptionTransformResponse::class, 'call'];
});
