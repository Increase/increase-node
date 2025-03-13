// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionsAPI from '../transactions';

export class InterestPayments extends APIResource {
  /**
   * Simulates an interest payment to your account. In production, this happens
   * automatically on the first of each month.
   */
  create(
    body: InterestPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/interest_payments', { body, ...options });
  }
}

export interface InterestPaymentCreateParams {
  /**
   * The identifier of the Account the Interest Payment should be paid to is for.
   */
  account_id: string;

  /**
   * The interest amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The identifier of the Account the Interest accrued on. Defaults to `account_id`.
   */
  accrued_on_account_id?: string;

  /**
   * The end of the interest period. If not provided, defaults to the current time.
   */
  period_end?: string;

  /**
   * The start of the interest period. If not provided, defaults to the current time.
   */
  period_start?: string;
}

export declare namespace InterestPayments {
  export { type InterestPaymentCreateParams as InterestPaymentCreateParams };
}
