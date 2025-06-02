// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionsAPI from '../transactions';

export class FeePayments extends APIResource {
  /**
   * A fee payment is how Increase charges you for technology fees incurred each
   * month. In production, these payments will be charged to your program's billing
   * account.
   *
   * @example
   * ```ts
   * const transaction =
   *   await client.simulations.feePayments.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: FeePaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/fee_payments', { body, ...options });
  }
}

export interface FeePaymentCreateParams {
  /**
   * The identifier of the Account to use as the billing account for the fee payment.
   */
  account_id: string;

  /**
   * The fee amount in cents. Must be positive.
   */
  amount: number;
}

export declare namespace FeePayments {
  export { type FeePaymentCreateParams as FeePaymentCreateParams };
}
