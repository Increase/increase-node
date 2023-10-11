// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as CardsAPI from 'increase/resources/simulations/cards';
import * as TransactionsAPI from 'increase/resources/transactions';

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
  ): Core.APIPromise<TransactionsAPI.Transaction> {
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
     * Transaction occurred.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined
     * Transaction's currency. This will match the currency on the Declined
     * Transaction's Account.
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
       * An ACH Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `ach_decline`.
       */
      ach_decline: Source.ACHDecline | null;

      /**
       * A Card Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `card_decline`.
       */
      card_decline: Source.CardDecline | null;

      /**
       * The type of the resource. We may add additional possible values for this enum
       * over time; your application should be able to handle such additions gracefully.
       *
       * - `ach_decline` - ACH Decline: details will be under the `ach_decline` object.
       * - `card_decline` - Card Decline: details will be under the `card_decline`
       *   object.
       * - `check_decline` - Check Decline: details will be under the `check_decline`
       *   object.
       * - `inbound_real_time_payments_transfer_decline` - Inbound Real-Time Payments
       *   Transfer Decline: details will be under the
       *   `inbound_real_time_payments_transfer_decline` object.
       * - `international_ach_decline` - International ACH Decline: details will be under
       *   the `international_ach_decline` object.
       * - `wire_decline` - Wire Decline: details will be under the `wire_decline`
       *   object.
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
       * An Inbound Real-Time Payments Transfer Decline object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `inbound_real_time_payments_transfer_decline`.
       */
      inbound_real_time_payments_transfer_decline: Source.InboundRealTimePaymentsTransferDecline | null;

      /**
       * An International ACH Decline object. This field will be present in the JSON
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
       * An ACH Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `ach_decline`.
       */
      export interface ACHDecline {
        /**
         * The ACH Decline's identifier.
         */
        id: string;

        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        /**
         * The descriptive date of the transfer.
         */
        originator_company_descriptive_date: string | null;

        /**
         * The additional information included with the transfer.
         */
        originator_company_discretionary_data: string | null;

        /**
         * The identifier of the company that initiated the transfer.
         */
        originator_company_id: string;

        /**
         * The name of the company that initiated the transfer.
         */
        originator_company_name: string;

        /**
         * Why the ACH transfer was declined.
         *
         * - `ach_route_canceled` - The account number is canceled.
         * - `ach_route_disabled` - The account number is disabled.
         * - `breaches_limit` - The transaction would cause an Increase limit to be
         *   exceeded.
         * - `credit_entry_refused_by_receiver` - A credit was refused. This is a
         *   reasonable default reason for decline of credits.
         * - `duplicate_return` - A rare return reason. The return this message refers to
         *   was a duplicate.
         * - `entity_not_active` - The account's entity is not active.
         * - `group_locked` - Your account is inactive.
         * - `insufficient_funds` - Your account contains insufficient funds.
         * - `misrouted_return` - A rare return reason. The return this message refers to
         *   was misrouted.
         * - `return_of_erroneous_or_reversing_debit` - The originating financial
         *   institution made a mistake and this return corrects it.
         * - `no_ach_route` - The account number that was debited does not exist.
         * - `originator_request` - The originating financial institution asked for this
         *   transfer to be returned.
         * - `transaction_not_allowed` - The transaction is not allowed per Increase's
         *   terms.
         * - `user_initiated` - The user initiated the decline.
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
          | 'transaction_not_allowed'
          | 'user_initiated';

        /**
         * The id of the receiver of the transfer.
         */
        receiver_id_number: string | null;

        /**
         * The name of the receiver of the transfer.
         */
        receiver_name: string | null;

        /**
         * The trace number of the transfer.
         */
        trace_number: string;

        /**
         * A constant representing the object's type. For this resource it will always be
         * `ach_decline`.
         */
        type: 'ach_decline';
      }

      /**
       * A Card Decline object. This field will be present in the JSON response if and
       * only if `category` is equal to `card_decline`.
       */
      export interface CardDecline {
        /**
         * The Card Decline identifier.
         */
        id: string;

        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        /**
         * The ID of the Card Payment this transaction belongs to.
         */
        card_payment_id: string | null;

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
         * If the authorization was made via a Digital Wallet Token (such as an Apple Pay
         * purchase), the identifier of the token that was used.
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
         * Fields specific to the `network`.
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
         * - `physical_card_not_active` - The Physical Card was not active.
         * - `entity_not_active` - The account's entity was not active.
         * - `group_locked` - The account was inactive.
         * - `insufficient_funds` - The Card's Account did not have a sufficient available
         *   balance.
         * - `cvv2_mismatch` - The given CVV2 did not match the card's value.
         * - `transaction_not_allowed` - The attempted card transaction is not allowed per
         *   Increase's terms.
         * - `breaches_limit` - The transaction was blocked by a Limit.
         * - `webhook_declined` - Your application declined the transaction via webhook.
         * - `webhook_timed_out` - Your application webhook did not respond without the
         *   required timeout.
         * - `declined_by_stand_in_processing` - Declined by stand-in processing.
         * - `invalid_physical_card` - The card read had an invalid CVV, dCVV, or
         *   authorization request cryptogram.
         * - `missing_original_authorization` - The original card authorization for this
         *   incremental authorization does not exist.
         * - `suspected_fraud` - The transaction was suspected to be fraudulent. Please
         *   reach out to support@increase.com for more information.
         */
        reason:
          | 'card_not_active'
          | 'physical_card_not_active'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'cvv2_mismatch'
          | 'transaction_not_allowed'
          | 'breaches_limit'
          | 'webhook_declined'
          | 'webhook_timed_out'
          | 'declined_by_stand_in_processing'
          | 'invalid_physical_card'
          | 'missing_original_authorization'
          | 'suspected_fraud';
      }

      export namespace CardDecline {
        /**
         * Fields specific to the `network`.
         */
        export interface NetworkDetails {
          /**
           * The payment network used to process this card authorization.
           *
           * - `visa` - Visa
           */
          category: 'visa';

          /**
           * Fields specific to the `visa` network.
           */
          visa: NetworkDetails.Visa | null;
        }

        export namespace NetworkDetails {
          /**
           * Fields specific to the `visa` network.
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
             * expiration date.
             *
             * - `unknown` - Unknown
             * - `manual` - Manual key entry
             * - `magnetic_stripe_no_cvv` - Magnetic stripe read, without card verification
             *   value
             * - `optical_code` - Optical code
             * - `integrated_circuit_card` - Contact chip card
             * - `contactless` - Contactless read of chip card
             * - `credential_on_file` - Transaction initiated using a credential that has
             *   previously been stored on file
             * - `magnetic_stripe` - Magnetic stripe read
             * - `contactless_magnetic_stripe` - Contactless read of magnetic stripe data
             * - `integrated_circuit_card_no_cvv` - Contact chip card, without card
             *   verification value
             */
            point_of_service_entry_mode:
              | 'unknown'
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
              | null;
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

        /**
         * A computer-readable number printed on the MICR line of business checks, usually
         * the check number. This is useful for positive pay checks, but can be unreliably
         * transmitted by the bank of first deposit.
         */
        auxiliary_on_us: string | null;

        /**
         * Why the check was declined.
         *
         * - `ach_route_disabled` - The account number is disabled.
         * - `ach_route_canceled` - The account number is canceled.
         * - `breaches_limit` - The transaction would cause a limit to be exceeded.
         * - `entity_not_active` - The account's entity is not active.
         * - `group_locked` - Your account is inactive.
         * - `insufficient_funds` - Your account contains insufficient funds.
         * - `stop_payment_requested` - Stop payment requested for this check.
         * - `duplicate_presentment` - The check was a duplicate deposit.
         * - `not_authorized` - The check was not authorized.
         * - `amount_mismatch` - The amount the receiving bank is attempting to deposit
         *   does not match the amount on the check.
         * - `not_our_item` - The check attempting to be deposited does not belong to
         *   Increase.
         */
        reason:
          | 'ach_route_disabled'
          | 'ach_route_canceled'
          | 'breaches_limit'
          | 'entity_not_active'
          | 'group_locked'
          | 'insufficient_funds'
          | 'stop_payment_requested'
          | 'duplicate_presentment'
          | 'not_authorized'
          | 'amount_mismatch'
          | 'not_our_item';
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
      }

      /**
       * An International ACH Decline object. This field will be present in the JSON
       * response if and only if `category` is equal to `international_ach_decline`.
       */
      export interface InternationalACHDecline {
        /**
         * The declined amount in the minor unit of the destination account currency. For
         * dollars, for example, this is cents.
         */
        amount: number;

        /**
         * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
         * country code of the destination country.
         */
        destination_country_code: string;

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
         * destination bank account.
         */
        destination_currency_code: string;

        /**
         * A description of how the foreign exchange rate was calculated.
         *
         * - `fixed_to_variable` - The originator chose an amount in their own currency.
         *   The settled amount in USD was converted using the exchange rate.
         * - `variable_to_fixed` - The originator chose an amount to settle in USD. The
         *   originator's amount was variable; known only after the foreign exchange
         *   conversion.
         * - `fixed_to_fixed` - The amount was originated and settled as a fixed amount in
         *   USD. There is no foreign exchange conversion.
         */
        foreign_exchange_indicator: 'fixed_to_variable' | 'variable_to_fixed' | 'fixed_to_fixed';

        /**
         * Depending on the `foreign_exchange_reference_indicator`, an exchange rate or a
         * reference to a well-known rate.
         */
        foreign_exchange_reference: string | null;

        /**
         * An instruction of how to interpret the `foreign_exchange_reference` field for
         * this Transaction.
         *
         * - `foreign_exchange_rate` - The ACH file contains a foreign exchange rate.
         * - `foreign_exchange_reference_number` - The ACH file contains a reference to a
         *   well-known foreign exchange rate.
         * - `blank` - There is no foreign exchange for this transfer, so the
         *   `foreign_exchange_reference` field is blank.
         */
        foreign_exchange_reference_indicator:
          | 'foreign_exchange_rate'
          | 'foreign_exchange_reference_number'
          | 'blank';

        /**
         * The amount in the minor unit of the foreign payment currency. For dollars, for
         * example, this is cents.
         */
        foreign_payment_amount: number;

        /**
         * A reference number in the foreign banking infrastructure.
         */
        foreign_trace_number: string | null;

        /**
         * The type of transfer. Set by the originator.
         *
         * - `annuity` - Sent as `ANN` in the Nacha file.
         * - `business_or_commercial` - Sent as `BUS` in the Nacha file.
         * - `deposit` - Sent as `DEP` in the Nacha file.
         * - `loan` - Sent as `LOA` in the Nacha file.
         * - `miscellaneous` - Sent as `MIS` in the Nacha file.
         * - `mortgage` - Sent as `MOR` in the Nacha file.
         * - `pension` - Sent as `PEN` in the Nacha file.
         * - `remittance` - Sent as `REM` in the Nacha file.
         * - `rent_or_lease` - Sent as `RLS` in the Nacha file.
         * - `salary_or_payroll` - Sent as `SAL` in the Nacha file.
         * - `tax` - Sent as `TAX` in the Nacha file.
         * - `accounts_receivable` - Sent as `ARC` in the Nacha file.
         * - `back_office_conversion` - Sent as `BOC` in the Nacha file.
         * - `machine_transfer` - Sent as `MTE` in the Nacha file.
         * - `point_of_purchase` - Sent as `POP` in the Nacha file.
         * - `point_of_sale` - Sent as `POS` in the Nacha file.
         * - `represented_check` - Sent as `RCK` in the Nacha file.
         * - `shared_network_transaction` - Sent as `SHR` in the Nacha file.
         * - `telphone_initiated` - Sent as `TEL` in the Nacha file.
         * - `internet_initiated` - Sent as `WEB` in the Nacha file.
         */
        international_transaction_type_code:
          | 'annuity'
          | 'business_or_commercial'
          | 'deposit'
          | 'loan'
          | 'miscellaneous'
          | 'mortgage'
          | 'pension'
          | 'remittance'
          | 'rent_or_lease'
          | 'salary_or_payroll'
          | 'tax'
          | 'accounts_receivable'
          | 'back_office_conversion'
          | 'machine_transfer'
          | 'point_of_purchase'
          | 'point_of_sale'
          | 'represented_check'
          | 'shared_network_transaction'
          | 'telphone_initiated'
          | 'internet_initiated';

        /**
         * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
         * originating bank account.
         */
        originating_currency_code: string;

        /**
         * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
         * country code of the originating branch country.
         */
        originating_depository_financial_institution_branch_country: string;

        /**
         * An identifier for the originating bank. One of an International Bank Account
         * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
         * domestic identifier like a US Routing Number.
         */
        originating_depository_financial_institution_id: string;

        /**
         * An instruction of how to interpret the
         * `originating_depository_financial_institution_id` field for this Transaction.
         *
         * - `national_clearing_system_number` - A domestic clearing system number. In the
         *   US, for example, this is the American Banking Association (ABA) routing
         *   number.
         * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
         * - `iban` - An International Bank Account Number.
         */
        originating_depository_financial_institution_id_qualifier:
          | 'national_clearing_system_number'
          | 'bic_code'
          | 'iban';

        /**
         * The name of the originating bank. Sometimes this will refer to an American bank
         * and obscure the correspondent foreign bank.
         */
        originating_depository_financial_institution_name: string;

        /**
         * A portion of the originator address. This may be incomplete.
         */
        originator_city: string;

        /**
         * A description field set by the originator.
         */
        originator_company_entry_description: string;

        /**
         * A portion of the originator address. The
         * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
         * code of the originator country.
         */
        originator_country: string;

        /**
         * An identifier for the originating company. This is generally stable across
         * multiple ACH transfers.
         */
        originator_identification: string;

        /**
         * Either the name of the originator or an intermediary money transmitter.
         */
        originator_name: string;

        /**
         * A portion of the originator address. This may be incomplete.
         */
        originator_postal_code: string | null;

        /**
         * A portion of the originator address. This may be incomplete.
         */
        originator_state_or_province: string | null;

        /**
         * A portion of the originator address. This may be incomplete.
         */
        originator_street_address: string;

        /**
         * A description field set by the originator.
         */
        payment_related_information: string | null;

        /**
         * A description field set by the originator.
         */
        payment_related_information2: string | null;

        /**
         * A portion of the receiver address. This may be incomplete.
         */
        receiver_city: string;

        /**
         * A portion of the receiver address. The
         * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
         * code of the receiver country.
         */
        receiver_country: string;

        /**
         * An identification number the originator uses for the receiver.
         */
        receiver_identification_number: string | null;

        /**
         * A portion of the receiver address. This may be incomplete.
         */
        receiver_postal_code: string | null;

        /**
         * A portion of the receiver address. This may be incomplete.
         */
        receiver_state_or_province: string | null;

        /**
         * A portion of the receiver address. This may be incomplete.
         */
        receiver_street_address: string;

        /**
         * The name of the receiver of the transfer. This is not verified by Increase.
         */
        receiving_company_or_individual_name: string;

        /**
         * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
         * country code of the receiving bank country.
         */
        receiving_depository_financial_institution_country: string;

        /**
         * An identifier for the receiving bank. One of an International Bank Account
         * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
         * domestic identifier like a US Routing Number.
         */
        receiving_depository_financial_institution_id: string;

        /**
         * An instruction of how to interpret the
         * `receiving_depository_financial_institution_id` field for this Transaction.
         *
         * - `national_clearing_system_number` - A domestic clearing system number. In the
         *   US, for example, this is the American Banking Association (ABA) routing
         *   number.
         * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
         * - `iban` - An International Bank Account Number.
         */
        receiving_depository_financial_institution_id_qualifier:
          | 'national_clearing_system_number'
          | 'bic_code'
          | 'iban';

        /**
         * The name of the receiving bank, as set by the sending financial institution.
         */
        receiving_depository_financial_institution_name: string;

        /**
         * A 15 digit number recorded in the Nacha file and available to both the
         * originating and receiving bank. Along with the amount, date, and originating
         * routing number, this can be used to identify the ACH transfer at either bank.
         * ACH trace numbers are not unique, but are
         * [used to correlate returns](https://increase.com/documentation/ach#returns).
         */
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
         * An Increase-constructed description of the declined transaction.
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
     * Transaction occurred.
     */
    created_at: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
     * Transaction's currency. This will match the currency on the Pending
     * Transaction's Account.
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
       * An Account Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `account_transfer_instruction`.
       */
      account_transfer_instruction: Source.AccountTransferInstruction | null;

      /**
       * An ACH Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `ach_transfer_instruction`.
       */
      ach_transfer_instruction: Source.ACHTransferInstruction | null;

      /**
       * A Card Authorization object. This field will be present in the JSON response if
       * and only if `category` is equal to `card_authorization`.
       */
      card_authorization: Source.CardAuthorization | null;

      /**
       * The type of the resource. We may add additional possible values for this enum
       * over time; your application should be able to handle such additions gracefully.
       *
       * - `account_transfer_instruction` - Account Transfer Instruction: details will be
       *   under the `account_transfer_instruction` object.
       * - `ach_transfer_instruction` - ACH Transfer Instruction: details will be under
       *   the `ach_transfer_instruction` object.
       * - `card_authorization` - Card Authorization: details will be under the
       *   `card_authorization` object.
       * - `check_deposit_instruction` - Check Deposit Instruction: details will be under
       *   the `check_deposit_instruction` object.
       * - `check_transfer_instruction` - Check Transfer Instruction: details will be
       *   under the `check_transfer_instruction` object.
       * - `inbound_funds_hold` - Inbound Funds Hold: details will be under the
       *   `inbound_funds_hold` object.
       * - `real_time_payments_transfer_instruction` - Real-Time Payments Transfer
       *   Instruction: details will be under the
       *   `real_time_payments_transfer_instruction` object.
       * - `wire_transfer_instruction` - Wire Transfer Instruction: details will be under
       *   the `wire_transfer_instruction` object.
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
       * An Inbound Funds Hold object. This field will be present in the JSON response if
       * and only if `category` is equal to `inbound_funds_hold`.
       */
      inbound_funds_hold: Source.InboundFundsHold | null;

      /**
       * A Real-Time Payments Transfer Instruction object. This field will be present in
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
       * An Account Transfer Instruction object. This field will be present in the JSON
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
       * An ACH Transfer Instruction object. This field will be present in the JSON
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
         * The ID of the Card Payment this transaction belongs to.
         */
        card_payment_id: string | null;

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
         * The direction descibes the direction the funds will move, either from the
         * cardholder to the merchant or from the merchant to the cardholder.
         *
         * - `settlement` - A regular card authorization where funds are debited from the
         *   cardholder.
         * - `refund` - A refund card authorization, sometimes referred to as a credit
         *   voucher authorization, where funds are credited to the cardholder.
         */
        direction: 'settlement' | 'refund';

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
         * Fields specific to the `network`.
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
         * Fields specific to the `network`.
         */
        export interface NetworkDetails {
          /**
           * The payment network used to process this card authorization.
           *
           * - `visa` - Visa
           */
          category: 'visa';

          /**
           * Fields specific to the `visa` network.
           */
          visa: NetworkDetails.Visa | null;
        }

        export namespace NetworkDetails {
          /**
           * Fields specific to the `visa` network.
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
             * expiration date.
             *
             * - `unknown` - Unknown
             * - `manual` - Manual key entry
             * - `magnetic_stripe_no_cvv` - Magnetic stripe read, without card verification
             *   value
             * - `optical_code` - Optical code
             * - `integrated_circuit_card` - Contact chip card
             * - `contactless` - Contactless read of chip card
             * - `credential_on_file` - Transaction initiated using a credential that has
             *   previously been stored on file
             * - `magnetic_stripe` - Magnetic stripe read
             * - `contactless_magnetic_stripe` - Contactless read of magnetic stripe data
             * - `integrated_circuit_card_no_cvv` - Contact chip card, without card
             *   verification value
             */
            point_of_service_entry_mode:
              | 'unknown'
              | 'manual'
              | 'magnetic_stripe_no_cvv'
              | 'optical_code'
              | 'integrated_circuit_card'
              | 'contactless'
              | 'credential_on_file'
              | 'magnetic_stripe'
              | 'contactless_magnetic_stripe'
              | 'integrated_circuit_card_no_cvv'
              | null;
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
       * An Inbound Funds Hold object. This field will be present in the JSON response if
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
       * A Real-Time Payments Transfer Instruction object. This field will be present in
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
         * The identifier of the Real-Time Payments Transfer that led to this Pending
         * Transaction.
         */
        transfer_id: string;
      }

      /**
       * A Wire Transfer Instruction object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_instruction`.
       */
      export interface WireTransferInstruction {
        /**
         * The account number for the destination account.
         */
        account_number: string;

        /**
         * The pending amount in the minor unit of the transaction's currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The message that will show on the recipient's bank statement.
         */
        message_to_recipient: string;

        /**
         * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
         * destination account.
         */
        routing_number: string;

        /**
         * The identifier of the Wire Transfer that led to this Pending Transaction.
         */
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
  export type CardAuthorizationSimulation = CardsAPI.CardAuthorizationSimulation;
  export type CardAuthorizeParams = CardsAPI.CardAuthorizeParams;
  export type CardSettlementParams = CardsAPI.CardSettlementParams;
}
