// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class EventSubscriptions extends APIResource {
  create(
    body: EventSubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.post('/event_subscriptions', { body, ...options });
  }

  retrieve(
    eventSubscriptionId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.get(`/event_subscriptions/${eventSubscriptionId}`, options);
  }

  update(
    eventSubscriptionId: string,
    body: EventSubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.patch(`/event_subscriptions/${eventSubscriptionId}`, { body, ...options });
  }

  list(
    query?: EventSubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventSubscriptionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<EventSubscriptionsPage>;
  list(
    query: EventSubscriptionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventSubscriptionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/event_subscriptions', EventSubscriptionsPage, { query, ...options });
  }
}

export class EventSubscriptionsPage extends Page<EventSubscription> {}

/**
 * Webhooks are event notifications we send to you by HTTPS POST requests. Event
 * Subscriptions are how you configure your application to listen for them. You can
 * create an Event Subscription through your
 * [team settings](https://dashboard.increase.com/applications/webhooks) or the
 * API. For more information, see our
 * [webhooks guide](https://increase.com/documentation/webhooks).
 */
export interface EventSubscription {
  /**
   * The time the event subscription was created.
   */
  created_at: string;

  /**
   * The event subscription identifier.
   */
  id: string;

  /**
   * The key that will be used to sign webhooks.
   */
  shared_secret: string;

  /**
   * This indicates if we'll send notifications to this subscription.
   */
  status: 'active' | 'disabled' | 'deleted' | 'requires_attention';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `event_subscription`.
   */
  type: 'event_subscription';

  /**
   * The webhook url where we'll send notifications.
   */
  url: string;
}

export interface EventSubscriptionCreateParams {
  /**
   * The URL you'd like us to send webhooks to.
   */
  url: string;

  /**
   * The key that will be used to sign webhooks. If no value is passed, a random
   * string will be used as default.
   */
  shared_secret?: string;
}

export interface EventSubscriptionUpdateParams {
  /**
   * The status to update the Event Subscription with.
   */
  status?: 'active' | 'disabled' | 'deleted';
}

export interface EventSubscriptionListParams extends PageParams {}
