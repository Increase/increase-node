// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as InboundWireTransfersAPI from 'increase/resources/inbound-wire-transfers';

export class InboundWireTransfers extends APIResource {
  /**
   * Retrieve an Inbound Wire Transfer
   */
  retrieve(
    inboundWireTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundWireTransfer> {
    return this._client.get(`/inbound_wire_transfers/${inboundWireTransferId}`, options);
  }
}

/**
 * An Inbound Wire Transfer is a wire transfer initiated outside of Increase to
 * your account.
 */
export interface InboundWireTransfer {
  /**
   * The inbound wire transfer's identifier.
   */
  id: string;

  /**
   * The amount in USD cents.
   */
  amount: number;

  /**
   * A free-form address field set by the sender.
   */
  beneficiary_address_line1: string | null;

  /**
   * A free-form address field set by the sender.
   */
  beneficiary_address_line2: string | null;

  /**
   * A free-form address field set by the sender.
   */
  beneficiary_address_line3: string | null;

  /**
   * A name set by the sender.
   */
  beneficiary_name: string | null;

  /**
   * A free-form reference string set by the sender, to help identify the transfer.
   */
  beneficiary_reference: string | null;

  /**
   * An Increase-constructed description of the transfer.
   */
  description: string;

  /**
   * A unique identifier available to the originating and receiving banks, commonly
   * abbreviated as IMAD. It is created when the wire is submitted to the Fedwire
   * service and is helpful when debugging wires with the originating bank.
   */
  input_message_accountability_data: string | null;

  /**
   * The address of the wire originator, set by the sending bank.
   */
  originator_address_line1: string | null;

  /**
   * The address of the wire originator, set by the sending bank.
   */
  originator_address_line2: string | null;

  /**
   * The address of the wire originator, set by the sending bank.
   */
  originator_address_line3: string | null;

  /**
   * The originator of the wire, set by the sending bank.
   */
  originator_name: string | null;

  /**
   * The American Banking Association (ABA) routing number of the bank originating
   * the transfer.
   */
  originator_routing_number: string | null;

  /**
   * An Increase-created concatenation of the Originator-to-Beneficiary lines.
   */
  originator_to_beneficiary_information: string | null;

  /**
   * A free-form message set by the wire originator.
   */
  originator_to_beneficiary_information_line1: string | null;

  /**
   * A free-form message set by the wire originator.
   */
  originator_to_beneficiary_information_line2: string | null;

  /**
   * A free-form message set by the wire originator.
   */
  originator_to_beneficiary_information_line3: string | null;

  /**
   * A free-form message set by the wire originator.
   */
  originator_to_beneficiary_information_line4: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_transfer`.
   */
  type: 'inbound_wire_transfer';
}

export namespace InboundWireTransfers {
  export import InboundWireTransfer = InboundWireTransfersAPI.InboundWireTransfer;
}
