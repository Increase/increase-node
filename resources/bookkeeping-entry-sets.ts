// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as API from './';

export class BookkeepingEntrySets extends APIResource {
  /**
   * Create a Bookkeeping Entry Set
   */
  create(
    body: BookkeepingEntrySetCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BookkeepingEntrySet>> {
    return this.post('/bookkeeping_entry_sets', { body, ...options });
  }
}

/**
 * Entry Sets are accounting entries that are transactionally applied.
 */
export interface BookkeepingEntrySet {
  /**
   * The entry set identifier.
   */
  id: string;

  /**
   * The timestamp of the entry set.
   */
  date: string;

  /**
   * The entries
   */
  entries: Array<BookkeepingEntrySet.Entry>;

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
   * The date of the transaction. If `transaction_id` is provided, this must match
   * the `created_at` field on that resource.
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

export namespace BookkeepingEntrySets {
  export import BookkeepingEntrySet = API.BookkeepingEntrySet;
  export import BookkeepingEntrySetCreateParams = API.BookkeepingEntrySetCreateParams;
}
