// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

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
// alias so we can export it in the namespace
type _InboundACHTransferReturnsPage = InboundACHTransferReturnsPage;

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
   *
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
   *
   * - `pending_submitting` - The transfer return is pending submission to the
   *   Federal Reserve.
   * - `submitted` - The transfer has been submitted to the Federal Reserve.
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
   *
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

export namespace InboundACHTransferReturns {
  export import InboundACHTransferReturn = API.InboundACHTransferReturn;
  export type InboundACHTransferReturnsPage = _InboundACHTransferReturnsPage;
  export import InboundACHTransferReturnCreateParams = API.InboundACHTransferReturnCreateParams;
  export import InboundACHTransferReturnListParams = API.InboundACHTransferReturnListParams;
}
