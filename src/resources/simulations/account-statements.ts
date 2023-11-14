// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsAccountStatementsAPI from 'increase/resources/simulations/account-statements';
import * as AccountStatementsAPI from 'increase/resources/account-statements';

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

export namespace AccountStatements {
  export import AccountStatementCreateParams = SimulationsAccountStatementsAPI.AccountStatementCreateParams;
}
