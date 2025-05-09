// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class BookkeepingEntrySets extends APIResource {
  /**
   * Create a Bookkeeping Entry Set
   *
   * @example
   * ```ts
   * const bookkeepingEntrySet =
   *   await client.bookkeepingEntrySets.create({
   *     entries: [
   *       {
   *         account_id:
   *           'bookkeeping_account_9husfpw68pzmve9dvvc7',
   *         amount: 100,
   *       },
   *       {
   *         account_id:
   *           'bookkeeping_account_t2obldz1rcu15zr54umg',
   *         amount: -100,
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    body: BookkeepingEntrySetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingEntrySet> {
    return this._client.post('/bookkeeping_entry_sets', { body, ...options });
  }

  /**
   * Retrieve a Bookkeeping Entry Set
   *
   * @example
   * ```ts
   * const bookkeepingEntrySet =
   *   await client.bookkeepingEntrySets.retrieve(
   *     'bookkeeping_entry_set_n80c6wr2p8gtc6p4ingf',
   *   );
   * ```
   */
  retrieve(
    bookkeepingEntrySetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookkeepingEntrySet> {
    return this._client.get(`/bookkeeping_entry_sets/${bookkeepingEntrySetId}`, options);
  }

  /**
   * List Bookkeeping Entry Sets
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bookkeepingEntrySet of client.bookkeepingEntrySets.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: BookkeepingEntrySetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntrySetsPage, BookkeepingEntrySet>;
  list(options?: Core.RequestOptions): Core.PagePromise<BookkeepingEntrySetsPage, BookkeepingEntrySet>;
  list(
    query: BookkeepingEntrySetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BookkeepingEntrySetsPage, BookkeepingEntrySet> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/bookkeeping_entry_sets', BookkeepingEntrySetsPage, {
      query,
      ...options,
    });
  }
}

export class BookkeepingEntrySetsPage extends Page<BookkeepingEntrySet> {}

/**
 * Entry Sets are accounting entries that are transactionally applied. Your
 * compliance setup might require annotating money movements using this API. Learn
 * more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
 */
export interface BookkeepingEntrySet {
  /**
   * The entry set identifier.
   */
  id: string;

  /**
   * When the entry set was created.
   */
  created_at: string;

  /**
   * The timestamp of the entry set.
   */
  date: string;

  /**
   * The entries.
   */
  entries: Array<BookkeepingEntrySet.Entry>;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The transaction identifier, if any.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_entry_set`.
   */
  type: 'bookkeeping_entry_set';
}

export namespace BookkeepingEntrySet {
  export interface Entry {
    /**
     * The entry identifier.
     */
    id: string;

    /**
     * The bookkeeping account impacted by the entry.
     */
    account_id: string;

    /**
     * The amount of the entry in minor units.
     */
    amount: number;
  }
}

export interface BookkeepingEntrySetCreateParams {
  /**
   * The bookkeeping entries.
   */
  entries: Array<BookkeepingEntrySetCreateParams.Entry>;

  /**
   * The date of the transaction. Optional if `transaction_id` is provided, in which
   * case we use the `date` of that transaction. Required otherwise.
   */
  date?: string;

  /**
   * The identifier of the Transaction related to this entry set, if any.
   */
  transaction_id?: string;
}

export namespace BookkeepingEntrySetCreateParams {
  export interface Entry {
    /**
     * The identifier for the Bookkeeping Account impacted by this entry.
     */
    account_id: string;

    /**
     * The entry amount in the minor unit of the account currency. For dollars, for
     * example, this is cents. Debit entries have positive amounts; credit entries have
     * negative amounts.
     */
    amount: number;
  }
}

export interface BookkeepingEntrySetListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter to the Bookkeeping Entry Set that maps to this Transaction.
   */
  transaction_id?: string;
}

BookkeepingEntrySets.BookkeepingEntrySetsPage = BookkeepingEntrySetsPage;

export declare namespace BookkeepingEntrySets {
  export {
    type BookkeepingEntrySet as BookkeepingEntrySet,
    BookkeepingEntrySetsPage as BookkeepingEntrySetsPage,
    type BookkeepingEntrySetCreateParams as BookkeepingEntrySetCreateParams,
    type BookkeepingEntrySetListParams as BookkeepingEntrySetListParams,
  };
}
