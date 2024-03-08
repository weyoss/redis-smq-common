[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockAcquireError

# Class: LockAcquireError

## Hierarchy

- [`LockError`](LockError.md)

  ↳ **`LockAcquireError`**

## Table of contents

### Constructors

- [constructor](LockAcquireError.md#constructor)

### Properties

- [cause](LockAcquireError.md#cause)
- [message](LockAcquireError.md#message)
- [stack](LockAcquireError.md#stack)
- [prepareStackTrace](LockAcquireError.md#preparestacktrace)
- [stackTraceLimit](LockAcquireError.md#stacktracelimit)

### Accessors

- [name](LockAcquireError.md#name)

### Methods

- [captureStackTrace](LockAcquireError.md#capturestacktrace)

## Constructors

### constructor

• **new LockAcquireError**(`message?`): [`LockAcquireError`](LockAcquireError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`LockAcquireError`](LockAcquireError.md)

#### Overrides

[LockError](LockError.md).[constructor](LockError.md#constructor)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[LockError](LockError.md).[cause](LockError.md#cause)

___

### message

• **message**: `string`

#### Inherited from

[LockError](LockError.md).[message](LockError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[LockError](LockError.md).[stack](LockError.md#stack)

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

[LockError](LockError.md).[prepareStackTrace](LockError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[LockError](LockError.md).[stackTraceLimit](LockError.md#stacktracelimit)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

LockError.name

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

[LockError](LockError.md).[captureStackTrace](LockError.md#capturestacktrace)
