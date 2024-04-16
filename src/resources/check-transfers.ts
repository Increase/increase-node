// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as CheckTransfersAPI from 'increase/resources/check-transfers';
import { Page, type PageParams } from 'increase/pagination';

export class CheckTransfers extends APIResource {
  /**
   * Create a Check Transfer
   */
  create(body: CheckTransferCreateParams, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post('/check_transfers', { body, ...options });
  }

  /**
   * Retrieve a Check Transfer
   */
  retrieve(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.get(`/check_transfers/${checkTransferId}`, options);
  }

  /**
   * List Check Transfers
   */
  list(
    query?: CheckTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckTransfersPage, CheckTransfer>;
  list(options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage, CheckTransfer>;
  list(
    query: CheckTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckTransfersPage, CheckTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/check_transfers', CheckTransfersPage, { query, ...options });
  }

  /**
   * Approve a Check Transfer
   */
  approve(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post(`/check_transfers/${checkTransferId}/approve`, options);
  }

  /**
   * Cancel a pending Check Transfer
   */
  cancel(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post(`/check_transfers/${checkTransferId}/cancel`, options);
  }

  /**
   * Request a stop payment on a Check Transfer
   */
  stopPayment(
    checkTransferId: string,
    body: CheckTransferStopPaymentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckTransfer> {
    return this._client.post(`/check_transfers/${checkTransferId}/stop_payment`, { body, ...options });
  }
}

export class CheckTransfersPage extends Page<CheckTransfer> {}

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
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: CheckTransfer.Approval | null;

  /**
   * If the Check Transfer was successfully deposited, this will contain the
   * identifier of the Inbound Check Deposit object with details of the deposit.
   */
  approved_inbound_check_deposit_id: string | null;

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
   * Whether Increase will print and mail the check or if you will do it yourself.
   *
   * - `physical_check` - Increase will print and mail a physical check.
   * - `third_party` - Increase will not print a check; you are responsible for
   *   printing and mailing a check with the provided account number, routing number,
   *   check number, and amount.
   */
  fulfillment_method: 'physical_check' | 'third_party';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the check has been mailed by Increase, this will contain details of the
   * shipment.
   */
  mailing: CheckTransfer.Mailing | null;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * Details relating to the physical check that Increase will print and mail. Will
   * be present if and only if `fulfillment_method` is equal to `physical_check`.
   */
  physical_check: CheckTransfer.PhysicalCheck | null;

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
   * - `pending_mailing` - The check is queued for mailing.
   * - `mailed` - The check has been mailed.
   * - `canceled` - The transfer has been canceled.
   * - `deposited` - The check has been deposited.
   * - `stopped` - A stop-payment was requested for this check.
   * - `rejected` - The transfer has been rejected.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `returned` - The transfer has been returned.
   */
  status:
    | 'pending_approval'
    | 'pending_submission'
    | 'pending_mailing'
    | 'mailed'
    | 'canceled'
    | 'deposited'
    | 'stopped'
    | 'rejected'
    | 'requires_attention'
    | 'returned';

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
   * If the check has been mailed by Increase, this will contain details of the
   * shipment.
   */
  export interface Mailing {
    /**
     * The ID of the file corresponding to an image of the check that was mailed, if
     * available.
     */
    image_id: string | null;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check was mailed.
     */
    mailed_at: string;
  }

  /**
   * Details relating to the physical check that Increase will print and mail. Will
   * be present if and only if `fulfillment_method` is equal to `physical_check`.
   */
  export interface PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    mailing_address: PhysicalCheck.MailingAddress;

    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    memo: string | null;

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
    return_address: PhysicalCheck.ReturnAddress | null;
  }

  export namespace PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    export interface MailingAddress {
      /**
       * The city of the check's destination.
       */
      city: string | null;

      /**
       * The street address of the check's destination.
       */
      line1: string | null;

      /**
       * The second line of the address of the check's destination.
       */
      line2: string | null;

      /**
       * The name component of the check's mailing address.
       */
      name: string | null;

      /**
       * The postal code of the check's destination.
       */
      postal_code: string | null;

      /**
       * The state of the check's destination.
       */
      state: string | null;
    }

    /**
     * The return address to be printed on the check.
     */
    export interface ReturnAddress {
      /**
       * The city of the check's destination.
       */
      city: string | null;

      /**
       * The street address of the check's destination.
       */
      line1: string | null;

      /**
       * The second line of the address of the check's destination.
       */
      line2: string | null;

      /**
       * The name component of the check's return address.
       */
      name: string | null;

      /**
       * The postal code of the check's destination.
       */
      postal_code: string | null;

      /**
       * The state of the check's destination.
       */
      state: string | null;
    }
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
     * - `rejected_by_increase` - The check was canceled by an Increase operator who
     *   will provide details out-of-band.
     * - `not_authorized` - The check was not authorized.
     * - `unknown` - The check was stopped for another reason.
     */
    reason: 'mail_delivery_failed' | 'rejected_by_increase' | 'not_authorized' | 'unknown';

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
   * The transfer amount in cents.
   */
  amount: number;

  /**
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id: string;

  /**
   * Whether Increase will print and mail the check or if you will do it yourself.
   *
   * - `physical_check` - Increase will print and mail a physical check.
   * - `third_party` - Increase will not print a check; you are responsible for
   *   printing and mailing a check with the provided account number, routing number,
   *   check number, and amount.
   */
  fulfillment_method?: 'physical_check' | 'third_party';

  /**
   * Details relating to the physical check that Increase will print and mail. This
   * is required if `fulfillment_method` is equal to `physical_check`. It must not be
   * included if any other `fulfillment_method` is provided.
   */
  physical_check?: CheckTransferCreateParams.PhysicalCheck;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;
}

export namespace CheckTransferCreateParams {
  /**
   * Details relating to the physical check that Increase will print and mail. This
   * is required if `fulfillment_method` is equal to `physical_check`. It must not be
   * included if any other `fulfillment_method` is provided.
   */
  export interface PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    mailing_address: PhysicalCheck.MailingAddress;

    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    memo: string;

    /**
     * The name that will be printed on the check in the 'To:' field.
     */
    recipient_name: string;

    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note?: string;

    /**
     * The return address to be printed on the check. If omitted this will default to
     * the address of the Entity of the Account used to make the Check Transfer.
     */
    return_address?: PhysicalCheck.ReturnAddress;
  }

  export namespace PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    export interface MailingAddress {
      /**
       * The city component of the check's destination address.
       */
      city: string;

      /**
       * The first line of the address component of the check's destination address.
       */
      line1: string;

      /**
       * The postal code component of the check's destination address.
       */
      postal_code: string;

      /**
       * The US state component of the check's destination address.
       */
      state: string;

      /**
       * The second line of the address component of the check's destination address.
       */
      line2?: string;

      /**
       * The name component of the check's destination address. Defaults to the provided
       * `recipient_name` parameter.
       */
      name?: string;
    }

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
       * The postal code of the return address.
       */
      postal_code: string;

      /**
       * The US state of the return address.
       */
      state: string;

      /**
       * The second line of the return address.
       */
      line2?: string;
    }
  }
}

export interface CheckTransferListParams extends PageParams {
  /**
   * Filter Check Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: CheckTransferListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
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
   * - `not_authorized` - The check was not authorized.
   * - `unknown` - The check was stopped for another reason.
   */
  reason?: 'mail_delivery_failed' | 'not_authorized' | 'unknown';
}

export namespace CheckTransfers {
  export import CheckTransfer = CheckTransfersAPI.CheckTransfer;
  export import CheckTransfersPage = CheckTransfersAPI.CheckTransfersPage;
  export import CheckTransferCreateParams = CheckTransfersAPI.CheckTransferCreateParams;
  export import CheckTransferListParams = CheckTransfersAPI.CheckTransferListParams;
  export import CheckTransferStopPaymentParams = CheckTransfersAPI.CheckTransferStopPaymentParams;
}
