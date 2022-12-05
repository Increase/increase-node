// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class CardDisputes extends APIResource {
  /**
   * Simulates moving a card dispute into a rejected or accepted state. A dispute can
   * only be actioned once and must have a status of `pending_reviewing`.
   */
  action(
    cardDisputeId: string,
    body: CardDisputeActionParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CardDispute>> {
    return this.post(`/simulations/card_disputes/${cardDisputeId}/action`, { body, ...options });
  }
}

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
    transaction_id: string;
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

export interface CardDisputeActionParams {
  /**
   * The status to move the dispute to.
   */
  status: 'accepted' | 'rejected';

  /**
   * Why the dispute was rejected. Not required for accepting disputes.
   */
  explanation?: string;
}
