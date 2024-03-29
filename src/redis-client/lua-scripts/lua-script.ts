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
import { async } from '../../async/index.js';
import { ICallback } from '../../common/index.js';
import { getDirname } from '../../env/environment.js';
import { CallbackEmptyReplyError } from '../../errors/index.js';
import { RedisClientError } from '../errors/index.js';
import { IRedisClient } from '../types/index.js';

const dir = getDirname();

export enum ELuaScriptName {
  LPOPRPUSH = 'LPOPRPUSH',
  ZPOPRPUSH = 'ZPOPRPUSH',
}

export class LuaScript {
  protected static instance: LuaScript | null = null;
  protected scripts;
  protected isLoaded = false;

  protected constructor() {
    this.scripts = new Map<string, { id?: string; content: string }>();
    this.addScript(
      ELuaScriptName.ZPOPRPUSH,
      fs.readFileSync(resolve(dir, './scripts/zpoprpush.lua')).toString(),
    );
    this.addScript(
      ELuaScriptName.LPOPRPUSH,
      fs.readFileSync(resolve(dir, './scripts/lpoprpush.lua')).toString(),
    );
  }

  hasScript(name: string): boolean {
    return this.scripts.has(name);
  }

  addScript(name: string, content: string): boolean {
    if (this.hasScript(name)) return false;
    this.scripts.set(name, { content });
    this.isLoaded = false;
    return true;
  }

  loadScripts(redisClient: IRedisClient, cb: ICallback<void>): void {
    if (!this.isLoaded) {
      const tasks: ((cb: ICallback<void>) => void)[] = [];
      this.scripts.forEach((script) =>
        tasks.push((cb: ICallback<void>) => {
          if (script.id) cb();
          else {
            redisClient.loadScript(script.content, (err, sha) => {
              if (err) cb(err);
              else if (!sha) cb(new CallbackEmptyReplyError());
              else {
                script.id = sha;
                cb();
              }
            });
          }
        }),
      );
      async.waterfall(tasks, (err) => {
        if (err) cb(err);
        else {
          this.isLoaded = true;
          cb();
        }
      });
    } else cb();
  }

  getScriptId(name: string): string | RedisClientError {
    const { id } = this.scripts.get(name) ?? {};
    if (!id) {
      return new RedisClientError(`ID of script [${name}] is missing`);
    }
    return id;
  }

  static getInstance(): LuaScript {
    if (!LuaScript.instance) {
      LuaScript.instance = new LuaScript();
    }
    return LuaScript.instance;
  }
}
