// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Transactions from '~/resources/transactions';

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
