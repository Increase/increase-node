// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import { isRequestOptions } from 'increase/core';
import * as API from './index';
import { Page, PageParams } from 'increase/pagination';

export class Exports extends APIResource {
  /**
   * Create an Export
   */
  create(body: ExportCreateParams, options?: Core.RequestOptions): Core.APIPromise<Export> {
    return this.post('/exports', { body, ...options });
  }

  /**
   * Retrieve an Export
   */
  retrieve(exportId: string, options?: Core.RequestOptions): Core.APIPromise<Export> {
    return this.get(`/exports/${exportId}`, options);
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
    return this.getAPIList('/exports', ExportsPage, { query, ...options });
  }
}

export class ExportsPage extends Page<Export> {}
// alias so we can export it in the namespace
type _ExportsPage = ExportsPage;

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
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   */
  category: 'transaction_csv' | 'balance_csv';

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
   * The status of the Export.
   *
   * - `pending` - Increase is generating the export.
   * - `complete` - The export has been successfully generated.
   */
  status: 'pending' | 'complete';

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
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   */
  category: 'transaction_csv' | 'balance_csv';

  /**
   * Options for the created export. Required if `category` is equal to
   * `balance_csv`.
   */
  balance_csv?: ExportCreateParams.BalanceCsv;

  /**
   * Options for the created export. Required if `category` is equal to
   * `transaction_csv`.
   */
  transaction_csv?: ExportCreateParams.TransactionCsv;
}

export namespace ExportCreateParams {
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

export interface ExportListParams extends PageParams {}

export namespace Exports {
  export import Export = API.Export;
  export type ExportsPage = _ExportsPage;
  export import ExportCreateParams = API.ExportCreateParams;
  export import ExportListParams = API.ExportListParams;
}
