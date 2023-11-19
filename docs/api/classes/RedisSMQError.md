>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisSMQError

# Class: RedisSMQError

## Hierarchy

- `Error`

  ↳ **`RedisSMQError`**

  ↳↳ [`CallbackEmptyReplyError`](docs/api/classes/CallbackEmptyReplyError.md)

  ↳↳ [`CallbackInvalidReplyError`](docs/api/classes/CallbackInvalidReplyError.md)

  ↳↳ [`PanicError`](docs/api/classes/PanicError.md)

  ↳↳ [`LoggerError`](docs/api/classes/LoggerError.md)

  ↳↳ [`TickerError`](docs/api/classes/TickerError.md)

  ↳↳ [`LockError`](docs/api/classes/LockError.md)

  ↳↳ [`RedisClientError`](docs/api/classes/RedisClientError.md)

  ↳↳ [`PowerSwitchError`](docs/api/classes/PowerSwitchError.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/RedisSMQError.md#constructor)

### Properties

- [message](docs/api/classes/RedisSMQError.md#message)
- [stack](docs/api/classes/RedisSMQError.md#stack)
- [prepareStackTrace](docs/api/classes/RedisSMQError.md#preparestacktrace)
- [stackTraceLimit](docs/api/classes/RedisSMQError.md#stacktracelimit)

### Accessors

- [name](docs/api/classes/RedisSMQError.md#name)

### Methods

- [captureStackTrace](docs/api/classes/RedisSMQError.md#capturestacktrace)

## Constructors

### constructor

• **new RedisSMQError**(`message?`): [`RedisSMQError`](docs/api/classes/RedisSMQError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`RedisSMQError`](docs/api/classes/RedisSMQError.md)

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Error.name

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

Error.captureStackTrace
