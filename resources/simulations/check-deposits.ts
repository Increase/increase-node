// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as CheckDeposits_ from '~/resources/check-deposits';

export class CheckDeposits extends APIResource {
  /**
   * Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to
   * factors like poor image quality. This Check Deposit must first have a `status`
   * of `pending`.
   */
  reject(
    checkDepositId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckDeposits_.CheckDeposit>> {
    return this.post(`/simulations/check_deposits/${checkDepositId}/reject`, options);
  }

  /**
   * Simulates the submission of a [Check Deposit](#check-deposits) to the Federal
   * Reserve. This Check Deposit must first have a `status` of `pending`.
   */
  submit(
    checkDepositId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckDeposits_.CheckDeposit>> {
    return this.post(`/simulations/check_deposits/${checkDepositId}/submit`, options);
  }
}
