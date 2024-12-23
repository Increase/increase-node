// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class OAuthApplications extends APIResource {
  /**
   * Retrieve an OAuth Application
   */
  retrieve(oauthApplicationId: string, options?: Core.RequestOptions): Core.APIPromise<OAuthApplication> {
    return this._client.get(`/oauth_applications/${oauthApplicationId}`, options);
  }

  /**
   * List OAuth Applications
   */
  list(
    query?: OAuthApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthApplicationsPage, OAuthApplication>;
  list(options?: Core.RequestOptions): Core.PagePromise<OAuthApplicationsPage, OAuthApplication>;
  list(
    query: OAuthApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthApplicationsPage, OAuthApplication> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/oauth_applications', OAuthApplicationsPage, { query, ...options });
  }
}

export class OAuthApplicationsPage extends Page<OAuthApplication> {}

/**
 * Create an OAuth Application via the Dashboard. Learn more about OAuth
 * [here](https://increase.com/documentation/oauth).
 */
export interface OAuthApplication {
  /**
   * The OAuth Application's identifier.
   */
  id: string;

  /**
   * The OAuth Application's client_id. Use this to authenticate with the OAuth
   * Application.
   */
  client_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Application was created.
   */
  created_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Application was deleted.
   */
  deleted_at: string | null;

  /**
   * The name you chose for this OAuth Application.
   */
  name: string | null;

  /**
   * Whether the application is active.
   *
   * - `active` - The application is active and can be used by your users.
   * - `deleted` - The application is deleted.
   */
  status: 'active' | 'deleted';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `oauth_application`.
   */
  type: 'oauth_application';
}

export interface OAuthApplicationListParams extends PageParams {}

OAuthApplications.OAuthApplicationsPage = OAuthApplicationsPage;

export declare namespace OAuthApplications {
  export {
    type OAuthApplication as OAuthApplication,
    OAuthApplicationsPage as OAuthApplicationsPage,
    type OAuthApplicationListParams as OAuthApplicationListParams,
  };
}
