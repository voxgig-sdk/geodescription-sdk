# Geodescription Lua SDK Reference

Complete API reference for the Geodescription Lua SDK.


## GeodescriptionSDK

### Constructor

```lua
local sdk = require("geodescription_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Lonlongitude(data)`

Create a new `Lonlongitude` entity instance. Pass `nil` for no initial data.

#### `ReverseGeocoding(data)`

Create a new `ReverseGeocoding` entity instance. Pass `nil` for no initial data.

#### `TextPart(data)`

Create a new `TextPart` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## LonlongitudeEntity

```lua
local lonlongitude = client:Lonlongitude(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boundary` | ``$STRING`` | No |  |
| `level` | ``$STRING`` | No |  |
| `place` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |
| `way_name` | ``$STRING`` | No |  |
| `way_ref` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Lonlongitude():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LonlongitudeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReverseGeocodingEntity

```lua
local reverse_geocoding = client:ReverseGeocoding(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReverseGeocoding():load({ id = "reverse_geocoding_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReverseGeocodingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TextPartEntity

```lua
local text_part = client:TextPart(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boundary` | ``$STRING`` | No |  |
| `level` | ``$STRING`` | No |  |
| `place` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |
| `way_name` | ``$STRING`` | No |  |
| `way_ref` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TextPart():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TextPartEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

