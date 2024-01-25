[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / RedisClientError

# Class: RedisClientError

## Hierarchy

- [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

  ↳ **`RedisClientError`**

  ↳↳ [`WatchedKeysChangedError`](docs/api/classes/WatchedKeysChangedError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/RedisClientError.md#constructor)

### Accessors

- [name](docs/api/classes/RedisClientError.md#name)

## Constructors

### constructor

• **new RedisClientError**(`message?`): [`RedisClientError`](docs/api/classes/RedisClientError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisClientError`](docs/api/classes/RedisClientError.md)

#### Inherited from

[RedisSMQError](docs/api/classes/RedisSMQError.md).[constructor](docs/api/classes/RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
