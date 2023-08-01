// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as Transactions from 'increase/resources/transactions';
import * as API from './index';

export class CardRefunds extends APIResource {
  /**
   * Simulates refunding a card transaction. The full value of the original sandbox
   * transaction is refunded.
   */
  create(
    body: CardRefundCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Transactions.Transaction>> {
    return this.post('/simulations/card_refunds', { body, ...options });
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
  export import CardRefundCreateParams = API.CardRefundCreateParams;
}
