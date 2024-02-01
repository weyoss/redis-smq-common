[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerPool

# Class: WorkerPool

## Table of contents

### Constructors

- [constructor](WorkerPool.md#constructor)

### Methods

- [add](WorkerPool.md#add)
- [clear](WorkerPool.md#clear)
- [work](WorkerPool.md#work)

## Constructors

### constructor

• **new WorkerPool**(): [`WorkerPool`](WorkerPool.md)

#### Returns

[`WorkerPool`](WorkerPool.md)

## Methods

### add

▸ **add**(`worker`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`Worker`](Worker.md) |

#### Returns

`number`

___

### clear

▸ **clear**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### work

▸ **work**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
