// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class CardDisputes extends APIResource {
  /**
   * Create a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute = await client.cardDisputes.create({
   *   disputed_transaction_id:
   *     'transaction_uyrp7fld2ium70oa7oi',
   *   explanation: 'Unauthorized recurring transaction.',
   * });
   * ```
   */
  create(body: CardDisputeCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardDispute> {
    return this._client.post('/card_disputes', { body, ...options });
  }

  /**
   * Retrieve a Card Dispute
   *
   * @example
   * ```ts
   * const cardDispute = await client.cardDisputes.retrieve(
   *   'card_dispute_h9sc95nbl1cgltpp7men',
   * );
   * ```
   */
  retrieve(cardDisputeId: string, options?: Core.RequestOptions): Core.APIPromise<CardDispute> {
    return this._client.get(`/card_disputes/${cardDisputeId}`, options);
  }

  /**
   * List Card Disputes
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardDispute of client.cardDisputes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: CardDisputeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardDisputesPage, CardDispute>;
  list(options?: Core.RequestOptions): Core.PagePromise<CardDisputesPage, CardDispute>;
  list(
    query: CardDisputeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CardDisputesPage, CardDispute> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/card_disputes', CardDisputesPage, { query, ...options });
  }
}

export class CardDisputesPage extends Page<CardDispute> {}

/**
 * If unauthorized activity occurs on a card, you can create a Card Dispute and
 * we'll return the funds if appropriate.
 */
export interface CardDispute {
  /**
   * The Card Dispute identifier.
   */
  id: string;

  /**
   * If the Card Dispute's status is `accepted`, this will contain details of the
   * successful dispute.
   */
  acceptance: CardDispute.Acceptance | null;

  /**
   * The amount of the dispute, if provided, or the transaction amount otherwise.
   */
  amount: number | null;

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
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the Card Dispute's status is `lost`, this will contain details of the lost
   * dispute.
   */
  loss: CardDispute.Loss | null;

  /**
   * If the Card Dispute's status is `rejected`, this will contain details of the
   * unsuccessful dispute.
   */
  rejection: CardDispute.Rejection | null;

  /**
   * The results of the Dispute investigation.
   *
   * - `pending_reviewing` - The Card Dispute is pending review.
   * - `pending_user_information` - Increase has requested more information related
   *   to the Card Dispute from you.
   * - `accepted` - The Card Dispute has been accepted and your funds have been
   *   returned. The card dispute will eventually transition into `won` or `lost`
   *   depending on the outcome.
   * - `rejected` - The Card Dispute has been rejected.
   * - `lost` - The Card Dispute has been lost and funds previously credited from the
   *   acceptance have been debited.
   * - `won` - The Card Dispute has been won and no further action can be taken.
   */
  status: 'pending_reviewing' | 'pending_user_information' | 'accepted' | 'rejected' | 'lost' | 'won';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_dispute`.
   */
  type: 'card_dispute';

  /**
   * If the Card Dispute's status is `won`, this will contain details of the won
   * dispute.
   */
  win: CardDispute.Win | null;
}

export namespace CardDispute {
  /**
   * If the Card Dispute's status is `accepted`, this will contain details of the
   * successful dispute.
   */
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
    transaction_id: string;
  }

  /**
   * If the Card Dispute's status is `lost`, this will contain details of the lost
   * dispute.
   */
  export interface Loss {
    /**
     * The identifier of the Card Dispute that was lost.
     */
    card_dispute_id: string;

    /**
     * Why the Card Dispute was lost.
     */
    explanation: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was lost.
     */
    lost_at: string;

    /**
     * The identifier of the Transaction that was created to debit the disputed funds
     * from your account.
     */
    transaction_id: string;
  }

  /**
   * If the Card Dispute's status is `rejected`, this will contain details of the
   * unsuccessful dispute.
   */
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

  /**
   * If the Card Dispute's status is `won`, this will contain details of the won
   * dispute.
   */
  export interface Win {
    /**
     * The identifier of the Card Dispute that was won.
     */
    card_dispute_id: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Card Dispute was won.
     */
    won_at: string;
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

  /**
   * The monetary amount of the part of the transaction that is being disputed. This
   * is optional and will default to the full amount of the transaction if not
   * provided. If provided, the amount must be less than or equal to the amount of
   * the transaction.
   */
  amount?: number;
}

export interface CardDisputeListParams extends PageParams {
  created_at?: CardDisputeListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

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
     * Filter Card Disputes for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending_reviewing' | 'pending_user_information' | 'accepted' | 'rejected' | 'lost' | 'won'>;
  }
}

CardDisputes.CardDisputesPage = CardDisputesPage;

export declare namespace CardDisputes {
  export {
    type CardDispute as CardDispute,
    CardDisputesPage as CardDisputesPage,
    type CardDisputeCreateParams as CardDisputeCreateParams,
    type CardDisputeListParams as CardDisputeListParams,
  };
}
