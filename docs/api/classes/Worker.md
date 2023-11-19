>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Worker

# Class: Worker

## Table of contents

### Constructors

- [constructor](../classes/Worker.md#constructor)

### Methods

- [quit](../classes/Worker.md#quit)
- [run](../classes/Worker.md#run)
- [work](../classes/Worker.md#work)

## Constructors

### constructor

• **new Worker**(`managed`, `timeout?`): [`Worker`](../classes/Worker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `managed` | `boolean` | `undefined` |
| `timeout` | `number` | `1000` |

#### Returns

[`Worker`](../classes/Worker.md)

## Methods

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

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
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`
