[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API Reference](../README.md) / Runnable

# Class: Runnable\<Event\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`TEventEmitterEvent`](../README.md#teventemitterevent) |

## Hierarchy

- [`EventEmitter`](EventEmitter.md)\<`Event`\>

  ↳ **`Runnable`**

  ↳↳ [`Locker`](Locker.md)

  ↳↳ [`WorkerResourceGroup`](WorkerResourceGroup.md)

## Table of contents

### Methods

- [emit](Runnable.md#emit)
- [getId](Runnable.md#getid)
- [isDown](Runnable.md#isdown)
- [isGoingDown](Runnable.md#isgoingdown)
- [isGoingUp](Runnable.md#isgoingup)
- [isRunning](Runnable.md#isrunning)
- [isUp](Runnable.md#isup)
- [on](Runnable.md#on)
- [once](Runnable.md#once)
- [removeAllListeners](Runnable.md#removealllisteners)
- [removeListener](Runnable.md#removelistener)
- [run](Runnable.md#run)
- [shutdown](Runnable.md#shutdown)

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
| `...args` | `Parameters`\<`Event`[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

___

### isDown

▸ **isDown**(): `boolean`

#### Returns

`boolean`

___

### isGoingDown

▸ **isGoingDown**(): `boolean`

#### Returns

`boolean`

___

### isGoingUp

▸ **isGoingUp**(): `boolean`

#### Returns

`boolean`

___

### isRunning

▸ **isRunning**(): `boolean`

#### Returns

`boolean`

___

### isUp

▸ **isUp**(): `boolean`

#### Returns

`boolean`

___

### on

▸ **on**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `Event`[`E`] |

#### Returns

`this`

#### Inherited from

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `Event`[`E`] |

#### Returns

`this`

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

`this`

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `Event`[`E`] |

#### Returns

`this`

#### Inherited from

[EventEmitter](EventEmitter.md).[removeListener](EventEmitter.md#removelistener)

___

### run

▸ **run**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`boolean`\> |

#### Returns

`void`

___

### shutdown

▸ **shutdown**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`
