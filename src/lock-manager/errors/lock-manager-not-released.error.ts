import { LockManagerError } from './lock-manager.error';

export class LockManagerNotReleasedError extends LockManagerError {
  constructor(
    message = `A lock has been already obtained but not yet released or maybe a pending operation is in progress.`,
  ) {
    super(message);
  }
}
