// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Accounts extends APIResource {
  /**
   * Create an Account
   */
  create(body: AccountCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.post('/accounts', { body, ...options });
  }

  /**
   * Retrieve an Account
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.get(`/accounts/${accountId}`, options);
  }

  /**
   * Update an Account
   */
  update(
    accountId: string,
    body: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Account>> {
    return this.patch(`/accounts/${accountId}`, { body, ...options });
  }

  /**
   * List Accounts
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.PagePromise<AccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountsPage>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/accounts', AccountsPage, { query, ...options });
  }

  /**
   * Close an Account
   */
  close(accountId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.post(`/accounts/${accountId}/close`, options);
  }
}

export class AccountsPage extends Page<Account> {}

/**
 * Accounts are your bank accounts with Increase. They store money, receive
 * transfers, and send payments. They earn interest and have depository insurance.
 */
export interface Account {
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account
   * currency.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The identifier for the Entity the Account belongs to.
   */
  entity_id: string | null;

  /**
   * The Account identifier.
   */
  id: string;

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity.
   */
  informational_entity_id: string | null;

  /**
   * The interest accrued but not yet paid, expressed as a string containing a
   * floating-point value.
   */
  interest_accrued: string;

  /**
   * The latest [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which
   * interest was accrued.
   */
  interest_accrued_at: string | null;

  /**
   * The Interest Rate currently being earned on the account, as a string containing
   * a decimal number. For example, a 1% interest rate would be represented as
   * "0.01".
   */
  interest_rate: string;

  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The status of the Account.
   */
  status: 'open' | 'closed';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account`.
   */
  type: 'account';
}

export interface AccountCreateParams {
  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The identifier for the Entity that will own the Account.
   */
  entity_id?: string;

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity. Its relationship to your group must be `informational`.
   */
  informational_entity_id?: string;

  /**
   * The identifier for the Program that this Account falls under. Required if you
   * operate more than one Program.
   */
  program_id?: string;
}

export interface AccountUpdateParams {
  /**
   * The new name of the Account.
   */
  name?: string;
}

export interface AccountListParams extends PageParams {
  created_at?: AccountListParams.CreatedAt;

  /**
   * Filter Accounts for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter Accounts for those belonging to the specified Entity as informational.
   */
  informational_entity_id?: string;

  /**
   * Filter Accounts for those with the specified status.
   */
  status?: 'open' | 'closed';
}

export namespace AccountListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}
