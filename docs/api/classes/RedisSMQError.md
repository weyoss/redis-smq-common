[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / RedisSMQError

# Class: RedisSMQError

## Hierarchy

- `Error`

  ↳ **`RedisSMQError`**

  ↳↳ [`CallbackEmptyReplyError`](docs/api/classes/CallbackEmptyReplyError.md)

  ↳↳ [`CallbackInvalidReplyError`](docs/api/classes/CallbackInvalidReplyError.md)

  ↳↳ [`PanicError`](docs/api/classes/PanicError.md)

  ↳↳ [`LoggerError`](docs/api/classes/LoggerError.md)

  ↳↳ [`TickerError`](docs/api/classes/TickerError.md)

  ↳↳ [`LockError`](docs/api/classes/LockError.md)

  ↳↳ [`RedisClientError`](docs/api/classes/RedisClientError.md)

  ↳↳ [`PowerSwitchError`](docs/api/classes/PowerSwitchError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/RedisSMQError.md#constructor)

### Accessors

- [name](docs/api/classes/RedisSMQError.md#name)

## Constructors

### constructor

• **new RedisSMQError**(`message?`): [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisSMQError`](docs/api/classes/RedisSMQError.md)

#### Overrides

Error.constructor

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name
