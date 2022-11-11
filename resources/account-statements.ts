// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import { Page, PageParams } from '~/pagination'
import * as Shared from '~/resources/shared'

export class AccountStatements extends APIResource {

  retrieve(accountStatementId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<AccountStatement>>{
         return this.get(`/account_statements/${accountStatementId}`, options)
       };

  list(query?: AccountStatementListParams, options?: Core.RequestOptions): Core.PagePromise<AccountStatementsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountStatementsPage>;
  list(query: AccountStatementListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<AccountStatementsPage>{
         if (isRequestOptions(query)) {
           return this.list({}, query);
         }

         return this.getAPIList('/account_statements', AccountStatementsPage, { query, ...options })
       };
}

export class AccountStatementsPage extends Page<AccountStatement> {}

/**
 * Account Statements are generated monthly for every active Account. You can
 * access the statement's data via the API or retrieve a PDF with its details via
 * its associated File.
 */
export interface AccountStatement  {
  /**
 * The identifier for the Account this Account Statement belongs to.
 */
account_id: string

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
 * Statement was created.
 */
created_at: string

/**
 * The Account's balance at the start of its statement period.
 */
ending_balance: number

/**
 * The identifier of the File containing a PDF of the statement.
 */
file_id: string

/**
 * The Account Statement identifier.
 */
id: string

/**
 * The Account's balance at the start of its statement period.
 */
starting_balance: number

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end
 * of the period the Account Statement covers.
 */
statement_period_end: string

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the
 * start of the period the Account Statement covers.
 */
statement_period_start: string

/**
 * A constant representing the object's type. For this resource it will always be
 * `account_statement`.
 */
type: 'account_statement'
}

export interface AccountStatementListParams extends PageParams {
  /**
 * Filter Account Statements to those belonging to the specified Account.
 */
account_id?: string

statement_period_start?: AccountStatementListParams.StatementPeriodStart
}

export namespace AccountStatementListParams {export interface StatementPeriodStart  {
  /**
 * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 * timestamp.
 */
after?: string

/**
 * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 * timestamp.
 */
before?: string

/**
 * Return results on or after this
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
 */
on_or_after?: string

/**
 * Return results on or before this
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
 */
on_or_before?: string
}}