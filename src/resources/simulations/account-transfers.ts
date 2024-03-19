// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as AccountTransfersAPI from 'increase/resources/account-transfers';

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
  ): Core.APIPromise<AccountTransfersAPI.AccountTransfer> {
    return this._client.post(`/simulations/account_transfers/${accountTransferId}/complete`, options);
  }
}
