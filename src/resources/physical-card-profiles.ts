// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as PhysicalCardProfilesAPI from 'increase/resources/physical-card-profiles';
import { Page, type PageParams } from 'increase/pagination';

export class PhysicalCardProfiles extends APIResource {
  /**
   * Create a Physical Card Profile
   */
  create(
    body: PhysicalCardProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCardProfile> {
    return this._client.post('/physical_card_profiles', { body, ...options });
  }

  /**
   * Retrieve a Card Profile
   */
  retrieve(
    physicalCardProfileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCardProfile> {
    return this._client.get(`/physical_card_profiles/${physicalCardProfileId}`, options);
  }

  /**
   * List Physical Card Profiles
   */
  list(
    query?: PhysicalCardProfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PhysicalCardProfilesPage, PhysicalCardProfile>;
  list(options?: Core.RequestOptions): Core.PagePromise<PhysicalCardProfilesPage, PhysicalCardProfile>;
  list(
    query: PhysicalCardProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PhysicalCardProfilesPage, PhysicalCardProfile> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/physical_card_profiles', PhysicalCardProfilesPage, {
      query,
      ...options,
    });
  }

  /**
   * Archive a Physical Card Profile
   */
  archive(
    physicalCardProfileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCardProfile> {
    return this._client.post(`/physical_card_profiles/${physicalCardProfileId}/archive`, options);
  }

  /**
   * Clone a Physical Card Profile
   */
  clone(
    physicalCardProfileId: string,
    body: PhysicalCardProfileCloneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCardProfile> {
    return this._client.post(`/physical_card_profiles/${physicalCardProfileId}/clone`, { body, ...options });
  }
}

export class PhysicalCardProfilesPage extends Page<PhysicalCardProfile> {}

/**
 * This contains artwork and metadata relating to a Physical Card's appearance. For
 * more information, see our guide on
 * [physical card artwork](https://increase.com/documentation/card-art-physical-cards).
 */
export interface PhysicalCardProfile {
  /**
   * The Card Profile identifier.
   */
  id: string;

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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * The creator of this Physical Card Profile.
   *
   * - `increase` - This Physical Card Profile was created by Increase.
   * - `user` - This Physical Card Profile was created by you.
   */
  creator: 'increase' | 'user';

  /**
   * A description you can use to identify the Physical Card Profile.
   */
  description: string;

  /**
   * The identifier of the File containing the physical card's front image.
   */
  front_image_file_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Whether this Physical Card Profile is the default for all cards in its Increase
   * group.
   */
  is_default: boolean;

  /**
   * The status of the Physical Card Profile.
   *
   * - `pending_creating` - The Card Profile has not yet been processed by Increase.
   * - `pending_reviewing` - The card profile is awaiting review by Increase.
   * - `rejected` - There is an issue with the Physical Card Profile preventing it
   *   from use.
   * - `pending_submitting` - The card profile is awaiting submission to the
   *   fulfillment provider.
   * - `active` - The Physical Card Profile has been submitted to the fulfillment
   *   provider and is ready to use.
   * - `archived` - The Physical Card Profile has been archived.
   */
  status:
    | 'pending_creating'
    | 'pending_reviewing'
    | 'rejected'
    | 'pending_submitting'
    | 'active'
    | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `physical_card_profile`.
   */
  type: 'physical_card_profile';
}

export interface PhysicalCardProfileCreateParams {
  /**
   * The identifier of the File containing the physical card's carrier image.
   */
  carrier_image_file_id: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description: string;

  /**
   * The identifier of the File containing the physical card's front image.
   */
  front_image_file_id: string;
}

export interface PhysicalCardProfileListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: PhysicalCardProfileListParams.Status;
}

export namespace PhysicalCardProfileListParams {
  export interface Status {
    /**
     * Filter Physical Card Profiles for those with the specified statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      'pending_creating' | 'pending_reviewing' | 'rejected' | 'pending_submitting' | 'active' | 'archived'
    >;
  }
}

export interface PhysicalCardProfileCloneParams {
  /**
   * The identifier of the File containing the physical card's carrier image.
   */
  carrier_image_file_id?: string;

  /**
   * A phone number the user can contact to receive support for their card.
   */
  contact_phone?: string;

  /**
   * A description you can use to identify the Card Profile.
   */
  description?: string;

  /**
   * The identifier of the File containing the physical card's front image.
   */
  front_image_file_id?: string;
}

export namespace PhysicalCardProfiles {
  export import PhysicalCardProfile = PhysicalCardProfilesAPI.PhysicalCardProfile;
  export import PhysicalCardProfilesPage = PhysicalCardProfilesAPI.PhysicalCardProfilesPage;
  export import PhysicalCardProfileCreateParams = PhysicalCardProfilesAPI.PhysicalCardProfileCreateParams;
  export import PhysicalCardProfileListParams = PhysicalCardProfilesAPI.PhysicalCardProfileListParams;
  export import PhysicalCardProfileCloneParams = PhysicalCardProfilesAPI.PhysicalCardProfileCloneParams;
}
