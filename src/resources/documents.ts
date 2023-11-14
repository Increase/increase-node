// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as DocumentsAPI from 'increase/resources/documents';
import { Page, type PageParams } from 'increase/pagination';

export class Documents extends APIResource {
  /**
   * Retrieve a Document
   */
  retrieve(documentId: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/${documentId}`, options);
  }

  /**
   * List Documents
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.PagePromise<DocumentsPage, Document>;
  list(options?: Core.RequestOptions): Core.PagePromise<DocumentsPage, Document>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage, Document> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/documents', DocumentsPage, { query, ...options });
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
   * The Document identifier.
   */
  id: string;

  /**
   * The type of document.
   *
   * - `form_1099_int` - Internal Revenue Service Form 1099-INT.
   * - `proof_of_authorization` - A document submitted in response to a proof of
   *   authorization request for an ACH transfer.
   * - `company_information` - Company information, such a policies or procedures,
   *   typically submitted during our due diligence process.
   */
  category: 'form_1099_int' | 'proof_of_authorization' | 'company_information';

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
   * A constant representing the object's type. For this resource it will always be
   * `document`.
   */
  type: 'document';
}

export interface DocumentListParams extends PageParams {
  category?: DocumentListParams.Category;

  created_at?: DocumentListParams.CreatedAt;

  /**
   * Filter Documents to ones belonging to the specified Entity.
   */
  entity_id?: string;
}

export namespace DocumentListParams {
  export interface Category {
    /**
     * Filter Documents for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'form_1099_int' | 'proof_of_authorization' | 'company_information'>;
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

export namespace Documents {
  export import Document = DocumentsAPI.Document;
  export import DocumentsPage = DocumentsAPI.DocumentsPage;
  export import DocumentListParams = DocumentsAPI.DocumentListParams;
}
