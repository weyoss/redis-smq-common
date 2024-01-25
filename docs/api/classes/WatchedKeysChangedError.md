[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / WatchedKeysChangedError

# Class: WatchedKeysChangedError

## Hierarchy

- [`RedisClientError`](docs/api/classes/RedisClientError.md)

  ↳ **`WatchedKeysChangedError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/WatchedKeysChangedError.md#constructor)

### Accessors

- [name](docs/api/classes/WatchedKeysChangedError.md#name)

## Constructors

### constructor

• **new WatchedKeysChangedError**(`msg?`): [`WatchedKeysChangedError`](docs/api/classes/WatchedKeysChangedError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `'One (or more) of the watched keys has been changed'` |

#### Returns

[`WatchedKeysChangedError`](docs/api/classes/WatchedKeysChangedError.md)

#### Overrides

[RedisClientError](docs/api/classes/RedisClientError.md).[constructor](docs/api/classes/RedisClientError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisClientError.name
