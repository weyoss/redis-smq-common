[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Worker

# Class: Worker

## Table of contents

### Constructors

- [constructor](Worker.md#constructor)

### Methods

- [quit](Worker.md#quit)
- [run](Worker.md#run)
- [work](Worker.md#work)

## Constructors

### constructor

• **new Worker**(`managed`, `timeout?`): [`Worker`](Worker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `managed` | `boolean` | `undefined` |
| `timeout` | `number` | `1000` |

#### Returns

[`Worker`](Worker.md)

## Methods

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### run

▸ **run**(`cb`): `void`

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
