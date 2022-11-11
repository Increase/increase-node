// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class Groups extends APIResource {

  /**
   * Returns details for the currently authenticated Group.
   */
  retrieveDetails(options?: Core.RequestOptions): Promise<Core.APIResponse<Group>>{
         return this.get('/groups/current', options)
       };
}

/**
 * Groups represent organizations using Increase. You can retrieve information
 * about your own organization via the API, or (more commonly) OAuth platforms can
 * retrieve information about the organizations that have granted them access.
 */
export interface Group  {
  /**
 * If the Group is allowed to create ACH debits.
 */
ach_debit_status: 'disabled' | 'enabled'

/**
 * If the Group is activated or not.
 */
activation_status: 'unactivated' | 'activated'

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Group
 * was created.
 */
created_at: string

/**
 * The Group identifier.
 */
id: string

/**
 * A constant representing the object's type. For this resource it will always be
 * `group`.
 */
type: 'group'
}