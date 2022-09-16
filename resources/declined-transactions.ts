// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class DeclinedTransactions extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<DeclinedTransaction>> {
    return this.get(`/declined_transactions/${id}`, options);
  }

  list(
    query?: DeclinedTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeclinedTransactionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<DeclinedTransactionsPage>;
  list(
    query: DeclinedTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeclinedTransactionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/declined_transactions', DeclinedTransactionsPage, { query, ...options });
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

export interface DeclinedTransactionListParams extends PageParams {
  /**
   * Filter Declined Transactions to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: DeclinedTransactionListParams.CreatedAt;

  /**
   * Filter Declined Transactions to those belonging to the specified route.
   */
  route_id?: string;
}

export namespace DeclinedTransactionListParams {
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
