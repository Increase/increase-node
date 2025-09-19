// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class CardDetails extends APIResource {
  /**
   * Update a Card's Details
   *
   * @example
   * ```ts
   * const cardDetails = await client.cardDetails.update(
   *   'card_oubs0hwk5rn6knuecxg2',
   *   { pin: '1234' },
   * );
   * ```
   */
  update(
    cardId: string,
    body: CardDetailUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardDetails> {
    return this._client.patch(`/cards/${cardId}/details`, { body, ...options });
  }

  /**
   * Create an iframe URL for a Card to display the card details. More details about
   * styling and usage can be found in the
   * [documentation](/documentation/embedded-card-component).
   *
   * @example
   * ```ts
   * const cardIframeURL =
   *   await client.cardDetails.createDetailsIframe(
   *     'card_oubs0hwk5rn6knuecxg2',
   *   );
   * ```
   */
  createDetailsIframe(
    cardId: string,
    body: CardDetailCreateDetailsIframeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardIframeURL> {
    return this._client.post(`/cards/${cardId}/create_details_iframe`, { body, ...options });
  }

  /**
   * Sensitive details for a Card include the primary account number, expiry, card
   * verification code, and PIN.
   *
   * @example
   * ```ts
   * const cardDetails = await client.cardDetails.details(
   *   'card_oubs0hwk5rn6knuecxg2',
   * );
   * ```
   */
  details(cardId: string, options?: Core.RequestOptions): Core.APIPromise<CardDetails> {
    return this._client.get(`/cards/${cardId}/details`, options);
  }
}

/**
 * An object containing the sensitive details (card number, CVC, etc) for a Card.
 */
export interface CardDetails {
  /**
   * The identifier for the Card for which sensitive details have been returned.
   */
  card_id: string;

  /**
   * The month the card expires in M format (e.g., August is 8).
   */
  expiration_month: number;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: number;

  /**
   * The 4-digit PIN for the card, for use with ATMs.
   */
  pin: string;

  /**
   * The card number.
   */
  primary_account_number: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_details`.
   */
  type: 'card_details';

  /**
   * The three-digit verification code for the card. It's also known as the Card
   * Verification Code (CVC), the Card Verification Value (CVV), or the Card
   * Identification (CID).
   */
  verification_code: string;
}

/**
 * An object containing the iframe URL for a Card.
 */
export interface CardIframeURL {
  /**
   * The time the iframe URL will expire.
   */
  expires_at: string;

  /**
   * The iframe URL for the Card. Treat this as an opaque URL.
   */
  iframe_url: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_iframe_url`.
   */
  type: 'card_iframe_url';
}

export interface CardDetailUpdateParams {
  /**
   * The 4-digit PIN for the card, for use with ATMs.
   */
  pin: string;
}

export interface CardDetailCreateDetailsIframeParams {
  /**
   * The identifier of the Physical Card to retrieve details for.
   */
  physical_card_id?: string;
}

export declare namespace CardDetails {
  export {
    type CardDetails as CardDetails,
    type CardIframeURL as CardIframeURL,
    type CardDetailUpdateParams as CardDetailUpdateParams,
    type CardDetailCreateDetailsIframeParams as CardDetailCreateDetailsIframeParams,
  };
}
