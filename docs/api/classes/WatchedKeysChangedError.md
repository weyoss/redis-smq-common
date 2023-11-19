>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WatchedKeysChangedError

# Class: WatchedKeysChangedError

## Hierarchy

- [`RedisClientError`](docs/api/classes/RedisClientError.md)

  ↳ **`WatchedKeysChangedError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/WatchedKeysChangedError.md#constructor)

### Properties

- [message](docs/api/classes/WatchedKeysChangedError.md#message)
- [stack](docs/api/classes/WatchedKeysChangedError.md#stack)
- [prepareStackTrace](docs/api/classes/WatchedKeysChangedError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/WatchedKeysChangedError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/WatchedKeysChangedError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/WatchedKeysChangedError.md#capturestacktrace)

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

## Properties

### message

• **message**: `string`

#### Inherited from

[RedisClientError](docs/api/classes/RedisClientError.md).[message](docs/api/classes/RedisClientError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RedisClientError](docs/api/classes/RedisClientError.md).[stack](docs/api/classes/RedisClientError.md#stack)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[RedisClientError](docs/api/classes/RedisClientError.md).[prepareStackTrace](docs/api/classes/RedisClientError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[RedisClientError](docs/api/classes/RedisClientError.md).[stackTraceLimit](docs/api/classes/RedisClientError.md#stacktracelimit)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisClientError.name

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[RedisClientError](docs/api/classes/RedisClientError.md).[captureStackTrace](docs/api/classes/RedisClientError.md#capturestacktrace)
