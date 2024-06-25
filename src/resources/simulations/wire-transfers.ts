// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WireTransfersAPI from './wire-transfers';
import * as InboundWireTransfersAPI from '../inbound-wire-transfers';

export class WireTransfers extends APIResource {
  /**
   * Simulates an inbound Wire Transfer to your account.
   */
  createInbound(
    body: WireTransferCreateInboundParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundWireTransfersAPI.InboundWireTransfer> {
    return this._client.post('/simulations/inbound_wire_transfers', { body, ...options });
  }
}

export interface WireTransferCreateInboundParams {
  /**
   * The identifier of the Account Number the inbound Wire Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The sending bank will set beneficiary_address_line1 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line1?: string;

  /**
   * The sending bank will set beneficiary_address_line2 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line2?: string;

  /**
   * The sending bank will set beneficiary_address_line3 in production. You can
   * simulate any value here.
   */
  beneficiary_address_line3?: string;

  /**
   * The sending bank will set beneficiary_name in production. You can simulate any
   * value here.
   */
  beneficiary_name?: string;

  /**
   * The sending bank will set beneficiary_reference in production. You can simulate
   * any value here.
   */
  beneficiary_reference?: string;

  /**
   * The sending bank will set originator_address_line1 in production. You can
   * simulate any value here.
   */
  originator_address_line1?: string;

  /**
   * The sending bank will set originator_address_line2 in production. You can
   * simulate any value here.
   */
  originator_address_line2?: string;

  /**
   * The sending bank will set originator_address_line3 in production. You can
   * simulate any value here.
   */
  originator_address_line3?: string;

  /**
   * The sending bank will set originator_name in production. You can simulate any
   * value here.
   */
  originator_name?: string;

  /**
   * The sending bank will set originator_routing_number in production. You can
   * simulate any value here.
   */
  originator_routing_number?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line1 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line1?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line2 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line2?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line3 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line3?: string;

  /**
   * The sending bank will set originator_to_beneficiary_information_line4 in
   * production. You can simulate any value here.
   */
  originator_to_beneficiary_information_line4?: string;
}

export namespace WireTransfers {
  export import WireTransferCreateInboundParams = WireTransfersAPI.WireTransferCreateInboundParams;
}
