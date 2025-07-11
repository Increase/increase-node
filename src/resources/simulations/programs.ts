// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ProgramsAPI from '../programs';

export class Programs extends APIResource {
  /**
   * Simulates a [Program](#programs) being created in your group. By default, your
   * group has one program called Commercial Banking. Note that when your group
   * operates more than one program, `program_id` is a required field when creating
   * accounts.
   *
   * @example
   * ```ts
   * const program = await client.simulations.programs.create({
   *   name: 'For Benefit Of',
   * });
   * ```
   */
  create(body: ProgramCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProgramsAPI.Program> {
    return this._client.post('/simulations/programs', { body, ...options });
  }
}

export interface ProgramCreateParams {
  /**
   * The name of the program being added.
   */
  name: string;

  /**
   * The bank for the program's accounts, defaults to First Internet Bank.
   *
   * - `blue_ridge_bank` - Blue Ridge Bank, N.A.
   * - `core_bank` - Core Bank
   * - `first_internet_bank` - First Internet Bank of Indiana
   * - `global_innovations_bank` - Global Innovations Bank
   * - `grasshopper_bank` - Grasshopper Bank
   */
  bank?:
    | 'blue_ridge_bank'
    | 'core_bank'
    | 'first_internet_bank'
    | 'global_innovations_bank'
    | 'grasshopper_bank';

  /**
   * The identifier of the Account the Program should be added to is for.
   */
  reserve_account_id?: string;
}

export declare namespace Programs {
  export { type ProgramCreateParams as ProgramCreateParams };
}
