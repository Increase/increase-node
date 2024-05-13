// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as EventsAPI from './events';
import { Page, type PageParams } from '../pagination';

export class Events extends APIResource {
  /**
   * Retrieve an Event
   */
  retrieve(eventId: string, options?: Core.RequestOptions): Core.APIPromise<Event> {
    return this._client.get(`/events/${eventId}`, options);
  }

  /**
   * List Events
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.PagePromise<EventsPage, Event>;
  list(options?: Core.RequestOptions): Core.PagePromise<EventsPage, Event>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventsPage, Event> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/events', EventsPage, { query, ...options });
  }
}

export class EventsPage extends Page<Event> {}

/**
 * Events are records of things that happened to objects at Increase. Events are
 * accessible via the List Events endpoint and can be delivered to your application
 * via webhooks. For more information, see our
 * [webhooks guide](https://increase.com/documentation/webhooks).
 */
export interface Event {
  /**
   * The Event identifier.
   */
  id: string;

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
   *
   * - `account.created` - Occurs whenever an Account is created.
   * - `account.updated` - Occurs whenever an Account is updated.
   * - `account_number.created` - Occurs whenever an Account Number is created.
   * - `account_number.updated` - Occurs whenever an Account Number is updated.
   * - `account_statement.created` - Occurs whenever an Account Statement is created.
   * - `account_transfer.created` - Occurs whenever an Account Transfer is created.
   * - `account_transfer.updated` - Occurs whenever an Account Transfer is updated.
   * - `ach_prenotification.created` - Occurs whenever an ACH Prenotification is
   *   created.
   * - `ach_prenotification.updated` - Occurs whenever an ACH Prenotification is
   *   updated.
   * - `ach_transfer.created` - Occurs whenever an ACH Transfer is created.
   * - `ach_transfer.updated` - Occurs whenever an ACH Transfer is updated.
   * - `bookkeeping_account.created` - Occurs whenever a Bookkeeping Account is
   *   created.
   * - `bookkeeping_account.updated` - Occurs whenever a Bookkeeping Account is
   *   updated.
   * - `bookkeeping_entry_set.updated` - Occurs whenever a Bookkeeping Entry Set is
   *   created.
   * - `card.created` - Occurs whenever a Card is created.
   * - `card.updated` - Occurs whenever a Card is updated.
   * - `card_payment.created` - Occurs whenever a Card Payment is created.
   * - `card_payment.updated` - Occurs whenever a Card Payment is updated.
   * - `card_profile.created` - Occurs whenever a Card Profile is created.
   * - `card_profile.updated` - Occurs whenever a Card Profile is updated.
   * - `card_dispute.created` - Occurs whenever a Card Dispute is created.
   * - `card_dispute.updated` - Occurs whenever a Card Dispute is updated.
   * - `check_deposit.created` - Occurs whenever a Check Deposit is created.
   * - `check_deposit.updated` - Occurs whenever a Check Deposit is updated.
   * - `check_transfer.created` - Occurs whenever a Check Transfer is created.
   * - `check_transfer.updated` - Occurs whenever a Check Transfer is updated.
   * - `declined_transaction.created` - Occurs whenever a Declined Transaction is
   *   created.
   * - `digital_card_profile.created` - Occurs whenever a Digital Card Profile is
   *   created.
   * - `digital_card_profile.updated` - Occurs whenever a Digital Card Profile is
   *   updated.
   * - `digital_wallet_token.created` - Occurs whenever a Digital Wallet Token is
   *   created.
   * - `digital_wallet_token.updated` - Occurs whenever a Digital Wallet Token is
   *   updated.
   * - `document.created` - Occurs whenever a Document is created.
   * - `entity.created` - Occurs whenever an Entity is created.
   * - `entity.updated` - Occurs whenever an Entity is updated.
   * - `event_subscription.created` - Occurs whenever an Event Subscription is
   *   created.
   * - `event_subscription.updated` - Occurs whenever an Event Subscription is
   *   updated.
   * - `export.created` - Occurs whenever an Export is created.
   * - `export.updated` - Occurs whenever an Export is updated.
   * - `external_account.created` - Occurs whenever an External Account is created.
   * - `external_account.updated` - Occurs whenever an External Account is updated.
   * - `file.created` - Occurs whenever a File is created.
   * - `group.updated` - Occurs whenever a Group is updated.
   * - `group.heartbeat` - Increase may send webhooks with this category to see if a
   *   webhook endpoint is working properly.
   * - `inbound_ach_transfer.created` - Occurs whenever an Inbound ACH Transfer is
   *   created.
   * - `inbound_ach_transfer.updated` - Occurs whenever an Inbound ACH Transfer is
   *   updated.
   * - `inbound_ach_transfer_return.created` - Occurs whenever an Inbound ACH
   *   Transfer Return is created.
   * - `inbound_ach_transfer_return.updated` - Occurs whenever an Inbound ACH
   *   Transfer Return is updated.
   * - `inbound_check_deposit.created` - Occurs whenever an Inbound Check Deposit is
   *   created.
   * - `inbound_check_deposit.updated` - Occurs whenever an Inbound Check Deposit is
   *   updated.
   * - `inbound_mail_item.created` - Occurs whenever an Inbound Mail Item is created.
   * - `inbound_mail_item.updated` - Occurs whenever an Inbound Mail Item is updated.
   * - `inbound_wire_drawdown_request.created` - Occurs whenever an Inbound Wire
   *   Drawdown Request is created.
   * - `inbound_wire_transfer.created` - Occurs whenever an Inbound Wire Transfer is
   *   created.
   * - `inbound_wire_transfer.updated` - Occurs whenever an Inbound Wire Transfer is
   *   updated.
   * - `intrafi_account_enrollment.created` - Occurs whenever an IntraFi Account
   *   Enrollment is created.
   * - `intrafi_account_enrollment.updated` - Occurs whenever an IntraFi Account
   *   Enrollment is updated.
   * - `intrafi_exclusion.created` - Occurs whenever an IntraFi Exclusion is created.
   * - `intrafi_exclusion.updated` - Occurs whenever an IntraFi Exclusion is updated.
   * - `oauth_connection.created` - Occurs whenever an OAuth Connection is created.
   * - `oauth_connection.deactivated` - Occurs whenever an OAuth Connection is
   *   deactivated.
   * - `pending_transaction.created` - Occurs whenever a Pending Transaction is
   *   created.
   * - `pending_transaction.updated` - Occurs whenever a Pending Transaction is
   *   updated.
   * - `physical_card.created` - Occurs whenever a Physical Card is created.
   * - `physical_card.updated` - Occurs whenever a Physical Card is updated.
   * - `physical_card_profile.created` - Occurs whenever a Physical Card Profile is
   *   created.
   * - `physical_card_profile.updated` - Occurs whenever a Physical Card Profile is
   *   updated.
   * - `proof_of_authorization_request.created` - Occurs whenever a Proof of
   *   Authorization Request is created.
   * - `proof_of_authorization_request.updated` - Occurs whenever a Proof of
   *   Authorization Request is updated.
   * - `proof_of_authorization_request_submission.created` - Occurs whenever a Proof
   *   of Authorization Request Submission is created.
   * - `proof_of_authorization_request_submission.updated` - Occurs whenever a Proof
   *   of Authorization Request Submission is updated.
   * - `real_time_decision.card_authorization_requested` - Occurs whenever a
   *   Real-Time Decision is created in response to a card authorization.
   * - `real_time_decision.digital_wallet_token_requested` - Occurs whenever a
   *   Real-Time Decision is created in response to a digital wallet provisioning
   *   attempt.
   * - `real_time_decision.digital_wallet_authentication_requested` - Occurs whenever
   *   a Real-Time Decision is created in response to a digital wallet requiring
   *   two-factor authentication.
   * - `real_time_payments_transfer.created` - Occurs whenever a Real-Time Payments
   *   Transfer is created.
   * - `real_time_payments_transfer.updated` - Occurs whenever a Real-Time Payments
   *   Transfer is updated.
   * - `real_time_payments_request_for_payment.created` - Occurs whenever a Real-Time
   *   Payments Request for Payment is created.
   * - `real_time_payments_request_for_payment.updated` - Occurs whenever a Real-Time
   *   Payments Request for Payment is updated.
   * - `transaction.created` - Occurs whenever a Transaction is created.
   * - `wire_drawdown_request.created` - Occurs whenever a Wire Drawdown Request is
   *   created.
   * - `wire_drawdown_request.updated` - Occurs whenever a Wire Drawdown Request is
   *   updated.
   * - `wire_transfer.created` - Occurs whenever a Wire Transfer is created.
   * - `wire_transfer.updated` - Occurs whenever a Wire Transfer is updated.
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
    | 'bookkeeping_account.created'
    | 'bookkeeping_account.updated'
    | 'bookkeeping_entry_set.updated'
    | 'card.created'
    | 'card.updated'
    | 'card_payment.created'
    | 'card_payment.updated'
    | 'card_profile.created'
    | 'card_profile.updated'
    | 'card_dispute.created'
    | 'card_dispute.updated'
    | 'check_deposit.created'
    | 'check_deposit.updated'
    | 'check_transfer.created'
    | 'check_transfer.updated'
    | 'declined_transaction.created'
    | 'digital_card_profile.created'
    | 'digital_card_profile.updated'
    | 'digital_wallet_token.created'
    | 'digital_wallet_token.updated'
    | 'document.created'
    | 'entity.created'
    | 'entity.updated'
    | 'event_subscription.created'
    | 'event_subscription.updated'
    | 'export.created'
    | 'export.updated'
    | 'external_account.created'
    | 'external_account.updated'
    | 'file.created'
    | 'group.updated'
    | 'group.heartbeat'
    | 'inbound_ach_transfer.created'
    | 'inbound_ach_transfer.updated'
    | 'inbound_ach_transfer_return.created'
    | 'inbound_ach_transfer_return.updated'
    | 'inbound_check_deposit.created'
    | 'inbound_check_deposit.updated'
    | 'inbound_mail_item.created'
    | 'inbound_mail_item.updated'
    | 'inbound_wire_drawdown_request.created'
    | 'inbound_wire_transfer.created'
    | 'inbound_wire_transfer.updated'
    | 'intrafi_account_enrollment.created'
    | 'intrafi_account_enrollment.updated'
    | 'intrafi_exclusion.created'
    | 'intrafi_exclusion.updated'
    | 'oauth_connection.created'
    | 'oauth_connection.deactivated'
    | 'pending_transaction.created'
    | 'pending_transaction.updated'
    | 'physical_card.created'
    | 'physical_card.updated'
    | 'physical_card_profile.created'
    | 'physical_card_profile.updated'
    | 'proof_of_authorization_request.created'
    | 'proof_of_authorization_request.updated'
    | 'proof_of_authorization_request_submission.created'
    | 'proof_of_authorization_request_submission.updated'
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
  export interface Category {
    /**
     * Filter Events for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
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
      | 'bookkeeping_account.created'
      | 'bookkeeping_account.updated'
      | 'bookkeeping_entry_set.updated'
      | 'card.created'
      | 'card.updated'
      | 'card_payment.created'
      | 'card_payment.updated'
      | 'card_profile.created'
      | 'card_profile.updated'
      | 'card_dispute.created'
      | 'card_dispute.updated'
      | 'check_deposit.created'
      | 'check_deposit.updated'
      | 'check_transfer.created'
      | 'check_transfer.updated'
      | 'declined_transaction.created'
      | 'digital_card_profile.created'
      | 'digital_card_profile.updated'
      | 'digital_wallet_token.created'
      | 'digital_wallet_token.updated'
      | 'document.created'
      | 'entity.created'
      | 'entity.updated'
      | 'event_subscription.created'
      | 'event_subscription.updated'
      | 'export.created'
      | 'export.updated'
      | 'external_account.created'
      | 'external_account.updated'
      | 'file.created'
      | 'group.updated'
      | 'group.heartbeat'
      | 'inbound_ach_transfer.created'
      | 'inbound_ach_transfer.updated'
      | 'inbound_ach_transfer_return.created'
      | 'inbound_ach_transfer_return.updated'
      | 'inbound_check_deposit.created'
      | 'inbound_check_deposit.updated'
      | 'inbound_mail_item.created'
      | 'inbound_mail_item.updated'
      | 'inbound_wire_drawdown_request.created'
      | 'inbound_wire_transfer.created'
      | 'inbound_wire_transfer.updated'
      | 'intrafi_account_enrollment.created'
      | 'intrafi_account_enrollment.updated'
      | 'intrafi_exclusion.created'
      | 'intrafi_exclusion.updated'
      | 'oauth_connection.created'
      | 'oauth_connection.deactivated'
      | 'pending_transaction.created'
      | 'pending_transaction.updated'
      | 'physical_card.created'
      | 'physical_card.updated'
      | 'physical_card_profile.created'
      | 'physical_card_profile.updated'
      | 'proof_of_authorization_request.created'
      | 'proof_of_authorization_request.updated'
      | 'proof_of_authorization_request_submission.created'
      | 'proof_of_authorization_request_submission.updated'
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

export namespace Events {
  export import Event = EventsAPI.Event;
  export import EventsPage = EventsAPI.EventsPage;
  export import EventListParams = EventsAPI.EventListParams;
}
