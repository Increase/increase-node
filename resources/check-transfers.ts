// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import { Page, PageParams } from '~/pagination'
import * as Shared from '~/resources/shared'

export class CheckTransfers extends APIResource {

  create(body: CheckTransferCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>>{
         return this.post('/check_transfers', { body, ...options })
       };

  retrieve(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>>{
         return this.get(`/check_transfers/${checkTransferId}`, options)
       };

  list(query?: CheckTransferListParams, options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage>;
  list(query: CheckTransferListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<CheckTransfersPage>{
         if (isRequestOptions(query)) {
           return this.list({}, query);
         }

         return this.getAPIList('/check_transfers', CheckTransfersPage, { query, ...options })
       };

  stopPayment(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>>{
         return this.post(`/check_transfers/${checkTransferId}/stop_payment`, options)
       };
}

export class CheckTransfersPage extends Page<CheckTransfer> {}

/**
 * Check Transfers move funds from your Increase account by mailing a physical
 * check.
 */
export interface CheckTransfer  {
  /**
 * The identifier of the Account from which funds will be transferred.
 */
account_id: string

/**
 * The city of the check's destination.
 */
address_city: string

/**
 * The street address of the check's destination.
 */
address_line1: string

/**
 * The second line of the address of the check's destination.
 */
address_line2: string | null

/**
 * The state of the check's destination.
 */
address_state: string

/**
 * The postal code of the check's destination.
 */
address_zip: string

/**
 * The transfer amount in USD cents.
 */
amount: number

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
 * the transfer was created.
 */
created_at: string

/**
 * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
 * currency.
 */
currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD'

/**
 * The Check transfer's identifier.
 */
id: string

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
 * the check was mailed.
 */
mailed_at: string | null

/**
 * The descriptor that is printed on the check.
 */
message: string

/**
 * The name that will be printed on the check.
 */
recipient_name: string

/**
 * The lifecycle status of the transfer.
 */
status: 'pending_approval' | 'pending_submission' | 'submitting' | 'submitted' | 'pending_mailing' | 'mailed' | 'canceled' | 'deposited' | 'stopped' | 'rejected' | 'requires_attention'

/**
 * After a stop-payment is requested on the check, this will contain supplemental
 * details.
 */
stop_payment_request: CheckTransfer.StopPaymentRequest | null

/**
 * After the transfer is submitted, this will contain supplemental details.
 */
submission: CheckTransfer.Submission | null

/**
 * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
 * the check was submitted.
 */
submitted_at: string | null

/**
 * If the transfer was created from a template, this will be the template's ID.
 */
template_id: string | null

/**
 * The ID for the transaction caused by the transfer.
 */
transaction_id: string | null

/**
 * A constant representing the object's type. For this resource it will always be
 * `check_transfer`.
 */
type: 'check_transfer'
}

export namespace CheckTransfer {export interface Submission  {
  /**
 * The identitying number of the check.
 */
check_number: string
}

export interface StopPaymentRequest  {
  /**
 * The time the stop-payment was requested.
 */
requested_at: string

/**
 * The transaction ID of the corresponding credit transaction.
 */
transaction_id: string

/**
 * The ID of the check transfer that was stopped.
 */
transfer_id: string

/**
 * A constant representing the object's type. For this resource it will always be
 * `check_transfer_stop_payment_request`.
 */
type: 'check_transfer_stop_payment_request'
}}

export interface CheckTransferCreateParams  {
  /**
 * The identifier for the account that will send the transfer.
 */
account_id: string

/**
 * The city of the check's destination.
 */
address_city: string

/**
 * The street address of the check's destination.
 */
address_line1: string

/**
 * The state of the check's destination.
 */
address_state: string

/**
 * The postal code of the check's destination.
 */
address_zip: string

/**
 * The transfer amount in cents.
 */
amount: number

/**
 * The descriptor that will be printed on the check.
 */
message: string

/**
 * The name that will be printed on the check.
 */
recipient_name: string

/**
 * The second line of the address of the check's destination.
 */
address_line2?: string
}

export interface CheckTransferListParams extends PageParams {
  /**
 * Filter Check Transfers to those that originated from the specified Account.
 */
account_id?: string

created_at?: CheckTransferListParams.CreatedAt
}

export namespace CheckTransferListParams {export interface CreatedAt  {
  /**
 * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 * timestamp.
 */
after?: string

/**
 * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 * timestamp.
 */
before?: string

/**
 * Return results on or after this
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
 */
on_or_after?: string

/**
 * Return results on or before this
 * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
 */
on_or_before?: string
}}