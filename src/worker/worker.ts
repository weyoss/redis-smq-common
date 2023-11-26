/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { Ticker } from '../ticker/ticker';
import { ICallback } from '../../types';
import { PowerSwitch } from '../power-switch/power-switch';
import { WorkerError } from './errors';

export abstract class Worker {
  private readonly ticker: Ticker | null = null;
  private readonly powerManager: PowerSwitch | null = null;
  private readonly managed: boolean;

  constructor(managed: boolean, timeout = 1000) {
    this.managed = managed;
    if (!managed) {
      this.ticker = new Ticker(this.onTick, timeout);
      this.powerManager = new PowerSwitch();
    }
  }

  private getTicker = (): Ticker => {
    if (!this.ticker) {
      throw new WorkerError(`Expected an instance of Ticker`);
    }
    return this.ticker;
  };

  private getPowerManager(): PowerSwitch {
    if (!this.powerManager) {
      throw new WorkerError('Expected an instance of PowerSwitch');
    }
    return this.powerManager;
  }

  private onTick = (): void => {
    this.work((err) => {
      if (err) throw err;
      this.getTicker().nextTick();
    });
  };

  run = (): void => {
    if (this.managed) {
      throw new WorkerError('You can not run a managed worker');
    }
    const powerManager = this.getPowerManager();
    powerManager.goingUp();
    const ticker = this.getTicker();
    ticker.nextTick();
    powerManager.commit();
  };

  quit = (cb: ICallback<void>): void => {
    if (!this.managed) {
      const powerManager = this.getPowerManager();
      powerManager.goingDown();
      const ticker = this.getTicker();
      ticker.on('down', () => {
        powerManager.commit();
        cb();
      });
      ticker.quit();
    } else cb();
  };

  abstract work(cb: ICallback<void>): void;
}
