/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { PowerSwitchError } from './errors';

export class PowerSwitch {
  protected throwExceptionOnError: boolean;
  protected isPowered = false;
  protected pendingState: boolean | null = null;

  constructor(throwExceptionOnError = true) {
    this.throwExceptionOnError = throwExceptionOnError;
  }

  protected switch(s: boolean): boolean {
    if (this.pendingState !== null) {
      if (this.throwExceptionOnError) {
        throw new PowerSwitchError(
          'Can not switch state while another state transition is in progress.',
        );
      }
      return false;
    }

    if (s === this.isPowered) {
      if (this.throwExceptionOnError) {
        throw new PowerSwitchError('Can not switch to the same current state.');
      }
      return false;
    }

    this.pendingState = s;
    return true;
  }

  isUp(): boolean {
    return this.isPowered;
  }

  isDown(): boolean {
    return !this.isPowered;
  }

  isGoingUp(): boolean {
    return this.pendingState === true;
  }

  isGoingDown(): boolean {
    return this.pendingState === false;
  }

  isRunning(): boolean {
    return this.isUp() && this.pendingState === null;
  }

  goingUp(): boolean {
    return this.switch(true);
  }

  goingDown(): boolean {
    return this.switch(false);
  }

  commit(): void {
    if (this.pendingState === null) {
      throw new PowerSwitchError(`Expected a pending state`);
    }
    this.isPowered = this.pendingState;
    this.pendingState = null;
  }

  rollback(): void {
    if (this.pendingState === null) {
      throw new PowerSwitchError(`Expected a pending state`);
    }
    this.pendingState = null;
  }
}
