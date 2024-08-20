// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SimulationsInboundMailItemsAPI from './inbound-mail-items';
import * as InboundMailItemsAPI from '../inbound-mail-items';

export class InboundMailItems extends APIResource {
  /**
   * Simulates an inbound mail item to your account, as if someone had mailed a
   * physical check to one of your account's Lockboxes.
   */
  create(
    body: InboundMailItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundMailItemsAPI.InboundMailItem> {
    return this._client.post('/simulations/inbound_mail_items', { body, ...options });
  }
}

export interface InboundMailItemCreateParams {
  /**
   * The amount of the check to be simulated, in cents.
   */
  amount: number;

  /**
   * The identifier of the Lockbox to simulate inbound mail to.
   */
  lockbox_id: string;
}

export namespace InboundMailItems {
  export import InboundMailItemCreateParams = SimulationsInboundMailItemsAPI.InboundMailItemCreateParams;
}
