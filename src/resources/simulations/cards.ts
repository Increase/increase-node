// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as Transactions from 'increase/resources/transactions';
import * as Shared from 'increase/resources/shared';
import * as API from './index';

export class Cards extends APIResource {
  /**
   * Simulates a purchase authorization on a [Card](#cards). Depending on the balance
   * available to the card and the `amount` submitted, the authorization activity
   * will result in a [Pending Transaction](#pending-transactions) of type
   * `card_authorization` or a [Declined Transaction](#declined-transactions) of type
   * `card_decline`. You can pass either a Card id or a
   * [Digital Wallet Token](#digital-wallet-tokens) id to simulate the two different
   * ways purchases can be made.
   */
  authorize(
    body: CardAuthorizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardAuthorizationSimulation> {
    return this.post('/simulations/card_authorizations', { body, ...options });
  }

  /**
   * Simulates the settlement of an authorization by a card acquirer. After a card
   * authorization is created, the merchant will eventually send a settlement. This
   * simulates that event, which may occur many days after the purchase in
   * production. The amount settled can be different from the amount originally
   * authorized, for example, when adding a tip to a restaurant bill.
   */
  settlement(
    body: CardSettlementParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Transactions.Transaction> {
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
  /**
   * If the authorization attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: card_decline`.
   */
  export interface DeclinedTransaction {
    /**
     * The Declined Transaction identifier.
     */
    id: string;

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
     * This is the description the vendor provides.
     */
    description: string;

    /**
     * The identifier for the route this Declined Transaction came through. Routes are
     * things like cards and ACH details.
     */
    route_id: string | null;

    /**
     * The type of the route this Declined Transaction came through.
     *
     * - `account_number` - An Account Number.
     * - `card` - A Card.
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
       *
       * - `ach_decline` - The Declined Transaction was created by a ACH Decline object.
       *   Details will be under the `ach_decline` object.
       * - `card_decline` - The Declined Transaction was created by a Card Decline
       *   object. Details will be under the `card_decline` object.
       * - `check_decline` - The Declined Transaction was created by a Check Decline
       *   object. Details will be under the `check_decline` object.
       * - `inbound_real_time_payments_transfer_decline` - The Declined Transaction was
       *   created by a Inbound Real Time Payments Transfer Decline object. Details will
       *   be under the `inbound_real_time_payments_transfer_decline` object.
       * - `international_ach_decline` - The Declined Transaction was created by a
       *   International ACH Decline object. Details will be under the
       *   `international_ach_decline` object.
       * - `wire_decline` - The Declined Transaction was created by a Wire Decline
       *   object. Details will be under the `wire_decline` object.
       * - `other` - The Declined Transaction was made for an undocumented or deprecated
       *   reason.
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
         *
         * - `ach_route_canceled` - The account number is canceled.
         * - `ach_route_disabled` - The account number is disabled.
         * - `breaches_limit` - The transaction would cause a limit to be exceeded.
         * - `credit_entry_refused_by_receiver` - A credit was refused.
         * - `duplicate_return` - Other.
         * - `entity_not_active` - The account's entity is not active.
         * - `group_locked` - Your account is inactive.
         * - `insufficient_funds` - Your account contains insufficient funds.
         * - `misrouted_return` - Other.
         * - `return_of_erroneous_or_reversing_debit` - Other.
         * - `no_ach_route` - The account number that was debited does not exist.
         * - `originator_request` - Other.
         * - `transaction_not_allowed` - The transaction is not allowed per Increase's
         *   terms.
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
          | 'return_of_erroneous_or_reversing_debit'
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
         * Fields specific to the `network`
         */
        network_details: CardDecline.NetworkDetails;

        /**
         * If the authorization was made in-person with a physical card, the Physical Card
         * that was used.
         */
        physical_card_id: string | null;

        /**
         * The identifier of the Real-Time Decision sent to approve or decline this
         * transaction.
         */
        real_time_decision_id: string | null;

        /**
         * Why the transaction was declined.
         *
         * - `card_not_active` - The Card was not active.
         * - `entity_not_active` - The account's entity was not active.
         * - `group_locked` - The account was inactive.
         * - `insufficient_funds` - The Card's Account did not have a sufficient available
         *   balance.
         * - `cvv2_mismatch` - The given CVV2 did not match the card's value.
         * - `transaction_not_allowed` - The attempted card transaction is not allowed per
         *   Increase's terms.
         * - `breaches_internal_limit` - The transaction was blocked by an internal limit
         *   for new Increase accounts.
         * - `breaches_limit` - The transaction was blocked by a Limit.
         * - `webhook_declined` - Your application declined the transaction via webhook.
         * - `webhook_timed_out` - Your application webhook did not respond without the
         *   required timeout.
         * - `declined_by_stand_in_processing` - Declined by stand-in processing.
         * - `invalid_physical_card` - The card read had an invalid CVV, dCVV, or
         *   authorization request cryptogram.
         * - `missing_original_authorization` - The original card authorization for this
         *   incremental authorization does not exist.
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
           * The payment network used to process this card authorization
           *
           * - `visa` - Visa
           */
          category: 'visa';

          /**
           * Fields specific to the `visa` network
           */
          visa: NetworkDetails.Visa | null;
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
             *
             * - `mail_phone_order` - Single transaction of a mail/phone order: Use to indicate
             *   that the transaction is a mail/phone order purchase, not a recurring
             *   transaction or installment payment. For domestic transactions in the US
             *   region, this value may also indicate one bill payment transaction in the
             *   card-present or card-absent environments.
             * - `recurring` - Recurring transaction: Payment indicator used to indicate a
             *   recurring transaction that originates from an acquirer in the US region.
             * - `installment` - Installment payment: Payment indicator used to indicate one
             *   purchase of goods or services that is billed to the account in multiple
             *   charges over a period of time agreed upon by the cardholder and merchant from
             *   transactions that originate from an acquirer in the US region.
             * - `unknown_mail_phone_order` - Unknown classification: other mail order: Use to
             *   indicate that the type of mail/telephone order is unknown.
             * - `secure_electronic_commerce` - Secure electronic commerce transaction: Use to
             *   indicate that the electronic commerce transaction has been authenticated using
             *   e.g., 3-D Secure
             * - `non_authenticated_security_transaction_at_3ds_capable_merchant` -
             *   Non-authenticated security transaction at a 3-D Secure-capable merchant, and
             *   merchant attempted to authenticate the cardholder using 3-D Secure: Use to
             *   identify an electronic commerce transaction where the merchant attempted to
             *   authenticate the cardholder using 3-D Secure, but was unable to complete the
             *   authentication because the issuer or cardholder does not participate in the
             *   3-D Secure program.
             * - `non_authenticated_security_transaction` - Non-authenticated security
             *   transaction: Use to identify an electronic commerce transaction that uses data
             *   encryption for security however , cardholder authentication is not performed
             *   using 3-D Secure.
             * - `non_secure_transaction` - Non-secure transaction: Use to identify an
             *   electronic commerce transaction that has no data protection.
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
         *
         * - `ach_route_canceled` - The account number is canceled.
         * - `ach_route_disabled` - The account number is disabled.
         * - `breaches_limit` - The transaction would cause a limit to be exceeded.
         * - `entity_not_active` - The account's entity is not active.
         * - `group_locked` - Your account is inactive.
         * - `insufficient_funds` - Your account contains insufficient funds.
         * - `unable_to_locate_account` - Unable to locate account.
         * - `not_our_item` - Routing number on the check is not ours.
         * - `unable_to_process` - Unable to process.
         * - `refer_to_image` - Refer to image.
         * - `stop_payment_requested` - Stop payment requested for this check.
         * - `returned` - Check was returned to sender.
         * - `duplicate_presentment` - The check was a duplicate deposit.
         * - `not_authorized` - The transaction is not allowed.
         * - `altered_or_fictitious` - The check was altered or fictitious.
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
         * - `real_time_payments_not_enabled` - Your account is not enabled to receive Real
         *   Time Payments transfers.
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
         *
         * - `account_number_canceled` - The account number is canceled.
         * - `account_number_disabled` - The account number is disabled.
         * - `entity_not_active` - The account's entity is not active.
         * - `group_locked` - Your account is inactive.
         * - `no_account_number` - The beneficiary account number does not exist.
         * - `transaction_not_allowed` - The transaction is not allowed per Increase's
         *   terms.
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

  /**
   * If the authorization attempt succeeds, this will contain the resulting Pending
   * Transaction object. The Pending Transaction's `source` will be of
   * `category: card_authorization`.
   */
  export interface PendingTransaction {
    /**
     * The Pending Transaction identifier.
     */
    id: string;

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
     * Transaction was completed.
     */
    completed_at: string | null;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
     * Transaction occured.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
     * Transaction's currency. This will match the currency on the Pending
     * Transcation's Account.
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
     * For a Pending Transaction related to a transfer, this is the description you
     * provide. For a Pending Transaction related to a payment, this is the description
     * the vendor provides.
     */
    description: string;

    /**
     * The identifier for the route this Pending Transaction came through. Routes are
     * things like cards and ACH details.
     */
    route_id: string | null;

    /**
     * The type of the route this Pending Transaction came through.
     *
     * - `account_number` - An Account Number.
     * - `card` - A Card.
     */
    route_type: 'account_number' | 'card' | null;

    /**
     * This is an object giving more details on the network-level event that caused the
     * Pending Transaction. For example, for a card transaction this lists the
     * merchant's industry and location.
     */
    source: PendingTransaction.Source;

    /**
     * Whether the Pending Transaction has been confirmed and has an associated
     * Transaction.
     *
     * - `pending` - The Pending Transaction is still awaiting confirmation.
     * - `complete` - The Pending Transaction is confirmed. An associated Transaction
     *   exists for this object. The Pending Transaction will no longer count against
     *   your balance and can generally be hidden from UIs, etc.
     */
    status: 'pending' | 'complete';

    /**
     * A constant representing the object's type. For this resource it will always be
     * `pending_transaction`.
     */
    type: 'pending_transaction';
  }

  export namespace PendingTransaction {
    /**
     * This is an object giving more details on the network-level event that caused the
     * Pending Transaction. For example, for a card transaction this lists the
     * merchant's industry and location.
     */
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
       * The type of transaction that took place. We may add additional possible values
       * for this enum over time; your application should be able to handle such
       * additions gracefully.
       *
       * - `account_transfer_instruction` - The Pending Transaction was created by a
       *   Account Transfer Instruction object. Details will be under the
       *   `account_transfer_instruction` object.
       * - `ach_transfer_instruction` - The Pending Transaction was created by a ACH
       *   Transfer Instruction object. Details will be under the
       *   `ach_transfer_instruction` object.
       * - `card_authorization` - The Pending Transaction was created by a Card
       *   Authorization object. Details will be under the `card_authorization` object.
       * - `check_deposit_instruction` - The Pending Transaction was created by a Check
       *   Deposit Instruction object. Details will be under the
       *   `check_deposit_instruction` object.
       * - `check_transfer_instruction` - The Pending Transaction was created by a Check
       *   Transfer Instruction object. Details will be under the
       *   `check_transfer_instruction` object.
       * - `inbound_funds_hold` - The Pending Transaction was created by a Inbound Funds
       *   Hold object. Details will be under the `inbound_funds_hold` object.
       * - `real_time_payments_transfer_instruction` - The Pending Transaction was
       *   created by a Real Time Payments Transfer Instruction object. Details will be
       *   under the `real_time_payments_transfer_instruction` object.
       * - `wire_transfer_instruction` - The Pending Transaction was created by a Wire
       *   Transfer Instruction object. Details will be under the
       *   `wire_transfer_instruction` object.
       * - `other` - The Pending Transaction was made for an undocumented or deprecated
       *   reason.
       */
      category:
        | 'account_transfer_instruction'
        | 'ach_transfer_instruction'
        | 'card_authorization'
        | 'check_deposit_instruction'
        | 'check_transfer_instruction'
        | 'inbound_funds_hold'
        | 'real_time_payments_transfer_instruction'
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
       * A Inbound Funds Hold object. This field will be present in the JSON response if
       * and only if `category` is equal to `inbound_funds_hold`.
       */
      inbound_funds_hold: Source.InboundFundsHold | null;

      /**
       * A Real Time Payments Transfer Instruction object. This field will be present in
       * the JSON response if and only if `category` is equal to
       * `real_time_payments_transfer_instruction`.
       */
      real_time_payments_transfer_instruction: Source.RealTimePaymentsTransferInstruction | null;

      /**
       * A Wire Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_instruction`.
       */
      wire_transfer_instruction: Source.WireTransferInstruction | null;
    }

    export namespace Source {
      /**
       * A Account Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `account_transfer_instruction`.
       */
      export interface AccountTransferInstruction {
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
         * The identifier of the Account Transfer that led to this Pending Transaction.
         */
        transfer_id: string;
      }

      /**
       * A ACH Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `ach_transfer_instruction`.
       */
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

      /**
       * A Card Authorization object. This field will be present in the JSON response if
       * and only if `category` is equal to `card_authorization`.
       */
      export interface CardAuthorization {
        /**
         * The Card Authorization identifier.
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
         * If the authorization was made via a Digital Wallet Token (such as an Apple Pay
         * purchase), the identifier of the token that was used.
         */
        digital_wallet_token_id: string | null;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) when this authorization
         * will expire and the pending transaction will be released.
         */
        expires_at: string;

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
         * Fields specific to the `network`
         */
        network_details: CardAuthorization.NetworkDetails;

        /**
         * The identifier of the Pending Transaction associated with this Transaction.
         */
        pending_transaction_id: string | null;

        /**
         * If the authorization was made in-person with a physical card, the Physical Card
         * that was used.
         */
        physical_card_id: string | null;

        /**
         * The identifier of the Real-Time Decision sent to approve or decline this
         * transaction.
         */
        real_time_decision_id: string | null;

        /**
         * A constant representing the object's type. For this resource it will always be
         * `card_authorization`.
         */
        type: 'card_authorization';
      }

      export namespace CardAuthorization {
        /**
         * Fields specific to the `network`
         */
        export interface NetworkDetails {
          /**
           * The payment network used to process this card authorization
           *
           * - `visa` - Visa
           */
          category: 'visa';

          /**
           * Fields specific to the `visa` network
           */
          visa: NetworkDetails.Visa | null;
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
             *
             * - `mail_phone_order` - Single transaction of a mail/phone order: Use to indicate
             *   that the transaction is a mail/phone order purchase, not a recurring
             *   transaction or installment payment. For domestic transactions in the US
             *   region, this value may also indicate one bill payment transaction in the
             *   card-present or card-absent environments.
             * - `recurring` - Recurring transaction: Payment indicator used to indicate a
             *   recurring transaction that originates from an acquirer in the US region.
             * - `installment` - Installment payment: Payment indicator used to indicate one
             *   purchase of goods or services that is billed to the account in multiple
             *   charges over a period of time agreed upon by the cardholder and merchant from
             *   transactions that originate from an acquirer in the US region.
             * - `unknown_mail_phone_order` - Unknown classification: other mail order: Use to
             *   indicate that the type of mail/telephone order is unknown.
             * - `secure_electronic_commerce` - Secure electronic commerce transaction: Use to
             *   indicate that the electronic commerce transaction has been authenticated using
             *   e.g., 3-D Secure
             * - `non_authenticated_security_transaction_at_3ds_capable_merchant` -
             *   Non-authenticated security transaction at a 3-D Secure-capable merchant, and
             *   merchant attempted to authenticate the cardholder using 3-D Secure: Use to
             *   identify an electronic commerce transaction where the merchant attempted to
             *   authenticate the cardholder using 3-D Secure, but was unable to complete the
             *   authentication because the issuer or cardholder does not participate in the
             *   3-D Secure program.
             * - `non_authenticated_security_transaction` - Non-authenticated security
             *   transaction: Use to identify an electronic commerce transaction that uses data
             *   encryption for security however , cardholder authentication is not performed
             *   using 3-D Secure.
             * - `non_secure_transaction` - Non-secure transaction: Use to identify an
             *   electronic commerce transaction that has no data protection.
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
       * A Check Deposit Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_deposit_instruction`.
       */
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
         * The identifier of the Check Deposit.
         */
        check_deposit_id: string | null;

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
         * The identifier of the File containing the image of the front of the check that
         * was deposited.
         */
        front_image_file_id: string;
      }

      /**
       * A Check Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `check_transfer_instruction`.
       */
      export interface CheckTransferInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
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
         * The identifier of the Check Transfer that led to this Pending Transaction.
         */
        transfer_id: string;
      }

      /**
       * A Inbound Funds Hold object. This field will be present in the JSON response if
       * and only if `category` is equal to `inbound_funds_hold`.
       */
      export interface InboundFundsHold {
        /**
         * The Inbound Funds Hold identifier.
         */
        id: string;

        /**
         * The held amount in the minor unit of the account's currency. For dollars, for
         * example, this is cents.
         */
        amount: number;

        /**
         * When the hold will be released automatically. Certain conditions may cause it to
         * be released before this time.
         */
        automatically_releases_at: string;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the hold
         * was created.
         */
        created_at: string;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's
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
         * The ID of the Transaction for which funds were held.
         */
        held_transaction_id: string | null;

        /**
         * The ID of the Pending Transaction representing the held funds.
         */
        pending_transaction_id: string | null;

        /**
         * When the hold was released (if it has been released).
         */
        released_at: string | null;

        /**
         * The status of the hold.
         *
         * - `held` - Funds are still being held.
         * - `complete` - Funds have been released.
         */
        status: 'held' | 'complete';

        /**
         * A constant representing the object's type. For this resource it will always be
         * `inbound_funds_hold`.
         */
        type: 'inbound_funds_hold';
      }

      /**
       * A Real Time Payments Transfer Instruction object. This field will be present in
       * the JSON response if and only if `category` is equal to
       * `real_time_payments_transfer_instruction`.
       */
      export interface RealTimePaymentsTransferInstruction {
        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The identifier of the Real Time Payments Transfer that led to this Pending
         * Transaction.
         */
        transfer_id: string;
      }

      /**
       * A Wire Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_instruction`.
       */
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
}

export interface CardAuthorizeParams {
  /**
   * The authorization amount in cents.
   */
  amount: number;

  /**
   * The identifier of the Card to be authorized.
   */
  card_id?: string;

  /**
   * The identifier of the Digital Wallet Token to be authorized.
   */
  digital_wallet_token_id?: string;

  /**
   * The identifier of the Event Subscription to use. If provided, will override the
   * default real time event subscription. Because you can only create one real time
   * decision event subscription, you can use this field to route events to any
   * specified event subscription for testing purposes.
   */
  event_subscription_id?: string;

  /**
   * The identifier of the Physical Card to be authorized.
   */
  physical_card_id?: string;
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

export namespace Cards {
  export import CardAuthorizationSimulation = API.CardAuthorizationSimulation;
  export import CardAuthorizeParams = API.CardAuthorizeParams;
  export import CardSettlementParams = API.CardSettlementParams;
}
