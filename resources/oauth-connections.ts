// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class OAuthConnections extends APIResource {
  retrieve(
    oauthConnectionId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<OAuthConnection>> {
    return this.get(`/oauth_connections/${oauthConnectionId}`, options);
  }

  list(
    query?: OAuthConnectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthConnectionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<OAuthConnectionsPage>;
  list(
    query: OAuthConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthConnectionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/oauth_connections', OAuthConnectionsPage, { query, ...options });
  }
}

export class OAuthConnectionsPage extends Page<OAuthConnection> {}

/**
 * When a user authorizes your OAuth application, an OAuth Connection object is
 * created.
 */
export interface OAuthConnection {
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Connection was created.
   */
  created_at: string;

  /**
   * The identifier of the Group that has authorized your OAuth application.
   */
  group_id: string;

  /**
   * The OAuth Connection's identifier.
   */
  id: string;

  /**
   * Whether the connection is active.
   */
  status: 'active' | 'inactive';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `oauth_connection`.
   */
  type: 'oauth_connection';
}

export interface OAuthConnectionListParams extends PageParams {}
