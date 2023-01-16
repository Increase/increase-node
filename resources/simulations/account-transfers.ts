// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as AccountTransfers_ from '~/resources/account-transfers';

export class AccountTransfers extends APIResource {
  /**
   * Simulates the completion of an Account Transfer. This transfer must first have a
   * `status` of `pending_approval`.
   */
  complete(
    accountTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfers_.AccountTransfer>> {
    return this.post(`/simulations/account_transfers/${accountTransferId}/complete`, options);
  }
}
