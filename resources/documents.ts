// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Documents extends APIResource {
  /**
   * Retrieve a Document
   */
  retrieve(documentId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Document>> {
    return this.get(`/documents/${documentId}`, options);
  }

  /**
   * List Documents
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.PagePromise<DocumentsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<DocumentsPage>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/documents', DocumentsPage, { query, ...options });
  }
}

export class DocumentsPage extends Page<Document> {}

/**
 * Increase generates certain documents / forms automatically for your application;
 * they can be listed here. Currently the only supported document type is IRS Form
 * 1099-INT.
 */
export interface Document {
  /**
   * The type of document.
   */
  category: 'form_1099_int';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Document was created.
   */
  created_at: string;

  /**
   * The identifier of the Entity the document was generated for.
   */
  entity_id: string | null;

  /**
   * The identifier of the File containing the Document's contents.
   */
  file_id: string;

  /**
   * The Document identifier.
   */
  id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `document`.
   */
  type: 'document';
}

export interface DocumentListParams extends PageParams {
  /**
   * Return results whose value is in the provided list. For GET requests, this
   * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
   */
  'category.in'?: Array<'form_1099_int'>;

  /**
   * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * timestamp.
   */
  'created_at.after'?: string;

  /**
   * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * timestamp.
   */
  'created_at.before'?: string;

  /**
   * Return results on or after this
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
   */
  'created_at.on_or_after'?: string;

  /**
   * Return results on or before this
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
   */
  'created_at.on_or_before'?: string;

  /**
   * Filter Documents to ones belonging to the specified Entity.
   */
  entity_id?: string;
}

export namespace DocumentListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'form_1099_int'>;
  }

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
