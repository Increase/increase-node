// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class WireTransfers extends APIResource {
  /**
   * Create a Wire Transfer
   */
  create(body: WireTransferCreateParams, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.post('/wire_transfers', { body, ...options });
  }

  /**
   * Retrieve a Wire Transfer
   */
  retrieve(wireTransferId: string, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.get(`/wire_transfers/${wireTransferId}`, options);
  }

  /**
   * List Wire Transfers
   */
  list(
    query?: WireTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WireTransfersPage, WireTransfer>;
  list(options?: Core.RequestOptions): Core.PagePromise<WireTransfersPage, WireTransfer>;
  list(
    query: WireTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WireTransfersPage, WireTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/wire_transfers', WireTransfersPage, { query, ...options });
  }

  /**
   * Approve a Wire Transfer
   */
  approve(wireTransferId: string, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.post(`/wire_transfers/${wireTransferId}/approve`, options);
  }

  /**
   * Cancel a pending Wire Transfer
   */
  cancel(wireTransferId: string, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.post(`/wire_transfers/${wireTransferId}/cancel`, options);
  }

  /**
   * Simulates the reversal of a [Wire Transfer](#wire-transfers) by the Federal
   * Reserve due to error conditions. This will also create a
   * [Transaction](#transaction) to account for the returned funds. This Wire
   * Transfer must first have a `status` of `complete`.'
   */
  reverse(wireTransferId: string, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.post(`/simulations/wire_transfers/${wireTransferId}/reverse`, options);
  }

  /**
   * Simulates the submission of a [Wire Transfer](#wire-transfers) to the Federal
   * Reserve. This transfer must first have a `status` of `pending_approval` or
   * `pending_creating`.
   */
  submit(wireTransferId: string, options?: Core.RequestOptions): Core.APIPromise<WireTransfer> {
    return this.post(`/simulations/wire_transfers/${wireTransferId}/submit`, options);
  }
}

export class WireTransfersPage extends Page<WireTransfer> {}
// alias so we can export it in the namespace
type _WireTransfersPage = WireTransfersPage;

/**
 * Wire transfers move funds between your Increase account and any other account
 * accessible by Fedwire.
 */
export interface WireTransfer {
  /**
   * The wire transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: WireTransfer.Approval | null;

  /**
   * The beneficiary's address line 1.
   */
  beneficiary_address_line1: string | null;

  /**
   * The beneficiary's address line 2.
   */
  beneficiary_address_line2: string | null;

  /**
   * The beneficiary's address line 3.
   */
  beneficiary_address_line3: string | null;

  /**
   * The beneficiary's name.
   */
  beneficiary_name: string | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: WireTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For wire transfers this is always equal to `usd`.
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
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The message that will show on the recipient's bank statement.
   */
  message_to_recipient: string | null;

  /**
   * The transfer's network.
   */
  network: 'wire';

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * If your transfer is reversed, this will contain details of the reversal.
   */
  reversal: WireTransfer.Reversal | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The lifecycle status of the transfer.
   *
   * - `canceled` - The transfer has been canceled.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `pending_approval` - The transfer is pending approval.
   * - `rejected` - The transfer has been rejected.
   * - `reversed` - The transfer has been reversed.
   * - `complete` - The transfer is complete.
   * - `pending_creating` - The transfer is pending creation.
   */
  status:
    | 'canceled'
    | 'requires_attention'
    | 'pending_approval'
    | 'rejected'
    | 'reversed'
    | 'complete'
    | 'pending_creating';

  /**
   * After the transfer is submitted to Fedwire, this will contain supplemental
   * details.
   */
  submission: WireTransfer.Submission | null;

  /**
   * The ID for the transaction funding the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `wire_transfer`.
   */
  type: 'wire_transfer';

  /**
   * The unique identifier you chose for this transfer.
   */
  unique_identifier: string | null;
}

export namespace WireTransfer {
  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  export interface Approval {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was approved.
     */
    approved_at: string;

    /**
     * If the Transfer was approved by a user in the dashboard, the email address of
     * that user.
     */
    approved_by: string | null;
  }

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  export interface Cancellation {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Transfer was canceled.
     */
    canceled_at: string;

    /**
     * If the Transfer was canceled by a user in the dashboard, the email address of
     * that user.
     */
    canceled_by: string | null;
  }

  /**
   * If your transfer is reversed, this will contain details of the reversal.
   */
  export interface Reversal {
    /**
     * The amount that was reversed in USD cents.
     */
    amount: number;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the reversal was created.
     */
    created_at: string;

    /**
     * The description on the reversal message from Fedwire, set by the reversing bank.
     */
    description: string;

    /**
     * Additional financial institution information included in the wire reversal.
     */
    financial_institution_to_financial_institution_information: string | null;

    /**
     * The Fedwire cycle date for the wire reversal. The "Fedwire day" begins at 9:00
     * PM Eastern Time on the evening before the `cycle date`.
     */
    input_cycle_date: string;

    /**
     * The Fedwire transaction identifier.
     */
    input_message_accountability_data: string;

    /**
     * The Fedwire sequence number.
     */
    input_sequence_number: string;

    /**
     * The Fedwire input source identifier.
     */
    input_source: string;

    /**
     * The Fedwire cycle date for the wire transfer that is being reversed by this
     * message.
     */
    previous_message_input_cycle_date: string;

    /**
     * The Fedwire transaction identifier for the wire transfer that was reversed.
     */
    previous_message_input_message_accountability_data: string;

    /**
     * The Fedwire sequence number for the wire transfer that was reversed.
     */
    previous_message_input_sequence_number: string;

    /**
     * The Fedwire input source identifier for the wire transfer that was reversed.
     */
    previous_message_input_source: string;

    /**
     * Information included in the wire reversal for the receiving financial
     * institution.
     */
    receiver_financial_institution_information: string | null;

    /**
     * The ID for the Transaction associated with the transfer reversal.
     */
    transaction_id: string;

    /**
     * The ID for the Wire Transfer that is being reversed.
     */
    wire_transfer_id: string;
  }

  /**
   * After the transfer is submitted to Fedwire, this will contain supplemental
   * details.
   */
  export interface Submission {
    /**
     * The accountability data for the submission.
     */
    input_message_accountability_data: string;

    /**
     * When this wire transfer was submitted to Fedwire.
     */
    submitted_at: string;
  }
}

export interface WireTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in cents.
   */
  amount: number;

  /**
   * The beneficiary's name.
   */
  beneficiary_name: string;

  /**
   * The message that will show on the recipient's bank statement.
   */
  message_to_recipient: string;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * The beneficiary's address line 1.
   */
  beneficiary_address_line1?: string;

  /**
   * The beneficiary's address line 2.
   */
  beneficiary_address_line2?: string;

  /**
   * The beneficiary's address line 3.
   */
  beneficiary_address_line3?: string;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number` and `routing_number` must be absent.
   */
  external_account_id?: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number?: string;

  /**
   * A unique identifier you choose for the transfer. Reusing this identifier for
   * another transfer will result in an error. You can query for the transfer
   * associated with this identifier using the List endpoint.
   */
  unique_identifier?: string;
}

export interface WireTransferListParams extends PageParams {
  /**
   * Filter Wire Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: WireTransferListParams.CreatedAt;

  /**
   * Filter Wire Transfers to those made to the specified External Account.
   */
  external_account_id?: string;

  /**
   * Filter Wire Transfers to the one with the specified unique identifier.
   */
  unique_identifier?: string;
}

export namespace WireTransferListParams {
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

export namespace WireTransfers {
  export import WireTransfer = API.WireTransfer;
  export type WireTransfersPage = _WireTransfersPage;
  export import WireTransferCreateParams = API.WireTransferCreateParams;
  export import WireTransferListParams = API.WireTransferListParams;
}
