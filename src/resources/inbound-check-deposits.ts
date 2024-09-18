// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as InboundCheckDepositsAPI from './inbound-check-deposits';
import { Page, type PageParams } from '../pagination';

export class InboundCheckDeposits extends APIResource {
  /**
   * Retrieve an Inbound Check Deposit
   */
  retrieve(
    inboundCheckDepositId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundCheckDeposit> {
    return this._client.get(`/inbound_check_deposits/${inboundCheckDepositId}`, options);
  }

  /**
   * List Inbound Check Deposits
   */
  list(
    query?: InboundCheckDepositListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundCheckDepositsPage, InboundCheckDeposit>;
  list(options?: Core.RequestOptions): Core.PagePromise<InboundCheckDepositsPage, InboundCheckDeposit>;
  list(
    query: InboundCheckDepositListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InboundCheckDepositsPage, InboundCheckDeposit> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/inbound_check_deposits', InboundCheckDepositsPage, {
      query,
      ...options,
    });
  }

  /**
   * Decline an Inbound Check Deposit
   */
  decline(
    inboundCheckDepositId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundCheckDeposit> {
    return this._client.post(`/inbound_check_deposits/${inboundCheckDepositId}/decline`, options);
  }

  /**
   * Return an Inbound Check Deposit
   */
  return(
    inboundCheckDepositId: string,
    body: InboundCheckDepositReturnParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundCheckDeposit> {
    return this._client.post(`/inbound_check_deposits/${inboundCheckDepositId}/return`, { body, ...options });
  }
}

export class InboundCheckDepositsPage extends Page<InboundCheckDeposit> {}

/**
 * Inbound Check Deposits are records of third-parties attempting to deposit checks
 * against your account.
 */
export interface InboundCheckDeposit {
  /**
   * The deposit's identifier.
   */
  id: string;

  /**
   * If the Inbound Check Deposit was accepted, the
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which this
   * took place.
   */
  accepted_at: string | null;

  /**
   * The Account the check is being deposited against.
   */
  account_id: string;

  /**
   * The Account Number the check is being deposited against.
   */
  account_number_id: string | null;

  /**
   * The deposited amount in the minor unit of the destination account currency. For
   * dollars, for example, this is cents.
   */
  amount: number;

  /**
   * The ID for the File containing the image of the back of the check.
   */
  back_image_file_id: string | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * bank depositing this check. In some rare cases, this is not transmitted via
   * Check21 and the value will be null.
   */
  bank_of_first_deposit_routing_number: string | null;

  /**
   * The check number printed on the check being deposited.
   */
  check_number: string | null;

  /**
   * If this deposit is for an existing Check Transfer, the identifier of that Check
   * Transfer.
   */
  check_transfer_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the deposit was attempted.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.
   *
   * - `CAD` - Canadian Dollar (CAD)
   * - `CHF` - Swiss Franc (CHF)
   * - `EUR` - Euro (EUR)
   * - `GBP` - British Pound (GBP)
   * - `JPY` - Japanese Yen (JPY)
   * - `USD` - US Dollar (USD)
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * If the Inbound Check Deposit was declined, the
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which this
   * took place.
   */
  declined_at: string | null;

  /**
   * If the deposit attempt has been rejected, the identifier of the Declined
   * Transaction object created as a result of the failed deposit.
   */
  declined_transaction_id: string | null;

  /**
   * If you requested a return of this deposit, this will contain details of the
   * return.
   */
  deposit_return: InboundCheckDeposit.DepositReturn | null;

  /**
   * The ID for the File containing the image of the front of the check.
   */
  front_image_file_id: string | null;

  /**
   * The status of the Inbound Check Deposit.
   *
   * - `pending` - The Inbound Check Deposit is pending.
   * - `accepted` - The Inbound Check Deposit was accepted.
   * - `declined` - The Inbound Check Deposit was rejected.
   * - `returned` - The Inbound Check Deposit was returned.
   * - `requires_attention` - The Inbound Check Deposit requires attention from an
   *   Increase operator.
   */
  status: 'pending' | 'accepted' | 'declined' | 'returned' | 'requires_attention';

  /**
   * If the deposit attempt has been accepted, the identifier of the Transaction
   * object created as a result of the successful deposit.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_check_deposit`.
   */
  type: 'inbound_check_deposit';
}

export namespace InboundCheckDeposit {
  /**
   * If you requested a return of this deposit, this will contain details of the
   * return.
   */
  export interface DepositReturn {
    /**
     * The reason the deposit was returned.
     *
     * - `altered_or_fictitious` - The check was altered or fictitious.
     * - `not_authorized` - The check was not authorized.
     * - `duplicate_presentment` - The check was a duplicate presentment.
     * - `endorsement_missing` - The check was not endorsed.
     * - `endorsement_irregular` - The check was not endorsed by the payee.
     */
    reason:
      | 'altered_or_fictitious'
      | 'not_authorized'
      | 'duplicate_presentment'
      | 'endorsement_missing'
      | 'endorsement_irregular';

    /**
     * The time at which the deposit was returned.
     */
    returned_at: string;

    /**
     * The id of the transaction for the returned deposit.
     */
    transaction_id: string;
  }
}

export interface InboundCheckDepositListParams extends PageParams {
  /**
   * Filter Inbound Check Deposits to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Check Deposits to those belonging to the specified Check
   * Transfer.
   */
  check_transfer_id?: string;

  created_at?: InboundCheckDepositListParams.CreatedAt;
}

export namespace InboundCheckDepositListParams {
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

export interface InboundCheckDepositReturnParams {
  /**
   * The reason to return the Inbound Check Deposit.
   *
   * - `altered_or_fictitious` - The check was altered or fictitious.
   * - `not_authorized` - The check was not authorized.
   * - `duplicate_presentment` - The check was a duplicate presentment.
   * - `endorsement_missing` - The check was not endorsed.
   * - `endorsement_irregular` - The check was not endorsed by the payee.
   */
  reason:
    | 'altered_or_fictitious'
    | 'not_authorized'
    | 'duplicate_presentment'
    | 'endorsement_missing'
    | 'endorsement_irregular';
}

export namespace InboundCheckDeposits {
  export import InboundCheckDeposit = InboundCheckDepositsAPI.InboundCheckDeposit;
  export import InboundCheckDepositsPage = InboundCheckDepositsAPI.InboundCheckDepositsPage;
  export import InboundCheckDepositListParams = InboundCheckDepositsAPI.InboundCheckDepositListParams;
  export import InboundCheckDepositReturnParams = InboundCheckDepositsAPI.InboundCheckDepositReturnParams;
}
