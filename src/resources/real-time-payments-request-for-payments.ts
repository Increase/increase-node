// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as RealTimePaymentsRequestForPaymentsAPI from 'increase/resources/real-time-payments-request-for-payments';
import { Page, type PageParams } from 'increase/pagination';

export class RealTimePaymentsRequestForPayments extends APIResource {
  /**
   * Create a Real-Time Payments Request for Payment
   */
  create(
    body: RealTimePaymentsRequestForPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimePaymentsRequestForPayment> {
    return this._client.post('/real_time_payments_request_for_payments', { body, ...options });
  }

  /**
   * Retrieve a Real-Time Payments Request for Payment
   */
  retrieve(
    requestForPaymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimePaymentsRequestForPayment> {
    return this._client.get(`/real_time_payments_request_for_payments/${requestForPaymentId}`, options);
  }

  /**
   * List Real-Time Payments Request for Payments
   */
  list(
    query?: RealTimePaymentsRequestForPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsRequestForPaymentsPage, RealTimePaymentsRequestForPayment>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsRequestForPaymentsPage, RealTimePaymentsRequestForPayment>;
  list(
    query: RealTimePaymentsRequestForPaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RealTimePaymentsRequestForPaymentsPage, RealTimePaymentsRequestForPayment> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList(
      '/real_time_payments_request_for_payments',
      RealTimePaymentsRequestForPaymentsPage,
      { query, ...options },
    );
  }
}

export class RealTimePaymentsRequestForPaymentsPage extends Page<RealTimePaymentsRequestForPayment> {}

/**
 * Real-Time Payments transfers move funds, within seconds, between your Increase
 * account and any other account on the Real-Time Payments network. A request for
 * payment is a request to the receiver to send funds to your account. The
 * permitted uses of Requests For Payment are limited by the Real-Time Payments
 * network to business-to-business payments and transfers between two accounts at
 * different banks owned by the same individual. Please contact
 * [support@increase.com](mailto:support@increase.com) to enable this API for your
 * team.
 */
export interface RealTimePaymentsRequestForPayment {
  /**
   * The Real-Time Payments Request for Payment's identifier.
   */
  id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the request for payment was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For real-time payments transfers this is always equal to `USD`.
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
   * The name of the recipient the sender is requesting a transfer from.
   */
  debtor_name: string;

  /**
   * The Account Number in which a successful transfer will arrive.
   */
  destination_account_number_id: string;

  /**
   * The expiration time for this request, in UTC. The requestee will not be able to
   * pay after this date.
   */
  expires_at: string;

  /**
   * The transaction that fulfilled this request.
   */
  fulfillment_transaction_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the request for payment is refused by the destination financial institution
   * or the receiving customer, this will contain supplemental details.
   */
  refusal: RealTimePaymentsRequestForPayment.Refusal | null;

  /**
   * If the request for payment is rejected by Real-Time Payments or the destination
   * financial institution, this will contain supplemental details.
   */
  rejection: RealTimePaymentsRequestForPayment.Rejection | null;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  remittance_information: string;

  /**
   * The account number the request is sent to.
   */
  source_account_number: string;

  /**
   * The receiver's American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  source_routing_number: string;

  /**
   * The lifecycle status of the request for payment.
   *
   * - `pending_submission` - The request for payment is queued to be submitted to
   *   Real-Time Payments.
   * - `pending_response` - The request for payment has been submitted and is pending
   *   a response from Real-Time Payments.
   * - `rejected` - The request for payment was rejected by the network or the
   *   recipient.
   * - `accepted` - The request for payment was accepted by the recipient but has not
   *   yet been paid.
   * - `refused` - The request for payment was refused by the recipient.
   * - `fulfilled` - The request for payment was fulfilled by the receiver.
   */
  status: 'pending_submission' | 'pending_response' | 'rejected' | 'accepted' | 'refused' | 'fulfilled';

  /**
   * After the request for payment is submitted to Real-Time Payments, this will
   * contain supplemental details.
   */
  submission: RealTimePaymentsRequestForPayment.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_payments_request_for_payment`.
   */
  type: 'real_time_payments_request_for_payment';
}

export namespace RealTimePaymentsRequestForPayment {
  /**
   * If the request for payment is refused by the destination financial institution
   * or the receiving customer, this will contain supplemental details.
   */
  export interface Refusal {
    /**
     * The reason the request for payment was refused as provided by the recipient bank
     * or the customer.
     *
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the Real-Time Payments reason code
     *   `AC06`.
     * - `transaction_forbidden` - Real-Time Payments transfers are not allowed to the
     *   destination account. Corresponds to the Real-Time Payments reason code `AG01`.
     * - `transaction_type_not_supported` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `AG03`.
     * - `unexpected_amount` - The amount of the transfer is different than expected by
     *   the recipient. Corresponds to the Real-Time Payments reason code `AM09`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the Real-Time Payments reason
     *   code `AM14`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the Real-Time Payments reason code `BE07`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the Real-Time Payments reason code `BE04`.
     * - `creditor_identifier_incorrect` - Creditor identifier incorrect. Corresponds
     *   to the Real-Time Payments reason code `CH11`.
     * - `requested_by_customer` - The customer refused the request. Corresponds to the
     *   Real-Time Payments reason code `CUST`.
     * - `order_rejected` - The order was rejected. Corresponds to the Real-Time
     *   Payments reason code `DS04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the Real-Time Payments reason code `MD07`.
     * - `customer_has_opted_out` - The customer has opted out of receiving requests
     *   for payments from this creditor. Corresponds to the Real-Time Payments reason
     *   code `SL12`.
     * - `other` - Some other error or issue has occurred.
     */
    refusal_reason_code:
      | 'account_blocked'
      | 'transaction_forbidden'
      | 'transaction_type_not_supported'
      | 'unexpected_amount'
      | 'amount_exceeds_bank_limits'
      | 'invalid_debtor_address'
      | 'invalid_creditor_address'
      | 'creditor_identifier_incorrect'
      | 'requested_by_customer'
      | 'order_rejected'
      | 'end_customer_deceased'
      | 'customer_has_opted_out'
      | 'other';
  }

  /**
   * If the request for payment is rejected by Real-Time Payments or the destination
   * financial institution, this will contain supplemental details.
   */
  export interface Rejection {
    /**
     * The reason the request for payment was rejected as provided by the recipient
     * bank or the Real-Time Payments network.
     *
     * - `account_closed` - The destination account is closed. Corresponds to the
     *   Real-Time Payments reason code `AC04`.
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the Real-Time Payments reason code
     *   `AC06`.
     * - `invalid_creditor_account_type` - The destination account is ineligible to
     *   receive Real-Time Payments transfers. Corresponds to the Real-Time Payments
     *   reason code `AC14`.
     * - `invalid_creditor_account_number` - The destination account does not exist.
     *   Corresponds to the Real-Time Payments reason code `AC03`.
     * - `invalid_creditor_financial_institution_identifier` - The destination routing
     *   number is invalid. Corresponds to the Real-Time Payments reason code `RC04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the Real-Time Payments reason code `MD07`.
     * - `narrative` - The reason is provided as narrative information in the
     *   additional information field.
     * - `transaction_forbidden` - Real-Time Payments transfers are not allowed to the
     *   destination account. Corresponds to the Real-Time Payments reason code `AG01`.
     * - `transaction_type_not_supported` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `AG03`.
     * - `unexpected_amount` - The amount of the transfer is different than expected by
     *   the recipient. Corresponds to the Real-Time Payments reason code `AM09`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the Real-Time Payments reason
     *   code `AM14`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the Real-Time Payments reason code `BE04`.
     * - `unknown_end_customer` - The specified creditor is unknown. Corresponds to the
     *   Real-Time Payments reason code `BE06`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the Real-Time Payments reason code `BE07`.
     * - `timeout` - There was a timeout processing the transfer. Corresponds to the
     *   Real-Time Payments reason code `DS24`.
     * - `unsupported_message_for_recipient` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `NOAT`.
     * - `recipient_connection_not_available` - The destination financial institution
     *   is currently not connected to Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code `9912`.
     * - `real_time_payments_suspended` - Real-Time Payments is currently unavailable.
     *   Corresponds to the Real-Time Payments reason code `9948`.
     * - `instructed_agent_signed_off` - The destination financial institution is
     *   currently signed off of Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code `9910`.
     * - `processing_error` - The transfer was rejected due to an internal Increase
     *   issue. We have been notified.
     * - `other` - Some other error or issue has occurred.
     */
    reject_reason_code:
      | 'account_closed'
      | 'account_blocked'
      | 'invalid_creditor_account_type'
      | 'invalid_creditor_account_number'
      | 'invalid_creditor_financial_institution_identifier'
      | 'end_customer_deceased'
      | 'narrative'
      | 'transaction_forbidden'
      | 'transaction_type_not_supported'
      | 'unexpected_amount'
      | 'amount_exceeds_bank_limits'
      | 'invalid_creditor_address'
      | 'unknown_end_customer'
      | 'invalid_debtor_address'
      | 'timeout'
      | 'unsupported_message_for_recipient'
      | 'recipient_connection_not_available'
      | 'real_time_payments_suspended'
      | 'instructed_agent_signed_off'
      | 'processing_error'
      | 'other';
  }

  /**
   * After the request for payment is submitted to Real-Time Payments, this will
   * contain supplemental details.
   */
  export interface Submission {
    /**
     * The Real-Time Payments payment information identification of the request.
     */
    payment_information_identification: string;
  }
}

export interface RealTimePaymentsRequestForPaymentCreateParams {
  /**
   * The requested amount in USD cents. Must be positive.
   */
  amount: number;

  /**
   * Details of the person being requested to pay.
   */
  debtor: RealTimePaymentsRequestForPaymentCreateParams.Debtor;

  /**
   * The identifier of the Account Number where the funds will land.
   */
  destination_account_number_id: string;

  /**
   * The expiration time for this request, in UTC. The requestee will not be able to
   * pay after this date.
   */
  expires_at: string;

  /**
   * Unstructured information that will show on the requestee's bank statement.
   */
  remittance_information: string;

  /**
   * The account number the funds will be requested from.
   */
  source_account_number: string;

  /**
   * The requestee's American Bankers' Association (ABA) Routing Transit Number
   * (RTN).
   */
  source_routing_number: string;
}

export namespace RealTimePaymentsRequestForPaymentCreateParams {
  /**
   * Details of the person being requested to pay.
   */
  export interface Debtor {
    /**
     * Address of the debtor.
     */
    address: Debtor.Address;

    /**
     * The name of the debtor.
     */
    name: string;
  }

  export namespace Debtor {
    /**
     * Address of the debtor.
     */
    export interface Address {
      /**
       * The ISO 3166, Alpha-2 country code.
       */
      country: string;

      /**
       * The town or city.
       */
      city?: string;

      /**
       * The postal code or zip.
       */
      post_code?: string;

      /**
       * The street name without the street number.
       */
      street_name?: string;
    }
  }
}

export interface RealTimePaymentsRequestForPaymentListParams extends PageParams {
  /**
   * Filter Real-Time Payments Request for Payments to those destined to the
   * specified Account.
   */
  account_id?: string;

  created_at?: RealTimePaymentsRequestForPaymentListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace RealTimePaymentsRequestForPaymentListParams {
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

export namespace RealTimePaymentsRequestForPayments {
  export import RealTimePaymentsRequestForPayment = RealTimePaymentsRequestForPaymentsAPI.RealTimePaymentsRequestForPayment;
  export import RealTimePaymentsRequestForPaymentsPage = RealTimePaymentsRequestForPaymentsAPI.RealTimePaymentsRequestForPaymentsPage;
  export import RealTimePaymentsRequestForPaymentCreateParams = RealTimePaymentsRequestForPaymentsAPI.RealTimePaymentsRequestForPaymentCreateParams;
  export import RealTimePaymentsRequestForPaymentListParams = RealTimePaymentsRequestForPaymentsAPI.RealTimePaymentsRequestForPaymentListParams;
}
