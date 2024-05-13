// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as BeneficialOwnersAPI from './beneficial-owners';
import * as EntitiesAPI from './entities';

export class BeneficialOwners extends APIResource {
  /**
   * Create a beneficial owner for a corporate Entity
   */
  create(
    body: BeneficialOwnerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitiesAPI.Entity> {
    return this._client.post('/entity_beneficial_owners', { body, ...options });
  }

  /**
   * Archive a beneficial owner for a corporate Entity
   */
  archive(
    body: BeneficialOwnerArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitiesAPI.Entity> {
    return this._client.post('/entity_beneficial_owners/archive', { body, ...options });
  }

  /**
   * Update the address for a beneficial owner belonging to a corporate Entity
   */
  updateAddress(
    body: BeneficialOwnerUpdateAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitiesAPI.Entity> {
    return this._client.post('/entity_beneficial_owners/address', { body, ...options });
  }
}

export interface BeneficialOwnerCreateParams {
  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner: BeneficialOwnerCreateParams.BeneficialOwner;

  /**
   * The identifier of the Entity to associate with the new Beneficial Owner.
   */
  entity_id: string;
}

export namespace BeneficialOwnerCreateParams {
  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  export interface BeneficialOwner {
    /**
     * Personal details for the beneficial owner.
     */
    individual: BeneficialOwner.Individual;

    /**
     * Why this person is considered a beneficial owner of the entity. At least one
     * option is required, if a person is both a control person and owner, submit an
     * array containing both.
     */
    prongs: Array<'ownership' | 'control'>;

    /**
     * This person's role or title within the entity.
     */
    company_title?: string;
  }

  export namespace BeneficialOwner {
    /**
     * Personal details for the beneficial owner.
     */
    export interface Individual {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      address: Individual.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Individual.Identification;

      /**
       * The person's legal name.
       */
      name: string;

      /**
       * The identification method for an individual can only be a passport, driver's
       * license, or other document if you've confirmed the individual does not have a US
       * tax id (either a Social Security Number or Individual Taxpayer Identification
       * Number).
       */
      confirmed_no_us_tax_id?: boolean;
    }

    export namespace Individual {
      /**
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
       */
      export interface Address {
        /**
         * The city of the address.
         */
        city: string;

        /**
         * The first line of the address. This is usually the street number and street.
         */
        line1: string;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the state of
         * the address.
         */
        state: string;

        /**
         * The ZIP code of the address.
         */
        zip: string;

        /**
         * The second line of the address. This might be the floor or room number.
         */
        line2?: string;
      }

      /**
       * A means of verifying the person's identity.
       */
      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         *
         * - `social_security_number` - A social security number.
         * - `individual_taxpayer_identification_number` - An individual taxpayer
         *   identification number (ITIN).
         * - `passport` - A passport number.
         * - `drivers_license` - A driver's license number.
         * - `other` - Another identifying document.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license'
          | 'other';

        /**
         * An identification number that can be used to verify the individual's identity,
         * such as a social security number.
         */
        number: string;

        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        drivers_license?: Identification.DriversLicense;

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        other?: Identification.Other;

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        passport?: Identification.Passport;
      }

      export namespace Identification {
        /**
         * Information about the United States driver's license used for identification.
         * Required if `method` is equal to `drivers_license`.
         */
        export interface DriversLicense {
          /**
           * The driver's license's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the front of the driver's license.
           */
          file_id: string;

          /**
           * The state that issued the provided driver's license.
           */
          state: string;

          /**
           * The identifier of the File containing the back of the driver's license.
           */
          back_file_id?: string;
        }

        /**
         * Information about the identification document provided. Required if `method` is
         * equal to `other`.
         */
        export interface Other {
          /**
           * The two-character ISO 3166-1 code representing the country that issued the
           * document.
           */
          country: string;

          /**
           * A description of the document submitted.
           */
          description: string;

          /**
           * The identifier of the File containing the front of the document.
           */
          file_id: string;

          /**
           * The identifier of the File containing the back of the document. Not every
           * document has a reverse side.
           */
          back_file_id?: string;

          /**
           * The document's expiration date in YYYY-MM-DD format.
           */
          expiration_date?: string;
        }

        /**
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        export interface Passport {
          /**
           * The country that issued the passport.
           */
          country: string;

          /**
           * The passport's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the passport.
           */
          file_id: string;
        }
      }
    }
  }
}

export interface BeneficialOwnerArchiveParams {
  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner_id: string;

  /**
   * The identifier of the Entity to retrieve.
   */
  entity_id: string;
}

export interface BeneficialOwnerUpdateAddressParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  address: BeneficialOwnerUpdateAddressParams.Address;

  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner_id: string;

  /**
   * The identifier of the Entity to retrieve.
   */
  entity_id: string;
}

export namespace BeneficialOwnerUpdateAddressParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  export interface Address {
    /**
     * The city of the address.
     */
    city: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of
     * the address.
     */
    state: string;

    /**
     * The ZIP code of the address.
     */
    zip: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;
  }
}

export namespace BeneficialOwners {
  export import BeneficialOwnerCreateParams = BeneficialOwnersAPI.BeneficialOwnerCreateParams;
  export import BeneficialOwnerArchiveParams = BeneficialOwnersAPI.BeneficialOwnerArchiveParams;
  export import BeneficialOwnerUpdateAddressParams = BeneficialOwnersAPI.BeneficialOwnerUpdateAddressParams;
}
