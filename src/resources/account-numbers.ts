// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class AccountNumbers extends APIResource {
  /**
   * Create an Account Number
   */
  create(body: AccountNumberCreateParams, options?: Core.RequestOptions): Core.APIPromise<AccountNumber> {
    return this.post('/account_numbers', { body, ...options });
  }

  /**
   * Retrieve an Account Number
   */
  retrieve(accountNumberId: string, options?: Core.RequestOptions): Core.APIPromise<AccountNumber> {
    return this.get(`/account_numbers/${accountNumberId}`, options);
  }

  /**
   * Update an Account Number
   */
  update(
    accountNumberId: string,
    body: AccountNumberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountNumber> {
    return this.patch(`/account_numbers/${accountNumberId}`, { body, ...options });
  }

  /**
   * List Account Numbers
   */
  list(
    query?: AccountNumberListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountNumbersPage, AccountNumber>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountNumbersPage, AccountNumber>;
  list(
    query: AccountNumberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountNumbersPage, AccountNumber> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/account_numbers', AccountNumbersPage, { query, ...options });
  }
}

export class AccountNumbersPage extends Page<AccountNumber> {}
// alias so we can export it in the namespace
type _AccountNumbersPage = AccountNumbersPage;

/**
 * Each account can have multiple account and routing numbers. We recommend that
 * you use a set per vendor. This is similar to how you use different passwords for
 * different websites. Account numbers can also be used to seamlessly reconcile
 * inbound payments. Generating a unique account number per vendor ensures you
 * always know the originator of an incoming payment.
 */
export interface AccountNumber {
  /**
   * The Account Number identifier.
   */
  id: string;

  /**
   * The identifier for the account this Account Number belongs to.
   */
  account_id: string;

  /**
   * The account number.
   */
  account_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * Number was created.
   */
  created_at: string;

  /**
   * The name you choose for the Account Number.
   */
  name: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * This indicates if payments can be made to the Account Number.
   *
   * - `active` - The account number is active.
   * - `disabled` - The account number is temporarily disabled.
   * - `canceled` - The account number is permanently disabled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_number`.
   */
  type: 'account_number';
}

export interface AccountNumberCreateParams {
  /**
   * The Account the Account Number should belong to.
   */
  account_id: string;

  /**
   * The name you choose for the Account Number.
   */
  name: string;
}

export interface AccountNumberUpdateParams {
  /**
   * The name you choose for the Account Number.
   */
  name?: string;

  /**
   * This indicates if transfers can be made to the Account Number.
   *
   * - `active` - The account number is active.
   * - `disabled` - The account number is temporarily disabled.
   * - `canceled` - The account number is permanently disabled.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export interface AccountNumberListParams extends PageParams {
  /**
   * Filter Account Numbers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: AccountNumberListParams.CreatedAt;

  /**
   * The status to retrieve Account Numbers for.
   *
   * - `active` - The account number is active.
   * - `disabled` - The account number is temporarily disabled.
   * - `canceled` - The account number is permanently disabled.
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export namespace AccountNumberListParams {
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

export namespace AccountNumbers {
  export import AccountNumber = API.AccountNumber;
  export type AccountNumbersPage = _AccountNumbersPage;
  export import AccountNumberCreateParams = API.AccountNumberCreateParams;
  export import AccountNumberUpdateParams = API.AccountNumberUpdateParams;
  export import AccountNumberListParams = API.AccountNumberListParams;
}
