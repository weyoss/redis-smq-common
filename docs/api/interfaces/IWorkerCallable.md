[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / IWorkerCallable

# Interface: IWorkerCallable\<Payload, Reply\>

## Type parameters

| Name |
| :------ |
| `Payload` |
| `Reply` |

## Implemented by

- [`WorkerCallable`](../classes/WorkerCallable.md)

## Table of contents

### Methods

- [call](IWorkerCallable.md#call)

## Methods

### call

▸ **call**(`payload`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Payload` |
| `cb` | [`ICallback`](ICallback.md)\<`Reply`\> |

#### Returns

`void`
