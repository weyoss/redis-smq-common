>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / CallbackEmptyReplyError

# Class: CallbackEmptyReplyError

## Hierarchy

- [`RedisSMQError`](../classes/RedisSMQError.md)

  ↳ **`CallbackEmptyReplyError`**

## Table of contents

### Constructors

- [constructor](../classes/CallbackEmptyReplyError.md#constructor)

### Properties

- [message](../classes/CallbackEmptyReplyError.md#message)
- [stack](../classes/CallbackEmptyReplyError.md#stack)
- [prepareStackTrace](../classes/CallbackEmptyReplyError.md#preparestacktrace)
- [stackTraceLimit](../classes/CallbackEmptyReplyError.md#stacktracelimit)

### Accessors

- [name](../classes/CallbackEmptyReplyError.md#name)

### Methods

- [captureStackTrace](../classes/CallbackEmptyReplyError.md#capturestacktrace)

## Constructors

### constructor

• **new CallbackEmptyReplyError**(): [`CallbackEmptyReplyError`](../classes/CallbackEmptyReplyError.md)

#### Returns

[`CallbackEmptyReplyError`](../classes/CallbackEmptyReplyError.md)

#### Overrides

[RedisSMQError](../classes/RedisSMQError.md).[constructor](../classes/RedisSMQError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[RedisSMQError](../classes/RedisSMQError.md).[message](../classes/RedisSMQError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RedisSMQError](../classes/RedisSMQError.md).[stack](../classes/RedisSMQError.md#stack)

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

[RedisSMQError](../classes/RedisSMQError.md).[prepareStackTrace](../classes/RedisSMQError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[RedisSMQError](../classes/RedisSMQError.md).[stackTraceLimit](../classes/RedisSMQError.md#stacktracelimit)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name

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

[RedisSMQError](../classes/RedisSMQError.md).[captureStackTrace](../classes/RedisSMQError.md#capturestacktrace)
