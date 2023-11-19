>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisSMQError

# Class: RedisSMQError

## Hierarchy

- `Error`

  ↳ **`RedisSMQError`**

  ↳↳ [`CallbackEmptyReplyError`](../classes/CallbackEmptyReplyError.md)

  ↳↳ [`CallbackInvalidReplyError`](../classes/CallbackInvalidReplyError.md)

  ↳↳ [`PanicError`](../classes/PanicError.md)

  ↳↳ [`LoggerError`](../classes/LoggerError.md)

  ↳↳ [`TickerError`](../classes/TickerError.md)

  ↳↳ [`LockError`](../classes/LockError.md)

  ↳↳ [`RedisClientError`](../classes/RedisClientError.md)

  ↳↳ [`PowerSwitchError`](../classes/PowerSwitchError.md)

## Table of contents

### Constructors

- [constructor](../classes/RedisSMQError.md#constructor)

### Properties

- [message](../classes/RedisSMQError.md#message)
- [stack](../classes/RedisSMQError.md#stack)
- [prepareStackTrace](../classes/RedisSMQError.md#preparestacktrace)
- [stackTraceLimit](../classes/RedisSMQError.md#stacktracelimit)

### Accessors

- [name](../classes/RedisSMQError.md#name)

### Methods

- [captureStackTrace](../classes/RedisSMQError.md#capturestacktrace)

## Constructors

### constructor

• **new RedisSMQError**(`message?`): [`RedisSMQError`](../classes/RedisSMQError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisSMQError`](../classes/RedisSMQError.md)

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

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

Error.captureStackTrace
