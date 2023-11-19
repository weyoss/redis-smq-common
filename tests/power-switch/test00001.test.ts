/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { PowerSwitch } from '../../src/power-switch/power-switch';

test('PowerSwitch: case 1', () => {
  const powerSwitch = new PowerSwitch();
  expect(powerSwitch.isDown()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  expect(powerSwitch.goingUp()).toBe(true);
  expect(() => powerSwitch.goingUp()).toThrow(
    'Can not switch state while another state transition is in progress',
  );
  expect(powerSwitch.isGoingUp()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  powerSwitch.commit();
  expect(powerSwitch.isUp()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(true);

  expect(powerSwitch.goingDown()).toBe(true);
  expect(() => powerSwitch.goingDown()).toThrow(
    'Can not switch state while another state transition is in progress',
  );
  expect(powerSwitch.isGoingDown()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  powerSwitch.commit();
  expect(powerSwitch.isDown()).toBe(true);
  expect(powerSwitch.isRunning()).toBe(false);

  powerSwitch.goingUp();
  expect(powerSwitch.isGoingUp()).toBe(true);

  powerSwitch.rollback();
  expect(powerSwitch.isDown()).toBe(true);

  powerSwitch.goingUp();
  powerSwitch.commit();
  expect(() => powerSwitch.goingUp()).toThrow(
    'Can not switch to the same current state',
  );

  powerSwitch.goingDown();
  powerSwitch.rollback();
  expect(powerSwitch.isUp()).toBe(true);
  expect(() => powerSwitch.commit()).toThrow('Expected a pending state');

  powerSwitch.goingDown();
  powerSwitch.commit();
  expect(() => powerSwitch.commit()).toThrow('Expected a pending state');
  expect(() => powerSwitch.rollback()).toThrow('Expected a pending state');

  expect(() => powerSwitch.goingDown()).toThrow(
    'Can not switch to the same current state',
  );
});
