// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as CheckTransfers_ from 'increase/resources/check-transfers';
import * as API from './';

export class CheckTransfers extends APIResource {
  /**
   * Simulates a [Check Transfer](#check-transfers) being deposited at a bank. This
   * transfer must first have a `status` of `mailed`.
   */
  deposit(
    checkTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfers_.CheckTransfer>> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/deposit`, options);
  }

  /**
   * Simulates the mailing of a [Check Transfer](#check-transfers), which happens
   * once per weekday in production but can be sped up in sandbox. This transfer must
   * first have a `status` of `pending_approval` or `pending_submission`.
   */
  mail(
    checkTransferId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfers_.CheckTransfer>> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/mail`, options);
  }

  /**
   * Simulates a [Check Transfer](#check-transfers) being returned via USPS to
   * Increase. This transfer must first have a `status` of `mailed`.
   */
  return(
    checkTransferId: string,
    body: CheckTransferReturnParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckTransfers_.CheckTransfer>> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/return`, { body, ...options });
  }
}

export interface CheckTransferReturnParams {
  /**
   * The reason why the Check Transfer was returned to Increase.
   */
  reason: 'mail_delivery_failure' | 'refused_by_recipient' | 'returned_not_authorized';
}

export namespace CheckTransfers {
  export import CheckTransferReturnParams = API.CheckTransferReturnParams;
}
