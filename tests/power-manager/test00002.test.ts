import { PowerManager } from '../../src/power-manager/power-manager';

test('PowerManager: case 2', () => {
  const powerManager = new PowerManager(false);
  expect(powerManager.isDown()).toBe(true);
  expect(powerManager.isRunning()).toBe(false);

  expect(powerManager.goingUp()).toBe(true);
  expect(powerManager.goingUp()).toBe(false);

  powerManager.commit();
  expect(powerManager.goingUp()).toBe(false);

  expect(powerManager.goingDown()).toBe(true);
  expect(powerManager.goingDown()).toBe(false);

  powerManager.commit();
  expect(powerManager.goingDown()).toBe(false);
});
