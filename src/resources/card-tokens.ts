// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class CardTokens extends APIResource {
  /**
   * Retrieve a Card Token
   *
   * @example
   * ```ts
   * const cardToken = await client.cardTokens.retrieve(
   *   'outbound_card_token_zlt0ml6youq3q7vcdlg0',
   * );
   * ```
   */
  retrieve(cardTokenId: string, options?: Core.RequestOptions): Core.APIPromise<CardToken> {
    return this._client.get(`/card_tokens/${cardTokenId}`, options);
  }

  /**
   * List Card Tokens
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardToken of client.cardTokens.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: CardTokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardTokensPage, CardToken>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardTokensPage, CardToken>;
  list(
    query: CardTokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardTokensPage, CardToken> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/card_tokens', CardTokensPage, { query, ...options });
  }

  /**
   * The capabilities of a Card Token describe whether the card can be used for
   * specific operations, such as Card Push Transfers. The capabilities can change
   * over time based on the issuing bank's configuration of the card range.
   *
   * @example
   * ```ts
   * const cardTokenCapabilities =
   *   await client.cardTokens.capabilities(
   *     'outbound_card_token_zlt0ml6youq3q7vcdlg0',
   *   );
   * ```
   */
  capabilities(cardTokenId: string, options?: Core.RequestOptions): Core.APIPromise<CardTokenCapabilities> {
    return this._client.get(`/card_tokens/${cardTokenId}/capabilities`, options);
  }
}

export class CardTokensPage extends Page<CardToken> {}

/**
 * Card Tokens represent a tokenized card number that can be used for Card Push
 * Transfers and Card Validations.
 */
export interface CardToken {
  /**
   * The Card Token's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the card token was created.
   */
  created_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the card
   * expires.
   */
  expiration_date: string;

  /**
   * The last 4 digits of the card number.
   */
  last4: string;

  /**
   * The length of the card number.
   */
  length: number;

  /**
   * The prefix of the card number, usually 8 digits.
   */
  prefix: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_token`.
   */
  type: 'card_token';
}

/**
 * The capabilities of a Card Token describe whether the card can be used for
 * specific operations, such as Card Push Transfers. The capabilities can change
 * over time based on the issuing bank's configuration of the card range.
 */
export interface CardTokenCapabilities {
  /**
   * Each route represent a path e.g., a push transfer can take.
   */
  routes: Array<CardTokenCapabilities.Route>;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_token_capabilities`.
   */
  type: 'card_token_capabilities';
}

export namespace CardTokenCapabilities {
  export interface Route {
    /**
     * Whether you can push funds to the card using cross-border Card Push Transfers.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    cross_border_push_transfers: 'supported' | 'not_supported';

    /**
     * Whether you can push funds to the card using domestic Card Push Transfers.
     *
     * - `supported` - The capability is supported.
     * - `not_supported` - The capability is not supported.
     */
    domestic_push_transfers: 'supported' | 'not_supported';

    /**
     * The card network route the capabilities apply to.
     *
     * - `visa` - Visa and Interlink
     * - `mastercard` - Mastercard and Maestro
     */
    route: 'visa' | 'mastercard';
  }
}

export interface CardTokenListParams extends PageParams {
  created_at?: CardTokenListParams.CreatedAt;
}

export namespace CardTokenListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

CardTokens.CardTokensPage = CardTokensPage;

export declare namespace CardTokens {
  export {
    type CardToken as CardToken,
    type CardTokenCapabilities as CardTokenCapabilities,
    CardTokensPage as CardTokensPage,
    type CardTokenListParams as CardTokenListParams,
  };
}
