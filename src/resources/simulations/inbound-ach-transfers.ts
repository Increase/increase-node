// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SimulationsInboundACHTransfersAPI from './inbound-ach-transfers';
import * as InboundACHTransfersAPI from '../inbound-ach-transfers';

export class InboundACHTransfers extends APIResource {
  /**
   * Simulates an inbound ACH transfer to your account. This imitates initiating a
   * transfer to an Increase account from a different financial institution. The
   * transfer may be either a credit or a debit depending on if the `amount` is
   * positive or negative. The result of calling this API will contain the created
   * transfer. You can pass a `resolve_at` parameter to allow for a window to
   * [action on the Inbound ACH Transfer](https://increase.com/documentation/receiving-ach-transfers).
   * Alternatively, if you don't pass the `resolve_at` parameter the result will
   * contain either a [Transaction](#transactions) or a
   * [Declined Transaction](#declined-transactions) depending on whether or not the
   * transfer is allowed.
   */
  create(
    body: InboundACHTransferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundACHTransfersAPI.InboundACHTransfer> {
    return this._client.post('/simulations/inbound_ach_transfers', { body, ...options });
  }
}

export interface InboundACHTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound ACH Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date?: string;

  /**
   * Data associated with the transfer set by the sender.
   */
  company_discretionary_data?: string;

  /**
   * The description of the transfer set by the sender.
   */
  company_entry_description?: string;

  /**
   * The sender's company ID.
   */
  company_id?: string;

  /**
   * The name of the sender.
   */
  company_name?: string;

  /**
   * The ID of the receiver of the transfer.
   */
  receiver_id_number?: string;

  /**
   * The name of the receiver of the transfer.
   */
  receiver_name?: string;

  /**
   * The time at which the transfer should be resolved. If not provided will resolve
   * immediately.
   */
  resolve_at?: string;
}

export namespace InboundACHTransfers {
  export import InboundACHTransferCreateParams = SimulationsInboundACHTransfersAPI.InboundACHTransferCreateParams;
}
