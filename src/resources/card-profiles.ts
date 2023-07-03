// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './';
import { Page, PageParams } from 'increase/pagination';

export class CardProfiles extends APIResource {
  /**
   * Create a Card Profile
   */
  create(
    body: CardProfileCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardProfile>> {
    return this.post('/card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Card Profile
   */
  retrieve(cardProfileId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CardProfile>> {
    return this.get(`/card_profiles/${cardProfileId}`, options);
  }

  /**
   * List Card Profiles
   */
  list(query?: CardProfileListParams, options?: Core.RequestOptions): Core.PagePromise<CardProfilesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardProfilesPage>;
  list(
    query: CardProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardProfilesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/card_profiles', CardProfilesPage, { query, ...options });
  }
}

export class CardProfilesPage extends Page<CardProfile> {}
// alias so we can export it in the namespace
type _CardProfilesPage = CardProfilesPage;

/**
 * This contains artwork and metadata relating to a Card's appearance in digital
 * wallet apps like Apple Pay and Google Pay. For more information, see our guide
 * on [digital card artwork](https://increase.com/documentation/card-art)
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
   * The status of the Card Profile.
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
}

export interface CardProfileListParams extends PageParams {
  status?: CardProfileListParams.Status;
}

export namespace CardProfileListParams {
  export interface Status {
    /**
     * Filter Card Profiles for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'rejected' | 'active' | 'archived'>;
  }
}

export namespace CardProfiles {
  export import CardProfile = API.CardProfile;
  export type CardProfilesPage = _CardProfilesPage;
  export import CardProfileCreateParams = API.CardProfileCreateParams;
  export import CardProfileListParams = API.CardProfileListParams;
}
