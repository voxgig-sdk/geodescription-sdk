# Geodescription SDK utility: make_context

from core.context import GeodescriptionContext


def make_context_util(ctxmap, basectx):
    return GeodescriptionContext(ctxmap, basectx)
