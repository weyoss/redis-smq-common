>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockAcquireError

# Class: LockAcquireError

## Hierarchy

- [`LockError`](../classes/LockError.md)

  ↳ **`LockAcquireError`**

## Table of contents

### Constructors

- [constructor](../classes/LockAcquireError.md#constructor)

### Properties

- [message](../classes/LockAcquireError.md#message)
- [stack](../classes/LockAcquireError.md#stack)
- [prepareStackTrace](../classes/LockAcquireError.md#preparestacktrace)
- [stackTraceLimit](../classes/LockAcquireError.md#stacktracelimit)

### Accessors

- [name](../classes/LockAcquireError.md#name)

### Methods

- [captureStackTrace](../classes/LockAcquireError.md#capturestacktrace)

## Constructors

### constructor

• **new LockAcquireError**(`message?`): [`LockAcquireError`](../classes/LockAcquireError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`LockAcquireError`](../classes/LockAcquireError.md)

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
