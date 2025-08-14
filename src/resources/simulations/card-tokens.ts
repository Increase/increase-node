// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardTokensAPI from '../card-tokens';

export class CardTokens extends APIResource {
  /**
   * Simulates tokenizing a card in the sandbox environment.
   *
   * @example
   * ```ts
   * const cardToken =
   *   await client.simulations.cardTokens.create();
   * ```
   */
  create(
    body: CardTokenCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardTokensAPI.CardToken> {
    return this._client.post('/simulations/card_tokens', { body, ...options });
  }
}

export interface CardTokenCreateParams {
  /**
   * The capabilities of the outbound card token.
   */
  capabilities?: Array<CardTokenCreateParams.Capability>;

  /**
   * The expiration date of the card.
   */
  expiration?: string;

  /**
   * The last 4 digits of the card number.
   */
  last4?: string;

  /**
   * The prefix of the card number, usually the first 8 digits.
   */
  prefix?: string;

  /**
   * The total length of the card number, including prefix and last4.
   */
  primary_account_number_length?: number;
}

export namespace CardTokenCreateParams {
  export interface Capability {
    /**
     * The cross-border push transfers capability.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    cross_border_push_transfers: 'supported' | 'not_supported';

    /**
     * The domestic push transfers capability.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    domestic_push_transfers: 'supported' | 'not_supported';

    /**
     * The route of the capability.
     *
     * - `visa` - Visa and Interlink
     * - `mastercard` - Mastercard and Maestro
     */
    route: 'visa' | 'mastercard';
  }
}

export declare namespace CardTokens {
  export { type CardTokenCreateParams as CardTokenCreateParams };
}
