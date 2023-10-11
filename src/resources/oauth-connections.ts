// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as OauthConnectionsAPI from 'increase/resources/oauth-connections';
import { Page, type PageParams } from 'increase/pagination';

export class OauthConnections extends APIResource {
  /**
   * Retrieve an OAuth Connection
   */
  retrieve(oauthConnectionId: string, options?: Core.RequestOptions): Core.APIPromise<OauthConnection> {
    return this.get(`/oauth_connections/${oauthConnectionId}`, options);
  }

  /**
   * List OAuth Connections
   */
  list(
    query?: OauthConnectionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OauthConnectionsPage, OauthConnection>;
  list(options?: Core.RequestOptions): Core.PagePromise<OauthConnectionsPage, OauthConnection>;
  list(
    query: OauthConnectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OauthConnectionsPage, OauthConnection> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/oauth_connections', OauthConnectionsPage, { query, ...options });
  }
}

export class OauthConnectionsPage extends Page<OauthConnection> {}

/**
 * When a user authorizes your OAuth application, an OAuth Connection object is
 * created.
 */
export interface OauthConnection {
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

export interface OauthConnectionListParams extends PageParams {}

export namespace OauthConnections {
  export type OauthConnection = OauthConnectionsAPI.OauthConnection;
  export import OauthConnectionsPage = OauthConnectionsAPI.OauthConnectionsPage;
  export type OauthConnectionListParams = OauthConnectionsAPI.OauthConnectionListParams;
}
