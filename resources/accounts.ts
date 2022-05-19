// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Accounts extends APIResource {
  create(body: AccountCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.post('/accounts', { body, ...options });
  }

  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.get(`/accounts/${id}`, options);
  }

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

  close(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Account>> {
    return this.post(`/accounts/${id}/close`, options);
  }
}

export class AccountsPage extends Page<Account> {}

/**
 * Accounts are your bank accounts with Increase. They store money, receive
 * transfers, and send payments. They earn interest and have depository insurance.
 */
export interface Account {
  /**
   * The current balance of the Account in the minor unit of the currency. For
   * dollars, for example, this is cents.
   */
  balance: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account
   * currency.
   */
  currency: string;

  /**
   * The identifier for the Entity the Account belongs to.
   */
  entity_id: string | null;

  /**
   * The Account identifier.
   */
  id: string;

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
}

export interface AccountListParams extends PageParams {
  /**
   * Filter Accounts for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter Accounts for those with the specified status.
   */
  status?: 'open' | 'closed';
}
