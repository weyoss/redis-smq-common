/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { PowerSwitch } from '../power-switch/power-switch';
import { ICallback, ILogger, TEventEmitterEvent } from '../../types';
import { v4 as uuid } from 'uuid';
import { async } from '../async/async';
import { EventEmitter } from '../event';

export abstract class Runnable<
  RunnableEvent extends TEventEmitterEvent,
> extends EventEmitter<RunnableEvent> {
  protected id;
  protected powerSwitch;
  protected logger;
  protected forceShutdownOnError = true;

  protected constructor(logger: ILogger) {
    super();
    this.id = uuid();
    this.powerSwitch = new PowerSwitch();
    this.logger = logger;
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

  protected forceShutdown(cb: ICallback<void>): void {
    if (this.powerSwitch.isGoingUp()) this.powerSwitch.rollback();
    if (this.powerSwitch.isRunning()) this.powerSwitch.goingDown();
    const tasks = this.goingDown();
    async.waterfall(tasks, () => {
      if (this.powerSwitch.isGoingDown()) {
        this.down(() => cb());
      } else cb();
    });
  }

  protected handleError(err: Error): void {
    if (this.powerSwitch.isGoingUp() || this.powerSwitch.isRunning()) {
      this.logger.error(err);
      this.forceShutdown(() => void 0);
    }
  }

  isRunning() {
    return this.powerSwitch.isRunning() || this.powerSwitch.goingUp();
  }

  run(cb: ICallback<boolean>): void {
    const r = this.powerSwitch.goingUp();
    if (r) {
      const tasks = this.goingUp();
      async.waterfall(tasks, (err) => {
        if (err) {
          if (this.forceShutdownOnError) this.forceShutdown(() => cb(err));
          else cb(err);
        } else this.up(cb);
      });
    } else cb(null, r);
  }

  shutdown(cb: ICallback<boolean>): void {
    const r = this.powerSwitch.goingDown();
    if (r) {
      const tasks = this.goingDown();
      async.waterfall(tasks, () => {
        // ignoring shutdown errors
        this.down(cb);
      });
    } else cb(null, r);
  }

  getId(): string {
    return this.id;
  }
}
