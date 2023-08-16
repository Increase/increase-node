// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class ACHTransfers extends APIResource {
  /**
   * Create an ACH Transfer
   */
  create(body: ACHTransferCreateParams, options?: Core.RequestOptions): Core.APIPromise<ACHTransfer> {
    return this.post('/ach_transfers', { body, ...options });
  }

  /**
   * Retrieve an ACH Transfer
   */
  retrieve(achTransferId: string, options?: Core.RequestOptions): Core.APIPromise<ACHTransfer> {
    return this.get(`/ach_transfers/${achTransferId}`, options);
  }

  /**
   * List ACH Transfers
   */
  list(
    query?: ACHTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHTransfersPage, ACHTransfer>;
  list(options?: Core.RequestOptions): Core.PagePromise<ACHTransfersPage, ACHTransfer>;
  list(
    query: ACHTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHTransfersPage, ACHTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ach_transfers', ACHTransfersPage, { query, ...options });
  }

  /**
   * Approves an ACH Transfer in a pending_approval state.
   */
  approve(achTransferId: string, options?: Core.RequestOptions): Core.APIPromise<ACHTransfer> {
    return this.post(`/ach_transfers/${achTransferId}/approve`, options);
  }

  /**
   * Cancels an ACH Transfer in a pending_approval state.
   */
  cancel(achTransferId: string, options?: Core.RequestOptions): Core.APIPromise<ACHTransfer> {
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
   * After the transfer is acknowledged by FedACH, this will contain supplemental
   * details. The Federal Reserve sends an acknowledgement message for each file that
   * Increase submits.
   */
  acknowledgement: ACHTransfer.Acknowledgement | null;

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
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
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
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD).
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD).
   * - `internet_initiated` - Internet Initiated (WEB).
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
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `pending_submission` - The transfer is pending submission to the Federal
   *   Reserve.
   * - `submitted` - The transfer is complete.
   * - `returned` - The transfer has been returned.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `rejected` - The transfer has been rejected.
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
   * details. Increase batches transfers and submits a file to the Federal Reserve
   * roughly every 30 minutes. The Federal Reserve processes ACH transfers during
   * weekdays according to their (posted
   * schedule)[https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html].
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

  /**
   * The unique identifier you chose for this transfer.
   */
  unique_identifier: string | null;
}

export namespace ACHTransfer {
  /**
   * After the transfer is acknowledged by FedACH, this will contain supplemental
   * details. The Federal Reserve sends an acknowledgement message for each file that
   * Increase submits.
   */
  export interface Acknowledgement {
    /**
     * When the Federal Reserve acknowledged the submitted file containing this
     * transfer.
     */
    acknowledged_at: string;
  }

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
     *
     * - `incorrect_account_number` - The account number was incorrect.
     * - `incorrect_routing_number` - The routing number was incorrect.
     * - `incorrect_routing_number_and_account_number` - Both the routing number and
     *   the account number were incorrect.
     * - `incorrect_transaction_code` - The transaction code was incorrect.
     * - `incorrect_account_number_and_transaction_code` - The account number and the
     *   transaction code were incorrect.
     * - `incorrect_routing_number_account_number_and_transaction_code` - The routing
     *   number, account number, and transaction code were incorrect.
     * - `incorrect_receiving_depository_financial_institution_identification` - The
     *   receiving depository financial institution identification was incorrect.
     * - `incorrect_individual_identification_number` - The individual identification
     *   number was incorrect.
     * - `addenda_format_error` - The addenda had an incorrect format.
     * - `incorrect_standard_entry_class_code_for_outbound_international_payment` - The
     *   standard entry class code was incorrect for an outbound international payment.
     */
    change_code:
      | 'incorrect_account_number'
      | 'incorrect_routing_number'
      | 'incorrect_routing_number_and_account_number'
      | 'incorrect_transaction_code'
      | 'incorrect_account_number_and_transaction_code'
      | 'incorrect_routing_number_account_number_and_transaction_code'
      | 'incorrect_receiving_depository_financial_institution_identification'
      | 'incorrect_individual_identification_number'
      | 'addenda_format_error'
      | 'incorrect_standard_entry_class_code_for_outbound_international_payment';

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
     *
     * - `insufficient_fund` - Code R01. Insufficient funds in the source account.
     * - `no_account` - Code R03. The account does not exist or the receiving bank was
     *   unable to locate it.
     * - `account_closed` - Code R02. The account is closed.
     * - `invalid_account_number_structure` - Code R04. The account number is invalid
     *   at the receiving bank.
     * - `account_frozen_entry_returned_per_ofac_instruction` - Code R16. The account
     *   was frozen per the Office of Foreign Assets Control.
     * - `credit_entry_refused_by_receiver` - Code R23. The receiving bank account
     *   refused a credit transfer.
     * - `unauthorized_debit_to_consumer_account_using_corporate_sec_code` - Code R05.
     *   The receiving bank rejected because of an incorrect Standard Entry Class code.
     * - `corporate_customer_advised_not_authorized` - Code R29. The corporate customer
     *   reversed the transfer.
     * - `payment_stopped` - Code R08. The receiving bank stopped payment on this
     *   transfer.
     * - `non_transaction_account` - Code R20. The receiving bank account does not
     *   perform transfers.
     * - `uncollected_funds` - Code R09. The receiving bank account does not have
     *   enough available balance for the transfer.
     * - `routing_number_check_digit_error` - Code R28. The routing number is
     *   incorrect.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - Code R10.
     *   The customer reversed the transfer.
     * - `amount_field_error` - Code R19. The amount field is incorrect or too large.
     * - `authorization_revoked_by_customer` - Code R07. The customer who initiated the
     *   transfer revoked authorization.
     * - `invalid_ach_routing_number` - Code R13. The routing number is invalid.
     * - `file_record_edit_criteria` - Code R17. The receiving bank is unable to
     *   process a field in the transfer.
     * - `enr_invalid_individual_name` - Code R45. The individual name field was
     *   invalid.
     * - `returned_per_odfi_request` - Code R06. The originating financial institution
     *   reversed the transfer.
     * - `limited_participation_dfi` - Code R34. The receiving bank's regulatory
     *   supervisor has limited their participation.
     * - `incorrectly_coded_outbound_international_payment` - Code R85. The outbound
     *   international ACH transfer was incorrect.
     * - `account_sold_to_another_dfi` - Code R12. A rare return reason. The account
     *   was sold to another bank.
     * - `addenda_error` - Code R25. The addenda record is incorrect or missing.
     * - `beneficiary_or_account_holder_deceased` - Code R15. A rare return reason. The
     *   account holder is deceased.
     * - `customer_advised_not_within_authorization_terms` - Code R11. A rare return
     *   reason. The customer authorized some payment to the sender, but this payment
     *   was not in error.
     * - `corrected_return` - Code R74. A rare return reason. Sent in response to a
     *   return that was returned with code `field_error`. The latest return should
     *   include the corrected field(s).
     * - `duplicate_entry` - Code R24. A rare return reason. The receiving bank
     *   received an exact duplicate entry with the same trace number and amount.
     * - `duplicate_return` - Code R67. A rare return reason. The return this message
     *   refers to was a duplicate.
     * - `enr_duplicate_enrollment` - Code R47. A rare return reason. Only used for US
     *   Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_dfi_account_number` - Code R43. A rare return reason. Only used
     *   for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_individual_id_number` - Code R44. A rare return reason. Only used
     *   for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_representative_payee_indicator` - Code R46. A rare return reason.
     *   Only used for US Government agency non-monetary automatic enrollment messages.
     * - `enr_invalid_transaction_code` - Code R41. A rare return reason. Only used for
     *   US Government agency non-monetary automatic enrollment messages.
     * - `enr_return_of_enr_entry` - Code R40. A rare return reason. Only used for US
     *   Government agency non-monetary automatic enrollment messages.
     * - `enr_routing_number_check_digit_error` - Code R42. A rare return reason. Only
     *   used for US Government agency non-monetary automatic enrollment messages.
     * - `entry_not_processed_by_gateway` - Code R84. A rare return reason. The
     *   International ACH Transfer cannot be processed by the gateway.
     * - `field_error` - Code R69. A rare return reason. One or more of the fields in
     *   the ACH were malformed.
     * - `foreign_receiving_dfi_unable_to_settle` - Code R83. A rare return reason. The
     *   Foreign receiving bank was unable to settle this ACH transfer.
     * - `iat_entry_coding_error` - Code R80. A rare return reason. The International
     *   ACH Transfer is malformed.
     * - `improper_effective_entry_date` - Code R18. A rare return reason. The ACH has
     *   an improper effective entry date field.
     * - `improper_source_document_source_document_presented` - Code R39. A rare return
     *   reason. The source document related to this ACH, usually an ACH check
     *   conversion, was presented to the bank.
     * - `invalid_company_id` - Code R21. A rare return reason. The Company ID field of
     *   the ACH was invalid.
     * - `invalid_foreign_receiving_dfi_identification` - Code R82. A rare return
     *   reason. The foreign receiving bank identifier for an International ACH
     *   Transfer was invalid.
     * - `invalid_individual_id_number` - Code R22. A rare return reason. The
     *   Individual ID number field of the ACH was invalid.
     * - `item_and_rck_entry_presented_for_payment` - Code R53. A rare return reason.
     *   Both the Represented Check ("RCK") entry and the original check were presented
     *   to the bank.
     * - `item_related_to_rck_entry_is_ineligible` - Code R51. A rare return reason.
     *   The Represented Check ("RCK") entry is ineligible.
     * - `mandatory_field_error` - Code R26. A rare return reason. The ACH is missing a
     *   required field.
     * - `misrouted_dishonored_return` - Code R71. A rare return reason. The receiving
     *   bank does not recognize the routing number in a dishonored return entry.
     * - `misrouted_return` - Code R61. A rare return reason. The receiving bank does
     *   not recognize the routing number in a return entry.
     * - `no_errors_found` - Code R76. A rare return reason. Sent in response to a
     *   return, the bank does not find the errors alleged by the returning bank.
     * - `non_acceptance_of_r62_dishonored_return` - Code R77. A rare return reason.
     *   The receiving bank does not accept the return of the erroneous debit. The
     *   funds are not available at the receiving bank.
     * - `non_participant_in_iat_program` - Code R81. A rare return reason. The
     *   receiving bank does not accept International ACH Transfers.
     * - `permissible_return_entry` - Code R31. A rare return reason. A return that has
     *   been agreed to be accepted by the receiving bank, despite falling outside of
     *   the usual return timeframe.
     * - `permissible_return_entry_not_accepted` - Code R70. A rare return reason. The
     *   receiving bank had not approved this return.
     * - `rdfi_non_settlement` - Code R32. A rare return reason. The receiving bank
     *   could not settle this transaction.
     * - `rdfi_participant_in_check_truncation_program` - Code R30. A rare return
     *   reason. The receiving bank does not accept Check Truncation ACH transfers.
     * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - Code
     *   R14. A rare return reason. The payee is deceased.
     * - `return_not_a_duplicate` - Code R75. A rare return reason. The originating
     *   bank disputes that an earlier `duplicate_entry` return was actually a
     *   duplicate.
     * - `return_of_erroneous_or_reversing_debit` - Code R62. A rare return reason. The
     *   originating bank made a mistake earlier and this return corrects it.
     * - `return_of_improper_credit_entry` - Code R36. A rare return reason. Return of
     *   a malformed credit entry.
     * - `return_of_improper_debit_entry` - Code R35. A rare return reason. Return of a
     *   malformed debit entry.
     * - `return_of_xck_entry` - Code R33. A rare return reason. Return of a Destroyed
     *   Check ("XKC") entry.
     * - `source_document_presented_for_payment` - Code R37. A rare return reason. The
     *   source document related to this ACH, usually an ACH check conversion, was
     *   presented to the bank.
     * - `state_law_affecting_rck_acceptance` - Code R50. A rare return reason. State
     *   law prevents the bank from accepting the Represented Check ("RCK") entry.
     * - `stop_payment_on_item_related_to_rck_entry` - Code R52. A rare return reason.
     *   A stop payment was issued on a Represented Check ("RCK") entry.
     * - `stop_payment_on_source_document` - Code R38. A rare return reason. The source
     *   attached to the ACH, usually an ACH check conversion, includes a stop payment.
     * - `timely_original_return` - Code R73. A rare return reason. The bank receiving
     *   an `untimely_return` believes it was on time.
     * - `trace_number_error` - Code R27. A rare return reason. An ACH Return's trace
     *   number does not match an originated ACH.
     * - `untimely_dishonored_return` - Code R72. A rare return reason. The dishonored
     *   return was sent too late.
     * - `untimely_return` - Code R68. A rare return reason. The return was sent too
     *   late.
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
   * details. Increase batches transfers and submits a file to the Federal Reserve
   * roughly every 30 minutes. The Federal Reserve processes ACH transfers during
   * weekdays according to their (posted
   * schedule)[https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html].
   */
  export interface Submission {
    /**
     * When the funds transfer is expected to settle in the recipient's account.
     * Credits may be available sooner, at the receiving banks discretion. The FedACH
     * schedule is published
     * [here](https://www.frbservices.org/resources/resource-centers/same-day-ach/fedach-processing-schedule.html).
     */
    expected_funds_settlement_at: string;

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
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
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
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD).
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD).
   * - `internet_initiated` - Internet Initiated (WEB).
   */
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';

  /**
   * A unique identifier you choose for the transfer. Reusing this identifer for
   * another transfer will result in an error. You can query for the transfer
   * associated with this identifier using the List endpoint.
   */
  unique_identifier?: string;
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

  /**
   * Filter ACH Transfers to the one with the specified unique identifier.
   */
  unique_identifier?: string;
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
