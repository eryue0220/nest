import { TcpSocket } from '../helpers';
import { BaseRpcContext } from './base-rpc.context';

type TcpContextArgs = [TcpSocket, string];

/**
 * @publicApi
 */
export class TcpContext extends BaseRpcContext<TcpContextArgs> {
  constructor(args: TcpContextArgs) {
    super(args);
  }

  /**
   * Returns the underlying JSON socket.
   */
  getSocketRef() {
    return this.args[0];
  }

  /**
   * Returns the name of the pattern.
   */
  getPattern() {
    return this.args[1];
  }
}
