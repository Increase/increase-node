// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import { SupplementalDocuments } from './supplemental-documents';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class Entities extends APIResource {
  supplementalDocuments: SupplementalDocuments = new SupplementalDocuments(this.client);

  /**
   * Create an Entity
   */
  create(body: EntityCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Entity>> {
    return this.post('/entities', { body, ...options });
  }

  /**
   * Retrieve an Entity
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Entity>> {
    return this.get(`/entities/${entityId}`, options);
  }

  /**
   * List Entities
   */
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
}

export class EntitiesPage extends Page<Entity> {}
// alias so we can export it in the namespace
type _EntitiesPage = EntitiesPage;

/**
 * Entities are the legal entities that own accounts. They can be people,
 * corporations, partnerships, or trusts.
 */
export interface Entity {
  /**
   * The entity's identifier.
   */
  id: string;

  /**
   * Details of the corporation entity. Will be present if `structure` is equal to
   * `corporation`.
   */
  corporation: Entity.Corporation | null;

  /**
   * The entity's description for display purposes.
   */
  description: string | null;

  /**
   * Details of the joint entity. Will be present if `structure` is equal to `joint`.
   */
  joint: Entity.Joint | null;

  /**
   * Details of the natural person entity. Will be present if `structure` is equal to
   * `natural_person`.
   */
  natural_person: Entity.NaturalPerson | null;

  /**
   * The relationship between your group and the entity.
   *
   * - `affiliated` - The entity is controlled by your group.
   * - `informational` - The entity is for informational purposes only.
   * - `unaffiliated` - The entity is not controlled by your group, but can still
   *   directly open accounts.
   */
  relationship: 'affiliated' | 'informational' | 'unaffiliated';

  /**
   * The entity's legal structure.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust';

  /**
   * Additional documentation associated with the entity. This is limited to the
   * first 10 documents for an entity. If an entity has more than 10 documents, use
   * the GET /entity_supplemental_documents list endpoint to retrieve them.
   */
  supplemental_documents: Array<Entity.SupplementalDocument>;

  /**
   * Details of the trust entity. Will be present if `structure` is equal to `trust`.
   */
  trust: Entity.Trust | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity`.
   */
  type: 'entity';
}

export namespace Entity {
  /**
   * Details of the corporation entity. Will be present if `structure` is equal to
   * `corporation`.
   */
  export interface Corporation {
    /**
     * The corporation's address.
     */
    address: Corporation.Address;

    /**
     * The identifying details of anyone controlling or owning 25% or more of the
     * corporation.
     */
    beneficial_owners: Array<Corporation.BeneficialOwner>;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state: string | null;

    /**
     * The legal name of the corporation.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) for the corporation.
     */
    tax_identifier: string | null;

    /**
     * The website of the corporation.
     */
    website: string | null;
  }

  export namespace Corporation {
    /**
     * The corporation's address.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;
    }

    export interface BeneficialOwner {
      /**
       * This person's role or title within the entity.
       */
      company_title: string | null;

      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwner.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity.
       *
       * - `ownership` - A person with 25% or greater direct or indirect ownership of the
       *   entity.
       * - `control` - A person who manages, directs, or has significant control of the
       *   entity.
       */
      prong: 'ownership' | 'control';
    }

    export namespace BeneficialOwner {
      /**
       * Personal details for the beneficial owner.
       */
      export interface Individual {
        /**
         * The person's address.
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
      }

      export namespace Individual {
        /**
         * The person's address.
         */
        export interface Address {
          /**
           * The city of the address.
           */
          city: string;

          /**
           * The first line of the address.
           */
          line1: string;

          /**
           * The second line of the address.
           */
          line2: string | null;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the state of
           * the address.
           */
          state: string;

          /**
           * The ZIP code of the address.
           */
          zip: string;
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
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;
        }
      }
    }
  }

  /**
   * Details of the joint entity. Will be present if `structure` is equal to `joint`.
   */
  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individual>;

    /**
     * The entity's name.
     */
    name: string;
  }

  export namespace Joint {
    export interface Individual {
      /**
       * The person's address.
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
    }

    export namespace Individual {
      /**
       * The person's address.
       */
      export interface Address {
        /**
         * The city of the address.
         */
        city: string;

        /**
         * The first line of the address.
         */
        line1: string;

        /**
         * The second line of the address.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the state of
         * the address.
         */
        state: string;

        /**
         * The ZIP code of the address.
         */
        zip: string;
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
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;
      }
    }
  }

  /**
   * Details of the natural person entity. Will be present if `structure` is equal to
   * `natural_person`.
   */
  export interface NaturalPerson {
    /**
     * The person's address.
     */
    address: NaturalPerson.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: NaturalPerson.Identification;

    /**
     * The person's legal name.
     */
    name: string;
  }

  export namespace NaturalPerson {
    /**
     * The person's address.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;
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
       * The last 4 digits of the identification number that can be used to verify the
       * individual's identity.
       */
      number_last4: string;
    }
  }

  /**
   * Supplemental Documents are uploaded files connected to an Entity during
   * onboarding.
   */
  export interface SupplementalDocument {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
     * Supplemental Document was created.
     */
    created_at: string;

    /**
     * The File containing the document.
     */
    file_id: string;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `entity_supplemental_document`.
     */
    type: 'entity_supplemental_document';
  }

  /**
   * Details of the trust entity. Will be present if `structure` is equal to `trust`.
   */
  export interface Trust {
    /**
     * The trust's address.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`.
     *
     * - `revocable` - The trust is revocable by the grantor.
     * - `irrevocable` - The trust cannot be revoked.
     */
    category: 'revocable' | 'irrevocable';

    /**
     * The ID for the File containing the formation document of the trust.
     */
    formation_document_file_id: string | null;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in
     * which the trust was formed.
     */
    formation_state: string | null;

    /**
     * The grantor of the trust. Will be present if the `category` is `revocable`.
     */
    grantor: Trust.Grantor | null;

    /**
     * The trust's name
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) of the trust itself.
     */
    tax_identifier: string | null;

    /**
     * The trustees of the trust.
     */
    trustees: Array<Trust.Trustee>;
  }

  export namespace Trust {
    /**
     * The trust's address.
     */
    export interface Address {
      /**
       * The city of the address.
       */
      city: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the state of
       * the address.
       */
      state: string;

      /**
       * The ZIP code of the address.
       */
      zip: string;
    }

    /**
     * The grantor of the trust. Will be present if the `category` is `revocable`.
     */
    export interface Grantor {
      /**
       * The person's address.
       */
      address: Grantor.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Grantor.Identification;

      /**
       * The person's legal name.
       */
      name: string;
    }

    export namespace Grantor {
      /**
       * The person's address.
       */
      export interface Address {
        /**
         * The city of the address.
         */
        city: string;

        /**
         * The first line of the address.
         */
        line1: string;

        /**
         * The second line of the address.
         */
        line2: string | null;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the state of
         * the address.
         */
        state: string;

        /**
         * The ZIP code of the address.
         */
        zip: string;
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
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;
      }
    }

    export interface Trustee {
      /**
       * The individual trustee of the trust. Will be present if the trustee's
       * `structure` is equal to `individual`.
       */
      individual: Trustee.Individual | null;

      /**
       * The structure of the trustee. Will always be equal to `individual`.
       *
       * - `individual` - The trustee is an individual.
       */
      structure: 'individual';
    }

    export namespace Trustee {
      /**
       * The individual trustee of the trust. Will be present if the trustee's
       * `structure` is equal to `individual`.
       */
      export interface Individual {
        /**
         * The person's address.
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
      }

      export namespace Individual {
        /**
         * The person's address.
         */
        export interface Address {
          /**
           * The city of the address.
           */
          city: string;

          /**
           * The first line of the address.
           */
          line1: string;

          /**
           * The second line of the address.
           */
          line2: string | null;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the state of
           * the address.
           */
          state: string;

          /**
           * The ZIP code of the address.
           */
          zip: string;
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
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;
        }
      }
    }
  }
}

export interface EntityCreateParams {
  /**
   * The relationship between your group and the entity.
   *
   * - `affiliated` - The entity is controlled by your group.
   * - `informational` - The entity is for informational purposes only.
   * - `unaffiliated` - The entity is not controlled by your group, but can still
   *   directly open accounts.
   */
  relationship: 'affiliated' | 'informational' | 'unaffiliated';

  /**
   * The type of Entity to create.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust';

  /**
   * Details of the corporation entity to create. Required if `structure` is equal to
   * `corporation`.
   */
  corporation?: EntityCreateParams.Corporation;

  /**
   * The description you choose to give the entity.
   */
  description?: string;

  /**
   * Details of the joint entity to create. Required if `structure` is equal to
   * `joint`.
   */
  joint?: EntityCreateParams.Joint;

  /**
   * Details of the natural person entity to create. Required if `structure` is equal
   * to `natural_person`. Natural people entities should be submitted with
   * `social_security_number` or `individual_taxpayer_identification_number`
   * identification methods.
   */
  natural_person?: EntityCreateParams.NaturalPerson;

  /**
   * Additional documentation associated with the entity.
   */
  supplemental_documents?: Array<EntityCreateParams.SupplementalDocument>;

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  trust?: EntityCreateParams.Trust;
}

export namespace EntityCreateParams {
  /**
   * Details of the corporation entity to create. Required if `structure` is equal to
   * `corporation`.
   */
  export interface Corporation {
    /**
     * The corporation's address.
     */
    address: Corporation.Address;

    /**
     * The identifying details of anyone controlling or owning 25% or more of the
     * corporation.
     */
    beneficial_owners: Array<Corporation.BeneficialOwner>;

    /**
     * The legal name of the corporation.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) for the corporation.
     */
    tax_identifier: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state?: string;

    /**
     * The website of the corporation.
     */
    website?: string;
  }

  export namespace Corporation {
    /**
     * The corporation's address.
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

    export interface BeneficialOwner {
      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwner.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity.
       *
       * - `ownership` - A person with 25% or greater direct or indirect ownership of the
       *   entity.
       * - `control` - A person who manages, directs, or has significant control of the
       *   entity.
       */
      prong: 'ownership' | 'control';

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
         * The individual's address.
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
         * The individual's address.
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

  /**
   * Details of the joint entity to create. Required if `structure` is equal to
   * `joint`.
   */
  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individual>;

    /**
     * The name of the joint entity.
     */
    name?: string;
  }

  export namespace Joint {
    export interface Individual {
      /**
       * The individual's address.
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
       * The individual's address.
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

  /**
   * Details of the natural person entity to create. Required if `structure` is equal
   * to `natural_person`. Natural people entities should be submitted with
   * `social_security_number` or `individual_taxpayer_identification_number`
   * identification methods.
   */
  export interface NaturalPerson {
    /**
     * The individual's address.
     */
    address: NaturalPerson.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: NaturalPerson.Identification;

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

  export namespace NaturalPerson {
    /**
     * The individual's address.
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

  export interface SupplementalDocument {
    /**
     * The identifier of the File containing the document.
     */
    file_id: string;
  }

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  export interface Trust {
    /**
     * The trust's address.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require
     * their own Employer Identification Number. Revocable trusts require information
     * about the individual `grantor` who created the trust.
     *
     * - `revocable` - The trust is revocable by the grantor.
     * - `irrevocable` - The trust cannot be revoked.
     */
    category: 'revocable' | 'irrevocable';

    /**
     * The legal name of the trust.
     */
    name: string;

    /**
     * The trustees of the trust.
     */
    trustees: Array<Trust.Trustee>;

    /**
     * The identifier of the File containing the formation document of the trust.
     */
    formation_document_file_id?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state in
     * which the trust was formed.
     */
    formation_state?: string;

    /**
     * The grantor of the trust. Required if `category` is equal to `revocable`.
     */
    grantor?: Trust.Grantor;

    /**
     * The Employer Identification Number (EIN) for the trust. Required if `category`
     * is equal to `irrevocable`.
     */
    tax_identifier?: string;
  }

  export namespace Trust {
    /**
     * The trust's address.
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

    export interface Trustee {
      /**
       * The structure of the trustee.
       *
       * - `individual` - The trustee is an individual.
       */
      structure: 'individual';

      /**
       * Details of the individual trustee. Required when the trustee `structure` is
       * equal to `individual`.
       */
      individual?: Trustee.Individual;
    }

    export namespace Trustee {
      /**
       * Details of the individual trustee. Required when the trustee `structure` is
       * equal to `individual`.
       */
      export interface Individual {
        /**
         * The individual's address.
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
         * The individual's address.
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

    /**
     * The grantor of the trust. Required if `category` is equal to `revocable`.
     */
    export interface Grantor {
      /**
       * The individual's address.
       */
      address: Grantor.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Grantor.Identification;

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

    export namespace Grantor {
      /**
       * The individual's address.
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

export interface EntityListParams extends PageParams {
  created_at?: EntityListParams.CreatedAt;
}

export namespace EntityListParams {
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

export namespace Entities {
  export import Entity = API.Entity;
  export type EntitiesPage = _EntitiesPage;
  export import EntityCreateParams = API.EntityCreateParams;
  export import EntityListParams = API.EntityListParams;

  export import SupplementalDocuments = API.SupplementalDocuments;
  export import SupplementalDocument = API.SupplementalDocument;
  export import SupplementalDocumentsPage = API.SupplementalDocumentsPage;
  export import SupplementalDocumentCreateParams = API.SupplementalDocumentCreateParams;
  export import SupplementalDocumentListParams = API.SupplementalDocumentListParams;
}
