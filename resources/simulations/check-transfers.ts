// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as CheckTransfers_ from '~/resources/check-transfers';

export class CheckTransfers extends APIResource {
  /**
   * Simulates the mailing of a Check Transfer. This transfer must first have a
   * `status` of `pending_approval` or `pending_submission`.
   */
  mail(
    checkTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfers_.CheckTransfer>> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/mail`, options);
  }
}
