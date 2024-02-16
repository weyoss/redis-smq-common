/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { promisify, promisifyAll } from 'bluebird';
import { EventBusConnectionError } from '../../src/event/errors';
import { EventBus } from '../../src/event';

type TEvent = {
  e1: (arg: string) => void;
  'eventBus.disconnect': () => void;
};

test('EventBus: case 1', async () => {
  const getInstanceAsync = await promisify(EventBus.getInstance);
  const eventBusAsync0 = promisifyAll(await getInstanceAsync<TEvent>());
  const eventBusAsync = promisifyAll(await getInstanceAsync<TEvent>());
  expect(eventBusAsync).toBe(eventBusAsync0);

  // on
  const callback = jest.fn<unknown, unknown[], unknown>();
  eventBusAsync.on('e1', callback);
  eventBusAsync.emit('e1', 'hello');
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenNthCalledWith(1, 'hello');

  // once
  const callback2 = jest.fn<unknown, unknown[], unknown>();
  eventBusAsync.once('e1', callback2);
  eventBusAsync.emit('e1', 'hello1');
  eventBusAsync.emit('e1', 'hello2');
  expect(callback2).toHaveBeenCalledTimes(1);
  expect(callback2).toHaveBeenNthCalledWith(1, 'hello1');

  // removeListener
  const callback3 = jest.fn<unknown, unknown[], unknown>();
  eventBusAsync.on('e1', callback3);
  eventBusAsync.emit('e1', 'hello3');
  expect(callback3).toHaveBeenCalledTimes(1);
  expect(callback3).toHaveBeenNthCalledWith(1, 'hello3');
  eventBusAsync.removeListener('e1', callback3);
  eventBusAsync.emit('e1', 'hello4');
  expect(callback3).toHaveBeenCalledTimes(1);

  // removeAllListeners of an event
  const callback4 = jest.fn<unknown, unknown[], unknown>();
  eventBusAsync.on('e1', callback4);
  eventBusAsync.emit('e1', 'hello5');
  expect(callback4).toHaveBeenCalledTimes(1);
  expect(callback4).toHaveBeenNthCalledWith(1, 'hello5');
  eventBusAsync.removeAllListeners('e1');
  eventBusAsync.emit('e1', 'hello6');
  expect(callback4).toHaveBeenCalledTimes(1);

  // removeAllListeners
  const callback5 = jest.fn<unknown, unknown[], unknown>();
  eventBusAsync.on('e1', callback5);
  eventBusAsync.emit('e1', 'hello6');
  expect(callback5).toHaveBeenCalledTimes(1);
  expect(callback5).toHaveBeenNthCalledWith(1, 'hello6');
  eventBusAsync.removeAllListeners();
  eventBusAsync.emit('e1', 'hello7');
  expect(callback5).toHaveBeenCalledTimes(1);

  await eventBusAsync.disconnectAsync();
  expect(() => eventBusAsync.on('e1', () => void 0)).toThrow(
    EventBusConnectionError,
  );
  expect(() => eventBusAsync.once('e1', () => void 0)).toThrow(
    EventBusConnectionError,
  );
  expect(() => eventBusAsync.removeListener('e1', () => void 0)).toThrow(
    EventBusConnectionError,
  );
  expect(() => eventBusAsync.removeAllListeners('e1')).toThrow(
    EventBusConnectionError,
  );
  expect(() => eventBusAsync.removeAllListeners()).toThrow(
    EventBusConnectionError,
  );
  expect(() => eventBusAsync.emit('e1', 'hello8')).toThrow(
    EventBusConnectionError,
  );
});
