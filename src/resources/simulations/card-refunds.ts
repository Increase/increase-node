// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionsAPI from '../transactions';

export class CardRefunds extends APIResource {
  /**
   * Simulates refunding a card transaction. The full value of the original sandbox
   * transaction is refunded.
   */
  create(
    body: CardRefundCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/card_refunds', { body, ...options });
  }
}

export interface CardRefundCreateParams {
  /**
   * The identifier for the Transaction to refund. The Transaction's source must have
   * a category of card_settlement.
   */
  transaction_id: string;
}

export declare namespace CardRefunds {
  export { type CardRefundCreateParams as CardRefundCreateParams };
}
