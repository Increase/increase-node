// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as AccountTransfers_ from '~/resources/account-transfers';

export class AccountTransfers extends APIResource {
  /**
   * If your account is configured to require approval for each transfer, this
   * endpoint simulates the approval of an [Account Transfer](#account-transfers).
   * You can also approve sandbox Account Transfers in the dashboard. This transfer
   * must first have a `status` of `pending_approval`.
   */
  complete(
    accountTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfers_.AccountTransfer>> {
    return this.post(`/simulations/account_transfers/${accountTransferId}/complete`, options);
  }
}
