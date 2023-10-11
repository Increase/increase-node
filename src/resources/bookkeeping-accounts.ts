// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as BookkeepingAccountsAPI from 'increase/resources/bookkeeping-accounts';
import { Page, type PageParams } from 'increase/pagination';

export class BookkeepingAccounts extends APIResource {
  /**
   * Create a Bookkeeping Account
   */
  create(
    body: BookkeepingAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingAccount> {
    return this.post('/bookkeeping_accounts', { body, ...options });
  }

  /**
   * List Bookkeeping Accounts
   */
  list(
    query?: BookkeepingAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingAccountsPage, BookkeepingAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<BookkeepingAccountsPage, BookkeepingAccount>;
  list(
    query: BookkeepingAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingAccountsPage, BookkeepingAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/bookkeeping_accounts', BookkeepingAccountsPage, { query, ...options });
  }
}

export class BookkeepingAccountsPage extends Page<BookkeepingAccount> {}

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
  export import BookkeepingAccount = BookkeepingAccountsAPI.BookkeepingAccount;
  export import BookkeepingAccountsPage = BookkeepingAccountsAPI.BookkeepingAccountsPage;
  export import BookkeepingAccountCreateParams = BookkeepingAccountsAPI.BookkeepingAccountCreateParams;
  export import BookkeepingAccountListParams = BookkeepingAccountsAPI.BookkeepingAccountListParams;
}
