// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountStatementsAPI from '../account-statements';

export class AccountStatements extends APIResource {
  /**
   * Simulates an [Account Statement](#account-statements) being created for an
   * account. In production, Account Statements are generated once per month.
   */
  create(
    body: AccountStatementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountStatementsAPI.AccountStatement> {
    return this._client.post('/simulations/account_statements', { body, ...options });
  }
}

export interface AccountStatementCreateParams {
  /**
   * The identifier of the Account the statement is for.
   */
  account_id: string;
}

export declare namespace AccountStatements {
  export { type AccountStatementCreateParams as AccountStatementCreateParams };
}
