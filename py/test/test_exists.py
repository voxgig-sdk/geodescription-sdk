# ProjectName SDK exists test

import pytest
from geodescription_sdk import GeodescriptionSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GeodescriptionSDK.test(None, None)
        assert testsdk is not None
