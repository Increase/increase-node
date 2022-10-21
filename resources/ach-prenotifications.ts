// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class ACHPrenotifications extends APIResource {
  create(
    body: ACHPrenotificationCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHPrenotification>> {
    return this.post('/ach_prenotifications', { body, ...options });
  }

  retrieve(
    achPrenotificationId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ACHPrenotification>> {
    return this.get(`/ach_prenotifications/${achPrenotificationId}`, options);
  }

  list(
    query?: ACHPrenotificationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHPrenotificationsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ACHPrenotificationsPage>;
  list(
    query: ACHPrenotificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ACHPrenotificationsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/ach_prenotifications', ACHPrenotificationsPage, { query, ...options });
  }
}

export class ACHPrenotificationsPage extends Page<ACHPrenotification> {}

/**
 * ACH Prenotifications are one way you can verify account and routing numbers by
 * Automated Clearing House (ACH).
 */
export interface ACHPrenotification {
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
   */
  credit_debit_indicator: 'credit' | 'debit' | null;

  /**
   * The effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date: string | null;

  /**
   * The ACH Prenotification's identifier.
   */
  id: string;

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
   */
  status: 'pending_submitting' | 'requires_attention' | 'returned' | 'submitted';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `ach_prenotification`.
   */
  type: 'ach_prenotification';
}

export namespace ACHPrenotification {
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
   */
  credit_debit_indicator?: 'credit' | 'debit';

  /**
   * The transfer effective date in
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  effective_date?: string;

  /**
   * Your identifer for the transfer recipient.
   */
  individual_id?: string;

  /**
   * The name of the transfer recipient. This value is information and not verified
   * by the recipient's bank.
   */
  individual_name?: string;

  /**
   * The Standard Entry Class (SEC) code to use for the ACH Prenotification.
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
