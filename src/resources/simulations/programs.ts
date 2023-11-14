// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsProgramsAPI from 'increase/resources/simulations/programs';
import * as ProgramsAPI from 'increase/resources/programs';

export class Programs extends APIResource {
  /**
   * Simulates a program being created in your group. By default, your group has one
   * program called Commercial Banking. Note that when your group operates more than
   * one program, `program_id` is a required field when creating accounts.
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
}

export namespace Programs {
  export import ProgramCreateParams = SimulationsProgramsAPI.ProgramCreateParams;
}
