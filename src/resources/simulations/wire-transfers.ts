// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as API from './index';

export class WireTransfers extends APIResource {
  /**
   * Simulates an inbound Wire Transfer to your account.
   */
  createInbound(
    body: WireTransferCreateInboundParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<WireTransferSimulation>> {
    return this.post('/simulations/inbound_wire_transfers', { body, ...options });
  }
}

/**
 * The results of an inbound Wire Transfer simulation.
 */
export interface WireTransferSimulation {
  /**
   * If the Wire Transfer attempt succeeds, this will contain the resulting
   * [Transaction](#transactions) object. The Transaction's `source` will be of
   * `category: inbound_wire_transfer`.
   */
  transaction: WireTransferSimulation.Transaction;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_transfer_simulation_result`.
   */
  type: 'inbound_wire_transfer_simulation_result';
}

export namespace WireTransferSimulation {
  /**
   * If the Wire Transfer attempt succeeds, this will contain the resulting
   * [Transaction](#transactions) object. The Transaction's `source` will be of
   * `category: inbound_wire_transfer`.
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
     * Transaction occured.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
     * Transaction's currency. This will match the currency on the Transcation's
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
     */
    route_type: 'account_number' | 'card' | null;

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
       * A Account Transfer Intention object. This field will be present in the JSON
       * response if and only if `category` is equal to `account_transfer_intention`.
       */
      account_transfer_intention: Source.AccountTransferIntention | null;

      /**
       * A ACH Transfer Intention object. This field will be present in the JSON response
       * if and only if `category` is equal to `ach_transfer_intention`.
       */
      ach_transfer_intention: Source.ACHTransferIntention | null;

      /**
       * A ACH Transfer Rejection object. This field will be present in the JSON response
       * if and only if `category` is equal to `ach_transfer_rejection`.
       */
      ach_transfer_rejection: Source.ACHTransferRejection | null;

      /**
       * A ACH Transfer Return object. This field will be present in the JSON response if
       * and only if `category` is equal to `ach_transfer_return`.
       */
      ach_transfer_return: Source.ACHTransferReturn | null;

      /**
       * A Card Dispute Acceptance object. This field will be present in the JSON
       * response if and only if `category` is equal to `card_dispute_acceptance`.
       */
      card_dispute_acceptance: Source.CardDisputeAcceptance | null;

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
       * The type of transaction that took place. We may add additional possible values
       * for this enum over time; your application should be able to handle such
       * additions gracefully.
       *
       * - `account_transfer_intention` - The Transaction was created by a Account
       *   Transfer Intention object. Details will be under the
       *   `account_transfer_intention` object.
       * - `ach_transfer_intention` - The Transaction was created by a ACH Transfer
       *   Intention object. Details will be under the `ach_transfer_intention` object.
       * - `ach_transfer_rejection` - The Transaction was created by a ACH Transfer
       *   Rejection object. Details will be under the `ach_transfer_rejection` object.
       * - `ach_transfer_return` - The Transaction was created by a ACH Transfer Return
       *   object. Details will be under the `ach_transfer_return` object.
       * - `card_dispute_acceptance` - The Transaction was created by a Card Dispute
       *   Acceptance object. Details will be under the `card_dispute_acceptance` object.
       * - `card_refund` - The Transaction was created by a Card Refund object. Details
       *   will be under the `card_refund` object.
       * - `card_revenue_payment` - The Transaction was created by a Card Revenue Payment
       *   object. Details will be under the `card_revenue_payment` object.
       * - `card_settlement` - The Transaction was created by a Card Settlement object.
       *   Details will be under the `card_settlement` object.
       * - `check_deposit_acceptance` - The Transaction was created by a Check Deposit
       *   Acceptance object. Details will be under the `check_deposit_acceptance`
       *   object.
       * - `check_deposit_return` - The Transaction was created by a Check Deposit Return
       *   object. Details will be under the `check_deposit_return` object.
       * - `check_transfer_deposit` - The Transaction was created by a Check Transfer
       *   Deposit object. Details will be under the `check_transfer_deposit` object.
       * - `check_transfer_intention` - The Transaction was created by a Check Transfer
       *   Intention object. Details will be under the `check_transfer_intention` object.
       * - `check_transfer_stop_payment_request` - The Transaction was created by a Check
       *   Transfer Stop Payment Request object. Details will be under the
       *   `check_transfer_stop_payment_request` object.
       * - `fee_payment` - The Transaction was created by a Fee Payment object. Details
       *   will be under the `fee_payment` object.
       * - `inbound_ach_transfer` - The Transaction was created by a Inbound ACH Transfer
       *   object. Details will be under the `inbound_ach_transfer` object.
       * - `inbound_ach_transfer_return_intention` - The Transaction was created by a
       *   Inbound ACH Transfer Return Intention object. Details will be under the
       *   `inbound_ach_transfer_return_intention` object.
       * - `inbound_check` - The Transaction was created by a Inbound Check object.
       *   Details will be under the `inbound_check` object.
       * - `inbound_international_ach_transfer` - The Transaction was created by a
       *   Inbound International ACH Transfer object. Details will be under the
       *   `inbound_international_ach_transfer` object.
       * - `inbound_real_time_payments_transfer_confirmation` - The Transaction was
       *   created by a Inbound Real Time Payments Transfer Confirmation object. Details
       *   will be under the `inbound_real_time_payments_transfer_confirmation` object.
       * - `inbound_wire_drawdown_payment` - The Transaction was created by a Inbound
       *   Wire Drawdown Payment object. Details will be under the
       *   `inbound_wire_drawdown_payment` object.
       * - `inbound_wire_drawdown_payment_reversal` - The Transaction was created by a
       *   Inbound Wire Drawdown Payment Reversal object. Details will be under the
       *   `inbound_wire_drawdown_payment_reversal` object.
       * - `inbound_wire_reversal` - The Transaction was created by a Inbound Wire
       *   Reversal object. Details will be under the `inbound_wire_reversal` object.
       * - `inbound_wire_transfer` - The Transaction was created by a Inbound Wire
       *   Transfer object. Details will be under the `inbound_wire_transfer` object.
       * - `interest_payment` - The Transaction was created by a Interest Payment object.
       *   Details will be under the `interest_payment` object.
       * - `internal_source` - The Transaction was created by a Internal Source object.
       *   Details will be under the `internal_source` object.
       * - `real_time_payments_transfer_acknowledgement` - The Transaction was created by
       *   a Real Time Payments Transfer Acknowledgement object. Details will be under
       *   the `real_time_payments_transfer_acknowledgement` object.
       * - `sample_funds` - The Transaction was created by a Sample Funds object. Details
       *   will be under the `sample_funds` object.
       * - `wire_transfer_intention` - The Transaction was created by a Wire Transfer
       *   Intention object. Details will be under the `wire_transfer_intention` object.
       * - `wire_transfer_rejection` - The Transaction was created by a Wire Transfer
       *   Rejection object. Details will be under the `wire_transfer_rejection` object.
       * - `other` - The Transaction was made for an undocumented or deprecated reason.
       */
      category:
        | 'account_transfer_intention'
        | 'ach_transfer_intention'
        | 'ach_transfer_rejection'
        | 'ach_transfer_return'
        | 'card_dispute_acceptance'
        | 'card_refund'
        | 'card_revenue_payment'
        | 'card_settlement'
        | 'check_deposit_acceptance'
        | 'check_deposit_return'
        | 'check_transfer_deposit'
        | 'check_transfer_intention'
        | 'check_transfer_stop_payment_request'
        | 'fee_payment'
        | 'inbound_ach_transfer'
        | 'inbound_ach_transfer_return_intention'
        | 'inbound_check'
        | 'inbound_international_ach_transfer'
        | 'inbound_real_time_payments_transfer_confirmation'
        | 'inbound_wire_drawdown_payment'
        | 'inbound_wire_drawdown_payment_reversal'
        | 'inbound_wire_reversal'
        | 'inbound_wire_transfer'
        | 'interest_payment'
        | 'internal_source'
        | 'real_time_payments_transfer_acknowledgement'
        | 'sample_funds'
        | 'wire_transfer_intention'
        | 'wire_transfer_rejection'
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
       * A Check Transfer Intention object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_intention`.
       */
      check_transfer_intention: Source.CheckTransferIntention | null;

      /**
       * A Check Transfer Stop Payment Request object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `check_transfer_stop_payment_request`.
       */
      check_transfer_stop_payment_request: Source.CheckTransferStopPaymentRequest | null;

      /**
       * A Fee Payment object. This field will be present in the JSON response if and
       * only if `category` is equal to `fee_payment`.
       */
      fee_payment: Source.FeePayment | null;

      /**
       * A Inbound ACH Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_ach_transfer`.
       */
      inbound_ach_transfer: Source.InboundACHTransfer | null;

      /**
       * A Inbound Check object. This field will be present in the JSON response if and
       * only if `category` is equal to `inbound_check`.
       */
      inbound_check: Source.InboundCheck | null;

      /**
       * A Inbound International ACH Transfer object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `inbound_international_ach_transfer`.
       */
      inbound_international_ach_transfer: Source.InboundInternationalACHTransfer | null;

      /**
       * A Inbound Real Time Payments Transfer Confirmation object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `inbound_real_time_payments_transfer_confirmation`.
       */
      inbound_real_time_payments_transfer_confirmation: Source.InboundRealTimePaymentsTransferConfirmation | null;

      /**
       * A Inbound Wire Drawdown Payment object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
       */
      inbound_wire_drawdown_payment: Source.InboundWireDrawdownPayment | null;

      /**
       * A Inbound Wire Drawdown Payment Reversal object. This field will be present in
       * the JSON response if and only if `category` is equal to
       * `inbound_wire_drawdown_payment_reversal`.
       */
      inbound_wire_drawdown_payment_reversal: Source.InboundWireDrawdownPaymentReversal | null;

      /**
       * A Inbound Wire Reversal object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_reversal`.
       */
      inbound_wire_reversal: Source.InboundWireReversal | null;

      /**
       * A Inbound Wire Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_transfer`.
       */
      inbound_wire_transfer: Source.InboundWireTransfer | null;

      /**
       * A Interest Payment object. This field will be present in the JSON response if
       * and only if `category` is equal to `interest_payment`.
       */
      interest_payment: Source.InterestPayment | null;

      /**
       * A Internal Source object. This field will be present in the JSON response if and
       * only if `category` is equal to `internal_source`.
       */
      internal_source: Source.InternalSource | null;

      /**
       * A Real Time Payments Transfer Acknowledgement object. This field will be present
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

      /**
       * A Wire Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_rejection`.
       */
      wire_transfer_rejection: Source.WireTransferRejection | null;
    }

    export namespace Source {
      /**
       * A Account Transfer Intention object. This field will be present in the JSON
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
       * A ACH Transfer Intention object. This field will be present in the JSON response
       * if and only if `category` is equal to `ach_transfer_intention`.
       */
      export interface ACHTransferIntention {
        account_number: string;

        /**
         * The amount in the minor unit of the transaction's currency. For dollars, for
         * example, this is cents.
         */
        amount: number;

        routing_number: string;

        statement_descriptor: string;

        /**
         * The identifier of the ACH Transfer that led to this Transaction.
         */
        transfer_id: string;
      }

      /**
       * A ACH Transfer Rejection object. This field will be present in the JSON response
       * if and only if `category` is equal to `ach_transfer_rejection`.
       */
      export interface ACHTransferRejection {
        /**
         * The identifier of the ACH Transfer that led to this Transaction.
         */
        transfer_id: string;
      }

      /**
       * A ACH Transfer Return object. This field will be present in the JSON response if
       * and only if `category` is equal to `ach_transfer_return`.
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
       * A Card Refund object. This field will be present in the JSON response if and
       * only if `category` is equal to `card_refund`.
       */
      export interface CardRefund {
        /**
         * The Card Refund identifier.
         */
        id: string;

        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

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
             * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the foor and
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
         * The Card Authorization that was created prior to this Card Settlement, if on
         * exists.
         */
        card_authorization: string | null;

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
             * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the foor and
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
          | 'endorsement_irregular';

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
       * A Check Transfer Intention object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_intention`.
       */
      export interface CheckTransferIntention {
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
         * The name that will be printed on the check.
         */
        recipient_name: string | null;

        /**
         * The identifier of the Check Transfer with which this is associated.
         */
        transfer_id: string;
      }

      /**
       * A Check Transfer Stop Payment Request object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `check_transfer_stop_payment_request`.
       */
      export interface CheckTransferStopPaymentRequest {
        /**
         * The reason why this transfer was stopped.
         *
         * - `mail_delivery_failed` - The check could not be delivered.
         * - `rejected_by_increase` - The check was cancelled by an Increase operator who
         *   will provide details out-of-band.
         * - `unknown` - The check was stopped for another reason.
         */
        reason: 'mail_delivery_failed' | 'rejected_by_increase' | 'unknown';

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
       * A Inbound ACH Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_ach_transfer`.
       */
      export interface InboundACHTransfer {
        /**
         * The amount in the minor unit of the destination account currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        originator_company_descriptive_date: string | null;

        originator_company_discretionary_data: string | null;

        originator_company_entry_description: string;

        originator_company_id: string;

        originator_company_name: string;

        receiver_id_number: string | null;

        receiver_name: string | null;

        trace_number: string;
      }

      /**
       * A Inbound Check object. This field will be present in the JSON response if and
       * only if `category` is equal to `inbound_check`.
       */
      export interface InboundCheck {
        /**
         * The amount in the minor unit of the destination account currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        check_front_image_file_id: string | null;

        check_number: string | null;

        check_rear_image_file_id: string | null;

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
      }

      /**
       * A Inbound International ACH Transfer object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `inbound_international_ach_transfer`.
       */
      export interface InboundInternationalACHTransfer {
        /**
         * The amount in the minor unit of the destination account currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        destination_country_code: string;

        destination_currency_code: string;

        foreign_exchange_indicator: string;

        foreign_exchange_reference: string | null;

        foreign_exchange_reference_indicator: string;

        foreign_payment_amount: number;

        foreign_trace_number: string | null;

        international_transaction_type_code: string;

        originating_currency_code: string;

        originating_depository_financial_institution_branch_country: string;

        originating_depository_financial_institution_id: string;

        originating_depository_financial_institution_id_qualifier: string;

        originating_depository_financial_institution_name: string;

        originator_city: string;

        originator_company_entry_description: string;

        originator_country: string;

        originator_identification: string;

        originator_name: string;

        originator_postal_code: string | null;

        originator_state_or_province: string | null;

        originator_street_address: string;

        payment_related_information: string | null;

        payment_related_information2: string | null;

        receiver_city: string;

        receiver_country: string;

        receiver_identification_number: string | null;

        receiver_postal_code: string | null;

        receiver_state_or_province: string | null;

        receiver_street_address: string;

        receiving_company_or_individual_name: string;

        receiving_depository_financial_institution_country: string;

        receiving_depository_financial_institution_id: string;

        receiving_depository_financial_institution_id_qualifier: string;

        receiving_depository_financial_institution_name: string;

        trace_number: string;
      }

      /**
       * A Inbound Real Time Payments Transfer Confirmation object. This field will be
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
         * currency. This will always be "USD" for a Real Time Payments transfer.
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
         * The Real Time Payments network identification of the transfer
         */
        transaction_identification: string;
      }

      /**
       * A Inbound Wire Drawdown Payment object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
       */
      export interface InboundWireDrawdownPayment {
        /**
         * The amount in the minor unit of the transaction's currency. For dollars, for
         * example, this is cents.
         */
        amount: number;

        beneficiary_address_line1: string | null;

        beneficiary_address_line2: string | null;

        beneficiary_address_line3: string | null;

        beneficiary_name: string | null;

        beneficiary_reference: string | null;

        description: string;

        input_message_accountability_data: string | null;

        originator_address_line1: string | null;

        originator_address_line2: string | null;

        originator_address_line3: string | null;

        originator_name: string | null;

        originator_to_beneficiary_information: string | null;
      }

      /**
       * A Inbound Wire Drawdown Payment Reversal object. This field will be present in
       * the JSON response if and only if `category` is equal to
       * `inbound_wire_drawdown_payment_reversal`.
       */
      export interface InboundWireDrawdownPaymentReversal {
        /**
         * The amount that was reversed.
         */
        amount: number;

        /**
         * The description on the reversal message from Fedwire.
         */
        description: string;

        /**
         * The Fedwire cycle date for the wire reversal.
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
         * The Fedwire cycle date for the wire transfer that was reversed.
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
      }

      /**
       * A Inbound Wire Reversal object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_reversal`.
       */
      export interface InboundWireReversal {
        /**
         * The amount that was reversed.
         */
        amount: number;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
         * the reversal was created.
         */
        created_at: string;

        /**
         * The description on the reversal message from Fedwire.
         */
        description: string;

        /**
         * Additional financial institution information included in the wire reversal.
         */
        financial_institution_to_financial_institution_information: string | null;

        /**
         * The Fedwire cycle date for the wire reversal.
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
         * The Fedwire cycle date for the wire transfer that was reversed.
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
         * The ID for the Transaction associated with the transfer reversal.
         */
        transaction_id: string | null;

        /**
         * The ID for the Wire Transfer that is being reversed.
         */
        wire_transfer_id: string;
      }

      /**
       * A Inbound Wire Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_transfer`.
       */
      export interface InboundWireTransfer {
        /**
         * The amount in the minor unit of the transaction's currency. For dollars, for
         * example, this is cents.
         */
        amount: number;

        beneficiary_address_line1: string | null;

        beneficiary_address_line2: string | null;

        beneficiary_address_line3: string | null;

        beneficiary_name: string | null;

        beneficiary_reference: string | null;

        description: string;

        input_message_accountability_data: string | null;

        originator_address_line1: string | null;

        originator_address_line2: string | null;

        originator_address_line3: string | null;

        originator_name: string | null;

        originator_to_beneficiary_information: string | null;

        originator_to_beneficiary_information_line1: string | null;

        originator_to_beneficiary_information_line2: string | null;

        originator_to_beneficiary_information_line3: string | null;

        originator_to_beneficiary_information_line4: string | null;
      }

      /**
       * A Interest Payment object. This field will be present in the JSON response if
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
       * A Internal Source object. This field will be present in the JSON response if and
       * only if `category` is equal to `internal_source`.
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
         * - `account_closure` - Account closure
         * - `bank_migration` - Bank migration
         * - `cashback` - Cashback
         * - `check_adjustment` - Check adjustment
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
          | 'bank_migration'
          | 'cashback'
          | 'check_adjustment'
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
       * A Real Time Payments Transfer Acknowledgement object. This field will be present
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
         * The identifier of the Real Time Payments Transfer that led to this Transaction.
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

        transfer_id: string;
      }

      /**
       * A Wire Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_rejection`.
       */
      export interface WireTransferRejection {
        transfer_id: string;
      }
    }
  }
}

export interface WireTransferCreateInboundParams {
  /**
   * The identifier of the Account Number the inbound Wire Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The sending bank will set beneficiary_address_line1 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line1?: string;

  /**
   * The sending bank will set beneficiary_address_line2 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line2?: string;

  /**
   * The sending bank will set beneficiary_address_line3 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line3?: string;

  /**
   * The sending bank will set beneficiary_name in production. You can simulate any
   * value here.
   */
  beneficiary_name?: string;

  /**
   * The sending bank will set beneficiary_reference in production. You can simulate
   * any value here.
   */
  beneficiary_reference?: string;

  /**
   * The sending bank will set originator_address_line1 in production. You can
   * simulate any value here.
   */
  originator_address_line1?: string;

  /**
   * The sending bank will set originator_address_line2 in production. You can
   * simulate any value here.
   */
  originator_address_line2?: string;

  /**
   * The sending bank will set originator_address_line3 in production. You can
   * simulate any value here.
   */
  originator_address_line3?: string;

  /**
   * The sending bank will set originator_name in production. You can simulate any
   * value here.
   */
  originator_name?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line1 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line1?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line2 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line2?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line3 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line3?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line4 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line4?: string;
}

export namespace WireTransfers {
  export import WireTransferSimulation = API.WireTransferSimulation;
  export import WireTransferCreateInboundParams = API.WireTransferCreateInboundParams;
}
