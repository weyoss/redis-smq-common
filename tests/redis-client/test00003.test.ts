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

test('IORedisClient', async () => {
  await standardCommands({ client: ERedisConfigClient.IOREDIS });
  await scriptRunning({ client: ERedisConfigClient.IOREDIS });
  await pubSubChannel({ client: ERedisConfigClient.IOREDIS });
  await pubSubPattern({ client: ERedisConfigClient.IOREDIS });
  await transactionRunning({ client: ERedisConfigClient.IOREDIS });
});
