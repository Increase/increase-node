// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as DigitalWalletTokensAPI from 'increase/resources/digital-wallet-tokens';
import { Page, type PageParams } from 'increase/pagination';

export class DigitalWalletTokens extends APIResource {
  /**
   * Retrieve a Digital Wallet Token
   */
  retrieve(digitalWalletTokenId: string, options?: Core.RequestOptions): Core.APIPromise<DigitalWalletToken> {
    return this.get(`/digital_wallet_tokens/${digitalWalletTokenId}`, options);
  }

  /**
   * List Digital Wallet Tokens
   */
  list(
    query?: DigitalWalletTokenListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DigitalWalletTokensPage, DigitalWalletToken>;
  list(options?: Core.RequestOptions): Core.PagePromise<DigitalWalletTokensPage, DigitalWalletToken>;
  list(
    query: DigitalWalletTokenListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DigitalWalletTokensPage, DigitalWalletToken> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/digital_wallet_tokens', DigitalWalletTokensPage, { query, ...options });
  }
}

export class DigitalWalletTokensPage extends Page<DigitalWalletToken> {}

/**
 * A Digital Wallet Token is created when a user adds a Card to their Apple Pay or
 * Google Pay app. The Digital Wallet Token can be used for purchases just like a
 * Card.
 */
export interface DigitalWalletToken {
  /**
   * The Digital Wallet Token identifier.
   */
  id: string;

  /**
   * The identifier for the Card this Digital Wallet Token belongs to.
   */
  card_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card was created.
   */
  created_at: string;

  /**
   * This indicates if payments can be made with the Digital Wallet Token.
   *
   * - `active` - The digital wallet token is active.
   * - `inactive` - The digital wallet token has been created but not successfully
   *   activated via two-factor authentication yet.
   * - `suspended` - The digital wallet token has been temporarily paused.
   * - `deactivated` - The digital wallet token has been permanently canceled.
   */
  status: 'active' | 'inactive' | 'suspended' | 'deactivated';

  /**
   * The digital wallet app being used.
   *
   * - `apple_pay` - Apple Pay
   * - `google_pay` - Google Pay
   * - `unknown` - Unknown
   */
  token_requestor: 'apple_pay' | 'google_pay' | 'unknown';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `digital_wallet_token`.
   */
  type: 'digital_wallet_token';
}

export interface DigitalWalletTokenListParams extends PageParams {
  /**
   * Filter Digital Wallet Tokens to ones belonging to the specified Card.
   */
  card_id?: string;

  created_at?: DigitalWalletTokenListParams.CreatedAt;
}

export namespace DigitalWalletTokenListParams {
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

export namespace DigitalWalletTokens {
  export type DigitalWalletToken = DigitalWalletTokensAPI.DigitalWalletToken;
  export import DigitalWalletTokensPage = DigitalWalletTokensAPI.DigitalWalletTokensPage;
  export type DigitalWalletTokenListParams = DigitalWalletTokensAPI.DigitalWalletTokenListParams;
}
