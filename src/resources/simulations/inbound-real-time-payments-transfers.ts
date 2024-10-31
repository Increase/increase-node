// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InboundRealTimePaymentsTransfersAPI from '../inbound-real-time-payments-transfers';

export class InboundRealTimePaymentsTransfers extends APIResource {
  /**
   * Simulates an
   * [Inbound Real-Time Payments Transfer](#inbound-real-time-payments-transfers) to
   * your account. Real-Time Payments are a beta feature.
   */
  create(
    body: InboundRealTimePaymentsTransferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfer> {
    return this._client.post('/simulations/inbound_real_time_payments_transfers', { body, ...options });
  }
}

export interface InboundRealTimePaymentsTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound Real-Time Payments Transfer is
   * for.
   */
  account_number_id: string;

  /**
   * The transfer amount in USD cents. Must be positive.
   */
  amount: number;

  /**
   * The account number of the account that sent the transfer.
   */
  debtor_account_number?: string;

  /**
   * The name provided by the sender of the transfer.
   */
  debtor_name?: string;

  /**
   * The routing number of the account that sent the transfer.
   */
  debtor_routing_number?: string;

  /**
   * Additional information included with the transfer.
   */
  remittance_information?: string;

  /**
   * The identifier of a pending Request for Payment that this transfer will fulfill.
   */
  request_for_payment_id?: string;
}

export declare namespace InboundRealTimePaymentsTransfers {
  export { type InboundRealTimePaymentsTransferCreateParams as InboundRealTimePaymentsTransferCreateParams };
}
