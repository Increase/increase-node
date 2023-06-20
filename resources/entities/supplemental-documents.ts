// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Entities from '~/resources/entities';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class SupplementalDocuments extends APIResource {
  /**
   * Create a supplemental document for an Entity
   */
  create(
    entityId: string,
    body: SupplementalDocumentCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Entities.Entity>> {
    return this.post(`/entities/${entityId}/supplemental_documents`, { body, ...options });
  }

  /**
   * List Entity Supplemental Document Submissionss
   */
  list(
    query: SupplementalDocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SupplementalDocumentsPage> {
    return this.getAPIList('/entity_supplemental_documents', SupplementalDocumentsPage, {
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
}

export namespace SupplementalDocuments {
  export import SupplementalDocument = API.SupplementalDocument;
  export import SupplementalDocumentsPage = API.SupplementalDocumentsPage;
  export import SupplementalDocumentCreateParams = API.SupplementalDocumentCreateParams;
  export import SupplementalDocumentListParams = API.SupplementalDocumentListParams;
}
