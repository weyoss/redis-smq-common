>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LockError

# Class: LockError

## Hierarchy

- [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

  ↳ **`LockError`**

  ↳↳ [`LockAbortError`](docs/api/classes/LockAbortError.md)

  ↳↳ [`LockAcquireError`](docs/api/classes/LockAcquireError.md)

  ↳↳ [`LockExtendError`](docs/api/classes/LockExtendError.md)

  ↳↳ [`LockMethodNotAllowedError`](docs/api/classes/LockMethodNotAllowedError.md)

  ↳↳ [`LockNotAcquiredError`](docs/api/classes/LockNotAcquiredError.md)

  ↳↳ [`LockNotReleasedError`](docs/api/classes/LockNotReleasedError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/LockError.md#constructor)

### Properties

- [message](docs/api/classes/LockError.md#message)
- [stack](docs/api/classes/LockError.md#stack)
- [prepareStackTrace](docs/api/classes/LockError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/LockError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/LockError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/LockError.md#capturestacktrace)

## Constructors

### constructor

• **new LockError**(`message?`): [`LockError`](docs/api/classes/LockError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`LockError`](docs/api/classes/LockError.md)

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
