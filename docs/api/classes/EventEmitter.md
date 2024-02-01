[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / EventEmitter

# Class: EventEmitter\<Events\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`TEventEmitterEvent`](../README.md#teventemitterevent) |

## Hierarchy

- `EventEmitter`

  ↳ **`EventEmitter`**

  ↳↳ [`Ticker`](Ticker.md)

  ↳↳ [`WorkerRunner`](WorkerRunner.md)

## Table of contents

### Constructors

- [constructor](EventEmitter.md#constructor)

### Methods

- [emit](EventEmitter.md#emit)
- [on](EventEmitter.md#on)
- [once](EventEmitter.md#once)
- [removeAllListeners](EventEmitter.md#removealllisteners)

## Constructors

### constructor

• **new EventEmitter**\<`Events`\>(`options?`): [`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`TEventEmitterEvent`](../README.md#teventemitterevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Returns

[`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Inherited from

Base.constructor

## Methods

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<`Events`[`E`]\> |

#### Returns

`boolean`

#### Overrides

Base.emit

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `Events`[`E`] |

#### Returns

[`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Overrides

Base.on

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `Events`[`E`] |

#### Returns

[`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Overrides

Base.once

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`EventEmitter`](EventEmitter.md)\<`Events`\>

#### Overrides

Base.removeAllListeners
