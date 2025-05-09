// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class IntrafiExclusions extends APIResource {
  /**
   * Create an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.create({
   *     bank_name: 'Example Bank',
   *     entity_id: 'entity_n8y8tnk2p9339ti393yi',
   *   });
   * ```
   */
  create(
    body: IntrafiExclusionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntrafiExclusion> {
    return this._client.post('/intrafi_exclusions', { body, ...options });
  }

  /**
   * Get an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.retrieve(
   *     'account_in71c4amph0vgo2qllky',
   *   );
   * ```
   */
  retrieve(intrafiExclusionId: string, options?: Core.RequestOptions): Core.APIPromise<IntrafiExclusion> {
    return this._client.get(`/intrafi_exclusions/${intrafiExclusionId}`, options);
  }

  /**
   * List IntraFi Exclusions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const intrafiExclusion of client.intrafiExclusions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: IntrafiExclusionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntrafiExclusionsPage, IntrafiExclusion>;
  list(options?: Core.RequestOptions): Core.PagePromise<IntrafiExclusionsPage, IntrafiExclusion>;
  list(
    query: IntrafiExclusionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntrafiExclusionsPage, IntrafiExclusion> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/intrafi_exclusions', IntrafiExclusionsPage, { query, ...options });
  }

  /**
   * Archive an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.archive(
   *     'intrafi_exclusion_ygfqduuzpau3jqof6jyh',
   *   );
   * ```
   */
  archive(intrafiExclusionId: string, options?: Core.RequestOptions): Core.APIPromise<IntrafiExclusion> {
    return this._client.post(`/intrafi_exclusions/${intrafiExclusionId}/archive`, options);
  }
}

export class IntrafiExclusionsPage extends Page<IntrafiExclusion> {}

/**
 * Certain institutions may be excluded per Entity when sweeping funds into the
 * IntraFi network. This is useful when an Entity already has deposits at a
 * particular bank, and does not want to sweep additional funds to it. It may take
 * 5 business days for an exclusion to be processed.
 */
export interface IntrafiExclusion {
  /**
   * The identifier of this exclusion request.
   */
  id: string;

  /**
   * The name of the excluded institution.
   */
  bank_name: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the exclusion was created.
   */
  created_at: string;

  /**
   * The entity for which this institution is excluded.
   */
  entity_id: string;

  /**
   * When this was exclusion was confirmed by IntraFi.
   */
  excluded_at: string | null;

  /**
   * The Federal Deposit Insurance Corporation's certificate number for the
   * institution.
   */
  fdic_certificate_number: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The status of the exclusion request.
   *
   * - `pending` - The exclusion is being added to the IntraFi network.
   * - `completed` - The exclusion has been added to the IntraFi network.
   * - `archived` - The exclusion has been removed from the IntraFi network.
   */
  status: 'pending' | 'completed' | 'archived';

  /**
   * When this was exclusion was submitted to IntraFi by Increase.
   */
  submitted_at: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `intrafi_exclusion`.
   */
  type: 'intrafi_exclusion';
}

export interface IntrafiExclusionCreateParams {
  /**
   * The name of the financial institution to be excluded.
   */
  bank_name: string;

  /**
   * The identifier of the Entity whose deposits will be excluded.
   */
  entity_id: string;
}

export interface IntrafiExclusionListParams extends PageParams {
  /**
   * Filter IntraFi Exclusions for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

IntrafiExclusions.IntrafiExclusionsPage = IntrafiExclusionsPage;

export declare namespace IntrafiExclusions {
  export {
    type IntrafiExclusion as IntrafiExclusion,
    IntrafiExclusionsPage as IntrafiExclusionsPage,
    type IntrafiExclusionCreateParams as IntrafiExclusionCreateParams,
    type IntrafiExclusionListParams as IntrafiExclusionListParams,
  };
}
