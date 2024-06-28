// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as InboundMailItemsAPI from './inbound-mail-items';
import { Page, type PageParams } from '../pagination';

export class InboundMailItems extends APIResource {
  /**
   * Retrieve an Inbound Mail Item
   */
  retrieve(inboundMailItemId: string, options?: Core.RequestOptions): Core.APIPromise<InboundMailItem> {
    return this._client.get(`/inbound_mail_items/${inboundMailItemId}`, options);
  }

  /**
   * List Inbound Mail Items
   */
  list(
    query?: InboundMailItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundMailItemsPage, InboundMailItem>;
  list(options?: Core.RequestOptions): Core.PagePromise<InboundMailItemsPage, InboundMailItem>;
  list(
    query: InboundMailItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundMailItemsPage, InboundMailItem> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/inbound_mail_items', InboundMailItemsPage, { query, ...options });
  }
}

export class InboundMailItemsPage extends Page<InboundMailItem> {}

/**
 * Inbound Mail Items represent pieces of physical mail delivered to a Lockbox.
 */
export interface InboundMailItem {
  /**
   * The Inbound Mail Item identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Inbound
   * Mail Item was created.
   */
  created_at: string;

  /**
   * The identifier for the File containing the scanned contents of the mail item.
   */
  file_id: string;

  /**
   * The identifier for the Lockbox that received this mail item. For mail items that
   * could not be processed due to an invalid address, this will be null.
   */
  lockbox_id: string | null;

  /**
   * The recipient name as written on the mail item.
   */
  recipient_name: string | null;

  /**
   * If the mail item has been rejected, why it was rejected.
   *
   * - `no_matching_lockbox` - The mail item does not match any lockbox.
   * - `no_check` - The mail item does not contain a check.
   * - `lockbox_not_active` - The Lockbox or its associataed Account is not active.
   */
  rejection_reason: 'no_matching_lockbox' | 'no_check' | 'lockbox_not_active' | null;

  /**
   * The return address as written on the mail item.
   */
  return_address: InboundMailItem.ReturnAddress | null;

  /**
   * If the mail item has been processed.
   *
   * - `pending` - The mail item is pending processing.
   * - `processed` - The mail item has been processed.
   * - `rejected` - The mail item has been rejected.
   */
  status: 'pending' | 'processed' | 'rejected';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_mail_item`.
   */
  type: 'inbound_mail_item';
}

export namespace InboundMailItem {
  /**
   * The return address as written on the mail item.
   */
  export interface ReturnAddress {
    /**
     * The return address city.
     */
    city: string | null;

    /**
     * The return address line1.
     */
    line1: string | null;

    /**
     * The return address line2.
     */
    line2: string | null;

    /**
     * The return address name.
     */
    name: string | null;

    /**
     * The return address postal code.
     */
    postal_code: string | null;

    /**
     * The return address state.
     */
    state: string | null;
  }
}

/**
 * A list of Inbound Mail Item objects.
 */
export interface InboundMailItemList {
  /**
   * The contents of the list.
   */
  data: Array<InboundMailItem>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;
}

export interface InboundMailItemListParams extends PageParams {
  created_at?: InboundMailItemListParams.CreatedAt;

  /**
   * Filter Inbound Mail Items to ones sent to the provided Lockbox.
   */
  lockbox_id?: string;
}

export namespace InboundMailItemListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

export namespace InboundMailItems {
  export import InboundMailItem = InboundMailItemsAPI.InboundMailItem;
  export import InboundMailItemList = InboundMailItemsAPI.InboundMailItemList;
  export import InboundMailItemsPage = InboundMailItemsAPI.InboundMailItemsPage;
  export import InboundMailItemListParams = InboundMailItemsAPI.InboundMailItemListParams;
}
