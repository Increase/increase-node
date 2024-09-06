// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SimulationsInboundCheckDepositsAPI from './inbound-check-deposits';
import * as InboundCheckDepositsAPI from '../inbound-check-deposits';

export class InboundCheckDeposits extends APIResource {
  /**
   * Simulates an Inbound Check Deposit against your account. This imitates someone
   * depositing a check at their bank that was issued from your account. It may or
   * may not be associated with a Check Transfer. Increase will evaluate the Check
   * Deposit as we would in production and either create a Transaction or a Declined
   * Transaction as a result. You can inspect the resulting Inbound Check Deposit
   * object to see the result.
   */
  create(
    body: InboundCheckDepositCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundCheckDepositsAPI.InboundCheckDeposit> {
    return this._client.post('/simulations/inbound_check_deposits', { body, ...options });
  }
}

export interface InboundCheckDepositCreateParams {
  /**
   * The identifier of the Account Number the Inbound Check Deposit will be against.
   */
  account_number_id: string;

  /**
   * The check amount in cents.
   */
  amount: number;

  /**
   * The check number on the check to be deposited.
   */
  check_number: string;
}

export namespace InboundCheckDeposits {
  export import InboundCheckDepositCreateParams = SimulationsInboundCheckDepositsAPI.InboundCheckDepositCreateParams;
}
