// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as ExternalAccountsAPI from './external-accounts';
import { Page, type PageParams } from '../pagination';

export class ExternalAccounts extends APIResource {
  /**
   * Create an External Account
   */
  create(body: ExternalAccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<ExternalAccount> {
    return this._client.post('/external_accounts', { body, ...options });
  }

  /**
   * Retrieve an External Account
   */
  retrieve(externalAccountId: string, options?: Core.RequestOptions): Core.APIPromise<ExternalAccount> {
    return this._client.get(`/external_accounts/${externalAccountId}`, options);
  }

  /**
   * Update an External Account
   */
  update(
    externalAccountId: string,
    body: ExternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount> {
    return this._client.patch(`/external_accounts/${externalAccountId}`, { body, ...options });
  }

  /**
   * List External Accounts
   */
  list(
    query?: ExternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage, ExternalAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExternalAccountsPage, ExternalAccount>;
  list(
    query: ExternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage, ExternalAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/external_accounts', ExternalAccountsPage, { query, ...options });
  }
}

export class ExternalAccountsPage extends Page<ExternalAccount> {}

/**
 * External Accounts represent accounts at financial institutions other than
 * Increase. You can use this API to store their details for reuse.
 */
export interface ExternalAccount {
  /**
   * The External Account's identifier.
   */
  id: string;

  /**
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  account_holder: 'business' | 'individual' | 'unknown';

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
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `other` - A different type of account.
   */
  funding: 'checking' | 'savings' | 'other';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The External Account's status.
   *
   * - `active` - The External Account is active.
   * - `archived` - The External Account is archived and won't appear in the
   *   dashboard.
   */
  status: 'active' | 'archived';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `external_account`.
   */
  type: 'external_account';

  /**
   * If you have verified ownership of the External Account.
   *
   * - `unverified` - The External Account has not been verified.
   * - `pending` - The External Account is in the process of being verified.
   * - `verified` - The External Account is verified.
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
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   * - `unknown` - It's unknown what kind of entity owns the External Account.
   */
  account_holder?: 'business' | 'individual' | 'unknown';

  /**
   * The type of the destination account. Defaults to `checking`.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `other` - A different type of account.
   */
  funding?: 'checking' | 'savings' | 'other';
}

export interface ExternalAccountUpdateParams {
  /**
   * The type of entity that owns the External Account.
   *
   * - `business` - The External Account is owned by a business.
   * - `individual` - The External Account is owned by an individual.
   */
  account_holder?: 'business' | 'individual';

  /**
   * The description you choose to give the external account.
   */
  description?: string;

  /**
   * The funding type of the External Account.
   *
   * - `checking` - A checking account.
   * - `savings` - A savings account.
   * - `other` - A different type of account.
   */
  funding?: 'checking' | 'savings' | 'other';

  /**
   * The status of the External Account.
   *
   * - `active` - The External Account is active.
   * - `archived` - The External Account is archived and won't appear in the
   *   dashboard.
   */
  status?: 'active' | 'archived';
}

export interface ExternalAccountListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter External Accounts to those with the specified Routing Number.
   */
  routing_number?: string;

  status?: ExternalAccountListParams.Status;
}

export namespace ExternalAccountListParams {
  export interface Status {
    /**
     * Filter External Accounts for those with the specified status or statuses. For
     * GET requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'active' | 'archived'>;
  }
}

export namespace ExternalAccounts {
  export import ExternalAccount = ExternalAccountsAPI.ExternalAccount;
  export import ExternalAccountsPage = ExternalAccountsAPI.ExternalAccountsPage;
  export import ExternalAccountCreateParams = ExternalAccountsAPI.ExternalAccountCreateParams;
  export import ExternalAccountUpdateParams = ExternalAccountsAPI.ExternalAccountUpdateParams;
  export import ExternalAccountListParams = ExternalAccountsAPI.ExternalAccountListParams;
}
