// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsACHTransfersAPI from 'increase/resources/simulations/ach-transfers';
import * as ACHTransfersAPI from 'increase/resources/ach-transfers';

export class ACHTransfers extends APIResource {
  /**
   * Simulates an inbound ACH transfer to your account. This imitates initiating a
   * transfer to an Increase account from a different financial institution. The
   * transfer may be either a credit or a debit depending on if the `amount` is
   * positive or negative. The result of calling this API will contain the created
   * transfer. You can pass a `resolve_at` parameter to allow for a window to
   * [action on the Inbound ACH Transfer](https://increase.com/documentation/inbound-ach-transfers#inbound-ach-transfers).
   * Alternatively, if you don't pass the `resolve_at` parameter the result will
   * contain either a [Transaction](#transactions) or a
   * [Declined Transaction](#declined-transactions) depending on whether or not the
   * transfer is allowed.
   */
  createInbound(
    body: ACHTransferCreateInboundParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACHTransferSimulation> {
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
  ): Core.APIPromise<ACHTransfersAPI.ACHTransfer> {
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
  submit(achTransferId: string, options?: Core.RequestOptions): Core.APIPromise<ACHTransfersAPI.ACHTransfer> {
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
   * The Inbound ACH Transfer.
   */
  transfer: ACHTransferSimulation.Transfer;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_ach_transfer_simulation_result`.
   */
  type: 'inbound_ach_transfer_simulation_result';
}

export namespace ACHTransferSimulation {
  /**
   * If the ACH Transfer attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: inbound_ach_transfer`.
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
         * Cardholder address provided in the authorization request and the address on file
         * we verified it against.
         */
        cardholder_address: CardDecline.CardholderAddress;

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
         * Cardholder address provided in the authorization request and the address on file
         * we verified it against.
         */
        export interface CardholderAddress {
          /**
           * Line 1 of the address on file for the cardholder.
           */
          actual_line1: string | null;

          /**
           * The postal code of the address on file for the cardholder.
           */
          actual_postal_code: string | null;

          /**
           * The cardholder address line 1 provided for verification in the authorization
           * request.
           */
          provided_line1: string | null;

          /**
           * The postal code provided for verification in the authorization request.
           */
          provided_postal_code: string | null;

          /**
           * The address verification result returned to the card network.
           *
           * - `not_checked` - No adress was provided in the authorization request.
           * - `postal_code_match_address_not_checked` - Postal code matches, but the street
           *   address was not verified
           * - `postal_code_match_address_no_match` - Postal code matches, but the street
           *   address does not match
           * - `postal_code_no_match_address_match` - Postal code does not match, but the
           *   street address matches
           * - `match` - Postal code and street address match
           * - `no_match` - Postal code and street address do not match
           */
          verification_result:
            | 'not_checked'
            | 'postal_code_match_address_not_checked'
            | 'postal_code_match_address_no_match'
            | 'postal_code_no_match_address_match'
            | 'match'
            | 'no_match';
        }

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
   * If the ACH Transfer attempt succeeds, this will contain the resulting
   * [Transaction](#transactions) object. The Transaction's `source` will be of
   * `category: inbound_ach_transfer`.
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
       * - `card_dispute_acceptance` - Card Dispute Acceptance: details will be under the
       *   `card_dispute_acceptance` object.
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
       * - `check_transfer_intention` - Check Transfer Intention: details will be under
       *   the `check_transfer_intention` object.
       * - `check_transfer_stop_payment_request` - Check Transfer Stop Payment Request:
       *   details will be under the `check_transfer_stop_payment_request` object.
       * - `fee_payment` - Fee Payment: details will be under the `fee_payment` object.
       * - `inbound_ach_transfer` - Inbound ACH Transfer Intention: details will be under
       *   the `inbound_ach_transfer` object.
       * - `inbound_ach_transfer_return_intention` - Inbound ACH Transfer Return
       *   Intention: details will be under the `inbound_ach_transfer_return_intention`
       *   object.
       * - `inbound_check` - Inbound Check: details will be under the `inbound_check`
       *   object.
       * - `inbound_international_ach_transfer` - Inbound International ACH Transfer:
       *   details will be under the `inbound_international_ach_transfer` object.
       * - `inbound_real_time_payments_transfer_confirmation` - Inbound Real-Time
       *   Payments Transfer Confirmation: details will be under the
       *   `inbound_real_time_payments_transfer_confirmation` object.
       * - `inbound_wire_drawdown_payment_reversal` - Inbound Wire Drawdown Payment
       *   Reversal: details will be under the `inbound_wire_drawdown_payment_reversal`
       *   object.
       * - `inbound_wire_drawdown_payment` - Inbound Wire Drawdown Payment: details will
       *   be under the `inbound_wire_drawdown_payment` object.
       * - `inbound_wire_reversal` - Inbound Wire Reversal: details will be under the
       *   `inbound_wire_reversal` object.
       * - `inbound_wire_transfer` - Inbound Wire Transfer: details will be under the
       *   `inbound_wire_transfer` object.
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
       * - `wire_transfer_rejection` - Wire Transfer Rejection: details will be under the
       *   `wire_transfer_rejection` object.
       * - `other` - The Transaction was made for an undocumented or deprecated reason.
       */
      category:
        | 'account_transfer_intention'
        | 'ach_transfer_intention'
        | 'ach_transfer_rejection'
        | 'ach_transfer_return'
        | 'card_dispute_acceptance'
        | 'card_refund'
        | 'card_settlement'
        | 'card_revenue_payment'
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
        | 'inbound_wire_drawdown_payment_reversal'
        | 'inbound_wire_drawdown_payment'
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
       * An Inbound ACH Transfer Intention object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_ach_transfer`.
       */
      inbound_ach_transfer: Source.InboundACHTransfer | null;

      /**
       * An Inbound Check object. This field will be present in the JSON response if and
       * only if `category` is equal to `inbound_check`.
       */
      inbound_check: Source.InboundCheck | null;

      /**
       * An Inbound International ACH Transfer object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `inbound_international_ach_transfer`.
       */
      inbound_international_ach_transfer: Source.InboundInternationalACHTransfer | null;

      /**
       * An Inbound Real-Time Payments Transfer Confirmation object. This field will be
       * present in the JSON response if and only if `category` is equal to
       * `inbound_real_time_payments_transfer_confirmation`.
       */
      inbound_real_time_payments_transfer_confirmation: Source.InboundRealTimePaymentsTransferConfirmation | null;

      /**
       * An Inbound Wire Drawdown Payment object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
       */
      inbound_wire_drawdown_payment: Source.InboundWireDrawdownPayment | null;

      /**
       * An Inbound Wire Drawdown Payment Reversal object. This field will be present in
       * the JSON response if and only if `category` is equal to
       * `inbound_wire_drawdown_payment_reversal`.
       */
      inbound_wire_drawdown_payment_reversal: Source.InboundWireDrawdownPaymentReversal | null;

      /**
       * An Inbound Wire Reversal object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_reversal`.
       */
      inbound_wire_reversal: Source.InboundWireReversal | null;

      /**
       * An Inbound Wire Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_transfer`.
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

      /**
       * A Wire Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_rejection`.
       */
      wire_transfer_rejection: Source.WireTransferRejection | null;
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
        card_payment_id: string | null;

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
         * The identifier of the Transaction object created when the check was deposited.
         */
        transaction_id: string | null;

        /**
         * The identifier of the Check Transfer object that was deposited.
         */
        transfer_id: string;

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
         * - `rejected_by_increase` - The check was canceled by an Increase operator who
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
       * An Inbound ACH Transfer Intention object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_ach_transfer`.
       */
      export interface InboundACHTransfer {
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
         * The originator's identifier for the transfer receipient.
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
         * [used to correlate returns](https://increase.com/documentation/ach#returns).
         */
        trace_number: string;

        /**
         * The inbound ach transfer's identifier.
         */
        transfer_id: string;
      }

      /**
       * An Inbound Check object. This field will be present in the JSON response if and
       * only if `category` is equal to `inbound_check`.
       */
      export interface InboundCheck {
        /**
         * The amount in the minor unit of the destination account currency. For dollars,
         * for example, this is cents.
         */
        amount: number;

        /**
         * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
         * bank depositing this check. In some rare cases, this is not transmitted via
         * Check21 and the value will be null.
         */
        bank_of_first_deposit_routing_number: string | null;

        /**
         * The front image of the check. This is a black and white TIFF image file.
         */
        check_front_image_file_id: string | null;

        /**
         * The number of the check. This field is set by the depositing bank and can be
         * unreliable.
         */
        check_number: string | null;

        /**
         * The rear image of the check. This is a black and white TIFF image file.
         */
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
       * An Inbound International ACH Transfer object. This field will be present in the
       * JSON response if and only if `category` is equal to
       * `inbound_international_ach_transfer`.
       */
      export interface InboundInternationalACHTransfer {
        /**
         * The amount in the minor unit of the destination account currency. For dollars,
         * for example, this is cents.
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
      }

      /**
       * An Inbound Wire Drawdown Payment object. This field will be present in the JSON
       * response if and only if `category` is equal to `inbound_wire_drawdown_payment`.
       */
      export interface InboundWireDrawdownPayment {
        /**
         * The amount in the minor unit of the transaction's currency. For dollars, for
         * example, this is cents.
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
         * service and is helpful when debugging wires with the receiving bank.
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
      }

      /**
       * An Inbound Wire Drawdown Payment Reversal object. This field will be present in
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
         * The American Banking Association (ABA) routing number of the bank originating
         * the transfer.
         */
        originator_routing_number: string | null;

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
         * The ID for the Transaction associated with the transfer reversal.
         */
        transaction_id: string;

        /**
         * The ID for the Wire Transfer that is being reversed.
         */
        wire_transfer_id: string;
      }

      /**
       * An Inbound Wire Transfer object. This field will be present in the JSON response
       * if and only if `category` is equal to `inbound_wire_transfer`.
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

      /**
       * A Wire Transfer Rejection object. This field will be present in the JSON
       * response if and only if `category` is equal to `wire_transfer_rejection`.
       */
      export interface WireTransferRejection {
        /**
         * The identifier of the Wire Transfer that led to this Transaction.
         */
        transfer_id: string;
      }
    }
  }

  /**
   * The Inbound ACH Transfer.
   */
  export interface Transfer {
    /**
     * The inbound ach transfer's identifier.
     */
    id: string;

    /**
     * If your transfer is accepted, this will contain details of the acceptance.
     */
    acceptance: Transfer.Acceptance | null;

    /**
     * The identifier of the Account Number to which this transfer was sent.
     */
    account_number_id: string;

    /**
     * Additional information sent from the originator.
     */
    addenda: Transfer.Addenda | null;

    /**
     * The transfer amount in USD cents.
     */
    amount: number;

    /**
     * The time at which the transfer will be automatically resolved.
     */
    automatically_resolves_at: string;

    /**
     * If your transfer is declined, this will contain details of the decline.
     */
    decline: Transfer.Decline | null;

    /**
     * The direction of the transfer.
     *
     * - `credit` - Credit
     * - `debit` - Debit
     */
    direction: 'credit' | 'debit';

    /**
     * If you initiate a notification of change in response to the transfer, this will
     * contain its details.
     */
    notification_of_change: Transfer.NotificationOfChange | null;

    /**
     * The descriptive date of the transfer.
     */
    originator_company_descriptive_date: string | null;

    /**
     * The additional information included with the transfer.
     */
    originator_company_discretionary_data: string | null;

    /**
     * The description of the transfer.
     */
    originator_company_entry_description: string;

    /**
     * The id of the company that initiated the transfer.
     */
    originator_company_id: string;

    /**
     * The name of the company that initiated the transfer.
     */
    originator_company_name: string;

    /**
     * The American Banking Association (ABA) routing number of the bank originating
     * the transfer.
     */
    originator_routing_number: string;

    /**
     * The id of the receiver of the transfer.
     */
    receiver_id_number: string | null;

    /**
     * The name of the receiver of the transfer.
     */
    receiver_name: string | null;

    /**
     * The status of the transfer.
     *
     * - `pending` - The Inbound ACH Transfer is awaiting action, will transition
     *   automatically if no action is taken.
     * - `declined` - The Inbound ACH Transfer has been declined.
     * - `accepted` - The Inbound ACH Transfer is accepted.
     * - `returned` - The Inbound ACH Transfer has been returned.
     */
    status: 'pending' | 'declined' | 'accepted' | 'returned';

    /**
     * The trace number of the transfer.
     */
    trace_number: string;

    /**
     * If your transfer is returned, this will contain details of the return.
     */
    transfer_return: Transfer.TransferReturn | null;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `inbound_ach_transfer`.
     */
    type: 'inbound_ach_transfer';
  }

  export namespace Transfer {
    /**
     * If your transfer is accepted, this will contain details of the acceptance.
     */
    export interface Acceptance {
      /**
       * The time at which the transfer was accepted.
       */
      accepted_at: string;

      /**
       * The id of the transaction for the accepted transfer.
       */
      transaction_id: string;
    }

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

    /**
     * If your transfer is declined, this will contain details of the decline.
     */
    export interface Decline {
      /**
       * The time at which the transfer was declined.
       */
      declined_at: string;

      /**
       * The id of the transaction for the declined transfer.
       */
      declined_transaction_id: string;

      /**
       * The reason for the transfer decline.
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
    }

    /**
     * If you initiate a notification of change in response to the transfer, this will
     * contain its details.
     */
    export interface NotificationOfChange {
      /**
       * The new account number provided in the notification of change.
       */
      updated_account_number: string | null;

      /**
       * The new account number provided in the notification of change.
       */
      updated_routing_number: string | null;
    }

    /**
     * If your transfer is returned, this will contain details of the return.
     */
    export interface TransferReturn {
      /**
       * The reason for the transfer return.
       *
       * - `authorization_revoked_by_customer` - The customer no longer authorizes this
       *   transaction. The Nacha return code is R07.
       * - `payment_stopped` - The customer asked for the payment to be stopped. This
       *   reason is only allowed for debits. The Nacha return code is R08.
       * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
       *   customer advises that the debit was unauthorized. The Nacha return code is
       *   R10.
       * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
       *   payee is deceased. The Nacha return code is R14.
       * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
       *   Nacha return code is R15.
       * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
       *   reason is only allowed for credits. The Nacha return code is R23.
       * - `duplicate_entry` - The account holder identified this transaction as a
       *   duplicate. The Nacha return code is R24.
       * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
       *   authorizes this transaction. The Nacha return code is R29.
       */
      reason:
        | 'authorization_revoked_by_customer'
        | 'payment_stopped'
        | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
        | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
        | 'beneficiary_or_account_holder_deceased'
        | 'credit_entry_refused_by_receiver'
        | 'duplicate_entry'
        | 'corporate_customer_advised_not_authorized';

      /**
       * The time at which the transfer was returned.
       */
      returned_at: string;

      /**
       * The id of the transaction for the returned transfer.
       */
      transaction_id: string;
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

  /**
   * The time at which the transfer should be resolved. If not provided will resolve
   * immediately.
   */
  resolve_at?: string;
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
  export import ACHTransferSimulation = SimulationsACHTransfersAPI.ACHTransferSimulation;
  export import ACHTransferCreateInboundParams = SimulationsACHTransfersAPI.ACHTransferCreateInboundParams;
  export import ACHTransferReturnParams = SimulationsACHTransfersAPI.ACHTransferReturnParams;
}
