// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as RoutingNumbersAPI from 'increase/resources/routing-numbers';
import { Page, type PageParams } from 'increase/pagination';

export class RoutingNumbers extends APIResource {
  /**
   * You can use this API to confirm if a routing number is valid, such as when a
   * user is providing you with bank account details. Since routing numbers uniquely
   * identify a bank, this will always return 0 or 1 entry. In Sandbox, the only
   * valid routing number for this method is 110000000.
   */
  list(
    query: RoutingNumberListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingNumbersPage, RoutingNumber> {
    return this._client.getAPIList('/routing_numbers', RoutingNumbersPage, { query, ...options });
  }
}

export class RoutingNumbersPage extends Page<RoutingNumber> {}

/**
 * Routing numbers are used to identify your bank in a financial transaction.
 */
export interface RoutingNumber {
  /**
   * This routing number's support for ACH Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  ach_transfers: 'supported' | 'not_supported';

  /**
   * The name of the financial institution belonging to a routing number.
   */
  name: string;

  /**
   * This routing number's support for Real-Time Payments Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  real_time_payments_transfers: 'supported' | 'not_supported';

  /**
   * The nine digit routing number identifier.
   */
  routing_number: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `routing_number`.
   */
  type: 'routing_number';

  /**
   * This routing number's support for Wire Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  wire_transfers: 'supported' | 'not_supported';
}

export interface RoutingNumberListParams extends PageParams {
  /**
   * Filter financial institutions by routing number.
   */
  routing_number: string;
}

export namespace RoutingNumbers {
  export import RoutingNumber = RoutingNumbersAPI.RoutingNumber;
  export import RoutingNumbersPage = RoutingNumbersAPI.RoutingNumbersPage;
  export import RoutingNumberListParams = RoutingNumbersAPI.RoutingNumberListParams;
}
