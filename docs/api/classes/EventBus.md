[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / EventBus

# Class: EventBus\<Events\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`TEventBusEvent`](../README.md#teventbusevent) |

## Hierarchy

- [`EventEmitter`](EventEmitter.md)\<`Events`\>

  ↳ **`EventBus`**

## Implements

- [`IEventBus`](../interfaces/IEventBus.md)\<`Events`\>

## Table of contents

### Methods

- [emit](EventBus.md#emit)
- [on](EventBus.md#on)
- [once](EventBus.md#once)
- [removeAllListeners](EventBus.md#removealllisteners)
- [removeListener](EventBus.md#removelistener)
- [shutDown](EventBus.md#shutdown)
- [createInstance](EventBus.md#createinstance)

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

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[emit](../interfaces/IEventBus.md#emit)

#### Overrides

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`EventBus`](EventBus.md)\<`Events`\>

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

[`EventBus`](EventBus.md)\<`Events`\>

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[on](../interfaces/IEventBus.md#on)

#### Overrides

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`EventBus`](EventBus.md)\<`Events`\>

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

[`EventBus`](EventBus.md)\<`Events`\>

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[once](../interfaces/IEventBus.md#once)

#### Overrides

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`EventBus`](EventBus.md)\<`Events`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

[`EventBus`](EventBus.md)\<`Events`\>

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[removeAllListeners](../interfaces/IEventBus.md#removealllisteners)

#### Overrides

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): [`EventBus`](EventBus.md)\<`Events`\>

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

[`EventBus`](EventBus.md)\<`Events`\>

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[removeListener](../interfaces/IEventBus.md#removelistener)

#### Overrides

[EventEmitter](EventEmitter.md).[removeListener](EventEmitter.md#removelistener)

___

### shutDown

▸ **shutDown**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IEventBus](../interfaces/IEventBus.md).[shutDown](../interfaces/IEventBus.md#shutdown)

___

### createInstance

▸ **createInstance**\<`T`\>(`cb`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TEventBusEvent`](../README.md#teventbusevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<[`IEventBus`](../interfaces/IEventBus.md)\<`T`\>\> |

#### Returns

`void`
