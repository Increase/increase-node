// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as InboundFundsHoldsAPI from 'increase/resources/simulations/inbound-funds-holds';

export class InboundFundsHolds extends APIResource {
  /**
   * This endpoint simulates immediately releasing an inbound funds hold, which might
   * be created as a result of e.g., an ACH debit.
   */
  release(
    inboundFundsHoldId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundFundsHoldReleaseResponse> {
    return this.post(`/simulations/inbound_funds_holds/${inboundFundsHoldId}/release`, options);
  }
}

/**
 * We hold funds for certain transaction types to account for return windows where
 * funds might still be clawed back by the sending institution.
 */
export interface InboundFundsHoldReleaseResponse {
  /**
   * The Inbound Funds Hold identifier.
   */
  id: string;

  /**
   * The held amount in the minor unit of the account's currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * When the hold will be released automatically. Certain conditions may cause it to
   * be released before this time.
   */
  automatically_releases_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the hold
   * was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the hold's
   * currency.
   *
   * - `CAD` - Canadian Dollar (CAD)
   * - `CHF` - Swiss Franc (CHF)
   * - `EUR` - Euro (EUR)
   * - `GBP` - British Pound (GBP)
   * - `JPY` - Japanese Yen (JPY)
   * - `USD` - US Dollar (USD)
   */
  currency: 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'USD';

  /**
   * The ID of the Transaction for which funds were held.
   */
  held_transaction_id: string | null;

  /**
   * The ID of the Pending Transaction representing the held funds.
   */
  pending_transaction_id: string | null;

  /**
   * When the hold was released (if it has been released).
   */
  released_at: string | null;

  /**
   * The status of the hold.
   *
   * - `held` - Funds are still being held.
   * - `complete` - Funds have been released.
   */
  status: 'held' | 'complete';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_funds_hold`.
   */
  type: 'inbound_funds_hold';
}

export namespace InboundFundsHolds {
  export import InboundFundsHoldReleaseResponse = InboundFundsHoldsAPI.InboundFundsHoldReleaseResponse;
}
