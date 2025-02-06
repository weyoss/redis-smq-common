[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API Reference](../README.md) / WorkerResourceGroup

# Class: WorkerResourceGroup

## Hierarchy

- [`Runnable`](Runnable.md)\<[`TWorkerResourceGroupEvent`](../README.md#tworkerresourcegroupevent)\>

  ↳ **`WorkerResourceGroup`**

## Table of contents

### Constructors

- [constructor](WorkerResourceGroup.md#constructor)

### Methods

- [addWorker](WorkerResourceGroup.md#addworker)
- [emit](WorkerResourceGroup.md#emit)
- [getId](WorkerResourceGroup.md#getid)
- [isDown](WorkerResourceGroup.md#isdown)
- [isGoingDown](WorkerResourceGroup.md#isgoingdown)
- [isGoingUp](WorkerResourceGroup.md#isgoingup)
- [isRunning](WorkerResourceGroup.md#isrunning)
- [isUp](WorkerResourceGroup.md#isup)
- [loadFromDir](WorkerResourceGroup.md#loadfromdir)
- [on](WorkerResourceGroup.md#on)
- [once](WorkerResourceGroup.md#once)
- [removeAllListeners](WorkerResourceGroup.md#removealllisteners)
- [removeListener](WorkerResourceGroup.md#removelistener)
- [run](WorkerResourceGroup.md#run)
- [shutdown](WorkerResourceGroup.md#shutdown)

## Constructors

### constructor

• **new WorkerResourceGroup**(`redisClient`, `logger`, `resourceGroupId`): [`WorkerResourceGroup`](WorkerResourceGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisClient` | [`IRedisClient`](../interfaces/IRedisClient.md) |
| `logger` | [`ILogger`](../interfaces/ILogger.md) |
| `resourceGroupId` | `string` |

#### Returns

[`WorkerResourceGroup`](WorkerResourceGroup.md)

#### Overrides

Runnable\<TWorkerResourceGroupEvent\>.constructor

## Methods

### addWorker

▸ **addWorker**(`filename`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `payload` | `unknown` |

#### Returns

`void`

___

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"workerResourceGroup.error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<[`TWorkerResourceGroupEvent`](../README.md#tworkerresourcegroupevent)[`E`]\> |

#### Returns

`boolean`

#### Inherited from

[Runnable](Runnable.md).[emit](Runnable.md#emit)

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

### loadFromDir

▸ **loadFromDir**(`workersDir`, `payload`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workersDir` | `string` |
| `payload` | `unknown` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### on

▸ **on**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"workerResourceGroup.error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TWorkerResourceGroupEvent`](../README.md#tworkerresourcegroupevent)[`E`] |

#### Returns

`this`

#### Inherited from

[Runnable](Runnable.md).[on](Runnable.md#on)

___

### once

▸ **once**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"workerResourceGroup.error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TWorkerResourceGroupEvent`](../README.md#tworkerresourcegroupevent)[`E`] |

#### Returns

`this`

#### Inherited from

[Runnable](Runnable.md).[once](Runnable.md#once)

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"workerResourceGroup.error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

`this`

#### Inherited from

[Runnable](Runnable.md).[removeAllListeners](Runnable.md#removealllisteners)

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"workerResourceGroup.error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | [`TWorkerResourceGroupEvent`](../README.md#tworkerresourcegroupevent)[`E`] |

#### Returns

`this`

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

#### Inherited from

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
