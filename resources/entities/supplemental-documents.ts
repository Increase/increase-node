// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as Entities from '~/resources/entities';

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
}

export interface SupplementalDocumentCreateParams {
  /**
   * The identifier of the File containing the document.
   */
  file_id: string;
}
