// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './';
import { Page, PageParams } from 'increase/pagination';

export class BookkeepingAccounts extends APIResource {
  /**
   * Create a Bookkeeping Account
   */
  create(
    body: BookkeepingAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BookkeepingAccount>> {
    return this.post('/bookkeeping_accounts', { body, ...options });
  }

  /**
   * List Bookkeeping Accounts
   */
  list(
    query?: BookkeepingAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<BookkeepingAccountsPage>;
  list(
    query: BookkeepingAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/bookkeeping_accounts', BookkeepingAccountsPage, { query, ...options });
  }
}

export class BookkeepingAccountsPage extends Page<BookkeepingAccount> {}
// alias so we can export it in the namespace
type _BookkeepingAccountsPage = BookkeepingAccountsPage;

/**
 * Accounts are T-accounts. They can store accounting entries.
 */
export interface BookkeepingAccount {
  /**
   * The account identifier.
   */
  id: string;

  /**
   * The API Account associated with this bookkeeping account.
   */
  account_id: string | null;

  /**
   * The compliance category of the account.
   *
   * - `commingled_cash` - A cash in an commingled Increase Account.
   * - `customer_balance` - A customer balance.
   */
  compliance_category: 'commingled_cash' | 'customer_balance' | null;

  /**
   * The Entity associated with this bookkeeping account.
   */
  entity_id: string | null;

  /**
   * The name you choose for the account.
   */
  name: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_account`.
   */
  type: 'bookkeeping_account';
}

export interface BookkeepingAccountCreateParams {
  /**
   * The name you choose for the account.
   */
  name: string;

  /**
   * The entity, if `compliance_category` is `commingled_cash`.
   */
  account_id?: string;

  /**
   * The account compliance category.
   *
   * - `commingled_cash` - A cash in an commingled Increase Account.
   * - `customer_balance` - A customer balance.
   */
  compliance_category?: 'commingled_cash' | 'customer_balance';

  /**
   * The entity, if `compliance_category` is `customer_balance`.
   */
  entity_id?: string;
}

export interface BookkeepingAccountListParams extends PageParams {}

export namespace BookkeepingAccounts {
  export import BookkeepingAccount = API.BookkeepingAccount;
  export type BookkeepingAccountsPage = _BookkeepingAccountsPage;
  export import BookkeepingAccountCreateParams = API.BookkeepingAccountCreateParams;
  export import BookkeepingAccountListParams = API.BookkeepingAccountListParams;
}
