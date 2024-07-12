// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InboundRealTimePaymentsTransfersAPI from './inbound-real-time-payments-transfers';
import * as DeclinedTransactionsAPI from '../declined-transactions';
import * as TransactionsAPI from '../transactions';

export class InboundRealTimePaymentsTransfers extends APIResource {
  /**
   * Simulates an inbound Real-Time Payments transfer to your account. Real-Time
   * Payments are a beta feature.
   */
  create(
    body: InboundRealTimePaymentsTransferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundRealTimePaymentsTransferCreateResponse> {
    return this._client.post('/simulations/inbound_real_time_payments_transfers', { body, ...options });
  }
}

/**
 * The results of an inbound Real-Time Payments Transfer simulation.
 */
export interface InboundRealTimePaymentsTransferCreateResponse {
  /**
   * If the Real-Time Payments Transfer attempt fails, this will contain the
   * resulting [Declined Transaction](#declined-transactions) object. The Declined
   * Transaction's `source` will be of
   * `category: inbound_real_time_payments_transfer_decline`.
   */
  declined_transaction: DeclinedTransactionsAPI.DeclinedTransaction | null;

  /**
   * If the Real-Time Payments Transfer attempt succeeds, this will contain the
   * resulting [Transaction](#transactions) object. The Transaction's `source` will
   * be of `category: inbound_real_time_payments_transfer_confirmation`.
   */
  transaction: TransactionsAPI.Transaction | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_real_time_payments_transfer_simulation_result`.
   */
  type: 'inbound_real_time_payments_transfer_simulation_result';
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

export namespace InboundRealTimePaymentsTransfers {
  export import InboundRealTimePaymentsTransferCreateResponse = InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransferCreateResponse;
  export import InboundRealTimePaymentsTransferCreateParams = InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransferCreateParams;
}
