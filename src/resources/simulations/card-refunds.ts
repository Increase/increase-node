// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as CardRefundsAPI from 'increase/resources/simulations/card-refunds';
import * as TransactionsAPI from 'increase/resources/transactions';

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

export namespace CardRefunds {
  export import CardRefundCreateParams = CardRefundsAPI.CardRefundCreateParams;
}
