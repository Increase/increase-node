// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class ACHTransfers extends APIResource {
  create(
    body: ACHTransferCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHTransfer>> {
    return this.post('/ach_transfers', { body, ...options });
  }

  retrieve(achTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ACHTransfer>> {
    return this.get(`/ach_transfers/${achTransferId}`, options);
  }

  list(query?: ACHTransferListParams, options?: Core.RequestOptions): Core.PagePromise<ACHTransfersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ACHTransfersPage>;
  list(
    query: ACHTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHTransfersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/ach_transfers', ACHTransfersPage, { query, ...options });
  }
}

export class ACHTransfersPage extends Page<ACHTransfer> {}

/**
 * ACH transfers move funds between your Increase account and any other account
 * accessible by the Automated Clearing House (ACH).
 */
export interface ACHTransfer {
  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * Additional information that will be sent to the recipient.
   */
  addendum: string | null;

  /**
   * The transfer amount in USD cents. A positive amount indicates a credit transfer
   * pushing funds to the receiving account. A negative amount indicates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: ACHTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: ACHTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For ACH transfers this is always equal to `usd`.
   */
  currency: string;

  /**
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The ACH transfer's identifier.
   */
  id: string;

  /**
   * The transfer's network.
   */
  network: 'ach';

  /**
   * If the receiving bank accepts the transfer but notifies that future transfers
   * should use different details, this will contain those details.
   */
  notification_of_change: ACHTransfer.NotificationOfChange | null;

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  return: ACHTransfer.Return | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The descriptor that will show on the recipient's bank statement.
   */
  statement_descriptor: string;

  /**
   * The lifecycle status of the transfer.
   */
  status:
    | 'pending_approval'
    | 'pending_submission'
    | 'rejected'
    | 'returned'
    | 'canceled'
    | 'requires_attention'
    | 'flagged_by_operator'
    | 'submitted';

  /**
   * After the transfer is submitted to FedACH, this will contain supplemental
   * details.
   */
  submission: ACHTransfer.Submission | null;

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
   * `ach_transfer`.
   */
  type: 'ach_transfer';
}

export namespace ACHTransfer {
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

  export interface NotificationOfChange {
    /**
     * The type of change that occurred.
     */
    change_code: string;

    /**
     * The corrected data.
     */
    corrected_data: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the notification occurred.
     */
    created_at: string;
  }

  export interface Return {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was created.
     */
    created_at: string;

    /**
     * Why the ACH Transfer was returned.
     */
    return_reason_code:
      | 'insufficient_fund'
      | 'no_account'
      | 'account_closed'
      | 'invalid_account_number_structure'
      | 'account_frozen_entry_returned_per_ofac_instruction'
      | 'credit_entry_refused_by_receiver'
      | 'unauthorized_debit_to_consumer_account_using_corporate_sec_code'
      | 'corporate_customer_advised_not_authorized'
      | 'payment_stopped'
      | 'non_transaction_account'
      | 'uncollected_funds'
      | 'routing_number_check_digit_error'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'amount_field_error'
      | 'authorization_revoked_by_customer'
      | 'invalid_ach_routing_number'
      | 'file_record_edit_criteria'
      | 'enr_invalid_individual_name'
      | 'returned_per_odfi_request'
      | 'addenda_error'
      | 'limited_participation_dfi'
      | 'other';

    /**
     * The identifier of the Tranasaction associated with this return.
     */
    transaction_id: string;

    /**
     * The identifier of the ACH Transfer associated with this return.
     */
    transfer_id: string;
  }

  export interface Submission {
    /**
     * The trace number for the submission.
     */
    trace_number: string;
  }
}

export interface ACHTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * The description you choose to give the transfer. This will be shown to the
   * recipient.
   */
  statement_descriptor: string;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * Additional information that will be sent to the recipient.
   */
  addendum?: string;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date?: string;

  /**
   * The data you choose to associate with the transfer.
   */
  company_discretionary_data?: string;

  /**
   * The description of the transfer you wish to be shown to the recipient.
   */
  company_entry_description?: string;

  /**
   * The name by which the recipient knows you.
   */
  company_name?: string;

  /**
   * The transfer effective date in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date?: string;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number`, `routing_number`, and `funding` must be absent.
   */
  external_account_id?: string;

  /**
   * The type of the account to which the transfer will be sent.
   */
  funding?: 'checking' | 'savings';

  /**
   * Your identifer for the transfer recipient.
   */
  individual_id?: string;

  /**
   * The name of the transfer recipient. This value is information and not verified
   * by the recipient's bank.
   */
  individual_name?: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number?: string;

  /**
   * The Standard Entry Class (SEC) code to use for the transfer.
   */
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';
}

export interface ACHTransferListParams extends PageParams {
  /**
   * Filter ACH Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: ACHTransferListParams.CreatedAt;

  /**
   * Filter ACH Transfers to those made to the specified External Account.
   */
  external_account_id?: string;
}

export namespace ACHTransferListParams {
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
