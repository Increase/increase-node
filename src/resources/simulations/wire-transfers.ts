// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WireTransfersAPI from '../wire-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WireTransfers extends APIResource {
  /**
   * Simulates the reversal of a [Wire Transfer](#wire-transfers) by the Federal
   * Reserve due to error conditions. This will also create a
   * [Transaction](#transaction) to account for the returned funds. This Wire
   * Transfer must first have a `status` of `complete`.
   *
   * @example
   * ```ts
   * const wireTransfer =
   *   await client.simulations.wireTransfers.reverse(
   *     'wire_transfer_5akynk7dqsq25qwk9q2u',
   *   );
   * ```
   */
  reverse(wireTransferID: string, options?: RequestOptions): APIPromise<WireTransfersAPI.WireTransfer> {
    return this._client.post(path`/simulations/wire_transfers/${wireTransferID}/reverse`, options);
  }

  /**
   * Simulates the submission of a [Wire Transfer](#wire-transfers) to the Federal
   * Reserve. This transfer must first have a `status` of `pending_approval` or
   * `pending_creating`.
   *
   * @example
   * ```ts
   * const wireTransfer =
   *   await client.simulations.wireTransfers.submit(
   *     'wire_transfer_5akynk7dqsq25qwk9q2u',
   *   );
   * ```
   */
  submit(wireTransferID: string, options?: RequestOptions): APIPromise<WireTransfersAPI.WireTransfer> {
    return this._client.post(path`/simulations/wire_transfers/${wireTransferID}/submit`, options);
  }
}
