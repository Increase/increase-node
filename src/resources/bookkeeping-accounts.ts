// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as BookkeepingAccountsAPI from './bookkeeping-accounts';
import { Page, type PageParams } from '../pagination';

export class BookkeepingAccounts extends APIResource {
  /**
   * Create a Bookkeeping Account
   */
  create(
    body: BookkeepingAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingAccount> {
    return this._client.post('/bookkeeping_accounts', { body, ...options });
  }

  /**
   * Update a Bookkeeping Account
   */
  update(
    bookkeepingAccountId: string,
    body: BookkeepingAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingAccount> {
    return this._client.patch(`/bookkeeping_accounts/${bookkeepingAccountId}`, { body, ...options });
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
    return this._client.getAPIList('/bookkeeping_accounts', BookkeepingAccountsPage, { query, ...options });
  }

  /**
   * Retrieve a Bookkeeping Account Balance
   */
  balance(
    bookkeepingAccountId: string,
    query?: BookkeepingAccountBalanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingBalanceLookup>;
  balance(
    bookkeepingAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingBalanceLookup>;
  balance(
    bookkeepingAccountId: string,
    query: BookkeepingAccountBalanceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingBalanceLookup> {
    if (isRequestOptions(query)) {
      return this.balance(bookkeepingAccountId, {}, query);
    }
    return this._client.get(`/bookkeeping_accounts/${bookkeepingAccountId}/balance`, { query, ...options });
  }
}

export class BookkeepingAccountsPage extends Page<BookkeepingAccount> {}

/**
 * Accounts are T-accounts. They can store accounting entries. Your compliance
 * setup might require annotating money movements using this API. Learn more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
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
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

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

/**
 * Represents a request to lookup the balance of an Bookkeeping Account at a given
 * point in time.
 */
export interface BookkeepingBalanceLookup {
  /**
   * The Bookkeeping Account's current balance, representing the sum of all
   * Bookkeeping Entries on the Bookkeeping Account.
   */
  balance: number;

  /**
   * The identifier for the account for which the balance was queried.
   */
  bookkeeping_account_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_balance_lookup`.
   */
  type: 'bookkeeping_balance_lookup';
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

export interface BookkeepingAccountUpdateParams {
  /**
   * The name you choose for the account.
   */
  name: string;
}

export interface BookkeepingAccountListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export interface BookkeepingAccountBalanceParams {
  /**
   * The moment to query the balance at. If not set, returns the current balances.
   */
  at_time?: string;
}

export namespace BookkeepingAccounts {
  export import BookkeepingAccount = BookkeepingAccountsAPI.BookkeepingAccount;
  export import BookkeepingBalanceLookup = BookkeepingAccountsAPI.BookkeepingBalanceLookup;
  export import BookkeepingAccountsPage = BookkeepingAccountsAPI.BookkeepingAccountsPage;
  export import BookkeepingAccountCreateParams = BookkeepingAccountsAPI.BookkeepingAccountCreateParams;
  export import BookkeepingAccountUpdateParams = BookkeepingAccountsAPI.BookkeepingAccountUpdateParams;
  export import BookkeepingAccountListParams = BookkeepingAccountsAPI.BookkeepingAccountListParams;
  export import BookkeepingAccountBalanceParams = BookkeepingAccountsAPI.BookkeepingAccountBalanceParams;
}
