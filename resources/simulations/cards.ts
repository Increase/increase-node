// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class Cards extends APIResource {
  /**
   * Simulates activity on a Card.
   */
  authorize(
    body: CardAuthorizeParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardAuthorizationSimulation>> {
    return this.post('/simulations/card_authorizations', { body, ...options });
  }

  /**
   * Simulates the settlement of an authorization by a card acquirer.
   */
  settlement(
    body: CardSettlementParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Transaction>> {
    return this.post('/simulations/card_settlements', { body, ...options });
  }
}

/**
 * The results of a Card Authorization simulation.
 */
export interface CardAuthorizationSimulation {
  /**
   * If the authorization attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: card_decline`.
   */
  declined_transaction: CardAuthorizationSimulation.DeclinedTransaction | null;

  /**
   * If the authorization attempt succeeds, this will contain the resulting Pending
   * Transaction object. The Pending Transaction's `source` will be of
   * `category: card_authorization`.
   */
  pending_transaction: CardAuthorizationSimulation.PendingTransaction | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_card_authorization_simulation_result`.
   */
  type: 'inbound_card_authorization_simulation_result';
}

export namespace CardAuthorizationSimulation {
  export interface PendingTransaction {
    /**
     * The identifier for the account this Pending Transaction belongs to.
     */
    account_id: string;

    /**
     * The Pending Transaction amount in the minor unit of its currency. For dollars,
     * for example, this is cents.
     */
    amount: number;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
     * Transaction occured.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
     * Transaction's currency. This will match the currency on the Pending
     * Transcation's Account.
     */
    currency: string;

    /**
     * For a Pending Transaction related to a transfer, this is the description you
     * provide. For a Pending Transaction related to a payment, this is the description
     * the vendor provides.
     */
    description: string;

    /**
     * The Pending Transaction identifier.
     */
    id: string;

    /**
     * The identifier for the route this Pending Transaction came through. Routes are
     * things like cards and ACH details.
     */
    route_id: string;

    /**
     * The type of the route this Pending Transaction came through.
     */
    route_type: string | null;

    /**
     * This is an object giving more details on the network-level event that caused the
     * Pending Transaction. For example, for a card transaction this lists the
     * merchant's industry and location.
     */
    source: PendingTransaction.Source;

    /**
     * Whether the Pending Transaction has been confirmed and has an associated
     * Transaction.
     */
    status: 'pending' | 'complete';

    /**
     * A constant representing the object's type. For this resource it will always be
     * `pending_transaction`.
     */
    type: 'pending_transaction';
  }

  export namespace PendingTransaction {
    export interface Source {
      /**
       * A Account Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `account_transfer_instruction`.
       */
      account_transfer_instruction: Source.AccountTransferInstruction | null;

      /**
       * A ACH Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `ach_transfer_instruction`.
       */
      ach_transfer_instruction: Source.ACHTransferInstruction | null;

      /**
       * A Card Authorization object. This field will be present in the JSON response if
       * and only if `category` is equal to `card_authorization`.
       */
      card_authorization: Source.CardAuthorization | null;

      /**
       * A Deprecated Card Authorization object. This field will be present in the JSON
       * response if and only if `category` is equal to `card_route_authorization`.
       */
      card_route_authorization: Source.CardRouteAuthorization | null;

      /**
       * The type of transaction that took place. We may add additional possible values
       * for this enum over time; your application should be able to handle such
       * additions gracefully.
       */
      category:
        | 'account_transfer_instruction'
        | 'ach_transfer_instruction'
        | 'card_authorization'
        | 'check_deposit_instruction'
        | 'check_transfer_instruction'
        | 'card_route_authorization'
        | 'real_time_payments_transfer_instruction'
        | 'wire_drawdown_payment_instruction'
        | 'wire_transfer_instruction'
        | 'other';

      /**
       * A Check Deposit Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_deposit_instruction`.
       */
      check_deposit_instruction: Source.CheckDepositInstruction | null;

      /**
       * A Check Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_instruction`.
       */
      check_transfer_instruction: Source.CheckTransferInstruction | null;

      /**
       * A Wire Drawdown Payment Instruction object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `wire_drawdown_payment_instruction`.
       */
      wire_drawdown_payment_instruction: Source.WireDrawdownPaymentInstruction | null;

      /**
       * A Wire Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_instruction`.
       */
      wire_transfer_instruction: Source.WireTransferInstruction | null;
    }

    export namespace Source {
      export interface AccountTransferInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
         * account currency.
         */
        currency: string;

        /**
         * The identifier of the Account Transfer that led to this Pending Transaction.
         */
        transfer_id: string;
      }

      export interface ACHTransferInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The identifier of the ACH Transfer that led to this Pending Transaction.
         */
        transfer_id: string;
      }

      export interface CardAuthorization {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
         * transaction's currency.
         */
        currency: string;

        merchant_acceptor_id: string;

        merchant_category_code: string;

        merchant_city: string | null;

        merchant_country: string;

        merchant_descriptor: string;
      }

      export interface CheckDepositInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The identifier of the File containing the image of the back of the check that
         * was deposited.
         */
        back_image_file_id: string | null;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
         * transaction's currency.
         */
        currency: string;

        /**
         * The identifier of the File containing the image of the front of the check that
         * was deposited.
         */
        front_image_file_id: string;
      }

      export interface CheckTransferInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
         * currency.
         */
        currency: string;

        /**
         * The identifier of the Check Transfer that led to this Pending Transaction.
         */
        transfer_id: string;
      }

      export interface CardRouteAuthorization {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
         * transaction's currency.
         */
        currency: string;

        merchant_acceptor_id: string;

        merchant_category_code: string;

        merchant_city: string | null;

        merchant_country: string;

        merchant_descriptor: string;

        merchant_state: string | null;
      }

      export interface WireDrawdownPaymentInstruction {
        account_number: string;

        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        message_to_recipient: string;

        routing_number: string;
      }

      export interface WireTransferInstruction {
        account_number: string;

        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        message_to_recipient: string;

        routing_number: string;

        transfer_id: string;
      }
    }
  }

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
    currency: string;

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
    route_id: string;

    /**
     * The type of the route this Declined Transaction came through.
     */
    route_type: string | null;

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
       * A Deprecated Card Decline object. This field will be present in the JSON
       * response if and only if `category` is equal to `card_route_decline`.
       */
      card_route_decline: Source.CardRouteDecline | null;

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
        | 'card_route_decline'
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
    }

    export namespace Source {
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
          | 'no_ach_route'
          | 'breaches_limit'
          | 'credit_entry_refused_by_receiver'
          | 'group_locked'
          | 'entity_not_active'
          | 'insufficient_funds'
          | 'originator_request';

        receiver_id_number: string | null;

        receiver_name: string | null;

        trace_number: string;
      }

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
        currency: string;

        merchant_acceptor_id: string;

        merchant_category_code: string | null;

        merchant_city: string | null;

        merchant_country: string | null;

        merchant_descriptor: string;

        merchant_state: string | null;

        /**
         * Why the transaction was declined.
         */
        reason:
          | 'card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out';
      }

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
          | 'unable_to_process'
          | 'refer_to_image'
          | 'stop_payment_requested';
      }

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
        currency: string;

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

      export interface CardRouteDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
         * account currency.
         */
        currency: string;

        merchant_acceptor_id: string;

        merchant_category_code: string | null;

        merchant_city: string | null;

        merchant_country: string;

        merchant_descriptor: string;

        merchant_state: string | null;
      }
    }
  }
}

/**
 * Transactions are the immutable additions and removals of money from your bank
 * account. They're the equivalent of line items on your bank statement.
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
  currency: string;

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
  route_id: string;

  /**
   * The type of the route this Transaction came through.
   */
  route_type: string | null;

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
  export interface Source {
    /**
     * A Account Transfer Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_intention`.
     */
    account_transfer_intention: Source.AccountTransferIntention | null;

    /**
     * A ACH Check Conversion object. This field will be present in the JSON response
     * if and only if `category` is equal to `ach_check_conversion`.
     */
    ach_check_conversion: Source.ACHCheckConversion | null;

    /**
     * A ACH Check Conversion Return object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_check_conversion_return`.
     */
    ach_check_conversion_return: Source.ACHCheckConversionReturn | null;

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
     * A Deprecated Card Refund object. This field will be present in the JSON response
     * if and only if `category` is equal to `card_route_refund`.
     */
    card_route_refund: Source.CardRouteRefund | null;

    /**
     * A Deprecated Card Settlement object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_route_settlement`.
     */
    card_route_settlement: Source.CardRouteSettlement | null;

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
      | 'ach_check_conversion_return'
      | 'ach_check_conversion'
      | 'ach_transfer_intention'
      | 'ach_transfer_rejection'
      | 'ach_transfer_return'
      | 'card_dispute_acceptance'
      | 'card_refund'
      | 'card_settlement'
      | 'check_deposit_acceptance'
      | 'check_deposit_return'
      | 'check_transfer_intention'
      | 'check_transfer_rejection'
      | 'check_transfer_stop_payment_request'
      | 'dispute_resolution'
      | 'empyreal_cash_deposit'
      | 'inbound_ach_transfer'
      | 'inbound_check'
      | 'inbound_international_ach_transfer'
      | 'inbound_real_time_payments_transfer_confirmation'
      | 'inbound_wire_drawdown_payment_reversal'
      | 'inbound_wire_drawdown_payment'
      | 'inbound_wire_reversal'
      | 'inbound_wire_transfer'
      | 'internal_source'
      | 'card_route_refund'
      | 'card_route_settlement'
      | 'real_time_payments_transfer_acknowledgement'
      | 'sample_funds'
      | 'wire_drawdown_payment_intention'
      | 'wire_drawdown_payment_rejection'
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
     * A Check Transfer Stop Payment Request object. This field will be present in the
     * JSON response if and only if `category` is equal to
     * `check_transfer_stop_payment_request`.
     */
    check_transfer_stop_payment_request: Source.CheckTransferStopPaymentRequest | null;

    /**
     * A Dispute Resolution object. This field will be present in the JSON response if
     * and only if `category` is equal to `dispute_resolution`.
     */
    dispute_resolution: Source.DisputeResolution | null;

    /**
     * A Empyreal Cash Deposit object. This field will be present in the JSON response
     * if and only if `category` is equal to `empyreal_cash_deposit`.
     */
    empyreal_cash_deposit: Source.EmpyrealCashDeposit | null;

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
     * A Internal Source object. This field will be present in the JSON response if and
     * only if `category` is equal to `internal_source`.
     */
    internal_source: Source.InternalSource | null;

    /**
     * A Sample Funds object. This field will be present in the JSON response if and
     * only if `category` is equal to `sample_funds`.
     */
    sample_funds: unknown | null;

    /**
     * A Wire Drawdown Payment Intention object. This field will be present in the JSON
     * response if and only if `category` is equal to
     * `wire_drawdown_payment_intention`.
     */
    wire_drawdown_payment_intention: Source.WireDrawdownPaymentIntention | null;

    /**
     * A Wire Drawdown Payment Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to
     * `wire_drawdown_payment_rejection`.
     */
    wire_drawdown_payment_rejection: Source.WireDrawdownPaymentRejection | null;

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
      currency: string;

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

    export interface ACHCheckConversionReturn {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * Why the transfer was returned.
       */
      return_reason_code: string;
    }

    export interface ACHCheckConversion {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the File containing an image of the returned check.
       */
      file_id: string;
    }

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

    export interface ACHTransferRejection {
      /**
       * The identifier of the ACH Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

    export interface ACHTransferReturn {
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

    export interface CardRefund {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The identifier for the Transaction this refunds, if any.
       */
      card_settlement_transaction_id: string | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_refund`.
       */
      type: 'card_refund';
    }

    export interface CardSettlement {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      merchant_category_code: string;

      merchant_city: string | null;

      merchant_country: string;

      merchant_name: string | null;

      merchant_state: string | null;

      /**
       * The identifier of the Pending Transaction associated with this Transaction.
       */
      pending_transaction_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_settlement`.
       */
      type: 'card_settlement';
    }

    export interface CheckDepositAcceptance {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Check Deposit that led to the Transaction.
       */
      check_deposit_id: string;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;
    }

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
      currency: string;

      return_reason:
        | 'ach_conversion_not_supported'
        | 'duplicate_submission'
        | 'insufficient_funds'
        | 'no_account'
        | 'not_authorized'
        | 'stale_dated'
        | 'unknown_reason'
        | 'unmatched_details'
        | 'unreadable_image';

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

    export interface CheckTransferIntention {
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
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
       * currency.
       */
      currency: string;

      /**
       * The name that will be printed on the check.
       */
      recipient_name: string;

      /**
       * The identifier of the Check Transfer with which this is associated.
       */
      transfer_id: string;
    }

    export interface CheckTransferRejection {
      /**
       * The identifier of the Check Transfer that led to this Transaction.
       */
      transfer_id: string;
    }

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

    export interface DisputeResolution {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      /**
       * The identifier of the Transaction that was disputed.
       */
      disputed_transaction_id: string;
    }

    export interface EmpyrealCashDeposit {
      /**
       * The amount in the minor unit of the transaction's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      bag_id: string;

      deposit_date: string;
    }

    export interface InboundACHTransfer {
      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
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

    export interface InboundCheck {
      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      check_front_image_file_id: string | null;

      check_number: string | null;

      check_rear_image_file_id: string | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;
    }

    export interface InboundInternationalACHTransfer {
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
      currency: string;

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

    export interface InboundWireReversal {
      /**
       * The amount that was reversed.
       */
      amount: number;

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
    }

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
    }

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
      currency: string;

      reason: 'cashback' | 'error' | 'error_correction' | 'fees' | 'interest' | 'sample_funds';
    }

    export interface CardRouteRefund {
      /**
       * The refunded amount in the minor unit of the refunded currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the refund
       * currency.
       */
      currency: string;

      merchant_acceptor_id: string;

      merchant_category_code: string | null;

      merchant_city: string | null;

      merchant_country: string;

      merchant_descriptor: string;

      merchant_state: string | null;
    }

    export interface CardRouteSettlement {
      /**
       * The settled amount in the minor unit of the settlement currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the settlement
       * currency.
       */
      currency: string;

      merchant_acceptor_id: string;

      merchant_category_code: string | null;

      merchant_city: string | null;

      merchant_country: string | null;

      merchant_descriptor: string;

      merchant_state: string | null;
    }

    export interface WireDrawdownPaymentIntention {
      account_number: string;

      /**
       * The transfer amount in USD cents.
       */
      amount: number;

      message_to_recipient: string;

      routing_number: string;

      transfer_id: string;
    }

    export interface WireDrawdownPaymentRejection {
      transfer_id: string;
    }

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

    export interface WireTransferRejection {
      transfer_id: string;
    }
  }
}

export interface CardAuthorizeParams {
  /**
   * The authorization amount in cents.
   */
  amount: number;

  /**
   * The identifier of the Card to be authorized.
   */
  card_id: string;
}

export interface CardSettlementParams {
  /**
   * The identifier of the Card to create a settlement on.
   */
  card_id: string;

  /**
   * The identifier of the Pending Transaction for the Card Authorization you wish to
   * settle.
   */
  pending_transaction_id: string;

  /**
   * The amount to be settled. This defaults to the amount of the Pending Transaction
   * being settled.
   */
  amount?: number;
}
