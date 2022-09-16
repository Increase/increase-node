// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Entities extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Entity>> {
    return this.get(`/entities/${id}`, options);
  }

  list(query?: EntityListParams, options?: Core.RequestOptions): Core.PagePromise<EntitiesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<EntitiesPage>;
  list(
    query: EntityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EntitiesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/entities', EntitiesPage, { query, ...options });
  }

  createCorporation(
    body: EntityCreateCorporationParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Entity>> {
    return this.post('/entities/corporations', { body, ...options });
  }

  createPerson(
    body: EntityCreatePersonParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Entity>> {
    return this.post('/entities/natural_people', { body, ...options });
  }
}

export class EntitiesPage extends Page<Entity> {}

/**
 * Entities are the legal entities that own accounts. They can be people,
 * corporations, partnerships, or trusts.
 */
export interface Entity {
  /**
   * The details that were submitted to create the entity. Note that for backwards
   * compatibility reasons, additional undocumented keys may appear in this object.
   * These should be treated as deprecated and will be removed in the future.
   */
  entity_setup_submission: Entity.EntitySetupSubmission | null;

  /**
   * The entity's identifier.
   */
  id: string;

  /**
   * The entity's name.
   */
  name: string;

  /**
   * The two-letter United States Postal Service (USPS) abbreviation for the state of
   * establishment, incorporation, or residence.
   */
  state: string;

  /**
   * The entity's legal structure.
   */
  structure: 'corporation' | 'natural_person';

  /**
   * The tax ID such as a Social Security Number or Employer Identification Number.
   */
  tax_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity`.
   */
  type: 'entity';
}

export namespace Entity {
  export interface EntitySetupSubmission {
    /**
     * If the Entity has `structure: corporation`, this will contain the details that
     * were submitted for that corporation.
     */
    corporation: EntitySetupSubmission.Corporation | null;

    /**
     * If the Entity has `structure: natural_person`, this will contain the details
     * that were submitted for that person.
     */
    natural_person: EntitySetupSubmission.NaturalPerson | null;
  }

  export namespace EntitySetupSubmission {
    export interface Corporation {
      /**
       * The corporation's beneficial owners.
       */
      beneficial_owners: Array<Corporation.BeneficialOwners>;

      /**
       * The corporation's address.
       */
      submitted_address: Corporation.SubmittedAddress;

      /**
       * The corporation's name.
       */
      submitted_name: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the
       * corporation's state of incorporation.
       */
      submitted_state: string;

      /**
       * The corporation's Employer Identification Number (EIN).
       */
      submitted_tax_id: string | null;

      /**
       * The corporation's website.
       */
      submitted_website: string | null;
    }

    export namespace Corporation {
      export interface SubmittedAddress {
        /**
         * The city.
         */
        city: string;

        /**
         * The first line.
         */
        line1: string;

        /**
         * The second line.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US state
         * of the address.
         */
        state: string;

        /**
         * The ZIP code.
         */
        zip: string;
      }

      export interface BeneficialOwners {
        /**
         * The city of the person's address.
         */
        submitted_address_city: string | null;

        /**
         * The first line of the person's address.
         */
        submitted_address_line1: string;

        /**
         * The second line of the person's address.
         */
        submitted_address_line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the person's
         * US state of residence.
         */
        submitted_address_state: string;

        /**
         * The ZIP code of the person's address.
         */
        submitted_address_zip: string;

        /**
         * This person's role or title within the entity.
         */
        submitted_company_title: string | null;

        /**
         * The person's date of birth in YYYY-MM-DD format.
         */
        submitted_date_of_birth: string;

        /**
         * The person's name.
         */
        submitted_name: string;

        /**
         * Why this person is considered a beneficial owner of the entity.
         */
        submitted_prong: 'ownership' | 'control';

        /**
         * The last 4 digits of the person's Social Security Number.
         */
        submitted_social_security_number_last4: string;
      }
    }

    export interface NaturalPerson {
      /**
       * The person's address.
       */
      submitted_address: NaturalPerson.SubmittedAddress;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      submitted_date_of_birth: string;

      /**
       * The person's name.
       */
      submitted_name: string;

      /**
       * The last 4 digits of the person's social security number.
       */
      submitted_social_security_number_last4: string;
    }

    export namespace NaturalPerson {
      export interface SubmittedAddress {
        /**
         * The city.
         */
        city: string;

        /**
         * The first line.
         */
        line1: string;

        /**
         * The second line.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US state
         * of the address.
         */
        state: string;

        /**
         * The ZIP code.
         */
        zip: string;
      }
    }
  }
}

export interface EntityListParams extends PageParams {}

export interface EntityCreateCorporationParams {
  /**
   * The city of the corporation's address.
   */
  address_city: string;

  /**
   * The first line of the corporation's address. This is usually the street number
   * and street.
   */
  address_line1: string;

  /**
   * The two-letter United States Postal Service (USPS) abbreviation for the state of
   * the corporation's address.
   */
  address_state: string;

  /**
   * The ZIP code of the corporation's address.
   */
  address_zip: string;

  /**
   * The legal name of the corporation.
   */
  name: string;

  /**
   * The two-letter United States Postal Service (USPS) abbreviation for the
   * corporation's state of incorporation.
   */
  state: string;

  /**
   * The second line of the corporation's address. This might be the floor or room
   * number.
   */
  address_line2?: string;

  /**
   * The identifying details of anyone owning 25% or more of the corporation.
   */
  beneficial_owners?: Array<EntityCreateCorporationParams.BeneficialOwners>;

  /**
   * The identifier of the File containing the SS4 form submitted to the IRS
   * (optional, must specify tax_id if absent).
   */
  ss4_file_id?: string;

  /**
   * The Employer Identification Number (EIN) for the corporation (optional, must
   * specify ss4_file_id if absent).
   */
  tax_id?: string;

  /**
   * The website of the corporation.
   */
  website?: string;
}

export namespace EntityCreateCorporationParams {
  export interface BeneficialOwners {
    /**
     * The city of the beneficial owner's address.
     */
    address_city: string;

    /**
     * The first line of the beneficial owner's address. This is usually the street
     * number and street.
     */
    address_line1: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of
     * the beneficial owner's address.
     */
    address_state: string;

    /**
     * The ZIP code of the beneficial owner's address.
     */
    address_zip: string;

    /**
     * The beneficial owner's date of birth in
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    date_of_birth: string;

    /**
     * The beneficial owner's legal name.
     */
    name: string;

    /**
     * Why this person is considered a beneficial owner of the entity.
     */
    prong: 'ownership' | 'control';

    /**
     * The last four digits of the beneficial owner's Social Security Number (SSN).
     */
    social_security_number_last4: string;

    /**
     * The second line of the beneficial owner's address. This might be the floor or
     * room number.
     */
    address_line2?: string;

    /**
     * This person's role or title within the entity.
     */
    company_title?: string;
  }
}

export interface EntityCreatePersonParams {
  /**
   * The city of the person's address.
   */
  address_city: string;

  /**
   * The first line of the person's address. This is usually the street number and
   * street.
   */
  address_line1: string;

  /**
   * The two-letter United States Postal Service (USPS) abbreviation for the state of
   * the person's address.
   */
  address_state: string;

  /**
   * The ZIP code of the person's address.
   */
  address_zip: string;

  /**
   * The person's date of birth in YYYY-MM-DD format.
   */
  date_of_birth: string;

  /**
   * The person's legal name.
   */
  name: string;

  /**
   * The last four digits of the person's Social Security Number (SSN).
   */
  social_security_number_last4: string;

  /**
   * The second line of the person's address. This might be the floor or room number.
   */
  address_line2?: string;
}
