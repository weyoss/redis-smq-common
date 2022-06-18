import { PowerManager } from '../../src/power-manager/power-manager';

test('PowerManager: case 1', () => {
  const powerManager = new PowerManager();
  expect(powerManager.isDown()).toBe(true);
  expect(powerManager.isRunning()).toBe(false);

  expect(powerManager.goingUp()).toBe(true);
  expect(() => powerManager.goingUp()).toThrow(
    'Can not switch state while another state transition is in progress',
  );
  expect(powerManager.isGoingUp()).toBe(true);
  expect(powerManager.isRunning()).toBe(false);

  powerManager.commit();
  expect(powerManager.isUp()).toBe(true);
  expect(powerManager.isRunning()).toBe(true);

  expect(powerManager.goingDown()).toBe(true);
  expect(() => powerManager.goingDown()).toThrow(
    'Can not switch state while another state transition is in progress',
  );
  expect(powerManager.isGoingDown()).toBe(true);
  expect(powerManager.isRunning()).toBe(false);

  powerManager.commit();
  expect(powerManager.isDown()).toBe(true);
  expect(powerManager.isRunning()).toBe(false);

  powerManager.goingUp();
  expect(powerManager.isGoingUp()).toBe(true);

  powerManager.rollback();
  expect(powerManager.isDown()).toBe(true);

  powerManager.goingUp();
  powerManager.commit();
  expect(() => powerManager.goingUp()).toThrow(
    'Can not switch to the same current state',
  );

  powerManager.goingDown();
  powerManager.rollback();
  expect(powerManager.isUp()).toBe(true);
  expect(() => powerManager.commit()).toThrow('Expected a pending state');

  powerManager.goingDown();
  powerManager.commit();
  expect(() => powerManager.commit()).toThrow('Expected a pending state');
  expect(() => powerManager.rollback()).toThrow('Expected a pending state');

  expect(() => powerManager.goingDown()).toThrow(
    'Can not switch to the same current state',
  );
});
