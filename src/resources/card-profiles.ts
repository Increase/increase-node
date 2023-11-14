// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as CardProfilesAPI from 'increase/resources/card-profiles';
import { Page, type PageParams } from 'increase/pagination';

export class CardProfiles extends APIResource {
  /**
   * Create a Card Profile
   */
  create(body: CardProfileCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardProfile> {
    return this._client.post('/card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Card Profile
   */
  retrieve(cardProfileId: string, options?: Core.RequestOptions): Core.APIPromise<CardProfile> {
    return this._client.get(`/card_profiles/${cardProfileId}`, options);
  }

  /**
   * List Card Profiles
   */
  list(
    query?: CardProfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardProfilesPage, CardProfile>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardProfilesPage, CardProfile>;
  list(
    query: CardProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardProfilesPage, CardProfile> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/card_profiles', CardProfilesPage, { query, ...options });
  }

  /**
   * Archive an Card Profile
   */
  archive(cardProfileId: string, options?: Core.RequestOptions): Core.APIPromise<CardProfile> {
    return this._client.post(`/card_profiles/${cardProfileId}/archive`, options);
  }
}

export class CardProfilesPage extends Page<CardProfile> {}

/**
 * This contains artwork and metadata relating to a Card's appearance in digital
 * wallet apps like Apple Pay and Google Pay. For more information, see our guide
 * on [digital card artwork](https://increase.com/documentation/card-art).
 */
export interface CardProfile {
  /**
   * The Card Profile identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * How Cards should appear in digital wallets such as Apple Pay. Different wallets
   * will use these values to render card artwork appropriately for their app.
   */
  digital_wallets: CardProfile.DigitalWallets;

  /**
   * Whether this Card Profile is the default for all cards in its Increase group.
   */
  is_default: boolean;

  /**
   * How physical cards should be designed and shipped.
   */
  physical_cards: CardProfile.PhysicalCards | null;

  /**
   * The status of the Card Profile.
   *
   * - `pending` - The Card Profile is awaiting review from Increase and/or
   *   processing by card networks.
   * - `rejected` - There is an issue with the Card Profile preventing it from use.
   * - `active` - The Card Profile can be assigned to Cards.
   * - `archived` - The Card Profile is no longer in use.
   */
  status: 'pending' | 'rejected' | 'active' | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_profile`.
   */
  type: 'card_profile';
}

export namespace CardProfile {
  /**
   * How Cards should appear in digital wallets such as Apple Pay. Different wallets
   * will use these values to render card artwork appropriately for their app.
   */
  export interface DigitalWallets {
    /**
     * The identifier of the File containing the card's icon image.
     */
    app_icon_file_id: string;

    /**
     * The identifier of the File containing the card's front image.
     */
    background_image_file_id: string;

    /**
     * A user-facing description for the card itself.
     */
    card_description: string;

    /**
     * An email address the user can contact to receive support for their card.
     */
    contact_email: string | null;

    /**
     * A phone number the user can contact to receive support for their card.
     */
    contact_phone: string | null;

    /**
     * A website the user can visit to view and receive support for their card.
     */
    contact_website: string | null;

    /**
     * A user-facing description for whoever is issuing the card.
     */
    issuer_name: string;

    /**
     * The Card's text color, specified as an RGB triple.
     */
    text_color: DigitalWallets.TextColor;
  }

  export namespace DigitalWallets {
    /**
     * The Card's text color, specified as an RGB triple.
     */
    export interface TextColor {
      /**
       * The value of the blue channel in the RGB color.
       */
      blue: number;

      /**
       * The value of the green channel in the RGB color.
       */
      green: number;

      /**
       * The value of the red channel in the RGB color.
       */
      red: number;
    }
  }

  /**
   * How physical cards should be designed and shipped.
   */
  export interface PhysicalCards {
    /**
     * The identifier of the File containing the physical card's back image.
     */
    back_image_file_id: string | null;

    /**
     * The identifier of the File containing the physical card's carrier image.
     */
    carrier_image_file_id: string | null;

    /**
     * A phone number the user can contact to receive support for their card.
     */
    contact_phone: string | null;

    /**
     * The identifier of the File containing the physical card's front image.
     */
    front_image_file_id: string | null;

    /**
     * The status of the Physical Card Profile.
     *
     * - `not_eligible` - The Card Profile is not eligible for physical cards.
     * - `rejected` - There is an issue with the Physical Card Profile preventing it
     *   from use.
     * - `pending_creating` - The Card Profile has not yet been processed by Increase.
     * - `pending_reviewing` - The card profile is awaiting review by Increase.
     * - `pending_submitting` - The card profile is awaiting submission to the
     *   fulfillment provider.
     * - `active` - The Physical Card Profile has been submitted to the fulfillment
     *   provider and is ready to use.
     */
    status:
      | 'not_eligible'
      | 'rejected'
      | 'pending_creating'
      | 'pending_reviewing'
      | 'pending_submitting'
      | 'active';
  }
}

export interface CardProfileCreateParams {
  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * How Cards should appear in digital wallets such as Apple Pay. Different wallets
   * will use these values to render card artwork appropriately for their app.
   */
  digital_wallets: CardProfileCreateParams.DigitalWallets;

  /**
   * How physical cards should be designed and shipped.
   */
  physical_cards?: CardProfileCreateParams.PhysicalCards;
}

export namespace CardProfileCreateParams {
  /**
   * How Cards should appear in digital wallets such as Apple Pay. Different wallets
   * will use these values to render card artwork appropriately for their app.
   */
  export interface DigitalWallets {
    /**
     * The identifier of the File containing the card's icon image.
     */
    app_icon_file_id: string;

    /**
     * The identifier of the File containing the card's front image.
     */
    background_image_file_id: string;

    /**
     * A user-facing description for the card itself.
     */
    card_description: string;

    /**
     * A user-facing description for whoever is issuing the card.
     */
    issuer_name: string;

    /**
     * An email address the user can contact to receive support for their card.
     */
    contact_email?: string;

    /**
     * A phone number the user can contact to receive support for their card.
     */
    contact_phone?: string;

    /**
     * A website the user can visit to view and receive support for their card.
     */
    contact_website?: string;

    /**
     * The Card's text color, specified as an RGB triple. The default is white.
     */
    text_color?: DigitalWallets.TextColor;
  }

  export namespace DigitalWallets {
    /**
     * The Card's text color, specified as an RGB triple. The default is white.
     */
    export interface TextColor {
      /**
       * The value of the blue channel in the RGB color.
       */
      blue: number;

      /**
       * The value of the green channel in the RGB color.
       */
      green: number;

      /**
       * The value of the red channel in the RGB color.
       */
      red: number;
    }
  }

  /**
   * How physical cards should be designed and shipped.
   */
  export interface PhysicalCards {
    /**
     * The identifier of the File containing the physical card's carrier image.
     */
    carrier_image_file_id: string;

    /**
     * A phone number the user can contact to receive support for their card.
     */
    contact_phone: string;

    /**
     * The identifier of the File containing the physical card's front image.
     */
    front_image_file_id: string;
  }
}

export interface CardProfileListParams extends PageParams {
  physical_cards_status?: CardProfileListParams.PhysicalCardsStatus;

  status?: CardProfileListParams.Status;
}

export namespace CardProfileListParams {
  export interface PhysicalCardsStatus {
    /**
     * Filter Card Profiles for those with the specified physical card status or
     * statuses. For GET requests, this should be encoded as a comma-delimited string,
     * such as `?in=one,two,three`.
     */
    in?: Array<
      'not_eligible' | 'rejected' | 'pending_creating' | 'pending_reviewing' | 'pending_submitting' | 'active'
    >;
  }

  export interface Status {
    /**
     * Filter Card Profiles for those with the specified digital wallet status or
     * statuses. For GET requests, this should be encoded as a comma-delimited string,
     * such as `?in=one,two,three`.
     */
    in?: Array<'pending' | 'rejected' | 'active' | 'archived'>;
  }
}

export namespace CardProfiles {
  export import CardProfile = CardProfilesAPI.CardProfile;
  export import CardProfilesPage = CardProfilesAPI.CardProfilesPage;
  export import CardProfileCreateParams = CardProfilesAPI.CardProfileCreateParams;
  export import CardProfileListParams = CardProfilesAPI.CardProfileListParams;
}
