// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckDepositsAPI from '../check-deposits';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CheckDeposits extends APIResource {
  /**
   * Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to
   * factors like poor image quality. This Check Deposit must first have a `status`
   * of `pending`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.reject(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  reject(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/reject`, options);
  }

  /**
   * Simulates the return of a [Check Deposit](#check-deposits). This Check Deposit
   * must first have a `status` of `submitted`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.return(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  return(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/return`, options);
  }

  /**
   * Simulates the submission of a [Check Deposit](#check-deposits) to the Federal
   * Reserve. This Check Deposit must first have a `status` of `pending`.
   *
   * @example
   * ```ts
   * const checkDeposit =
   *   await client.simulations.checkDeposits.submit(
   *     'check_deposit_f06n9gpg7sxn8t19lfc1',
   *   );
   * ```
   */
  submit(checkDepositID: string, options?: RequestOptions): APIPromise<CheckDepositsAPI.CheckDeposit> {
    return this._client.post(path`/simulations/check_deposits/${checkDepositID}/submit`, options);
  }
}
