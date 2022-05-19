// File generated from our OpenAPI spec by Stainless.
import { AbstractPage, APIResponse, APIClient, FinalRequestOptions } from './core';

export interface PageResponse<Item> {
  /**
   * The contents of the list.
   */
  data: Array<Item>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;
}

export interface PageParams {
  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  data: Array<Item>;
  /** A pointer to a place in the list. */
  next_cursor: string | null;

  constructor(client: APIClient, response: APIResponse<PageResponse<Item>>, options: FinalRequestOptions) {
    super(client, response, options);

    this.data = response.data;
    this.next_cursor = response.next_cursor;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  nextPageParams(): Partial<PageParams> | null {
    if (!this.next_cursor) return null;

    return { cursor: this.next_cursor };
  }
}
