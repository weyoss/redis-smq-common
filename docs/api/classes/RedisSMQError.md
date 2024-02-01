[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisSMQError

# Class: RedisSMQError

## Hierarchy

- `Error`

  ↳ **`RedisSMQError`**

  ↳↳ [`CallbackEmptyReplyError`](CallbackEmptyReplyError.md)

  ↳↳ [`CallbackInvalidReplyError`](CallbackInvalidReplyError.md)

  ↳↳ [`PanicError`](PanicError.md)

  ↳↳ [`LoggerError`](LoggerError.md)

  ↳↳ [`TickerError`](TickerError.md)

  ↳↳ [`LockError`](LockError.md)

  ↳↳ [`RedisClientError`](RedisClientError.md)

## Table of contents

### Constructors

- [constructor](RedisSMQError.md#constructor)

### Accessors

- [name](RedisSMQError.md#name)

## Constructors

### constructor

• **new RedisSMQError**(`message?`): [`RedisSMQError`](RedisSMQError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisSMQError`](RedisSMQError.md)

#### Overrides

Error.constructor

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name
