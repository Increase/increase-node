// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { SupplementalDocuments } from './supplemental-documents';
import { Page, PageParams } from '~/pagination';

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

/**
 * Entities are the legal entities that own accounts. They can be people,
 * corporations, partnerships, or trusts.
 */
export interface Entity {
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
   * The entity's identifier.
   */
  id: string;

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
   */
  relationship: 'affiliated' | 'informational' | 'unaffiliated';

  /**
   * The entity's legal structure.
   */
  structure: 'corporation' | 'natural_person' | 'joint' | 'trust';

  /**
   * Additional documentation associated with the entity.
   */
  supplemental_documents: Array<Entity.SupplementalDocuments>;

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
  export interface Corporation {
    /**
     * The corporation's address.
     */
    address: Corporation.Address;

    /**
     * The identifying details of anyone controlling or owning 25% or more of the
     * corporation.
     */
    beneficial_owners: Array<Corporation.BeneficialOwners>;

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

    export interface BeneficialOwners {
      /**
       * This person's role or title within the entity.
       */
      company_title: string | null;

      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwners.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity.
       */
      prong: 'ownership' | 'control';
    }

    export namespace BeneficialOwners {
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

        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license';

          /**
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;
        }
      }
    }
  }

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

    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license';

      /**
       * The last 4 digits of the identification number that can be used to verify the
       * individual's identity.
       */
      number_last4: string;
    }
  }

  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individuals>;

    /**
     * The entity's name.
     */
    name: string;
  }

  export namespace Joint {
    export interface Individuals {
      /**
       * The person's address.
       */
      address: Individuals.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Individuals.Identification;

      /**
       * The person's legal name.
       */
      name: string;
    }

    export namespace Individuals {
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

      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license';

        /**
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;
      }
    }
  }

  export interface Trust {
    /**
     * The trust's address.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`.
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
    trustees: Array<Trust.Trustees>;
  }

  export namespace Trust {
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

    export interface Trustees {
      /**
       * The individual trustee of the trust. Will be present if the trustee's
       * `structure` is equal to `individual`.
       */
      individual: Trustees.Individual | null;

      /**
       * The structure of the trustee. Will always be equal to `individual`.
       */
      structure: 'individual';
    }

    export namespace Trustees {
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

        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license';

          /**
           * The last 4 digits of the identification number that can be used to verify the
           * individual's identity.
           */
          number_last4: string;
        }
      }
    }

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

      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license';

        /**
         * The last 4 digits of the identification number that can be used to verify the
         * individual's identity.
         */
        number_last4: string;
      }
    }
  }

  export interface SupplementalDocuments {
    /**
     * The File containing the document.
     */
    file_id: string;
  }
}

export interface EntityCreateParams {
  /**
   * The relationship between your group and the entity.
   */
  relationship: 'affiliated' | 'informational' | 'unaffiliated';

  /**
   * The type of Entity to create.
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
   * to `natural_person`.
   */
  natural_person?: EntityCreateParams.NaturalPerson;

  /**
   * Additional documentation associated with the entity.
   */
  supplemental_documents?: Array<EntityCreateParams.SupplementalDocuments>;

  /**
   * Details of the trust entity to create. Required if `structure` is equal to
   * `trust`.
   */
  trust?: EntityCreateParams.Trust;
}

export namespace EntityCreateParams {
  export interface Corporation {
    /**
     * The corporation's address.
     */
    address: Corporation.Address;

    /**
     * The identifying details of anyone controlling or owning 25% or more of the
     * corporation.
     */
    beneficial_owners: Array<Corporation.BeneficialOwners>;

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

    export interface BeneficialOwners {
      /**
       * Personal details for the beneficial owner.
       */
      individual: BeneficialOwners.Individual;

      /**
       * Why this person is considered a beneficial owner of the entity.
       */
      prong: 'ownership' | 'control';

      /**
       * This person's role or title within the entity.
       */
      company_title?: string;
    }

    export namespace BeneficialOwners {
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
         * The identification method for an individual can only be a passport or driver's
         * license if you've confirmed they do not have a US tax id (either a Social
         * Security Number or Individual Taxpayer Identification Number).
         */
        confirmed_no_us_tax_id?: boolean;
      }

      export namespace Individual {
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

        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license';

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
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          passport?: Identification.Passport;
        }

        export namespace Identification {
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

          export interface DriversLicense {
            /**
             * The driver's license's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the driver's license.
             */
            file_id: string;

            /**
             * The state that issued the provided driver's license.
             */
            state: string;
          }
        }
      }
    }
  }

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
     * The identification method for an individual can only be a passport or driver's
     * license if you've confirmed they do not have a US tax id (either a Social
     * Security Number or Individual Taxpayer Identification Number).
     */
    confirmed_no_us_tax_id?: boolean;
  }

  export namespace NaturalPerson {
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

    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license';

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
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      passport?: Identification.Passport;
    }

    export namespace Identification {
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

      export interface DriversLicense {
        /**
         * The driver's license's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the driver's license.
         */
        file_id: string;

        /**
         * The state that issued the provided driver's license.
         */
        state: string;
      }
    }
  }

  export interface Joint {
    /**
     * The two individuals that share control of the entity.
     */
    individuals: Array<Joint.Individuals>;

    /**
     * The name of the joint entity.
     */
    name?: string;
  }

  export namespace Joint {
    export interface Individuals {
      /**
       * The individual's address.
       */
      address: Individuals.Address;

      /**
       * The person's date of birth in YYYY-MM-DD format.
       */
      date_of_birth: string;

      /**
       * A means of verifying the person's identity.
       */
      identification: Individuals.Identification;

      /**
       * The person's legal name.
       */
      name: string;

      /**
       * The identification method for an individual can only be a passport or driver's
       * license if you've confirmed they do not have a US tax id (either a Social
       * Security Number or Individual Taxpayer Identification Number).
       */
      confirmed_no_us_tax_id?: boolean;
    }

    export namespace Individuals {
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

      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license';

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
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        passport?: Identification.Passport;
      }

      export namespace Identification {
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

        export interface DriversLicense {
          /**
           * The driver's license's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the driver's license.
           */
          file_id: string;

          /**
           * The state that issued the provided driver's license.
           */
          state: string;
        }
      }
    }
  }

  export interface Trust {
    /**
     * The trust's address.
     */
    address: Trust.Address;

    /**
     * Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require
     * their own Employer Identification Number. Revocable trusts require information
     * about the individual `grantor` who created the trust.
     */
    category: 'revocable' | 'irrevocable';

    /**
     * The legal name of the trust.
     */
    name: string;

    /**
     * The trustees of the trust.
     */
    trustees: Array<Trust.Trustees>;

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

    export interface Trustees {
      /**
       * The structure of the trustee.
       */
      structure: 'individual';

      /**
       * Details of the individual trustee. Required when the trustee `structure` is
       * equal to `individual`.
       */
      individual?: Trustees.Individual;
    }

    export namespace Trustees {
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
         * The identification method for an individual can only be a passport or driver's
         * license if you've confirmed they do not have a US tax id (either a Social
         * Security Number or Individual Taxpayer Identification Number).
         */
        confirmed_no_us_tax_id?: boolean;
      }

      export namespace Individual {
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

        export interface Identification {
          /**
           * A method that can be used to verify the individual's identity.
           */
          method:
            | 'social_security_number'
            | 'individual_taxpayer_identification_number'
            | 'passport'
            | 'drivers_license';

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
           * Information about the passport used for identification. Required if `method` is
           * equal to `passport`.
           */
          passport?: Identification.Passport;
        }

        export namespace Identification {
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

          export interface DriversLicense {
            /**
             * The driver's license's expiration date in YYYY-MM-DD format.
             */
            expiration_date: string;

            /**
             * The identifier of the File containing the driver's license.
             */
            file_id: string;

            /**
             * The state that issued the provided driver's license.
             */
            state: string;
          }
        }
      }
    }

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
       * The identification method for an individual can only be a passport or driver's
       * license if you've confirmed they do not have a US tax id (either a Social
       * Security Number or Individual Taxpayer Identification Number).
       */
      confirmed_no_us_tax_id?: boolean;
    }

    export namespace Grantor {
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

      export interface Identification {
        /**
         * A method that can be used to verify the individual's identity.
         */
        method:
          | 'social_security_number'
          | 'individual_taxpayer_identification_number'
          | 'passport'
          | 'drivers_license';

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
         * Information about the passport used for identification. Required if `method` is
         * equal to `passport`.
         */
        passport?: Identification.Passport;
      }

      export namespace Identification {
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

        export interface DriversLicense {
          /**
           * The driver's license's expiration date in YYYY-MM-DD format.
           */
          expiration_date: string;

          /**
           * The identifier of the File containing the driver's license.
           */
          file_id: string;

          /**
           * The state that issued the provided driver's license.
           */
          state: string;
        }
      }
    }
  }

  export interface SupplementalDocuments {
    /**
     * The identifier of the File containing the document.
     */
    file_id: string;
  }
}

export interface EntityListParams extends PageParams {}
