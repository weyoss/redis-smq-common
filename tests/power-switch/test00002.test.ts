/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { expect, it } from '@jest/globals';
import { PowerSwitch } from '../../src/power-switch/power-switch.js';

it('PowerSwitch: case 2', () => {
  const powerSwitch = new PowerSwitch();
  expect(powerSwitch.isDown()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  expect(powerSwitch.goingUp()).toBe(true);
  expect(powerSwitch.goingUp()).toBe(false);

  expect(powerSwitch.commit()).toBe(true);
  expect(powerSwitch.commit()).toBe(false);
  expect(powerSwitch.goingUp()).toBe(false);

  expect(powerSwitch.goingDown()).toBe(true);
  expect(powerSwitch.goingDown()).toBe(false);

  expect(powerSwitch.commit()).toBe(true);
  expect(powerSwitch.commit()).toBe(false);
  expect(powerSwitch.goingDown()).toBe(false);
});
