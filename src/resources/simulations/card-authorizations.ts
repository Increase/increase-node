// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardAuthorizationsAPI from './card-authorizations';
import * as DeclinedTransactionsAPI from '../declined-transactions';
import * as PendingTransactionsAPI from '../pending-transactions';

export class CardAuthorizations extends APIResource {
  /**
   * Simulates a purchase authorization on a [Card](#cards). Depending on the balance
   * available to the card and the `amount` submitted, the authorization activity
   * will result in a [Pending Transaction](#pending-transactions) of type
   * `card_authorization` or a [Declined Transaction](#declined-transactions) of type
   * `card_decline`. You can pass either a Card id or a
   * [Digital Wallet Token](#digital-wallet-tokens) id to simulate the two different
   * ways purchases can be made.
   */
  create(
    body: CardAuthorizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardAuthorizationCreateResponse> {
    return this._client.post('/simulations/card_authorizations', { body, ...options });
  }
}

/**
 * The results of a Card Authorization simulation.
 */
export interface CardAuthorizationCreateResponse {
  /**
   * If the authorization attempt fails, this will contain the resulting
   * [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of `category: card_decline`.
   */
  declined_transaction: DeclinedTransactionsAPI.DeclinedTransaction | null;

  /**
   * If the authorization attempt succeeds, this will contain the resulting Pending
   * Transaction object. The Pending Transaction's `source` will be of
   * `category: card_authorization`.
   */
  pending_transaction: PendingTransactionsAPI.PendingTransaction | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_card_authorization_simulation_result`.
   */
  type: 'inbound_card_authorization_simulation_result';
}

export interface CardAuthorizationCreateParams {
  /**
   * The authorization amount in cents.
   */
  amount: number;

  /**
   * The identifier of the Card to be authorized.
   */
  card_id?: string;

  /**
   * The identifier of the Digital Wallet Token to be authorized.
   */
  digital_wallet_token_id?: string;

  /**
   * The direction describes the direction the funds will move, either from the
   * cardholder to the merchant or from the merchant to the cardholder.
   *
   * - `settlement` - A regular card authorization where funds are debited from the
   *   cardholder.
   * - `refund` - A refund card authorization, sometimes referred to as a credit
   *   voucher authorization, where funds are credited to the cardholder.
   */
  direction?: 'settlement' | 'refund';

  /**
   * The identifier of the Event Subscription to use. If provided, will override the
   * default real time event subscription. Because you can only create one real time
   * decision event subscription, you can use this field to route events to any
   * specified event subscription for testing purposes.
   */
  event_subscription_id?: string;

  /**
   * The merchant identifier (commonly abbreviated as MID) of the merchant the card
   * is transacting with.
   */
  merchant_acceptor_id?: string;

  /**
   * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
   * card is transacting with.
   */
  merchant_category_code?: string;

  /**
   * The city the merchant resides in.
   */
  merchant_city?: string;

  /**
   * The country the merchant resides in.
   */
  merchant_country?: string;

  /**
   * The merchant descriptor of the merchant the card is transacting with.
   */
  merchant_descriptor?: string;

  /**
   * The identifier of the Physical Card to be authorized.
   */
  physical_card_id?: string;
}

export namespace CardAuthorizations {
  export import CardAuthorizationCreateResponse = CardAuthorizationsAPI.CardAuthorizationCreateResponse;
  export import CardAuthorizationCreateParams = CardAuthorizationsAPI.CardAuthorizationCreateParams;
}
