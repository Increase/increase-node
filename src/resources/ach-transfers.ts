// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './';
import { Page, PageParams } from 'increase/pagination';

export class ACHTransfers extends APIResource {
  /**
   * Create an ACH Transfer
   */
  create(
    body: ACHTransferCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHTransfer>> {
    return this.post('/ach_transfers', { body, ...options });
  }

  /**
   * Retrieve an ACH Transfer
   */
  retrieve(achTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ACHTransfer>> {
    return this.get(`/ach_transfers/${achTransferId}`, options);
  }

  /**
   * List ACH Transfers
   */
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

  /**
   * Approves an ACH Transfer in a pending_approval state.
   */
  approve(achTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ACHTransfer>> {
    return this.post(`/ach_transfers/${achTransferId}/approve`, options);
  }

  /**
   * Cancels an ACH Transfer in a pending_approval state.
   */
  cancel(achTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ACHTransfer>> {
    return this.post(`/ach_transfers/${achTransferId}/cancel`, options);
  }
}

export class ACHTransfersPage extends Page<ACHTransfer> {}
// alias so we can export it in the namespace
type _ACHTransfersPage = ACHTransfersPage;

/**
 * ACH transfers move funds between your Increase account and any other account
 * accessible by the Automated Clearing House (ACH).
 */
export interface ACHTransfer {
  /**
   * The ACH transfer's identifier.
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
   * The description of the date of the transfer.
   */
  company_descriptive_date: string | null;

  /**
   * The data you chose to associate with the transfer.
   */
  company_discretionary_data: string | null;

  /**
   * The description of the transfer you set to be shown to the recipient.
   */
  company_entry_description: string | null;

  /**
   * The name by which the recipient knows you.
   */
  company_name: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For ACH transfers this is always equal to `usd`.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The transfer effective date in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date: string | null;

  /**
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The type of the account to which the transfer will be sent.
   */
  funding: 'checking' | 'savings';

  /**
   * Your identifer for the transfer recipient.
   */
  individual_id: string | null;

  /**
   * The name of the transfer recipient. This value is information and not verified
   * by the recipient's bank.
   */
  individual_name: string | null;

  /**
   * The transfer's network.
   */
  network: 'ach';

  /**
   * If the receiving bank accepts the transfer but notifies that future transfers
   * should use different details, this will contain those details.
   */
  notifications_of_change: Array<ACHTransfer.NotificationsOfChange>;

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  return: ACHTransfer.Return | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The Standard Entry Class (SEC) code to use for the transfer.
   */
  standard_entry_class_code:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';

  /**
   * The descriptor that will show on the recipient's bank statement.
   */
  statement_descriptor: string;

  /**
   * The lifecycle status of the transfer.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_reviewing'
    | 'pending_submission'
    | 'submitted'
    | 'returned'
    | 'requires_attention'
    | 'rejected';

  /**
   * After the transfer is submitted to FedACH, this will contain supplemental
   * details.
   */
  submission: ACHTransfer.Submission | null;

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

  export interface NotificationsOfChange {
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

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  export interface Return {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was created.
     */
    created_at: string;

    /**
     * The three character ACH return code, in the range R01 to R85.
     */
    raw_return_reason_code: string;

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
      | 'limited_participation_dfi'
      | 'incorrectly_coded_outbound_international_payment'
      | 'account_sold_to_another_dfi'
      | 'addenda_error'
      | 'beneficiary_or_account_holder_deceased'
      | 'customer_advised_not_within_authorization_terms'
      | 'corrected_return'
      | 'duplicate_entry'
      | 'duplicate_return'
      | 'enr_duplicate_enrollment'
      | 'enr_invalid_dfi_account_number'
      | 'enr_invalid_individual_id_number'
      | 'enr_invalid_representative_payee_indicator'
      | 'enr_invalid_transaction_code'
      | 'enr_return_of_enr_entry'
      | 'enr_routing_number_check_digit_error'
      | 'entry_not_processed_by_gateway'
      | 'field_error'
      | 'foreign_receiving_dfi_unable_to_settle'
      | 'iat_entry_coding_error'
      | 'improper_effective_entry_date'
      | 'improper_source_document_source_document_presented'
      | 'invalid_company_id'
      | 'invalid_foreign_receiving_dfi_identification'
      | 'invalid_individual_id_number'
      | 'item_and_rck_entry_presented_for_payment'
      | 'item_related_to_rck_entry_is_ineligible'
      | 'mandatory_field_error'
      | 'misrouted_dishonored_return'
      | 'misrouted_return'
      | 'no_errors_found'
      | 'non_acceptance_of_r62_dishonored_return'
      | 'non_participant_in_iat_program'
      | 'permissible_return_entry'
      | 'permissible_return_entry_not_accepted'
      | 'rdfi_non_settlement'
      | 'rdfi_participant_in_check_truncation_program'
      | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
      | 'return_not_a_duplicate'
      | 'return_of_erroneous_or_reversing_debit'
      | 'return_of_improper_credit_entry'
      | 'return_of_improper_debit_entry'
      | 'return_of_xck_entry'
      | 'source_document_presented_for_payment'
      | 'state_law_affecting_rck_acceptance'
      | 'stop_payment_on_item_related_to_rck_entry'
      | 'stop_payment_on_source_document'
      | 'timely_original_return'
      | 'trace_number_error'
      | 'untimely_dishonored_return'
      | 'untimely_return';

    /**
     * The identifier of the Tranasaction associated with this return.
     */
    transaction_id: string;

    /**
     * The identifier of the ACH Transfer associated with this return.
     */
    transfer_id: string;
  }

  /**
   * After the transfer is submitted to FedACH, this will contain supplemental
   * details.
   */
  export interface Submission {
    /**
     * When the ACH transfer was sent to FedACH.
     */
    submitted_at: string;

    /**
     * The trace number for the submission.
     */
    trace_number: string;
  }
}

export interface ACHTransferCreateParams {
  /**
   * The Increase identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * A description you choose to give the transfer. This will be saved with the
   * transfer details, displayed in the dashboard, and returned by the API. If
   * `individual_name` and `company_name` are not explicitly set by this API, the
   * `statement_descriptor` will be sent in those fields to the receiving bank to
   * help the customer recognize the transfer. You are highly encouraged to pass
   * `individual_name` and `company_name` instead of relying on this fallback.
   */
  statement_descriptor: string;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * Additional information that will be sent to the recipient. This is included in
   * the transfer data sent to the receiving bank.
   */
  addendum?: string;

  /**
   * The description of the date of the transfer, usually in the format `YYMMDD`.
   * This is included in the transfer data sent to the receiving bank.
   */
  company_descriptive_date?: string;

  /**
   * The data you choose to associate with the transfer. This is included in the
   * transfer data sent to the receiving bank.
   */
  company_discretionary_data?: string;

  /**
   * A description of the transfer. This is included in the transfer data sent to the
   * receiving bank.
   */
  company_entry_description?: string;

  /**
   * The name by which the recipient knows you. This is included in the transfer data
   * sent to the receiving bank.
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
   * The name of the transfer recipient. This value is informational and not verified
   * by the recipient's bank.
   */
  individual_name?: string;

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

export namespace ACHTransfers {
  export import ACHTransfer = API.ACHTransfer;
  export type ACHTransfersPage = _ACHTransfersPage;
  export import ACHTransferCreateParams = API.ACHTransferCreateParams;
  export import ACHTransferListParams = API.ACHTransferListParams;
}
