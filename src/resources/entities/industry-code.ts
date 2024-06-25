// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as IndustryCodeAPI from './industry-code';
import * as EntitiesAPI from './entities';

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
   * `Software Publishers`. A full list of classification codes is available
   * [here](https://increase.com/documentation/data-dictionary#north-american-industry-classification-system-codes).
   */
  industry_code: string;
}

export namespace IndustryCode {
  export import IndustryCodeCreateParams = IndustryCodeAPI.IndustryCodeCreateParams;
}
