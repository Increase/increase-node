// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

export class Exports extends APIResource {
  /**
   * Create an Export
   */
  create(body: ExportCreateParams, options?: Core.RequestOptions): Core.APIPromise<Export> {
    return this._client.post('/exports', { body, ...options });
  }

  /**
   * Retrieve an Export
   */
  retrieve(exportId: string, options?: Core.RequestOptions): Core.APIPromise<Export> {
    return this._client.get(`/exports/${exportId}`, options);
  }

  /**
   * List Exports
   */
  list(query?: ExportListParams, options?: Core.RequestOptions): Core.PagePromise<ExportsPage, Export>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExportsPage, Export>;
  list(
    query: ExportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExportsPage, Export> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/exports', ExportsPage, { query, ...options });
  }
}

export class ExportsPage extends Page<Export> {}

/**
 * Exports are batch summaries of your Increase data. You can make them from the
 * API or dashboard. Since they can take a while, they are generated
 * asynchronously. We send a webhook when they are ready. For more information,
 * please read our
 * [Exports documentation](https://increase.com/documentation/exports).
 */
export interface Export {
  /**
   * The Export identifier.
   */
  id: string;

  /**
   * The category of the Export. We may add additional possible values for this enum
   * over time; your application should be able to handle that gracefully.
   *
   * - `account_statement_ofx` - Export an Open Financial Exchange (OFX) file of
   *   transactions and balances for a given time range and Account.
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   * - `bookkeeping_account_balance_csv` - Export a CSV of bookkeeping account
   *   balances for the dates in a given range.
   * - `entity_csv` - Export a CSV of entities with a given status.
   * - `vendor_csv` - Export a CSV of vendors added to the third-party risk
   *   management dashboard.
   * - `dashboard_table_csv` - Certain dashboard tables are available as CSV exports.
   *   This export cannot be created via the API.
   */
  category:
    | 'account_statement_ofx'
    | 'transaction_csv'
    | 'balance_csv'
    | 'bookkeeping_account_balance_csv'
    | 'entity_csv'
    | 'vendor_csv'
    | 'dashboard_table_csv';

  /**
   * The time the Export was created.
   */
  created_at: string;

  /**
   * A URL at which the Export's file can be downloaded. This will be present when
   * the Export's status transitions to `complete`.
   */
  file_download_url: string | null;

  /**
   * The File containing the contents of the Export. This will be present when the
   * Export's status transitions to `complete`.
   */
  file_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The status of the Export.
   *
   * - `pending` - Increase is generating the export.
   * - `complete` - The export has been successfully generated.
   * - `failed` - The export failed to generate. Increase will reach out to you to
   *   resolve the issue.
   */
  status: 'pending' | 'complete' | 'failed';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `export`.
   */
  type: 'export';
}

export interface ExportCreateParams {
  /**
   * The type of Export to create.
   *
   * - `account_statement_ofx` - Export an Open Financial Exchange (OFX) file of
   *   transactions and balances for a given time range and Account.
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   * - `bookkeeping_account_balance_csv` - Export a CSV of bookkeeping account
   *   balances for the dates in a given range.
   * - `entity_csv` - Export a CSV of entities with a given status.
   * - `vendor_csv` - Export a CSV of vendors added to the third-party risk
   *   management dashboard.
   */
  category:
    | 'account_statement_ofx'
    | 'transaction_csv'
    | 'balance_csv'
    | 'bookkeeping_account_balance_csv'
    | 'entity_csv'
    | 'vendor_csv';

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_ofx`.
   */
  account_statement_ofx?: ExportCreateParams.AccountStatementOfx;

  /**
   * Options for the created export. Required if `category` is equal to
   * `balance_csv`.
   */
  balance_csv?: ExportCreateParams.BalanceCsv;

  /**
   * Options for the created export. Required if `category` is equal to
   * `bookkeeping_account_balance_csv`.
   */
  bookkeeping_account_balance_csv?: ExportCreateParams.BookkeepingAccountBalanceCsv;

  /**
   * Options for the created export. Required if `category` is equal to `entity_csv`.
   */
  entity_csv?: ExportCreateParams.EntityCsv;

  /**
   * Options for the created export. Required if `category` is equal to
   * `transaction_csv`.
   */
  transaction_csv?: ExportCreateParams.TransactionCsv;

  /**
   * Options for the created export. Required if `category` is equal to `vendor_csv`.
   */
  vendor_csv?: unknown;
}

export namespace ExportCreateParams {
  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_ofx`.
   */
  export interface AccountStatementOfx {
    /**
     * The Account to create a statement for.
     */
    account_id: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: AccountStatementOfx.CreatedAt;
  }

  export namespace AccountStatementOfx {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `balance_csv`.
   */
  export interface BalanceCsv {
    /**
     * Filter exported Transactions to the specified Account.
     */
    account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: BalanceCsv.CreatedAt;

    /**
     * Filter exported Transactions to the specified Program.
     */
    program_id?: string;
  }

  export namespace BalanceCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `bookkeeping_account_balance_csv`.
   */
  export interface BookkeepingAccountBalanceCsv {
    /**
     * Filter exported Transactions to the specified Bookkeeping Account.
     */
    bookkeeping_account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: BookkeepingAccountBalanceCsv.CreatedAt;
  }

  export namespace BookkeepingAccountBalanceCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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
  }

  /**
   * Options for the created export. Required if `category` is equal to `entity_csv`.
   */
  export interface EntityCsv {
    /**
     * Entity statuses to filter by.
     */
    status?: EntityCsv.Status;
  }

  export namespace EntityCsv {
    /**
     * Entity statuses to filter by.
     */
    export interface Status {
      /**
       * Entity statuses to filter by. For GET requests, this should be encoded as a
       * comma-delimited string, such as `?in=one,two,three`.
       */
      in: Array<'active' | 'archived' | 'disabled'>;
    }
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `transaction_csv`.
   */
  export interface TransactionCsv {
    /**
     * Filter exported Transactions to the specified Account.
     */
    account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: TransactionCsv.CreatedAt;

    /**
     * Filter exported Transactions to the specified Program.
     */
    program_id?: string;
  }

  export namespace TransactionCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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
  }
}

export interface ExportListParams extends PageParams {
  category?: ExportListParams.Category;

  created_at?: ExportListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: ExportListParams.Status;
}

export namespace ExportListParams {
  export interface Category {
    /**
     * Filter Exports for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'account_statement_ofx'
      | 'transaction_csv'
      | 'balance_csv'
      | 'bookkeeping_account_balance_csv'
      | 'entity_csv'
      | 'vendor_csv'
      | 'dashboard_table_csv'
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
     * Filter Exports for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'complete' | 'failed'>;
  }
}

Exports.ExportsPage = ExportsPage;

export declare namespace Exports {
  export {
    type Export as Export,
    ExportsPage as ExportsPage,
    type ExportCreateParams as ExportCreateParams,
    type ExportListParams as ExportListParams,
  };
}
