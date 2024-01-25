[RedisSMQ Common Library](../../../README.md) / [Docs](README.md) / [API](docs/api/README.md) / Ticker

# Class: Ticker

## Hierarchy

- [`EventEmitter`](docs/api/classes/EventEmitter.md)\<[`TEvent`](docs/api/README.md#tevent)\>

  ↳ **`Ticker`**

## Table of contents

### Constructors

- [constructor](docs/api/classes/Ticker.md#constructor)

### Methods

- [abort](docs/api/classes/Ticker.md#abort)
- [emit](docs/api/classes/Ticker.md#emit)
- [isTicking](docs/api/classes/Ticker.md#isticking)
- [nextTick](docs/api/classes/Ticker.md#nexttick)
- [nextTickFn](docs/api/classes/Ticker.md#nexttickfn)
- [on](docs/api/classes/Ticker.md#on)
- [once](docs/api/classes/Ticker.md#once)
- [quit](docs/api/classes/Ticker.md#quit)
- [removeAllListeners](docs/api/classes/Ticker.md#removealllisteners)
- [runTimer](docs/api/classes/Ticker.md#runtimer)

## Constructors

### constructor

• **new Ticker**(`onTickFn?`, `time?`): [`Ticker`](docs/api/classes/Ticker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `onTickFn` | [`TFunction`](docs/api/README.md#tfunction) | `undefined` |
| `time` | `number` | `1000` |

#### Returns

[`Ticker`](docs/api/classes/Ticker.md)

#### Overrides

[EventEmitter](docs/api/classes/EventEmitter.md).[constructor](docs/api/classes/EventEmitter.md#constructor)

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
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TEvent`](docs/api/README.md#tevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[emit](docs/api/classes/EventEmitter.md#emit)

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
| `fn` | [`TFunction`](docs/api/README.md#tfunction) |

#### Returns

`void`

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`Ticker`](docs/api/classes/Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](docs/api/README.md#tevent)[`E`] |

#### Returns

[`Ticker`](docs/api/classes/Ticker.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[on](docs/api/classes/EventEmitter.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`Ticker`](docs/api/classes/Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TEvent`](docs/api/README.md#tevent)[`E`] |

#### Returns

[`Ticker`](docs/api/classes/Ticker.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[once](docs/api/classes/EventEmitter.md#once)

___

### quit

▸ **quit**(): `void`

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`Ticker`](docs/api/classes/Ticker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TEvent`](docs/api/README.md#tevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `E` |

#### Returns

[`Ticker`](docs/api/classes/Ticker.md)

#### Inherited from

[EventEmitter](docs/api/classes/EventEmitter.md).[removeAllListeners](docs/api/classes/EventEmitter.md#removealllisteners)

___

### runTimer

▸ **runTimer**(): `void`

#### Returns

`void`
