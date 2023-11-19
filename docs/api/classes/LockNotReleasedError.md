>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockNotReleasedError

# Class: LockNotReleasedError

## Hierarchy

- [`LockError`](docs/api/classes/LockError.md)

  ↳ **`LockNotReleasedError`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/LockNotReleasedError.md#constructor)

### Properties

- [message](docs/api/classes/LockNotReleasedError.md#message)
- [stack](docs/api/classes/LockNotReleasedError.md#stack)
- [prepareStackTrace](docs/api/classes/LockNotReleasedError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/LockNotReleasedError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/LockNotReleasedError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/LockNotReleasedError.md#capturestacktrace)

## Constructors

### constructor

• **new LockNotReleasedError**(`message?`): [`LockNotReleasedError`](docs/api/classes/LockNotReleasedError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`LockNotReleasedError`](docs/api/classes/LockNotReleasedError.md)

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
