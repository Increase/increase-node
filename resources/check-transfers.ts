// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

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
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post(`/check_transfers/${checkTransferId}/stop_payment`, options);
  }
}

export class CheckTransfersPage extends Page<CheckTransfer> {}

/**
 * Check Transfers move funds from your Increase account by mailing a physical
 * check.
 */
export interface CheckTransfer {
  /**
   * The identifier of the Account from which funds will be transferred.
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
   * The second line of the address of the check's destination.
   */
  address_line2: string | null;

  /**
   * The state of the check's destination.
   */
  address_state: string;

  /**
   * The postal code of the check's destination.
   */
  address_zip: string;

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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
   * currency.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * After a check transfer is deposited, this will contain supplemental details.
   */
  deposit: CheckTransfer.Deposit | null;

  /**
   * The Check transfer's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the check was mailed.
   */
  mailed_at: string | null;

  /**
   * The descriptor that will be printed on the memo field on the check.
   */
  message: string;

  /**
   * The descriptor that will be printed on the letter included with the check.
   */
  note: string | null;

  /**
   * The name that will be printed on the check.
   */
  recipient_name: string;

  /**
   * The return address to be printed on the check.
   */
  return_address: CheckTransfer.ReturnAddress | null;

  /**
   * After a check transfer is returned, this will contain supplemental details. A
   * check transfer is returned when the receiver mails a never deposited check back
   * to the bank printed on the check.
   */
  return_details: CheckTransfer.ReturnDetails | null;

  /**
   * The lifecycle status of the transfer.
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
    | 'returned'
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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the check was submitted.
   */
  submitted_at: string | null;

  /**
   * The ID for the transaction caused by the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_transfer`.
   */
  type: 'check_transfer';
}

export namespace CheckTransfer {
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

  export interface Submission {
    /**
     * The identitying number of the check.
     */
    check_number: string;

    /**
     * When this check transfer was submitted to our check printer.
     */
    submitted_at: string;
  }

  export interface StopPaymentRequest {
    /**
     * The time the stop-payment was requested.
     */
    requested_at: string;

    /**
     * The transaction ID of the corresponding credit transaction.
     */
    transaction_id: string;

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

  export interface Deposit {
    /**
     * The ID for the File containing the image of the rear of the check.
     */
    back_image_file_id: string | null;

    /**
     * When the check was deposited.
     */
    deposited_at: string;

    /**
     * The ID for the File containing the image of the front of the check.
     */
    front_image_file_id: string | null;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `check_transfer_deposit`.
     */
    type: 'check_transfer_deposit';
  }

  export interface ReturnDetails {
    /**
     * If available, a document with additional information about the return.
     */
    file_id: string | null;

    /**
     * The reason why the check was returned.
     */
    reason: 'mail_delivery_failure' | 'refused_by_recipient';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check was returned.
     */
    returned_at: string;

    /**
     * The identifier of the Transaction that was created to credit you for the
     * returned check.
     */
    transaction_id: string | null;

    /**
     * The identifier of the returned Check Transfer.
     */
    transfer_id: string;
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
   * The second line of the address of the check's destination.
   */
  address_line2?: string;

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
   * The descriptor that will be printed on the letter included with the check.
   */
  note?: string;

  /**
   * The name that will be printed on the check.
   */
  recipient_name: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The return address to be printed on the check. If omitted this will default to
   * the address of the Entity of the Account used to make the Check Transfer.
   */
  return_address?: CheckTransferCreateParams.ReturnAddress;
}

export namespace CheckTransferCreateParams {
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
