// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CardFuelConfirmationsAPI from './card-fuel-confirmations';
import * as CardPaymentsAPI from '../card-payments';

export class CardFuelConfirmations extends APIResource {
  /**
   * Simulates the fuel confirmation of an authorization by a card acquirer. This
   * happens asynchronously right after a fuel pump transaction is completed. A fuel
   * confirmation can only happen once per authorization.
   */
  create(
    body: CardFuelConfirmationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_fuel_confirmations', { body, ...options });
  }
}

export interface CardFuelConfirmationCreateParams {
  /**
   * The amount of the fuel_confirmation in minor units in the card authorization's
   * currency.
   */
  amount: number;

  /**
   * The identifier of the Card Payment to create a fuel_confirmation on.
   */
  card_payment_id: string;
}

export namespace CardFuelConfirmations {
  export import CardFuelConfirmationCreateParams = CardFuelConfirmationsAPI.CardFuelConfirmationCreateParams;
}
