// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DocumentsAPI from '../documents';

export class Documents extends APIResource {
  /**
   * Simulates an tax document being created for an account.
   *
   * @example
   * ```ts
   * const document = await client.simulations.documents.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   * });
   * ```
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

export declare namespace Documents {
  export { type DocumentCreateParams as DocumentCreateParams };
}
