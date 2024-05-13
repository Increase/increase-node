// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CheckTransfersAPI from '../check-transfers';

export class CheckTransfers extends APIResource {
  /**
   * Simulates the mailing of a [Check Transfer](#check-transfers), which happens
   * once per weekday in production but can be sped up in sandbox. This transfer must
   * first have a `status` of `pending_approval` or `pending_submission`.
   */
  mail(
    checkTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckTransfersAPI.CheckTransfer> {
    return this._client.post(`/simulations/check_transfers/${checkTransferId}/mail`, options);
  }
}
