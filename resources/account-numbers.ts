// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class AccountNumbers extends APIResource {
  /**
   * Create an Account Number
   */
  create(
    body: AccountNumberCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountNumber>> {
    return this.post('/account_numbers', { body, ...options });
  }

  /**
   * Retrieve an Account Number
   */
  retrieve(accountNumberId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AccountNumber>> {
    return this.get(`/account_numbers/${accountNumberId}`, options);
  }

  /**
   * Update an Account Number
   */
  update(
    accountNumberId: string,
    body: AccountNumberUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountNumber>> {
    return this.patch(`/account_numbers/${accountNumberId}`, { body, ...options });
  }

  /**
   * List Account Numbers
   */
  list(query?: AccountNumberListParams, options?: Core.RequestOptions): Core.PagePromise<AccountNumbersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountNumbersPage>;
  list(
    query: AccountNumberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountNumbersPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/account_numbers', AccountNumbersPage, { query, ...options });
  }
}

export class AccountNumbersPage extends Page<AccountNumber> {}

/**
 * Each account can have multiple account and routing numbers. We recommend that
 * you use a set per vendor. This is similar to how you use different passwords for
 * different websites. Account numbers can also be used to seamlessly reconcile
 * inbound payments. Generating a unique account number per vendor ensures you
 * always know the originator of an incoming payment.
 */
export interface AccountNumber {
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
   * The Account Number identifier.
   */
  id: string;

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
   */
  status?: 'active' | 'disabled' | 'canceled';
}

export interface AccountNumberListParams extends PageParams {
  /**
   * Filter Account Numbers to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * The status to retrieve Account Numbers for.
   */
  status?: 'active' | 'disabled' | 'canceled';
}
