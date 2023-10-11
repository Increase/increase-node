// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as ProgramsAPI from 'increase/resources/programs';
import { Page, type PageParams } from 'increase/pagination';

export class Programs extends APIResource {
  /**
   * Retrieve a Program
   */
  retrieve(programId: string, options?: Core.RequestOptions): Core.APIPromise<Program> {
    return this.get(`/programs/${programId}`, options);
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
    return this.getAPIList('/programs', ProgramsPage, { query, ...options });
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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was created.
   */
  created_at: string;

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

export namespace Programs {
  export type Program = ProgramsAPI.Program;
  export import ProgramsPage = ProgramsAPI.ProgramsPage;
  export type ProgramListParams = ProgramsAPI.ProgramListParams;
}
