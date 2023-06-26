// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as ACHTransfers_ from '~/resources/ach-transfers';
import * as Shared from '~/resources/shared';
import * as API from './';

export class ACHTransfers extends APIResource {
  /**
   * Simulates an inbound ACH transfer to your account. This imitates initiating a
   * transaction to an Increase account from a different financial institution. The
   * transfer may be either a credit or a debit depending on if the `amount` is
   * positive or negative. The result of calling this API will be either a
   * [Transaction](#transactions) or a [Declined Transaction](#declined-transactions)
   * depending on whether or not the transfer is allowed.
   */
  createInbound(
    body: ACHTransferCreateInboundParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHTransferSimulation>> {
    return this.post('/simulations/inbound_ach_transfers', { body, ...options });
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
  ): Promise<Core.APIResponse<ACHTransfers_.ACHTransfer>> {
    return this.post(`/simulations/ach_transfers/${achTransferId}/return`, { body, ...options });
  }

  /**
   * Simulates the submission of an [ACH Transfer](#ach-transfers) to the Federal
   * Reserve. This transfer must first have a `status` of `pending_approval` or
   * `pending_submission`. In production, Increase submits ACH Transfers to the
   * Federal Reserve three times per day on weekdays. Since sandbox ACH Transfers are
   * not submitted to the Federal Reserve, this endpoint allows you to skip that
   * delay and transition the ACH Transfer to a status of `submitted`.
   */
  submit(
    achTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHTransfers_.ACHTransfer>> {
    return this.post(`/simulations/ach_transfers/${achTransferId}/submit`, options);
  }
}

/**
 * The results of an inbound ACH Transfer simulation.
 */
export interface ACHTransferSimulation {
  /**
   * If the ACH Transfer attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: inbound_ach_transfer`.
   */
  declined_transaction: ACHTransferSimulation.DeclinedTransaction | null;

  /**
   * If the ACH Transfer attempt succeeds, this will contain the resulting
   * [Transaction](#transactions) object. The Transaction's `source` will be of
   * `category: inbound_ach_transfer`.
   */
  transaction: ACHTransferSimulation.Transaction | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_ach_transfer_simulation_result`.
   */
  type: 'inbound_ach_transfer_simulation_result';
}

export namespace ACHTransferSimulation {
  /**
   * If the ACH Transfer attempt succeeds, this will contain the resulting
   * [Transaction](#transactions) object. The Transaction's `source` will be of
   * `category: inbound_ach_transfer`.
   */
  export interface Transaction {
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
     */
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

    /**
     * For a Transaction related to a transfer, this is the description you provide.
     * For a Transaction related to a payment, this is the description the vendor
     * provides.
     */
    description: string;

    /**
     * The Transaction identifier.
     */
    id: string;

    /**
     * The identifier for the route this Transaction came through. Routes are things
     * like cards and ACH details.
     */
    route_id: string | null;

    /**
     * The type of the route this Transaction came through.
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
        | 'check_transfer_rejection'
        | 'check_transfer_return'
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
       * A Check Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_rejection`.
       */
      check_transfer_rejection: Source.CheckTransferRejection | null;

      /**
       * A Check Transfer Return object. This field will be present in the JSON response
       * if and only if `category` is equal to `check_transfer_return`.
       */
      check_transfer_return: Source.CheckTransferReturn | null;

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
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
         * transaction's currency.
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

        /**
         * The Card Refund identifier.
         */
        id: string;

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
         * A constant representing the object's type. For this resource it will always be
         * `card_refund`.
         */
        type: 'card_refund';
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
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

        /**
         * The Card Settlement identifier.
         */
        id: string;

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
         * A constant representing the object's type. For this resource it will always be
         * `card_settlement`.
         */
        type: 'card_settlement';
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
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

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
       * A Check Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_rejection`.
       */
      export interface CheckTransferRejection {
        /**
         * The identifier of the Check Transfer that led to this Transaction.
         */
        transfer_id: string;
      }

      /**
       * A Check Transfer Return object. This field will be present in the JSON response
       * if and only if `category` is equal to `check_transfer_return`.
       */
      export interface CheckTransferReturn {
        /**
         * If available, a document with additional information about the return.
         */
        file_id: string | null;

        /**
         * The reason why the check was returned.
         */
        reason: 'mail_delivery_failure' | 'refused_by_recipient' | 'returned_not_authorized';

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

      /**
       * A Check Transfer Stop Payment Request object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `check_transfer_stop_payment_request`.
       */
      export interface CheckTransferStopPaymentRequest {
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
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';
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
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

        reason:
          | 'account_closure'
          | 'bank_migration'
          | 'cashback'
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

  /**
   * If the ACH Transfer attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: inbound_ach_transfer`.
   */
  export interface DeclinedTransaction {
    /**
     * The identifier for the Account the Declined Transaction belongs to.
     */
    account_id: string;

    /**
     * The Declined Transaction amount in the minor unit of its currency. For dollars,
     * for example, this is cents.
     */
    amount: number;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the
     * Transaction occured.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined
     * Transaction's currency. This will match the currency on the Declined
     * Transcation's Account.
     */
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

    /**
     * This is the description the vendor provides.
     */
    description: string;

    /**
     * The Declined Transaction identifier.
     */
    id: string;

    /**
     * The identifier for the route this Declined Transaction came through. Routes are
     * things like cards and ACH details.
     */
    route_id: string | null;

    /**
     * The type of the route this Declined Transaction came through.
     */
    route_type: 'account_number' | 'card' | null;

    /**
     * This is an object giving more details on the network-level event that caused the
     * Declined Transaction. For example, for a card transaction this lists the
     * merchant's industry and location. Note that for backwards compatibility reasons,
     * additional undocumented keys may appear in this object. These should be treated
     * as deprecated and will be removed in the future.
     */
    source: DeclinedTransaction.Source;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `declined_transaction`.
     */
    type: 'declined_transaction';
  }

  export namespace DeclinedTransaction {
    /**
     * This is an object giving more details on the network-level event that caused the
     * Declined Transaction. For example, for a card transaction this lists the
     * merchant's industry and location. Note that for backwards compatibility reasons,
     * additional undocumented keys may appear in this object. These should be treated
     * as deprecated and will be removed in the future.
     */
    export interface Source {
      /**
       * A ACH Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `ach_decline`.
       */
      ach_decline: Source.ACHDecline | null;

      /**
       * A Card Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `card_decline`.
       */
      card_decline: Source.CardDecline | null;

      /**
       * The type of decline that took place. We may add additional possible values for
       * this enum over time; your application should be able to handle such additions
       * gracefully.
       */
      category:
        | 'ach_decline'
        | 'card_decline'
        | 'check_decline'
        | 'inbound_real_time_payments_transfer_decline'
        | 'international_ach_decline'
        | 'wire_decline'
        | 'other';

      /**
       * A Check Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `check_decline`.
       */
      check_decline: Source.CheckDecline | null;

      /**
       * A Inbound Real Time Payments Transfer Decline object. This field will be present
       * in the JSON response if and only if `category` is equal to
       * `inbound_real_time_payments_transfer_decline`.
       */
      inbound_real_time_payments_transfer_decline: Source.InboundRealTimePaymentsTransferDecline | null;

      /**
       * A International ACH Decline object. This field will be present in the JSON
       * response if and only if `category` is equal to `international_ach_decline`.
       */
      international_ach_decline: Source.InternationalACHDecline | null;

      /**
       * A Wire Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `wire_decline`.
       */
      wire_decline: Source.WireDecline | null;
    }

    export namespace Source {
      /**
       * A ACH Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `ach_decline`.
       */
      export interface ACHDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        originator_company_descriptive_date: string | null;

        originator_company_discretionary_data: string | null;

        originator_company_id: string;

        originator_company_name: string;

        /**
         * Why the ACH transfer was declined.
         */
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'credit_entry_refused_by_receiver'
          | 'duplicate_return'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'misrouted_return'
          | 'no_ach_route'
          | 'originator_request'
          | 'transaction_not_allowed';

        receiver_id_number: string | null;

        receiver_name: string | null;

        trace_number: string;
      }

      /**
       * A Card Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `card_decline`.
       */
      export interface CardDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
         * account currency.
         */
        currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

        /**
         * If the authorization was attempted using a Digital Wallet Token (such as an
         * Apple Pay purchase), the identifier of the token that was used.
         */
        digital_wallet_token_id: string | null;

        /**
         * The merchant identifier (commonly abbreviated as MID) of the merchant the card
         * is transacting with.
         */
        merchant_acceptor_id: string;

        /**
         * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
         * card is transacting with.
         */
        merchant_category_code: string | null;

        /**
         * The city the merchant resides in.
         */
        merchant_city: string | null;

        /**
         * The country the merchant resides in.
         */
        merchant_country: string | null;

        /**
         * The merchant descriptor of the merchant the card is transacting with.
         */
        merchant_descriptor: string;

        /**
         * The state the merchant resides in.
         */
        merchant_state: string | null;

        /**
         * The payment network used to process this card authorization
         */
        network: 'visa';

        /**
         * Fields specific to the `network`
         */
        network_details: CardDecline.NetworkDetails;

        /**
         * The identifier of the Real-Time Decision sent to approve or decline this
         * transaction.
         */
        real_time_decision_id: string | null;

        /**
         * Why the transaction was declined.
         */
        reason:
          | 'card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'cvv2_mismatch'
          | 'transaction_not_allowed'
          | 'breaches_internal_limit'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out'
          | 'declined_by_stand_in_processing'
          | 'invalid_physical_card'
          | 'missing_original_authorization';
      }

      export namespace CardDecline {
        /**
         * Fields specific to the `network`
         */
        export interface NetworkDetails {
          /**
           * Fields specific to the `visa` network
           */
          visa: NetworkDetails.Visa;
        }

        export namespace NetworkDetails {
          /**
           * Fields specific to the `visa` network
           */
          export interface Visa {
            /**
             * For electronic commerce transactions, this identifies the level of security used
             * in obtaining the customer's payment credential. For mail or telephone order
             * transactions, identifies the type of mail or telephone order.
             */
            electronic_commerce_indicator:
              | 'mail_phone_order'
              | 'recurring'
              | 'installment'
              | 'unknown_mail_phone_order'
              | 'secure_electronic_commerce'
              | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
              | 'non_authenticated_security_transaction'
              | 'non_secure_transaction'
              | null;

            /**
             * The method used to enter the cardholder's primary account number and card
             * expiration date
             */
            point_of_service_entry_mode: Shared.PointOfServiceEntryMode | null;
          }
        }
      }

      /**
       * A Check Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `check_decline`.
       */
      export interface CheckDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        auxiliary_on_us: string | null;

        /**
         * Why the check was declined.
         */
        reason:
          | 'ach_route_canceled'
          | 'ach_route_disabled'
          | 'breaches_limit'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'unable_to_locate_account'
          | 'not_our_item'
          | 'unable_to_process'
          | 'refer_to_image'
          | 'stop_payment_requested'
          | 'returned'
          | 'duplicate_presentment'
          | 'not_authorized'
          | 'altered_or_fictitious';
      }

      /**
       * A Inbound Real Time Payments Transfer Decline object. This field will be present
       * in the JSON response if and only if `category` is equal to
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
         * transfer's currency. This will always be "USD" for a Real Time Payments
         * transfer.
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
         * The Real Time Payments network identification of the declined transfer.
         */
        transaction_identification: string;
      }

      /**
       * A International ACH Decline object. This field will be present in the JSON
       * response if and only if `category` is equal to `international_ach_decline`.
       */
      export interface InternationalACHDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
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
       * A Wire Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `wire_decline`.
       */
      export interface WireDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
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

        originator_to_beneficiary_information_line1: string | null;

        originator_to_beneficiary_information_line2: string | null;

        originator_to_beneficiary_information_line3: string | null;

        originator_to_beneficiary_information_line4: string | null;

        /**
         * Why the wire transfer was declined.
         */
        reason:
          | 'account_number_canceled'
          | 'account_number_disabled'
          | 'entity_not_active'
          | 'group_locked'
          | 'no_account_number'
          | 'transaction_not_allowed';
      }
    }
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
   * The sender's company id.
   */
  company_id?: string;

  /**
   * The name of the sender.
   */
  company_name?: string;
}

export interface ACHTransferReturnParams {
  /**
   * The reason why the Federal Reserve or destination bank returned this transfer.
   * Defaults to `no_account`.
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
  export import ACHTransferSimulation = API.ACHTransferSimulation;
  export import ACHTransferCreateInboundParams = API.ACHTransferCreateInboundParams;
  export import ACHTransferReturnParams = API.ACHTransferReturnParams;
}
