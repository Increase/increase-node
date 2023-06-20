// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as CardDisputes_ from '~/resources/card-disputes';
import * as API from './';

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
  ): Promise<Core.APIResponse<CardDisputes_.CardDispute>> {
    return this.post(`/simulations/card_disputes/${cardDisputeId}/action`, { body, ...options });
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

export namespace CardDisputes {
  export import CardDisputeActionParams = API.CardDisputeActionParams;
}
