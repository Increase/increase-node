// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as RealTimePaymentsTransfersAPI from 'increase/resources/real-time-payments-transfers';
import { Page, type PageParams } from 'increase/pagination';

export class RealTimePaymentsTransfers extends APIResource {
  /**
   * Create a Real-Time Payments Transfer
   */
  create(
    body: RealTimePaymentsTransferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimePaymentsTransfer> {
    return this._client.post('/real_time_payments_transfers', { body, ...options });
  }

  /**
   * Retrieve a Real-Time Payments Transfer
   */
  retrieve(
    realTimePaymentsTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimePaymentsTransfer> {
    return this._client.get(`/real_time_payments_transfers/${realTimePaymentsTransferId}`, options);
  }

  /**
   * List Real-Time Payments Transfers
   */
  list(
    query?: RealTimePaymentsTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsTransfersPage, RealTimePaymentsTransfer>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsTransfersPage, RealTimePaymentsTransfer>;
  list(
    query: RealTimePaymentsTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsTransfersPage, RealTimePaymentsTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/real_time_payments_transfers', RealTimePaymentsTransfersPage, {
      query,
      ...options,
    });
  }
}

export class RealTimePaymentsTransfersPage extends Page<RealTimePaymentsTransfer> {}

/**
 * Real-Time Payments transfers move funds, within seconds, between your Increase
 * account and any other account on the Real-Time Payments network.
 */
export interface RealTimePaymentsTransfer {
  /**
   * The Real-Time Payments Transfer's identifier.
   */
  id: string;

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
   * currency. For real-time payments transfers this is always equal to `USD`.
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
   * The name of the transfer's sender. If not provided, the account's entity name
   * will be used.
   */
  debtor_name: string | null;

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
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * If the transfer is rejected by Real-Time Payments or the destination financial
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
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_submission` - The transfer is queued to be submitted to Real-Time
   *   Payments.
   * - `submitted` - The transfer has been submitted and is pending a response from
   *   Real-Time Payments.
   * - `complete` - The transfer has been sent successfully and is complete.
   * - `rejected` - The transfer was rejected by the network or the recipient's bank.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
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
   * After the transfer is submitted to Real-Time Payments, this will contain
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

  /**
   * The name of the party on whose behalf the creditor is receiving the payment.
   */
  ultimate_creditor_name: string | null;

  /**
   * The name of the the party on whose behalf the debtor is instructing the payment.
   */
  ultimate_debtor_name: string | null;
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
   * If the transfer is rejected by Real-Time Payments or the destination financial
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
     * Real-Time Payments network.
     *
     * - `account_closed` - The destination account is closed. Corresponds to the
     *   Real-Time Payments reason code `AC04`.
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the Real-Time Payments reason code
     *   `AC06`.
     * - `invalid_creditor_account_type` - The destination account is ineligible to
     *   receive Real-Time Payments transfers. Corresponds to the Real-Time Payments
     *   reason code `AC14`.
     * - `invalid_creditor_account_number` - The destination account does not exist.
     *   Corresponds to the Real-Time Payments reason code `AC03`.
     * - `invalid_creditor_financial_institution_identifier` - The destination routing
     *   number is invalid. Corresponds to the Real-Time Payments reason code `RC04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the Real-Time Payments reason code `MD07`.
     * - `narrative` - The reason is provided as narrative information in the
     *   additional information field.
     * - `transaction_forbidden` - Real-Time Payments transfers are not allowed to the
     *   destination account. Corresponds to the Real-Time Payments reason code `AG01`.
     * - `transaction_type_not_supported` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `AG03`.
     * - `unexpected_amount` - The amount of the transfer is different than expected by
     *   the recipient. Corresponds to the Real-Time Payments reason code `AM09`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the Real-Time Payments reason
     *   code `AM14`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the Real-Time Payments reason code `BE04`.
     * - `unknown_end_customer` - The specified creditor is unknown. Corresponds to the
     *   Real-Time Payments reason code `BE06`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the Real-Time Payments reason code `BE07`.
     * - `timeout` - There was a timeout processing the transfer. Corresponds to the
     *   Real-Time Payments reason code `DS24`.
     * - `unsupported_message_for_recipient` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `NOAT`.
     * - `recipient_connection_not_available` - The destination financial institution
     *   is currently not connected to Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code `9912`.
     * - `real_time_payments_suspended` - Real-Time Payments is currently unavailable.
     *   Corresponds to the Real-Time Payments reason code `9948`.
     * - `instructed_agent_signed_off` - The destination financial institution is
     *   currently signed off of Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code `9910`.
     * - `processing_error` - The transfer was rejected due to an internal Increase
     *   issue. We have been notified.
     * - `other` - Some other error or issue has occurred.
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

  /**
   * After the transfer is submitted to Real-Time Payments, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was submitted to The Clearing House.
     */
    submitted_at: string | null;

    /**
     * The Real-Time Payments network identification of the transfer.
     */
    transaction_identification: string;
  }
}

export interface RealTimePaymentsTransferCreateParams {
  /**
   * The transfer amount in USD cents. For Real-Time Payments transfers, must be
   * positive.
   */
  amount: number;

  /**
   * The name of the transfer's recipient.
   */
  creditor_name: string;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  remittance_information: string;

  /**
   * The identifier of the Account Number from which to send the transfer.
   */
  source_account_number_id: string;

  /**
   * The name of the transfer's sender. If not provided, the account's entity name
   * will be used.
   */
  debtor_name?: string;

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
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The name of the party on whose behalf the creditor is receiving the payment.
   */
  ultimate_creditor_name?: string;

  /**
   * The name of the the party on whose behalf the debtor is instructing the payment.
   */
  ultimate_debtor_name?: string;
}

export interface RealTimePaymentsTransferListParams extends PageParams {
  /**
   * Filter Real-Time Payments Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: RealTimePaymentsTransferListParams.CreatedAt;

  /**
   * Filter Real-Time Payments Transfers to those made to the specified External
   * Account.
   */
  external_account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
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

export namespace RealTimePaymentsTransfers {
  export import RealTimePaymentsTransfer = RealTimePaymentsTransfersAPI.RealTimePaymentsTransfer;
  export import RealTimePaymentsTransfersPage = RealTimePaymentsTransfersAPI.RealTimePaymentsTransfersPage;
  export import RealTimePaymentsTransferCreateParams = RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCreateParams;
  export import RealTimePaymentsTransferListParams = RealTimePaymentsTransfersAPI.RealTimePaymentsTransferListParams;
}
