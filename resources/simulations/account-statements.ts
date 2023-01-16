// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as AccountStatements_ from '~/resources/account-statements';

export class AccountStatements extends APIResource {
  /**
   * Simulates an Account Statement being created for an account.
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
