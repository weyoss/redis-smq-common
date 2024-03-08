[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / Locker

# Class: Locker

## Hierarchy

- [`Runnable`](Runnable.md)\<[`TLockerEvent`](../README.md#tlockerevent)\>

  ↳ **`Locker`**

## Table of contents

### Constructors

- [constructor](Locker.md#constructor)

### Methods

- [acquireLock](Locker.md#acquirelock)
- [emit](Locker.md#emit)
- [extendLock](Locker.md#extendlock)
- [getId](Locker.md#getid)
- [isDown](Locker.md#isdown)
- [isGoingDown](Locker.md#isgoingdown)
- [isGoingUp](Locker.md#isgoingup)
- [isLocked](Locker.md#islocked)
- [isReleased](Locker.md#isreleased)
- [isRunning](Locker.md#isrunning)
- [isUp](Locker.md#isup)
- [on](Locker.md#on)
- [once](Locker.md#once)
- [releaseLock](Locker.md#releaselock)
- [removeAllListeners](Locker.md#removealllisteners)
- [removeListener](Locker.md#removelistener)
- [run](Locker.md#run)
- [shutdown](Locker.md#shutdown)

## Constructors

### constructor

• **new Locker**(`redisClient`, `logger`, `lockKey`, `ttl`, `retryOnFail?`, `autoExtendInterval?`): [`Locker`](Locker.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `redisClient` | [`IRedisClient`](../interfaces/IRedisClient.md) | `undefined` |
| `logger` | [`ILogger`](../interfaces/ILogger.md) | `undefined` |
| `lockKey` | `string` | `undefined` |
| `ttl` | `number` | `undefined` |
| `retryOnFail` | `boolean` | `false` |
| `autoExtendInterval` | `number` | `0` |

#### Returns

[`Locker`](Locker.md)

#### Overrides

Runnable\&lt;TLockerEvent\&gt;.constructor

## Methods

### acquireLock

▸ **acquireLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`boolean`\> |

#### Returns

`void`

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TLockerEvent`](../README.md#tlockerevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TLockerEvent`](../README.md#tlockerevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[emit](Runnable.md#emit)

___

### extendLock

▸ **extendLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Inherited from

[Runnable](Runnable.md).[getId](Runnable.md#getid)

___

### isDown

▸ **isDown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[isDown](Runnable.md#isdown)

___

### isGoingDown

▸ **isGoingDown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[isGoingDown](Runnable.md#isgoingdown)

___

### isGoingUp

▸ **isGoingUp**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[isGoingUp](Runnable.md#isgoingup)

___

### isLocked

▸ **isLocked**(): `boolean`

#### Returns

`boolean`

___

### isReleased

▸ **isReleased**(): `boolean`

#### Returns

`boolean`

___

### isRunning

▸ **isRunning**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[isRunning](Runnable.md#isrunning)

___

### isUp

▸ **isUp**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[isUp](Runnable.md#isup)

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`Locker`](Locker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TLockerEvent`](../README.md#tlockerevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TLockerEvent`](../README.md#tlockerevent)[`E`] |

#### Returns

[`Locker`](Locker.md)

#### Inherited from

[Runnable](Runnable.md).[on](Runnable.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`Locker`](Locker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TLockerEvent`](../README.md#tlockerevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TLockerEvent`](../README.md#tlockerevent)[`E`] |

#### Returns

[`Locker`](Locker.md)

#### Inherited from

[Runnable](Runnable.md).[once](Runnable.md#once)

___

### releaseLock

▸ **releaseLock**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`Locker`](Locker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TLockerEvent`](../README.md#tlockerevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

[`Locker`](Locker.md)

#### Inherited from

[Runnable](Runnable.md).[removeAllListeners](Runnable.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): [`Locker`](Locker.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof [`TLockerEvent`](../README.md#tlockerevent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TLockerEvent`](../README.md#tlockerevent)[`E`] |

#### Returns

[`Locker`](Locker.md)

#### Inherited from

[Runnable](Runnable.md).[removeListener](Runnable.md#removelistener)

___

### run

▸ **run**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`boolean`\> |

#### Returns

`void`

#### Overrides

[Runnable](Runnable.md).[run](Runnable.md#run)

___

### shutdown

▸ **shutdown**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Inherited from

[Runnable](Runnable.md).[shutdown](Runnable.md#shutdown)
