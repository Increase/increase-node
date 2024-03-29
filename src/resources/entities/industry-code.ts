// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as IndustryCodeAPI from 'increase/resources/entities/industry-code';
import * as EntitiesAPI from 'increase/resources/entities/entities';

export class IndustryCode extends APIResource {
  /**
   * Update the industry code for a corporate Entity
   */
  create(
    entityId: string,
    body: IndustryCodeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitiesAPI.Entity> {
    return this._client.post(`/entities/${entityId}/industry_code`, { body, ...options });
  }
}

export interface IndustryCodeCreateParams {
  /**
   * The North American Industry Classification System (NAICS) code for the
   * corporation's primary line of business. This is a number, like `5132` for
   * `Software Publishers`. A full list of classification codes is available at
   * https://www.naics.com.
   */
  industry_code: string;
}

export namespace IndustryCode {
  export import IndustryCodeCreateParams = IndustryCodeAPI.IndustryCodeCreateParams;
}
