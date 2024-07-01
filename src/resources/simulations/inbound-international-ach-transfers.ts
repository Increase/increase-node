// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InboundInternationalACHTransfersAPI from './inbound-international-ach-transfers';

export class InboundInternationalACHTransfers extends APIResource {
  /**
   * Simulates an inbound international ACH transfer to your account. This imitates
   * initiating a transfer to an Increase account from a different financial
   * institution. The transfer may be either a credit or a debit depending on if the
   * `amount` is positive or negative. The result of calling this API will contain
   * the created transfer. .
   */
  create(
    body: InboundInternationalACHTransferCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InboundInternationalACHTransfer> {
    return this._client.post('/simulations/inbound_international_ach_transfers', { body, ...options });
  }
}

/**
 * An Inbound International ACH Transfer is created when an "IAT" ACH transfer is
 * initiated at another bank and received by Increase. There are additional fields
 * on this object that are not present on all Inbound ACH Transfer object.
 */
export interface InboundInternationalACHTransfer {
  /**
   * The amount in the minor unit of the destination account currency. For dollars,
   * for example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
   * country code of the destination country.
   */
  destination_country_code: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
   * destination bank account.
   */
  destination_currency_code: string;

  /**
   * A description of how the foreign exchange rate was calculated.
   *
   * - `fixed_to_variable` - The originator chose an amount in their own currency.
   *   The settled amount in USD was converted using the exchange rate.
   * - `variable_to_fixed` - The originator chose an amount to settle in USD. The
   *   originator's amount was variable; known only after the foreign exchange
   *   conversion.
   * - `fixed_to_fixed` - The amount was originated and settled as a fixed amount in
   *   USD. There is no foreign exchange conversion.
   */
  foreign_exchange_indicator: 'fixed_to_variable' | 'variable_to_fixed' | 'fixed_to_fixed';

  /**
   * Depending on the `foreign_exchange_reference_indicator`, an exchange rate or a
   * reference to a well-known rate.
   */
  foreign_exchange_reference: string | null;

  /**
   * An instruction of how to interpret the `foreign_exchange_reference` field for
   * this Transaction.
   *
   * - `foreign_exchange_rate` - The ACH file contains a foreign exchange rate.
   * - `foreign_exchange_reference_number` - The ACH file contains a reference to a
   *   well-known foreign exchange rate.
   * - `blank` - There is no foreign exchange for this transfer, so the
   *   `foreign_exchange_reference` field is blank.
   */
  foreign_exchange_reference_indicator:
    | 'foreign_exchange_rate'
    | 'foreign_exchange_reference_number'
    | 'blank';

  /**
   * The amount in the minor unit of the foreign payment currency. For dollars, for
   * example, this is cents.
   */
  foreign_payment_amount: number;

  /**
   * A reference number in the foreign banking infrastructure.
   */
  foreign_trace_number: string | null;

  /**
   * The type of transfer. Set by the originator.
   *
   * - `annuity` - Sent as `ANN` in the Nacha file.
   * - `business_or_commercial` - Sent as `BUS` in the Nacha file.
   * - `deposit` - Sent as `DEP` in the Nacha file.
   * - `loan` - Sent as `LOA` in the Nacha file.
   * - `miscellaneous` - Sent as `MIS` in the Nacha file.
   * - `mortgage` - Sent as `MOR` in the Nacha file.
   * - `pension` - Sent as `PEN` in the Nacha file.
   * - `remittance` - Sent as `REM` in the Nacha file.
   * - `rent_or_lease` - Sent as `RLS` in the Nacha file.
   * - `salary_or_payroll` - Sent as `SAL` in the Nacha file.
   * - `tax` - Sent as `TAX` in the Nacha file.
   * - `accounts_receivable` - Sent as `ARC` in the Nacha file.
   * - `back_office_conversion` - Sent as `BOC` in the Nacha file.
   * - `machine_transfer` - Sent as `MTE` in the Nacha file.
   * - `point_of_purchase` - Sent as `POP` in the Nacha file.
   * - `point_of_sale` - Sent as `POS` in the Nacha file.
   * - `represented_check` - Sent as `RCK` in the Nacha file.
   * - `shared_network_transaction` - Sent as `SHR` in the Nacha file.
   * - `telphone_initiated` - Sent as `TEL` in the Nacha file.
   * - `internet_initiated` - Sent as `WEB` in the Nacha file.
   */
  international_transaction_type_code:
    | 'annuity'
    | 'business_or_commercial'
    | 'deposit'
    | 'loan'
    | 'miscellaneous'
    | 'mortgage'
    | 'pension'
    | 'remittance'
    | 'rent_or_lease'
    | 'salary_or_payroll'
    | 'tax'
    | 'accounts_receivable'
    | 'back_office_conversion'
    | 'machine_transfer'
    | 'point_of_purchase'
    | 'point_of_sale'
    | 'represented_check'
    | 'shared_network_transaction'
    | 'telphone_initiated'
    | 'internet_initiated';

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
   * originating bank account.
   */
  originating_currency_code: string;

  /**
   * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
   * country code of the originating branch country.
   */
  originating_depository_financial_institution_branch_country: string;

  /**
   * An identifier for the originating bank. One of an International Bank Account
   * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
   * domestic identifier like a US Routing Number.
   */
  originating_depository_financial_institution_id: string;

  /**
   * An instruction of how to interpret the
   * `originating_depository_financial_institution_id` field for this Transaction.
   *
   * - `national_clearing_system_number` - A domestic clearing system number. In the
   *   US, for example, this is the American Banking Association (ABA) routing
   *   number.
   * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
   * - `iban` - An International Bank Account Number.
   */
  originating_depository_financial_institution_id_qualifier:
    | 'national_clearing_system_number'
    | 'bic_code'
    | 'iban';

  /**
   * The name of the originating bank. Sometimes this will refer to an American bank
   * and obscure the correspondent foreign bank.
   */
  originating_depository_financial_institution_name: string;

  /**
   * A portion of the originator address. This may be incomplete.
   */
  originator_city: string;

  /**
   * A description field set by the originator.
   */
  originator_company_entry_description: string;

  /**
   * A portion of the originator address. The
   * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
   * code of the originator country.
   */
  originator_country: string;

  /**
   * An identifier for the originating company. This is generally stable across
   * multiple ACH transfers.
   */
  originator_identification: string;

  /**
   * Either the name of the originator or an intermediary money transmitter.
   */
  originator_name: string;

  /**
   * A portion of the originator address. This may be incomplete.
   */
  originator_postal_code: string | null;

  /**
   * A portion of the originator address. This may be incomplete.
   */
  originator_state_or_province: string | null;

  /**
   * A portion of the originator address. This may be incomplete.
   */
  originator_street_address: string;

  /**
   * A description field set by the originator.
   */
  payment_related_information: string | null;

  /**
   * A description field set by the originator.
   */
  payment_related_information2: string | null;

  /**
   * A portion of the receiver address. This may be incomplete.
   */
  receiver_city: string;

  /**
   * A portion of the receiver address. The
   * [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2 country
   * code of the receiver country.
   */
  receiver_country: string;

  /**
   * An identification number the originator uses for the receiver.
   */
  receiver_identification_number: string | null;

  /**
   * A portion of the receiver address. This may be incomplete.
   */
  receiver_postal_code: string | null;

  /**
   * A portion of the receiver address. This may be incomplete.
   */
  receiver_state_or_province: string | null;

  /**
   * A portion of the receiver address. This may be incomplete.
   */
  receiver_street_address: string;

  /**
   * The name of the receiver of the transfer. This is not verified by Increase.
   */
  receiving_company_or_individual_name: string;

  /**
   * The [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), Alpha-2
   * country code of the receiving bank country.
   */
  receiving_depository_financial_institution_country: string;

  /**
   * An identifier for the receiving bank. One of an International Bank Account
   * Number (IBAN) bank identifier, SWIFT Bank Identification Code (BIC), or a
   * domestic identifier like a US Routing Number.
   */
  receiving_depository_financial_institution_id: string;

  /**
   * An instruction of how to interpret the
   * `receiving_depository_financial_institution_id` field for this Transaction.
   *
   * - `national_clearing_system_number` - A domestic clearing system number. In the
   *   US, for example, this is the American Banking Association (ABA) routing
   *   number.
   * - `bic_code` - The SWIFT Bank Identifier Code (BIC) of the bank.
   * - `iban` - An International Bank Account Number.
   */
  receiving_depository_financial_institution_id_qualifier:
    | 'national_clearing_system_number'
    | 'bic_code'
    | 'iban';

  /**
   * The name of the receiving bank, as set by the sending financial institution.
   */
  receiving_depository_financial_institution_name: string;

  /**
   * A 15 digit number recorded in the Nacha file and available to both the
   * originating and receiving bank. Along with the amount, date, and originating
   * routing number, this can be used to identify the ACH transfer at either bank.
   * ACH trace numbers are not unique, but are
   * [used to correlate returns](https://increase.com/documentation/ach-returns#ach-returns).
   */
  trace_number: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_international_ach_transfer`.
   */
  type: 'inbound_international_ach_transfer';
}

export interface InboundInternationalACHTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound international ACH Transfer is
   * for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * The amount in the minor unit of the foreign payment currency. For dollars, for
   * example, this is cents.
   */
  foreign_payment_amount: number;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the
   * originating bank account.
   */
  originating_currency_code: string;

  /**
   * A description field set by the originator.
   */
  originator_company_entry_description?: string;

  /**
   * Either the name of the originator or an intermediary money transmitter.
   */
  originator_name?: string;

  /**
   * The name of the receiver of the transfer.
   */
  receiving_company_or_individual_name?: string;
}

export namespace InboundInternationalACHTransfers {
  export import InboundInternationalACHTransfer = InboundInternationalACHTransfersAPI.InboundInternationalACHTransfer;
  export import InboundInternationalACHTransferCreateParams = InboundInternationalACHTransfersAPI.InboundInternationalACHTransferCreateParams;
}
