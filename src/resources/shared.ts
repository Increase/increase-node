// File generated from our OpenAPI spec by Stainless.

/**
 * The method used to enter the cardholder's primary account number and card
 * expiration date
 *
 * - `manual` - Manual key entry
 * - `magnetic_stripe_no_cvv` - Magnetic stripe read, without card verification
 *   value
 * - `optical_code` - Optical code
 * - `integrated_circuit_card` - Contact chip card
 * - `contactless` - Contactless read of chip card
 * - `credential_on_file` - Transaction iniated using a credential that has
 *   previously been stored on file
 * - `magnetic_stripe` - Magnetic stripe read
 * - `contactless_magnetic_stripe` - Contactless read of magnetic stripe data
 * - `integrated_circuit_card_no_cvv` - Contact chip card, without card
 *   verification value
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
