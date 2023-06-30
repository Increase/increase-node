// File generated from our OpenAPI spec by Stainless.

/**
 * The method used to enter the cardholder's primary account number and card
 * expiration date
 */
export type PointOfServiceEntryMode =
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
