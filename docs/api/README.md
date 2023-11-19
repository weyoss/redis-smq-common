> [RedisSMQ Common Library](../../README.md) / [Docs](../README.md) / API

# API

## Table of contents

### Enumerations

- [ERedisConfigClient](./enums/ERedisConfigClient.md)

### Classes

- [CallbackEmptyReplyError](./classes/CallbackEmptyReplyError.md)
- [CallbackInvalidReplyError](./classes/CallbackInvalidReplyError.md)
- [Lock](./classes/Lock.md)
- [LockAbortError](./classes/LockAbortError.md)
- [LockAcquireError](./classes/LockAcquireError.md)
- [LockError](./classes/LockError.md)
- [LockExtendError](./classes/LockExtendError.md)
- [LockMethodNotAllowedError](./classes/LockMethodNotAllowedError.md)
- [LockNotAcquiredError](./classes/LockNotAcquiredError.md)
- [LockNotReleasedError](./classes/LockNotReleasedError.md)
- [LoggerError](./classes/LoggerError.md)
- [PanicError](./classes/PanicError.md)
- [PowerSwitch](./classes/PowerSwitch.md)
- [PowerSwitchError](./classes/PowerSwitchError.md)
- [RedisClient](./classes/RedisClient.md)
- [RedisClientError](./classes/RedisClientError.md)
- [RedisSMQError](./classes/RedisSMQError.md)
- [Ticker](./classes/Ticker.md)
- [TickerError](./classes/TickerError.md)
- [WatchedKeysChangedError](./classes/WatchedKeysChangedError.md)
- [Worker](./classes/Worker.md)
- [WorkerError](./classes/WorkerError.md)
- [WorkerPool](./classes/WorkerPool.md)
- [WorkerRunner](./classes/WorkerRunner.md)

### Interfaces

- [ICallback](./interfaces/ICallback.md)
- [ILogger](./interfaces/ILogger.md)
- [ILoggerConfig](./interfaces/ILoggerConfig.md)
- [IRedisClient](./interfaces/IRedisClient.md)
- [IRedisConfigIORedis](./interfaces/IRedisConfigIORedis.md)
- [IRedisConfigNodeRedis](./interfaces/IRedisConfigNodeRedis.md)
- [IRedisConfigNodeRedisV4](./interfaces/IRedisConfigNodeRedisV4.md)
- [IRedisTransaction](./interfaces/IRedisTransaction.md)

### Type Aliases

- [IRedisConfig](./README.md#iredisconfig)
- [TFunction](./README.md#tfunction)
- [TRedisClientNodeRedisV4](./README.md#tredisclientnoderedisv4)
- [TRedisTransactionNodeRedisV4](./README.md#tredistransactionnoderedisv4)
- [TUnaryFunction](./README.md#tunaryfunction)

### Variables

- [async](./README.md#async)
- [events](./README.md#events)
- [logger](./README.md#logger)
- [redis](./README.md#redis)

## Type Aliases

### IRedisConfig

Ƭ **IRedisConfig**: [`IRedisConfigIORedis`](./interfaces/IRedisConfigIORedis.md) | [`IRedisConfigNodeRedis`](./interfaces/IRedisConfigNodeRedis.md) | [`IRedisConfigNodeRedisV4`](./interfaces/IRedisConfigNodeRedisV4.md)

---

### TFunction

Ƭ **TFunction**<`TReturn`, `TArgs`>: (...`args`: `TArgs`[]) => `TReturn`

#### Type parameters


| Name      | Type   |
| :---------- | :------- |
| `TReturn` | `void` |
| `TArgs`   | `any`  |

#### Type declaration

▸ (`...args`): `TReturn`

##### Parameters


| Name      | Type      |
| :---------- | :---------- |
| `...args` | `TArgs`[] |

##### Returns

`TReturn`

---

### TRedisClientNodeRedisV4

Ƭ **TRedisClientNodeRedisV4**: `RedisClientType`<`RedisModules`, `RedisFunctions`, `RedisScripts`>

---

### TRedisTransactionNodeRedisV4

Ƭ **TRedisTransactionNodeRedisV4**: `RedisClientMultiCommandType`<`RedisModules`, `RedisFunctions`, `RedisScripts`>

---

### TUnaryFunction

Ƭ **TUnaryFunction**<`T`, `E`>: (`reply`: `T`) => `E`

#### Type parameters


| Name | Type   |
| :----- | :------- |
| `T`  | `T`    |
| `E`  | `void` |

#### Type declaration

▸ (`reply`): `E`

##### Parameters


| Name    | Type |
| :-------- | :----- |
| `reply` | `T`  |

##### Returns

`E`

## Variables

### async

• `Const` **async**: `Object`

#### Type declaration


| Name        | Type                                                                                                                                                                                                                                                    |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `each`      | <T>(`collection`: `Record`<`string`, `T`> \| `T`[], `iteratee`: (`item`: `T`, `key`: `string` \| `number`, `callback`: [`ICallback`](interfaces/ICallback.md)<`void`>) => `void`, `callback`: [`ICallback`](interfaces/ICallback.md)<`void`>) => `void` |
| `eachIn`    | <T>(`collection`: `Record`<`string`, `T`>, `iteratee`: (`item`: `T`, `key`: `string`, `callback`: [`ICallback`](./interfaces/ICallback.md)<`void`>) => `void`, `callback`: [`ICallback`](./interfaces/ICallback.md)<`void`>) => `void`    |
| `eachOf`    | <T>(`collection`: `T`[], `iteratee`: (`item`: `T`, `key`: `number`, `callback`: [`ICallback`](./interfaces/ICallback.md)<`void`>) => `void`, `callback`: [`ICallback`](./interfaces/ICallback.md)<`void`>) => `void`                      |
| `waterfall` | <T>(`tasks`: [`TFunction`](./README.md#tfunction)<`void`, `any`>[], `callback`: [`ICallback`](./interfaces/ICallback.md)<`T`>) => `void`                                                                                                  |

---

### events

• `Const` **events**: `Object`

#### Type declaration


| Name         | Type     |
| :------------- | :--------- |
| `DOWN`       | `string` |
| `ERROR`      | `string` |
| `GOING_DOWN` | `string` |
| `GOING_UP`   | `string` |
| `TICK`       | `string` |
| `UP`         | `string` |

---

### logger

• `Const` **logger**: `Object`

#### Type declaration


| Name        | Type                                                                                                                             |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `destroy`   | () =>`void`                                                                                                                      |
| `getLogger` | (`cfg`: [`ILoggerConfig`](./interfaces/ILoggerConfig.md), `ns?`: `string`) => [`ILogger`](./interfaces/ILogger.md) |
| `setLogger` | <T>(`logger`: `T`) => `void`                                                                                                     |

---

### redis

• `Const` **redis**: `Object`

#### Type declaration


| Name             | Type                                                                                                                                                                             |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createInstance` | (`config`: [`IRedisConfig`](./README.md#iredisconfig), `cb`: [`ICallback`](./interfaces/ICallback.md)<[`RedisClient`](./classes/RedisClient.md)>) => `void` |
