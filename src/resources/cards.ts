// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as CardsAPI from './cards';
import { Page, type PageParams } from '../pagination';

export class Cards extends APIResource {
  /**
   * Create a Card
   */
  create(body: CardCreateParams, options?: Core.RequestOptions): Core.APIPromise<Card> {
    return this._client.post('/cards', { body, ...options });
  }

  /**
   * Retrieve a Card
   */
  retrieve(cardId: string, options?: Core.RequestOptions): Core.APIPromise<Card> {
    return this._client.get(`/cards/${cardId}`, options);
  }

  /**
   * Update a Card
   */
  update(cardId: string, body: CardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Card> {
    return this._client.patch(`/cards/${cardId}`, { body, ...options });
  }

  /**
   * List Cards
   */
  list(query?: CardListParams, options?: Core.RequestOptions): Core.PagePromise<CardsPage, Card>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsPage, Card>;
  list(
    query: CardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPage, Card> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/cards', CardsPage, { query, ...options });
  }

  /**
   * Retrieve sensitive details for a Card
   */
  retrieveSensitiveDetails(cardId: string, options?: Core.RequestOptions): Core.APIPromise<CardDetails> {
    return this._client.get(`/cards/${cardId}/details`, options);
  }
}

export class CardsPage extends Page<Card> {}

/**
 * Cards are commercial credit cards. They'll immediately work for online purchases
 * after you create them. All cards maintain a credit limit of 100% of the
 * Account’s available balance at the time of transaction. Funds are deducted from
 * the Account upon transaction settlement.
 */
export interface Card {
  /**
   * The card identifier.
   */
  id: string;

  /**
   * The identifier for the account this card belongs to.
   */
  account_id: string;

  /**
   * The Card's billing address.
   */
  billing_address: Card.BillingAddress;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card was created.
   */
  created_at: string;

  /**
   * The card's description for display purposes.
   */
  description: string | null;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  digital_wallet: Card.DigitalWallet | null;

  /**
   * The identifier for the entity associated with this card.
   */
  entity_id: string | null;

  /**
   * The month the card expires in M format (e.g., August is 8).
   */
  expiration_month: number;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: number;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The last 4 digits of the Card's Primary Account Number.
   */
  last4: string;

  /**
   * This indicates if payments can be made with the card.
   *
   * - `active` - The card is active.
   * - `disabled` - The card is temporarily disabled.
   * - `canceled` - The card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card`.
   */
  type: 'card';
}

export namespace Card {
  /**
   * The Card's billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string | null;

    /**
     * The first line of the billing address.
     */
    line1: string | null;

    /**
     * The second line of the billing address.
     */
    line2: string | null;

    /**
     * The postal code of the billing address.
     */
    postal_code: string | null;

    /**
     * The US state of the billing address.
     */
    state: string | null;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card. Card profiles may also
     * be assigned at the program level.
     */
    digital_card_profile_id: string | null;

    /**
     * An email address that can be used to verify the cardholder via one-time passcode
     * over email.
     */
    email: string | null;

    /**
     * A phone number that can be used to verify the cardholder via one-time passcode
     * over SMS.
     */
    phone: string | null;
  }
}

/**
 * An object containing the sensitive details (card number, cvc, etc) for a Card.
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

export interface CardCreateParams {
  /**
   * The Account the card should belong to.
   */
  account_id: string;

  /**
   * The card's billing address.
   */
  billing_address?: CardCreateParams.BillingAddress;

  /**
   * The description you choose to give the card.
   */
  description?: string;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. To add the card to a digital wallet, you may supply an email or phone
   * number with this request. Otherwise, subscribe and then action a Real Time
   * Decision with the category `digital_wallet_token_requested` or
   * `digital_wallet_authentication_requested`.
   */
  digital_wallet?: CardCreateParams.DigitalWallet;

  /**
   * The Entity the card belongs to. You only need to supply this in rare situations
   * when the card is not for the Account holder.
   */
  entity_id?: string;
}

export namespace CardCreateParams {
  /**
   * The card's billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string;

    /**
     * The first line of the billing address.
     */
    line1: string;

    /**
     * The postal code of the billing address.
     */
    postal_code: string;

    /**
     * The US state of the billing address.
     */
    state: string;

    /**
     * The second line of the billing address.
     */
    line2?: string;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. To add the card to a digital wallet, you may supply an email or phone
   * number with this request. Otherwise, subscribe and then action a Real Time
   * Decision with the category `digital_wallet_token_requested` or
   * `digital_wallet_authentication_requested`.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card.
     */
    digital_card_profile_id?: string;

    /**
     * An email address that can be used to contact and verify the cardholder via
     * one-time passcode over email.
     */
    email?: string;

    /**
     * A phone number that can be used to contact and verify the cardholder via
     * one-time passcode over SMS.
     */
    phone?: string;
  }
}

export interface CardUpdateParams {
  /**
   * The card's updated billing address.
   */
  billing_address?: CardUpdateParams.BillingAddress;

  /**
   * The description you choose to give the card.
   */
  description?: string;

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  digital_wallet?: CardUpdateParams.DigitalWallet;

  /**
   * The Entity the card belongs to. You only need to supply this in rare situations
   * when the card is not for the Account holder.
   */
  entity_id?: string;

  /**
   * The status to update the Card with.
   *
   * - `active` - The card is active.
   * - `disabled` - The card is temporarily disabled.
   * - `canceled` - The card is permanently canceled.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export namespace CardUpdateParams {
  /**
   * The card's updated billing address.
   */
  export interface BillingAddress {
    /**
     * The city of the billing address.
     */
    city: string;

    /**
     * The first line of the billing address.
     */
    line1: string;

    /**
     * The postal code of the billing address.
     */
    postal_code: string;

    /**
     * The US state of the billing address.
     */
    state: string;

    /**
     * The second line of the billing address.
     */
    line2?: string;
  }

  /**
   * The contact information used in the two-factor steps for digital wallet card
   * creation. At least one field must be present to complete the digital wallet
   * steps.
   */
  export interface DigitalWallet {
    /**
     * The digital card profile assigned to this digital card.
     */
    digital_card_profile_id?: string;

    /**
     * An email address that can be used to verify the cardholder via one-time passcode
     * over email.
     */
    email?: string;

    /**
     * A phone number that can be used to verify the cardholder via one-time passcode
     * over SMS.
     */
    phone?: string;
  }
}

export interface CardListParams extends PageParams {
  /**
   * Filter Cards to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CardListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace CardListParams {
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

export namespace Cards {
  export import Card = CardsAPI.Card;
  export import CardDetails = CardsAPI.CardDetails;
  export import CardsPage = CardsAPI.CardsPage;
  export import CardCreateParams = CardsAPI.CardCreateParams;
  export import CardUpdateParams = CardsAPI.CardUpdateParams;
  export import CardListParams = CardsAPI.CardListParams;
}
