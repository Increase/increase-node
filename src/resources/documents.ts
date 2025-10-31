// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class Documents extends APIResource {
  /**
   * Create a Document
   *
   * @example
   * ```ts
   * const document = await client.documents.create({
   *   category: 'account_verification_letter',
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.post('/documents', { body, ...options });
  }

  /**
   * Retrieve a Document
   *
   * @example
   * ```ts
   * const document = await client.documents.retrieve(
   *   'document_qjtqc6s4c14ve2q89izm',
   * );
   * ```
   */
  retrieve(documentId: string, options?: Core.RequestOptions): Core.APIPromise<Document> {
    return this._client.get(`/documents/${documentId}`, options);
  }

  /**
   * List Documents
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const document of client.documents.list()) {
   *   // ...
   * }
   * ```
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
 * they can be listed here.
 */
export interface Document {
  /**
   * The Document identifier.
   */
  id: string;

  /**
   * Properties of an account verification letter document.
   */
  account_verification_letter: Document.AccountVerificationLetter | null;

  /**
   * The type of document.
   *
   * - `form_1099_int` - Internal Revenue Service Form 1099-INT.
   * - `form_1099_misc` - Internal Revenue Service Form 1099-MISC.
   * - `proof_of_authorization` - A document submitted in response to a proof of
   *   authorization request for an ACH transfer.
   * - `company_information` - Company information, such a policies or procedures,
   *   typically submitted during our due diligence process.
   * - `account_verification_letter` - An account verification letter.
   * - `funding_instructions` - Funding instructions.
   */
  category:
    | 'form_1099_int'
    | 'form_1099_misc'
    | 'proof_of_authorization'
    | 'company_information'
    | 'account_verification_letter'
    | 'funding_instructions';

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
   * Properties of a funding instructions document.
   */
  funding_instructions: Document.FundingInstructions | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `document`.
   */
  type: 'document';
}

export namespace Document {
  /**
   * Properties of an account verification letter document.
   */
  export interface AccountVerificationLetter {
    /**
     * The identifier of the Account Number the document was generated for.
     */
    account_number_id: string;
  }

  /**
   * Properties of a funding instructions document.
   */
  export interface FundingInstructions {
    /**
     * The identifier of the Account Number the document was generated for.
     */
    account_number_id: string;
  }
}

export interface DocumentCreateParams {
  /**
   * The type of document to create.
   *
   * - `account_verification_letter` - An account verification letter.
   * - `funding_instructions` - Funding instructions.
   */
  category: 'account_verification_letter' | 'funding_instructions';

  /**
   * An account verification letter. Required if and only if `category` is
   * `account_verification_letter`.
   */
  account_verification_letter?: DocumentCreateParams.AccountVerificationLetter;

  /**
   * Funding instructions. Required if and only if `category` is
   * `funding_instructions`.
   */
  funding_instructions?: DocumentCreateParams.FundingInstructions;

  [k: string]: unknown;
}

export namespace DocumentCreateParams {
  /**
   * An account verification letter. Required if and only if `category` is
   * `account_verification_letter`.
   */
  export interface AccountVerificationLetter {
    /**
     * The Account Number the bank letter should be generated for.
     */
    account_number_id: string;

    /**
     * If provided, the letter will include the Account's balance as of the date.
     */
    balance_date?: string;
  }

  /**
   * Funding instructions. Required if and only if `category` is
   * `funding_instructions`.
   */
  export interface FundingInstructions {
    /**
     * The Account Number the funding instructions should be generated for.
     */
    account_number_id: string;
  }
}

export interface DocumentListParams extends PageParams {
  category?: DocumentListParams.Category;

  created_at?: DocumentListParams.CreatedAt;

  /**
   * Filter Documents to ones belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace DocumentListParams {
  export interface Category {
    /**
     * Filter Documents for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'form_1099_int'
      | 'form_1099_misc'
      | 'proof_of_authorization'
      | 'company_information'
      | 'account_verification_letter'
      | 'funding_instructions'
    >;
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

Documents.DocumentsPage = DocumentsPage;

export declare namespace Documents {
  export {
    type Document as Document,
    DocumentsPage as DocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };
}
