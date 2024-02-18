/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  jest,
} from '@jest/globals';
import { shutdown, startUp } from './common.js';

const noop = () => void 0;

beforeAll(noop);

afterAll(noop);

beforeEach(async () => {
  jest.resetAllMocks();
  await startUp();
  jest.resetModules();
});

afterEach(async () => {
  await shutdown();
});

jest.setTimeout(160000);
