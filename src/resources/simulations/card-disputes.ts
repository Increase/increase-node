// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsCardDisputesAPI from 'increase/resources/simulations/card-disputes';
import * as CardDisputesAPI from 'increase/resources/card-disputes';

export class CardDisputes extends APIResource {
  /**
   * After a [Card Dispute](#card-disputes) is created in production, the dispute
   * will be reviewed. Since no review happens in sandbox, this endpoint simulates
   * moving a Card Dispute into a rejected or accepted state. A Card Dispute can only
   * be actioned one time and must have a status of `pending_reviewing`.
   */
  action(
    cardDisputeId: string,
    body: CardDisputeActionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardDisputesAPI.CardDispute> {
    return this._client.post(`/simulations/card_disputes/${cardDisputeId}/action`, { body, ...options });
  }
}

export interface CardDisputeActionParams {
  /**
   * The status to move the dispute to.
   *
   * - `accepted` - The Card Dispute has been accepted and your funds have been
   *   returned.
   * - `rejected` - The Card Dispute has been rejected.
   */
  status: 'accepted' | 'rejected';

  /**
   * Why the dispute was rejected. Not required for accepting disputes.
   */
  explanation?: string;
}

export namespace CardDisputes {
  export import CardDisputeActionParams = SimulationsCardDisputesAPI.CardDisputeActionParams;
}
