// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class FileLinks extends APIResource {
  /**
   * Create a File Link
   */
  create(body: FileLinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<FileLink> {
    return this._client.post('/file_links', { body, ...options });
  }
}

/**
 * File Links let you generate a URL that can be used to download a File.
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
   * A constant representing the object's type. For this resource it will always be
   * `file_link`.
   */
  type: 'file_link';

  /**
   * A URL where the File can be downloaded. The URL will expire after the
   * `expires_at` time. This URL is unauthenticated and can be used to download the
   * File without an Increase API key.
   */
  unauthenticated_url: string;
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

export declare namespace FileLinks {
  export { type FileLink as FileLink, type FileLinkCreateParams as FileLinkCreateParams };
}
