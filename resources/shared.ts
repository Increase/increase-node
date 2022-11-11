// File generated from our OpenAPI spec by Stainless.

export interface InboundDigitalWalletTokenRequestSimulationResult {
  /**
   * If the simulated tokenization attempt was declined, this field contains details
   * as to why.
   */
  decline_reason:
    | 'card_not_active'
    | 'no_verification_method'
    | 'webhook_timed_out'
    | 'webhook_declined'
    | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_digital_wallet_token_request_simulation_result`.
   */
  type: 'inbound_digital_wallet_token_request_simulation_result';
}
