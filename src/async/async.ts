/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ICallback, TFunction } from '../common/index.js';

const eachOf = <T>(
  collection: T[],
  iteratee: (item: T, key: number, callback: ICallback<void>) => void,
  callback: ICallback<void>,
): void => {
  if (collection.length) {
    let idx = 0;
    const iterate = () => {
      iteratee(collection[idx], idx, (err) => {
        idx += 1;
        if (err || idx >= collection.length) callback(err);
        else setTimeout(() => iterate(), 0);
      });
    };
    iterate();
  } else {
    callback();
  }
};

const eachIn = <T>(
  collection: Record<string, T>,
  iteratee: (item: T, key: string, callback: ICallback<void>) => void,
  callback: ICallback<void>,
): void => {
  const keys = Object.keys(collection);
  if (keys.length) {
    let idx = 0;
    const iterate = () => {
      const key = keys[idx];
      iteratee(collection[key], key, (err) => {
        idx += 1;
        if (err || idx >= keys.length) callback(err);
        else setTimeout(() => iterate(), 0);
      });
    };
    iterate();
  } else callback();
};

const each = <T>(
  collection: T[] | Record<string, T>,
  iteratee: (item: T, key: number | string, callback: ICallback<void>) => void,
  callback: ICallback<void>,
): void => {
  if (Array.isArray(collection)) eachOf(collection, iteratee, callback);
  else eachIn(collection, iteratee, callback);
};

const waterfall = <T>(tasks: TFunction[], callback: ICallback<T>): void => {
  if (tasks.length) {
    let idx = 0;
    const exec = (
      err?: Error | null,
      ...args: [result: T, ...rest: unknown[]]
    ): void => {
      idx += 1;
      if (err) {
        callback(err);
      } else if (idx < tasks.length) {
        setTimeout(() => {
          if (args.length) tasks[idx](...args, exec);
          else tasks[idx](exec);
        }, 0);
      } else if (args.length) {
        callback(null, args[0]);
      } else callback();
    };
    tasks[idx](exec);
  } else callback();
};

export const async = {
  each,
  eachIn,
  eachOf,
  waterfall,
};
