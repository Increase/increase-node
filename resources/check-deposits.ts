// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class CheckDeposits extends APIResource {
  /**
   * Create a Check Deposit
   */
  create(
    body: CheckDepositCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CheckDeposit>> {
    return this.post('/check_deposits', { body, ...options });
  }

  /**
   * Retrieve a Check Deposit
   */
  retrieve(checkDepositId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckDeposit>> {
    return this.get(`/check_deposits/${checkDepositId}`, options);
  }

  /**
   * List Check Deposits
   */
  list(query?: CheckDepositListParams, options?: Core.RequestOptions): Core.PagePromise<CheckDepositsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CheckDepositsPage>;
  list(
    query: CheckDepositListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckDepositsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/check_deposits', CheckDepositsPage, { query, ...options });
  }
}

export class CheckDepositsPage extends Page<CheckDeposit> {}

/**
 * Check Deposits allow you to deposit images of paper checks into your account.
 */
export interface CheckDeposit {
  /**
   * The Account the check was deposited into.
   */
  account_id: string;

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
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * If your deposit is successfully parsed and accepted by Increase, this will
   * contain details of the parsed check.
   */
  deposit_acceptance: CheckDeposit.DepositAcceptance | null;

  /**
   * If your deposit is rejected by Increase, this will contain details as to why it
   * was rejected.
   */
  deposit_rejection: CheckDeposit.DepositRejection | null;

  /**
   * If your deposit is returned, this will contain details as to why it was
   * returned.
   */
  deposit_return: CheckDeposit.DepositReturn | null;

  /**
   * The ID for the File containing the image of the front of the check.
   */
  front_image_file_id: string;

  /**
   * The deposit's identifier.
   */
  id: string;

  /**
   * The status of the Check Deposit.
   */
  status: 'pending' | 'submitted' | 'rejected' | 'returned';

  /**
   * The ID for the Transaction created by the deposit.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_deposit`.
   */
  type: 'check_deposit';
}

export namespace CheckDeposit {
  export interface DepositAcceptance {
    /**
     * The account number printed on the check.
     */
    account_number: string;

    /**
     * The amount to be deposited in the minor unit of the transaction's currency. For
     * dollars, for example, this is cents.
     */
    amount: number;

    /**
     * An additional line of metadata printed on the check. This typically includes the
     * check number for business checks.
     */
    auxiliary_on_us: string | null;

    /**
     * The ID of the Check Deposit that was accepted.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
     * transaction's currency.
     */
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

    /**
     * The routing number printed on the check.
     */
    routing_number: string;

    /**
     * The check serial number, if present, for consumer checks. For business checks,
     * the serial number is usually in the `auxiliary_on_us` field.
     */
    serial_number: string | null;
  }

  export interface DepositRejection {
    /**
     * The rejected amount in the minor unit of check's currency. For dollars, for
     * example, this is cents.
     */
    amount: number;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
     * currency.
     */
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

    /**
     * Why the check deposit was rejected.
     */
    reason:
      | 'incomplete_image'
      | 'duplicate'
      | 'poor_image_quality'
      | 'incorrect_amount'
      | 'incorrect_recipient'
      | 'not_eligible_for_mobile_deposit'
      | 'unknown';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check deposit was rejected.
     */
    rejected_at: string;
  }

  export interface DepositReturn {
    /**
     * The amount in the minor unit of the transaction's currency. For dollars, for
     * example, this is cents.
     */
    amount: number;

    /**
     * The identifier of the Check Deposit that was returned.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
     * transaction's currency.
     */
    currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

    return_reason:
      | 'ach_conversion_not_supported'
      | 'closed_account'
      | 'duplicate_submission'
      | 'insufficient_funds'
      | 'no_account'
      | 'not_authorized'
      | 'stale_dated'
      | 'stop_payment'
      | 'unknown_reason'
      | 'unmatched_details'
      | 'unreadable_image';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check deposit was returned.
     */
    returned_at: string;

    /**
     * The identifier of the transaction that reversed the original check deposit
     * transaction.
     */
    transaction_id: string;
  }
}

export interface CheckDepositCreateParams {
  /**
   * The identifier for the Account to deposit the check in.
   */
  account_id: string;

  /**
   * The deposit amount in the minor unit of the account currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * The File containing the check's back image.
   */
  back_image_file_id: string;

  /**
   * The currency to use for the deposit.
   */
  currency: string;

  /**
   * The File containing the check's front image.
   */
  front_image_file_id: string;
}

export interface CheckDepositListParams extends PageParams {
  /**
   * Filter Check Deposits to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: CheckDepositListParams.CreatedAt;
}

export namespace CheckDepositListParams {
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
