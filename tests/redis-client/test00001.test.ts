/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { ERedisConfigClient } from '../../types';
import {
  pubSubChannel,
  pubSubPattern,
  scriptRunning,
  standardCommands,
  transactionRunning,
} from './common';

test('NodeRedisV4Client', async () => {
  await standardCommands({ client: ERedisConfigClient.REDIS_V4 });
  await scriptRunning({ client: ERedisConfigClient.REDIS_V4 });
  await pubSubChannel({ client: ERedisConfigClient.REDIS_V4 });
  await pubSubPattern({ client: ERedisConfigClient.REDIS_V4 });
  await transactionRunning({ client: ERedisConfigClient.REDIS_V4 });
});
