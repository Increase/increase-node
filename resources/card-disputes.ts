// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class CardDisputes extends APIResource {
  /**
   * Create a Card Dispute
   */
  create(
    body: CardDisputeCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardDispute>> {
    return this.post('/card_disputes', { body, ...options });
  }

  /**
   * Retrieve a Card Dispute
   */
  retrieve(cardDisputeId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<CardDispute>> {
    return this.get(`/card_disputes/${cardDisputeId}`, options);
  }

  /**
   * List Card Disputes
   */
  list(query?: CardDisputeListParams, options?: Core.RequestOptions): Core.PagePromise<CardDisputesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardDisputesPage>;
  list(
    query: CardDisputeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardDisputesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/card_disputes', CardDisputesPage, { query, ...options });
  }
}

export class CardDisputesPage extends Page<CardDispute> {}

/**
 * If unauthorized activity occurs on a card, you can create a Card Dispute and
 * we'll return the funds if appropriate.
 */
export interface CardDispute {
  /**
   * If the Card Dispute's status is `accepted`, this will contain details of the
   * successful dispute.
   */
  acceptance: CardDispute.Acceptance | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Card Dispute was created.
   */
  created_at: string;

  /**
   * The identifier of the Transaction that was disputed.
   */
  disputed_transaction_id: string;

  /**
   * Why you disputed the Transaction in question.
   */
  explanation: string;

  /**
   * The Card Dispute identifier.
   */
  id: string;

  /**
   * If the Card Dispute's status is `rejected`, this will contain details of the
   * unsuccessful dispute.
   */
  rejection: CardDispute.Rejection | null;

  /**
   * The results of the Dispute investigation.
   */
  status: 'pending_reviewing' | 'accepted' | 'rejected';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_dispute`.
   */
  type: 'card_dispute';
}

export namespace CardDispute {
  export interface Acceptance {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was accepted.
     */
    accepted_at: string;

    /**
     * The identifier of the Card Dispute that was accepted.
     */
    card_dispute_id: string;

    /**
     * The identifier of the Transaction that was created to return the disputed funds
     * to your account.
     */
    transaction_id: string | null;
  }

  export interface Rejection {
    /**
     * The identifier of the Card Dispute that was rejected.
     */
    card_dispute_id: string;

    /**
     * Why the Card Dispute was rejected.
     */
    explanation: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was rejected.
     */
    rejected_at: string;
  }
}

export interface CardDisputeCreateParams {
  /**
   * The Transaction you wish to dispute. This Transaction must have a `source_type`
   * of `card_settlement`.
   */
  disputed_transaction_id: string;

  /**
   * Why you are disputing this Transaction.
   */
  explanation: string;
}

export interface CardDisputeListParams extends PageParams {
  created_at?: CardDisputeListParams.CreatedAt;

  status?: CardDisputeListParams.Status;
}

export namespace CardDisputeListParams {
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

  export interface Status {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'pending_reviewing' | 'accepted' | 'rejected'>;
  }
}
