// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as SupplementalDocumentsAPI from './supplemental-documents';
import * as EntitiesAPI from './entities';
import { Page, type PageParams } from '../../pagination';

export class SupplementalDocuments extends APIResource {
  /**
   * Create a supplemental document for an Entity
   */
  create(
    entityId: string,
    body: SupplementalDocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitiesAPI.Entity> {
    return this._client.post(`/entities/${entityId}/supplemental_documents`, { body, ...options });
  }

  /**
   * List Entity Supplemental Document Submissions
   */
  list(
    query: SupplementalDocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SupplementalDocumentsPage, SupplementalDocument> {
    return this._client.getAPIList('/entity_supplemental_documents', SupplementalDocumentsPage, {
      query,
      ...options,
    });
  }
}

export class SupplementalDocumentsPage extends Page<SupplementalDocument> {}

/**
 * Supplemental Documents are uploaded files connected to an Entity during
 * onboarding.
 */
export interface SupplementalDocument {
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Supplemental Document was created.
   */
  created_at: string;

  /**
   * The File containing the document.
   */
  file_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity_supplemental_document`.
   */
  type: 'entity_supplemental_document';
}

export interface SupplementalDocumentCreateParams {
  /**
   * The identifier of the File containing the document.
   */
  file_id: string;
}

export interface SupplementalDocumentListParams extends PageParams {
  /**
   * The identifier of the Entity to list supplemental documents for.
   */
  entity_id: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace SupplementalDocuments {
  export import SupplementalDocument = SupplementalDocumentsAPI.SupplementalDocument;
  export import SupplementalDocumentsPage = SupplementalDocumentsAPI.SupplementalDocumentsPage;
  export import SupplementalDocumentCreateParams = SupplementalDocumentsAPI.SupplementalDocumentCreateParams;
  export import SupplementalDocumentListParams = SupplementalDocumentsAPI.SupplementalDocumentListParams;
}
