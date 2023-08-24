// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as API from './index';

export class RealTimeDecisions extends APIResource {
  /**
   * Retrieve a Real-Time Decision
   */
  retrieve(realTimeDecisionId: string, options?: Core.RequestOptions): Core.APIPromise<RealTimeDecision> {
    return this.get(`/real_time_decisions/${realTimeDecisionId}`, options);
  }

  /**
   * Action a Real-Time Decision
   */
  action(
    realTimeDecisionId: string,
    body: RealTimeDecisionActionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RealTimeDecision> {
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
   * The Real-Time Decision identifier.
   */
  id: string;

  /**
   * Fields related to a card authorization.
   */
  card_authorization: RealTimeDecision.CardAuthorization | null;

  /**
   * The category of the Real-Time Decision.
   *
   * - `card_authorization_requested` - A card is being authorized.
   * - `digital_wallet_token_requested` - A card is being loaded into a digital
   *   wallet.
   * - `digital_wallet_authentication_requested` - A card is being loaded into a
   *   digital wallet and requires cardholder authentication.
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
   * The status of the Real-Time Decision.
   *
   * - `pending` - The decision is pending action via real-time webhook.
   * - `responded` - Your webhook actioned the real-time decision.
   * - `timed_out` - Your webhook failed to respond to the authorization in time.
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
  /**
   * Fields related to a card authorization.
   */
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
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
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
    merchant_category_code: string | null;

    /**
     * The city the merchant resides in.
     */
    merchant_city: string | null;

    /**
     * The country the merchant resides in.
     */
    merchant_country: string | null;

    /**
     * The merchant descriptor of the merchant the card is transacting with.
     */
    merchant_descriptor: string;

    /**
     * Fields specific to the `network`
     */
    network_details: CardAuthorization.NetworkDetails;

    /**
     * If the authorization was made in-person with a physical card, the Physical Card
     * that was used.
     */
    physical_card_id: string | null;

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
     * Fields specific to the type of request, such as an incremental authorization.
     */
    request_details: CardAuthorization.RequestDetails;

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

  export namespace CardAuthorization {
    /**
     * Fields specific to the `network`
     */
    export interface NetworkDetails {
      /**
       * The payment network used to process this card authorization
       *
       * - `visa` - Visa
       */
      category: 'visa';

      /**
       * Fields specific to the `visa` network
       */
      visa: NetworkDetails.Visa | null;
    }

    export namespace NetworkDetails {
      /**
       * Fields specific to the `visa` network
       */
      export interface Visa {
        /**
         * For electronic commerce transactions, this identifies the level of security used
         * in obtaining the customer's payment credential. For mail or telephone order
         * transactions, identifies the type of mail or telephone order.
         *
         * - `mail_phone_order` - Single transaction of a mail/phone order: Use to indicate
         *   that the transaction is a mail/phone order purchase, not a recurring
         *   transaction or installment payment. For domestic transactions in the US
         *   region, this value may also indicate one bill payment transaction in the
         *   card-present or card-absent environments.
         * - `recurring` - Recurring transaction: Payment indicator used to indicate a
         *   recurring transaction that originates from an acquirer in the US region.
         * - `installment` - Installment payment: Payment indicator used to indicate one
         *   purchase of goods or services that is billed to the account in multiple
         *   charges over a period of time agreed upon by the cardholder and merchant from
         *   transactions that originate from an acquirer in the US region.
         * - `unknown_mail_phone_order` - Unknown classification: other mail order: Use to
         *   indicate that the type of mail/telephone order is unknown.
         * - `secure_electronic_commerce` - Secure electronic commerce transaction: Use to
         *   indicate that the electronic commerce transaction has been authenticated using
         *   e.g., 3-D Secure
         * - `non_authenticated_security_transaction_at_3ds_capable_merchant` -
         *   Non-authenticated security transaction at a 3-D Secure-capable merchant, and
         *   merchant attempted to authenticate the cardholder using 3-D Secure: Use to
         *   identify an electronic commerce transaction where the merchant attempted to
         *   authenticate the cardholder using 3-D Secure, but was unable to complete the
         *   authentication because the issuer or cardholder does not participate in the
         *   3-D Secure program.
         * - `non_authenticated_security_transaction` - Non-authenticated security
         *   transaction: Use to identify an electronic commerce transaction that uses data
         *   encryption for security however , cardholder authentication is not performed
         *   using 3-D Secure.
         * - `non_secure_transaction` - Non-secure transaction: Use to identify an
         *   electronic commerce transaction that has no data protection.
         */
        electronic_commerce_indicator:
          | 'mail_phone_order'
          | 'recurring'
          | 'installment'
          | 'unknown_mail_phone_order'
          | 'secure_electronic_commerce'
          | 'non_authenticated_security_transaction_at_3ds_capable_merchant'
          | 'non_authenticated_security_transaction'
          | 'non_secure_transaction'
          | null;

        /**
         * The method used to enter the cardholder's primary account number and card
         * expiration date
         *
         * - `unknown` - Unknown
         * - `manual` - Manual key entry
         * - `magnetic_stripe_no_cvv` - Magnetic stripe read, without card verification
         *   value
         * - `optical_code` - Optical code
         * - `integrated_circuit_card` - Contact chip card
         * - `contactless` - Contactless read of chip card
         * - `credential_on_file` - Transaction initiated using a credential that has
         *   previously been stored on file
         * - `magnetic_stripe` - Magnetic stripe read
         * - `contactless_magnetic_stripe` - Contactless read of magnetic stripe data
         * - `integrated_circuit_card_no_cvv` - Contact chip card, without card
         *   verification value
         */
        point_of_service_entry_mode:
          | 'unknown'
          | 'manual'
          | 'magnetic_stripe_no_cvv'
          | 'optical_code'
          | 'integrated_circuit_card'
          | 'contactless'
          | 'credential_on_file'
          | 'magnetic_stripe'
          | 'contactless_magnetic_stripe'
          | 'integrated_circuit_card_no_cvv'
          | null;
      }
    }

    /**
     * Fields specific to the type of request, such as an incremental authorization.
     */
    export interface RequestDetails {
      /**
       * The type of this request (e.g., an initial authorization or an incremental
       * authorization.)
       *
       * - `initial_authorization` - A regular, standalone authorization.
       * - `incremental_authorization` - An incremental request to increase the amount of
       *   an existing authorization.
       */
      category: 'initial_authorization' | 'incremental_authorization';

      /**
       * Fields specific to the category `incremental_authorization`.
       */
      incremental_authorization: RequestDetails.IncrementalAuthorization | null;

      /**
       * Fields specific to the category `initial_authorization`.
       */
      initial_authorization: unknown | null;
    }

    export namespace RequestDetails {
      /**
       * Fields specific to the category `incremental_authorization`.
       */
      export interface IncrementalAuthorization {
        /**
         * The card payment for this authorization and increment.
         */
        card_payment_id: string;

        /**
         * The identifier of the card authorization this request is attempting to
         * increment.
         */
        original_card_authorization_id: string;
      }
    }
  }

  /**
   * Fields related to a digital wallet authentication attempt.
   */
  export interface DigitalWalletAuthentication {
    /**
     * The identifier of the Card that is being tokenized.
     */
    card_id: string;

    /**
     * The channel to send the card user their one-time passcode.
     *
     * - `sms` - Send one-time passcodes over SMS.
     * - `email` - Send one-time passcodes over email.
     */
    channel: 'sms' | 'email';

    /**
     * The digital wallet app being used.
     *
     * - `apple_pay` - Apple Pay
     * - `google_pay` - Google Pay
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
     *
     * - `success` - Your application successfully delivered the one-time passcode to
     *   the cardholder.
     * - `failure` - Your application failed to deliver the one-time passcode to the
     *   cardholder.
     */
    result: 'success' | 'failure' | null;
  }

  /**
   * Fields related to a digital wallet token provisioning attempt.
   */
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
     *
     * - `approve` - Approve the provisioning request.
     * - `decline` - Decline the provisioning request.
     */
    decision: 'approve' | 'decline' | null;

    /**
     * The digital wallet app being used.
     *
     * - `apple_pay` - Apple Pay
     * - `google_pay` - Google Pay
     */
    digital_wallet: 'apple_pay' | 'google_pay';
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
  /**
   * If the Real-Time Decision relates to a card authorization attempt, this object
   * contains your response to the authorization.
   */
  export interface CardAuthorization {
    /**
     * Whether the card authorization should be approved or declined.
     *
     * - `approve` - Approve the authorization.
     * - `decline` - Decline the authorization.
     */
    decision: 'approve' | 'decline';
  }

  /**
   * If the Real-Time Decision relates to a digital wallet authentication attempt,
   * this object contains your response to the authentication.
   */
  export interface DigitalWalletAuthentication {
    /**
     * Whether your application was able to deliver the one-time passcode.
     *
     * - `success` - Your application successfully delivered the one-time passcode to
     *   the cardholder.
     * - `failure` - Your application failed to deliver the one-time passcode to the
     *   cardholder.
     */
    result: 'success' | 'failure';
  }

  /**
   * If the Real-Time Decision relates to a digital wallet token provisioning
   * attempt, this object contains your response to the attempt.
   */
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
    /**
     * If your application approves the provisioning attempt, this contains metadata
     * about the digital wallet token that will be generated.
     */
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

    /**
     * If your application declines the provisioning attempt, this contains details
     * about the decline.
     */
    export interface Decline {
      /**
       * Why the tokenization attempt was declined. This is for logging purposes only and
       * is not displayed to the end-user.
       */
      reason?: string;
    }
  }
}

export namespace RealTimeDecisions {
  export import RealTimeDecision = API.RealTimeDecision;
  export import RealTimeDecisionActionParams = API.RealTimeDecisionActionParams;
}
