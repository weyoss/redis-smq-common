[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisClientError

# Class: RedisClientError

## Hierarchy

- [`RedisSMQError`](RedisSMQError.md)

  ↳ **`RedisClientError`**

  ↳↳ [`WatchedKeysChangedError`](WatchedKeysChangedError.md)

## Table of contents

### Constructors

- [constructor](RedisClientError.md#constructor)

### Accessors

- [name](RedisClientError.md#name)

## Constructors

### constructor

• **new RedisClientError**(`message?`): [`RedisClientError`](RedisClientError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisClientError`](RedisClientError.md)

#### Inherited from

[RedisSMQError](RedisSMQError.md).[constructor](RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
