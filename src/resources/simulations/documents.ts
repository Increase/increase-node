// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as Documents_ from 'increase/resources/documents';
import * as API from './index';

export class Documents extends APIResource {
  /**
   * Simulates an tax document being created for an account.
   */
  create(
    body: DocumentCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Documents_.Document>> {
    return this.post('/simulations/documents', { body, ...options });
  }
}

export interface DocumentCreateParams {
  /**
   * The identifier of the Account the tax document is for.
   */
  account_id: string;
}

export namespace Documents {
  export import DocumentCreateParams = API.DocumentCreateParams;
}
