/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import fs from 'fs';
import { resolve } from 'path';
import { getDirname } from '../../env/environment.js';
import { RedisClient } from '../../redis-client/redis-client.js';

export enum ELuaScript {
  RELEASE_LOCK = 'RELEASE_LOCK',
  EXTEND_LOCK = 'EXTEND_LOCK',
}

const dir = getDirname();

RedisClient.addScript(
  ELuaScript.RELEASE_LOCK,
  fs.readFileSync(resolve(dir, './lua/release-lock.lua')).toString(),
);
RedisClient.addScript(
  ELuaScript.EXTEND_LOCK,
  fs.readFileSync(resolve(dir, './lua/extend-lock.lua')).toString(),
);
