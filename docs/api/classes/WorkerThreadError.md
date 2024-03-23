[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerThreadError

# Class: WorkerThreadError

## Hierarchy

- [`WorkerError`](WorkerError.md)

  ↳ **`WorkerThreadError`**

## Table of contents

### Constructors

- [constructor](WorkerThreadError.md#constructor)

### Accessors

- [name](WorkerThreadError.md#name)

## Constructors

### constructor

• **new WorkerThreadError**(`msg`): [`WorkerThreadError`](WorkerThreadError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`TWorkerThreadChildMessage`](../README.md#tworkerthreadchildmessage) |

#### Returns

[`WorkerThreadError`](WorkerThreadError.md)

#### Overrides

[WorkerError](WorkerError.md).[constructor](WorkerError.md#constructor)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

WorkerError.name
