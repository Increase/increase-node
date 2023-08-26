// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class DeclinedTransactions extends APIResource {
  /**
   * Retrieve a Declined Transaction
   */
  retrieve(
    declinedTransactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeclinedTransaction> {
    return this.get(`/declined_transactions/${declinedTransactionId}`, options);
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
    return this.getAPIList('/declined_transactions', DeclinedTransactionsPage, { query, ...options });
  }
}

export class DeclinedTransactionsPage extends Page<DeclinedTransaction> {}
// alias so we can export it in the namespace
type _DeclinedTransactionsPage = DeclinedTransactionsPage;

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
      | 'international_ach_decline'
      | 'wire_decline'
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
  export import DeclinedTransaction = API.DeclinedTransaction;
  export type DeclinedTransactionsPage = _DeclinedTransactionsPage;
  export import DeclinedTransactionListParams = API.DeclinedTransactionListParams;
}
