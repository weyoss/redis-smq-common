[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Ticker

# Class: Ticker

## Hierarchy

- [`EventEmitter`](EventEmitter.md)\<[`TEvent`](../README.md#tevent)\>

  ↳ **`Ticker`**

## Table of contents

### Constructors

- [constructor](Ticker.md#constructor)

### Methods

- [abort](Ticker.md#abort)
- [emit](Ticker.md#emit)
- [isTicking](Ticker.md#isticking)
- [nextTick](Ticker.md#nexttick)
- [nextTickFn](Ticker.md#nexttickfn)
- [on](Ticker.md#on)
- [once](Ticker.md#once)
- [quit](Ticker.md#quit)
- [removeAllListeners](Ticker.md#removealllisteners)
- [runTimer](Ticker.md#runtimer)

## Constructors

### constructor

• **new Ticker**(`onTickFn?`, `time?`): [`Ticker`](Ticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `onTickFn` | [`TFunction`](../README.md#tfunction) | `undefined` |
| `time` | `number` | `1000` |

#### Returns

[`Ticker`](Ticker.md)

#### Overrides

[EventEmitter](EventEmitter.md).[constructor](EventEmitter.md#constructor)

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TEvent`](../README.md#tevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](EventEmitter.md).[emit](EventEmitter.md#emit)

___

### isTicking

▸ **isTicking**(): `boolean`

#### Returns

`boolean`

___

### nextTick

▸ **nextTick**(): `void`

#### Returns

`void`

___

### nextTickFn

▸ **nextTickFn**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`TFunction`](../README.md#tfunction) |

#### Returns

`void`

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`Ticker`](Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](../README.md#tevent)[`E`] |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[on](EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`Ticker`](Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](../README.md#tevent)[`E`] |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[once](EventEmitter.md#once)

___

### quit

▸ **quit**(): `void`

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`Ticker`](Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](../README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`Ticker`](Ticker.md)

#### Inherited from

[EventEmitter](EventEmitter.md).[removeAllListeners](EventEmitter.md#removealllisteners)

___

### runTimer

▸ **runTimer**(): `void`

#### Returns

`void`
