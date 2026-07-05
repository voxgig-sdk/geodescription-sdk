# Geodescription TypeScript SDK Reference

Complete API reference for the Geodescription TypeScript SDK.


## GeodescriptionSDK

### Constructor

```ts
new GeodescriptionSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `GeodescriptionSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = GeodescriptionSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `GeodescriptionSDK` instance in test mode.


### Instance Methods

#### `Lonlongitude(data?: object)`

Create a new `Lonlongitude` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LonlongitudeEntity` instance.

#### `ReverseGeocoding(data?: object)`

Create a new `ReverseGeocoding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReverseGeocodingEntity` instance.

#### `TextPart(data?: object)`

Create a new `TextPart` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TextPartEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `GeodescriptionSDK.test()`.

**Returns:** `GeodescriptionSDK` instance in test mode.


---

## LonlongitudeEntity

```ts
const lonlongitude = client.Lonlongitude()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boundary` | `string` | No |  |
| `level` | `string` | No |  |
| `place` | `string` | No |  |
| `type` | `string` | No |  |
| `way_name` | `string` | No |  |
| `way_ref` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Lonlongitude().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LonlongitudeEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeodescriptionSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReverseGeocodingEntity

```ts
const reverse_geocoding = client.ReverseGeocoding()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReverseGeocoding().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReverseGeocodingEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeodescriptionSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TextPartEntity

```ts
const text_part = client.TextPart()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boundary` | `string` | No |  |
| `level` | `string` | No |  |
| `place` | `string` | No |  |
| `type` | `string` | No |  |
| `way_name` | `string` | No |  |
| `way_ref` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TextPart().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TextPartEntity` instance with the same client and
options.

#### `client()`

Return the parent `GeodescriptionSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new GeodescriptionSDK({
  feature: {
    test: { active: true },
  }
})
```

