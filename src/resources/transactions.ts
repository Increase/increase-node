// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TransactionsAPI from './transactions';
import { Page, type PageParams } from '../pagination';

export class Transactions extends APIResource {
  /**
   * Retrieve a Transaction
   */
  retrieve(transactionId: string, options?: Core.RequestOptions): Core.APIPromise<Transaction> {
    return this._client.get(`/transactions/${transactionId}`, options);
  }

  /**
   * List Transactions
   */
  list(
    query?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsPage, Transaction>;
  list(options?: Core.RequestOptions): Core.PagePromise<TransactionsPage, Transaction>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsPage, Transaction> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/transactions', TransactionsPage, { query, ...options });
  }
}

export class TransactionsPage extends Page<Transaction> {}

/**
 * Transactions are the immutable additions and removals of money from your bank
 * account. They're the equivalent of line items on your bank statement.
 */
export interface Transaction {
  /**
   * The Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Transaction belongs to.
   */
  account_id: string;

  /**
   * The Transaction amount in the minor unit of its currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the
   * Transaction occurred.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
   * Transaction's currency. This will match the currency on the Transaction's
   * Account.
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
   * An informational message describing this transaction. Use the fields in `source`
   * to get more detailed information. This field appears as the line-item on the
   * statement.
   */
  description: string;

  /**
   * The identifier for the route this Transaction came through. Routes are things
   * like cards and ACH details.
   */
  route_id: string | null;

  /**
   * The type of the route this Transaction came through.
   *
   * - `account_number` - An Account Number.
   * - `card` - A Card.
   * - `lockbox` - A Lockbox.
   */
  route_type: 'account_number' | 'card' | 'lockbox' | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Transaction. Note that for backwards compatibility reasons, additional
   * undocumented keys may appear in this object. These should be treated as
   * deprecated and will be removed in the future.
   */
  source: Transaction.Source;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `transaction`.
   */
  type: 'transaction';
}

export namespace Transaction {
  /**
   * This is an object giving more details on the network-level event that caused the
   * Transaction. Note that for backwards compatibility reasons, additional
   * undocumented keys may appear in this object. These should be treated as
   * deprecated and will be removed in the future.
   */
  export interface Source {
    /**
     * An Account Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_intention`.
     */
    account_transfer_intention: Source.AccountTransferIntention | null;

    /**
     * An ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_intention`.
     */
    ach_transfer_intention: Source.ACHTransferIntention | null;

    /**
     * An ACH Transfer Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_rejection`.
     */
    ach_transfer_rejection: Source.ACHTransferRejection | null;

    /**
     * An ACH Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `ach_transfer_return`.
     */
    ach_transfer_return: Source.ACHTransferReturn | null;

    /**
     * A Card Dispute Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_acceptance`.
     */
    card_dispute_acceptance: Source.CardDisputeAcceptance | null;

    /**
     * A Card Dispute Loss object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_dispute_loss`.
     */
    card_dispute_loss: Source.CardDisputeLoss | null;

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`.
     */
    card_refund: Source.CardRefund | null;

    /**
     * A Card Revenue Payment object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_revenue_payment`.
     */
    card_revenue_payment: Source.CardRevenuePayment | null;

    /**
     * A Card Settlement object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_settlement`.
     */
    card_settlement: Source.CardSettlement | null;

    /**
     * A Cashback Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `cashback_payment`.
     */
    cashback_payment: Source.CashbackPayment | null;

    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `account_transfer_intention` - Account Transfer Intention: details will be
     *   under the `account_transfer_intention` object.
     * - `ach_transfer_intention` - ACH Transfer Intention: details will be under the
     *   `ach_transfer_intention` object.
     * - `ach_transfer_rejection` - ACH Transfer Rejection: details will be under the
     *   `ach_transfer_rejection` object.
     * - `ach_transfer_return` - ACH Transfer Return: details will be under the
     *   `ach_transfer_return` object.
     * - `cashback_payment` - Cashback Payment: details will be under the
     *   `cashback_payment` object.
     * - `card_dispute_acceptance` - Card Dispute Acceptance: details will be under the
     *   `card_dispute_acceptance` object.
     * - `card_dispute_loss` - Card Dispute Loss: details will be under the
     *   `card_dispute_loss` object.
     * - `card_refund` - Card Refund: details will be under the `card_refund` object.
     * - `card_settlement` - Card Settlement: details will be under the
     *   `card_settlement` object.
     * - `card_revenue_payment` - Card Revenue Payment: details will be under the
     *   `card_revenue_payment` object.
     * - `check_deposit_acceptance` - Check Deposit Acceptance: details will be under
     *   the `check_deposit_acceptance` object.
     * - `check_deposit_return` - Check Deposit Return: details will be under the
     *   `check_deposit_return` object.
     * - `check_transfer_deposit` - Check Transfer Deposit: details will be under the
     *   `check_transfer_deposit` object.
     * - `fee_payment` - Fee Payment: details will be under the `fee_payment` object.
     * - `inbound_ach_transfer` - Inbound ACH Transfer Intention: details will be under
     *   the `inbound_ach_transfer` object.
     * - `inbound_ach_transfer_return_intention` - Inbound ACH Transfer Return
     *   Intention: details will be under the `inbound_ach_transfer_return_intention`
     *   object.
     * - `inbound_check_deposit_return_intention` - Inbound Check Deposit Return
     *   Intention: details will be under the `inbound_check_deposit_return_intention`
     *   object.
     * - `inbound_check_adjustment` - Inbound Check Adjustment: details will be under
     *   the `inbound_check_adjustment` object.
     * - `inbound_real_time_payments_transfer_confirmation` - Inbound Real-Time
     *   Payments Transfer Confirmation: details will be under the
     *   `inbound_real_time_payments_transfer_confirmation` object.
     * - `inbound_real_time_payments_transfer_decline` - Inbound Real-Time Payments
     *   Transfer Decline: details will be under the
     *   `inbound_real_time_payments_transfer_decline` object.
     * - `inbound_wire_reversal` - Inbound Wire Reversal: details will be under the
     *   `inbound_wire_reversal` object.
     * - `inbound_wire_transfer` - Inbound Wire Transfer Intention: details will be
     *   under the `inbound_wire_transfer` object.
     * - `inbound_wire_transfer_reversal` - Inbound Wire Transfer Reversal Intention:
     *   details will be under the `inbound_wire_transfer_reversal` object.
     * - `interest_payment` - Interest Payment: details will be under the
     *   `interest_payment` object.
     * - `internal_source` - Internal Source: details will be under the
     *   `internal_source` object.
     * - `real_time_payments_transfer_acknowledgement` - Real-Time Payments Transfer
     *   Acknowledgement: details will be under the
     *   `real_time_payments_transfer_acknowledgement` object.
     * - `sample_funds` - Sample Funds: details will be under the `sample_funds`
     *   object.
     * - `wire_transfer_intention` - Wire Transfer Intention: details will be under the
     *   `wire_transfer_intention` object.
     * - `other` - The Transaction was made for an undocumented or deprecated reason.
     */
    category:
      | 'account_transfer_intention'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'cashback_payment'
      | 'card_dispute_acceptance'
      | 'card_dispute_loss'
      | 'card_refund'
      | 'card_settlement'
      | 'card_revenue_payment'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'check_transfer_deposit'
      | 'fee_payment'
      | 'inbound_ach_transfer'
      | 'inbound_ach_transfer_return_intention'
      | 'inbound_check_deposit_return_intention'
      | 'inbound_check_adjustment'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_real_time_payments_transfer_decline'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'inbound_wire_transfer_reversal'
      | 'interest_payment'
      | 'internal_source'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_transfer_intention'
      | 'other';

    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_acceptance`.
     */
    check_deposit_acceptance: Source.CheckDepositAcceptance | null;

    /**
     * A Check Deposit Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_deposit_return`.
     */
    check_deposit_return: Source.CheckDepositReturn | null;

    /**
     * A Check Transfer Deposit object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_transfer_deposit`.
     */
    check_transfer_deposit: Source.CheckTransferDeposit | null;

    /**
     * A Fee Payment object. This field will be present in the JSON response if and
     * only if `category` is equal to `fee_payment`.
     */
    fee_payment: Source.FeePayment | null;

    /**
     * An Inbound ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_ach_transfer`.
     */
    inbound_ach_transfer: Source.InboundACHTransfer | null;

    /**
     * An Inbound Real-Time Payments Transfer Confirmation object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_confirmation`.
     */
    inbound_real_time_payments_transfer_confirmation: Source.InboundRealTimePaymentsTransferConfirmation | null;

    /**
     * An Inbound Real-Time Payments Transfer Decline object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_decline`.
     */
    inbound_real_time_payments_transfer_decline: Source.InboundRealTimePaymentsTransferDecline | null;

    /**
     * An Inbound Wire Reversal object. This field will be present in the JSON response
     * if and only if `category` is equal to `inbound_wire_reversal`.
     */
    inbound_wire_reversal: Source.InboundWireReversal | null;

    /**
     * An Inbound Wire Transfer Intention object. This field will be present in the
     * JSON response if and only if `category` is equal to `inbound_wire_transfer`.
     */
    inbound_wire_transfer: Source.InboundWireTransfer | null;

    /**
     * An Interest Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `interest_payment`.
     */
    interest_payment: Source.InterestPayment | null;

    /**
     * An Internal Source object. This field will be present in the JSON response if
     * and only if `category` is equal to `internal_source`.
     */
    internal_source: Source.InternalSource | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other: unknown | null;

    /**
     * A Real-Time Payments Transfer Acknowledgement object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_acknowledgement`.
     */
    real_time_payments_transfer_acknowledgement: Source.RealTimePaymentsTransferAcknowledgement | null;

    /**
     * A Sample Funds object. This field will be present in the JSON response if and
     * only if `category` is equal to `sample_funds`.
     */
    sample_funds: Source.SampleFunds | null;

    /**
     * A Wire Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_intention`.
     */
    wire_transfer_intention: Source.WireTransferIntention | null;
  }

  export namespace Source {
    /**
     * An Account Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_intention`.
     */
    export interface AccountTransferIntention {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
       * account currency.
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
       * The description you chose to give the transfer.
       */
      description: string;

      /**
       * The identifier of the Account to where the Account Transfer was sent.
       */
      destination_account_id: string;

      /**
       * The identifier of the Account from where the Account Transfer was sent.
       */
      source_account_id: string;

      /**
       * The identifier of the Account Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    /**
     * An ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_intention`.
     */
    export interface ACHTransferIntention {
      /**
       * The account number for the destination account.
       */
      account_number: string;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
       * destination account.
       */
      routing_number: string;

      /**
       * A description set when the ACH Transfer was created.
       */
      statement_descriptor: string;

      /**
       * The identifier of the ACH Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * An ACH Transfer Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_rejection`.
     */
    export interface ACHTransferRejection {
      /**
       * The identifier of the ACH Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * An ACH Transfer Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `ach_transfer_return`.
     */
    export interface ACHTransferReturn {
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
       * Why the ACH Transfer was returned. This reason code is sent by the receiving
       * bank back to Increase.
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
       * A 15 digit number that was generated by the bank that initiated the return. The
       * trace number of the return is different than that of the original transfer. ACH
       * trace numbers are not unique, but along with the amount and date this number can
       * be used to identify the ACH return at the bank that initiated it.
       */
      trace_number: string;

      /**
       * The identifier of the Transaction associated with this return.
       */
      transaction_id: string;

      /**
       * The identifier of the ACH Transfer associated with this return.
       */
      transfer_id: string;
    }

    /**
     * A Card Dispute Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_dispute_acceptance`.
     */
    export interface CardDisputeAcceptance {
      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Card Dispute was accepted.
       */
      accepted_at: string;

      /**
       * The identifier of the Card Dispute that was accepted.
       */
      card_dispute_id: string;

      /**
       * The identifier of the Transaction that was created to return the disputed funds
       * to your account.
       */
      transaction_id: string;
    }

    /**
     * A Card Dispute Loss object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_dispute_loss`.
     */
    export interface CardDisputeLoss {
      /**
       * The identifier of the Card Dispute that was lost.
       */
      card_dispute_id: string;

      /**
       * Why the Card Dispute was lost.
       */
      explanation: string;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the Card Dispute was lost.
       */
      lost_at: string;

      /**
       * The identifier of the Transaction that was created to debit the disputed funds
       * from your account.
       */
      transaction_id: string;
    }

    /**
     * A Card Refund object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_refund`.
     */
    export interface CardRefund {
      /**
       * The Card Refund identifier.
       */
      id: string;

      /**
       * The amount in the minor unit of the transaction's settlement currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's settlement currency.
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
       * Interchange assessed as a part of this transaciton.
       */
      interchange: CardRefund.Interchange | null;

      /**
       * The merchant identifier (commonly abbreviated as MID) of the merchant the card
       * is transacting with.
       */
      merchant_acceptor_id: string | null;

      /**
       * The 4-digit MCC describing the merchant's business.
       */
      merchant_category_code: string;

      /**
       * The city the merchant resides in.
       */
      merchant_city: string | null;

      /**
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The name of the merchant.
       */
      merchant_name: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * Network-specific identifiers for this refund.
       */
      network_identifiers: CardRefund.NetworkIdentifiers;

      /**
       * The amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      purchase_details: CardRefund.PurchaseDetails | null;

      /**
       * The identifier of the Transaction associated with this Transaction.
       */
      transaction_id: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_refund`.
       */
      type: 'card_refund';
    }

    export namespace CardRefund {
      /**
       * Interchange assessed as a part of this transaciton.
       */
      export interface Interchange {
        /**
         * The interchange amount given as a string containing a decimal number. The amount
         * is a positive number if it is credited to Increase (e.g., settlements) and a
         * negative number if it is debited (e.g., refunds).
         */
        amount: string;

        /**
         * The card network specific interchange code.
         */
        code: string | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the interchange
         * reimbursement.
         *
         * - `CAD` - Canadian Dollar (CAD)
         * - `CHF` - Swiss Franc (CHF)
         * - `EUR` - Euro (EUR)
         * - `GBP` - British Pound (GBP)
         * - `JPY` - Japanese Yen (JPY)
         * - `USD` - US Dollar (USD)
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';
      }

      /**
       * Network-specific identifiers for this refund.
       */
      export interface NetworkIdentifiers {
        /**
         * A network assigned business ID that identifies the acquirer that processed this
         * transaction.
         */
        acquirer_business_id: string;

        /**
         * A globally unique identifier for this settlement.
         */
        acquirer_reference_number: string;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      export interface PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        car_rental: PurchaseDetails.CarRental | null;

        /**
         * An identifier from the merchant for the customer or consumer.
         */
        customer_reference_identifier: string | null;

        /**
         * The state or provincial tax amount in minor units.
         */
        local_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        local_tax_currency: string | null;

        /**
         * Fields specific to lodging.
         */
        lodging: PurchaseDetails.Lodging | null;

        /**
         * The national tax amount in minor units.
         */
        national_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        national_tax_currency: string | null;

        /**
         * An identifier from the merchant for the purchase to the issuer and cardholder.
         */
        purchase_identifier: string | null;

        /**
         * The format of the purchase identifier.
         *
         * - `free_text` - Free text
         * - `order_number` - Order number
         * - `rental_agreement_number` - Rental agreement number
         * - `hotel_folio_number` - Hotel folio number
         * - `invoice_number` - Invoice number
         */
        purchase_identifier_format:
          | 'free_text'
          | 'order_number'
          | 'rental_agreement_number'
          | 'hotel_folio_number'
          | 'invoice_number'
          | null;

        /**
         * Fields specific to travel.
         */
        travel: PurchaseDetails.Travel | null;
      }

      export namespace PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        export interface CarRental {
          /**
           * Code indicating the vehicle's class.
           */
          car_class_code: string | null;

          /**
           * Date the customer picked up the car or, in the case of a no-show or pre-pay
           * transaction, the scheduled pick up date.
           */
          checkout_date: string | null;

          /**
           * Daily rate being charged for the vehicle.
           */
          daily_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily rental
           * rate.
           */
          daily_rental_rate_currency: string | null;

          /**
           * Number of days the vehicle was rented.
           */
          days_rented: number | null;

          /**
           * Additional charges (gas, late fee, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `gas` - Gas
           * - `extra_mileage` - Extra mileage
           * - `late_return` - Late return
           * - `one_way_service_fee` - One way service fee
           * - `parking_violation` - Parking violation
           */
          extra_charges:
            | 'no_extra_charge'
            | 'gas'
            | 'extra_mileage'
            | 'late_return'
            | 'one_way_service_fee'
            | 'parking_violation'
            | null;

          /**
           * Fuel charges for the vehicle.
           */
          fuel_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the fuel charges
           * assessed.
           */
          fuel_charges_currency: string | null;

          /**
           * Any insurance being charged for the vehicle.
           */
          insurance_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the insurance
           * charges assessed.
           */
          insurance_charges_currency: string | null;

          /**
           * An indicator that the cardholder is being billed for a reserved vehicle that was
           * not actually rented (that is, a "no-show" charge).
           *
           * - `not_applicable` - Not applicable
           * - `no_show_for_specialized_vehicle` - No show for specialized vehicle
           */
          no_show_indicator: 'not_applicable' | 'no_show_for_specialized_vehicle' | null;

          /**
           * Charges for returning the vehicle at a different location than where it was
           * picked up.
           */
          one_way_drop_off_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the one-way
           * drop-off charges assessed.
           */
          one_way_drop_off_charges_currency: string | null;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name: string | null;

          /**
           * Weekly rate being charged for the vehicle.
           */
          weekly_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the weekly
           * rental rate.
           */
          weekly_rental_rate_currency: string | null;
        }

        /**
         * Fields specific to lodging.
         */
        export interface Lodging {
          /**
           * Date the customer checked in.
           */
          check_in_date: string | null;

          /**
           * Daily rate being charged for the room.
           */
          daily_room_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily room
           * rate.
           */
          daily_room_rate_currency: string | null;

          /**
           * Additional charges (phone, late check-out, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `restaurant` - Restaurant
           * - `gift_shop` - Gift shop
           * - `mini_bar` - Mini bar
           * - `telephone` - Telephone
           * - `other` - Other
           * - `laundry` - Laundry
           */
          extra_charges:
            | 'no_extra_charge'
            | 'restaurant'
            | 'gift_shop'
            | 'mini_bar'
            | 'telephone'
            | 'other'
            | 'laundry'
            | null;

          /**
           * Folio cash advances for the room.
           */
          folio_cash_advances_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the folio cash
           * advances.
           */
          folio_cash_advances_currency: string | null;

          /**
           * Food and beverage charges for the room.
           */
          food_beverage_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the food and
           * beverage charges.
           */
          food_beverage_charges_currency: string | null;

          /**
           * Indicator that the cardholder is being billed for a reserved room that was not
           * actually used.
           *
           * - `not_applicable` - Not applicable
           * - `no_show` - No show
           */
          no_show_indicator: 'not_applicable' | 'no_show' | null;

          /**
           * Prepaid expenses being charged for the room.
           */
          prepaid_expenses_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the prepaid
           * expenses.
           */
          prepaid_expenses_currency: string | null;

          /**
           * Number of nights the room was rented.
           */
          room_nights: number | null;

          /**
           * Total room tax being charged.
           */
          total_room_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total room
           * tax.
           */
          total_room_tax_currency: string | null;

          /**
           * Total tax being charged for the room.
           */
          total_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total tax
           * assessed.
           */
          total_tax_currency: string | null;
        }

        /**
         * Fields specific to travel.
         */
        export interface Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          ancillary: Travel.Ancillary | null;

          /**
           * Indicates the computerized reservation system used to book the ticket.
           */
          computerized_reservation_system: string | null;

          /**
           * Indicates the reason for a credit to the cardholder.
           *
           * - `no_credit` - No credit
           * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
           *   ancillary purchase cancellation
           * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
           *   Airline ticket and passenger transport ancillary purchase cancellation
           * - `airline_ticket_cancellation` - Airline ticket cancellation
           * - `other` - Other
           * - `partial_refund_of_airline_ticket` - Partial refund of airline ticket
           */
          credit_reason_indicator:
            | 'no_credit'
            | 'passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_cancellation'
            | 'other'
            | 'partial_refund_of_airline_ticket'
            | null;

          /**
           * Date of departure.
           */
          departure_date: string | null;

          /**
           * Code for the originating city or airport.
           */
          origination_city_airport_code: string | null;

          /**
           * Name of the passenger.
           */
          passenger_name: string | null;

          /**
           * Indicates whether this ticket is non-refundable.
           *
           * - `no_restrictions` - No restrictions
           * - `restricted_non_refundable_ticket` - Restricted non-refundable ticket
           */
          restricted_ticket_indicator: 'no_restrictions' | 'restricted_non_refundable_ticket' | null;

          /**
           * Indicates why a ticket was changed.
           *
           * - `none` - None
           * - `change_to_existing_ticket` - Change to existing ticket
           * - `new_ticket` - New ticket
           */
          ticket_change_indicator: 'none' | 'change_to_existing_ticket' | 'new_ticket' | null;

          /**
           * Ticket number.
           */
          ticket_number: string | null;

          /**
           * Code for the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_code: string | null;

          /**
           * Name of the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_name: string | null;

          /**
           * Fields specific to each leg of the journey.
           */
          trip_legs: Array<Travel.TripLeg> | null;
        }

        export namespace Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          export interface Ancillary {
            /**
             * If this purchase has a connection or relationship to another purchase, such as a
             * baggage fee for a passenger transport ticket, this field should contain the
             * ticket document number for the other purchase.
             */
            connected_ticket_document_number: string | null;

            /**
             * Indicates the reason for a credit to the cardholder.
             *
             * - `no_credit` - No credit
             * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
             *   ancillary purchase cancellation
             * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
             *   Airline ticket and passenger transport ancillary purchase cancellation
             * - `other` - Other
             */
            credit_reason_indicator:
              | 'no_credit'
              | 'passenger_transport_ancillary_purchase_cancellation'
              | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
              | 'other'
              | null;

            /**
             * Name of the passenger or description of the ancillary purchase.
             */
            passenger_name_or_description: string | null;

            /**
             * Additional travel charges, such as baggage fees.
             */
            services: Array<Ancillary.Service>;

            /**
             * Ticket document number.
             */
            ticket_document_number: string | null;
          }

          export namespace Ancillary {
            export interface Service {
              /**
               * Category of the ancillary service.
               *
               * - `none` - None
               * - `bundled_service` - Bundled service
               * - `baggage_fee` - Baggage fee
               * - `change_fee` - Change fee
               * - `cargo` - Cargo
               * - `carbon_offset` - Carbon offset
               * - `frequent_flyer` - Frequent flyer
               * - `gift_card` - Gift card
               * - `ground_transport` - Ground transport
               * - `in_flight_entertainment` - In-flight entertainment
               * - `lounge` - Lounge
               * - `medical` - Medical
               * - `meal_beverage` - Meal beverage
               * - `other` - Other
               * - `passenger_assist_fee` - Passenger assist fee
               * - `pets` - Pets
               * - `seat_fees` - Seat fees
               * - `standby` - Standby
               * - `service_fee` - Service fee
               * - `store` - Store
               * - `travel_service` - Travel service
               * - `unaccompanied_travel` - Unaccompanied travel
               * - `upgrades` - Upgrades
               * - `wifi` - Wi-fi
               */
              category:
                | 'none'
                | 'bundled_service'
                | 'baggage_fee'
                | 'change_fee'
                | 'cargo'
                | 'carbon_offset'
                | 'frequent_flyer'
                | 'gift_card'
                | 'ground_transport'
                | 'in_flight_entertainment'
                | 'lounge'
                | 'medical'
                | 'meal_beverage'
                | 'other'
                | 'passenger_assist_fee'
                | 'pets'
                | 'seat_fees'
                | 'standby'
                | 'service_fee'
                | 'store'
                | 'travel_service'
                | 'unaccompanied_travel'
                | 'upgrades'
                | 'wifi'
                | null;

              /**
               * Sub-category of the ancillary service, free-form.
               */
              sub_category: string | null;
            }
          }

          export interface TripLeg {
            /**
             * Carrier code (e.g., United Airlines, Jet Blue, etc.).
             */
            carrier_code: string | null;

            /**
             * Code for the destination city or airport.
             */
            destination_city_airport_code: string | null;

            /**
             * Fare basis code.
             */
            fare_basis_code: string | null;

            /**
             * Flight number.
             */
            flight_number: string | null;

            /**
             * Service class (e.g., first class, business class, etc.).
             */
            service_class: string | null;

            /**
             * Indicates whether a stopover is allowed on this ticket.
             *
             * - `none` - None
             * - `stop_over_allowed` - Stop over allowed
             * - `stop_over_not_allowed` - Stop over not allowed
             */
            stop_over_code: 'none' | 'stop_over_allowed' | 'stop_over_not_allowed' | null;
          }
        }
      }
    }

    /**
     * A Card Revenue Payment object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_revenue_payment`.
     */
    export interface CardRevenuePayment {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
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
       * The end of the period for which this transaction paid interest.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid interest.
       */
      period_start: string;

      /**
       * The account the card belonged to.
       */
      transacted_on_account_id: string | null;
    }

    /**
     * A Card Settlement object. This field will be present in the JSON response if and
     * only if `category` is equal to `card_settlement`.
     */
    export interface CardSettlement {
      /**
       * The Card Settlement identifier.
       */
      id: string;

      /**
       * The amount in the minor unit of the transaction's settlement currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The Card Authorization that was created prior to this Card Settlement, if one
       * exists.
       */
      card_authorization: string | null;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's settlement currency.
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
       * Interchange assessed as a part of this transaciton.
       */
      interchange: CardSettlement.Interchange | null;

      /**
       * The merchant identifier (commonly abbreviated as MID) of the merchant the card
       * is transacting with.
       */
      merchant_acceptor_id: string | null;

      /**
       * The 4-digit MCC describing the merchant's business.
       */
      merchant_category_code: string;

      /**
       * The city the merchant resides in.
       */
      merchant_city: string | null;

      /**
       * The country the merchant resides in.
       */
      merchant_country: string;

      /**
       * The name of the merchant.
       */
      merchant_name: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * Network-specific identifiers for this refund.
       */
      network_identifiers: CardSettlement.NetworkIdentifiers;

      /**
       * The identifier of the Pending Transaction associated with this Transaction.
       */
      pending_transaction_id: string | null;

      /**
       * The amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      purchase_details: CardSettlement.PurchaseDetails | null;

      /**
       * The identifier of the Transaction associated with this Transaction.
       */
      transaction_id: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_settlement`.
       */
      type: 'card_settlement';
    }

    export namespace CardSettlement {
      /**
       * Interchange assessed as a part of this transaciton.
       */
      export interface Interchange {
        /**
         * The interchange amount given as a string containing a decimal number. The amount
         * is a positive number if it is credited to Increase (e.g., settlements) and a
         * negative number if it is debited (e.g., refunds).
         */
        amount: string;

        /**
         * The card network specific interchange code.
         */
        code: string | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the interchange
         * reimbursement.
         *
         * - `CAD` - Canadian Dollar (CAD)
         * - `CHF` - Swiss Franc (CHF)
         * - `EUR` - Euro (EUR)
         * - `GBP` - British Pound (GBP)
         * - `JPY` - Japanese Yen (JPY)
         * - `USD` - US Dollar (USD)
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';
      }

      /**
       * Network-specific identifiers for this refund.
       */
      export interface NetworkIdentifiers {
        /**
         * A network assigned business ID that identifies the acquirer that processed this
         * transaction.
         */
        acquirer_business_id: string;

        /**
         * A globally unique identifier for this settlement.
         */
        acquirer_reference_number: string;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Additional details about the card purchase, such as tax and industry-specific
       * fields.
       */
      export interface PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        car_rental: PurchaseDetails.CarRental | null;

        /**
         * An identifier from the merchant for the customer or consumer.
         */
        customer_reference_identifier: string | null;

        /**
         * The state or provincial tax amount in minor units.
         */
        local_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        local_tax_currency: string | null;

        /**
         * Fields specific to lodging.
         */
        lodging: PurchaseDetails.Lodging | null;

        /**
         * The national tax amount in minor units.
         */
        national_tax_amount: number | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the local tax
         * assessed.
         */
        national_tax_currency: string | null;

        /**
         * An identifier from the merchant for the purchase to the issuer and cardholder.
         */
        purchase_identifier: string | null;

        /**
         * The format of the purchase identifier.
         *
         * - `free_text` - Free text
         * - `order_number` - Order number
         * - `rental_agreement_number` - Rental agreement number
         * - `hotel_folio_number` - Hotel folio number
         * - `invoice_number` - Invoice number
         */
        purchase_identifier_format:
          | 'free_text'
          | 'order_number'
          | 'rental_agreement_number'
          | 'hotel_folio_number'
          | 'invoice_number'
          | null;

        /**
         * Fields specific to travel.
         */
        travel: PurchaseDetails.Travel | null;
      }

      export namespace PurchaseDetails {
        /**
         * Fields specific to car rentals.
         */
        export interface CarRental {
          /**
           * Code indicating the vehicle's class.
           */
          car_class_code: string | null;

          /**
           * Date the customer picked up the car or, in the case of a no-show or pre-pay
           * transaction, the scheduled pick up date.
           */
          checkout_date: string | null;

          /**
           * Daily rate being charged for the vehicle.
           */
          daily_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily rental
           * rate.
           */
          daily_rental_rate_currency: string | null;

          /**
           * Number of days the vehicle was rented.
           */
          days_rented: number | null;

          /**
           * Additional charges (gas, late fee, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `gas` - Gas
           * - `extra_mileage` - Extra mileage
           * - `late_return` - Late return
           * - `one_way_service_fee` - One way service fee
           * - `parking_violation` - Parking violation
           */
          extra_charges:
            | 'no_extra_charge'
            | 'gas'
            | 'extra_mileage'
            | 'late_return'
            | 'one_way_service_fee'
            | 'parking_violation'
            | null;

          /**
           * Fuel charges for the vehicle.
           */
          fuel_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the fuel charges
           * assessed.
           */
          fuel_charges_currency: string | null;

          /**
           * Any insurance being charged for the vehicle.
           */
          insurance_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the insurance
           * charges assessed.
           */
          insurance_charges_currency: string | null;

          /**
           * An indicator that the cardholder is being billed for a reserved vehicle that was
           * not actually rented (that is, a "no-show" charge).
           *
           * - `not_applicable` - Not applicable
           * - `no_show_for_specialized_vehicle` - No show for specialized vehicle
           */
          no_show_indicator: 'not_applicable' | 'no_show_for_specialized_vehicle' | null;

          /**
           * Charges for returning the vehicle at a different location than where it was
           * picked up.
           */
          one_way_drop_off_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the one-way
           * drop-off charges assessed.
           */
          one_way_drop_off_charges_currency: string | null;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name: string | null;

          /**
           * Weekly rate being charged for the vehicle.
           */
          weekly_rental_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the weekly
           * rental rate.
           */
          weekly_rental_rate_currency: string | null;
        }

        /**
         * Fields specific to lodging.
         */
        export interface Lodging {
          /**
           * Date the customer checked in.
           */
          check_in_date: string | null;

          /**
           * Daily rate being charged for the room.
           */
          daily_room_rate_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the daily room
           * rate.
           */
          daily_room_rate_currency: string | null;

          /**
           * Additional charges (phone, late check-out, etc.) being billed.
           *
           * - `no_extra_charge` - No extra charge
           * - `restaurant` - Restaurant
           * - `gift_shop` - Gift shop
           * - `mini_bar` - Mini bar
           * - `telephone` - Telephone
           * - `other` - Other
           * - `laundry` - Laundry
           */
          extra_charges:
            | 'no_extra_charge'
            | 'restaurant'
            | 'gift_shop'
            | 'mini_bar'
            | 'telephone'
            | 'other'
            | 'laundry'
            | null;

          /**
           * Folio cash advances for the room.
           */
          folio_cash_advances_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the folio cash
           * advances.
           */
          folio_cash_advances_currency: string | null;

          /**
           * Food and beverage charges for the room.
           */
          food_beverage_charges_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the food and
           * beverage charges.
           */
          food_beverage_charges_currency: string | null;

          /**
           * Indicator that the cardholder is being billed for a reserved room that was not
           * actually used.
           *
           * - `not_applicable` - Not applicable
           * - `no_show` - No show
           */
          no_show_indicator: 'not_applicable' | 'no_show' | null;

          /**
           * Prepaid expenses being charged for the room.
           */
          prepaid_expenses_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the prepaid
           * expenses.
           */
          prepaid_expenses_currency: string | null;

          /**
           * Number of nights the room was rented.
           */
          room_nights: number | null;

          /**
           * Total room tax being charged.
           */
          total_room_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total room
           * tax.
           */
          total_room_tax_currency: string | null;

          /**
           * Total tax being charged for the room.
           */
          total_tax_amount: number | null;

          /**
           * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total tax
           * assessed.
           */
          total_tax_currency: string | null;
        }

        /**
         * Fields specific to travel.
         */
        export interface Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          ancillary: Travel.Ancillary | null;

          /**
           * Indicates the computerized reservation system used to book the ticket.
           */
          computerized_reservation_system: string | null;

          /**
           * Indicates the reason for a credit to the cardholder.
           *
           * - `no_credit` - No credit
           * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
           *   ancillary purchase cancellation
           * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
           *   Airline ticket and passenger transport ancillary purchase cancellation
           * - `airline_ticket_cancellation` - Airline ticket cancellation
           * - `other` - Other
           * - `partial_refund_of_airline_ticket` - Partial refund of airline ticket
           */
          credit_reason_indicator:
            | 'no_credit'
            | 'passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
            | 'airline_ticket_cancellation'
            | 'other'
            | 'partial_refund_of_airline_ticket'
            | null;

          /**
           * Date of departure.
           */
          departure_date: string | null;

          /**
           * Code for the originating city or airport.
           */
          origination_city_airport_code: string | null;

          /**
           * Name of the passenger.
           */
          passenger_name: string | null;

          /**
           * Indicates whether this ticket is non-refundable.
           *
           * - `no_restrictions` - No restrictions
           * - `restricted_non_refundable_ticket` - Restricted non-refundable ticket
           */
          restricted_ticket_indicator: 'no_restrictions' | 'restricted_non_refundable_ticket' | null;

          /**
           * Indicates why a ticket was changed.
           *
           * - `none` - None
           * - `change_to_existing_ticket` - Change to existing ticket
           * - `new_ticket` - New ticket
           */
          ticket_change_indicator: 'none' | 'change_to_existing_ticket' | 'new_ticket' | null;

          /**
           * Ticket number.
           */
          ticket_number: string | null;

          /**
           * Code for the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_code: string | null;

          /**
           * Name of the travel agency if the ticket was issued by a travel agency.
           */
          travel_agency_name: string | null;

          /**
           * Fields specific to each leg of the journey.
           */
          trip_legs: Array<Travel.TripLeg> | null;
        }

        export namespace Travel {
          /**
           * Ancillary purchases in addition to the airfare.
           */
          export interface Ancillary {
            /**
             * If this purchase has a connection or relationship to another purchase, such as a
             * baggage fee for a passenger transport ticket, this field should contain the
             * ticket document number for the other purchase.
             */
            connected_ticket_document_number: string | null;

            /**
             * Indicates the reason for a credit to the cardholder.
             *
             * - `no_credit` - No credit
             * - `passenger_transport_ancillary_purchase_cancellation` - Passenger transport
             *   ancillary purchase cancellation
             * - `airline_ticket_and_passenger_transport_ancillary_purchase_cancellation` -
             *   Airline ticket and passenger transport ancillary purchase cancellation
             * - `other` - Other
             */
            credit_reason_indicator:
              | 'no_credit'
              | 'passenger_transport_ancillary_purchase_cancellation'
              | 'airline_ticket_and_passenger_transport_ancillary_purchase_cancellation'
              | 'other'
              | null;

            /**
             * Name of the passenger or description of the ancillary purchase.
             */
            passenger_name_or_description: string | null;

            /**
             * Additional travel charges, such as baggage fees.
             */
            services: Array<Ancillary.Service>;

            /**
             * Ticket document number.
             */
            ticket_document_number: string | null;
          }

          export namespace Ancillary {
            export interface Service {
              /**
               * Category of the ancillary service.
               *
               * - `none` - None
               * - `bundled_service` - Bundled service
               * - `baggage_fee` - Baggage fee
               * - `change_fee` - Change fee
               * - `cargo` - Cargo
               * - `carbon_offset` - Carbon offset
               * - `frequent_flyer` - Frequent flyer
               * - `gift_card` - Gift card
               * - `ground_transport` - Ground transport
               * - `in_flight_entertainment` - In-flight entertainment
               * - `lounge` - Lounge
               * - `medical` - Medical
               * - `meal_beverage` - Meal beverage
               * - `other` - Other
               * - `passenger_assist_fee` - Passenger assist fee
               * - `pets` - Pets
               * - `seat_fees` - Seat fees
               * - `standby` - Standby
               * - `service_fee` - Service fee
               * - `store` - Store
               * - `travel_service` - Travel service
               * - `unaccompanied_travel` - Unaccompanied travel
               * - `upgrades` - Upgrades
               * - `wifi` - Wi-fi
               */
              category:
                | 'none'
                | 'bundled_service'
                | 'baggage_fee'
                | 'change_fee'
                | 'cargo'
                | 'carbon_offset'
                | 'frequent_flyer'
                | 'gift_card'
                | 'ground_transport'
                | 'in_flight_entertainment'
                | 'lounge'
                | 'medical'
                | 'meal_beverage'
                | 'other'
                | 'passenger_assist_fee'
                | 'pets'
                | 'seat_fees'
                | 'standby'
                | 'service_fee'
                | 'store'
                | 'travel_service'
                | 'unaccompanied_travel'
                | 'upgrades'
                | 'wifi'
                | null;

              /**
               * Sub-category of the ancillary service, free-form.
               */
              sub_category: string | null;
            }
          }

          export interface TripLeg {
            /**
             * Carrier code (e.g., United Airlines, Jet Blue, etc.).
             */
            carrier_code: string | null;

            /**
             * Code for the destination city or airport.
             */
            destination_city_airport_code: string | null;

            /**
             * Fare basis code.
             */
            fare_basis_code: string | null;

            /**
             * Flight number.
             */
            flight_number: string | null;

            /**
             * Service class (e.g., first class, business class, etc.).
             */
            service_class: string | null;

            /**
             * Indicates whether a stopover is allowed on this ticket.
             *
             * - `none` - None
             * - `stop_over_allowed` - Stop over allowed
             * - `stop_over_not_allowed` - Stop over not allowed
             */
            stop_over_code: 'none' | 'stop_over_allowed' | 'stop_over_not_allowed' | null;
          }
        }
      }
    }

    /**
     * A Cashback Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `cashback_payment`.
     */
    export interface CashbackPayment {
      /**
       * The card on which the cashback was accrued.
       */
      accrued_on_card_id: string | null;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
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
       * The end of the period for which this transaction paid cashback.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid cashback.
       */
      period_start: string;
    }

    /**
     * A Check Deposit Acceptance object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_acceptance`.
     */
    export interface CheckDepositAcceptance {
      /**
       * The account number printed on the check.
       */
      account_number: string;

      /**
       * The amount to be deposited in the minor unit of the transaction's currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * An additional line of metadata printed on the check. This typically includes the
       * check number for business checks.
       */
      auxiliary_on_us: string | null;

      /**
       * The ID of the Check Deposit that was accepted.
       */
      check_deposit_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
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
       * The routing number printed on the check.
       */
      routing_number: string;

      /**
       * The check serial number, if present, for consumer checks. For business checks,
       * the serial number is usually in the `auxiliary_on_us` field.
       */
      serial_number: string | null;
    }

    /**
     * A Check Deposit Return object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_deposit_return`.
     */
    export interface CheckDepositReturn {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the Check Deposit that was returned.
       */
      check_deposit_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
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
       * Why this check was returned by the bank holding the account it was drawn
       * against.
       *
       * - `ach_conversion_not_supported` - The check doesn't allow ACH conversion.
       * - `closed_account` - The account is closed.
       * - `duplicate_submission` - The check has already been deposited.
       * - `insufficient_funds` - Insufficient funds
       * - `no_account` - No account was found matching the check details.
       * - `not_authorized` - The check was not authorized.
       * - `stale_dated` - The check is too old.
       * - `stop_payment` - The payment has been stopped by the account holder.
       * - `unknown_reason` - The reason for the return is unknown.
       * - `unmatched_details` - The image doesn't match the details submitted.
       * - `unreadable_image` - The image could not be read.
       * - `endorsement_irregular` - The check endorsement was irregular.
       * - `altered_or_fictitious_item` - The check present was either altered or fake.
       * - `frozen_or_blocked_account` - The account this check is drawn on is frozen.
       * - `post_dated` - The check is post dated.
       * - `endorsement_missing` - The endorsement was missing.
       * - `signature_missing` - The check signature was missing.
       * - `stop_payment_suspect` - The bank suspects a stop payment will be placed.
       * - `unusable_image` - The bank cannot read the image.
       * - `image_fails_security_check` - The check image fails the bank's security
       *   check.
       * - `cannot_determine_amount` - The bank cannot determine the amount.
       * - `signature_irregular` - The signature is inconsistent with prior signatures.
       * - `non_cash_item` - The check is a non-cash item and cannot be drawn against the
       *   account.
       * - `unable_to_process` - The bank is unable to process this check.
       * - `item_exceeds_dollar_limit` - The check exceeds the bank or customer's limit.
       * - `branch_or_account_sold` - The bank sold this account and no longer services
       *   this customer.
       */
      return_reason:
        | 'ach_conversion_not_supported'
        | 'closed_account'
        | 'duplicate_submission'
        | 'insufficient_funds'
        | 'no_account'
        | 'not_authorized'
        | 'stale_dated'
        | 'stop_payment'
        | 'unknown_reason'
        | 'unmatched_details'
        | 'unreadable_image'
        | 'endorsement_irregular'
        | 'altered_or_fictitious_item'
        | 'frozen_or_blocked_account'
        | 'post_dated'
        | 'endorsement_missing'
        | 'signature_missing'
        | 'stop_payment_suspect'
        | 'unusable_image'
        | 'image_fails_security_check'
        | 'cannot_determine_amount'
        | 'signature_irregular'
        | 'non_cash_item'
        | 'unable_to_process'
        | 'item_exceeds_dollar_limit'
        | 'branch_or_account_sold';

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the check deposit was returned.
       */
      returned_at: string;

      /**
       * The identifier of the transaction that reversed the original check deposit
       * transaction.
       */
      transaction_id: string;
    }

    /**
     * A Check Transfer Deposit object. This field will be present in the JSON response
     * if and only if `category` is equal to `check_transfer_deposit`.
     */
    export interface CheckTransferDeposit {
      /**
       * The identifier of the API File object containing an image of the back of the
       * deposited check.
       */
      back_image_file_id: string | null;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
       * bank depositing this check. In some rare cases, this is not transmitted via
       * Check21 and the value will be null.
       */
      bank_of_first_deposit_routing_number: string | null;

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
       * The identifier of the Inbound Check Deposit object associated with this
       * transaction.
       */
      inbound_check_deposit_id: string | null;

      /**
       * The identifier of the Transaction object created when the check was deposited.
       */
      transaction_id: string | null;

      /**
       * The identifier of the Check Transfer object that was deposited.
       */
      transfer_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `check_transfer_deposit`.
       */
      type: 'check_transfer_deposit';
    }

    /**
     * A Fee Payment object. This field will be present in the JSON response if and
     * only if `category` is equal to `fee_payment`.
     */
    export interface FeePayment {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
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
       * The start of this payment's fee period, usually the first day of a month.
       */
      fee_period_start: string;
    }

    /**
     * An Inbound ACH Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `inbound_ach_transfer`.
     */
    export interface InboundACHTransfer {
      /**
       * Additional information sent from the originator.
       */
      addenda: InboundACHTransfer.Addenda | null;

      /**
       * The amount in the minor unit of the destination account currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The description of the date of the transfer, usually in the format `YYMMDD`.
       */
      originator_company_descriptive_date: string | null;

      /**
       * Data set by the originator.
       */
      originator_company_discretionary_data: string | null;

      /**
       * An informational description of the transfer.
       */
      originator_company_entry_description: string;

      /**
       * An identifier for the originating company. This is generally, but not always, a
       * stable identifier across multiple transfers.
       */
      originator_company_id: string;

      /**
       * A name set by the originator to identify themselves.
       */
      originator_company_name: string;

      /**
       * The originator's identifier for the transfer recipient.
       */
      receiver_id_number: string | null;

      /**
       * The name of the transfer recipient. This value is informational and not verified
       * by Increase.
       */
      receiver_name: string | null;

      /**
       * A 15 digit number recorded in the Nacha file and available to both the
       * originating and receiving bank. Along with the amount, date, and originating
       * routing number, this can be used to identify the ACH transfer at either bank.
       * ACH trace numbers are not unique, but are
       * [used to correlate returns](https://increase.com/documentation/ach-returns#ach-returns).
       */
      trace_number: string;

      /**
       * The Inbound ACH Transfer's identifier.
       */
      transfer_id: string;
    }

    export namespace InboundACHTransfer {
      /**
       * Additional information sent from the originator.
       */
      export interface Addenda {
        /**
         * The type of addendum.
         *
         * - `freeform` - Unstructured addendum.
         */
        category: 'freeform';

        /**
         * Unstructured `payment_related_information` passed through by the originator.
         */
        freeform: Addenda.Freeform | null;
      }

      export namespace Addenda {
        /**
         * Unstructured `payment_related_information` passed through by the originator.
         */
        export interface Freeform {
          /**
           * Each entry represents an addendum received from the originator.
           */
          entries: Array<Freeform.Entry>;
        }

        export namespace Freeform {
          export interface Entry {
            /**
             * The payment related information passed in the addendum.
             */
            payment_related_information: string;
          }
        }
      }
    }

    /**
     * An Inbound Real-Time Payments Transfer Confirmation object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_confirmation`.
     */
    export interface InboundRealTimePaymentsTransferConfirmation {
      /**
       * The amount in the minor unit of the transfer's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The name the sender of the transfer specified as the recipient of the transfer.
       */
      creditor_name: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's
       * currency. This will always be "USD" for a Real-Time Payments transfer.
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
       * The account number of the account that sent the transfer.
       */
      debtor_account_number: string;

      /**
       * The name provided by the sender of the transfer.
       */
      debtor_name: string;

      /**
       * The routing number of the account that sent the transfer.
       */
      debtor_routing_number: string;

      /**
       * Additional information included with the transfer.
       */
      remittance_information: string | null;

      /**
       * The Real-Time Payments network identification of the transfer.
       */
      transaction_identification: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * An Inbound Real-Time Payments Transfer Decline object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_decline`.
     */
    export interface InboundRealTimePaymentsTransferDecline {
      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The name the sender of the transfer specified as the recipient of the transfer.
       */
      creditor_name: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the declined
       * transfer's currency. This will always be "USD" for a Real-Time Payments
       * transfer.
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
       * The account number of the account that sent the transfer.
       */
      debtor_account_number: string;

      /**
       * The name provided by the sender of the transfer.
       */
      debtor_name: string;

      /**
       * The routing number of the account that sent the transfer.
       */
      debtor_routing_number: string;

      /**
       * Why the transfer was declined.
       *
       * - `account_number_canceled` - The account number is canceled.
       * - `account_number_disabled` - The account number is disabled.
       * - `account_restricted` - Your account is restricted.
       * - `group_locked` - Your account is inactive.
       * - `entity_not_active` - The account's entity is not active.
       * - `real_time_payments_not_enabled` - Your account is not enabled to receive
       *   Real-Time Payments transfers.
       */
      reason:
        | 'account_number_canceled'
        | 'account_number_disabled'
        | 'account_restricted'
        | 'group_locked'
        | 'entity_not_active'
        | 'real_time_payments_not_enabled';

      /**
       * Additional information included with the transfer.
       */
      remittance_information: string | null;

      /**
       * The Real-Time Payments network identification of the declined transfer.
       */
      transaction_identification: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * An Inbound Wire Reversal object. This field will be present in the JSON response
     * if and only if `category` is equal to `inbound_wire_reversal`.
     */
    export interface InboundWireReversal {
      /**
       * The amount that was reversed in USD cents.
       */
      amount: number;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the reversal was created.
       */
      created_at: string;

      /**
       * The description on the reversal message from Fedwire, set by the reversing bank.
       */
      description: string;

      /**
       * Additional financial institution information included in the wire reversal.
       */
      financial_institution_to_financial_institution_information: string | null;

      /**
       * The Fedwire cycle date for the wire reversal. The "Fedwire day" begins at 9:00
       * PM Eastern Time on the evening before the `cycle date`.
       */
      input_cycle_date: string;

      /**
       * The Fedwire transaction identifier.
       */
      input_message_accountability_data: string;

      /**
       * The Fedwire sequence number.
       */
      input_sequence_number: string;

      /**
       * The Fedwire input source identifier.
       */
      input_source: string;

      /**
       * The American Banking Association (ABA) routing number of the bank originating
       * the transfer.
       */
      originator_routing_number: string | null;

      /**
       * The Fedwire cycle date for the wire transfer that is being reversed by this
       * message.
       */
      previous_message_input_cycle_date: string;

      /**
       * The Fedwire transaction identifier for the wire transfer that was reversed.
       */
      previous_message_input_message_accountability_data: string;

      /**
       * The Fedwire sequence number for the wire transfer that was reversed.
       */
      previous_message_input_sequence_number: string;

      /**
       * The Fedwire input source identifier for the wire transfer that was reversed.
       */
      previous_message_input_source: string;

      /**
       * Information included in the wire reversal for the receiving financial
       * institution.
       */
      receiver_financial_institution_information: string | null;

      /**
       * The sending bank's reference number for the wire reversal.
       */
      sender_reference: string | null;

      /**
       * The ID for the Transaction associated with the transfer reversal.
       */
      transaction_id: string;

      /**
       * The ID for the Wire Transfer that is being reversed.
       */
      wire_transfer_id: string;
    }

    /**
     * An Inbound Wire Transfer Intention object. This field will be present in the
     * JSON response if and only if `category` is equal to `inbound_wire_transfer`.
     */
    export interface InboundWireTransfer {
      /**
       * The amount in USD cents.
       */
      amount: number;

      /**
       * A free-form address field set by the sender.
       */
      beneficiary_address_line1: string | null;

      /**
       * A free-form address field set by the sender.
       */
      beneficiary_address_line2: string | null;

      /**
       * A free-form address field set by the sender.
       */
      beneficiary_address_line3: string | null;

      /**
       * A name set by the sender.
       */
      beneficiary_name: string | null;

      /**
       * A free-form reference string set by the sender, to help identify the transfer.
       */
      beneficiary_reference: string | null;

      /**
       * An Increase-constructed description of the transfer.
       */
      description: string;

      /**
       * A unique identifier available to the originating and receiving banks, commonly
       * abbreviated as IMAD. It is created when the wire is submitted to the Fedwire
       * service and is helpful when debugging wires with the originating bank.
       */
      input_message_accountability_data: string | null;

      /**
       * The address of the wire originator, set by the sending bank.
       */
      originator_address_line1: string | null;

      /**
       * The address of the wire originator, set by the sending bank.
       */
      originator_address_line2: string | null;

      /**
       * The address of the wire originator, set by the sending bank.
       */
      originator_address_line3: string | null;

      /**
       * The originator of the wire, set by the sending bank.
       */
      originator_name: string | null;

      /**
       * The American Banking Association (ABA) routing number of the bank originating
       * the transfer.
       */
      originator_routing_number: string | null;

      /**
       * An Increase-created concatenation of the Originator-to-Beneficiary lines.
       */
      originator_to_beneficiary_information: string | null;

      /**
       * A free-form message set by the wire originator.
       */
      originator_to_beneficiary_information_line1: string | null;

      /**
       * A free-form message set by the wire originator.
       */
      originator_to_beneficiary_information_line2: string | null;

      /**
       * A free-form message set by the wire originator.
       */
      originator_to_beneficiary_information_line3: string | null;

      /**
       * A free-form message set by the wire originator.
       */
      originator_to_beneficiary_information_line4: string | null;

      /**
       * The ID of the Inbound Wire Transfer object that resulted in this Transaction.
       */
      transfer_id: string;
    }

    /**
     * An Interest Payment object. This field will be present in the JSON response if
     * and only if `category` is equal to `interest_payment`.
     */
    export interface InterestPayment {
      /**
       * The account on which the interest was accrued.
       */
      accrued_on_account_id: string | null;

      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
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
       * The end of the period for which this transaction paid interest.
       */
      period_end: string;

      /**
       * The start of the period for which this transaction paid interest.
       */
      period_start: string;
    }

    /**
     * An Internal Source object. This field will be present in the JSON response if
     * and only if `category` is equal to `internal_source`.
     */
    export interface InternalSource {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction
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
       * An Internal Source is a transaction between you and Increase. This describes the
       * reason for the transaction.
       *
       * - `account_closure` - Account closure
       * - `bank_drawn_check` - Bank-drawn check
       * - `bank_drawn_check_credit` - Bank-drawn check credit
       * - `bank_migration` - Bank migration
       * - `check_adjustment` - Check adjustment
       * - `collection_payment` - Collection payment
       * - `collection_receivable` - Collection receivable
       * - `empyreal_adjustment` - Empyreal adjustment
       * - `error` - Error
       * - `error_correction` - Error correction
       * - `fees` - Fees
       * - `interest` - Interest
       * - `negative_balance_forgiveness` - Negative balance forgiveness
       * - `sample_funds` - Sample funds
       * - `sample_funds_return` - Sample funds return
       */
      reason:
        | 'account_closure'
        | 'bank_drawn_check'
        | 'bank_drawn_check_credit'
        | 'bank_migration'
        | 'check_adjustment'
        | 'collection_payment'
        | 'collection_receivable'
        | 'empyreal_adjustment'
        | 'error'
        | 'error_correction'
        | 'fees'
        | 'interest'
        | 'negative_balance_forgiveness'
        | 'sample_funds'
        | 'sample_funds_return';
    }

    /**
     * A Real-Time Payments Transfer Acknowledgement object. This field will be present
     * in the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_acknowledgement`.
     */
    export interface RealTimePaymentsTransferAcknowledgement {
      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The destination account number.
       */
      destination_account_number: string;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN).
       */
      destination_routing_number: string;

      /**
       * Unstructured information that will show on the recipient's bank statement.
       */
      remittance_information: string;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    /**
     * A Sample Funds object. This field will be present in the JSON response if and
     * only if `category` is equal to `sample_funds`.
     */
    export interface SampleFunds {
      /**
       * Where the sample funds came from.
       */
      originator: string;
    }

    /**
     * A Wire Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_intention`.
     */
    export interface WireTransferIntention {
      /**
       * The destination account number.
       */
      account_number: string;

      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      /**
       * The message that will show on the recipient's bank statement.
       */
      message_to_recipient: string;

      /**
       * The American Bankers' Association (ABA) Routing Transit Number (RTN).
       */
      routing_number: string;

      /**
       * The identifier of the Wire Transfer that led to this Transaction.
       */
      transfer_id: string;
    }
  }
}

export interface TransactionListParams extends PageParams {
  /**
   * Filter Transactions for those belonging to the specified Account.
   */
  account_id?: string;

  category?: TransactionListParams.Category;

  created_at?: TransactionListParams.CreatedAt;

  /**
   * Filter Transactions for those belonging to the specified route. This could be a
   * Card ID or an Account Number ID.
   */
  route_id?: string;
}

export namespace TransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'account_transfer_intention'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'cashback_payment'
      | 'card_dispute_acceptance'
      | 'card_dispute_loss'
      | 'card_refund'
      | 'card_settlement'
      | 'card_revenue_payment'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'check_transfer_deposit'
      | 'fee_payment'
      | 'inbound_ach_transfer'
      | 'inbound_ach_transfer_return_intention'
      | 'inbound_check_deposit_return_intention'
      | 'inbound_check_adjustment'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_real_time_payments_transfer_decline'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'inbound_wire_transfer_reversal'
      | 'interest_payment'
      | 'internal_source'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_transfer_intention'
      | 'other'
    >;
  }

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

export namespace Transactions {
  export import Transaction = TransactionsAPI.Transaction;
  export import TransactionsPage = TransactionsAPI.TransactionsPage;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}
