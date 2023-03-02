// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Events extends APIResource {
  /**
   * Retrieve an Event
   */
  retrieve(eventId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Event>> {
    return this.get(`/events/${eventId}`, options);
  }

  /**
   * List Events
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.PagePromise<EventsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<EventsPage>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/events', EventsPage, { query, ...options });
  }
}

export class EventsPage extends Page<Event> {}

/**
 * Events are records of things that happened to objects in the API. They also
 * result in webhooks being generated.
 */
export interface Event {
  /**
   * The identifier of the object that generated this Event.
   */
  associated_object_id: string;

  /**
   * The type of the object that generated this Event.
   */
  associated_object_type: string;

  /**
   * The category of the Event. We may add additional possible values for this enum
   * over time; your application should be able to handle such additions gracefully.
   */
  category:
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
   * The time the Event was created.
   */
  created_at: string;

  /**
   * The Event identifier.
   */
  id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `event`.
   */
  type: 'event';
}

export interface EventListParams extends PageParams {
  /**
   * Filter Events to those belonging to the object with the provided identifier.
   */
  associated_object_id?: string;

  category?: EventListParams.Category;

  created_at?: EventListParams.CreatedAt;
}

export namespace EventListParams {
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

  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
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
    >;
  }
}
