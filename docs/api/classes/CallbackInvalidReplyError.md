[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / CallbackInvalidReplyError

# Class: CallbackInvalidReplyError

## Hierarchy

- [`PanicError`](PanicError.md)

  ↳ **`CallbackInvalidReplyError`**

## Table of contents

### Constructors

- [constructor](CallbackInvalidReplyError.md#constructor)

### Properties

- [cause](CallbackInvalidReplyError.md#cause)
- [message](CallbackInvalidReplyError.md#message)
- [stack](CallbackInvalidReplyError.md#stack)
- [prepareStackTrace](CallbackInvalidReplyError.md#preparestacktrace)
- [stackTraceLimit](CallbackInvalidReplyError.md#stacktracelimit)

### Accessors

- [name](CallbackInvalidReplyError.md#name)

### Methods

- [captureStackTrace](CallbackInvalidReplyError.md#capturestacktrace)

## Constructors

### constructor

• **new CallbackInvalidReplyError**(): [`CallbackInvalidReplyError`](CallbackInvalidReplyError.md)

#### Returns

[`CallbackInvalidReplyError`](CallbackInvalidReplyError.md)

#### Overrides

[PanicError](PanicError.md).[constructor](PanicError.md#constructor)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[PanicError](PanicError.md).[cause](PanicError.md#cause)

___

### message

• **message**: `string`

#### Inherited from

[PanicError](PanicError.md).[message](PanicError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[PanicError](PanicError.md).[stack](PanicError.md#stack)

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

[PanicError](PanicError.md).[prepareStackTrace](PanicError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[PanicError](PanicError.md).[stackTraceLimit](PanicError.md#stacktracelimit)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

PanicError.name

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

[PanicError](PanicError.md).[captureStackTrace](PanicError.md#capturestacktrace)
