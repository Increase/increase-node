// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardSettlementsAPI from './card-settlements';
import * as TransactionsAPI from '../transactions';

export class CardSettlements extends APIResource {
  /**
   * Simulates the settlement of an authorization by a card acquirer. After a card
   * authorization is created, the merchant will eventually send a settlement. This
   * simulates that event, which may occur many days after the purchase in
   * production. The amount settled can be different from the amount originally
   * authorized, for example, when adding a tip to a restaurant bill.
   */
  create(
    body: CardSettlementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionsAPI.Transaction> {
    return this._client.post('/simulations/card_settlements', { body, ...options });
  }
}

export interface CardSettlementCreateParams {
  /**
   * The identifier of the Card to create a settlement on.
   */
  card_id: string;

  /**
   * The identifier of the Pending Transaction for the Card Authorization you wish to
   * settle.
   */
  pending_transaction_id: string;

  /**
   * The amount to be settled. This defaults to the amount of the Pending Transaction
   * being settled.
   */
  amount?: number;
}

export namespace CardSettlements {
  export import CardSettlementCreateParams = CardSettlementsAPI.CardSettlementCreateParams;
}
