/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { expect, it, jest } from '@jest/globals';
import bluebird from 'bluebird';
import { EventBusNotConnectedError } from '../../src/event-bus/errors/index.js';
import { EventBus } from '../../src/event-bus/event-bus.js';

type TEvent = {
  e1: (arg: string) => void;
  error: (err: Error) => void;
};

const getInstanceAsync = bluebird.promisify(EventBus.createInstance);

it('EventBus: case 1', async () => {
  const eventBusAsync = bluebird.promisifyAll(await getInstanceAsync<TEvent>());

  // on
  const callback = jest.fn();
  eventBusAsync.on('e1', callback);
  eventBusAsync.emit('e1', 'hello');
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenNthCalledWith(1, 'hello');

  // once
  const callback2 = jest.fn();
  eventBusAsync.once('e1', callback2);
  eventBusAsync.emit('e1', 'hello1');
  eventBusAsync.emit('e1', 'hello2');
  expect(callback2).toHaveBeenCalledTimes(1);
  expect(callback2).toHaveBeenNthCalledWith(1, 'hello1');

  // removeListener
  const callback3 = jest.fn();
  eventBusAsync.on('e1', callback3);
  eventBusAsync.emit('e1', 'hello3');
  expect(callback3).toHaveBeenCalledTimes(1);
  expect(callback3).toHaveBeenNthCalledWith(1, 'hello3');
  eventBusAsync.removeListener('e1', callback3);
  eventBusAsync.emit('e1', 'hello4');
  expect(callback3).toHaveBeenCalledTimes(1);

  // removeAllListeners of an event
  const callback4 = jest.fn();
  eventBusAsync.on('e1', callback4);
  eventBusAsync.emit('e1', 'hello5');
  expect(callback4).toHaveBeenCalledTimes(1);
  expect(callback4).toHaveBeenNthCalledWith(1, 'hello5');
  eventBusAsync.removeAllListeners('e1');
  eventBusAsync.emit('e1', 'hello6');
  expect(callback4).toHaveBeenCalledTimes(1);

  // removeAllListeners
  const callback5 = jest.fn();
  eventBusAsync.on('e1', callback5);
  eventBusAsync.emit('e1', 'hello6');
  expect(callback5).toHaveBeenCalledTimes(1);
  expect(callback5).toHaveBeenNthCalledWith(1, 'hello6');
  eventBusAsync.removeAllListeners();
  eventBusAsync.emit('e1', 'hello7');
  expect(callback5).toHaveBeenCalledTimes(1);

  await eventBusAsync.shutdownAsync();

  const errors: Error[] = [];
  eventBusAsync.once('error', (e) => errors.push(e));

  eventBusAsync.on('e1', () => void 0);
  expect(errors[0]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.on('error', (e) => errors.push(e));

  eventBusAsync.once('e1', () => void 0);
  expect(errors[1]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.removeListener('e1', () => void 0);
  expect(errors[2]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.removeAllListeners('e1');
  expect(errors[3]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.removeAllListeners();
  expect(errors[4]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.emit('e1', 'hello8');
  expect(errors[5]).toBeInstanceOf(EventBusNotConnectedError);

  eventBusAsync.removeListener('error', () => void 0);
  eventBusAsync.removeAllListeners('error');
});
