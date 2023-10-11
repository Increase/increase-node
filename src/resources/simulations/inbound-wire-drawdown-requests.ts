// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsInboundWireDrawdownRequestsAPI from 'increase/resources/simulations/inbound-wire-drawdown-requests';
import * as InboundWireDrawdownRequestsAPI from 'increase/resources/inbound-wire-drawdown-requests';

export class InboundWireDrawdownRequests extends APIResource {
  /**
   * Simulates receiving an
   * [Inbound Wire Drawdown Request](#inbound-wire-drawdown-requests).
   */
  create(
    body: InboundWireDrawdownRequestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequest> {
    return this.post('/simulations/inbound_wire_drawdown_requests', { body, ...options });
  }
}

export interface InboundWireDrawdownRequestCreateParams {
  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The drawdown request's beneficiary's account number.
   */
  beneficiary_account_number: string;

  /**
   * The drawdown request's beneficiary's routing number.
   */
  beneficiary_routing_number: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * A message from the drawdown request's originator.
   */
  message_to_recipient: string;

  /**
   * The drawdown request's originator's account number.
   */
  originator_account_number: string;

  /**
   * The drawdown request's originator's routing number.
   */
  originator_routing_number: string;

  /**
   * The Account Number to which the recipient of this request is being requested to
   * send funds from.
   */
  recipient_account_number_id: string;

  /**
   * Line 1 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line1?: string;

  /**
   * Line 2 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line2?: string;

  /**
   * Line 3 of the drawdown request's beneficiary's address.
   */
  beneficiary_address_line3?: string;

  /**
   * The drawdown request's beneficiary's name.
   */
  beneficiary_name?: string;

  /**
   * Line 1 of the drawdown request's originator's address.
   */
  originator_address_line1?: string;

  /**
   * Line 2 of the drawdown request's originator's address.
   */
  originator_address_line2?: string;

  /**
   * Line 3 of the drawdown request's originator's address.
   */
  originator_address_line3?: string;

  /**
   * The drawdown request's originator's name.
   */
  originator_name?: string;

  /**
   * Line 1 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line1?: string;

  /**
   * Line 2 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line2?: string;

  /**
   * Line 3 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line3?: string;

  /**
   * Line 4 of the information conveyed from the originator of the message to the
   * beneficiary.
   */
  originator_to_beneficiary_information_line4?: string;
}

export namespace InboundWireDrawdownRequests {
  export type InboundWireDrawdownRequestCreateParams =
    SimulationsInboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestCreateParams;
}
