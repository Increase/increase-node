// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SupplementalDocumentsAPI from './supplemental-documents';
import { Page, type PageParams } from '../pagination';

export class Entities extends APIResource {
  /**
   * Create an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.create({
   *   structure: 'corporation',
   * });
   * ```
   */
  create(body: EntityCreateParams, options?: Core.RequestOptions): Core.APIPromise<Entity> {
    return this._client.post('/entities', { body, ...options });
  }

  /**
   * Retrieve an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.retrieve(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<Entity> {
    return this._client.get(`/entities/${entityId}`, options);
  }

  /**
   * List Entities
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entity of client.entities.list()) {
   *   // ...
   * }
   * ```
   */
  list(query?: EntityListParams, options?: Core.RequestOptions): Core.PagePromise<EntitiesPage, Entity>;
  list(options?: Core.RequestOptions): Core.PagePromise<EntitiesPage, Entity>;
  list(
    query: EntityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EntitiesPage, Entity> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/entities', EntitiesPage, { query, ...options });
  }

  /**
   * Archive an Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.archive(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  archive(entityId: string, options?: Core.RequestOptions): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/archive`, options);
  }

  /**
   * Archive a beneficial owner for a corporate Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.archiveBeneficialOwner(
   *   'entity_n8y8tnk2p9339ti393yi',
   *   {
   *     beneficial_owner_id:
   *       'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
   *   },
   * );
   * ```
   */
  archiveBeneficialOwner(
    entityId: string,
    body: EntityArchiveBeneficialOwnerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/archive_beneficial_owner`, { body, ...options });
  }

  /**
   * Depending on your program, you may be required to re-confirm an Entity's details
   * on a recurring basis. After making any required updates, call this endpoint to
   * record that your user confirmed their details.
   *
   * @example
   * ```ts
   * const entity = await client.entities.confirm(
   *   'entity_n8y8tnk2p9339ti393yi',
   * );
   * ```
   */
  confirm(
    entityId: string,
    body: EntityConfirmParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/confirm`, { body, ...options });
  }

  /**
   * Create a beneficial owner for a corporate Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.createBeneficialOwner(
   *   'entity_n8y8tnk2p9339ti393yi',
   *   {
   *     beneficial_owner: {
   *       individual: {
   *         address: {
   *           country: 'US',
   *           line1: '33 Liberty Street',
   *         },
   *         date_of_birth: '1970-01-31',
   *         identification: {
   *           method: 'social_security_number',
   *           number: '078051120',
   *         },
   *         name: 'Ian Crease',
   *       },
   *       prongs: ['control'],
   *     },
   *   },
   * );
   * ```
   */
  createBeneficialOwner(
    entityId: string,
    body: EntityCreateBeneficialOwnerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/create_beneficial_owner`, { body, ...options });
  }

  /**
   * Update a Natural Person or Corporation's address
   *
   * @example
   * ```ts
   * const entity = await client.entities.updateAddress(
   *   'entity_n8y8tnk2p9339ti393yi',
   *   {
   *     address: {
   *       city: 'New York',
   *       line1: '33 Liberty Street',
   *       state: 'NY',
   *       zip: '10045',
   *     },
   *   },
   * );
   * ```
   */
  updateAddress(
    entityId: string,
    body: EntityUpdateAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/update_address`, { body, ...options });
  }

  /**
   * Update the address for a beneficial owner belonging to a corporate Entity
   *
   * @example
   * ```ts
   * const entity =
   *   await client.entities.updateBeneficialOwnerAddress(
   *     'entity_n8y8tnk2p9339ti393yi',
   *     {
   *       address: {
   *         country: 'US',
   *         line1: '33 Liberty Street',
   *       },
   *       beneficial_owner_id:
   *         'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
   *     },
   *   );
   * ```
   */
  updateBeneficialOwnerAddress(
    entityId: string,
    body: EntityUpdateBeneficialOwnerAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/update_beneficial_owner_address`, { body, ...options });
  }

  /**
   * Update the industry code for a corporate Entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.updateIndustryCode(
   *   'entity_n8y8tnk2p9339ti393yi',
   *   { industry_code: '5132' },
   * );
   * ```
   */
  updateIndustryCode(
    entityId: string,
    body: EntityUpdateIndustryCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Entity> {
    return this._client.post(`/entities/${entityId}/update_industry_code`, { body, ...options });
  }
}

export class EntitiesPage extends Page<Entity> {}

/**
 * Entities are the legal entities that own accounts. They can be people,
 * corporations, partnerships, government authorities, or trusts.
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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Entity
   * was created.
   */
  created_at: string;

  /**
   * The entity's description for display purposes.
   */
  description: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Entity's details were most recently confirmed.
   */
  details_confirmed_at: string | null;

  /**
   * Details of the government authority entity. Will be present if `structure` is
   * equal to `government_authority`.
   */
  government_authority: Entity.GovernmentAuthority | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

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
   * The status of the entity.
   *
   * - `active` - The entity is active.
   * - `archived` - The entity is archived, and can no longer be used to create
   *   accounts.
   * - `disabled` - The entity is temporarily disabled and cannot be used for
   *   financial activity.
   */
  status: 'active' | 'archived' | 'disabled';

  /**
   * The entity's legal structure.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   * - `government_authority` - A government authority.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust' | 'government_authority';

  /**
   * Additional documentation associated with the entity. This is limited to the
   * first 10 documents for an entity. If an entity has more than 10 documents, use
   * the GET /entity_supplemental_documents list endpoint to retrieve them.
   */
  supplemental_documents: Array<SupplementalDocumentsAPI.EntitySupplementalDocument>;

  /**
   * A reference to data stored in a third-party verification service. Your
   * integration may or may not use this field.
   */
  third_party_verification: Entity.ThirdPartyVerification | null;

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
     * The numeric North American Industry Classification System (NAICS) code submitted
     * for the corporation.
     */
    industry_code: string | null;

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
       * The identifier of this beneficial owner.
       */
      beneficial_owner_id: string;

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
           * The city, district, town, or village of the address.
           */
          city: string | null;

          /**
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address.
           */
          line1: string;

          /**
           * The second line of the address.
           */
          line2: string | null;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address.
           */
          state: string | null;

          /**
           * The ZIP or postal code of the address.
           */
          zip: string | null;
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
   * Details of the government authority entity. Will be present if `structure` is
   * equal to `government_authority`.
   */
  export interface GovernmentAuthority {
    /**
     * The government authority's address.
     */
    address: GovernmentAuthority.Address;

    /**
     * The identifying details of authorized persons of the government authority.
     */
    authorized_persons: Array<GovernmentAuthority.AuthorizedPerson>;

    /**
     * The category of the government authority.
     *
     * - `municipality` - The Public Entity is a Municipality.
     */
    category: 'municipality';

    /**
     * The government authority's name.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) of the government authority.
     */
    tax_identifier: string | null;

    /**
     * The government authority's website.
     */
    website: string | null;
  }

  export namespace GovernmentAuthority {
    /**
     * The government authority's address.
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

    export interface AuthorizedPerson {
      /**
       * The identifier of this authorized person.
       */
      authorized_person_id: string;

      /**
       * The person's legal name.
       */
      name: string;
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
   * A reference to data stored in a third-party verification service. Your
   * integration may or may not use this field.
   */
  export interface ThirdPartyVerification {
    /**
     * The reference identifier for the third party verification.
     */
    reference: string;

    /**
     * The vendor that was used to perform the verification.
     *
     * - `alloy` - Alloy. See https://alloy.com for more information.
     * - `middesk` - Middesk. See https://middesk.com for more information.
     * - `oscilar` - Oscilar. See https://oscilar.com for more information.
     */
    vendor: 'alloy' | 'middesk' | 'oscilar';
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
     * The trust's name.
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
   * The type of Entity to create.
   *
   * - `corporation` - A corporation.
   * - `natural_person` - An individual person.
   * - `joint` - Multiple individual people.
   * - `trust` - A trust.
   * - `government_authority` - A government authority.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust' | 'government_authority';

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
   * Details of the Government Authority entity to create. Required if `structure` is
   * equal to `Government Authority`.
   */
  government_authority?: EntityCreateParams.GovernmentAuthority;

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
   * A reference to data stored in a third-party verification service. Your
   * integration may or may not use this field.
   */
  third_party_verification?: EntityCreateParams.ThirdPartyVerification;

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
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address: Corporation.Address;

    /**
     * The identifying details of each person who owns 25% or more of the business and
     * one control person, like the CEO, CFO, or other executive. You can submit
     * between 1 and 5 people to this list.
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
     * If the entity is exempt from the requirement to submit beneficial owners,
     * provide the justification. If a reason is provided, you do not need to submit a
     * list of beneficial owners.
     *
     * - `regulated_financial_institution` - A regulated financial institution.
     * - `publicly_traded_company` - A publicly traded company.
     * - `public_entity` - A public entity acting on behalf of the federal or a state
     *   government.
     */
    beneficial_ownership_exemption_reason?:
      | 'regulated_financial_institution'
      | 'publicly_traded_company'
      | 'public_entity';

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the
     * corporation's state of incorporation.
     */
    incorporation_state?: string;

    /**
     * The North American Industry Classification System (NAICS) code for the
     * corporation's primary line of business. This is a number, like `5132` for
     * `Software Publishers`. A full list of classification codes is available
     * [here](https://increase.com/documentation/data-dictionary#north-american-industry-classification-system-codes).
     */
    industry_code?: string;

    /**
     * The website of the corporation.
     */
    website?: string;
  }

  export namespace Corporation {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
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
           * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
           */
          country: string;

          /**
           * The first line of the address. This is usually the street number and street.
           */
          line1: string;

          /**
           * The city, district, town, or village of the address. Required in certain
           * countries.
           */
          city?: string;

          /**
           * The second line of the address. This might be the floor or room number.
           */
          line2?: string;

          /**
           * The two-letter United States Postal Service (USPS) abbreviation for the US
           * state, province, or region of the address. Required in certain countries.
           */
          state?: string;

          /**
           * The ZIP or postal code of the address. Required in certain countries.
           */
          zip?: string;
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
             * document (e.g., `US`).
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
             * The two-character ISO 3166-1 code representing the country that issued the
             * document (e.g., `US`).
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
   * Details of the Government Authority entity to create. Required if `structure` is
   * equal to `Government Authority`.
   */
  export interface GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
     */
    address: GovernmentAuthority.Address;

    /**
     * The identifying details of authorized officials acting on the entity's behalf.
     */
    authorized_persons: Array<GovernmentAuthority.AuthorizedPerson>;

    /**
     * The category of the government authority.
     *
     * - `municipality` - The Public Entity is a Municipality.
     */
    category: 'municipality';

    /**
     * The legal name of the government authority.
     */
    name: string;

    /**
     * The Employer Identification Number (EIN) for the government authority.
     */
    tax_identifier: string;

    /**
     * The website of the government authority.
     */
    website?: string;
  }

  export namespace GovernmentAuthority {
    /**
     * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
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

    export interface AuthorizedPerson {
      /**
       * The person's legal name.
       */
      name: string;
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
  }

  export namespace Joint {
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
           * document (e.g., `US`).
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
           * The two-character ISO 3166-1 code representing the country that issued the
           * passport (e.g., `US`).
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
     * The individual's physical address. Mail receiving locations like PO Boxes and
     * PMB's are disallowed.
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
         * document (e.g., `US`).
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
         * The two-character ISO 3166-1 code representing the country that issued the
         * passport (e.g., `US`).
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
   * A reference to data stored in a third-party verification service. Your
   * integration may or may not use this field.
   */
  export interface ThirdPartyVerification {
    /**
     * The reference identifier for the third party verification.
     */
    reference: string;

    /**
     * The vendor that was used to perform the verification.
     *
     * - `alloy` - Alloy. See https://alloy.com for more information.
     * - `middesk` - Middesk. See https://middesk.com for more information.
     * - `oscilar` - Oscilar. See https://oscilar.com for more information.
     */
    vendor: 'alloy' | 'middesk' | 'oscilar';
  }

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  export interface Trust {
    /**
     * The trust's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
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
     * The trust's physical address. Mail receiving locations like PO Boxes and PMB's
     * are disallowed.
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
             * document (e.g., `US`).
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
             * The two-character ISO 3166-1 code representing the country that issued the
             * passport (e.g., `US`).
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
       * The individual's physical address. Mail receiving locations like PO Boxes and
       * PMB's are disallowed.
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
           * document (e.g., `US`).
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
           * The two-character ISO 3166-1 code representing the country that issued the
           * passport (e.g., `US`).
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

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: EntityListParams.Status;
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

  export interface Status {
    /**
     * Filter Entities for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'active' | 'archived' | 'disabled'>;
  }
}

export interface EntityArchiveBeneficialOwnerParams {
  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner_id: string;
}

export interface EntityConfirmParams {
  /**
   * When your user confirmed the Entity's details. If not provided, the current time
   * will be used.
   */
  confirmed_at?: string;
}

export interface EntityCreateBeneficialOwnerParams {
  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner: EntityCreateBeneficialOwnerParams.BeneficialOwner;
}

export namespace EntityCreateBeneficialOwnerParams {
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
         * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
         */
        country: string;

        /**
         * The first line of the address. This is usually the street number and street.
         */
        line1: string;

        /**
         * The city, district, town, or village of the address. Required in certain
         * countries.
         */
        city?: string;

        /**
         * The second line of the address. This might be the floor or room number.
         */
        line2?: string;

        /**
         * The two-letter United States Postal Service (USPS) abbreviation for the US
         * state, province, or region of the address. Required in certain countries.
         */
        state?: string;

        /**
         * The ZIP or postal code of the address. Required in certain countries.
         */
        zip?: string;
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
           * document (e.g., `US`).
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
           * The two-character ISO 3166-1 code representing the country that issued the
           * document (e.g., `US`).
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

export interface EntityUpdateAddressParams {
  /**
   * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
   * are disallowed.
   */
  address: EntityUpdateAddressParams.Address;
}

export namespace EntityUpdateAddressParams {
  /**
   * The entity's physical address. Mail receiving locations like PO Boxes and PMB's
   * are disallowed.
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

export interface EntityUpdateBeneficialOwnerAddressParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  address: EntityUpdateBeneficialOwnerAddressParams.Address;

  /**
   * The identifying details of anyone controlling or owning 25% or more of the
   * corporation.
   */
  beneficial_owner_id: string;
}

export namespace EntityUpdateBeneficialOwnerAddressParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  export interface Address {
    /**
     * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The city, district, town, or village of the address. Required in certain
     * countries.
     */
    city?: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the US
     * state, province, or region of the address. Required in certain countries.
     */
    state?: string;

    /**
     * The ZIP or postal code of the address. Required in certain countries.
     */
    zip?: string;
  }
}

export interface EntityUpdateIndustryCodeParams {
  /**
   * The North American Industry Classification System (NAICS) code for the
   * corporation's primary line of business. This is a number, like `5132` for
   * `Software Publishers`. A full list of classification codes is available
   * [here](https://increase.com/documentation/data-dictionary#north-american-industry-classification-system-codes).
   */
  industry_code: string;
}

Entities.EntitiesPage = EntitiesPage;

export declare namespace Entities {
  export {
    type Entity as Entity,
    EntitiesPage as EntitiesPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityListParams as EntityListParams,
    type EntityArchiveBeneficialOwnerParams as EntityArchiveBeneficialOwnerParams,
    type EntityConfirmParams as EntityConfirmParams,
    type EntityCreateBeneficialOwnerParams as EntityCreateBeneficialOwnerParams,
    type EntityUpdateAddressParams as EntityUpdateAddressParams,
    type EntityUpdateBeneficialOwnerAddressParams as EntityUpdateBeneficialOwnerAddressParams,
    type EntityUpdateIndustryCodeParams as EntityUpdateIndustryCodeParams,
  };
}
