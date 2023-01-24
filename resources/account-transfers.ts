// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class AccountTransfers extends APIResource {
  /**
   * Create an Account Transfer
   */
  create(
    body: AccountTransferCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfer>> {
    return this.post('/account_transfers', { body, ...options });
  }

  /**
   * Retrieve an Account Transfer
   */
  retrieve(
    accountTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfer>> {
    return this.get(`/account_transfers/${accountTransferId}`, options);
  }

  /**
   * List Account Transfers
   */
  list(
    query?: AccountTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountTransfersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountTransfersPage>;
  list(
    query: AccountTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountTransfersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/account_transfers', AccountTransfersPage, { query, ...options });
  }

  /**
   * Approve an Account Transfer
   */
  approve(
    accountTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfer>> {
    return this.post(`/account_transfers/${accountTransferId}/approve`, options);
  }

  /**
   * Cancel an Account Transfer
   */
  cancel(
    accountTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountTransfer>> {
    return this.post(`/account_transfers/${accountTransferId}/cancel`, options);
  }
}

export class AccountTransfersPage extends Page<AccountTransfer> {}

/**
 * Account transfers move funds between your own accounts at Increase.
 */
export interface AccountTransfer {
  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The transfer amount in the minor unit of the destination account currency. For
   * dollars, for example, this is cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: AccountTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: AccountTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
   * account currency.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The description that will show on the transactions.
   */
  description: string;

  /**
   * The destination account's identifier.
   */
  destination_account_id: string;

  /**
   * The ID for the transaction receiving the transfer.
   */
  destination_transaction_id: string | null;

  /**
   * The account transfer's identifier.
   */
  id: string;

  /**
   * The transfer's network.
   */
  network: 'account';

  /**
   * The lifecycle status of the transfer.
   */
  status:
    | 'pending_submission'
    | 'pending_approval'
    | 'canceled'
    | 'requires_attention'
    | 'flagged_by_operator'
    | 'complete';

  /**
   * If the transfer was created from a template, this will be the template's ID.
   */
  template_id: string | null;

  /**
   * The ID for the transaction funding the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_transfer`.
   */
  type: 'account_transfer';
}

export namespace AccountTransfer {
  export interface Approval {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was approved.
     */
    approved_at: string;
  }

  export interface Cancellation {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Transfer was canceled.
     */
    canceled_at: string;
  }
}

export interface AccountTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in the minor unit of the account currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * The description you choose to give the transfer.
   */
  description: string;

  /**
   * The identifier for the account that will receive the transfer.
   */
  destination_account_id: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;
}

export interface AccountTransferListParams extends PageParams {
  /**
   * Filter Account Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: AccountTransferListParams.CreatedAt;
}

export namespace AccountTransferListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}
