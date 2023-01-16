// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import * as CardDisputes_ from '~/resources/card-disputes';

export class CardDisputes extends APIResource {
  /**
   * Simulates moving a card dispute into a rejected or accepted state. A dispute can
   * only be actioned once and must have a status of `pending_reviewing`.
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
