// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ProofOfAuthorizationRequestsAPI from './proof-of-authorization-requests';
import { Page, type PageParams } from '../pagination';

export class ProofOfAuthorizationRequests extends APIResource {
  /**
   * Retrieve a Proof of Authorization Request
   */
  retrieve(
    proofOfAuthorizationRequestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProofOfAuthorizationRequest> {
    return this._client.get(`/proof_of_authorization_requests/${proofOfAuthorizationRequestId}`, options);
  }

  /**
   * List Proof of Authorization Requests
   */
  list(
    query?: ProofOfAuthorizationRequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestsPage, ProofOfAuthorizationRequest>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestsPage, ProofOfAuthorizationRequest>;
  list(
    query: ProofOfAuthorizationRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestsPage, ProofOfAuthorizationRequest> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/proof_of_authorization_requests', ProofOfAuthorizationRequestsPage, {
      query,
      ...options,
    });
  }
}

export class ProofOfAuthorizationRequestsPage extends Page<ProofOfAuthorizationRequest> {}

/**
 * A request for proof of authorization for one or more ACH debit transfers.
 */
export interface ProofOfAuthorizationRequest {
  /**
   * The Proof of Authorization Request identifier.
   */
  id: string;

  /**
   * The ACH Transfers associated with the request.
   */
  ach_transfers: Array<ProofOfAuthorizationRequest.ACHTransfer>;

  /**
   * The time the Proof of Authorization Request was created.
   */
  created_at: string;

  /**
   * The time the Proof of Authorization Request is due.
   */
  due_on: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `proof_of_authorization_request`.
   */
  type: 'proof_of_authorization_request';

  /**
   * The time the Proof of Authorization Request was last updated.
   */
  updated_at: string;
}

export namespace ProofOfAuthorizationRequest {
  export interface ACHTransfer {
    /**
     * The ACH Transfer identifier.
     */
    id: string;
  }
}

export interface ProofOfAuthorizationRequestListParams extends PageParams {
  created_at?: ProofOfAuthorizationRequestListParams.CreatedAt;
}

export namespace ProofOfAuthorizationRequestListParams {
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

export namespace ProofOfAuthorizationRequests {
  export import ProofOfAuthorizationRequest = ProofOfAuthorizationRequestsAPI.ProofOfAuthorizationRequest;
  export import ProofOfAuthorizationRequestsPage = ProofOfAuthorizationRequestsAPI.ProofOfAuthorizationRequestsPage;
  export import ProofOfAuthorizationRequestListParams = ProofOfAuthorizationRequestsAPI.ProofOfAuthorizationRequestListParams;
}
