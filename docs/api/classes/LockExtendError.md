>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockExtendError

# Class: LockExtendError

## Hierarchy

- [`LockError`](docs/api/classes/LockError.md)

  ↳ **`LockExtendError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/LockExtendError.md#constructor)

### Properties

- [message](docs/api/classes/LockExtendError.md#message)
- [stack](docs/api/classes/LockExtendError.md#stack)
- [prepareStackTrace](docs/api/classes/LockExtendError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/LockExtendError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/LockExtendError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/LockExtendError.md#capturestacktrace)

## Constructors

### constructor

• **new LockExtendError**(`message?`): [`LockExtendError`](docs/api/classes/LockExtendError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`LockExtendError`](docs/api/classes/LockExtendError.md)

#### Overrides

[LockError](docs/api/classes/LockError.md).[constructor](docs/api/classes/LockError.md#constructor)

## Properties

### message

• **message**: `string`

#### Inherited from

[LockError](docs/api/classes/LockError.md).[message](docs/api/classes/LockError.md#message)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[LockError](docs/api/classes/LockError.md).[stack](docs/api/classes/LockError.md#stack)

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

[LockError](docs/api/classes/LockError.md).[prepareStackTrace](docs/api/classes/LockError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[LockError](docs/api/classes/LockError.md).[stackTraceLimit](docs/api/classes/LockError.md#stacktracelimit)

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

[LockError](docs/api/classes/LockError.md).[captureStackTrace](docs/api/classes/LockError.md#capturestacktrace)
