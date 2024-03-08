/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { v4 as uuid } from 'uuid';
import { async } from '../async/index.js';
import { ICallback } from '../common/index.js';
import { AbortError } from '../errors/index.js';
import { EventEmitter, TEventEmitterEvent } from '../event/index.js';
import { ILogger } from '../logger/index.js';
import { PowerSwitch } from '../power-switch/index.js';

export abstract class Runnable<
  Event extends TEventEmitterEvent,
> extends EventEmitter<Event> {
  protected id;
  protected powerSwitch;
  protected forceShutdownOnError = true;
  protected cleanUpBeforeShutdown = false;

  protected constructor() {
    super();
    this.id = uuid();
    this.powerSwitch = new PowerSwitch();
  }

  protected goingUp(): ((cb: ICallback<void>) => void)[] {
    return [];
  }

  protected goingDown(): ((cb: ICallback<void>) => void)[] {
    return [];
  }

  protected up(cb: ICallback<boolean>): void {
    this.powerSwitch.commit();
    cb(null, true);
  }

  protected down(cb: ICallback<boolean>): void {
    this.powerSwitch.commit();
    cb(null, true);
  }

  protected handleError(err: Error): void {
    if (this.isRunning()) {
      this.getLogger().error(err);
      this.shutdown(() => void 0);
    }
  }

  protected abstract getLogger(): ILogger;

  isRunning() {
    return this.powerSwitch.isRunning() || this.powerSwitch.isGoingUp();
  }

  isGoingUp() {
    return this.powerSwitch.isGoingUp();
  }

  isGoingDown() {
    return this.powerSwitch.isGoingDown();
  }

  isUp() {
    return this.powerSwitch.isUp();
  }

  isDown() {
    return this.powerSwitch.isDown();
  }

  run(cb: ICallback<boolean>): void {
    const r = this.powerSwitch.goingUp();
    if (r) {
      const tasks = this.goingUp().map((task) => (cb: ICallback<void>) => {
        if (this.isGoingUp()) {
          this.cleanUpBeforeShutdown = true;
          task(cb);
        } else cb(new AbortError());
      });
      async.waterfall(tasks, (err) => {
        if (this.isRunning()) {
          if (err) {
            if (this.forceShutdownOnError) this.shutdown(() => cb(err));
            else cb(err);
          } else this.up(cb);
        } else this.shutdown(() => cb(new AbortError()));
      });
    } else cb(null, r);
  }

  shutdown(cb: ICallback<void>): void {
    /*
    down and null -> do nothing
    down and goingUp -> rollback
    up and null -> rollback
    up and goingDown -> do nothing
     */
    if (this.isRunning()) {
      if (this.isGoingUp()) this.powerSwitch.rollback();
      if (this.isUp()) this.powerSwitch.goingDown();
      const tasks = this.goingDown();
      this.cleanUpBeforeShutdown = false;
      async.waterfall(tasks, () => {
        if (this.cleanUpBeforeShutdown) this.shutdown(cb);
        else this.down(() => cb());
      });
    } else cb();
  }

  getId(): string {
    return this.id;
  }
}
