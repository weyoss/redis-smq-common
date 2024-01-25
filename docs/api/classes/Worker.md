[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / Worker

# Class: Worker

## Table of contents

### Constructors

- [constructor](docs/api/classes/Worker.md#constructor)

### Methods

- [quit](docs/api/classes/Worker.md#quit)
- [run](docs/api/classes/Worker.md#run)
- [work](docs/api/classes/Worker.md#work)

## Constructors

### constructor

• **new Worker**(`managed`, `timeout?`): [`Worker`](docs/api/classes/Worker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `managed` | `boolean` | `undefined` |
| `timeout` | `number` | `1000` |

#### Returns

[`Worker`](docs/api/classes/Worker.md)

## Methods

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](docs/api/interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### run

▸ **run**(): `void`

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
