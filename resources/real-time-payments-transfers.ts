// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class RealTimePaymentsTransfers extends APIResource {
  /**
   * Create a Real Time Payments Transfer
   */
  create(
    body: RealTimePaymentsTransferCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimePaymentsTransfer>> {
    return this.post('/real_time_payments_transfers', { body, ...options });
  }

  /**
   * Retrieve a Real Time Payments Transfer
   */
  retrieve(
    realTimePaymentsTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimePaymentsTransfer>> {
    return this.get(`/real_time_payments_transfers/${realTimePaymentsTransferId}`, options);
  }

  /**
   * List Real Time Payments Transfers
   */
  list(
    query?: RealTimePaymentsTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsTransfersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<RealTimePaymentsTransfersPage>;
  list(
    query: RealTimePaymentsTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsTransfersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/real_time_payments_transfers', RealTimePaymentsTransfersPage, {
      query,
      ...options,
    });
  }
}

export class RealTimePaymentsTransfersPage extends Page<RealTimePaymentsTransfer> {}

/**
 * Real Time Payments transfers move funds, within seconds, between your Increase
 * account and any other account on the Real Time Payments network.
 */
export interface RealTimePaymentsTransfer {
  /**
   * The Account from which the transfer was sent.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: RealTimePaymentsTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: RealTimePaymentsTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The name of the transfer's recipient as provided by the sender.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For real time payments transfers this is always equal to `USD`.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The destination account number.
   */
  destination_account_number: string;

  /**
   * The destination American Bankers' Association (ABA) Routing Transit Number
   * (RTN).
   */
  destination_routing_number: string;

  /**
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The Real Time Payments Transfer's identifier.
   */
  id: string;

  /**
   * If the transfer is rejected by Real Time Payments or the destination financial
   * institution, this will contain supplemental details.
   */
  rejection: RealTimePaymentsTransfer.Rejection | null;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  remittance_information: string;

  /**
   * The Account Number the recipient will see as having sent the transfer.
   */
  source_account_number_id: string;

  /**
   * The lifecycle status of the transfer.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_submission'
    | 'submitted'
    | 'complete'
    | 'rejected'
    | 'requires_attention';

  /**
   * After the transfer is submitted to Real Time Payments, this will contain
   * supplemental details.
   */
  submission: RealTimePaymentsTransfer.Submission | null;

  /**
   * The Transaction funding the transfer once it is complete.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_payments_transfer`.
   */
  type: 'real_time_payments_transfer';
}

export namespace RealTimePaymentsTransfer {
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
   * After the transfer is submitted to Real Time Payments, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was submitted to The Clearing House.
     */
    submitted_at: string | null;

    /**
     * The Real Time Payments network identification of the transfer.
     */
    transaction_identification: string;
  }

  /**
   * If the transfer is rejected by Real Time Payments or the destination financial
   * institution, this will contain supplemental details.
   */
  export interface Rejection {
    /**
     * Additional information about the rejection provided by the recipient bank when
     * the `reject_reason_code` is `NARRATIVE`.
     */
    reject_reason_additional_information: string | null;

    /**
     * The reason the transfer was rejected as provided by the recipient bank or the
     * Real Time Payments network.
     */
    reject_reason_code:
      | 'account_closed'
      | 'account_blocked'
      | 'invalid_creditor_account_type'
      | 'invalid_creditor_account_number'
      | 'invalid_creditor_financial_institution_identifier'
      | 'end_customer_deceased'
      | 'narrative'
      | 'transaction_forbidden'
      | 'transaction_type_not_supported'
      | 'unexpected_amount'
      | 'amount_exceeds_bank_limits'
      | 'invalid_creditor_address'
      | 'unknown_end_customer'
      | 'invalid_debtor_address'
      | 'timeout'
      | 'unsupported_message_for_recipient'
      | 'recipient_connection_not_available'
      | 'real_time_payments_suspended'
      | 'instructed_agent_signed_off'
      | 'processing_error'
      | 'other';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was rejected.
     */
    rejected_at: string | null;
  }
}

export interface RealTimePaymentsTransferCreateParams {
  /**
   * The transfer amount in USD cents. For Real Time Payments transfers, must be
   * positive.
   */
  amount: number;

  /**
   * The name of the transfer's recipient.
   */
  creditor_name: string;

  /**
   * The destination account number.
   */
  destination_account_number?: string;

  /**
   * The destination American Bankers' Association (ABA) Routing Transit Number
   * (RTN).
   */
  destination_routing_number?: string;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `destination_account_number` and `destination_routing_number` must be
   * absent.
   */
  external_account_id?: string;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  remittance_information: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The identifier of the Account Number from which to send the transfer.
   */
  source_account_number_id: string;
}

export interface RealTimePaymentsTransferListParams extends PageParams {
  /**
   * Filter Real Time Payments Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * timestamp.
   */
  'created_at.after'?: string;

  /**
   * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * timestamp.
   */
  'created_at.before'?: string;

  /**
   * Return results on or after this
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
   */
  'created_at.on_or_after'?: string;

  /**
   * Return results on or before this
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
   */
  'created_at.on_or_before'?: string;

  /**
   * Filter Real Time Payments Transfers to those made to the specified External
   * Account.
   */
  external_account_id?: string;
}

export namespace RealTimePaymentsTransferListParams {
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
