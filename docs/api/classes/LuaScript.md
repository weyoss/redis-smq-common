[RedisSMQ Common Library](../../../README.md) / [Docs](../../README.md) / [API](../README.md) / LuaScript

# Class: LuaScript

## Table of contents

### Methods

- [addScript](LuaScript.md#addscript)
- [getScriptId](LuaScript.md#getscriptid)
- [hasScript](LuaScript.md#hasscript)
- [loadScripts](LuaScript.md#loadscripts)
- [getInstance](LuaScript.md#getinstance)

## Methods

### addScript

▸ **addScript**(`name`, `content`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `string` |

#### Returns

`boolean`

___

### getScriptId

▸ **getScriptId**(`name`): `string` \| [`RedisClientError`](RedisClientError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string` \| [`RedisClientError`](RedisClientError.md)

___

### hasScript

▸ **hasScript**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

___

### loadScripts

▸ **loadScripts**(`redisClient`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `redisClient` | [`IRedisClient`](../interfaces/IRedisClient.md) |
| `cb` | [`ICallback`](../interfaces/ICallback.md)\<`void`\> |

#### Returns

`void`

___

### getInstance

▸ **getInstance**(): [`LuaScript`](LuaScript.md)

#### Returns

[`LuaScript`](LuaScript.md)
