import { ArgumentError } from './argument.error';
import { EmptyCallbackReplyError } from './empty-callback-reply.error';
import { GenericError } from './generic.error';
import { InvalidCallbackReplyError } from './invalid-callback-reply.error';
import { PanicError } from './panic.error';
import { RedisSMQError } from './redis-smq.error';

export const errors = {
  ArgumentError,
  EmptyCallbackReplyError,
  GenericError,
  InvalidCallbackReplyError,
  PanicError,
  RedisSMQError,
};
