// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class AccountStatements extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AccountStatement>> {
    return this.get(`/account_statements/${id}`, options);
  }

  list(
    query?: AccountStatementListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountStatementsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountStatementsPage>;
  list(
    query: AccountStatementListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountStatementsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/account_statements', AccountStatementsPage, { query, ...options });
  }
}

export class AccountStatementsPage extends Page<AccountStatement> {}

/**
 * Account Statements are generated monthly for every active Account. You can
 * access the statement's data via the API or retrieve a PDF with its details via
 * its associated File.
 */
export interface AccountStatement {
  /**
   * The identifier for the Account this Account Statement belongs to.
   */
  account_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * Statement was created.
   */
  created_at: string;

  /**
   * The Account's balance at the start of its statement period.
   */
  ending_balance: number;

  /**
   * The identifier of the File containing a PDF of the statement.
   */
  file_id: string;

  /**
   * The Account Statement identifier.
   */
  id: string;

  /**
   * The Account's balance at the start of its statement period.
   */
  starting_balance: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end
   * of the period the Account Statement covers.
   */
  statement_period_end: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the
   * start of the period the Account Statement covers.
   */
  statement_period_start: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_statement`.
   */
  type: 'account_statement';
}

export interface AccountStatementListParams extends PageParams {}
