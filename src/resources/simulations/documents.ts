// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as SimulationsDocumentsAPI from './documents';
import * as DocumentsAPI from '../documents';

export class Documents extends APIResource {
  /**
   * Simulates an tax document being created for an account.
   */
  create(body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<DocumentsAPI.Document> {
    return this._client.post('/simulations/documents', { body, ...options });
  }
}

export interface DocumentCreateParams {
  /**
   * The identifier of the Account the tax document is for.
   */
  account_id: string;
}

export namespace Documents {
  export import DocumentCreateParams = SimulationsDocumentsAPI.DocumentCreateParams;
}
