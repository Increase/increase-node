// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as InboundWireDrawdownRequestsAPI from './inbound-wire-drawdown-requests';
import { Page, type PageParams } from '../pagination';

export class InboundWireDrawdownRequests extends APIResource {
  /**
   * Retrieve an Inbound Wire Drawdown Request
   */
  retrieve(
    inboundWireDrawdownRequestId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundWireDrawdownRequest> {
    return this._client.get(`/inbound_wire_drawdown_requests/${inboundWireDrawdownRequestId}`, options);
  }

  /**
   * List Inbound Wire Drawdown Requests
   */
  list(
    query?: InboundWireDrawdownRequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundWireDrawdownRequestsPage, InboundWireDrawdownRequest>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundWireDrawdownRequestsPage, InboundWireDrawdownRequest>;
  list(
    query: InboundWireDrawdownRequestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundWireDrawdownRequestsPage, InboundWireDrawdownRequest> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/inbound_wire_drawdown_requests', InboundWireDrawdownRequestsPage, {
      query,
      ...options,
    });
  }
}

export class InboundWireDrawdownRequestsPage extends Page<InboundWireDrawdownRequest> {}

/**
 * Inbound wire drawdown requests are requests from someone else to send them a
 * wire. This feature is in beta; reach out to
 * [support@increase.com](mailto:support@increase.com) to learn more.
 */
export interface InboundWireDrawdownRequest {
  /**
   * The Wire drawdown request identifier.
   */
  id: string;

  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The drawdown request's beneficiary's account number.
   */
  beneficiary_account_number: string;

  /**
   * Line 1 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line1: string | null;

  /**
   * Line 2 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line2: string | null;

  /**
   * Line 3 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line3: string | null;

  /**
   * The drawdown request's beneficiary's name.
   */
  beneficiary_name: string | null;

  /**
   * The drawdown request's beneficiary's routing number.
   */
  beneficiary_routing_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the inbound wire drawdown requested was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * A message from the drawdown request's originator.
   */
  message_to_recipient: string | null;

  /**
   * The drawdown request's originator's account number.
   */
  originator_account_number: string;

  /**
   * Line 1 of the drawdown request's originator's address.
   */
  originator_address_line1: string | null;

  /**
   * Line 2 of the drawdown request's originator's address.
   */
  originator_address_line2: string | null;

  /**
   * Line 3 of the drawdown request's originator's address.
   */
  originator_address_line3: string | null;

  /**
   * The drawdown request's originator's name.
   */
  originator_name: string | null;

  /**
   * The drawdown request's originator's routing number.
   */
  originator_routing_number: string;

  /**
   * Line 1 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line1: string | null;

  /**
   * Line 2 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line2: string | null;

  /**
   * Line 3 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line3: string | null;

  /**
   * Line 4 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line4: string | null;

  /**
   * The Account Number from which the recipient of this request is being requested
   * to send funds.
   */
  recipient_account_number_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_drawdown_request`.
   */
  type: 'inbound_wire_drawdown_request';
}

export interface InboundWireDrawdownRequestListParams extends PageParams {}

export namespace InboundWireDrawdownRequests {
  export import InboundWireDrawdownRequest = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequest;
  export import InboundWireDrawdownRequestsPage = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestsPage;
  export import InboundWireDrawdownRequestListParams = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestListParams;
}
