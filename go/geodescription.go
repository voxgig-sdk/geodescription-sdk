package voxgiggeodescriptionsdk

import (
	"github.com/voxgig-sdk/geodescription-sdk/go/core"
	"github.com/voxgig-sdk/geodescription-sdk/go/entity"
	"github.com/voxgig-sdk/geodescription-sdk/go/feature"
	_ "github.com/voxgig-sdk/geodescription-sdk/go/utility"
)

// Type aliases preserve external API.
type GeodescriptionSDK = core.GeodescriptionSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GeodescriptionEntity = core.GeodescriptionEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GeodescriptionError = core.GeodescriptionError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewLonlongitudeEntityFunc = func(client *core.GeodescriptionSDK, entopts map[string]any) core.GeodescriptionEntity {
		return entity.NewLonlongitudeEntity(client, entopts)
	}
	core.NewReverseGeocodingEntityFunc = func(client *core.GeodescriptionSDK, entopts map[string]any) core.GeodescriptionEntity {
		return entity.NewReverseGeocodingEntity(client, entopts)
	}
	core.NewTextPartEntityFunc = func(client *core.GeodescriptionSDK, entopts map[string]any) core.GeodescriptionEntity {
		return entity.NewTextPartEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGeodescriptionSDK = core.NewGeodescriptionSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
