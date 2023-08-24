// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class PendingTransactions extends APIResource {
  /**
   * Retrieve a Pending Transaction
   */
  retrieve(pendingTransactionId: string, options?: Core.RequestOptions): Core.APIPromise<PendingTransaction> {
    return this.get(`/pending_transactions/${pendingTransactionId}`, options);
  }

  /**
   * List Pending Transactions
   */
  list(
    query?: PendingTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PendingTransactionsPage, PendingTransaction>;
  list(options?: Core.RequestOptions): Core.PagePromise<PendingTransactionsPage, PendingTransaction>;
  list(
    query: PendingTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PendingTransactionsPage, PendingTransaction> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/pending_transactions', PendingTransactionsPage, { query, ...options });
  }
}

export class PendingTransactionsPage extends Page<PendingTransaction> {}
// alias so we can export it in the namespace
type _PendingTransactionsPage = PendingTransactionsPage;

/**
 * Pending Transactions are potential future additions and removals of money from
 * your bank account.
 */
export interface PendingTransaction {
  /**
   * The Pending Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the account this Pending Transaction belongs to.
   */
  account_id: string;

  /**
   * The Pending Transaction amount in the minor unit of its currency. For dollars,
   * for example, this is cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
   * Transaction was completed.
   */
  completed_at: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending
   * Transaction occurred.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
   * Transaction's currency. This will match the currency on the Pending
   * Transaction's Account.
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
   * For a Pending Transaction related to a transfer, this is the description you
   * provide. For a Pending Transaction related to a payment, this is the description
   * the vendor provides.
   */
  description: string;

  /**
   * The identifier for the route this Pending Transaction came through. Routes are
   * things like cards and ACH details.
   */
  route_id: string | null;

  /**
   * The type of the route this Pending Transaction came through.
   *
   * - `account_number` - An Account Number.
   * - `card` - A Card.
   */
  route_type: 'account_number' | 'card' | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Pending Transaction. For example, for a card transaction this lists the
   * merchant's industry and location.
   */
  source: PendingTransaction.Source;

  /**
   * Whether the Pending Transaction has been confirmed and has an associated
   * Transaction.
   *
   * - `pending` - The Pending Transaction is still awaiting confirmation.
   * - `complete` - The Pending Transaction is confirmed. An associated Transaction
   *   exists for this object. The Pending Transaction will no longer count against
   *   your balance and can generally be hidden from UIs, etc.
   */
  status: 'pending' | 'complete';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `pending_transaction`.
   */
  type: 'pending_transaction';
}

export namespace PendingTransaction {
  /**
   * This is an object giving more details on the network-level event that caused the
   * Pending Transaction. For example, for a card transaction this lists the
   * merchant's industry and location.
   */
  export interface Source {
    /**
     * An Account Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_instruction`.
     */
    account_transfer_instruction: Source.AccountTransferInstruction | null;

    /**
     * An ACH Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    ach_transfer_instruction: Source.ACHTransferInstruction | null;

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`.
     */
    card_authorization: Source.CardAuthorization | null;

    /**
     * The type of the resource. We may add additional possible values for this enum
     * over time; your application should be able to handle such additions gracefully.
     *
     * - `account_transfer_instruction` - Account Transfer Instruction: details will be
     *   under the `account_transfer_instruction` object.
     * - `ach_transfer_instruction` - ACH Transfer Instruction: details will be under
     *   the `ach_transfer_instruction` object.
     * - `card_authorization` - Card Authorization: details will be under the
     *   `card_authorization` object.
     * - `check_deposit_instruction` - Check Deposit Instruction: details will be under
     *   the `check_deposit_instruction` object.
     * - `check_transfer_instruction` - Check Transfer Instruction: details will be
     *   under the `check_transfer_instruction` object.
     * - `inbound_funds_hold` - Inbound Funds Hold: details will be under the
     *   `inbound_funds_hold` object.
     * - `real_time_payments_transfer_instruction` - Real-Time Payments Transfer
     *   Instruction: details will be under the
     *   `real_time_payments_transfer_instruction` object.
     * - `wire_transfer_instruction` - Wire Transfer Instruction: details will be under
     *   the `wire_transfer_instruction` object.
     * - `other` - The Pending Transaction was made for an undocumented or deprecated
     *   reason.
     */
    category:
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'inbound_funds_hold'
      | 'real_time_payments_transfer_instruction'
      | 'wire_transfer_instruction'
      | 'other';

    /**
     * A Check Deposit Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_instruction`.
     */
    check_deposit_instruction: Source.CheckDepositInstruction | null;

    /**
     * A Check Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_transfer_instruction`.
     */
    check_transfer_instruction: Source.CheckTransferInstruction | null;

    /**
     * An Inbound Funds Hold object. This field will be present in the JSON response if
     * and only if `category` is equal to `inbound_funds_hold`.
     */
    inbound_funds_hold: Source.InboundFundsHold | null;

    /**
     * A Real-Time Payments Transfer Instruction object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_instruction`.
     */
    real_time_payments_transfer_instruction: Source.RealTimePaymentsTransferInstruction | null;

    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    wire_transfer_instruction: Source.WireTransferInstruction | null;
  }

  export namespace Source {
    /**
     * An Account Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_instruction`.
     */
    export interface AccountTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
       * account currency.
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
       * The identifier of the Account Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    /**
     * An ACH Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    export interface ACHTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the ACH Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`.
     */
    export interface CardAuthorization {
      /**
       * The Card Authorization identifier.
       */
      id: string;

      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
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
       * If the authorization was made via a Digital Wallet Token (such as an Apple Pay
       * purchase), the identifier of the token that was used.
       */
      digital_wallet_token_id: string | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) when this authorization
       * will expire and the pending transaction will be released.
       */
      expires_at: string;

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
       * The identifier of the Pending Transaction associated with this Transaction.
       */
      pending_transaction_id: string | null;

      /**
       * If the authorization was made in-person with a physical card, the Physical Card
       * that was used.
       */
      physical_card_id: string | null;

      /**
       * The identifier of the Real-Time Decision sent to approve or decline this
       * transaction.
       */
      real_time_decision_id: string | null;

      /**
       * A constant representing the object's type. For this resource it will always be
       * `card_authorization`.
       */
      type: 'card_authorization';
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
    }

    /**
     * A Check Deposit Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_deposit_instruction`.
     */
    export interface CheckDepositInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the File containing the image of the back of the check that
       * was deposited.
       */
      back_image_file_id: string | null;

      /**
       * The identifier of the Check Deposit.
       */
      check_deposit_id: string | null;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
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
       * The identifier of the File containing the image of the front of the check that
       * was deposited.
       */
      front_image_file_id: string;
    }

    /**
     * A Check Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `check_transfer_instruction`.
     */
    export interface CheckTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
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
       * The identifier of the Check Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    /**
     * An Inbound Funds Hold object. This field will be present in the JSON response if
     * and only if `category` is equal to `inbound_funds_hold`.
     */
    export interface InboundFundsHold {
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

    /**
     * A Real-Time Payments Transfer Instruction object. This field will be present in
     * the JSON response if and only if `category` is equal to
     * `real_time_payments_transfer_instruction`.
     */
    export interface RealTimePaymentsTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The identifier of the Real-Time Payments Transfer that led to this Pending
       * Transaction.
       */
      transfer_id: string;
    }

    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    export interface WireTransferInstruction {
      account_number: string;

      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      message_to_recipient: string;

      routing_number: string;

      transfer_id: string;
    }
  }
}

export interface PendingTransactionListParams extends PageParams {
  /**
   * Filter pending transactions to those belonging to the specified Account.
   */
  account_id?: string;

  category?: PendingTransactionListParams.Category;

  created_at?: PendingTransactionListParams.CreatedAt;

  /**
   * Filter pending transactions to those belonging to the specified Route.
   */
  route_id?: string;

  /**
   * Filter pending transactions to those caused by the specified source.
   */
  source_id?: string;

  status?: PendingTransactionListParams.Status;
}

export namespace PendingTransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'inbound_funds_hold'
      | 'real_time_payments_transfer_instruction'
      | 'wire_transfer_instruction'
      | 'other'
    >;
  }

  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }

  export interface Status {
    /**
     * Filter Pending Transactions for those with the specified status. By default only
     * Pending Transactions in with status `pending` will be returned. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'complete'>;
  }
}

export namespace PendingTransactions {
  export import PendingTransaction = API.PendingTransaction;
  export type PendingTransactionsPage = _PendingTransactionsPage;
  export import PendingTransactionListParams = API.PendingTransactionListParams;
}
