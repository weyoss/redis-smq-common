import { LockManagerError } from './lock-manager.error';

export class LockManagerNotAcquiredError extends LockManagerError {
  constructor(
    message = `Can not extend a lock which has not been yet acquired. Maybe a pending operation is in progress.`,
  ) {
    super(message);
  }
}
