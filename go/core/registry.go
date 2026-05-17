package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewLonlongitudeEntityFunc func(client *GeodescriptionSDK, entopts map[string]any) GeodescriptionEntity

var NewReverseGeocodingEntityFunc func(client *GeodescriptionSDK, entopts map[string]any) GeodescriptionEntity

var NewTextPartEntityFunc func(client *GeodescriptionSDK, entopts map[string]any) GeodescriptionEntity

