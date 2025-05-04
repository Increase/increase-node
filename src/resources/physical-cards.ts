// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class PhysicalCards extends APIResource {
  /**
   * Create a Physical Card
   */
  create(body: PhysicalCardCreateParams, options?: Core.RequestOptions): Core.APIPromise<PhysicalCard> {
    return this._client.post('/physical_cards', { body, ...options });
  }

  /**
   * Retrieve a Physical Card
   */
  retrieve(physicalCardId: string, options?: Core.RequestOptions): Core.APIPromise<PhysicalCard> {
    return this._client.get(`/physical_cards/${physicalCardId}`, options);
  }

  /**
   * Update a Physical Card
   */
  update(
    physicalCardId: string,
    body: PhysicalCardUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhysicalCard> {
    return this._client.patch(`/physical_cards/${physicalCardId}`, { body, ...options });
  }

  /**
   * List Physical Cards
   */
  list(
    query?: PhysicalCardListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PhysicalCardsPage, PhysicalCard>;
  list(options?: Core.RequestOptions): Core.PagePromise<PhysicalCardsPage, PhysicalCard>;
  list(
    query: PhysicalCardListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PhysicalCardsPage, PhysicalCard> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/physical_cards', PhysicalCardsPage, { query, ...options });
  }
}

export class PhysicalCardsPage extends Page<PhysicalCard> {}

/**
 * Custom physical Visa cards that are shipped to your customers. The artwork is
 * configurable by a connected [Card Profile](/documentation/api#card-profiles).
 * The same Card can be used for multiple Physical Cards. Printing cards incurs a
 * fee. Please contact [support@increase.com](mailto:support@increase.com) for
 * pricing!
 */
export interface PhysicalCard {
  /**
   * The physical card identifier.
   */
  id: string;

  /**
   * The identifier for the Card this Physical Card represents.
   */
  card_id: string;

  /**
   * Details about the cardholder, as it appears on the printed card.
   */
  cardholder: PhysicalCard.Cardholder;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Physical Card was created.
   */
  created_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The Physical Card Profile used for this Physical Card.
   */
  physical_card_profile_id: string | null;

  /**
   * The details used to ship this physical card.
   */
  shipment: PhysicalCard.Shipment;

  /**
   * The status of the Physical Card.
   *
   * - `active` - The physical card is active.
   * - `disabled` - The physical card is temporarily disabled.
   * - `canceled` - The physical card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `physical_card`.
   */
  type: 'physical_card';
}

export namespace PhysicalCard {
  /**
   * Details about the cardholder, as it appears on the printed card.
   */
  export interface Cardholder {
    /**
     * The cardholder's first name.
     */
    first_name: string;

    /**
     * The cardholder's last name.
     */
    last_name: string;
  }

  /**
   * The details used to ship this physical card.
   */
  export interface Shipment {
    /**
     * The location to where the card's packing label is addressed.
     */
    address: Shipment.Address;

    /**
     * The shipping method.
     *
     * - `usps` - USPS Post with tracking.
     * - `fedex_priority_overnight` - FedEx Priority Overnight, no signature.
     * - `fedex_2_day` - FedEx 2-day.
     */
    method: 'usps' | 'fedex_priority_overnight' | 'fedex_2_day';

    /**
     * The status of this shipment.
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
    status: 'pending' | 'canceled' | 'submitted' | 'acknowledged' | 'rejected' | 'shipped' | 'returned';

    /**
     * Tracking details for the shipment.
     */
    tracking: Shipment.Tracking | null;
  }

  export namespace Shipment {
    /**
     * The location to where the card's packing label is addressed.
     */
    export interface Address {
      /**
       * The city of the shipping address.
       */
      city: string;

      /**
       * The first line of the shipping address.
       */
      line1: string;

      /**
       * The second line of the shipping address.
       */
      line2: string | null;

      /**
       * The third line of the shipping address.
       */
      line3: string | null;

      /**
       * The name of the recipient.
       */
      name: string;

      /**
       * The postal code of the shipping address.
       */
      postal_code: string;

      /**
       * The US state of the shipping address.
       */
      state: string;
    }

    /**
     * Tracking details for the shipment.
     */
    export interface Tracking {
      /**
       * The tracking number.
       */
      number: string;

      /**
       * For returned shipments, the tracking number of the return shipment.
       */
      return_number: string | null;

      /**
       * For returned shipments, this describes why the package was returned.
       */
      return_reason: string | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the fulfillment provider marked the card as ready for pick-up by the shipment
       * carrier.
       */
      shipped_at: string;

      /**
       * Tracking updates relating to the physical card's delivery.
       */
      updates: Array<Tracking.Update>;
    }

    export namespace Tracking {
      export interface Update {
        /**
         * The type of tracking event.
         *
         * - `in_transit` - The physical card is in transit.
         * - `processed_for_delivery` - The physical card has been processed for delivery.
         * - `delivered` - The physical card has been delivered.
         * - `returned_to_sender` - Delivery failed and the physical card was returned to
         *   sender.
         */
        category: 'in_transit' | 'processed_for_delivery' | 'delivered' | 'returned_to_sender';

        /**
         * The city where the event took place.
         */
        city: string | null;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
         * the tracking event took place.
         */
        created_at: string;

        /**
         * The postal code where the event took place.
         */
        postal_code: string | null;

        /**
         * The state where the event took place.
         */
        state: string | null;
      }
    }
  }
}

export interface PhysicalCardCreateParams {
  /**
   * The underlying card representing this physical card.
   */
  card_id: string;

  /**
   * Details about the cardholder, as it will appear on the physical card.
   */
  cardholder: PhysicalCardCreateParams.Cardholder;

  /**
   * The details used to ship this physical card.
   */
  shipment: PhysicalCardCreateParams.Shipment;

  /**
   * The physical card profile to use for this physical card. The latest default
   * physical card profile will be used if not provided.
   */
  physical_card_profile_id?: string;
}

export namespace PhysicalCardCreateParams {
  /**
   * Details about the cardholder, as it will appear on the physical card.
   */
  export interface Cardholder {
    /**
     * The cardholder's first name.
     */
    first_name: string;

    /**
     * The cardholder's last name.
     */
    last_name: string;
  }

  /**
   * The details used to ship this physical card.
   */
  export interface Shipment {
    /**
     * The address to where the card should be shipped.
     */
    address: Shipment.Address;

    /**
     * The shipping method to use.
     *
     * - `usps` - USPS Post with tracking.
     * - `fedex_priority_overnight` - FedEx Priority Overnight, no signature.
     * - `fedex_2_day` - FedEx 2-day.
     */
    method: 'usps' | 'fedex_priority_overnight' | 'fedex_2_day';
  }

  export namespace Shipment {
    /**
     * The address to where the card should be shipped.
     */
    export interface Address {
      /**
       * The city of the shipping address.
       */
      city: string;

      /**
       * The first line of the shipping address.
       */
      line1: string;

      /**
       * The name of the recipient.
       */
      name: string;

      /**
       * The postal code of the shipping address.
       */
      postal_code: string;

      /**
       * The US state of the shipping address.
       */
      state: string;

      /**
       * The second line of the shipping address.
       */
      line2?: string;

      /**
       * The third line of the shipping address.
       */
      line3?: string;

      /**
       * The phone number of the recipient.
       */
      phone_number?: string;
    }
  }
}

export interface PhysicalCardUpdateParams {
  /**
   * The status to update the Physical Card to.
   *
   * - `active` - The physical card is active.
   * - `disabled` - The physical card is temporarily disabled.
   * - `canceled` - The physical card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';
}

export interface PhysicalCardListParams extends PageParams {
  /**
   * Filter Physical Cards to ones belonging to the specified Card.
   */
  card_id?: string;

  created_at?: PhysicalCardListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace PhysicalCardListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

PhysicalCards.PhysicalCardsPage = PhysicalCardsPage;

export declare namespace PhysicalCards {
  export {
    type PhysicalCard as PhysicalCard,
    PhysicalCardsPage as PhysicalCardsPage,
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardUpdateParams as PhysicalCardUpdateParams,
    type PhysicalCardListParams as PhysicalCardListParams,
  };
}
