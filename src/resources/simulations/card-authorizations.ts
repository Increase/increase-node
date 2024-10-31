// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
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
   * The identifier of a Card Payment with a `card_authentication` if you want to
   * simulate an authenticated authorization.
   */
  authenticated_card_payment_id?: string;

  /**
   * The identifier of the Card to be authorized.
   */
  card_id?: string;

  /**
   * Forces a card decline with a specific reason. No real time decision will be
   * sent.
   *
   * - `card_not_active` - The Card was not active.
   * - `physical_card_not_active` - The Physical Card was not active.
   * - `entity_not_active` - The account's entity was not active.
   * - `group_locked` - The account was inactive.
   * - `insufficient_funds` - The Card's Account did not have a sufficient available
   *   balance.
   * - `cvv2_mismatch` - The given CVV2 did not match the card's value.
   * - `card_expiration_mismatch` - The given expiration date did not match the
   *   card's value. Only applies when a CVV2 is present.
   * - `transaction_not_allowed` - The attempted card transaction is not allowed per
   *   Increase's terms.
   * - `breaches_limit` - The transaction was blocked by a Limit.
   * - `webhook_declined` - Your application declined the transaction via webhook.
   * - `webhook_timed_out` - Your application webhook did not respond without the
   *   required timeout.
   * - `declined_by_stand_in_processing` - Declined by stand-in processing.
   * - `invalid_physical_card` - The card read had an invalid CVV, dCVV, or
   *   authorization request cryptogram.
   * - `missing_original_authorization` - The original card authorization for this
   *   incremental authorization does not exist.
   * - `suspected_fraud` - The transaction was suspected to be fraudulent. Please
   *   reach out to support@increase.com for more information.
   */
  decline_reason?:
    | 'card_not_active'
    | 'physical_card_not_active'
    | 'entity_not_active'
    | 'group_locked'
    | 'insufficient_funds'
    | 'cvv2_mismatch'
    | 'card_expiration_mismatch'
    | 'transaction_not_allowed'
    | 'breaches_limit'
    | 'webhook_declined'
    | 'webhook_timed_out'
    | 'declined_by_stand_in_processing'
    | 'invalid_physical_card'
    | 'missing_original_authorization'
    | 'suspected_fraud';

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

export declare namespace CardAuthorizations {
  export {
    type CardAuthorizationCreateResponse as CardAuthorizationCreateResponse,
    type CardAuthorizationCreateParams as CardAuthorizationCreateParams,
  };
}
