// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as BalancesAPI from 'increase/resources/intrafi/balances';

export class Balances extends APIResource {
  /**
   * Get IntraFi balances by bank
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<IntrafiBalance> {
    return this._client.get(`/intrafi_balances/${accountId}`, options);
  }
}

/**
 * When using IntraFi, each account's balance over the standard FDIC insurance
 * amount are swept to various other institutions. Funds are rebalanced across
 * banks as needed once per business day.
 */
export interface IntrafiBalance {
  /**
   * Each entry represents a balance held at a different bank. IntraFi separates the
   * total balance across many participating banks in the network.
   */
  balances: Array<IntrafiBalance.Balance>;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the account
   * currency.
   *
   * - `CAD` - Canadian Dollar (CAD)
   * - `CHF` - Swiss Franc (CHF)
   * - `EUR` - Euro (EUR)
   * - `GBP` - British Pound (GBP)
   * - `JPY` - Japanese Yen (JPY)
   * - `USD` - US Dollar (USD)
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The date this balance reflects.
   */
  effective_date: string;

  /**
   * The total balance, in minor units of `currency`. Increase reports this balance
   * to IntraFi daily.
   */
  total_balance: number;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `intrafi_balance`.
   */
  type: 'intrafi_balance';
}

export namespace IntrafiBalance {
  export interface Balance {
    /**
     * The balance, in minor units of `currency`, held with this bank.
     */
    balance: number;

    /**
     * The name of the bank holding these funds.
     */
    bank: string;

    /**
     * The primary location of the bank.
     */
    bank_location: Balance.BankLocation | null;

    /**
     * The Federal Deposit Insurance Corporation (FDIC) certificate number of the bank.
     * Because many banks have the same or similar names, this can be used to uniquely
     * identify the institution.
     */
    fdic_certificate_number: string;
  }

  export namespace Balance {
    /**
     * The primary location of the bank.
     */
    export interface BankLocation {
      /**
       * The bank's city.
       */
      city: string;

      /**
       * The bank's state.
       */
      state: string;
    }
  }
}

export namespace Balances {
  export import IntrafiBalance = BalancesAPI.IntrafiBalance;
}
