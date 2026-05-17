-- Geodescription SDK error

local GeodescriptionError = {}
GeodescriptionError.__index = GeodescriptionError


function GeodescriptionError.new(code, msg, ctx)
  local self = setmetatable({}, GeodescriptionError)
  self.is_sdk_error = true
  self.sdk = "Geodescription"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GeodescriptionError:error()
  return self.msg
end


function GeodescriptionError:__tostring()
  return self.msg
end


return GeodescriptionError
