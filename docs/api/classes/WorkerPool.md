[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / WorkerPool

# Class: WorkerPool

## Table of contents

### Constructors

- [constructor](docs/api/classes/WorkerPool.md#constructor)

### Methods

- [add](docs/api/classes/WorkerPool.md#add)
- [clear](docs/api/classes/WorkerPool.md#clear)
- [work](docs/api/classes/WorkerPool.md#work)

## Constructors

### constructor

• **new WorkerPool**(): [`WorkerPool`](docs/api/classes/WorkerPool.md)

#### Returns

[`WorkerPool`](docs/api/classes/WorkerPool.md)

## Methods

### add

▸ **add**(`worker`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worker` | [`Worker`](docs/api/classes/Worker.md) |

#### Returns

`number`

___

### clear

▸ **clear**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### work

▸ **work**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
