import { ICallback } from '../../types';
import { RedisClient } from './redis-client';
import { EmptyCallbackReplyError } from '../errors/empty-callback-reply.error';
import { RedisClientError } from './redis-client.error';
import { async } from '../async/async';

export class LuaScripts {
  protected isLoaded = false;
  protected scripts = new Map<string, { id?: string; content: string }>();

  hasScript(name: string): boolean {
    return this.scripts.has(name);
  }

  addScript(name: string, content: string): boolean {
    if (this.hasScript(name)) return false;
    this.scripts.set(name, { content });
    this.isLoaded = false;
    return true;
  }

  loadScripts(redisClient: RedisClient, cb: ICallback<void>): void {
    if (!this.isLoaded) {
      const tasks: ((cb: ICallback<void>) => void)[] = [];
      this.scripts.forEach((script) =>
        tasks.push((cb: ICallback<void>) =>
          redisClient.loadScript(script.content, (err, sha) => {
            if (err) cb(err);
            else if (!sha) cb(new EmptyCallbackReplyError());
            else {
              script.id = sha;
              cb();
            }
          }),
        ),
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

  getScriptId(name: string): string {
    const { id } = this.scripts.get(name) ?? {};
    if (!id) {
      throw new RedisClientError(`ID of script [${name}] is missing`);
    }
    return id;
  }
}
