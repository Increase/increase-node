// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PendingTransactionsAPI from '../pending-transactions';

export class PendingTransactions extends APIResource {
  /**
   * This endpoint simulates immediately releasing an Inbound Funds Hold, which might
   * be created as a result of, for example, an ACH debit.
   *
   * @example
   * ```ts
   * const pendingTransaction =
   *   await client.simulations.pendingTransactions.releaseInboundFundsHold(
   *     'pending_transaction_k1sfetcau2qbvjbzgju4',
   *   );
   * ```
   */
  releaseInboundFundsHold(
    pendingTransactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PendingTransactionsAPI.PendingTransaction> {
    return this._client.post(
      `/simulations/pending_transactions/${pendingTransactionId}/release_inbound_funds_hold`,
      options,
    );
  }
}
