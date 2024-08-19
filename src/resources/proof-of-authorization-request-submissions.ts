// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ProofOfAuthorizationRequestSubmissionsAPI from './proof-of-authorization-request-submissions';
import { Page, type PageParams } from '../pagination';

export class ProofOfAuthorizationRequestSubmissions extends APIResource {
  /**
   * Submit Proof of Authorization
   */
  create(
    body: ProofOfAuthorizationRequestSubmissionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProofOfAuthorizationRequestSubmission> {
    return this._client.post('/proof_of_authorization_request_submissions', { body, ...options });
  }

  /**
   * Retrieve a Proof of Authorization Request Submission
   */
  retrieve(
    proofOfAuthorizationRequestSubmissionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProofOfAuthorizationRequestSubmission> {
    return this._client.get(
      `/proof_of_authorization_request_submissions/${proofOfAuthorizationRequestSubmissionId}`,
      options,
    );
  }

  /**
   * List Proof of Authorization Request Submissions
   */
  list(
    query?: ProofOfAuthorizationRequestSubmissionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestSubmissionsPage, ProofOfAuthorizationRequestSubmission>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestSubmissionsPage, ProofOfAuthorizationRequestSubmission>;
  list(
    query: ProofOfAuthorizationRequestSubmissionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProofOfAuthorizationRequestSubmissionsPage, ProofOfAuthorizationRequestSubmission> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList(
      '/proof_of_authorization_request_submissions',
      ProofOfAuthorizationRequestSubmissionsPage,
      { query, ...options },
    );
  }
}

export class ProofOfAuthorizationRequestSubmissionsPage extends Page<ProofOfAuthorizationRequestSubmission> {}

/**
 * Information submitted in response to a proof of authorization request. Per
 * Nacha's guidance on proof of authorization, the originator must ensure that the
 * authorization complies with applicable legal requirements, is readily
 * identifiable as an authorization, and has clear and readily understandable
 * terms.
 */
export interface ProofOfAuthorizationRequestSubmission {
  /**
   * The Proof of Authorization Request Submission identifier.
   */
  id: string;

  /**
   * Terms of authorization.
   */
  authorization_terms: string;

  /**
   * Time of authorization.
   */
  authorized_at: string;

  /**
   * Company of the authorizer.
   */
  authorizer_company: string | null;

  /**
   * Email of the authorizer.
   */
  authorizer_email: string | null;

  /**
   * IP address of the authorizer.
   */
  authorizer_ip_address: string | null;

  /**
   * Name of the authorizer.
   */
  authorizer_name: string | null;

  /**
   * The time the Proof of Authorization Request Submission was created.
   */
  created_at: string;

  /**
   * Whether the customer has been offboarded.
   */
  customer_has_been_offboarded: boolean | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * ID of the proof of authorization request.
   */
  proof_of_authorization_request_id: string;

  /**
   * Status of the proof of authorization request submission.
   *
   * - `pending_review` - The proof of authorization request submission is pending
   *   review.
   * - `rejected` - The proof of authorization request submission was rejected.
   * - `pending_sending` - The proof of authorization request submission is pending
   *   sending.
   * - `sent` - The proof of authorization request submission was sent.
   */
  status: 'pending_review' | 'rejected' | 'pending_sending' | 'sent';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `proof_of_authorization_request_submission`.
   */
  type: 'proof_of_authorization_request_submission';

  /**
   * The time the Proof of Authorization Request Submission was last updated.
   */
  updated_at: string;

  /**
   * Whether account ownership was validated via credential (for instance, Plaid).
   */
  validated_account_ownership_via_credential: boolean | null;

  /**
   * Whether account ownership was validated with an account statement.
   */
  validated_account_ownership_with_account_statement: boolean | null;

  /**
   * Whether account ownership was validated with microdeposit.
   */
  validated_account_ownership_with_microdeposit: boolean | null;
}

export interface ProofOfAuthorizationRequestSubmissionCreateParams {
  /**
   * Terms of authorization.
   */
  authorization_terms: string;

  /**
   * Time of authorization.
   */
  authorized_at: string;

  /**
   * Email of the authorizer.
   */
  authorizer_email: string;

  /**
   * Name of the authorizer.
   */
  authorizer_name: string;

  /**
   * Whether the customer has been offboarded or suspended.
   */
  customer_has_been_offboarded: boolean;

  /**
   * ID of the proof of authorization request.
   */
  proof_of_authorization_request_id: string;

  /**
   * Whether the account ownership was validated via credential (e.g. Plaid).
   */
  validated_account_ownership_via_credential: boolean;

  /**
   * Whether the account ownership was validated with an account statement.
   */
  validated_account_ownership_with_account_statement: boolean;

  /**
   * Whether the account ownership was validated with a microdeposit.
   */
  validated_account_ownership_with_microdeposit: boolean;

  /**
   * Company of the authorizer.
   */
  authorizer_company?: string;

  /**
   * IP address of the authorizer.
   */
  authorizer_ip_address?: string;
}

export interface ProofOfAuthorizationRequestSubmissionListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * ID of the proof of authorization request.
   */
  proof_of_authorization_request_id?: string;
}

export namespace ProofOfAuthorizationRequestSubmissions {
  export import ProofOfAuthorizationRequestSubmission = ProofOfAuthorizationRequestSubmissionsAPI.ProofOfAuthorizationRequestSubmission;
  export import ProofOfAuthorizationRequestSubmissionsPage = ProofOfAuthorizationRequestSubmissionsAPI.ProofOfAuthorizationRequestSubmissionsPage;
  export import ProofOfAuthorizationRequestSubmissionCreateParams = ProofOfAuthorizationRequestSubmissionsAPI.ProofOfAuthorizationRequestSubmissionCreateParams;
  export import ProofOfAuthorizationRequestSubmissionListParams = ProofOfAuthorizationRequestSubmissionsAPI.ProofOfAuthorizationRequestSubmissionListParams;
}
