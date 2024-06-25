// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as OAuthConnectionsAPI from './oauth-connections';
import { Page, type PageParams } from '../pagination';

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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Connection was deleted.
   */
  deleted_at: string | null;

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

export interface OAuthConnectionListParams extends PageParams {
  status?: OAuthConnectionListParams.Status;
}

export namespace OAuthConnectionListParams {
  export interface Status {
    /**
     * Filter to OAuth Connections by their status. By default, return only the
     * `active` ones. For GET requests, this should be encoded as a comma-delimited
     * string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'inactive'>;
  }
}

export namespace OAuthConnections {
  export import OAuthConnection = OAuthConnectionsAPI.OAuthConnection;
  export import OAuthConnectionsPage = OAuthConnectionsAPI.OAuthConnectionsPage;
  export import OAuthConnectionListParams = OAuthConnectionsAPI.OAuthConnectionListParams;
}
