// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class BookkeepingEntries extends APIResource {
  /**
   * Retrieve a Bookkeeping Entry
   */
  retrieve(bookkeepingEntryId: string, options?: Core.RequestOptions): Core.APIPromise<BookkeepingEntry> {
    return this._client.get(`/bookkeeping_entries/${bookkeepingEntryId}`, options);
  }

  /**
   * List Bookkeeping Entries
   */
  list(
    query?: BookkeepingEntryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntriesPage, BookkeepingEntry>;
  list(options?: Core.RequestOptions): Core.PagePromise<BookkeepingEntriesPage, BookkeepingEntry>;
  list(
    query: BookkeepingEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntriesPage, BookkeepingEntry> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/bookkeeping_entries', BookkeepingEntriesPage, { query, ...options });
  }
}

export class BookkeepingEntriesPage extends Page<BookkeepingEntry> {}

/**
 * Entries are T-account entries recording debits and credits. Your compliance
 * setup might require annotating money movements using this API. Learn more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
 */
export interface BookkeepingEntry {
  /**
   * The entry identifier.
   */
  id: string;

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
   * When the entry set was created.
   */
  created_at: string;

  /**
   * The identifier for the Account the Entry belongs to.
   */
  entry_set_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_entry`.
   */
  type: 'bookkeeping_entry';
}

export interface BookkeepingEntryListParams extends PageParams {
  /**
   * The identifier for the Bookkeeping Account to filter by.
   */
  account_id?: string;
}

BookkeepingEntries.BookkeepingEntriesPage = BookkeepingEntriesPage;

export declare namespace BookkeepingEntries {
  export {
    type BookkeepingEntry as BookkeepingEntry,
    BookkeepingEntriesPage as BookkeepingEntriesPage,
    type BookkeepingEntryListParams as BookkeepingEntryListParams,
  };
}
