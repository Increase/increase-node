// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class EventSubscriptions extends APIResource {
  /**
   * Create an Event Subscription
   */
  create(
    body: EventSubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.post('/event_subscriptions', { body, ...options });
  }

  /**
   * Retrieve an Event Subscription
   */
  retrieve(
    eventSubscriptionId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.get(`/event_subscriptions/${eventSubscriptionId}`, options);
  }

  /**
   * Update an Event Subscription
   */
  update(
    eventSubscriptionId: string,
    body: EventSubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<EventSubscription>> {
    return this.patch(`/event_subscriptions/${eventSubscriptionId}`, { body, ...options });
  }

  /**
   * List Event Subscriptions
   */
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
 * [developer dashboard](https://dashboard.increase.com/developers/webhooks) or the
 * API. For more information, see our
 * [webhooks guide](https://increase.com/documentation/webhooks).
 */
export interface EventSubscription {
  /**
   * The event subscription identifier.
   */
  id: string;

  /**
   * The time the event subscription was created.
   */
  created_at: string;

  /**
   * If specified, this subscription will only receive webhooks for Events with the
   * specified `category`.
   */
  selected_event_category:
    | 'account.created'
    | 'account.updated'
    | 'account_number.created'
    | 'account_number.updated'
    | 'account_statement.created'
    | 'account_transfer.created'
    | 'account_transfer.updated'
    | 'ach_prenotification.created'
    | 'ach_prenotification.updated'
    | 'ach_transfer.created'
    | 'ach_transfer.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_payment.created'
    | 'card_payment.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'external_account.created'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'real_time_decision.card_authorization_requested'
    | 'real_time_decision.digital_wallet_token_requested'
    | 'real_time_decision.digital_wallet_authentication_requested'
    | 'real_time_payments_transfer.created'
    | 'real_time_payments_transfer.updated'
    | 'real_time_payments_request_for_payment.created'
    | 'real_time_payments_request_for_payment.updated'
    | 'transaction.created'
    | 'wire_drawdown_request.created'
    | 'wire_drawdown_request.updated'
    | 'wire_transfer.created'
    | 'wire_transfer.updated'
    | null;

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
   * If specified, this subscription will only receive webhooks for Events with the
   * specified `category`.
   */
  selected_event_category?:
    | 'account.created'
    | 'account.updated'
    | 'account_number.created'
    | 'account_number.updated'
    | 'account_statement.created'
    | 'account_transfer.created'
    | 'account_transfer.updated'
    | 'ach_prenotification.created'
    | 'ach_prenotification.updated'
    | 'ach_transfer.created'
    | 'ach_transfer.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_payment.created'
    | 'card_payment.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'external_account.created'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'real_time_decision.card_authorization_requested'
    | 'real_time_decision.digital_wallet_token_requested'
    | 'real_time_decision.digital_wallet_authentication_requested'
    | 'real_time_payments_transfer.created'
    | 'real_time_payments_transfer.updated'
    | 'real_time_payments_request_for_payment.created'
    | 'real_time_payments_request_for_payment.updated'
    | 'transaction.created'
    | 'wire_drawdown_request.created'
    | 'wire_drawdown_request.updated'
    | 'wire_transfer.created'
    | 'wire_transfer.updated';

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

export namespace EventSubscriptions {
  export import EventSubscription = API.EventSubscription;
  export import EventSubscriptionsPage = API.EventSubscriptionsPage;
  export import EventSubscriptionCreateParams = API.EventSubscriptionCreateParams;
  export import EventSubscriptionUpdateParams = API.EventSubscriptionUpdateParams;
  export import EventSubscriptionListParams = API.EventSubscriptionListParams;
}
