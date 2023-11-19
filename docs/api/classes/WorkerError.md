>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerError

# Class: WorkerError

## Hierarchy

- [`PanicError`](../classes/PanicError.md)

  ↳ **`WorkerError`**

## Table of contents

### Constructors

- [constructor](../classes/WorkerError.md#constructor)

### Properties

- [message](../classes/WorkerError.md#message)
- [stack](../classes/WorkerError.md#stack)
- [prepareStackTrace](../classes/WorkerError.md#preparestacktrace)
- [stackTraceLimit](../classes/WorkerError.md#stacktracelimit)

### Accessors

- [name](../classes/WorkerError.md#name)

### Methods

- [captureStackTrace](../classes/WorkerError.md#capturestacktrace)

## Constructors

### constructor

• **new WorkerError**(`message?`): [`WorkerError`](../classes/WorkerError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`WorkerError`](../classes/WorkerError.md)

#### Inherited from

[PanicError](../classes/PanicError.md).[constructor](../classes/PanicError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[PanicError](../classes/PanicError.md).[message](../classes/PanicError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[PanicError](../classes/PanicError.md).[stack](../classes/PanicError.md#stack)

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

[PanicError](../classes/PanicError.md).[prepareStackTrace](../classes/PanicError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[PanicError](../classes/PanicError.md).[stackTraceLimit](../classes/PanicError.md#stacktracelimit)

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

[PanicError](../classes/PanicError.md).[captureStackTrace](../classes/PanicError.md#capturestacktrace)
