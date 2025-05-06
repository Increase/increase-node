// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class CheckTransfers extends APIResource {
  /**
   * Create a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 1000,
   *   fulfillment_method: 'physical_check',
   *   source_account_number_id:
   *     'account_number_v18nkfqm6afpsrvy82b2',
   * });
   * ```
   */
  create(body: CheckTransferCreateParams, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post('/check_transfers', { body, ...options });
  }

  /**
   * Retrieve a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.retrieve(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  retrieve(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.get(`/check_transfers/${checkTransferId}`, options);
  }

  /**
   * List Check Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkTransfer of client.checkTransfers.list()) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.approve(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  approve(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post(`/check_transfers/${checkTransferId}/approve`, options);
  }

  /**
   * Cancel a pending Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.cancel(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  cancel(checkTransferId: string, options?: Core.RequestOptions): Core.APIPromise<CheckTransfer> {
    return this._client.post(`/check_transfers/${checkTransferId}/cancel`, options);
  }

  /**
   * Request a stop payment on a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer =
   *   await client.checkTransfers.stopPayment(
   *     'check_transfer_30b43acfu9vw8fyc4f5',
   *   );
   * ```
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
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: CheckTransfer.CreatedBy | null;

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
   * - `canceled` - The transfer has been canceled.
   * - `pending_submission` - The transfer is pending submission.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `rejected` - The transfer has been rejected.
   * - `pending_mailing` - The check is queued for mailing.
   * - `mailed` - The check has been mailed.
   * - `deposited` - The check has been deposited.
   * - `stopped` - A stop-payment was requested for this check.
   * - `returned` - The transfer has been returned.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_submission'
    | 'requires_attention'
    | 'rejected'
    | 'pending_mailing'
    | 'mailed'
    | 'deposited'
    | 'stopped'
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
   * Details relating to the custom fulfillment you will perform. Will be present if
   * and only if `fulfillment_method` is equal to `third_party`.
   */
  third_party: CheckTransfer.ThirdParty | null;

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
   * What object created the transfer, either via the API or the dashboard.
   */
  export interface CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    api_key: CreatedBy.APIKey | null;

    /**
     * The type of object that created this transfer.
     *
     * - `api_key` - An API key. Details will be under the `api_key` object.
     * - `oauth_application` - An OAuth application you connected to Increase. Details
     *   will be under the `oauth_application` object.
     * - `user` - A User in the Increase dashboard. Details will be under the `user`
     *   object.
     */
    category: 'api_key' | 'oauth_application' | 'user';

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    oauth_application: CreatedBy.OAuthApplication | null;

    /**
     * If present, details about the User that created the transfer.
     */
    user: CreatedBy.User | null;
  }

  export namespace CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    export interface APIKey {
      /**
       * The description set for the API key when it was created.
       */
      description: string | null;
    }

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    export interface OAuthApplication {
      /**
       * The name of the OAuth Application.
       */
      name: string;
    }

    /**
     * If present, details about the User that created the transfer.
     */
    export interface User {
      /**
       * The email address of the User.
       */
      email: string;
    }
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

    /**
     * The tracking number of the shipment, if available for the shipping method.
     */
    tracking_number: string | null;
  }

  /**
   * Details relating to the physical check that Increase will print and mail. Will
   * be present if and only if `fulfillment_method` is equal to `physical_check`.
   */
  export interface PhysicalCheck {
    /**
     * The ID of the file for the check attachment.
     */
    attachment_file_id: string | null;

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

    /**
     * The shipping method for the check.
     *
     * - `usps_first_class` - USPS First Class
     * - `fedex_overnight` - FedEx Overnight
     */
    shipping_method: 'usps_first_class' | 'fedex_overnight' | null;

    /**
     * The text that will appear as the signature on the check in cursive font. If
     * blank, the check will be printed with 'No signature required'.
     */
    signature_text: string | null;

    /**
     * Tracking updates relating to the physical check's delivery.
     */
    tracking_updates: Array<PhysicalCheck.TrackingUpdate>;
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

    export interface TrackingUpdate {
      /**
       * The type of tracking event.
       *
       * - `in_transit` - The check is in transit.
       * - `processed_for_delivery` - The check has been processed for delivery.
       * - `delivered` - The check has been delivered.
       * - `returned_to_sender` - Delivery failed and the check was returned to sender.
       */
      category: 'in_transit' | 'processed_for_delivery' | 'delivered' | 'returned_to_sender';

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the tracking event took place.
       */
      created_at: string;

      /**
       * The postal code where the event took place.
       */
      postal_code: string;
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
     * Per USPS requirements, Increase will standardize the address to USPS standards
     * and check it against the USPS National Change of Address (NCOA) database before
     * mailing it. This indicates what modifications, if any, were made to the address
     * before printing and mailing the check.
     *
     * - `none` - No address correction took place.
     * - `standardization` - The address was standardized.
     * - `standardization_with_address_change` - The address was first standardized and
     *   then changed because the recipient moved.
     * - `error` - An error occurred while correcting the address. This typically means
     *   the USPS could not find that address. The address was not changed.
     */
    address_correction_action: 'none' | 'standardization' | 'standardization_with_address_change' | 'error';

    /**
     * The address we submitted to the printer. This is what is physically printed on
     * the check.
     */
    submitted_address: Submission.SubmittedAddress;

    /**
     * When this check transfer was submitted to our check printer.
     */
    submitted_at: string;
  }

  export namespace Submission {
    /**
     * The address we submitted to the printer. This is what is physically printed on
     * the check.
     */
    export interface SubmittedAddress {
      /**
       * The submitted address city.
       */
      city: string;

      /**
       * The submitted address line 1.
       */
      line1: string;

      /**
       * The submitted address line 2.
       */
      line2: string | null;

      /**
       * The submitted recipient name.
       */
      recipient_name: string;

      /**
       * The submitted address state.
       */
      state: string;

      /**
       * The submitted address zip.
       */
      zip: string;
    }
  }

  /**
   * Details relating to the custom fulfillment you will perform. Will be present if
   * and only if `fulfillment_method` is equal to `third_party`.
   */
  export interface ThirdParty {
    /**
     * The name that you will print on the check.
     */
    recipient_name: string | null;
  }
}

export interface CheckTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

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
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id: string;

  /**
   * The check number Increase should use for the check. This should not contain
   * leading zeroes and must be unique across the `source_account_number`. If this is
   * omitted, Increase will generate a check number for you.
   */
  check_number?: string;

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

  /**
   * Details relating to the custom fulfillment you will perform. This is required if
   * `fulfillment_method` is equal to `third_party`. It must not be included if any
   * other `fulfillment_method` is provided.
   */
  third_party?: CheckTransferCreateParams.ThirdParty;
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
     * The ID of a File to be attached to the check. This must have
     * `purpose: check_attachment`. For details on pricing and restrictions, see
     * https://increase.com/documentation/originating-checks#printing-checks .
     */
    attachment_file_id?: string;

    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note?: string;

    /**
     * The return address to be printed on the check. If omitted this will default to
     * an Increase-owned address that will mark checks as delivery failed and shred
     * them.
     */
    return_address?: PhysicalCheck.ReturnAddress;

    /**
     * How to ship the check. For details on pricing, timing, and restrictions, see
     * https://increase.com/documentation/originating-checks#printing-checks .
     *
     * - `usps_first_class` - USPS First Class
     * - `fedex_overnight` - FedEx Overnight
     */
    shipping_method?: 'usps_first_class' | 'fedex_overnight';

    /**
     * The text that will appear as the signature on the check in cursive font. If not
     * provided, the check will be printed with 'No signature required'.
     */
    signature_text?: string;
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
    }

    /**
     * The return address to be printed on the check. If omitted this will default to
     * an Increase-owned address that will mark checks as delivery failed and shred
     * them.
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

  /**
   * Details relating to the custom fulfillment you will perform. This is required if
   * `fulfillment_method` is equal to `third_party`. It must not be included if any
   * other `fulfillment_method` is provided.
   */
  export interface ThirdParty {
    /**
     * The pay-to name you will print on the check. If provided, this is used for
     * [Positive Pay](/documentation/positive-pay). If this is omitted, Increase will
     * be unable to validate the payee name when the check is deposited.
     */
    recipient_name?: string;
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

  status?: CheckTransferListParams.Status;
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

  export interface Status {
    /**
     * Filter Check Transfers to those that have the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_approval'
      | 'canceled'
      | 'pending_submission'
      | 'requires_attention'
      | 'rejected'
      | 'pending_mailing'
      | 'mailed'
      | 'deposited'
      | 'stopped'
      | 'returned'
    >;
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

CheckTransfers.CheckTransfersPage = CheckTransfersPage;

export declare namespace CheckTransfers {
  export {
    type CheckTransfer as CheckTransfer,
    CheckTransfersPage as CheckTransfersPage,
    type CheckTransferCreateParams as CheckTransferCreateParams,
    type CheckTransferListParams as CheckTransferListParams,
    type CheckTransferStopPaymentParams as CheckTransferStopPaymentParams,
  };
}
