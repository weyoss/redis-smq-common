/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { PowerSwitch } from '../../src/power-switch/power-switch';

test('PowerSwitch: case 2', () => {
  const powerSwitch = new PowerSwitch(false);
  expect(powerSwitch.isDown()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  expect(powerSwitch.goingUp()).toBe(true);
  expect(powerSwitch.goingUp()).toBe(false);

  powerSwitch.commit();
  expect(powerSwitch.goingUp()).toBe(false);

  expect(powerSwitch.goingDown()).toBe(true);
  expect(powerSwitch.goingDown()).toBe(false);

  powerSwitch.commit();
  expect(powerSwitch.goingDown()).toBe(false);
});
