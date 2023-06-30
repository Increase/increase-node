// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, APIResponse, APIClient, FinalRequestOptions, PageInfo } from './core';

/**
 * A list of Account objects
 */
export interface PageResponse<Item> {
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

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  constructor(client: APIClient, response: APIResponse<PageResponse<Item>>, options: FinalRequestOptions) {
    super(client, response, options);

    this.data = response.data;
    this.next_cursor = response.next_cursor;
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.next_cursor) return null;

    return { params: { cursor: this.next_cursor } };
  }
}
