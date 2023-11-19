> [RedisSMQ Common Library](../../README.md) / [Docs](../README.md) / API

# API

## Table of contents

### Enumerations

- [ERedisConfigClient](docs/api/enums/ERedisConfigClient.md)

### Classes

- [CallbackEmptyReplyError](docs/api/classes/CallbackEmptyReplyError.md)
- [CallbackInvalidReplyError](docs/api/classes/CallbackInvalidReplyError.md)
- [Lock](docs/api/classes/Lock.md)
- [LockAbortError](docs/api/classes/LockAbortError.md)
- [LockAcquireError](docs/api/classes/LockAcquireError.md)
- [LockError](docs/api/classes/LockError.md)
- [LockExtendError](docs/api/classes/LockExtendError.md)
- [LockMethodNotAllowedError](docs/api/classes/LockMethodNotAllowedError.md)
- [LockNotAcquiredError](docs/api/classes/LockNotAcquiredError.md)
- [LockNotReleasedError](docs/api/classes/LockNotReleasedError.md)
- [LoggerError](docs/api/classes/LoggerError.md)
- [PanicError](docs/api/classes/PanicError.md)
- [PowerSwitch](docs/api/classes/PowerSwitch.md)
- [PowerSwitchError](docs/api/classes/PowerSwitchError.md)
- [RedisClient](docs/api/classes/RedisClient.md)
- [RedisClientError](docs/api/classes/RedisClientError.md)
- [RedisSMQError](docs/api/classes/RedisSMQError.md)
- [Ticker](docs/api/classes/Ticker.md)
- [TickerError](docs/api/classes/TickerError.md)
- [WatchedKeysChangedError](docs/api/classes/WatchedKeysChangedError.md)
- [Worker](docs/api/classes/Worker.md)
- [WorkerError](docs/api/classes/WorkerError.md)
- [WorkerPool](docs/api/classes/WorkerPool.md)
- [WorkerRunner](docs/api/classes/WorkerRunner.md)

### Interfaces

- [ICallback](docs/api/interfaces/ICallback.md)
- [ILogger](docs/api/interfaces/ILogger.md)
- [ILoggerConfig](docs/api/interfaces/ILoggerConfig.md)
- [IRedisClient](docs/api/interfaces/IRedisClient.md)
- [IRedisConfigIORedis](docs/api/interfaces/IRedisConfigIORedis.md)
- [IRedisConfigNodeRedis](docs/api/interfaces/IRedisConfigNodeRedis.md)
- [IRedisConfigNodeRedisV4](docs/api/interfaces/IRedisConfigNodeRedisV4.md)
- [IRedisTransaction](docs/api/interfaces/IRedisTransaction.md)

### Type Aliases

- [IRedisConfig](docs/api/README.md#iredisconfig)
- [TFunction](docs/api/README.md#tfunction)
- [TRedisClientNodeRedisV4](docs/api/README.md#tredisclientnoderedisv4)
- [TRedisTransactionNodeRedisV4](docs/api/README.md#tredistransactionnoderedisv4)
- [TUnaryFunction](docs/api/README.md#tunaryfunction)

### Variables

- [async](docs/api/README.md#async)
- [events](docs/api/README.md#events)
- [logger](docs/api/README.md#logger)
- [redis](docs/api/README.md#redis)

## Type Aliases

### IRedisConfig

Ƭ **IRedisConfig**: [`IRedisConfigIORedis`](docs/api/interfaces/IRedisConfigIORedis.md) | [`IRedisConfigNodeRedis`](docs/api/interfaces/IRedisConfigNodeRedis.md) | [`IRedisConfigNodeRedisV4`](docs/api/interfaces/IRedisConfigNodeRedisV4.md)

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
| `eachIn`    | <T>(`collection`: `Record`<`string`, `T`>, `iteratee`: (`item`: `T`, `key`: `string`, `callback`: [`ICallback`](docs/api/interfaces/ICallback.md)<`void`>) => `void`, `callback`: [`ICallback`](docs/api/interfaces/ICallback.md)<`void`>) => `void`    |
| `eachOf`    | <T>(`collection`: `T`[], `iteratee`: (`item`: `T`, `key`: `number`, `callback`: [`ICallback`](docs/api/interfaces/ICallback.md)<`void`>) => `void`, `callback`: [`ICallback`](docs/api/interfaces/ICallback.md)<`void`>) => `void`                      |
| `waterfall` | <T>(`tasks`: [`TFunction`](docs/api/README.md#tfunction)<`void`, `any`>[], `callback`: [`ICallback`](docs/api/interfaces/ICallback.md)<`T`>) => `void`                                                                                                  |

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
| `getLogger` | (`cfg`: [`ILoggerConfig`](docs/api/interfaces/ILoggerConfig.md), `ns?`: `string`) => [`ILogger`](docs/api/interfaces/ILogger.md) |
| `setLogger` | <T>(`logger`: `T`) => `void`                                                                                                     |

---

### redis

• `Const` **redis**: `Object`

#### Type declaration


| Name             | Type                                                                                                                                                                             |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createInstance` | (`config`: [`IRedisConfig`](docs/api/README.md#iredisconfig), `cb`: [`ICallback`](docs/api/interfaces/ICallback.md)<[`RedisClient`](docs/api/classes/RedisClient.md)>) => `void` |
