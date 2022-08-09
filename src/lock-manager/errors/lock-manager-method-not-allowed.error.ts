import { LockManagerError } from './lock-manager.error';

export class LockManagerMethodNotAllowedError extends LockManagerError {
  constructor(
    message = `This method can not be used when autoExtend is enabled`,
  ) {
    super(message);
  }
}
