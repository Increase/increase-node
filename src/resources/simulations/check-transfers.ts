// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as CheckTransfers_ from 'increase/resources/check-transfers';

export class CheckTransfers extends APIResource {
  /**
   * Simulates a [Check Transfer](#check-transfers) being deposited at a bank. This
   * transfer must first have a `status` of `mailed`.
   */
  deposit(
    checkTransferId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckTransfers_.CheckTransfer> {
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
  ): Core.APIPromise<CheckTransfers_.CheckTransfer> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/mail`, options);
  }
}
