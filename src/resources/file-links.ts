// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class FileLinks extends APIResource {
  /**
   * Create a File Link
   */
  create(body: FileLinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<FileLink> {
    return this._client.post('/file_links', { body, ...options });
  }

  /**
   * Retrieve a File Link
   */
  retrieve(fileLinkId: string, options?: Core.RequestOptions): Core.APIPromise<FileLink> {
    return this._client.get(`/file_links/${fileLinkId}`, options);
  }

  /**
   * List File Links
   */
  list(query: FileLinkListParams, options?: Core.RequestOptions): Core.PagePromise<FileLinksPage, FileLink> {
    return this._client.getAPIList('/file_links', FileLinksPage, { query, ...options });
  }
}

export class FileLinksPage extends Page<FileLink> {}

/**
 * Normally Files can only be downloaded via the API using your Increase API key.
 * File Links let you generate signed URLs for Files that can be used to download
 * the File without an Increase API key.
 */
export interface FileLink {
  /**
   * The File Link identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the File
   * Link was created.
   */
  created_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the File
   * Link will expire.
   */
  expires_at: string;

  /**
   * The identifier of the File the File Link points to.
   */
  file_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * A URL where the File can be downloaded. The URL will expire after the
   * `expires_at` time. This URL is unauthenticated and can be used to download the
   * File without an Increase API key.
   */
  public_download_url: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `file_link`.
   */
  type: 'file_link';
}

export interface FileLinkCreateParams {
  /**
   * The File to create a File Link for.
   */
  file_id: string;

  /**
   * The time at which the File Link will expire. The default is 1 hour from the time
   * of the request. The maxiumum is 1 day from the time of the request.
   */
  expires_at?: string;
}

export interface FileLinkListParams extends PageParams {
  /**
   * The identifier of the File to list File Links for.
   */
  file_id: string;

  created_at?: FileLinkListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace FileLinkListParams {
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

FileLinks.FileLinksPage = FileLinksPage;

export declare namespace FileLinks {
  export {
    type FileLink as FileLink,
    FileLinksPage as FileLinksPage,
    type FileLinkCreateParams as FileLinkCreateParams,
    type FileLinkListParams as FileLinkListParams,
  };
}
