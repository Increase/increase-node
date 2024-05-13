// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CheckDepositsAPI from '../check-deposits';

export class CheckDeposits extends APIResource {
  /**
   * Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to
   * factors like poor image quality. This Check Deposit must first have a `status`
   * of `pending`.
   */
  reject(
    checkDepositId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(`/simulations/check_deposits/${checkDepositId}/reject`, options);
  }

  /**
   * Simulates the return of a [Check Deposit](#check-deposits). This Check Deposit
   * must first have a `status` of `submitted`.
   */
  return(
    checkDepositId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(`/simulations/check_deposits/${checkDepositId}/return`, options);
  }

  /**
   * Simulates the submission of a [Check Deposit](#check-deposits) to the Federal
   * Reserve. This Check Deposit must first have a `status` of `pending`.
   */
  submit(
    checkDepositId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(`/simulations/check_deposits/${checkDepositId}/submit`, options);
  }
}
