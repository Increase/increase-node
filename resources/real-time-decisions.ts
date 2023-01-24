// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';

export class RealTimeDecisions extends APIResource {
  /**
   * Retrieve a Real-Time Decision
   */
  retrieve(
    realTimeDecisionId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeDecision>> {
    return this.get(`/real_time_decisions/${realTimeDecisionId}`, options);
  }

  /**
   * Action a Real-Time Decision
   */
  action(
    realTimeDecisionId: string,
    body: RealTimeDecisionActionParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RealTimeDecision>> {
    return this.post(`/real_time_decisions/${realTimeDecisionId}/action`, { body, ...options });
  }
}

/**
 * Real Time Decisions are created when your application needs to take action in
 * real-time to some event such as a card authorization. Real time decisions are
 * currently in beta; please contact support@increase.com if you're interested in
 * trying them out!
 */
export interface RealTimeDecision {
  /**
   * Fields related to a card authorization.
   */
  card_authorization: RealTimeDecision.CardAuthorization | null;

  /**
   * The category of the Real-Time Decision.
   */
  category:
    | 'card_authorization_requested'
    | 'digital_wallet_token_requested'
    | 'digital_wallet_authentication_requested';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Real-Time Decision was created.
   */
  created_at: string;

  /**
   * Fields related to a digital wallet authentication attempt.
   */
  digital_wallet_authentication: RealTimeDecision.DigitalWalletAuthentication | null;

  /**
   * Fields related to a digital wallet token provisioning attempt.
   */
  digital_wallet_token: RealTimeDecision.DigitalWalletToken | null;

  /**
   * The Real-Time Decision identifier.
   */
  id: string;

  /**
   * The status of the Real-Time Decision.
   */
  status: 'pending' | 'responded' | 'timed_out';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * your application can no longer respond to the Real-Time Decision.
   */
  timeout_at: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_decision`.
   */
  type: 'real_time_decision';
}

export namespace RealTimeDecision {
  export interface CardAuthorization {
    /**
     * The identifier of the Account the authorization will debit.
     */
    account_id: string;

    /**
     * The identifier of the Card that is being authorized.
     */
    card_id: string;

    /**
     * Whether or not the authorization was approved.
     */
    decision: 'approve' | 'decline' | null;

    /**
     * The merchant identifier (commonly abbreviated as MID) of the merchant the card
     * is transacting with.
     */
    merchant_acceptor_id: string;

    /**
     * The Merchant Category Code (commonly abbreviated as MCC) of the merchant the
     * card is transacting with.
     */
    merchant_category_code: string;

    /**
     * The city the merchant resides in.
     */
    merchant_city: string | null;

    /**
     * The country the merchant resides in.
     */
    merchant_country: string;

    /**
     * The merchant descriptor of the merchant the card is transacting with.
     */
    merchant_descriptor: string;

    /**
     * The amount of the attempted authorization in the currency the card user sees at
     * the time of purchase, in the minor unit of that currency. For dollars, for
     * example, this is cents.
     */
    presentment_amount: number;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the
     * user sees at the time of purchase.
     */
    presentment_currency: string;

    /**
     * The amount of the attempted authorization in the currency it will be settled in.
     * This currency is the same as that of the Account the card belongs to.
     */
    settlement_amount: number;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the currency the
     * transaction will be settled in.
     */
    settlement_currency: string;
  }

  export interface DigitalWalletToken {
    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * The identifier of the Card Profile that was set via the real time decision. This
     * will be null until the real time decision is responded to or if the real time
     * decision did not set a card profile.
     */
    card_profile_id: string | null;

    /**
     * Whether or not the provisioning request was approved. This will be null until
     * the real time decision is responded to.
     */
    decision: 'approve' | 'decline' | null;

    /**
     * The digital wallet app being used.
     */
    digital_wallet: 'apple_pay' | 'google_pay';
  }

  export interface DigitalWalletAuthentication {
    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * The channel to send the card user their one-time passcode.
     */
    channel: 'sms' | 'email';

    /**
     * The digital wallet app being used.
     */
    digital_wallet: 'apple_pay' | 'google_pay';

    /**
     * The email to send the one-time passcode to if `channel` is equal to `email`.
     */
    email: string | null;

    /**
     * The one-time passcode to send the card user.
     */
    one_time_passcode: string;

    /**
     * The phone number to send the one-time passcode to if `channel` is equal to
     * `sms`.
     */
    phone: string | null;

    /**
     * Whether your application successfully delivered the one-time passcode.
     */
    result: 'success' | 'failure' | null;
  }
}

export interface RealTimeDecisionActionParams {
  /**
   * If the Real-Time Decision relates to a card authorization attempt, this object
   * contains your response to the authorization.
   */
  card_authorization?: RealTimeDecisionActionParams.CardAuthorization;

  /**
   * If the Real-Time Decision relates to a digital wallet authentication attempt,
   * this object contains your response to the authentication.
   */
  digital_wallet_authentication?: RealTimeDecisionActionParams.DigitalWalletAuthentication;

  /**
   * If the Real-Time Decision relates to a digital wallet token provisioning
   * attempt, this object contains your response to the attempt.
   */
  digital_wallet_token?: RealTimeDecisionActionParams.DigitalWalletToken;
}

export namespace RealTimeDecisionActionParams {
  export interface CardAuthorization {
    /**
     * Whether the card authorization should be approved or declined.
     */
    decision: 'approve' | 'decline';
  }

  export interface DigitalWalletToken {
    /**
     * If your application approves the provisioning attempt, this contains metadata
     * about the digital wallet token that will be generated.
     */
    approval?: DigitalWalletToken.Approval;

    /**
     * If your application declines the provisioning attempt, this contains details
     * about the decline.
     */
    decline?: DigitalWalletToken.Decline;
  }

  export namespace DigitalWalletToken {
    export interface Approval {
      /**
       * The identifier of the Card Profile to assign to the Digital Wallet token.
       */
      card_profile_id: string;

      /**
       * An email address that can be used to verify the cardholder via one-time
       * passcode.
       */
      email?: string;

      /**
       * A phone number that can be used to verify the cardholder via one-time passcode
       * over SMS.
       */
      phone?: string;
    }

    export interface Decline {
      /**
       * Why the tokenization attempt was declined. This is for logging purposes only and
       * is not displayed to the end-user.
       */
      reason?: string;
    }
  }

  export interface DigitalWalletAuthentication {
    /**
     * Whether your application was able to deliver the one-time passcode.
     */
    result: 'success' | 'failure';
  }
}
