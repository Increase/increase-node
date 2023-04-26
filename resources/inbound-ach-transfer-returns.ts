// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class InboundACHTransferReturns extends APIResource {
  /**
   * Create an ACH Return
   */
  create(
    body: InboundACHTransferReturnCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InboundACHTransferReturn>> {
    return this.post('/inbound_ach_transfer_returns', { body, ...options });
  }

  /**
   * Retrieve an Inbound ACH Transfer Return
   */
  retrieve(
    inboundACHTransferReturnId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InboundACHTransferReturn>> {
    return this.get(`/inbound_ach_transfer_returns/${inboundACHTransferReturnId}`, options);
  }

  /**
   * List Inbound ACH Transfer Returns
   */
  list(
    query?: InboundACHTransferReturnListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundACHTransferReturnsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<InboundACHTransferReturnsPage>;
  list(
    query: InboundACHTransferReturnListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundACHTransferReturnsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/inbound_ach_transfer_returns', InboundACHTransferReturnsPage, {
      query,
      ...options,
    });
  }
}

export class InboundACHTransferReturnsPage extends Page<InboundACHTransferReturn> {}

/**
 * If unauthorized activity occurs via ACH, you can create an Inbound ACH Transfer
 * Return and we'll reverse the transaction. You can create an Inbound ACH Transfer
 * return the first two days after receiving an Inbound ACH Transfer.
 */
export interface InboundACHTransferReturn {
  /**
   * The ID of the Inbound ACH Transfer Return.
   */
  id: string;

  /**
   * The ID for the Transaction that is being returned.
   */
  inbound_ach_transfer_transaction_id: string;

  /**
   * The reason why this transfer will be returned. This is sent to the initiating
   * bank.
   */
  reason:
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized';

  /**
   * The lifecycle status of the transfer.
   */
  status: 'pending_submitting' | 'submitted';

  /**
   * After the return is submitted to FedACH, this will contain supplemental details.
   */
  submission: InboundACHTransferReturn.Submission | null;

  /**
   * The ID for the transaction refunding the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_ach_transfer_return`.
   */
  type: 'inbound_ach_transfer_return';
}

export namespace InboundACHTransferReturn {
  /**
   * After the return is submitted to FedACH, this will contain supplemental details.
   */
  export interface Submission {
    /**
     * When the ACH transfer return was sent to FedACH.
     */
    submitted_at: string;

    /**
     * The trace number for the submission.
     */
    trace_number: string;
  }
}

export interface InboundACHTransferReturnCreateParams {
  /**
   * The reason why this transfer will be returned. The most usual return codes are
   * `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.
   */
  reason:
    | 'authorization_revoked_by_customer'
    | 'payment_stopped'
    | 'customer_advised_unauthorized_improper_ineligible_or_incomplete'
    | 'representative_payee_deceased_or_unable_to_continue_in_that_capacity'
    | 'beneficiary_or_account_holder_deceased'
    | 'credit_entry_refused_by_receiver'
    | 'duplicate_entry'
    | 'corporate_customer_advised_not_authorized';

  /**
   * The transaction identifier of the Inbound ACH Transfer to return to the
   * originating financial institution.
   */
  transaction_id: string;
}

export interface InboundACHTransferReturnListParams extends PageParams {}
