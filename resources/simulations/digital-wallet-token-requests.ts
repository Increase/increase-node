// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import * as Shared from '~/resources/shared'

export class DigitalWalletTokenRequests extends APIResource {

  /**
   * Simulates a user attempting add a Card to a digital wallet such as Apple Pay.
   */
  create(body: DigitalWalletTokenRequestCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Shared.InboundDigitalWalletTokenRequestSimulationResult>>{
         return this.post('/simulations/digital_wallet_token_requests', { body, ...options })
       };
}

export interface DigitalWalletTokenRequestCreateParams  {
  /**
 * The identifier of the Card to be authorized.
 */
card_id: string
}