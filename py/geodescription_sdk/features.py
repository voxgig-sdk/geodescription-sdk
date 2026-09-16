# Geodescription SDK feature factory

from geodescription_sdk.feature.base_feature import GeodescriptionBaseFeature
from geodescription_sdk.feature.ratelimit_feature import GeodescriptionRatelimitFeature
from geodescription_sdk.feature.retry_feature import GeodescriptionRetryFeature
from geodescription_sdk.feature.test_feature import GeodescriptionTestFeature
from geodescription_sdk.feature.timeout_feature import GeodescriptionTimeoutFeature


_FEATURES = {
    "base": lambda: GeodescriptionBaseFeature(),
    "ratelimit": lambda: GeodescriptionRatelimitFeature(),
    "retry": lambda: GeodescriptionRetryFeature(),
    "test": lambda: GeodescriptionTestFeature(),
    "timeout": lambda: GeodescriptionTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
