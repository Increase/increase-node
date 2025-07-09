// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WireDrawdownRequestsAPI from '../wire-drawdown-requests';

export class WireDrawdownRequests extends APIResource {
  /**
   * Simulates a Wire Drawdown Request being refused by the debtor.
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.simulations.wireDrawdownRequests.refuse(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  refuse(
    wireDrawdownRequestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.post(`/simulations/wire_drawdown_requests/${wireDrawdownRequestId}/refuse`, options);
  }
}
