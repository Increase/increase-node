// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardDisputesAPI from '../card-disputes';

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
   *   returned. The card dispute will eventually transition into `won` or `lost`
   *   depending on the outcome.
   * - `rejected` - The Card Dispute has been rejected.
   * - `lost` - The Card Dispute has been lost and funds previously credited from the
   *   acceptance have been debited.
   * - `won` - The Card Dispute has been won and no further action can be taken.
   */
  status: 'accepted' | 'rejected' | 'lost' | 'won';

  /**
   * Why the dispute was rejected. Not required for accepting disputes.
   */
  explanation?: string;
}

export declare namespace CardDisputes {
  export { type CardDisputeActionParams as CardDisputeActionParams };
}
