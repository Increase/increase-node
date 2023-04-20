// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class BookkeepingEntries extends APIResource {
  /**
   * List Bookkeeping Entries
   */
  list(
    query?: BookkeepingEntryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntriesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<BookkeepingEntriesPage>;
  list(
    query: BookkeepingEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntriesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/bookkeeping_entries', BookkeepingEntriesPage, { query, ...options });
  }
}

export class BookkeepingEntriesPage extends Page<BookkeepingEntry> {}

/**
 * Entries are T-account entries recording debits and credits.
 */
export interface BookkeepingEntry {
  /**
   * The identifier for the Account the Entry belongs to.
   */
  account_id: string;

  /**
   * The Entry amount in the minor unit of its currency. For dollars, for example,
   * this is cents.
   */
  amount: number;

  /**
   * The identifier for the Account the Entry belongs to.
   */
  entry_set_id: string;

  /**
   * The entry identifier.
   */
  id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_entry`.
   */
  type: 'bookkeeping_entry';
}

export interface BookkeepingEntryListParams extends PageParams {}
