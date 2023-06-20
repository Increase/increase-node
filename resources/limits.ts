// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

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
   */
  interval: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time' | null;

  /**
   * The metric for the Limit.
   */
  metric: 'count' | 'volume';

  /**
   * The identifier of the Account Number, Account, or Card the Limit applies to.
   */
  model_id: string;

  /**
   * The type of the model you wish to associate the Limit with.
   */
  model_type: 'account' | 'account_number' | 'card';

  /**
   * The current status of the Limit.
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
   */
  metric: 'count' | 'volume';

  /**
   * The identifier of the Account or Account Number you wish to associate the limit
   * with.
   */
  model_id: string;

  /**
   * The value to test the limit against.
   */
  value: number;

  /**
   * The interval for the metric. Required if `metric` is `count` or `volume`.
   */
  interval?: 'transaction' | 'day' | 'week' | 'month' | 'year' | 'all_time';
}

export interface LimitUpdateParams {
  /**
   * The status to update the limit with.
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
  export import LimitsPage = API.LimitsPage;
  export import LimitCreateParams = API.LimitCreateParams;
  export import LimitUpdateParams = API.LimitUpdateParams;
  export import LimitListParams = API.LimitListParams;
}
