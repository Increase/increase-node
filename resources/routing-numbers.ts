// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import { Page, PageParams } from '~/pagination'
import * as Shared from '~/resources/shared'

export class RoutingNumbers extends APIResource {

  /**
   * You can use this API to confirm if a routing number is valid, such as when a
   * user is providing you with bank account details. Since routing numbers uniquely
   * identify a bank, this will always return 0 or 1 entry. In Sandbox, the only
   * valid routing number for this method is 110000000.
   */
  list(query: RoutingNumberListParams, options?: Core.RequestOptions): Core.PagePromise<RoutingNumbersPage>{
         return this.getAPIList('/routing_numbers', RoutingNumbersPage, { query, ...options })
       };
}

export class RoutingNumbersPage extends Page<RoutingNumber> {}

/**
 * Routing numbers are used to identify your bank in a financial transaction.
 */
export interface RoutingNumber  {
  /**
 * The name of the financial institution belonging to a routing number.
 */
name: string

/**
 * The nine digit routing number identifier.
 */
routing_number: string

/**
 * A constant representing the object's type. For this resource it will always be
 * `routing_number`.
 */
type: 'routing_number'
}

export interface RoutingNumberListParams extends PageParams {
  /**
 * Filter financial institutions by routing number.
 */
routing_number: string
}