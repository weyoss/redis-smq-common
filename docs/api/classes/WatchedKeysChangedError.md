>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WatchedKeysChangedError

# Class: WatchedKeysChangedError

## Hierarchy

- [`RedisClientError`](../classes/RedisClientError.md)

  ↳ **`WatchedKeysChangedError`**

## Table of contents

### Constructors

- [constructor](../classes/WatchedKeysChangedError.md#constructor)

### Properties

- [message](../classes/WatchedKeysChangedError.md#message)
- [stack](../classes/WatchedKeysChangedError.md#stack)
- [prepareStackTrace](../classes/WatchedKeysChangedError.md#preparestacktrace)
- [stackTraceLimit](../classes/WatchedKeysChangedError.md#stacktracelimit)

### Accessors

- [name](../classes/WatchedKeysChangedError.md#name)

### Methods

- [captureStackTrace](../classes/WatchedKeysChangedError.md#capturestacktrace)

## Constructors

### constructor

• **new WatchedKeysChangedError**(`msg?`): [`WatchedKeysChangedError`](../classes/WatchedKeysChangedError.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `'One (or more) of the watched keys has been changed'` |

#### Returns

[`WatchedKeysChangedError`](../classes/WatchedKeysChangedError.md)

#### Overrides

[RedisClientError](../classes/RedisClientError.md).[constructor](../classes/RedisClientError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[RedisClientError](../classes/RedisClientError.md).[message](../classes/RedisClientError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RedisClientError](../classes/RedisClientError.md).[stack](../classes/RedisClientError.md#stack)

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

[RedisClientError](../classes/RedisClientError.md).[prepareStackTrace](../classes/RedisClientError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[RedisClientError](../classes/RedisClientError.md).[stackTraceLimit](../classes/RedisClientError.md#stacktracelimit)

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

[RedisClientError](../classes/RedisClientError.md).[captureStackTrace](../classes/RedisClientError.md#capturestacktrace)
