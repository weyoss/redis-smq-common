[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / WorkerRunnable

# Class: WorkerRunnable\<Payload\>

## Type parameters

| Name |
| :------ |
| `Payload` |

## Hierarchy

- `Worker`

  ↳ **`WorkerRunnable`**

## Implements

- [`IWorkerRunnable`](../interfaces/IWorkerRunnable.md)\<`Payload`\>

## Table of contents

### Constructors

- [constructor](WorkerRunnable.md#constructor)

### Methods

- [emit](WorkerRunnable.md#emit)
- [on](WorkerRunnable.md#on)
- [once](WorkerRunnable.md#once)
- [removeAllListeners](WorkerRunnable.md#removealllisteners)
- [removeListener](WorkerRunnable.md#removelistener)
- [run](WorkerRunnable.md#run)
- [shutDown](WorkerRunnable.md#shutdown)

## Constructors

### constructor

• **new WorkerRunnable**\<`Payload`\>(`workerFilename`): [`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Type parameters

| Name |
| :------ |
| `Payload` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `workerFilename` | `string` |

#### Returns

[`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Overrides

Worker.constructor

## Methods

### emit

▸ **emit**\<`E`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `TWorkerEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `...args` | `Parameters`\<`TWorkerEvent`[`E`]\> |

#### Returns

`boolean`

#### Inherited from

Worker.emit

___

### on

▸ **on**\<`E`\>(`event`, `listener`): [`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `TWorkerEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `TWorkerEvent`[`E`] |

#### Returns

[`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Inherited from

Worker.on

___

### once

▸ **once**\<`E`\>(`event`, `listener`): [`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `TWorkerEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `TWorkerEvent`[`E`] |

#### Returns

[`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Inherited from

Worker.once

___

### removeAllListeners

▸ **removeAllListeners**\<`E`\>(`event?`): [`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `TWorkerEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Extract`\<`E`, `string`\> |

#### Returns

[`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Inherited from

Worker.removeAllListeners

___

### removeListener

▸ **removeListener**\<`E`\>(`event`, `listener`): [`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends keyof `TWorkerEvent` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `E` |
| `listener` | `TWorkerEvent`[`E`] |

#### Returns

[`WorkerRunnable`](WorkerRunnable.md)\<`Payload`\>

#### Inherited from

Worker.removeListener

___

### run

▸ **run**(`initialPayload`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialPayload` | `Payload` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Implementation of

[IWorkerRunnable](../interfaces/IWorkerRunnable.md).[run](../interfaces/IWorkerRunnable.md#run)

___

### shutDown

▸ **shutDown**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

#### Overrides

Worker.shutDown
