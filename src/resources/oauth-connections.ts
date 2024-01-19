// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as OAuthConnectionsAPI from 'increase/resources/oauth-connections';
import { Page, type PageParams } from 'increase/pagination';

export class OAuthConnections extends APIResource {
  /**
   * Retrieve an OAuth Connection
   */
  retrieve(oauthConnectionId: string, options?: Core.RequestOptions): Core.APIPromise<OAuthConnection> {
    return this._client.get(`/oauth_connections/${oauthConnectionId}`, options);
  }

  /**
   * List OAuth Connections
   */
  list(
    query?: OAuthConnectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthConnectionsPage, OAuthConnection>;
  list(options?: Core.RequestOptions): Core.PagePromise<OAuthConnectionsPage, OAuthConnection>;
  list(
    query: OAuthConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthConnectionsPage, OAuthConnection> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/oauth_connections', OAuthConnectionsPage, { query, ...options });
  }
}

export class OAuthConnectionsPage extends Page<OAuthConnection> {}

/**
 * When a user authorizes your OAuth application, an OAuth Connection object is
 * created. Learn more about OAuth
 * [here](https://increase.com/documentation/oauth).
 */
export interface OAuthConnection {
  /**
   * The OAuth Connection's identifier.
   */
  id: string;

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
   * Whether the connection is active.
   *
   * - `active` - The OAuth connection is active.
   * - `inactive` - The OAuth connection is permanently deactivated.
   */
  status: 'active' | 'inactive';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `oauth_connection`.
   */
  type: 'oauth_connection';
}

export interface OAuthConnectionListParams extends PageParams {}

export namespace OAuthConnections {
  export import OAuthConnection = OAuthConnectionsAPI.OAuthConnection;
  export import OAuthConnectionsPage = OAuthConnectionsAPI.OAuthConnectionsPage;
  export import OAuthConnectionListParams = OAuthConnectionsAPI.OAuthConnectionListParams;
}
