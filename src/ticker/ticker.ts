/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { TFunction } from '../../types';
import { EventEmitter } from 'events';
import { events } from '../events/events';
import { PowerSwitch } from '../power-switch/power-switch';
import { TickerError } from './errors';
import { PanicError } from '../errors';

export class Ticker extends EventEmitter {
  protected powerManager = new PowerSwitch();
  protected onTickFn: TFunction;
  protected onNextTickFn: TFunction | null = null;
  protected time: number;

  protected timeout: NodeJS.Timeout | null = null;
  protected interval: NodeJS.Timeout | null = null;
  protected shutdownTimeout: NodeJS.Timeout | null = null;
  protected aborted = false;

  constructor(onTickFn: TFunction = () => void 0, time = 1000) {
    super();
    this.onTickFn = onTickFn;
    this.time = time;
    this.powerManager.goingUp();
  }

  protected shutdown(): void {
    if (this.shutdownTimeout) {
      clearTimeout(this.shutdownTimeout);
    }
    this.powerManager.commit();
    this.emit(events.DOWN);
  }

  protected onTick(): void {
    if (this.powerManager.isGoingDown()) {
      this.shutdown();
    } else if (this.powerManager.isRunning()) {
      const tickFn = this.onNextTickFn ?? this.onTickFn;
      this.onNextTickFn = null;
      tickFn();
    } else {
      this.emit(events.ERROR, new PanicError(`Unexpected call`));
    }
  }

  abort(): void {
    if (!this.aborted) {
      this.aborted = true;
      if (this.powerManager.isGoingDown()) this.shutdown();
      else this.quit();
    }
  }

  quit(): void {
    if (this.powerManager.isGoingUp()) {
      this.powerManager.rollback();
      this.emit(events.DOWN);
    } else if (this.aborted && this.powerManager.isDown()) {
      this.emit(events.DOWN);
    } else {
      this.powerManager.goingDown();
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.shutdown();
      } else if (this.interval) {
        clearInterval(this.interval);
        this.shutdown();
      } else if (this.aborted) {
        this.shutdown();
      } else {
        // waiting 1 min for nextTick()
        this.shutdownTimeout = setTimeout(() => {
          if (this.powerManager.isGoingDown()) {
            this.shutdown();
          }
        }, 60000);
      }
    }
  }

  isTicking(): boolean {
    return !!(this.timeout || this.interval);
  }

  nextTick(): void {
    if (this.isTicking()) {
      throw new TickerError('A timer is already running');
    }
    if (this.powerManager.isGoingDown()) {
      this.shutdown();
    } else {
      if (this.powerManager.isGoingUp()) {
        this.powerManager.commit();
      }
      if (this.powerManager.isRunning()) {
        this.timeout = setTimeout(() => {
          this.timeout = null;
          this.onTick();
        }, this.time);
      }
    }
  }

  nextTickFn(fn: TFunction): void {
    this.onNextTickFn = fn;
    this.nextTick();
  }

  runTimer(): void {
    if (this.isTicking()) {
      throw new TickerError('A timer is already running');
    }
    if (this.powerManager.isGoingUp()) {
      this.powerManager.commit();
    }
    if (this.powerManager.isRunning()) {
      this.interval = setInterval(() => this.onTick(), this.time);
    }
  }
}
