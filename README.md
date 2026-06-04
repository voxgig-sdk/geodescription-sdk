# Geodescription SDK

Reverse geocoding that turns latitude/longitude into human-readable address-style descriptions

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About GeoDescription API

GeoDescription is a reverse geocoding API run by [GMAC SYSTEMS LTD](https://geodescription.com/), a company registered in England and Wales. Given a pair of geographic coordinates, it returns a human-readable description of the place, assembled from OpenStreetMap data.

What you get from the API:

- A single-string description of a coordinate, e.g. `"Leatherhead Road (A24), Ashtead, Mole Valley, Surrey, England, United Kingdom"` (`/text/lat={lat}/lon={lon}`).
- A structured JSON breakdown of the same description split into parts such as `wayName`, `wayRef`, `place`, `type`, `boundary`, and `level` (`/textParts/lat={lat}/lon={lon}`).

Operational notes:

- The free host `https://free.geodescription.com` allows roughly 1 request per second and does not require an API key.
- Paid tiers are served from `https://api.geodescription.com` and accept a `key={APIKEY}` path segment, with higher published rate limits.
- CORS is disabled on the free endpoint, so browser-side calls may need a proxy.

## Try it

**TypeScript**
```bash
npm install geodescription
```

**Python**
```bash
pip install geodescription-sdk
```

**PHP**
```bash
composer require voxgig/geodescription-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/geodescription-sdk/go
```

**Ruby**
```bash
gem install geodescription-sdk
```

**Lua**
```bash
luarocks install geodescription-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GeodescriptionSDK } from 'geodescription'

const client = new GeodescriptionSDK({})

// List all lonlongitudes
const lonlongitudes = await client.Lonlongitude().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o geodescription-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "geodescription": {
      "command": "/abs/path/to/geodescription-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Lonlongitude** | Coordinate input pair (latitude and longitude) used as path parameters on every reverse-geocoding call, e.g. `/text/lat={lat}/lon={lon}`. | `/textParts/lat={latitude}/lon={longitude}` |
| **ReverseGeocoding** | The core lookup operation that turns a coordinate into a single human-readable location description via `GET /text/lat={lat}/lon={lon}`. | `/text` |
| **TextPart** | Structured component of a location description (e.g. `wayName`, `wayRef`, `place`, `type`, `boundary`, `level`) returned by `GET /textParts/lat={lat}/lon={lon}`. | `/textParts` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from geodescription_sdk import GeodescriptionSDK

client = GeodescriptionSDK({})

# List all lonlongitudes
lonlongitudes, err = client.Lonlongitude(None).list(None, None)
```

### PHP

```php
<?php
require_once 'geodescription_sdk.php';

$client = new GeodescriptionSDK([]);

// List all lonlongitudes
[$lonlongitudes, $err] = $client->Lonlongitude(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/geodescription-sdk/go"

client := sdk.NewGeodescriptionSDK(map[string]any{})

// List all lonlongitudes
lonlongitudes, err := client.Lonlongitude(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Geodescription_sdk"

client = GeodescriptionSDK.new({})

# List all lonlongitudes
lonlongitudes, err = client.Lonlongitude(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("geodescription_sdk")

local client = sdk.new({})

-- List all lonlongitudes
local lonlongitudes, err = client:Lonlongitude(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GeodescriptionSDK.test()
const result = await client.Lonlongitude().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GeodescriptionSDK.test(None, None)
result, err = client.Lonlongitude(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GeodescriptionSDK::test(null, null);
[$result, $err] = $client->Lonlongitude(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Lonlongitude(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GeodescriptionSDK.test(nil, nil)
result, err = client.Lonlongitude(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Lonlongitude(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the GeoDescription API

- Upstream: [https://geodescription.com/](https://geodescription.com/)
- API docs: [https://geodescription.com/docs](https://geodescription.com/docs)

- Location data is derived from OpenStreetMap and remains (c) OpenStreetMap contributors.
- Attribution to OpenStreetMap is expected when displaying results.
- The free tier at `https://free.geodescription.com` is rate-limited; paid tiers require an API key.
- Service is operated by GMAC SYSTEMS LTD (registered in England and Wales).

---

Generated from the GeoDescription API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
