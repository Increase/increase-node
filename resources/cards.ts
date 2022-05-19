// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Cards extends APIResource {
  create(body: CardCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.post('/cards', { body, ...options });
  }

  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.get(`/cards/${id}`, options);
  }

  update(id: string, body: CardUpdateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Card>> {
    return this.patch(`/cards/${id}`, { body, ...options });
  }

  list(query?: CardListParams, options?: Core.RequestOptions): Core.PagePromise<CardsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardsPage>;
  list(
    query: CardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/cards', CardsPage, { query, ...options });
  }

  retrieveSensitiveDetails(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardDetails>> {
    return this.get(`/cards/${id}/details`, options);
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
   * The month the card expires in MM format (e.g., August is 08).
   */
  expiration_month: string;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: string;

  /**
   * The card identifier.
   */
  id: string;

  /**
   * The last 4 digits of the Card's Primary Account Number.
   */
  last4: string;

  /**
   * This indicates if payments can be made with the card.
   */
  status: 'active' | 'disabled' | 'canceled' | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card`.
   */
  type: 'card';
}

export namespace Card {
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
   * The month the card expires in MM format (e.g., August is 08).
   */
  expiration_month: string;

  /**
   * The year the card expires in YYYY format (e.g., 2025).
   */
  expiration_year: string;

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
}

export namespace CardCreateParams {
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
   * The status to update the Card with.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export namespace CardUpdateParams {
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
}

export interface CardListParams extends PageParams {
  /**
   * Filter Cards to ones belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CardListParams.CreatedAt;
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
