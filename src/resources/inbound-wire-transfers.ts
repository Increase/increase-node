// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as InboundWireTransfersAPI from './inbound-wire-transfers';
import { Page, type PageParams } from '../pagination';

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

  /**
   * List Inbound Wire Transfers
   */
  list(
    query?: InboundWireTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundWireTransfersPage, InboundWireTransfer>;
  list(options?: Core.RequestOptions): Core.PagePromise<InboundWireTransfersPage, InboundWireTransfer>;
  list(
    query: InboundWireTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundWireTransfersPage, InboundWireTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/inbound_wire_transfers', InboundWireTransfersPage, {
      query,
      ...options,
    });
  }
}

export class InboundWireTransfersPage extends Page<InboundWireTransfer> {}

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
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

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
   * The status of the transfer.
   *
   * - `pending` - The Inbound Wire Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `accepted` - The Inbound Wire Transfer is accepted.
   * - `declined` - The Inbound Wire Transfer was declined.
   * - `reversed` - The Inbound Wire Transfer was reversed.
   */
  status: 'pending' | 'accepted' | 'declined' | 'reversed';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_transfer`.
   */
  type: 'inbound_wire_transfer';
}

export interface InboundWireTransferListParams extends PageParams {
  /**
   * Filter Inbound Wire Tranfers to ones belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Wire Tranfers to ones belonging to the specified Account Number.
   */
  account_number_id?: string;

  created_at?: InboundWireTransferListParams.CreatedAt;

  /**
   * Filter Inbound Wire Transfers to those with the specified status.
   *
   * - `pending` - The Inbound Wire Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `accepted` - The Inbound Wire Transfer is accepted.
   * - `declined` - The Inbound Wire Transfer was declined.
   * - `reversed` - The Inbound Wire Transfer was reversed.
   */
  status?: 'pending' | 'accepted' | 'declined' | 'reversed';
}

export namespace InboundWireTransferListParams {
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

export namespace InboundWireTransfers {
  export import InboundWireTransfer = InboundWireTransfersAPI.InboundWireTransfer;
  export import InboundWireTransfersPage = InboundWireTransfersAPI.InboundWireTransfersPage;
  export import InboundWireTransferListParams = InboundWireTransfersAPI.InboundWireTransferListParams;
}
