# Geodescription SDK utility: make_context

from projectname_sdk.core.context import GeodescriptionContext


def make_context_util(ctxmap, basectx):
    return GeodescriptionContext(ctxmap, basectx)
