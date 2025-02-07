// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class WireDrawdownRequests extends APIResource {
  /**
   * Create a Wire Drawdown Request
   */
  create(
    body: WireDrawdownRequestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WireDrawdownRequest> {
    return this._client.post('/wire_drawdown_requests', { body, ...options });
  }

  /**
   * Retrieve a Wire Drawdown Request
   */
  retrieve(
    wireDrawdownRequestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WireDrawdownRequest> {
    return this._client.get(`/wire_drawdown_requests/${wireDrawdownRequestId}`, options);
  }

  /**
   * List Wire Drawdown Requests
   */
  list(
    query?: WireDrawdownRequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WireDrawdownRequestsPage, WireDrawdownRequest>;
  list(options?: Core.RequestOptions): Core.PagePromise<WireDrawdownRequestsPage, WireDrawdownRequest>;
  list(
    query: WireDrawdownRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WireDrawdownRequestsPage, WireDrawdownRequest> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/wire_drawdown_requests', WireDrawdownRequestsPage, {
      query,
      ...options,
    });
  }
}

export class WireDrawdownRequestsPage extends Page<WireDrawdownRequest> {}

/**
 * Wire drawdown requests enable you to request that someone else send you a wire.
 * This feature is in beta; reach out to
 * [support@increase.com](mailto:support@increase.com) to learn more.
 */
export interface WireDrawdownRequest {
  /**
   * The Wire drawdown request identifier.
   */
  id: string;

  /**
   * The Account Number to which the recipient of this request is being requested to
   * send funds.
   */
  account_number_id: string;

  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the wire drawdown request was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * If the recipient fulfills the drawdown request by sending funds, then this will
   * be the identifier of the corresponding Transaction.
   */
  fulfillment_inbound_wire_transfer_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The message the recipient will see as part of the drawdown request.
   */
  message_to_recipient: string;

  /**
   * The originator's address line 1.
   */
  originator_address_line1: string | null;

  /**
   * The originator's address line 2.
   */
  originator_address_line2: string | null;

  /**
   * The originator's address line 3.
   */
  originator_address_line3: string | null;

  /**
   * The originator's name.
   */
  originator_name: string | null;

  /**
   * The drawdown request's recipient's account number.
   */
  recipient_account_number: string;

  /**
   * Line 1 of the drawdown request's recipient's address.
   */
  recipient_address_line1: string | null;

  /**
   * Line 2 of the drawdown request's recipient's address.
   */
  recipient_address_line2: string | null;

  /**
   * Line 3 of the drawdown request's recipient's address.
   */
  recipient_address_line3: string | null;

  /**
   * The drawdown request's recipient's name.
   */
  recipient_name: string | null;

  /**
   * The drawdown request's recipient's routing number.
   */
  recipient_routing_number: string;

  /**
   * The lifecycle status of the drawdown request.
   *
   * - `pending_submission` - The drawdown request is queued to be submitted to
   *   Fedwire.
   * - `pending_response` - The drawdown request has been sent and the recipient
   *   should respond in some way.
   * - `fulfilled` - The drawdown request has been fulfilled by the recipient.
   * - `refused` - The drawdown request has been refused by the recipient.
   */
  status: 'pending_submission' | 'pending_response' | 'fulfilled' | 'refused';

  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  submission: WireDrawdownRequest.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `wire_drawdown_request`.
   */
  type: 'wire_drawdown_request';
}

export namespace WireDrawdownRequest {
  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The input message accountability data (IMAD) uniquely identifying the submission
     * with Fedwire.
     */
    input_message_accountability_data: string;
  }
}

export interface WireDrawdownRequestCreateParams {
  /**
   * The Account Number to which the recipient should send funds.
   */
  account_number_id: string;

  /**
   * The amount requested from the recipient, in USD cents.
   */
  amount: number;

  /**
   * A message the recipient will see as part of the request.
   */
  message_to_recipient: string;

  /**
   * The drawdown request's recipient's account number.
   */
  recipient_account_number: string;

  /**
   * The drawdown request's recipient's name.
   */
  recipient_name: string;

  /**
   * The drawdown request's recipient's routing number.
   */
  recipient_routing_number: string;

  /**
   * The drawdown request originator's address line 1. This is only necessary if
   * you're requesting a payment to a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  originator_address_line1?: string;

  /**
   * The drawdown request originator's address line 2. This is only necessary if
   * you're requesting a payment to a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  originator_address_line2?: string;

  /**
   * The drawdown request originator's address line 3. This is only necessary if
   * you're requesting a payment to a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  originator_address_line3?: string;

  /**
   * The drawdown request originator's name. This is only necessary if you're
   * requesting a payment to a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  originator_name?: string;

  /**
   * Line 1 of the drawdown request's recipient's address.
   */
  recipient_address_line1?: string;

  /**
   * Line 2 of the drawdown request's recipient's address.
   */
  recipient_address_line2?: string;

  /**
   * Line 3 of the drawdown request's recipient's address.
   */
  recipient_address_line3?: string;
}

export interface WireDrawdownRequestListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter Wire Drawdown Requests for those with the specified status.
   *
   * - `pending_submission` - The drawdown request is queued to be submitted to
   *   Fedwire.
   * - `pending_response` - The drawdown request has been sent and the recipient
   *   should respond in some way.
   * - `fulfilled` - The drawdown request has been fulfilled by the recipient.
   * - `refused` - The drawdown request has been refused by the recipient.
   */
  status?: 'pending_submission' | 'pending_response' | 'fulfilled' | 'refused';
}

WireDrawdownRequests.WireDrawdownRequestsPage = WireDrawdownRequestsPage;

export declare namespace WireDrawdownRequests {
  export {
    type WireDrawdownRequest as WireDrawdownRequest,
    WireDrawdownRequestsPage as WireDrawdownRequestsPage,
    type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
    type WireDrawdownRequestListParams as WireDrawdownRequestListParams,
  };
}
