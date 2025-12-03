// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentsAPI from '../documents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

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
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentsAPI.Document> {
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
