// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DeclinedTransactionsAPI from './declined-transactions';
import { Page, type PageParams } from '../pagination';

export class DeclinedTransactions extends APIResource {
  /**
   * Retrieve a Declined Transaction
   */
  retrieve(
    declinedTransactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeclinedTransaction> {
    return this._client.get(`/declined_transactions/${declinedTransactionId}`, options);
  }

  /**
   * List Declined Transactions
   */
  list(
    query?: DeclinedTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeclinedTransactionsPage, DeclinedTransaction>;
  list(options?: Core.RequestOptions): Core.PagePromise<DeclinedTransactionsPage, DeclinedTransaction>;
  list(
    query: DeclinedTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeclinedTransactionsPage, DeclinedTransaction> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/declined_transactions', DeclinedTransactionsPage, { query, ...options });
  }
}

export class DeclinedTransactionsPage extends Page<DeclinedTransaction> {}

/**
 * Declined Transactions are refused additions and removals of money from your bank
 * account. For example, Declined Transactions are caused when your Account has an
 * insufficient balance or your Limits are triggered.
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
   * - `lockbox` - A Lockbox.
   */
  route_type: 'account_number' | 'card' | 'lockbox' | null;

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
     * - `wire_decline` - Wire Decline: details will be under the `wire_decline`
     *   object.
     * - `check_deposit_rejection` - Check Deposit Rejection: details will be under the
     *   `check_deposit_rejection` object.
     * - `other` - The Declined Transaction was made for an undocumented or deprecated
     *   reason.
     */
    category:
      | 'ach_decline'
      | 'card_decline'
      | 'check_decline'
      | 'inbound_real_time_payments_transfer_decline'
      | 'wire_decline'
      | 'check_deposit_rejection'
      | 'other';

    /**
     * A Check Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `check_decline`.
     */
    check_decline: Source.CheckDecline | null;

    /**
     * A Check Deposit Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_rejection`.
     */
    check_deposit_rejection: Source.CheckDepositRejection | null;

    /**
     * An Inbound Real-Time Payments Transfer Decline object. This field will be
     * present in the JSON response if and only if `category` is equal to
     * `inbound_real_time_payments_transfer_decline`.
     */
    inbound_real_time_payments_transfer_decline: Source.InboundRealTimePaymentsTransferDecline | null;

    /**
     * If the category of this Transaction source is equal to `other`, this field will
     * contain an empty object, otherwise it will contain null.
     */
    other: unknown | null;

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
       * The identifier of the Inbound ACH Transfer object associated with this decline.
       */
      inbound_ach_transfer_id: string;

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
       * - `entity_not_active` - The account's entity is not active.
       * - `group_locked` - Your account is inactive.
       * - `insufficient_funds` - Your account contains insufficient funds.
       * - `transaction_not_allowed` - The transaction is not allowed per Increase's
       *   terms.
       * - `user_initiated` - Your integration declined this transfer via the API.
       */
      reason:
        | 'ach_route_canceled'
        | 'ach_route_disabled'
        | 'breaches_limit'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
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
       * Whether this authorization was approved by Increase, the card network through
       * stand-in processing, or the user through a real-time decision.
       *
       * - `user` - This object was actioned by the user through a real-time decision.
       * - `increase` - This object was actioned by Increase without user intervention.
       * - `network` - This object was actioned by the network, through stand-in
       *   processing.
       */
      actioner: 'user' | 'increase' | 'network';

      /**
       * The declined amount in the minor unit of the destination account currency. For
       * dollars, for example, this is cents.
       */
      amount: number;

      /**
       * The ID of the Card Payment this transaction belongs to.
       */
      card_payment_id: string;

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
       * The identifier of the declined transaction created for this Card Decline.
       */
      declined_transaction_id: string;

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
       * The merchant's postal code. For US merchants this is either a 5-digit or 9-digit
       * ZIP code, where the first 5 and last 4 are separated by a dash.
       */
      merchant_postal_code: string | null;

      /**
       * The state the merchant resides in.
       */
      merchant_state: string | null;

      /**
       * Fields specific to the `network`.
       */
      network_details: CardDecline.NetworkDetails;

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      network_identifiers: CardDecline.NetworkIdentifiers;

      /**
       * The risk score generated by the card network. For Visa this is the Visa Advanced
       * Authorization risk score, from 0 to 99, where 99 is the riskiest.
       */
      network_risk_score: number | null;

      /**
       * If the authorization was made in-person with a physical card, the Physical Card
       * that was used.
       */
      physical_card_id: string | null;

      /**
       * The declined amount in the minor unit of the transaction's presentment currency.
       */
      presentment_amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's presentment currency.
       */
      presentment_currency: string;

      /**
       * The processing category describes the intent behind the authorization, such as
       * whether it was used for bill payments or an automatic fuel dispenser.
       *
       * - `account_funding` - Account funding transactions are transactions used to
       *   e.g., fund an account or transfer funds between accounts.
       * - `automatic_fuel_dispenser` - Automatic fuel dispenser authorizations occur
       *   when a card is used at a gas pump, prior to the actual transaction amount
       *   being known. They are followed by an advice message that updates the amount of
       *   the pending transaction.
       * - `bill_payment` - A transaction used to pay a bill.
       * - `purchase` - A regular purchase.
       * - `quasi_cash` - Quasi-cash transactions represent purchases of items which may
       *   be convertible to cash.
       * - `refund` - A refund card authorization, sometimes referred to as a credit
       *   voucher authorization, where funds are credited to the cardholder.
       */
      processing_category:
        | 'account_funding'
        | 'automatic_fuel_dispenser'
        | 'bill_payment'
        | 'purchase'
        | 'quasi_cash'
        | 'refund';

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
       * - `card_expiration_mismatch` - The given expiration date did not match the
       *   card's value. Only applies when a CVV2 is present.
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
        | 'card_expiration_mismatch'
        | 'transaction_not_allowed'
        | 'breaches_limit'
        | 'webhook_declined'
        | 'webhook_timed_out'
        | 'declined_by_stand_in_processing'
        | 'invalid_physical_card'
        | 'missing_original_authorization'
        | 'suspected_fraud';

      /**
       * Fields related to verification of cardholder-provided values.
       */
      verification: CardDecline.Verification;
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

      /**
       * Network-specific identifiers for a specific request or transaction.
       */
      export interface NetworkIdentifiers {
        /**
         * A life-cycle identifier used across e.g., an authorization and a reversal.
         * Expected to be unique per acquirer within a window of time. For some card
         * networks the retrieval reference number includes the trace counter.
         */
        retrieval_reference_number: string | null;

        /**
         * A counter used to verify an individual authorization. Expected to be unique per
         * acquirer within a window of time.
         */
        trace_number: string | null;

        /**
         * A globally unique transaction identifier provided by the card network, used
         * across multiple life-cycle requests.
         */
        transaction_id: string | null;
      }

      /**
       * Fields related to verification of cardholder-provided values.
       */
      export interface Verification {
        /**
         * Fields related to verification of the Card Verification Code, a 3-digit code on
         * the back of the card.
         */
        card_verification_code: Verification.CardVerificationCode;

        /**
         * Cardholder address provided in the authorization request and the address on file
         * we verified it against.
         */
        cardholder_address: Verification.CardholderAddress;
      }

      export namespace Verification {
        /**
         * Fields related to verification of the Card Verification Code, a 3-digit code on
         * the back of the card.
         */
        export interface CardVerificationCode {
          /**
           * The result of verifying the Card Verification Code.
           *
           * - `not_checked` - No card verification code was provided in the authorization
           *   request.
           * - `match` - The card verification code matched the one on file.
           * - `no_match` - The card verification code did not match the one on file.
           */
          result: 'not_checked' | 'match' | 'no_match';
        }

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
           *   address was not verified.
           * - `postal_code_match_address_no_match` - Postal code matches, but the street
           *   address does not match.
           * - `postal_code_no_match_address_match` - Postal code does not match, but the
           *   street address matches.
           * - `match` - Postal code and street address match.
           * - `no_match` - Postal code and street address do not match.
           */
          result:
            | 'not_checked'
            | 'postal_code_match_address_not_checked'
            | 'postal_code_match_address_no_match'
            | 'postal_code_no_match_address_match'
            | 'match'
            | 'no_match';
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
       * The identifier of the API File object containing an image of the back of the
       * declined check.
       */
      back_image_file_id: string | null;

      /**
       * The identifier of the Check Transfer object associated with this decline.
       */
      check_transfer_id: string | null;

      /**
       * The identifier of the API File object containing an image of the front of the
       * declined check.
       */
      front_image_file_id: string | null;

      /**
       * The identifier of the Inbound Check Deposit object associated with this decline.
       */
      inbound_check_deposit_id: string | null;

      /**
       * Why the check was declined.
       *
       * - `ach_route_disabled` - The account number is disabled.
       * - `ach_route_canceled` - The account number is canceled.
       * - `altered_or_fictitious` - The deposited check was altered or fictitious.
       * - `breaches_limit` - The transaction would cause a limit to be exceeded.
       * - `endorsement_irregular` - The check was not endorsed by the payee.
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
       * - `no_account_number_found` - The account number on the check does not exist at
       *   Increase.
       * - `refer_to_image` - The check is not readable. Please refer to the image.
       * - `unable_to_process` - The check cannot be processed. This is rare: please
       *   contact support.
       * - `user_initiated` - Your integration declined this check via the API.
       */
      reason:
        | 'ach_route_disabled'
        | 'ach_route_canceled'
        | 'altered_or_fictitious'
        | 'breaches_limit'
        | 'endorsement_irregular'
        | 'entity_not_active'
        | 'group_locked'
        | 'insufficient_funds'
        | 'stop_payment_requested'
        | 'duplicate_presentment'
        | 'not_authorized'
        | 'amount_mismatch'
        | 'not_our_item'
        | 'no_account_number_found'
        | 'refer_to_image'
        | 'unable_to_process'
        | 'user_initiated';
    }

    /**
     * A Check Deposit Rejection object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_rejection`.
     */
    export interface CheckDepositRejection {
      /**
       * The rejected amount in the minor unit of check's currency. For dollars, for
       * example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the Check Deposit that was rejected.
       */
      check_deposit_id: string;

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
       * The identifier of the associated declined transaction.
       */
      declined_transaction_id: string;

      /**
       * Why the check deposit was rejected.
       *
       * - `incomplete_image` - The check's image is incomplete.
       * - `duplicate` - This is a duplicate check submission.
       * - `poor_image_quality` - This check has poor image quality.
       * - `incorrect_amount` - The check was deposited with the incorrect amount.
       * - `incorrect_recipient` - The check is made out to someone other than the
       *   account holder.
       * - `not_eligible_for_mobile_deposit` - This check was not eligible for mobile
       *   deposit.
       * - `missing_required_data_elements` - This check is missing at least one required
       *   field.
       * - `suspected_fraud` - This check is suspected to be fraudulent.
       * - `deposit_window_expired` - This check's deposit window has expired.
       * - `unknown` - The check was rejected for an unknown reason.
       */
      reason:
        | 'incomplete_image'
        | 'duplicate'
        | 'poor_image_quality'
        | 'incorrect_amount'
        | 'incorrect_recipient'
        | 'not_eligible_for_mobile_deposit'
        | 'missing_required_data_elements'
        | 'suspected_fraud'
        | 'deposit_window_expired'
        | 'unknown';

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the check deposit was rejected.
       */
      rejected_at: string;
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
     * A Wire Decline object. This field will be present in the JSON response if and
     * only if `category` is equal to `wire_decline`.
     */
    export interface WireDecline {
      /**
       * The identifier of the Inbound Wire Transfer that was declined.
       */
      inbound_wire_transfer_id: string;

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

export interface DeclinedTransactionListParams extends PageParams {
  /**
   * Filter Declined Transactions to ones belonging to the specified Account.
   */
  account_id?: string;

  category?: DeclinedTransactionListParams.Category;

  created_at?: DeclinedTransactionListParams.CreatedAt;

  /**
   * Filter Declined Transactions to those belonging to the specified route.
   */
  route_id?: string;
}

export namespace DeclinedTransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'ach_decline'
      | 'card_decline'
      | 'check_decline'
      | 'inbound_real_time_payments_transfer_decline'
      | 'wire_decline'
      | 'check_deposit_rejection'
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

export namespace DeclinedTransactions {
  export import DeclinedTransaction = DeclinedTransactionsAPI.DeclinedTransaction;
  export import DeclinedTransactionsPage = DeclinedTransactionsAPI.DeclinedTransactionsPage;
  export import DeclinedTransactionListParams = DeclinedTransactionsAPI.DeclinedTransactionListParams;
}
