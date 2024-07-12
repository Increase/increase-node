// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WireTransfersAPI from '../wire-transfers';

export class WireTransfers extends APIResource {
  /**
   * Simulates the reversal of a [Wire Transfer](#wire-transfers) by the Federal
   * Reserve due to error conditions. This will also create a
   * [Transaction](#transaction) to account for the returned funds. This Wire
   * Transfer must first have a `status` of `complete`.
   */
  reverse(
    wireTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WireTransfersAPI.WireTransfer> {
    return this._client.post(`/simulations/wire_transfers/${wireTransferId}/reverse`, options);
  }

  /**
   * Simulates the submission of a [Wire Transfer](#wire-transfers) to the Federal
   * Reserve. This transfer must first have a `status` of `pending_approval` or
   * `pending_creating`.
   */
  submit(
    wireTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WireTransfersAPI.WireTransfer> {
    return this._client.post(`/simulations/wire_transfers/${wireTransferId}/submit`, options);
  }
}
