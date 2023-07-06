// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './';
import { Page, PageParams } from 'increase/pagination';

export class CheckTransfers extends APIResource {
  /**
   * Create a Check Transfer
   */
  create(
    body: CheckTransferCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post('/check_transfers', { body, ...options });
  }

  /**
   * Retrieve a Check Transfer
   */
  retrieve(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>> {
    return this.get(`/check_transfers/${checkTransferId}`, options);
  }

  /**
   * List Check Transfers
   */
  list(query?: CheckTransferListParams, options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage>;
  list(
    query: CheckTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckTransfersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/check_transfers', CheckTransfersPage, { query, ...options });
  }

  /**
   * Approve a Check Transfer
   */
  approve(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post(`/check_transfers/${checkTransferId}/approve`, options);
  }

  /**
   * Cancel a pending Check Transfer
   */
  cancel(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post(`/check_transfers/${checkTransferId}/cancel`, options);
  }

  /**
   * Request a stop payment on a Check Transfer
   */
  stopPayment(
    checkTransferId: string,
    body: CheckTransferStopPaymentParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post(`/check_transfers/${checkTransferId}/stop_payment`, { body, ...options });
  }
}

export class CheckTransfersPage extends Page<CheckTransfer> {}
// alias so we can export it in the namespace
type _CheckTransfersPage = CheckTransfersPage;

/**
 * Check Transfers move funds from your Increase account by mailing a physical
 * check.
 */
export interface CheckTransfer {
  /**
   * The Check transfer's identifier.
   */
  id: string;

  /**
   * The identifier of the Account from which funds will be transferred.
   */
  account_id: string;

  /**
   * The account number printed on the check.
   */
  account_number: string;

  /**
   * The city of the check's destination.
   */
  address_city: string | null;

  /**
   * The street address of the check's destination.
   */
  address_line1: string | null;

  /**
   * The second line of the address of the check's destination.
   */
  address_line2: string | null;

  /**
   * The state of the check's destination.
   */
  address_state: string | null;

  /**
   * The postal code of the check's destination.
   */
  address_zip: string | null;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: CheckTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: CheckTransfer.Cancellation | null;

  /**
   * The check number printed on the check.
   */
  check_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
   * currency.
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
   * After a check transfer is deposited, this will contain supplemental details.
   */
  deposit: CheckTransfer.Deposit | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the check was mailed.
   */
  mailed_at: string | null;

  /**
   * The descriptor that will be printed on the memo field on the check.
   */
  message: string | null;

  /**
   * The descriptor that will be printed on the letter included with the check.
   */
  note: string | null;

  /**
   * The identifier of the Pending Transaction associated with the check's creation.
   */
  pending_transaction_id: string | null;

  /**
   * The name that will be printed on the check.
   */
  recipient_name: string | null;

  /**
   * The return address to be printed on the check.
   */
  return_address: CheckTransfer.ReturnAddress | null;

  /**
   * The routing number printed on the check.
   */
  routing_number: string;

  /**
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is awaiting approval.
   * - `pending_submission` - The transfer is pending submission.
   * - `submitted` - The transfer is complete.
   * - `pending_mailing` - The check is queued for mailing.
   * - `mailed` - The check has been mailed.
   * - `canceled` - The transfer has been canceled.
   * - `deposited` - The check has been deposited.
   * - `stopped` - A stop-payment was requested for this check.
   * - `rejected` - The transfer has been rejected.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   */
  status:
    | 'pending_approval'
    | 'pending_submission'
    | 'submitted'
    | 'pending_mailing'
    | 'mailed'
    | 'canceled'
    | 'deposited'
    | 'stopped'
    | 'rejected'
    | 'requires_attention';

  /**
   * After a stop-payment is requested on the check, this will contain supplemental
   * details.
   */
  stop_payment_request: CheckTransfer.StopPaymentRequest | null;

  /**
   * After the transfer is submitted, this will contain supplemental details.
   */
  submission: CheckTransfer.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_transfer`.
   */
  type: 'check_transfer';
}

export namespace CheckTransfer {
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
   * After a check transfer is deposited, this will contain supplemental details.
   */
  export interface Deposit {
    /**
     * The identifier of the API File object containing an image of the back of the
     * deposited check.
     */
    back_image_file_id: string | null;

    /**
     * When the check was deposited.
     */
    deposited_at: string;

    /**
     * The identifier of the API File object containing an image of the front of the
     * deposited check.
     */
    front_image_file_id: string | null;

    /**
     * The identifier of the Transaction object created when the check was deposited.
     */
    transaction_id: string | null;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `check_transfer_deposit`.
     */
    type: 'check_transfer_deposit';
  }

  /**
   * The return address to be printed on the check.
   */
  export interface ReturnAddress {
    /**
     * The city of the address.
     */
    city: string | null;

    /**
     * The first line of the address.
     */
    line1: string | null;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The name of the address.
     */
    name: string | null;

    /**
     * The US state of the address.
     */
    state: string | null;

    /**
     * The postal code of the address.
     */
    zip: string | null;
  }

  /**
   * After a stop-payment is requested on the check, this will contain supplemental
   * details.
   */
  export interface StopPaymentRequest {
    /**
     * The reason why this transfer was stopped.
     *
     * - `mail_delivery_failed` - The check could not be delivered.
     * - `unknown` - The check was stopped for another reason.
     */
    reason: 'mail_delivery_failed' | 'unknown';

    /**
     * The time the stop-payment was requested.
     */
    requested_at: string;

    /**
     * The ID of the check transfer that was stopped.
     */
    transfer_id: string;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `check_transfer_stop_payment_request`.
     */
    type: 'check_transfer_stop_payment_request';
  }

  /**
   * After the transfer is submitted, this will contain supplemental details.
   */
  export interface Submission {
    /**
     * When this check transfer was submitted to our check printer.
     */
    submitted_at: string;
  }
}

export interface CheckTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The city of the check's destination.
   */
  address_city: string;

  /**
   * The street address of the check's destination.
   */
  address_line1: string;

  /**
   * The state of the check's destination.
   */
  address_state: string;

  /**
   * The postal code of the check's destination.
   */
  address_zip: string;

  /**
   * The transfer amount in cents.
   */
  amount: number;

  /**
   * The descriptor that will be printed on the memo field on the check.
   */
  message: string;

  /**
   * The name that will be printed on the check.
   */
  recipient_name: string;

  /**
   * The second line of the address of the check's destination.
   */
  address_line2?: string;

  /**
   * The descriptor that will be printed on the letter included with the check.
   */
  note?: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The return address to be printed on the check. If omitted this will default to
   * the address of the Entity of the Account used to make the Check Transfer.
   */
  return_address?: CheckTransferCreateParams.ReturnAddress;

  /**
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id?: string;
}

export namespace CheckTransferCreateParams {
  /**
   * The return address to be printed on the check. If omitted this will default to
   * the address of the Entity of the Account used to make the Check Transfer.
   */
  export interface ReturnAddress {
    /**
     * The city of the return address.
     */
    city: string;

    /**
     * The first line of the return address.
     */
    line1: string;

    /**
     * The name of the return address.
     */
    name: string;

    /**
     * The US state of the return address.
     */
    state: string;

    /**
     * The postal code of the return address.
     */
    zip: string;

    /**
     * The second line of the return address.
     */
    line2?: string;
  }
}

export interface CheckTransferListParams extends PageParams {
  /**
   * Filter Check Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: CheckTransferListParams.CreatedAt;
}

export namespace CheckTransferListParams {
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

export interface CheckTransferStopPaymentParams {
  /**
   * The reason why this transfer should be stopped.
   *
   * - `mail_delivery_failed` - The check could not be delivered.
   * - `unknown` - The check was stopped for another reason.
   */
  reason?: 'mail_delivery_failed' | 'unknown';
}

export namespace CheckTransfers {
  export import CheckTransfer = API.CheckTransfer;
  export type CheckTransfersPage = _CheckTransfersPage;
  export import CheckTransferCreateParams = API.CheckTransferCreateParams;
  export import CheckTransferListParams = API.CheckTransferListParams;
  export import CheckTransferStopPaymentParams = API.CheckTransferStopPaymentParams;
}
