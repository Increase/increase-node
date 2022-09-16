// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class CheckDeposits extends APIResource {
  /**
   * Simulates the rejection of a Check Deposit by Increase due to factors like poor
   * image quality. This Check Deposit must first have a `status` of `pending`.
   */
  reject(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckDeposit>> {
    return this.post(`/simulations/check_deposits/${id}/reject`, options);
  }

  /**
   * Simulates the submission of a Check Deposit to the Federal Reserve. This Check
   * Deposit must first have a `status` of `pending`.
   */
  submit(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckDeposit>> {
    return this.post(`/simulations/check_deposits/${id}/submit`, options);
  }
}

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
  currency: string;

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
    currency: string;

    /**
     * Why the check deposit was rejected.
     */
    reason:
      | 'incomplete_image'
      | 'duplicate'
      | 'poor_image_quality'
      | 'incorrect_amount'
      | 'incorrect_recipient'
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
    currency: string;

    return_reason:
      | 'ach_conversion_not_supported'
      | 'duplicate_submission'
      | 'insufficient_funds'
      | 'no_account'
      | 'not_authorized'
      | 'stale_dated'
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
