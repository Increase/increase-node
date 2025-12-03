// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckTransfersAPI from '../check-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CheckTransfers extends APIResource {
  /**
   * Simulates the mailing of a [Check Transfer](#check-transfers), which happens
   * periodically throughout the day in production but can be sped up in sandbox.
   * This transfer must first have a `status` of `pending_approval` or
   * `pending_submission`.
   *
   * @example
   * ```ts
   * const checkTransfer =
   *   await client.simulations.checkTransfers.mail(
   *     'check_transfer_30b43acfu9vw8fyc4f5',
   *   );
   * ```
   */
  mail(checkTransferID: string, options?: RequestOptions): APIPromise<CheckTransfersAPI.CheckTransfer> {
    return this._client.post(path`/simulations/check_transfers/${checkTransferID}/mail`, options);
  }
}
