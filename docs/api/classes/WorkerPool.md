>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerPool

# Class: WorkerPool

## Table of contents

### Constructors

- [constructor](../classes/WorkerPool.md#constructor)

### Methods

- [add](../classes/WorkerPool.md#add)
- [clear](../classes/WorkerPool.md#clear)
- [work](../classes/WorkerPool.md#work)

## Constructors

### constructor

• **new WorkerPool**(): [`WorkerPool`](../classes/WorkerPool.md)

#### Returns

[`WorkerPool`](../classes/WorkerPool.md)

## Methods

### add

▸ **add**(`worker`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`Worker`](../classes/Worker.md) |

#### Returns

`number`

___

### clear

▸ **clear**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

___

### work

▸ **work**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`
