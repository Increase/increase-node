// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class CheckTransfers extends APIResource {
  /**
   * Simulates the mailing of a Check Transfer. This transfer must first have a
   * `status` of `pending_approval` or `pending_submission`.
   */
  mail(checkTransferId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CheckTransfer>> {
    return this.post(`/simulations/check_transfers/${checkTransferId}/mail`, options);
  }
}

/**
 * Check Transfers move funds from your Increase account by mailing a physical
 * check.
 */
export interface CheckTransfer {
  /**
   * The identifier of the Account from which funds will be transferred.
   */
  account_id: string;

  /**
   * The city of the check's destination.
   */
  address_city: string;

  /**
   * The street address of the check's destination.
   */
  address_line1: string;

  /**
   * The second line of the address of the check's destination.
   */
  address_line2: string | null;

  /**
   * The state of the check's destination.
   */
  address_state: string;

  /**
   * The postal code of the check's destination.
   */
  address_zip: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
   * currency.
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The Check transfer's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the check was mailed.
   */
  mailed_at: string | null;

  /**
   * The descriptor that is printed on the check.
   */
  message: string;

  /**
   * The name that will be printed on the check.
   */
  recipient_name: string;

  /**
   * The lifecycle status of the transfer.
   */
  status:
    | 'pending_approval'
    | 'pending_submission'
    | 'submitting'
    | 'submitted'
    | 'pending_mailing'
    | 'mailed'
    | 'canceled'
    | 'deposited'
    | 'stopped'
    | 'rejected'
    | 'requires_attention';

  /**
   * After a stop-payment is requested on the check, this will contain supplemental
   * details.
   */
  stop_payment_request: CheckTransfer.StopPaymentRequest | null;

  /**
   * After the transfer is submitted, this will contain supplemental details.
   */
  submission: CheckTransfer.Submission | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the check was submitted.
   */
  submitted_at: string | null;

  /**
   * If the transfer was created from a template, this will be the template's ID.
   */
  template_id: string | null;

  /**
   * The ID for the transaction caused by the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_transfer`.
   */
  type: 'check_transfer';
}

export namespace CheckTransfer {
  export interface Submission {
    /**
     * The identitying number of the check.
     */
    check_number: string;
  }

  export interface StopPaymentRequest {
    /**
     * The time the stop-payment was requested.
     */
    requested_at: string;

    /**
     * The transaction ID of the corresponding credit transaction.
     */
    transaction_id: string;

    /**
     * The ID of the check transfer that was stopped.
     */
    transfer_id: string;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `check_transfer_stop_payment_request`.
     */
    type: 'check_transfer_stop_payment_request';
  }
}
