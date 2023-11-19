>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / CallbackInvalidReplyError

# Class: CallbackInvalidReplyError

## Hierarchy

- [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

  ↳ **`CallbackInvalidReplyError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/CallbackInvalidReplyError.md#constructor)

### Properties

- [message](docs/api/classes/CallbackInvalidReplyError.md#message)
- [stack](docs/api/classes/CallbackInvalidReplyError.md#stack)
- [prepareStackTrace](docs/api/classes/CallbackInvalidReplyError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/CallbackInvalidReplyError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/CallbackInvalidReplyError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/CallbackInvalidReplyError.md#capturestacktrace)

## Constructors

### constructor

• **new CallbackInvalidReplyError**(): [`CallbackInvalidReplyError`](docs/api/classes/CallbackInvalidReplyError.md)

#### Returns

[`CallbackInvalidReplyError`](docs/api/classes/CallbackInvalidReplyError.md)

#### Overrides

[RedisSMQError](docs/api/classes/RedisSMQError.md).[constructor](docs/api/classes/RedisSMQError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[RedisSMQError](docs/api/classes/RedisSMQError.md).[message](docs/api/classes/RedisSMQError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RedisSMQError](docs/api/classes/RedisSMQError.md).[stack](docs/api/classes/RedisSMQError.md#stack)

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

[RedisSMQError](docs/api/classes/RedisSMQError.md).[prepareStackTrace](docs/api/classes/RedisSMQError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[RedisSMQError](docs/api/classes/RedisSMQError.md).[stackTraceLimit](docs/api/classes/RedisSMQError.md#stacktracelimit)

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

[RedisSMQError](docs/api/classes/RedisSMQError.md).[captureStackTrace](docs/api/classes/RedisSMQError.md#capturestacktrace)
