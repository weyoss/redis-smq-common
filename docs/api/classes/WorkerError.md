[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerError

# Class: WorkerError

## Hierarchy

- [`RedisSMQError`](RedisSMQError.md)

  ↳ **`WorkerError`**

  ↳↳ [`WorkerThreadError`](WorkerThreadError.md)

  ↳↳ [`WorkerPayloadRequiredError`](WorkerPayloadRequiredError.md)

  ↳↳ [`WorkerAlreadyRunningError`](WorkerAlreadyRunningError.md)

  ↳↳ [`WorkerAlreadyDownError`](WorkerAlreadyDownError.md)

## Table of contents

### Constructors

- [constructor](WorkerError.md#constructor)

### Accessors

- [name](WorkerError.md#name)

## Constructors

### constructor

• **new WorkerError**(`message?`): [`WorkerError`](WorkerError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`WorkerError`](WorkerError.md)

#### Inherited from

[RedisSMQError](RedisSMQError.md).[constructor](RedisSMQError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

RedisSMQError.name
