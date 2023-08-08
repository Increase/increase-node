// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as CardProfiles_ from 'increase/resources/card-profiles';

export class CardProfiles extends APIResource {
  /**
   * After a [Card Profile](#card-profile) is created in production, the images will
   * be uploaded to Visa within one day. Since Card Profiles are not uploaded to Visa
   * in sandbox, this endpoint simulates that step. Invoking this simulation triggers
   * the webhooks Increase sends when the Card Profile is approved and updates the
   * status of the Card Profile.
   */
  approve(cardProfileId: string, options?: Core.RequestOptions): Core.APIPromise<CardProfiles_.CardProfile> {
    return this.post(`/simulations/card_profiles/${cardProfileId}/approve`, options);
  }
}
