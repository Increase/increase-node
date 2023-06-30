// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as AccountStatements_ from 'increase/resources/account-statements';
import * as API from './';

export class AccountStatements extends APIResource {
  /**
   * Simulates an [Account Statement](#account-statements) being created for an
   * account. In production, Account Statements are generated once per month.
   */
  create(
    body: AccountStatementCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<AccountStatements_.AccountStatement>> {
    return this.post('/simulations/account_statements', { body, ...options });
  }
}

export interface AccountStatementCreateParams {
  /**
   * The identifier of the Account the statement is for.
   */
  account_id: string;
}

export namespace AccountStatements {
  export import AccountStatementCreateParams = API.AccountStatementCreateParams;
}
