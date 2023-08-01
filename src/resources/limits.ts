// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class Limits extends APIResource {
  /**
   * Create a Limit
   */
  create(body: LimitCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Limit>> {
    return this.post('/limits', { body, ...options });
  }

  /**
   * Retrieve a Limit
   */
  retrieve(limitId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Limit>> {
    return this.get(`/limits/${limitId}`, options);
  }

  /**
   * Update a Limit
   */
  update(
    limitId: string,
    body: LimitUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Limit>> {
    return this.patch(`/limits/${limitId}`, { body, ...options });
  }

  /**
   * List Limits
   */
  list(query?: LimitListParams, options?: Core.RequestOptions): Core.PagePromise<LimitsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LimitsPage>;
  list(
    query: LimitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LimitsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/limits', LimitsPage, { query, ...options });
  }
}

export class LimitsPage extends Page<Limit> {}
// alias so we can export it in the namespace
type _LimitsPage = LimitsPage;

/**
 * You can set limits at the Account, Account Number, or Card level. Limits applied
 * to Accounts will apply to all Account Numbers and Cards in the Account. You can
 * specify any number of Limits and they will all be applied to inbound debits and
 * card authorizations. Volume and count Limits are designed to prevent
 * unauthorized debits.
 */
export interface Limit {
  /**
   * The Limit identifier.
   */
  id: string;

  /**
   * The interval for the metric. This is required if `metric` is `count` or
   * `volume`.
   *
   * - `transaction` - Enforce the Limit per-transaction.
   * - `day` - Enforce the Limit based on the trailing 24 hour period.
   * - `week` - Enforce the Limit based on the trailing seven days.
   * - `month` - Enforce the Limit based on the trailing month, going back to the
   *   current day in the previous month, or as close as possible given month length
   *   differences.
   * - `year` - Enforce the Limit based on the trailing 365 days.
   * - `all_time` - Enforce the Limit for all time.
   */
  interval: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time' | null;

  /**
   * The metric for the Limit.
   *
   * - `count` - The maximum number of debits allowed.
   * - `volume` - The maximum volume of debits allowed in the minor unit of the
   *   model's currency.
   */
  metric: 'count' | 'volume';

  /**
   * The identifier of the Account Number, Account, or Card the Limit applies to.
   */
  model_id: string;

  /**
   * The type of the model you wish to associate the Limit with.
   *
   * - `account` - Enforce the Limit for the entire account.
   * - `account_number` - Enforce the Limit for this specific route.
   * - `card` - Enforce the Limit for this specific card.
   */
  model_type: 'account' | 'account_number' | 'card';

  /**
   * The current status of the Limit.
   *
   * - `active` - The Limit is active.
   * - `inactive` - The Limit is temporarily disabled.
   */
  status: 'active' | 'inactive';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `limit`.
   */
  type: 'limit';

  /**
   * The value to evaluate the Limit against.
   */
  value: number;
}

export interface LimitCreateParams {
  /**
   * The metric for the limit.
   *
   * - `count` - The maximum number of debits allowed.
   * - `volume` - The maximum volume of debits allowed in the minor unit of the
   *   model's currency.
   */
  metric: 'count' | 'volume';

  /**
   * The identifier of the Account, Account Number, or Card you wish to associate the
   * limit with.
   */
  model_id: string;

  /**
   * The value to test the limit against.
   */
  value: number;

  /**
   * The interval for the metric. Required if `metric` is `count` or `volume`.
   *
   * - `transaction` - Enforce the limit per-transaction.
   * - `day` - Enforce the limit based on the previous 24 hour period.
   * - `week` - Enforce the limit based on the previous seven days.
   * - `month` - Enforce the limit based on the previous month, going back to the
   *   current day in the previous month, or as close as possible given month length
   *   differences.
   * - `year` - Enforce the limit based on the previous year.
   * - `all_time` - Enforce the limit for all time.
   */
  interval?: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time';
}

export interface LimitUpdateParams {
  /**
   * The status to update the limit with.
   *
   * - `inactive` - Disable the limit temporarily.
   * - `active` - Activate the limit.
   */
  status: 'inactive' | 'active';
}

export interface LimitListParams extends PageParams {
  /**
   * The model to retrieve limits for.
   */
  model_id?: string;

  /**
   * The status to retrieve limits for.
   */
  status?: string;
}

export namespace Limits {
  export import Limit = API.Limit;
  export type LimitsPage = _LimitsPage;
  export import LimitCreateParams = API.LimitCreateParams;
  export import LimitUpdateParams = API.LimitUpdateParams;
  export import LimitListParams = API.LimitListParams;
}
