# Geodescription SDK feature factory

from geodescription_sdk.feature.base_feature import GeodescriptionBaseFeature
from geodescription_sdk.feature.test_feature import GeodescriptionTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GeodescriptionBaseFeature(),
        "test": lambda: GeodescriptionTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
