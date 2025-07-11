// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class Files extends APIResource {
  /**
   * To upload a file to Increase, you'll need to send a request of Content-Type
   * `multipart/form-data`. The request should contain the file you would like to
   * upload, as well as the parameters for creating a file.
   *
   * @example
   * ```ts
   * const file = await client.files.create({
   *   file: fs.createReadStream('path/to/file'),
   *   purpose: 'check_image_front',
   * });
   * ```
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.post('/files', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Retrieve a File
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve(
   *   'file_makxrc67oh9l6sg7w9yc',
   * );
   * ```
   */
  retrieve(fileId: string, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.get(`/files/${fileId}`, options);
  }

  /**
   * List Files
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const file of client.files.list()) {
   *   // ...
   * }
   * ```
   */
  list(query?: FileListParams, options?: Core.RequestOptions): Core.PagePromise<FilesPage, File>;
  list(options?: Core.RequestOptions): Core.PagePromise<FilesPage, File>;
  list(
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilesPage, File> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/files', FilesPage, { query, ...options });
  }
}

export class FilesPage extends Page<File> {}

/**
 * Files are objects that represent a file hosted on Increase's servers. The file
 * may have been uploaded by you (for example, when uploading a check image) or it
 * may have been created by Increase (for example, an autogenerated statement PDF).
 * If you need to download a File, create a File Link.
 */
export interface File {
  /**
   * The File's identifier.
   */
  id: string;

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
   *
   * - `to_increase` - This File was sent by you to Increase.
   * - `from_increase` - This File was generated by Increase.
   */
  direction: 'to_increase' | 'from_increase';

  /**
   * The filename that was provided upon upload or generated by Increase.
   */
  filename: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The MIME type of the file.
   */
  mime_type: string;

  /**
   * What the File will be used for. We may add additional possible values for this
   * enum over time; your application should be able to handle such additions
   * gracefully.
   *
   * - `check_image_front` - An image of the front of a check, used for check
   *   deposits.
   * - `check_image_back` - An image of the back of a check, used for check deposits.
   * - `processed_check_image_front` - An image of the front of a deposited check
   *   after processing by Increase and submission to the Federal Reserve.
   * - `processed_check_image_back` - An image of the back of a deposited check after
   *   processing by Increase and submission to the Federal Reserve.
   * - `mailed_check_image` - An image of a check that was mailed to a recipient.
   * - `check_attachment` - A document to be printed on an additional page and mailed
   *   with a check that you've requested Increase print.
   * - `inbound_mail_item` - A scanned mail item sent to Increase.
   * - `form_1099_int` - IRS Form 1099-INT.
   * - `form_1099_misc` - IRS Form 1099-MISC.
   * - `form_ss_4` - IRS Form SS-4.
   * - `identity_document` - An image of a government-issued ID.
   * - `increase_statement` - A statement generated by Increase.
   * - `other` - A file purpose not covered by any of the other cases.
   * - `trust_formation_document` - A legal document forming a trust.
   * - `digital_wallet_artwork` - A card image to be rendered inside digital wallet
   *   apps. This must be a 1536x969 pixel PNG.
   * - `digital_wallet_app_icon` - An icon for you app to be rendered inside digital
   *   wallet apps. This must be a 100x100 pixel PNG.
   * - `physical_card_front` - A card image to be printed on the front of a physical
   *   card. This must be a 2100x1340 pixel PNG with no other color but black.
   * - `physical_card_back` - The image to be printed on the back of a physical card.
   * - `physical_card_carrier` - An image representing the entirety of the carrier
   *   used for a physical card. This must be a 2550x3300 pixel PNG with no other
   *   color but black.
   * - `document_request` - A document requested by Increase.
   * - `entity_supplemental_document` - A supplemental document associated an an
   *   Entity.
   * - `export` - The results of an Export you requested via the dashboard or API.
   * - `unusual_activity_report_attachment` - An attachment to an Unusual Activity
   *   Report.
   * - `deposit_account_control_agreement` - A document granting another entity
   *   access to the funds into your account.
   * - `proof_of_authorization_request_submission` - A file containing additional
   *   evidence for a Proof of Authorization Request Submission.
   * - `account_verification_letter` - An account verification letter.
   * - `funding_instructions` - Funding instructions.
   * - `hold_harmless_letter` - A Hold Harmless Letter.
   */
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'processed_check_image_front'
    | 'processed_check_image_back'
    | 'mailed_check_image'
    | 'check_attachment'
    | 'inbound_mail_item'
    | 'form_1099_int'
    | 'form_1099_misc'
    | 'form_ss_4'
    | 'identity_document'
    | 'increase_statement'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'physical_card_front'
    | 'physical_card_back'
    | 'physical_card_carrier'
    | 'document_request'
    | 'entity_supplemental_document'
    | 'export'
    | 'unusual_activity_report_attachment'
    | 'deposit_account_control_agreement'
    | 'proof_of_authorization_request_submission'
    | 'account_verification_letter'
    | 'funding_instructions'
    | 'hold_harmless_letter';

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
  file: Core.Uploadable;

  /**
   * What the File will be used for in Increase's systems.
   *
   * - `check_image_front` - An image of the front of a check, used for check
   *   deposits.
   * - `check_image_back` - An image of the back of a check, used for check deposits.
   * - `mailed_check_image` - An image of a check that was mailed to a recipient.
   * - `check_attachment` - A document to be printed on an additional page and mailed
   *   with a check that you've requested Increase print.
   * - `form_ss_4` - IRS Form SS-4.
   * - `identity_document` - An image of a government-issued ID.
   * - `other` - A file purpose not covered by any of the other cases.
   * - `trust_formation_document` - A legal document forming a trust.
   * - `digital_wallet_artwork` - A card image to be rendered inside digital wallet
   *   apps. This must be a 1536x969 pixel PNG.
   * - `digital_wallet_app_icon` - An icon for you app to be rendered inside digital
   *   wallet apps. This must be a 100x100 pixel PNG.
   * - `physical_card_front` - A card image to be printed on the front of a physical
   *   card. This must be a 2100x1340 pixel PNG with no other color but black.
   * - `physical_card_carrier` - An image representing the entirety of the carrier
   *   used for a physical card. This must be a 2550x3300 pixel PNG with no other
   *   color but black.
   * - `document_request` - A document requested by Increase.
   * - `entity_supplemental_document` - A supplemental document associated an an
   *   Entity.
   * - `unusual_activity_report_attachment` - An attachment to an Unusual Activity
   *   Report.
   * - `proof_of_authorization_request_submission` - A file containing additional
   *   evidence for a Proof of Authorization Request Submission.
   */
  purpose:
    | 'check_image_front'
    | 'check_image_back'
    | 'mailed_check_image'
    | 'check_attachment'
    | 'form_ss_4'
    | 'identity_document'
    | 'other'
    | 'trust_formation_document'
    | 'digital_wallet_artwork'
    | 'digital_wallet_app_icon'
    | 'physical_card_front'
    | 'physical_card_carrier'
    | 'document_request'
    | 'entity_supplemental_document'
    | 'unusual_activity_report_attachment'
    | 'proof_of_authorization_request_submission';

  /**
   * The description you choose to give the File.
   */
  description?: string;
}

export interface FileListParams extends PageParams {
  created_at?: FileListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

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
     * Filter Files for those with the specified purpose or purposes. For GET requests,
     * this should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'check_image_front'
      | 'check_image_back'
      | 'processed_check_image_front'
      | 'processed_check_image_back'
      | 'mailed_check_image'
      | 'check_attachment'
      | 'inbound_mail_item'
      | 'form_1099_int'
      | 'form_1099_misc'
      | 'form_ss_4'
      | 'identity_document'
      | 'increase_statement'
      | 'other'
      | 'trust_formation_document'
      | 'digital_wallet_artwork'
      | 'digital_wallet_app_icon'
      | 'physical_card_front'
      | 'physical_card_back'
      | 'physical_card_carrier'
      | 'document_request'
      | 'entity_supplemental_document'
      | 'export'
      | 'unusual_activity_report_attachment'
      | 'deposit_account_control_agreement'
      | 'proof_of_authorization_request_submission'
      | 'account_verification_letter'
      | 'funding_instructions'
      | 'hold_harmless_letter'
    >;
  }
}

Files.FilesPage = FilesPage;

export declare namespace Files {
  export {
    type File as File,
    FilesPage as FilesPage,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };
}
