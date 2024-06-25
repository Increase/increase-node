// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as CheckDepositsAPI from './check-deposits';
import { Page, type PageParams } from '../pagination';

export class CheckDeposits extends APIResource {
  /**
   * Create a Check Deposit
   */
  create(body: CheckDepositCreateParams, options?: Core.RequestOptions): Core.APIPromise<CheckDeposit> {
    return this._client.post('/check_deposits', { body, ...options });
  }

  /**
   * Retrieve a Check Deposit
   */
  retrieve(checkDepositId: string, options?: Core.RequestOptions): Core.APIPromise<CheckDeposit> {
    return this._client.get(`/check_deposits/${checkDepositId}`, options);
  }

  /**
   * List Check Deposits
   */
  list(
    query?: CheckDepositListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckDepositsPage, CheckDeposit>;
  list(options?: Core.RequestOptions): Core.PagePromise<CheckDepositsPage, CheckDeposit>;
  list(
    query: CheckDepositListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CheckDepositsPage, CheckDeposit> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/check_deposits', CheckDepositsPage, { query, ...options });
  }
}

export class CheckDepositsPage extends Page<CheckDeposit> {}

/**
 * Check Deposits allow you to deposit images of paper checks into your account.
 */
export interface CheckDeposit {
  /**
   * The deposit's identifier.
   */
  id: string;

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
   * After the check is parsed, it is submitted to the Check21 network for
   * processing. This will contain details of the submission.
   */
  deposit_submission: CheckDeposit.DepositSubmission | null;

  /**
   * The ID for the File containing the image of the front of the check.
   */
  front_image_file_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The status of the Check Deposit.
   *
   * - `pending` - The Check Deposit is pending review.
   * - `submitted` - The Check Deposit has been deposited.
   * - `rejected` - The Check Deposit has been rejected.
   * - `returned` - The Check Deposit has been returned.
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
  /**
   * If your deposit is successfully parsed and accepted by Increase, this will
   * contain details of the parsed check.
   */
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
     * The routing number printed on the check.
     */
    routing_number: string;

    /**
     * The check serial number, if present, for consumer checks. For business checks,
     * the serial number is usually in the `auxiliary_on_us` field.
     */
    serial_number: string | null;
  }

  /**
   * If your deposit is rejected by Increase, this will contain details as to why it
   * was rejected.
   */
  export interface DepositRejection {
    /**
     * The rejected amount in the minor unit of check's currency. For dollars, for
     * example, this is cents.
     */
    amount: number;

    /**
     * The identifier of the Check Deposit that was rejected.
     */
    check_deposit_id: string;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
     * currency.
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
     * Why the check deposit was rejected.
     *
     * - `incomplete_image` - The check's image is incomplete.
     * - `duplicate` - This is a duplicate check submission.
     * - `poor_image_quality` - This check has poor image quality.
     * - `incorrect_amount` - The check was deposited with the incorrect amount.
     * - `incorrect_recipient` - The check is made out to someone other than the
     *   account holder.
     * - `not_eligible_for_mobile_deposit` - This check was not eligible for mobile
     *   deposit.
     * - `missing_required_data_elements` - This check is missing at least one required
     *   field.
     * - `suspected_fraud` - This check is suspected to be fraudulent.
     * - `deposit_window_expired` - This check's deposit window has expired.
     * - `unknown` - The check was rejected for an unknown reason.
     */
    reason:
      | 'incomplete_image'
      | 'duplicate'
      | 'poor_image_quality'
      | 'incorrect_amount'
      | 'incorrect_recipient'
      | 'not_eligible_for_mobile_deposit'
      | 'missing_required_data_elements'
      | 'suspected_fraud'
      | 'deposit_window_expired'
      | 'unknown';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check deposit was rejected.
     */
    rejected_at: string;
  }

  /**
   * If your deposit is returned, this will contain details as to why it was
   * returned.
   */
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
     * Why this check was returned by the bank holding the account it was drawn
     * against.
     *
     * - `ach_conversion_not_supported` - The check doesn't allow ACH conversion.
     * - `closed_account` - The account is closed.
     * - `duplicate_submission` - The check has already been deposited.
     * - `insufficient_funds` - Insufficient funds
     * - `no_account` - No account was found matching the check details.
     * - `not_authorized` - The check was not authorized.
     * - `stale_dated` - The check is too old.
     * - `stop_payment` - The payment has been stopped by the account holder.
     * - `unknown_reason` - The reason for the return is unknown.
     * - `unmatched_details` - The image doesn't match the details submitted.
     * - `unreadable_image` - The image could not be read.
     * - `endorsement_irregular` - The check endorsement was irregular.
     * - `altered_or_fictitious_item` - The check present was either altered or fake.
     * - `frozen_or_blocked_account` - The account this check is drawn on is frozen.
     * - `post_dated` - The check is post dated.
     * - `endorsement_missing` - The endorsement was missing.
     * - `signature_missing` - The check signature was missing.
     * - `stop_payment_suspect` - The bank suspects a stop payment will be placed.
     * - `unusable_image` - The bank cannot read the image.
     * - `image_fails_security_check` - The check image fails the bank's security
     *   check.
     * - `cannot_determine_amount` - The bank cannot determine the amount.
     * - `signature_irregular` - The signature is inconsistent with prior signatures.
     * - `non_cash_item` - The check is a non-cash item and cannot be drawn against the
     *   account.
     * - `unable_to_process` - The bank is unable to process this check.
     * - `item_exceeds_dollar_limit` - The check exceeds the bank or customer's limit.
     * - `branch_or_account_sold` - The bank sold this account and no longer services
     *   this customer.
     */
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
      | 'unreadable_image'
      | 'endorsement_irregular'
      | 'altered_or_fictitious_item'
      | 'frozen_or_blocked_account'
      | 'post_dated'
      | 'endorsement_missing'
      | 'signature_missing'
      | 'stop_payment_suspect'
      | 'unusable_image'
      | 'image_fails_security_check'
      | 'cannot_determine_amount'
      | 'signature_irregular'
      | 'non_cash_item'
      | 'unable_to_process'
      | 'item_exceeds_dollar_limit'
      | 'branch_or_account_sold';

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

  /**
   * After the check is parsed, it is submitted to the Check21 network for
   * processing. This will contain details of the submission.
   */
  export interface DepositSubmission {
    /**
     * When the check deposit was submitted to the Check21 network for processing.
     * During business days, this happens within a few hours of the check being
     * accepted by Increase.
     */
    submitted_at: string;
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

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
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

export namespace CheckDeposits {
  export import CheckDeposit = CheckDepositsAPI.CheckDeposit;
  export import CheckDepositsPage = CheckDepositsAPI.CheckDepositsPage;
  export import CheckDepositCreateParams = CheckDepositsAPI.CheckDepositCreateParams;
  export import CheckDepositListParams = CheckDepositsAPI.CheckDepositListParams;
}
