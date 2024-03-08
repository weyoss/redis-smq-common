[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / CallbackEmptyReplyError

# Class: CallbackEmptyReplyError

## Hierarchy

- [`PanicError`](PanicError.md)

  ↳ **`CallbackEmptyReplyError`**

## Table of contents

### Constructors

- [constructor](CallbackEmptyReplyError.md#constructor)

### Properties

- [cause](CallbackEmptyReplyError.md#cause)
- [message](CallbackEmptyReplyError.md#message)
- [stack](CallbackEmptyReplyError.md#stack)
- [prepareStackTrace](CallbackEmptyReplyError.md#preparestacktrace)
- [stackTraceLimit](CallbackEmptyReplyError.md#stacktracelimit)

### Accessors

- [name](CallbackEmptyReplyError.md#name)

### Methods

- [captureStackTrace](CallbackEmptyReplyError.md#capturestacktrace)

## Constructors

### constructor

• **new CallbackEmptyReplyError**(): [`CallbackEmptyReplyError`](CallbackEmptyReplyError.md)

#### Returns

[`CallbackEmptyReplyError`](CallbackEmptyReplyError.md)

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
