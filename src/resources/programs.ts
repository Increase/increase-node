// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class Programs extends APIResource {
  /**
   * Retrieve a Program
   */
  retrieve(programId: string, options?: Core.RequestOptions): Core.APIPromise<Program> {
    return this._client.get(`/programs/${programId}`, options);
  }

  /**
   * List Programs
   */
  list(query?: ProgramListParams, options?: Core.RequestOptions): Core.PagePromise<ProgramsPage, Program>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProgramsPage, Program>;
  list(
    query: ProgramListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProgramsPage, Program> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/programs', ProgramsPage, { query, ...options });
  }
}

export class ProgramsPage extends Page<Program> {}

/**
 * Programs determine the compliance and commercial terms of Accounts. By default,
 * you have a Commercial Banking program for managing your own funds. If you are
 * lending or managing funds on behalf of your customers, or otherwise engaged in
 * regulated activity, we will work together to create additional Programs for you.
 */
export interface Program {
  /**
   * The Program identifier.
   */
  id: string;

  /**
   * The Bank the Program is with.
   *
   * - `blue_ridge_bank` - Blue Ridge Bank, N.A.
   * - `core_bank` - Core Bank
   * - `first_internet_bank` - First Internet Bank of Indiana
   * - `grasshopper_bank` - Grasshopper Bank
   */
  bank: 'blue_ridge_bank' | 'core_bank' | 'first_internet_bank' | 'grasshopper_bank';

  /**
   * The Program billing account.
   */
  billing_account_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was created.
   */
  created_at: string;

  /**
   * The default configuration for digital cards attached to this Program.
   */
  default_digital_card_profile_id: string | null;

  /**
   * The Interest Rate currently being earned on the accounts in this program, as a
   * string containing a decimal number. For example, a 1% interest rate would be
   * represented as "0.01".
   */
  interest_rate: string;

  /**
   * The name of the Program.
   */
  name: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `program`.
   */
  type: 'program';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was last updated.
   */
  updated_at: string;
}

export interface ProgramListParams extends PageParams {}

Programs.ProgramsPage = ProgramsPage;

export declare namespace Programs {
  export {
    type Program as Program,
    ProgramsPage as ProgramsPage,
    type ProgramListParams as ProgramListParams,
  };
}
