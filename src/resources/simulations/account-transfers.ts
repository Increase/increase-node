// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountTransfersAPI from '../account-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AccountTransfers extends APIResource {
  /**
   * If your account is configured to require approval for each transfer, this
   * endpoint simulates the approval of an [Account Transfer](#account-transfers).
   * You can also approve sandbox Account Transfers in the dashboard. This transfer
   * must first have a `status` of `pending_approval`.
   *
   * @example
   * ```ts
   * const accountTransfer =
   *   await client.simulations.accountTransfers.complete(
   *     'account_transfer_7k9qe1ysdgqztnt63l7n',
   *   );
   * ```
   */
  complete(
    accountTransferID: string,
    options?: RequestOptions,
  ): APIPromise<AccountTransfersAPI.AccountTransfer> {
    return this._client.post(path`/simulations/account_transfers/${accountTransferID}/complete`, options);
  }
}
