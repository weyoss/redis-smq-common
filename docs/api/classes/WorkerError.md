>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerError

# Class: WorkerError

## Hierarchy

- [`PanicError`](docs/api/classes/PanicError.md)

  ↳ **`WorkerError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/WorkerError.md#constructor)

### Properties

- [message](docs/api/classes/WorkerError.md#message)
- [stack](docs/api/classes/WorkerError.md#stack)
- [prepareStackTrace](docs/api/classes/WorkerError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/WorkerError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/WorkerError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/WorkerError.md#capturestacktrace)

## Constructors

### constructor

• **new WorkerError**(`message?`): [`WorkerError`](docs/api/classes/WorkerError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`WorkerError`](docs/api/classes/WorkerError.md)

#### Inherited from

[PanicError](docs/api/classes/PanicError.md).[constructor](docs/api/classes/PanicError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[PanicError](docs/api/classes/PanicError.md).[message](docs/api/classes/PanicError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[PanicError](docs/api/classes/PanicError.md).[stack](docs/api/classes/PanicError.md#stack)

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

[PanicError](docs/api/classes/PanicError.md).[prepareStackTrace](docs/api/classes/PanicError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[PanicError](docs/api/classes/PanicError.md).[stackTraceLimit](docs/api/classes/PanicError.md#stacktracelimit)

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

[PanicError](docs/api/classes/PanicError.md).[captureStackTrace](docs/api/classes/PanicError.md#capturestacktrace)
