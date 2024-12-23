// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Groups extends APIResource {
  /**
   * Returns details for the currently authenticated Group.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Group> {
    return this._client.get('/groups/current', options);
  }
}

/**
 * Groups represent organizations using Increase. You can retrieve information
 * about your own organization via the API. More commonly, OAuth platforms can
 * retrieve information about the organizations that have granted them access.
 * Learn more about OAuth [here](https://increase.com/documentation/oauth).
 */
export interface Group {
  /**
   * The Group identifier.
   */
  id: string;

  /**
   * If the Group is allowed to create ACH debits.
   *
   * - `disabled` - The Group cannot make ACH debits.
   * - `enabled` - The Group can make ACH debits.
   */
  ach_debit_status: 'disabled' | 'enabled';

  /**
   * If the Group is activated or not.
   *
   * - `unactivated` - The Group is not activated.
   * - `activated` - The Group is activated.
   */
  activation_status: 'unactivated' | 'activated';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Group
   * was created.
   */
  created_at: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `group`.
   */
  type: 'group';
}

export declare namespace Groups {
  export { type Group as Group };
}
