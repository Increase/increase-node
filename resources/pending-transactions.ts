// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class PendingTransactions extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PendingTransaction>> {
    return this.get(`/pending_transactions/${id}`, options);
  }

  list(
    query?: PendingTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PendingTransactionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PendingTransactionsPage>;
  list(
    query: PendingTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PendingTransactionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/pending_transactions', PendingTransactionsPage, { query, ...options });
  }
}

export class PendingTransactionsPage extends Page<PendingTransaction> {}

/**
 * Pending Transactions are potential future additions and removals of money from
 * your bank account.
 */
export interface PendingTransaction {
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
   * Transaction occured.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending
   * Transaction's currency. This will match the currency on the Pending
   * Transcation's Account.
   */
  currency: string;

  /**
   * For a Pending Transaction related to a transfer, this is the description you
   * provide. For a Pending Transaction related to a payment, this is the description
   * the vendor provides.
   */
  description: string;

  /**
   * The Pending Transaction identifier.
   */
  id: string;

  /**
   * The identifier for the route this Pending Transaction came through. Routes are
   * things like cards and ACH details.
   */
  route_id: string;

  /**
   * The type of the route this Pending Transaction came through.
   */
  route_type: string | null;

  /**
   * This is an object giving more details on the network-level event that caused the
   * Pending Transaction. For example, for a card transaction this lists the
   * merchant's industry and location.
   */
  source: PendingTransaction.Source;

  /**
   * Whether the Pending Transaction has been confirmed and has an associated
   * Transaction.
   */
  status: 'pending' | 'complete';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `pending_transaction`.
   */
  type: 'pending_transaction';
}

export namespace PendingTransaction {
  export interface Source {
    /**
     * A Account Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `account_transfer_instruction`.
     */
    account_transfer_instruction: Source.AccountTransferInstruction | null;

    /**
     * A ACH Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `ach_transfer_instruction`.
     */
    ach_transfer_instruction: Source.ACHTransferInstruction | null;

    /**
     * A Card Authorization object. This field will be present in the JSON response if
     * and only if `category` is equal to `card_authorization`.
     */
    card_authorization: Source.CardAuthorization | null;

    /**
     * A Deprecated Card Authorization object. This field will be present in the JSON
     * response if and only if `category` is equal to `card_route_authorization`.
     */
    card_route_authorization: Source.CardRouteAuthorization | null;

    /**
     * The type of transaction that took place. We may add additional possible values
     * for this enum over time; your application should be able to handle such
     * additions gracefully.
     */
    category:
      | 'account_transfer_instruction'
      | 'ach_transfer_instruction'
      | 'card_authorization'
      | 'check_deposit_instruction'
      | 'check_transfer_instruction'
      | 'card_route_authorization'
      | 'real_time_payments_transfer_instruction'
      | 'wire_drawdown_payment_instruction'
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
     * A Wire Drawdown Payment Instruction object. This field will be present in the
     * JSON response if and only if `category` is equal to
     * `wire_drawdown_payment_instruction`.
     */
    wire_drawdown_payment_instruction: Source.WireDrawdownPaymentInstruction | null;

    /**
     * A Wire Transfer Instruction object. This field will be present in the JSON
     * response if and only if `category` is equal to `wire_transfer_instruction`.
     */
    wire_transfer_instruction: Source.WireTransferInstruction | null;
  }

  export namespace Source {
    export interface AccountTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination
       * account currency.
       */
      currency: string;

      /**
       * The identifier of the Account Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

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

    export interface CardAuthorization {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      merchant_acceptor_id: string;

      merchant_category_code: string;

      merchant_city: string | null;

      merchant_country: string;

      merchant_descriptor: string;
    }

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
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      /**
       * The identifier of the File containing the image of the front of the check that
       * was deposited.
       */
      front_image_file_id: string;
    }

    export interface CheckTransferInstruction {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
       * currency.
       */
      currency: string;

      /**
       * The identifier of the Check Transfer that led to this Pending Transaction.
       */
      transfer_id: string;
    }

    export interface CardRouteAuthorization {
      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      /**
       * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the
       * transaction's currency.
       */
      currency: string;

      merchant_acceptor_id: string;

      merchant_category_code: string;

      merchant_city: string | null;

      merchant_country: string;

      merchant_descriptor: string;

      merchant_state: string | null;
    }

    export interface WireDrawdownPaymentInstruction {
      account_number: string;

      /**
       * The pending amount in the minor unit of the transaction's currency. For dollars,
       * for example, this is cents.
       */
      amount: number;

      message_to_recipient: string;

      routing_number: string;
    }

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
  export interface Status {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'pending' | 'complete'>;
  }
}
