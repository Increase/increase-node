// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class ExternalAccounts extends APIResource {
  /**
   * Create an External Account
   */
  create(
    body: ExternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    return this.post('/external_accounts', { body, ...options });
  }

  /**
   * Retrieve an External Account
   */
  retrieve(
    externalAccountId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    return this.get(`/external_accounts/${externalAccountId}`, options);
  }

  /**
   * Update an External Account
   */
  update(
    externalAccountId: string,
    body: ExternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    return this.patch(`/external_accounts/${externalAccountId}`, { body, ...options });
  }

  /**
   * List External Accounts
   */
  list(
    query?: ExternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExternalAccountsPage>;
  list(
    query: ExternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/external_accounts', ExternalAccountsPage, { query, ...options });
  }
}

export class ExternalAccountsPage extends Page<ExternalAccount> {}

/**
 * External Accounts represent accounts at financial institutions other than
 * Increase. You can use this API to store their details for reuse.
 */
export interface ExternalAccount {
  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the External Account was created.
   */
  created_at: string;

  /**
   * The External Account's description for display purposes.
   */
  description: string;

  /**
   * The type of the account to which the transfer will be sent.
   */
  funding: 'checking' | 'savings' | 'other';

  /**
   * The External Account's identifier.
   */
  id: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The External Account's status.
   */
  status: 'active' | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `external_account`.
   */
  type: 'external_account';

  /**
   * If you have verified ownership of the External Account.
   */
  verification_status: 'unverified' | 'pending' | 'verified';
}

export interface ExternalAccountCreateParams {
  /**
   * The account number for the destination account.
   */
  account_number: string;

  /**
   * The name you choose for the Account.
   */
  description: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number: string;

  /**
   * The type of the destination account. Defaults to `checking`.
   */
  funding?: 'checking' | 'savings' | 'other';
}

export interface ExternalAccountUpdateParams {
  /**
   * The description you choose to give the external account.
   */
  description?: string;

  /**
   * The status of the External Account.
   */
  status?: 'active' | 'archived';
}

export interface ExternalAccountListParams extends PageParams {
  status?: ExternalAccountListParams.Status;
}

export namespace ExternalAccountListParams {
  export interface Status {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'archived'>;
  }
}
