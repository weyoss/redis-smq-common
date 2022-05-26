import { Ticker } from '../ticker/ticker';
import { ICallback } from '../../types';
import { events } from '../events/events';
import { PowerManager } from '../power-manager/power-manager';
import { PanicError } from '../errors/panic.error';

export abstract class Worker {
  private readonly ticker: Ticker | null = null;
  private readonly powerManager: PowerManager | null = null;
  private readonly managed: boolean;

  constructor(managed: boolean, timeout = 1000) {
    this.managed = managed;
    if (!managed) {
      this.ticker = new Ticker(this.onTick, timeout);
      this.powerManager = new PowerManager();
    }
  }

  private getTicker = (): Ticker => {
    if (!this.ticker) {
      throw new PanicError(`Expected an instance of Ticker`);
    }
    return this.ticker;
  };

  private getPowerManager(): PowerManager {
    if (!this.powerManager) {
      throw new PanicError('Expected an instance of PowerManager');
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
      throw new PanicError('You can not run a managed worker');
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
      ticker.on(events.DOWN, () => {
        powerManager.commit();
        cb();
      });
      ticker.quit();
    } else cb();
  };

  abstract work(cb: ICallback<void>): void;
}
