// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PhysicalCardsAPI from '../physical-cards';

export class PhysicalCards extends APIResource {
  /**
   * This endpoint allows you to simulate advancing the shipment status of a Physical
   * Card, to simulate e.g., that a physical card was attempted shipped but then
   * failed delivery.
   *
   * @example
   * ```ts
   * const physicalCard =
   *   await client.simulations.physicalCards.advanceShipment(
   *     'physical_card_ode8duyq5v2ynhjoharl',
   *     { shipment_status: 'shipped' },
   *   );
   * ```
   */
  advanceShipment(
    physicalCardId: string,
    body: PhysicalCardAdvanceShipmentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCardsAPI.PhysicalCard> {
    return this._client.post(`/simulations/physical_cards/${physicalCardId}/advance_shipment`, {
      body,
      ...options,
    });
  }
}

export interface PhysicalCardAdvanceShipmentParams {
  /**
   * The shipment status to move the Physical Card to.
   *
   * - `pending` - The physical card has not yet been shipped.
   * - `canceled` - The physical card shipment was canceled prior to submission.
   * - `submitted` - The physical card shipment has been submitted to the card
   *   fulfillment provider.
   * - `acknowledged` - The physical card shipment has been acknowledged by the card
   *   fulfillment provider and will be processed in their next batch.
   * - `rejected` - The physical card shipment was rejected by the card printer due
   *   to an error.
   * - `shipped` - The physical card has been shipped.
   * - `returned` - The physical card shipment was returned to the sender and
   *   destroyed by the production facility.
   */
  shipment_status:
    | 'pending'
    | 'canceled'
    | 'submitted'
    | 'acknowledged'
    | 'rejected'
    | 'shipped'
    | 'returned';
}

export declare namespace PhysicalCards {
  export { type PhysicalCardAdvanceShipmentParams as PhysicalCardAdvanceShipmentParams };
}
