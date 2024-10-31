// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardPaymentsAPI from '../card-payments';

export class CardAuthorizationExpirations extends APIResource {
  /**
   * Simulates expiring a Card Authorization immediately.
   */
  create(
    body: CardAuthorizationExpirationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_authorization_expirations', { body, ...options });
  }
}

export interface CardAuthorizationExpirationCreateParams {
  /**
   * The identifier of the Card Payment to expire.
   */
  card_payment_id: string;
}

export declare namespace CardAuthorizationExpirations {
  export { type CardAuthorizationExpirationCreateParams as CardAuthorizationExpirationCreateParams };
}
