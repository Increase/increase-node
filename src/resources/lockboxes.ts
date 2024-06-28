// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LockboxesAPI from './lockboxes';
import { Page, type PageParams } from '../pagination';

export class Lockboxes extends APIResource {
  /**
   * Create a Lockbox
   */
  create(body: LockboxCreateParams, options?: Core.RequestOptions): Core.APIPromise<Lockbox> {
    return this._client.post('/lockboxes', { body, ...options });
  }

  /**
   * Retrieve a Lockbox
   */
  retrieve(lockboxId: string, options?: Core.RequestOptions): Core.APIPromise<Lockbox> {
    return this._client.get(`/lockboxes/${lockboxId}`, options);
  }

  /**
   * Update a Lockbox
   */
  update(
    lockboxId: string,
    body: LockboxUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Lockbox> {
    return this._client.patch(`/lockboxes/${lockboxId}`, { body, ...options });
  }

  /**
   * List Lockboxes
   */
  list(query?: LockboxListParams, options?: Core.RequestOptions): Core.PagePromise<LockboxesPage, Lockbox>;
  list(options?: Core.RequestOptions): Core.PagePromise<LockboxesPage, Lockbox>;
  list(
    query: LockboxListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LockboxesPage, Lockbox> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/lockboxes', LockboxesPage, { query, ...options });
  }
}

export class LockboxesPage extends Page<Lockbox> {}

/**
 * Lockboxes are physical locations that can receive mail containing paper checks.
 * Increase will automatically create a Check Deposit for checks received this way.
 */
export interface Lockbox {
  /**
   * The Lockbox identifier.
   */
  id: string;

  /**
   * The identifier for the Account checks sent to this lockbox will be deposited
   * into.
   */
  account_id: string;

  /**
   * The mailing address for the Lockbox.
   */
  address: Lockbox.Address;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Lockbox
   * was created.
   */
  created_at: string;

  /**
   * The description you choose for the Lockbox.
   */
  description: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * This indicates if mail can be sent to this address.
   *
   * - `active` - This Lockbox is active. Checks mailed to it will be deposited
   *   automatically.
   * - `inactive` - This Lockbox is inactive. Checks mailed to it will not be
   *   deposited.
   */
  status: 'active' | 'inactive';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `lockbox`.
   */
  type: 'lockbox';
}

export namespace Lockbox {
  /**
   * The mailing address for the Lockbox.
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
    line2: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the state of
     * the address.
     */
    state: string;
  }
}

/**
 * A list of Lockbox objects.
 */
export interface LockboxList {
  /**
   * The contents of the list.
   */
  data: Array<Lockbox>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;
}

export interface LockboxCreateParams {
  /**
   * The Account checks sent to this Lockbox should be deposited into.
   */
  account_id: string;

  /**
   * The description you choose for the Lockbox, for display purposes.
   */
  description?: string;
}

export interface LockboxUpdateParams {
  /**
   * The description you choose for the Lockbox.
   */
  description?: string;

  /**
   * This indicates if checks can be sent to the Lockbox.
   *
   * - `active` - This Lockbox is active. Checks mailed to it will be deposited
   *   automatically.
   * - `inactive` - This Lockbox is inactive. Checks mailed to it will not be
   *   deposited.
   */
  status?: 'active' | 'inactive';
}

export interface LockboxListParams extends PageParams {
  /**
   * Filter Lockboxes to those associated with the provided Account.
   */
  account_id?: string;

  created_at?: LockboxListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace LockboxListParams {
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

export namespace Lockboxes {
  export import Lockbox = LockboxesAPI.Lockbox;
  export import LockboxList = LockboxesAPI.LockboxList;
  export import LockboxesPage = LockboxesAPI.LockboxesPage;
  export import LockboxCreateParams = LockboxesAPI.LockboxCreateParams;
  export import LockboxUpdateParams = LockboxesAPI.LockboxUpdateParams;
  export import LockboxListParams = LockboxesAPI.LockboxListParams;
}
