// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class IntrafiBalances extends APIResource {
  /**
   * Returns the IntraFi balance for the given account. IntraFi may sweep funds to
   * multiple banks. This endpoint will include both the total balance and the amount
   * swept to each institution.
   *
   * @example
   * ```ts
   * const intrafiBalance =
   *   await client.intrafiBalances.intrafiBalance(
   *     'account_in71c4amph0vgo2qllky',
   *   );
   * ```
   */
  intrafiBalance(accountId: string, options?: Core.RequestOptions): Core.APIPromise<IntrafiBalance> {
    return this._client.get(`/accounts/${accountId}/intrafi_balance`, options);
  }
}

/**
 * When using IntraFi, each account's balance over the standard FDIC insurance
 * amount is swept to various other institutions. Funds are rebalanced across banks
 * as needed once per business day.
 */
export interface IntrafiBalance {
  /**
   * The identifier of this balance.
   */
  id: string;

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
     * The identifier of this balance.
     */
    id: string;

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

export declare namespace IntrafiBalances {
  export { type IntrafiBalance as IntrafiBalance };
}
