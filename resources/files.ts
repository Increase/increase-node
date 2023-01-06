// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import type * as FormData from 'formdata-node';
import { multipartFormRequestOptions } from '~/core';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Files extends APIResource {
  /**
   * To upload a file to Increase, you'll need to send a request of Content-Type
   * `multipart/form-data`. The request should contain the file you would like to
   * upload, as well as the parameters for creating a file.
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<File>> {
    return this.post('/files', multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Retrieve a File
   */
  retrieve(fileId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<File>> {
    return this.get(`/files/${fileId}`, options);
  }

  /**
   * List Files
   */
  list(query?: FileListParams, options?: Core.RequestOptions): Core.PagePromise<FilesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<FilesPage>;
  list(
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/files', FilesPage, { query, ...options });
  }
}

export class FilesPage extends Page<File> {}

/**
 * Files are objects that represent a file hosted on Increase's servers. The file
 * may have been uploaded by you (for example, when uploading a check image) or it
 * may have been created by Increase (for example, an autogenerated statement PDF).
 */
export interface File {
  /**
   * The time the File was created.
   */
  created_at: string;

  /**
   * A description of the File.
   */
  description: string | null;

  /**
   * Whether the File was generated by Increase or by you and sent to Increase.
   */
  direction: 'to_increase' | 'from_increase';

  /**
   * A URL from where the File can be downloaded at this point in time. The location
   * of this URL may change over time.
   */
  download_url: string | null;

  /**
   * The filename that was provided upon upload or generated by Increase.
   */
  filename: string | null;

  /**
   * The File's identifier.
   */
  id: string;

  /**
   * What the File will be used for. We may add additional possible values for this
   * enum over time; your application should be able to handle such additions
   * gracefully.
   */
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'form_1099_int'
    | 'form_ss_4'
    | 'identity_document'
    | 'increase_statement'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'entity_supplemental_document';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `file`.
   */
  type: 'file';
}

export interface FileCreateParams {
  /**
   * The file contents. This should follow the specifications of
   * [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) which defines file
   * transfers for the multipart/form-data protocol.
   */
  file: FormData.Blob | FormData.File;

  /**
   * What the File will be used for in Increase's systems.
   */
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'form_ss_4'
    | 'identity_document'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'entity_supplemental_document';

  /**
   * The description you choose to give the File.
   */
  description?: string;
}

export interface FileListParams extends PageParams {
  created_at?: FileListParams.CreatedAt;

  purpose?: FileListParams.Purpose;
}

export namespace FileListParams {
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

  export interface Purpose {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'check_image_front'
      | 'check_image_back'
      | 'form_1099_int'
      | 'form_ss_4'
      | 'identity_document'
      | 'increase_statement'
      | 'other'
      | 'trust_formation_document'
      | 'digital_wallet_artwork'
      | 'digital_wallet_app_icon'
      | 'entity_supplemental_document'
    >;
  }
}
