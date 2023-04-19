// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Programs extends APIResource {
  /**
   * Retrieve a Program
   */
  retrieve(programId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Program>> {
    return this.get(`/programs/${programId}`, options);
  }

  /**
   * List Programs
   */
  list(query?: ProgramListParams, options?: Core.RequestOptions): Core.PagePromise<ProgramsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ProgramsPage>;
  list(
    query: ProgramListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProgramsPage> {
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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was created.
   */
  created_at: string;

  /**
   * The Program identifier.
   */
  id: string;

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
