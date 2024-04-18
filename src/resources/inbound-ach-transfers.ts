// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as InboundACHTransfersAPI from 'increase/resources/inbound-ach-transfers';
import { Page, type PageParams } from 'increase/pagination';

export class InboundACHTransfers extends APIResource {
  /**
   * Retrieve an Inbound ACH Transfer
   */
  retrieve(inboundACHTransferId: string, options?: Core.RequestOptions): Core.APIPromise<InboundACHTransfer> {
    return this._client.get(`/inbound_ach_transfers/${inboundACHTransferId}`, options);
  }

  /**
   * List Inbound ACH Transfers
   */
  list(
    query?: InboundACHTransferListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundACHTransfersPage, InboundACHTransfer>;
  list(options?: Core.RequestOptions): Core.PagePromise<InboundACHTransfersPage, InboundACHTransfer>;
  list(
    query: InboundACHTransferListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundACHTransfersPage, InboundACHTransfer> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/inbound_ach_transfers', InboundACHTransfersPage, { query, ...options });
  }

  /**
   * Decline an Inbound ACH Transfer
   */
  decline(inboundACHTransferId: string, options?: Core.RequestOptions): Core.APIPromise<InboundACHTransfer> {
    return this._client.post(`/inbound_ach_transfers/${inboundACHTransferId}/decline`, options);
  }

  /**
   * Create a notification of change for an Inbound ACH Transfer
   */
  notificationOfChange(
    inboundACHTransferId: string,
    body: InboundACHTransferNotificationOfChangeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundACHTransfer> {
    return this._client.post(`/inbound_ach_transfers/${inboundACHTransferId}/notification_of_change`, {
      body,
      ...options,
    });
  }

  /**
   * Return an Inbound ACH Transfer
   */
  transferReturn(
    inboundACHTransferId: string,
    body: InboundACHTransferTransferReturnParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundACHTransfer> {
    return this._client.post(`/inbound_ach_transfers/${inboundACHTransferId}/transfer_return`, {
      body,
      ...options,
    });
  }
}

export class InboundACHTransfersPage extends Page<InboundACHTransfer> {}

/**
 * An Inbound ACH Transfer is an ACH transfer initiated outside of Increase to your
 * account.
 */
export interface InboundACHTransfer {
  /**
   * The inbound ACH transfer's identifier.
   */
  id: string;

  /**
   * If your transfer is accepted, this will contain details of the acceptance.
   */
  acceptance: InboundACHTransfer.Acceptance | null;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

  /**
   * Additional information sent from the originator.
   */
  addenda: InboundACHTransfer.Addenda | null;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The time at which the transfer will be automatically resolved.
   */
  automatically_resolves_at: string;

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  decline: InboundACHTransfer.Decline | null;

  /**
   * The direction of the transfer.
   *
   * - `credit` - Credit
   * - `debit` - Debit
   */
  direction: 'credit' | 'debit';

  /**
   * If you initiate a notification of change in response to the transfer, this will
   * contain its details.
   */
  notification_of_change: InboundACHTransfer.NotificationOfChange | null;

  /**
   * The descriptive date of the transfer.
   */
  originator_company_descriptive_date: string | null;

  /**
   * The additional information included with the transfer.
   */
  originator_company_discretionary_data: string | null;

  /**
   * The description of the transfer.
   */
  originator_company_entry_description: string;

  /**
   * The id of the company that initiated the transfer.
   */
  originator_company_id: string;

  /**
   * The name of the company that initiated the transfer.
   */
  originator_company_name: string;

  /**
   * The American Banking Association (ABA) routing number of the bank originating
   * the transfer.
   */
  originator_routing_number: string;

  /**
   * The id of the receiver of the transfer.
   */
  receiver_id_number: string | null;

  /**
   * The name of the receiver of the transfer.
   */
  receiver_name: string | null;

  /**
   * The status of the transfer.
   *
   * - `pending` - The Inbound ACH Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `declined` - The Inbound ACH Transfer has been declined.
   * - `accepted` - The Inbound ACH Transfer is accepted.
   * - `returned` - The Inbound ACH Transfer has been returned.
   */
  status: 'pending' | 'declined' | 'accepted' | 'returned';

  /**
   * The trace number of the transfer.
   */
  trace_number: string;

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  transfer_return: InboundACHTransfer.TransferReturn | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_ach_transfer`.
   */
  type: 'inbound_ach_transfer';
}

export namespace InboundACHTransfer {
  /**
   * If your transfer is accepted, this will contain details of the acceptance.
   */
  export interface Acceptance {
    /**
     * The time at which the transfer was accepted.
     */
    accepted_at: string;

    /**
     * The id of the transaction for the accepted transfer.
     */
    transaction_id: string;
  }

  /**
   * Additional information sent from the originator.
   */
  export interface Addenda {
    /**
     * The type of addendum.
     *
     * - `freeform` - Unstructured addendum.
     */
    category: 'freeform';

    /**
     * Unstructured `payment_related_information` passed through by the originator.
     */
    freeform: Addenda.Freeform | null;
  }

  export namespace Addenda {
    /**
     * Unstructured `payment_related_information` passed through by the originator.
     */
    export interface Freeform {
      /**
       * Each entry represents an addendum received from the originator.
       */
      entries: Array<Freeform.Entry>;
    }

    export namespace Freeform {
      export interface Entry {
        /**
         * The payment related information passed in the addendum.
         */
        payment_related_information: string;
      }
    }
  }

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  export interface Decline {
    /**
     * The time at which the transfer was declined.
     */
    declined_at: string;

    /**
     * The id of the transaction for the declined transfer.
     */
    declined_transaction_id: string;

    /**
     * The reason for the transfer decline.
     *
     * - `ach_route_canceled` - The account number is canceled.
     * - `ach_route_disabled` - The account number is disabled.
     * - `breaches_limit` - The transaction would cause an Increase limit to be
     *   exceeded.
     * - `credit_entry_refused_by_receiver` - A credit was refused. This is a
     *   reasonable default reason for decline of credits.
     * - `duplicate_return` - A rare return reason. The return this message refers to
     *   was a duplicate.
     * - `entity_not_active` - The account's entity is not active.
     * - `group_locked` - Your account is inactive.
     * - `insufficient_funds` - Your account contains insufficient funds.
     * - `misrouted_return` - A rare return reason. The return this message refers to
     *   was misrouted.
     * - `return_of_erroneous_or_reversing_debit` - The originating financial
     *   institution made a mistake and this return corrects it.
     * - `no_ach_route` - The account number that was debited does not exist.
     * - `originator_request` - The originating financial institution asked for this
     *   transfer to be returned.
     * - `transaction_not_allowed` - The transaction is not allowed per Increase's
     *   terms.
     * - `user_initiated` - Your integration declined this transfer via the API.
     */
    reason:
      | 'ach_route_canceled'
      | 'ach_route_disabled'
      | 'breaches_limit'
      | 'credit_entry_refused_by_receiver'
      | 'duplicate_return'
      | 'entity_not_active'
      | 'group_locked'
      | 'insufficient_funds'
      | 'misrouted_return'
      | 'return_of_erroneous_or_reversing_debit'
      | 'no_ach_route'
      | 'originator_request'
      | 'transaction_not_allowed'
      | 'user_initiated';
  }

  /**
   * If you initiate a notification of change in response to the transfer, this will
   * contain its details.
   */
  export interface NotificationOfChange {
    /**
     * The new account number provided in the notification of change.
     */
    updated_account_number: string | null;

    /**
     * The new account number provided in the notification of change.
     */
    updated_routing_number: string | null;
  }

  /**
   * If your transfer is returned, this will contain details of the return.
   */
  export interface TransferReturn {
    /**
     * The reason for the transfer return.
     *
     * - `returned_per_odfi_request` - The originating financial institution asked for
     *   this transfer to be returned. The receiving bank is complying with the
     *   request. The Nacha return code is R06.
     * - `authorization_revoked_by_customer` - The customer no longer authorizes this
     *   transaction. The Nacha return code is R07.
     * - `payment_stopped` - The customer asked for the payment to be stopped. This
     *   reason is only allowed for debits. The Nacha return code is R08.
     * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
     *   customer advises that the debit was unauthorized. The Nacha return code is
     *   R10.
     * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
     *   payee is deceased. The Nacha return code is R14.
     * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
     *   Nacha return code is R15.
     * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
     *   reason is only allowed for credits. The Nacha return code is R23.
     * - `duplicate_entry` - The account holder identified this transaction as a
     *   duplicate. The Nacha return code is R24.
     * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
     *   authorizes this transaction. The Nacha return code is R29.
     */
    reason:
      | 'returned_per_odfi_request'
      | 'authorization_revoked_by_customer'
      | 'payment_stopped'
      | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
      | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
      | 'beneficiary_or_account_holder_deceased'
      | 'credit_entry_refused_by_receiver'
      | 'duplicate_entry'
      | 'corporate_customer_advised_not_authorized';

    /**
     * The time at which the transfer was returned.
     */
    returned_at: string;

    /**
     * The id of the transaction for the returned transfer.
     */
    transaction_id: string;
  }
}

export interface InboundACHTransferListParams extends PageParams {
  /**
   * Filter Inbound ACH Tranfers to ones belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound ACH Tranfers to ones belonging to the specified Account Number.
   */
  account_number_id?: string;

  created_at?: InboundACHTransferListParams.CreatedAt;

  /**
   * Filter Inbound ACH Transfers to those with the specified status.
   *
   * - `pending` - The Inbound ACH Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `declined` - The Inbound ACH Transfer has been declined.
   * - `accepted` - The Inbound ACH Transfer is accepted.
   * - `returned` - The Inbound ACH Transfer has been returned.
   */
  status?: 'pending' | 'declined' | 'accepted' | 'returned';
}

export namespace InboundACHTransferListParams {
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

export interface InboundACHTransferNotificationOfChangeParams {
  /**
   * The updated account number to send in the notification of change.
   */
  updated_account_number?: string;

  /**
   * The updated routing number to send in the notification of change.
   */
  updated_routing_number?: string;
}

export interface InboundACHTransferTransferReturnParams {
  /**
   * The reason why this transfer will be returned. The most usual return codes are
   * `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
   *
   * - `returned_per_odfi_request` - The originating financial institution asked for
   *   this transfer to be returned. The receiving bank is complying with the
   *   request. The Nacha return code is R06.
   * - `authorization_revoked_by_customer` - The customer no longer authorizes this
   *   transaction. The Nacha return code is R07.
   * - `payment_stopped` - The customer asked for the payment to be stopped. This
   *   reason is only allowed for debits. The Nacha return code is R08.
   * - `customer_advised_unauthorized_improper_ineligible_or_incomplete` - The
   *   customer advises that the debit was unauthorized. The Nacha return code is
   *   R10.
   * - `representative_payee_deceased_or_unable_to_continue_in_that_capacity` - The
   *   payee is deceased. The Nacha return code is R14.
   * - `beneficiary_or_account_holder_deceased` - The account holder is deceased. The
   *   Nacha return code is R15.
   * - `credit_entry_refused_by_receiver` - The customer refused a credit entry. This
   *   reason is only allowed for credits. The Nacha return code is R23.
   * - `duplicate_entry` - The account holder identified this transaction as a
   *   duplicate. The Nacha return code is R24.
   * - `corporate_customer_advised_not_authorized` - The corporate customer no longer
   *   authorizes this transaction. The Nacha return code is R29.
   */
  reason:
    | 'returned_per_odfi_request'
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized';
}

export namespace InboundACHTransfers {
  export import InboundACHTransfer = InboundACHTransfersAPI.InboundACHTransfer;
  export import InboundACHTransfersPage = InboundACHTransfersAPI.InboundACHTransfersPage;
  export import InboundACHTransferListParams = InboundACHTransfersAPI.InboundACHTransferListParams;
  export import InboundACHTransferNotificationOfChangeParams = InboundACHTransfersAPI.InboundACHTransferNotificationOfChangeParams;
  export import InboundACHTransferTransferReturnParams = InboundACHTransfersAPI.InboundACHTransferTransferReturnParams;
}
