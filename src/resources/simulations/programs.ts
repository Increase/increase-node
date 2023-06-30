// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as Programs_ from 'increase/resources/programs';
import * as API from './';

export class Programs extends APIResource {
  /**
   * Simulates a program being created in your group. By default, your group has one
   * program called Commercial Banking. Note that when your group operates more than
   * one program, `program_id` is a required field when creating accounts.
   */
  create(
    body: ProgramCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Programs_.Program>> {
    return this.post('/simulations/programs', { body, ...options });
  }
}

export interface ProgramCreateParams {
  /**
   * The name of the program being added.
   */
  name: string;
}

export namespace Programs {
  export import ProgramCreateParams = API.ProgramCreateParams;
}
