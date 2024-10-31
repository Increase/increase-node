// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class InboundRealTimePaymentsTransfers extends APIResource {
  /**
   * Retrieve an Inbound Real-Time Payments Transfer
   */
  retrieve(
    inboundRealTimePaymentsTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundRealTimePaymentsTransfer> {
    return this._client.get(
      `/inbound_real_time_payments_transfers/${inboundRealTimePaymentsTransferId}`,
      options,
    );
  }

  /**
   * List Inbound Real-Time Payments Transfers
   */
  list(
    query?: InboundRealTimePaymentsTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundRealTimePaymentsTransfersPage, InboundRealTimePaymentsTransfer>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundRealTimePaymentsTransfersPage, InboundRealTimePaymentsTransfer>;
  list(
    query: InboundRealTimePaymentsTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundRealTimePaymentsTransfersPage, InboundRealTimePaymentsTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList(
      '/inbound_real_time_payments_transfers',
      InboundRealTimePaymentsTransfersPage,
      { query, ...options },
    );
  }
}

export class InboundRealTimePaymentsTransfersPage extends Page<InboundRealTimePaymentsTransfer> {}

/**
 * An Inbound Real-Time Payments Transfer is a Real-Time Payments transfer
 * initiated outside of Increase to your account.
 */
export interface InboundRealTimePaymentsTransfer {
  /**
   * The inbound Real-Time Payments transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer was sent.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

  /**
   * The amount in USD cents.
   */
  amount: number;

  /**
   * If your transfer is confirmed, this will contain details of the confirmation.
   */
  confirmation: InboundRealTimePaymentsTransfer.Confirmation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The name the sender of the transfer specified as the recipient of the transfer.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's
   * currency. This will always be "USD" for a Real-Time Payments transfer.
   *
   * - `CAD` - Canadian Dollar (CAD)
   * - `CHF` - Swiss Franc (CHF)
   * - `EUR` - Euro (EUR)
   * - `GBP` - British Pound (GBP)
   * - `JPY` - Japanese Yen (JPY)
   * - `USD` - US Dollar (USD)
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The account number of the account that sent the transfer.
   */
  debtor_account_number: string;

  /**
   * The name provided by the sender of the transfer.
   */
  debtor_name: string;

  /**
   * The routing number of the account that sent the transfer.
   */
  debtor_routing_number: string;

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  decline: InboundRealTimePaymentsTransfer.Decline | null;

  /**
   * Additional information included with the transfer.
   */
  remittance_information: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_confirming` - The transfer is pending confirmation.
   * - `timed_out` - The transfer was not responded to in time.
   * - `confirmed` - The transfer has been received successfully and is confirmed.
   * - `declined` - The transfer has been declined.
   */
  status: 'pending_confirming' | 'timed_out' | 'confirmed' | 'declined';

  /**
   * The Real-Time Payments network identification of the transfer.
   */
  transaction_identification: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_real_time_payments_transfer`.
   */
  type: 'inbound_real_time_payments_transfer';
}

export namespace InboundRealTimePaymentsTransfer {
  /**
   * If your transfer is confirmed, this will contain details of the confirmation.
   */
  export interface Confirmation {
    /**
     * The time at which the transfer was confirmed.
     */
    confirmed_at: string;

    /**
     * The id of the transaction for the confirmed transfer.
     */
    transaction_id: string;
  }

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  export interface Decline {
    /**
     * The time at which the transfer was declined.
     */
    declined_at: string;

    /**
     * The id of the transaction for the declined transfer.
     */
    declined_transaction_id: string;

    /**
     * The reason for the transfer decline.
     *
     * - `account_number_canceled` - The account number is canceled.
     * - `account_number_disabled` - The account number is disabled.
     * - `account_restricted` - Your account is restricted.
     * - `group_locked` - Your account is inactive.
     * - `entity_not_active` - The account's entity is not active.
     * - `real_time_payments_not_enabled` - Your account is not enabled to receive
     *   Real-Time Payments transfers.
     */
    reason:
      | 'account_number_canceled'
      | 'account_number_disabled'
      | 'account_restricted'
      | 'group_locked'
      | 'entity_not_active'
      | 'real_time_payments_not_enabled';
  }
}

export interface InboundRealTimePaymentsTransferListParams extends PageParams {
  /**
   * Filter Inbound Real-Time Payments Transfers to those belonging to the specified
   * Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Real-Time Payments Transfers to ones belonging to the specified
   * Account Number.
   */
  account_number_id?: string;

  created_at?: InboundRealTimePaymentsTransferListParams.CreatedAt;
}

export namespace InboundRealTimePaymentsTransferListParams {
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

InboundRealTimePaymentsTransfers.InboundRealTimePaymentsTransfersPage = InboundRealTimePaymentsTransfersPage;

export declare namespace InboundRealTimePaymentsTransfers {
  export {
    type InboundRealTimePaymentsTransfer as InboundRealTimePaymentsTransfer,
    InboundRealTimePaymentsTransfersPage as InboundRealTimePaymentsTransfersPage,
    type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams,
  };
}
