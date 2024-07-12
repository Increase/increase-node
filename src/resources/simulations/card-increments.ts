// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardIncrementsAPI from './card-increments';
import * as CardPaymentsAPI from '../card-payments';

export class CardIncrements extends APIResource {
  /**
   * Simulates the increment of an authorization by a card acquirer. An authorization
   * can be incremented multiple times.
   */
  create(
    body: CardIncrementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_increments', { body, ...options });
  }
}

export interface CardIncrementCreateParams {
  /**
   * The amount of the increment in minor units in the card authorization's currency.
   */
  amount: number;

  /**
   * The identifier of the Card Payment to create a increment on.
   */
  card_payment_id: string;

  /**
   * The identifier of the Event Subscription to use. If provided, will override the
   * default real time event subscription. Because you can only create one real time
   * decision event subscription, you can use this field to route events to any
   * specified event subscription for testing purposes.
   */
  event_subscription_id?: string;
}

export namespace CardIncrements {
  export import CardIncrementCreateParams = CardIncrementsAPI.CardIncrementCreateParams;
}
