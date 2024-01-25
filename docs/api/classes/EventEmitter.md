[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / EventEmitter

# Class: EventEmitter\<Events\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`TEventEmitterEvent`](docs/api/README.md#teventemitterevent) |

## Hierarchy

- `EventEmitter`

  ↳ **`EventEmitter`**

  ↳↳ [`Ticker`](docs/api/classes/Ticker.md)

  ↳↳ [`WorkerRunner`](docs/api/classes/WorkerRunner.md)

## Table of contents

### Constructors

- [constructor](docs/api/classes/EventEmitter.md#constructor)

### Methods

- [emit](docs/api/classes/EventEmitter.md#emit)
- [on](docs/api/classes/EventEmitter.md#on)
- [once](docs/api/classes/EventEmitter.md#once)
- [removeAllListeners](docs/api/classes/EventEmitter.md#removealllisteners)

## Constructors

### constructor

• **new EventEmitter**\<`Events`\>(`options?`): [`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`TEventEmitterEvent`](docs/api/README.md#teventemitterevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Returns

[`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

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

▸ **on**\<`E`\>(`event`, `listener`): [`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

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

[`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

#### Overrides

Base.on

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

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

[`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

#### Overrides

Base.once

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`EventEmitter`](docs/api/classes/EventEmitter.md)\<`Events`\>

#### Overrides

Base.removeAllListeners
