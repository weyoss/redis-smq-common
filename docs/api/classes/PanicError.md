>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / PanicError

# Class: PanicError

## Hierarchy

- [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

  ↳ **`PanicError`**

  ↳↳ [`WorkerError`](docs/api/classes/WorkerError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/PanicError.md#constructor)

### Properties

- [message](docs/api/classes/PanicError.md#message)
- [stack](docs/api/classes/PanicError.md#stack)
- [prepareStackTrace](docs/api/classes/PanicError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/PanicError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/PanicError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/PanicError.md#capturestacktrace)

## Constructors

### constructor

• **new PanicError**(`message?`): [`PanicError`](docs/api/classes/PanicError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`PanicError`](docs/api/classes/PanicError.md)

#### Inherited from

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
