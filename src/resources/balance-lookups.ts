// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as BalanceLookupsAPI from 'increase/resources/balance-lookups';

export class BalanceLookups extends APIResource {
  /**
   * Look up the balance for an Account
   */
  lookup(
    body: BalanceLookupLookupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceLookupLookupResponse> {
    return this.post('/balance_lookups', { body, ...options });
  }
}

/**
 * Represents a request to lookup the balance of an Account at a given point in
 * time.
 */
export interface BalanceLookupLookupResponse {
  /**
   * The identifier for the account for which the balance was queried.
   */
  account_id: string;

  /**
   * The Account's available balance, representing the current balance less any open
   * Pending Transactions on the Account.
   */
  available_balance: number;

  /**
   * The Account's current balance, representing the sum of all posted Transactions
   * on the Account.
   */
  current_balance: number;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `balance_lookup`.
   */
  type: 'balance_lookup';
}

export interface BalanceLookupLookupParams {
  /**
   * The Account to query the balance for.
   */
  account_id: string;

  /**
   * The moment to query the balance at. If not set, returns the current balances.
   */
  at_time?: string;
}

export namespace BalanceLookups {
  export type BalanceLookupLookupResponse = BalanceLookupsAPI.BalanceLookupLookupResponse;
  export type BalanceLookupLookupParams = BalanceLookupsAPI.BalanceLookupLookupParams;
}
