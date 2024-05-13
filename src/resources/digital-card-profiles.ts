// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as DigitalCardProfilesAPI from './digital-card-profiles';
import { Page, type PageParams } from '../pagination';

export class DigitalCardProfiles extends APIResource {
  /**
   * Create a Digital Card Profile
   */
  create(
    body: DigitalCardProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalCardProfile> {
    return this._client.post('/digital_card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Digital Card Profile
   */
  retrieve(digitalCardProfileId: string, options?: Core.RequestOptions): Core.APIPromise<DigitalCardProfile> {
    return this._client.get(`/digital_card_profiles/${digitalCardProfileId}`, options);
  }

  /**
   * List Card Profiles
   */
  list(
    query?: DigitalCardProfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DigitalCardProfilesPage, DigitalCardProfile>;
  list(options?: Core.RequestOptions): Core.PagePromise<DigitalCardProfilesPage, DigitalCardProfile>;
  list(
    query: DigitalCardProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DigitalCardProfilesPage, DigitalCardProfile> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/digital_card_profiles', DigitalCardProfilesPage, { query, ...options });
  }

  /**
   * Archive a Digital Card Profile
   */
  archive(digitalCardProfileId: string, options?: Core.RequestOptions): Core.APIPromise<DigitalCardProfile> {
    return this._client.post(`/digital_card_profiles/${digitalCardProfileId}/archive`, options);
  }

  /**
   * Clones a Digital Card Profile
   */
  clone(
    digitalCardProfileId: string,
    body: DigitalCardProfileCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalCardProfile> {
    return this._client.post(`/digital_card_profiles/${digitalCardProfileId}/clone`, { body, ...options });
  }
}

export class DigitalCardProfilesPage extends Page<DigitalCardProfile> {}

/**
 * This contains artwork and metadata relating to a Card's appearance in digital
 * wallet apps like Apple Pay and Google Pay. For more information, see our guide
 * on [digital card artwork](https://increase.com/documentation/card-art).
 */
export interface DigitalCardProfile {
  /**
   * The Card Profile identifier.
   */
  id: string;

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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Whether this Digital Card Profile is the default for all cards in its Increase
   * group.
   */
  is_default: boolean;

  /**
   * A user-facing description for whoever is issuing the card.
   */
  issuer_name: string;

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
   * The Card's text color, specified as an RGB triple.
   */
  text_color: DigitalCardProfile.TextColor;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `digital_card_profile`.
   */
  type: 'digital_card_profile';
}

export namespace DigitalCardProfile {
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

export interface DigitalCardProfileCreateParams {
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
   * A description you can use to identify the Card Profile.
   */
  description: string;

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
  text_color?: DigitalCardProfileCreateParams.TextColor;
}

export namespace DigitalCardProfileCreateParams {
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

export interface DigitalCardProfileListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: DigitalCardProfileListParams.Status;
}

export namespace DigitalCardProfileListParams {
  export interface Status {
    /**
     * Filter Digital Card Profiles for those with the specified digital wallet status
     * or statuses. For GET requests, this should be encoded as a comma-delimited
     * string, such as `?in=one,two,three`.
     */
    in?: Array<'pending' | 'rejected' | 'active' | 'archived'>;
  }
}

export interface DigitalCardProfileCloneParams {
  /**
   * The identifier of the File containing the card's icon image.
   */
  app_icon_file_id?: string;

  /**
   * The identifier of the File containing the card's front image.
   */
  background_image_file_id?: string;

  /**
   * A user-facing description for the card itself.
   */
  card_description?: string;

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
   * A description you can use to identify the Card Profile.
   */
  description?: string;

  /**
   * A user-facing description for whoever is issuing the card.
   */
  issuer_name?: string;

  /**
   * The Card's text color, specified as an RGB triple. The default is white.
   */
  text_color?: DigitalCardProfileCloneParams.TextColor;
}

export namespace DigitalCardProfileCloneParams {
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

export namespace DigitalCardProfiles {
  export import DigitalCardProfile = DigitalCardProfilesAPI.DigitalCardProfile;
  export import DigitalCardProfilesPage = DigitalCardProfilesAPI.DigitalCardProfilesPage;
  export import DigitalCardProfileCreateParams = DigitalCardProfilesAPI.DigitalCardProfileCreateParams;
  export import DigitalCardProfileListParams = DigitalCardProfilesAPI.DigitalCardProfileListParams;
  export import DigitalCardProfileCloneParams = DigitalCardProfilesAPI.DigitalCardProfileCloneParams;
}
