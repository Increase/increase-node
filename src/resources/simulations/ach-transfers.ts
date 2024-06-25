// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SimulationsACHTransfersAPI from './ach-transfers';
import * as ACHTransfersAPI from '../ach-transfers';
import * as InboundACHTransfersAPI from '../inbound-ach-transfers';

export class ACHTransfers extends APIResource {
  /**
   * Simulates an inbound ACH transfer to your account. This imitates initiating a
   * transfer to an Increase account from a different financial institution. The
   * transfer may be either a credit or a debit depending on if the `amount` is
   * positive or negative. The result of calling this API will contain the created
   * transfer. You can pass a `resolve_at` parameter to allow for a window to
   * [action on the Inbound ACH Transfer](https://increase.com/documentation/receiving-ach-transfers).
   * Alternatively, if you don't pass the `resolve_at` parameter the result will
   * contain either a [Transaction](#transactions) or a
   * [Declined Transaction](#declined-transactions) depending on whether or not the
   * transfer is allowed.
   */
  createInbound(
    body: ACHTransferCreateInboundParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundACHTransfersAPI.InboundACHTransfer> {
    return this._client.post('/simulations/inbound_ach_transfers', { body, ...options });
  }

  /**
   * Simulates receiving a Notification of Change for an
   * [ACH Transfer](#ach-transfers).
   */
  notificationOfChange(
    achTransferId: string,
    body: ACHTransferNotificationOfChangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACHTransfersAPI.ACHTransfer> {
    return this._client.post(`/simulations/ach_transfers/${achTransferId}/notification_of_change`, {
      body,
      ...options,
    });
  }

  /**
   * Simulates the return of an [ACH Transfer](#ach-transfers) by the Federal Reserve
   * due to an error condition. This will also create a Transaction to account for
   * the returned funds. This transfer must first have a `status` of `submitted`.
   */
  return(
    achTransferId: string,
    body: ACHTransferReturnParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACHTransfersAPI.ACHTransfer> {
    return this._client.post(`/simulations/ach_transfers/${achTransferId}/return`, { body, ...options });
  }

  /**
   * Simulates the submission of an [ACH Transfer](#ach-transfers) to the Federal
   * Reserve. This transfer must first have a `status` of `pending_approval` or
   * `pending_submission`. In production, Increase submits ACH Transfers to the
   * Federal Reserve three times per day on weekdays. Since sandbox ACH Transfers are
   * not submitted to the Federal Reserve, this endpoint allows you to skip that
   * delay and transition the ACH Transfer to a status of `submitted`.
   */
  submit(achTransferId: string, options?: Core.RequestOptions): Core.APIPromise<ACHTransfersAPI.ACHTransfer> {
    return this._client.post(`/simulations/ach_transfers/${achTransferId}/submit`, options);
  }
}

export interface ACHTransferCreateInboundParams {
  /**
   * The identifier of the Account Number the inbound ACH Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date?: string;

  /**
   * Data associated with the transfer set by the sender.
   */
  company_discretionary_data?: string;

  /**
   * The description of the transfer set by the sender.
   */
  company_entry_description?: string;

  /**
   * The sender's company ID.
   */
  company_id?: string;

  /**
   * The name of the sender.
   */
  company_name?: string;

  /**
   * The ID of the receiver of the transfer.
   */
  receiver_id_number?: string;

  /**
   * The name of the receiver of the transfer.
   */
  receiver_name?: string;

  /**
   * The time at which the transfer should be resolved. If not provided will resolve
   * immediately.
   */
  resolve_at?: string;
}

export interface ACHTransferNotificationOfChangeParams {
  /**
   * The reason for the notification of change.
   *
   * - `incorrect_account_number` - The account number was incorrect.
   * - `incorrect_routing_number` - The routing number was incorrect.
   * - `incorrect_routing_number_and_account_number` - Both the routing number and
   *   the account number were incorrect.
   * - `incorrect_transaction_code` - The transaction code was incorrect. Try
   *   changing the `funding` parameter from checking to savings or vice-versa.
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
   * - `misrouted_notification_of_change` - The notification of change was misrouted.
   * - `incorrect_trace_number` - The trace number was incorrect.
   * - `incorrect_company_identification_number` - The company identification number
   *   was incorrect.
   * - `incorrect_identification_number` - The individual identification number or
   *   identification number was incorrect.
   * - `incorrectly_formatted_corrected_data` - The corrected data was incorrectly
   *   formatted.
   * - `incorrect_discretionary_data` - The discretionary data was incorrect.
   * - `routing_number_not_from_original_entry_detail_record` - The routing number
   *   was not from the original entry detail record.
   * - `depository_financial_institution_account_number_not_from_original_entry_detail_record` -
   *   The depository financial institution account number was not from the original
   *   entry detail record.
   * - `incorrect_transaction_code_by_originating_depository_financial_institution` -
   *   The transaction code was incorrect, initiated by the originating depository
   *   financial institution.
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
    | 'incorrect_standard_entry_class_code_for_outbound_international_payment'
    | 'misrouted_notification_of_change'
    | 'incorrect_trace_number'
    | 'incorrect_company_identification_number'
    | 'incorrect_identification_number'
    | 'incorrectly_formatted_corrected_data'
    | 'incorrect_discretionary_data'
    | 'routing_number_not_from_original_entry_detail_record'
    | 'depository_financial_institution_account_number_not_from_original_entry_detail_record'
    | 'incorrect_transaction_code_by_originating_depository_financial_institution';

  /**
   * The corrected data for the notification of change (e.g., a new routing number).
   */
  corrected_data: string;
}

export interface ACHTransferReturnParams {
  /**
   * The reason why the Federal Reserve or destination bank returned this transfer.
   * Defaults to `no_account`.
   *
   * - `insufficient_fund` - Code R01. Insufficient funds in the receiving account.
   *   Sometimes abbreviated to NSF.
   * - `no_account` - Code R03. The account does not exist or the receiving bank was
   *   unable to locate it.
   * - `account_closed` - Code R02. The account is closed at the receiving bank.
   * - `invalid_account_number_structure` - Code R04. The account number is invalid
   *   at the receiving bank.
   * - `account_frozen_entry_returned_per_ofac_instruction` - Code R16. The account
   *   at the receiving bank was frozen per the Office of Foreign Assets Control.
   * - `credit_entry_refused_by_receiver` - Code R23. The receiving bank account
   *   refused a credit transfer.
   * - `unauthorized_debit_to_consumer_account_using_corporate_sec_code` - Code R05.
   *   The receiving bank rejected because of an incorrect Standard Entry Class code.
   * - `corporate_customer_advised_not_authorized` - Code R29. The corporate customer
   *   at the receiving bank reversed the transfer.
   * - `payment_stopped` - Code R08. The receiving bank stopped payment on this
   *   transfer.
   * - `non_transaction_account` - Code R20. The receiving bank account does not
   *   perform transfers.
   * - `uncollected_funds` - Code R09. The receiving bank account does not have
   *   enough available balance for the transfer.
   * - `routing_number_check_digit_error` - Code R28. The routing number is
   *   incorrect.
   * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - Code R10.
   *   The customer at the receiving bank reversed the transfer.
   * - `amount_field_error` - Code R19. The amount field is incorrect or too large.
   * - `authorization_revoked_by_customer` - Code R07. The customer at the receiving
   *   institution informed their bank that they have revoked authorization for a
   *   previously authorized transfer.
   * - `invalid_ach_routing_number` - Code R13. The routing number is invalid.
   * - `file_record_edit_criteria` - Code R17. The receiving bank is unable to
   *   process a field in the transfer.
   * - `enr_invalid_individual_name` - Code R45. The individual name field was
   *   invalid.
   * - `returned_per_odfi_request` - Code R06. The originating financial institution
   *   asked for this transfer to be returned. The receiving bank is complying with
   *   the request.
   * - `limited_participation_dfi` - Code R34. The receiving bank's regulatory
   *   supervisor has limited their participation in the ACH network.
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
   *   originating financial institution made a mistake and this return corrects it.
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
   * - `trace_number_error` - Code R27. A rare return reason. An ACH return's trace
   *   number does not match an originated ACH.
   * - `untimely_dishonored_return` - Code R72. A rare return reason. The dishonored
   *   return was sent too late.
   * - `untimely_return` - Code R68. A rare return reason. The return was sent too
   *   late.
   */
  reason?:
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
}

export namespace ACHTransfers {
  export import ACHTransferCreateInboundParams = SimulationsACHTransfersAPI.ACHTransferCreateInboundParams;
  export import ACHTransferNotificationOfChangeParams = SimulationsACHTransfersAPI.ACHTransferNotificationOfChangeParams;
  export import ACHTransferReturnParams = SimulationsACHTransfersAPI.ACHTransferReturnParams;
}
