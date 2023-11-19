>[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / RedisClient

# Class: RedisClient

## Hierarchy

- `EventEmitter`

  ↳ **`RedisClient`**

## Implements

- [`IRedisClient`](../interfaces/IRedisClient.md)

## Table of contents

### Constructors

- [constructor](../classes/RedisClient.md#constructor)

### Properties

- [captureRejectionSymbol](../classes/RedisClient.md#capturerejectionsymbol)
- [captureRejections](../classes/RedisClient.md#capturerejections)
- [defaultMaxListeners](../classes/RedisClient.md#defaultmaxlisteners)
- [errorMonitor](../classes/RedisClient.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](../classes/RedisClient.md#[capturerejectionsymbol])
- [addListener](../classes/RedisClient.md#addlistener)
- [brpoplpush](../classes/RedisClient.md#brpoplpush)
- [del](../classes/RedisClient.md#del)
- [emit](../classes/RedisClient.md#emit)
- [end](../classes/RedisClient.md#end)
- [evalsha](../classes/RedisClient.md#evalsha)
- [eventNames](../classes/RedisClient.md#eventnames)
- [flushall](../classes/RedisClient.md#flushall)
- [get](../classes/RedisClient.md#get)
- [getInfo](../classes/RedisClient.md#getinfo)
- [getMaxListeners](../classes/RedisClient.md#getmaxlisteners)
- [halt](../classes/RedisClient.md#halt)
- [hdel](../classes/RedisClient.md#hdel)
- [hget](../classes/RedisClient.md#hget)
- [hgetall](../classes/RedisClient.md#hgetall)
- [hkeys](../classes/RedisClient.md#hkeys)
- [hlen](../classes/RedisClient.md#hlen)
- [hmget](../classes/RedisClient.md#hmget)
- [hscan](../classes/RedisClient.md#hscan)
- [hscanAll](../classes/RedisClient.md#hscanall)
- [hset](../classes/RedisClient.md#hset)
- [listenerCount](../classes/RedisClient.md#listenercount)
- [listeners](../classes/RedisClient.md#listeners)
- [llen](../classes/RedisClient.md#llen)
- [lmove](../classes/RedisClient.md#lmove)
- [loadScript](../classes/RedisClient.md#loadscript)
- [loadScripts](../classes/RedisClient.md#loadscripts)
- [lpoprpush](../classes/RedisClient.md#lpoprpush)
- [lrange](../classes/RedisClient.md#lrange)
- [lrem](../classes/RedisClient.md#lrem)
- [multi](../classes/RedisClient.md#multi)
- [off](../classes/RedisClient.md#off)
- [on](../classes/RedisClient.md#on)
- [once](../classes/RedisClient.md#once)
- [prependListener](../classes/RedisClient.md#prependlistener)
- [prependOnceListener](../classes/RedisClient.md#prependoncelistener)
- [psubscribe](../classes/RedisClient.md#psubscribe)
- [publish](../classes/RedisClient.md#publish)
- [punsubscribe](../classes/RedisClient.md#punsubscribe)
- [quit](../classes/RedisClient.md#quit)
- [rawListeners](../classes/RedisClient.md#rawlisteners)
- [removeAllListeners](../classes/RedisClient.md#removealllisteners)
- [removeListener](../classes/RedisClient.md#removelistener)
- [rpop](../classes/RedisClient.md#rpop)
- [rpoplpush](../classes/RedisClient.md#rpoplpush)
- [runScript](../classes/RedisClient.md#runscript)
- [sadd](../classes/RedisClient.md#sadd)
- [set](../classes/RedisClient.md#set)
- [setMaxListeners](../classes/RedisClient.md#setmaxlisteners)
- [sismember](../classes/RedisClient.md#sismember)
- [smembers](../classes/RedisClient.md#smembers)
- [srem](../classes/RedisClient.md#srem)
- [sscan](../classes/RedisClient.md#sscan)
- [sscanAll](../classes/RedisClient.md#sscanall)
- [subscribe](../classes/RedisClient.md#subscribe)
- [unsubscribe](../classes/RedisClient.md#unsubscribe)
- [unwatch](../classes/RedisClient.md#unwatch)
- [updateServerVersion](../classes/RedisClient.md#updateserverversion)
- [validateRedisServerSupport](../classes/RedisClient.md#validateredisserversupport)
- [validateRedisVersion](../classes/RedisClient.md#validateredisversion)
- [watch](../classes/RedisClient.md#watch)
- [zadd](../classes/RedisClient.md#zadd)
- [zcard](../classes/RedisClient.md#zcard)
- [zpoprpush](../classes/RedisClient.md#zpoprpush)
- [zrange](../classes/RedisClient.md#zrange)
- [zrangebyscore](../classes/RedisClient.md#zrangebyscore)
- [zrangebyscorewithscores](../classes/RedisClient.md#zrangebyscorewithscores)
- [zrem](../classes/RedisClient.md#zrem)
- [zremrangebyscore](../classes/RedisClient.md#zremrangebyscore)
- [zrevrange](../classes/RedisClient.md#zrevrange)
- [zscan](../classes/RedisClient.md#zscan)
- [addAbortListener](../classes/RedisClient.md#addabortlistener)
- [addScript](../classes/RedisClient.md#addscript)
- [getEventListeners](../classes/RedisClient.md#geteventlisteners)
- [getMaxListeners](../classes/RedisClient.md#getmaxlisteners-1)
- [listenerCount](../classes/RedisClient.md#listenercount-1)
- [on](../classes/RedisClient.md#on-1)
- [once](../classes/RedisClient.md#once-1)
- [setMaxListeners](../classes/RedisClient.md#setmaxlisteners-1)

## Constructors

### constructor

• **new RedisClient**(`options?`): [`RedisClient`](../classes/RedisClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `EventEmitterOptions` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

#### Inherited from

EventEmitter.constructor

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](../classes/RedisClient.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](../classes/RedisClient.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

## Methods

### [captureRejectionSymbol]

▸ **[captureRejectionSymbol]**(`error`, `event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

EventEmitter.[captureRejectionSymbol]

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.addListener

___

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[brpoplpush](../interfaces/IRedisClient.md#brpoplpush)

___

### del

▸ **del**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[del](../interfaces/IRedisClient.md#del)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.emit

___

### end

▸ **end**(`flush`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flush` | `boolean` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[end](../interfaces/IRedisClient.md#end)

___

### evalsha

▸ **evalsha**(`hash`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `args` | `string` \| `number` \| (`string` \| `number`)[] |
| `cb` | (`err?`: ``null`` \| `Error`, `res?`: `unknown`) => `void` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[evalsha](../interfaces/IRedisClient.md#evalsha)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.eventNames

___

### flushall

▸ **flushall**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[flushall](../interfaces/IRedisClient.md#flushall)

___

### get

▸ **get**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[get](../interfaces/IRedisClient.md#get)

___

### getInfo

▸ **getInfo**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[getInfo](../interfaces/IRedisClient.md#getinfo)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](../classes/RedisClient.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

EventEmitter.getMaxListeners

___

### halt

▸ **halt**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[halt](../interfaces/IRedisClient.md#halt)

___

### hdel

▸ **hdel**(`key`, `fields`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fields` | `string` \| `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hdel](../interfaces/IRedisClient.md#hdel)

___

### hget

▸ **hget**(`key`, `field`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hget](../interfaces/IRedisClient.md#hget)

___

### hgetall

▸ **hgetall**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hgetall](../interfaces/IRedisClient.md#hgetall)

___

### hkeys

▸ **hkeys**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hkeys](../interfaces/IRedisClient.md#hkeys)

___

### hlen

▸ **hlen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hlen](../interfaces/IRedisClient.md#hlen)

___

### hmget

▸ **hmget**(`source`, `keys`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `keys` | `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<(``null`` \| `string`)[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hmget](../interfaces/IRedisClient.md#hmget)

___

### hscan

▸ **hscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `result`: `Record`<`string`, `string`>  }> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hscan](../interfaces/IRedisClient.md#hscan)

___

### hscanAll

▸ **hscanAll**(`key`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hscanAll](../interfaces/IRedisClient.md#hscanall)

___

### hset

▸ **hset**(`key`, `field`, `value`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `field` | `string` |
| `value` | `string` \| `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[hset](../interfaces/IRedisClient.md#hset)

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

EventEmitter.listenerCount

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.listeners

___

### llen

▸ **llen**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[llen](../interfaces/IRedisClient.md#llen)

___

### lmove

▸ **lmove**(`source`, `destination`, `from`, `to`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `from` | ``"LEFT"`` \| ``"RIGHT"`` |
| `to` | ``"LEFT"`` \| ``"RIGHT"`` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lmove](../interfaces/IRedisClient.md#lmove)

___

### loadScript

▸ **loadScript**(`script`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `script` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[loadScript](../interfaces/IRedisClient.md#loadscript)

___

### loadScripts

▸ **loadScripts**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[loadScripts](../interfaces/IRedisClient.md#loadscripts)

___

### lpoprpush

▸ **lpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lpoprpush](../interfaces/IRedisClient.md#lpoprpush)

___

### lrange

▸ **lrange**(`key`, `start`, `stop`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `stop` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lrange](../interfaces/IRedisClient.md#lrange)

___

### lrem

▸ **lrem**(`key`, `count`, `element`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `element` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[lrem](../interfaces/IRedisClient.md#lrem)

___

### multi

▸ **multi**(): [`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Returns

[`IRedisTransaction`](../interfaces/IRedisTransaction.md)

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[multi](../interfaces/IRedisClient.md#multi)

___

### off

▸ **off**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v10.0.0

#### Inherited from

EventEmitter.off

___

### on

▸ **on**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.1.101

#### Inherited from

EventEmitter.on

___

### once

▸ **once**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.3.0

#### Inherited from

EventEmitter.once

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependOnceListener

___

### psubscribe

▸ **psubscribe**(`pattern`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[psubscribe](../interfaces/IRedisClient.md#psubscribe)

___

### publish

▸ **publish**(`channel`, `message`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[publish](../interfaces/IRedisClient.md#publish)

___

### punsubscribe

▸ **punsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[punsubscribe](../interfaces/IRedisClient.md#punsubscribe)

___

### quit

▸ **quit**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[quit](../interfaces/IRedisClient.md#quit)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

EventEmitter.rawListeners

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RedisClient`](../classes/RedisClient.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeAllListeners

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`RedisClient`](../classes/RedisClient.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeListener

___

### rpop

▸ **rpop**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[rpop](../interfaces/IRedisClient.md#rpop)

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[rpoplpush](../interfaces/IRedisClient.md#rpoplpush)

___

### runScript

▸ **runScript**(`scriptName`, `keys`, `args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `keys` | (`string` \| `number`)[] |
| `args` | (`string` \| `number`)[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`unknown`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[runScript](../interfaces/IRedisClient.md#runscript)

___

### sadd

▸ **sadd**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sadd](../interfaces/IRedisClient.md#sadd)

___

### set

▸ **set**(`key`, `value`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |
| `options` | `Object` |
| `options.exists?` | ``"NX"`` \| ``"XX"`` |
| `options.expire?` | `Object` |
| `options.expire.mode` | ``"EX"`` \| ``"PX"`` |
| `options.expire.value` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[set](../interfaces/IRedisClient.md#set)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RedisClient`](../classes/RedisClient.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RedisClient`](../classes/RedisClient.md)

**`Since`**

v0.3.5

#### Inherited from

EventEmitter.setMaxListeners

___

### sismember

▸ **sismember**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sismember](../interfaces/IRedisClient.md#sismember)

___

### smembers

▸ **smembers**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[smembers](../interfaces/IRedisClient.md#smembers)

___

### srem

▸ **srem**(`key`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[srem](../interfaces/IRedisClient.md#srem)

___

### sscan

▸ **sscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sscan](../interfaces/IRedisClient.md#sscan)

___

### sscanAll

▸ **sscanAll**(`key`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[sscanAll](../interfaces/IRedisClient.md#sscanall)

___

### subscribe

▸ **subscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[subscribe](../interfaces/IRedisClient.md#subscribe)

___

### unsubscribe

▸ **unsubscribe**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[unsubscribe](../interfaces/IRedisClient.md#unsubscribe)

___

### unwatch

▸ **unwatch**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[unwatch](../interfaces/IRedisClient.md#unwatch)

___

### updateServerVersion

▸ **updateServerVersion**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[updateServerVersion](../interfaces/IRedisClient.md#updateserverversion)

___

### validateRedisServerSupport

▸ **validateRedisServerSupport**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`void`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[validateRedisServerSupport](../interfaces/IRedisClient.md#validateredisserversupport)

___

### validateRedisVersion

▸ **validateRedisVersion**(`major`, `feature?`, `minor?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `major` | `number` | `undefined` |
| `feature` | `number` | `0` |
| `minor` | `number` | `0` |

#### Returns

`boolean`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[validateRedisVersion](../interfaces/IRedisClient.md#validateredisversion)

___

### watch

▸ **watch**(`args`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[watch](../interfaces/IRedisClient.md#watch)

___

### zadd

▸ **zadd**(`key`, `score`, `member`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `score` | `number` |
| `member` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string` \| `number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zadd](../interfaces/IRedisClient.md#zadd)

___

### zcard

▸ **zcard**(`key`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zcard](../interfaces/IRedisClient.md#zcard)

___

### zpoprpush

▸ **zpoprpush**(`source`, `destination`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<``null`` \| `string`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zpoprpush](../interfaces/IRedisClient.md#zpoprpush)

___

### zrange

▸ **zrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrange](../interfaces/IRedisClient.md#zrange)

___

### zrangebyscore

▸ **zrangebyscore**(`key`, `min`, `max`, `offset`, `count`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `offset` | `number` |
| `count` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrangebyscore](../interfaces/IRedisClient.md#zrangebyscore)

___

### zrangebyscorewithscores

▸ **zrangebyscorewithscores**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`Record`<`string`, `string`>> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrangebyscorewithscores](../interfaces/IRedisClient.md#zrangebyscorewithscores)

___

### zrem

▸ **zrem**(`source`, `id`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `id` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrem](../interfaces/IRedisClient.md#zrem)

___

### zremrangebyscore

▸ **zremrangebyscore**(`source`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`number`> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zremrangebyscore](../interfaces/IRedisClient.md#zremrangebyscore)

___

### zrevrange

▸ **zrevrange**(`key`, `min`, `max`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `min` | `number` |
| `max` | `number` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<`string`[]> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zrevrange](../interfaces/IRedisClient.md#zrevrange)

___

### zscan

▸ **zscan**(`key`, `cursor`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `cursor` | `string` |
| `options` | `Object` |
| `options.COUNT?` | `number` |
| `options.MATCH?` | `string` |
| `cb` | [`ICallback`](../interfaces/ICallback.md)<\{ `cursor`: `string` ; `items`: `string`[]  }> |

#### Returns

`void`

#### Implementation of

[IRedisClient](../interfaces/IRedisClient.md).[zscan](../interfaces/IRedisClient.md#zscan)

___

### addAbortListener

▸ **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

**`Since`**

v18.18.0

#### Inherited from

EventEmitter.addAbortListener

___

### addScript

▸ **addScript**(`name`, `content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `string` |

#### Returns

`void`

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

EventEmitter.getEventListeners

___

### getMaxListeners

▸ **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v18.17.0

#### Inherited from

EventEmitter.getMaxListeners

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

EventEmitter.listenerCount

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

EventEmitter.on

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

EventEmitter.once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]>

#### Inherited from

EventEmitter.once

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

EventEmitter.setMaxListeners
