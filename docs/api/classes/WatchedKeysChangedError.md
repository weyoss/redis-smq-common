[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WatchedKeysChangedError

# Class: WatchedKeysChangedError

## Hierarchy

- [`RedisClientError`](RedisClientError.md)

  ↳ **`WatchedKeysChangedError`**

## Table of contents

### Constructors

- [constructor](WatchedKeysChangedError.md#constructor)

### Accessors

- [name](WatchedKeysChangedError.md#name)

## Constructors

### constructor

• **new WatchedKeysChangedError**(`msg?`): [`WatchedKeysChangedError`](WatchedKeysChangedError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `'One (or more) of the watched keys has been changed'` |

#### Returns

[`WatchedKeysChangedError`](WatchedKeysChangedError.md)

#### Overrides

[RedisClientError](RedisClientError.md).[constructor](RedisClientError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisClientError.name
