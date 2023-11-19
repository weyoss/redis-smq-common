>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockExtendError

# Class: LockExtendError

## Hierarchy

- [`LockError`](../classes/LockError.md)

  ↳ **`LockExtendError`**

## Table of contents

### Constructors

- [constructor](../classes/LockExtendError.md#constructor)

### Properties

- [message](../classes/LockExtendError.md#message)
- [stack](../classes/LockExtendError.md#stack)
- [prepareStackTrace](../classes/LockExtendError.md#preparestacktrace)
- [stackTraceLimit](../classes/LockExtendError.md#stacktracelimit)

### Accessors

- [name](../classes/LockExtendError.md#name)

### Methods

- [captureStackTrace](../classes/LockExtendError.md#capturestacktrace)

## Constructors

### constructor

• **new LockExtendError**(`message?`): [`LockExtendError`](../classes/LockExtendError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`LockExtendError`](../classes/LockExtendError.md)

#### Overrides

[LockError](../classes/LockError.md).[constructor](../classes/LockError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[LockError](../classes/LockError.md).[message](../classes/LockError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[LockError](../classes/LockError.md).[stack](../classes/LockError.md#stack)

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

[LockError](../classes/LockError.md).[prepareStackTrace](../classes/LockError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[LockError](../classes/LockError.md).[stackTraceLimit](../classes/LockError.md#stacktracelimit)

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

[LockError](../classes/LockError.md).[captureStackTrace](../classes/LockError.md#capturestacktrace)
