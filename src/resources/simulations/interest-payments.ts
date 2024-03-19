// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as InterestPaymentsAPI from 'increase/resources/simulations/interest-payments';
import * as TransactionsAPI from 'increase/resources/transactions';

export class InterestPayments extends APIResource {
  /**
   * Simulates an interest payment to your account. In production, this happens
   * automatically on the first of each month.
   */
  create(
    body: InterestPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/interest_payment', { body, ...options });
  }
}

export interface InterestPaymentCreateParams {
  /**
   * The identifier of the Account Number the Interest Payment is for.
   */
  account_id: string;

  /**
   * The interest amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The end of the interest period. If not provided, defaults to the current time.
   */
  period_end?: string;

  /**
   * The start of the interest period. If not provided, defaults to the current time.
   */
  period_start?: string;
}

export namespace InterestPayments {
  export import InterestPaymentCreateParams = InterestPaymentsAPI.InterestPaymentCreateParams;
}
