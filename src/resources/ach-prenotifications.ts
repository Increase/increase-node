// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class ACHPrenotifications extends APIResource {
  /**
   * Create an ACH Prenotification
   */
  create(
    body: ACHPrenotificationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACHPrenotification> {
    return this.post('/ach_prenotifications', { body, ...options });
  }

  /**
   * Retrieve an ACH Prenotification
   */
  retrieve(achPrenotificationId: string, options?: Core.RequestOptions): Core.APIPromise<ACHPrenotification> {
    return this.get(`/ach_prenotifications/${achPrenotificationId}`, options);
  }

  /**
   * List ACH Prenotifications
   */
  list(
    query?: ACHPrenotificationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHPrenotificationsPage, ACHPrenotification>;
  list(options?: Core.RequestOptions): Core.PagePromise<ACHPrenotificationsPage, ACHPrenotification>;
  list(
    query: ACHPrenotificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHPrenotificationsPage, ACHPrenotification> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/ach_prenotifications', ACHPrenotificationsPage, { query, ...options });
  }
}

export class ACHPrenotificationsPage extends Page<ACHPrenotification> {}
// alias so we can export it in the namespace
type _ACHPrenotificationsPage = ACHPrenotificationsPage;

/**
 * ACH Prenotifications are one way you can verify account and routing numbers by
 * Automated Clearing House (ACH).
 */
export interface ACHPrenotification {
  /**
   * The ACH Prenotification's identifier.
   */
  id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * Additional information for the recipient.
   */
  addendum: string | null;

  /**
   * The description of the date of the notification.
   */
  company_descriptive_date: string | null;

  /**
   * Optional data associated with the notification.
   */
  company_discretionary_data: string | null;

  /**
   * The description of the notification.
   */
  company_entry_description: string | null;

  /**
   * The name by which you know the company.
   */
  company_name: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the prenotification was created.
   */
  created_at: string;

  /**
   * If the notification is for a future credit or debit.
   *
   * - `credit` - The Prenotification is for an anticipated credit.
   * - `debit` - The Prenotification is for an anticipated debit.
   */
  credit_debit_indicator: 'credit' | 'debit' | null;

  /**
   * The effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date: string | null;

  /**
   * If the receiving bank notifies that future transfers should use different
   * details, this will contain those details.
   */
  notifications_of_change: Array<ACHPrenotification.NotificationsOfChange>;

  /**
   * If your prenotification is returned, this will contain details of the return.
   */
  prenotification_return: ACHPrenotification.PrenotificationReturn | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The lifecycle status of the ACH Prenotification.
   *
   * - `pending_submitting` - The Prenotification is pending submission.
   * - `requires_attention` - The Prenotification requires attention.
   * - `returned` - The Prenotification has been returned.
   * - `submitted` - The Prenotification is complete.
   */
  status: 'pending_submitting' | 'requires_attention' | 'returned' | 'submitted';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `ach_prenotification`.
   */
  type: 'ach_prenotification';
}

export namespace ACHPrenotification {
  export interface NotificationsOfChange {
    /**
     * The type of change that occurred.
     *
     * - `incorrect_account_number` - The account number was incorrect.
     * - `incorrect_routing_number` - The routing number was incorrect.
     * - `incorrect_routing_number_and_account_number` - Both the routing number and
     *   the account number were incorrect.
     * - `incorrect_transaction_code` - The transaction code was incorrect.
     * - `incorrect_account_number_and_transaction_code` - The account number and the
     *   transaction code were incorrect.
     * - `incorrect_routing_number_account_number_and_transaction_code` - The routing
     *   number, account number, and transaction code were incorrect.
     * - `incorrect_receiving_depository_financial_institution_identification` - The
     *   receiving depository financial institution identification was incorrect.
     * - `incorrect_individual_identification_number` - The individual identification
     *   number was incorrect.
     * - `addenda_format_error` - The addenda had an incorrect format.
     * - `incorrect_standard_entry_class_code_for_outbound_international_payment` - The
     *   standard entry class code was incorrect for an outbound international payment.
     */
    change_code:
      | 'incorrect_account_number'
      | 'incorrect_routing_number'
      | 'incorrect_routing_number_and_account_number'
      | 'incorrect_transaction_code'
      | 'incorrect_account_number_and_transaction_code'
      | 'incorrect_routing_number_account_number_and_transaction_code'
      | 'incorrect_receiving_depository_financial_institution_identification'
      | 'incorrect_individual_identification_number'
      | 'addenda_format_error'
      | 'incorrect_standard_entry_class_code_for_outbound_international_payment';

    /**
     * The corrected data.
     */
    corrected_data: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the notification occurred.
     */
    created_at: string;
  }

  /**
   * If your prenotification is returned, this will contain details of the return.
   */
  export interface PrenotificationReturn {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Prenotification was returned.
     */
    created_at: string;

    /**
     * Why the Prenotification was returned.
     */
    return_reason_code: string;
  }
}

export interface ACHPrenotificationCreateParams {
  /**
   * The account number for the destination account.
   */
  account_number: string;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number: string;

  /**
   * Additional information that will be sent to the recipient.
   */
  addendum?: string;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date?: string;

  /**
   * The data you choose to associate with the transfer.
   */
  company_discretionary_data?: string;

  /**
   * The description of the transfer you wish to be shown to the recipient.
   */
  company_entry_description?: string;

  /**
   * The name by which the recipient knows you.
   */
  company_name?: string;

  /**
   * Whether the Prenotification is for a future debit or credit.
   *
   * - `credit` - The Prenotification is for an anticipated credit.
   * - `debit` - The Prenotification is for an anticipated debit.
   */
  credit_debit_indicator?: 'credit' | 'debit';

  /**
   * The transfer effective date in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date?: string;

  /**
   * Your identifier for the transfer recipient.
   */
  individual_id?: string;

  /**
   * The name of the transfer recipient. This value is information and not verified
   * by the recipient's bank.
   */
  individual_name?: string;

  /**
   * The Standard Entry Class (SEC) code to use for the ACH Prenotification.
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD).
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD).
   * - `internet_initiated` - Internet Initiated (WEB).
   */
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated';
}

export interface ACHPrenotificationListParams extends PageParams {
  created_at?: ACHPrenotificationListParams.CreatedAt;
}

export namespace ACHPrenotificationListParams {
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

export namespace ACHPrenotifications {
  export import ACHPrenotification = API.ACHPrenotification;
  export type ACHPrenotificationsPage = _ACHPrenotificationsPage;
  export import ACHPrenotificationCreateParams = API.ACHPrenotificationCreateParams;
  export import ACHPrenotificationListParams = API.ACHPrenotificationListParams;
}
