// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as Errors from './error';
import type { Agent } from 'increase/_shims/agent';
import * as Uploads from './uploads';
import * as qs from 'qs';

const environments = {
  production: 'https://api.increase.com',
  sandbox: 'https://sandbox.increase.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env["INCREASE_API_KEY"].
   */
  apiKey?: string;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.increase.com`
   * - `sandbox` corresponds to `https://sandbox.increase.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   */
  baseURL?: string;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Increase API. */
export class Increase extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Increase API.
   *
   * @param {string} [opts.apiKey=process.env['INCREASE_API_KEY']] - The API Key to send to the API.
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ apiKey = Core.readEnv('INCREASE_API_KEY'), ...opts }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Error(
        "The INCREASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Increase client with an apiKey option, like new Increase({ apiKey: 'my apiKey' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      environment: 'production',
      ...opts,
    };

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.apiKey = apiKey;
  }

  accounts: API.Accounts = new API.Accounts(this);
  accountNumbers: API.AccountNumbers = new API.AccountNumbers(this);
  bookkeepingAccounts: API.BookkeepingAccounts = new API.BookkeepingAccounts(this);
  bookkeepingEntrySets: API.BookkeepingEntrySets = new API.BookkeepingEntrySets(this);
  bookkeepingEntries: API.BookkeepingEntries = new API.BookkeepingEntries(this);
  realTimeDecisions: API.RealTimeDecisions = new API.RealTimeDecisions(this);
  realTimePaymentsTransfers: API.RealTimePaymentsTransfers = new API.RealTimePaymentsTransfers(this);
  balanceLookups: API.BalanceLookups = new API.BalanceLookups(this);
  cards: API.Cards = new API.Cards(this);
  cardDisputes: API.CardDisputes = new API.CardDisputes(this);
  cardProfiles: API.CardProfiles = new API.CardProfiles(this);
  cardPurchaseSupplements: API.CardPurchaseSupplements = new API.CardPurchaseSupplements(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  exports: API.Exports = new API.Exports(this);
  digitalWalletTokens: API.DigitalWalletTokens = new API.DigitalWalletTokens(this);
  transactions: API.Transactions = new API.Transactions(this);
  pendingTransactions: API.PendingTransactions = new API.PendingTransactions(this);
  programs: API.Programs = new API.Programs(this);
  declinedTransactions: API.DeclinedTransactions = new API.DeclinedTransactions(this);
  limits: API.Limits = new API.Limits(this);
  accountTransfers: API.AccountTransfers = new API.AccountTransfers(this);
  achTransfers: API.ACHTransfers = new API.ACHTransfers(this);
  inboundACHTransferReturns: API.InboundACHTransferReturns = new API.InboundACHTransferReturns(this);
  achPrenotifications: API.ACHPrenotifications = new API.ACHPrenotifications(this);
  documents: API.Documents = new API.Documents(this);
  wireTransfers: API.WireTransfers = new API.WireTransfers(this);
  checkTransfers: API.CheckTransfers = new API.CheckTransfers(this);
  entities: API.Entities = new API.Entities(this);
  inboundACHTransfers: API.InboundACHTransfers = new API.InboundACHTransfers(this);
  inboundWireDrawdownRequests: API.InboundWireDrawdownRequests = new API.InboundWireDrawdownRequests(this);
  wireDrawdownRequests: API.WireDrawdownRequests = new API.WireDrawdownRequests(this);
  events: API.Events = new API.Events(this);
  eventSubscriptions: API.EventSubscriptions = new API.EventSubscriptions(this);
  files: API.Files = new API.Files(this);
  groups: API.Groups = new API.Groups(this);
  oauthConnections: API.OauthConnections = new API.OauthConnections(this);
  checkDeposits: API.CheckDeposits = new API.CheckDeposits(this);
  routingNumbers: API.RoutingNumbers = new API.RoutingNumbers(this);
  accountStatements: API.AccountStatements = new API.AccountStatements(this);
  simulations: API.Simulations = new API.Simulations(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'comma' });
  }

  static Increase = this;

  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static RateLimitedError = Errors.RateLimitedError;
  static InvalidAPIKeyError = Errors.InvalidAPIKeyError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static ObjectNotFoundError = Errors.ObjectNotFoundError;
  static PrivateFeatureError = Errors.PrivateFeatureError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static InvalidOperationError = Errors.InvalidOperationError;
  static MalformedRequestError = Errors.MalformedRequestError;
  static APIMethodNotFoundError = Errors.APIMethodNotFoundError;
  static InvalidParametersError = Errors.InvalidParametersError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
  static EnvironmentMismatchError = Errors.EnvironmentMismatchError;
  static IdempotencyConflictError = Errors.IdempotencyConflictError;
  static InsufficientPermissionsError = Errors.InsufficientPermissionsError;
  static IdempotencyUnprocessableError = Errors.IdempotencyUnprocessableError;
  static UniqueIdentifierAlreadyExistsError = Errors.UniqueIdentifierAlreadyExistsError;
}

export const {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  RateLimitedError,
  InvalidAPIKeyError,
  AuthenticationError,
  InternalServerError,
  ObjectNotFoundError,
  PrivateFeatureError,
  PermissionDeniedError,
  InvalidOperationError,
  MalformedRequestError,
  APIMethodNotFoundError,
  InvalidParametersError,
  UnprocessableEntityError,
  EnvironmentMismatchError,
  IdempotencyConflictError,
  InsufficientPermissionsError,
  IdempotencyUnprocessableError,
  UniqueIdentifierAlreadyExistsError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Increase {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import Accounts = API.Accounts;
  export import Account = API.Account;
  export import AccountsPage = API.AccountsPage;
  export import AccountCreateParams = API.AccountCreateParams;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountListParams = API.AccountListParams;

  export import AccountNumbers = API.AccountNumbers;
  export import AccountNumber = API.AccountNumber;
  export import AccountNumbersPage = API.AccountNumbersPage;
  export import AccountNumberCreateParams = API.AccountNumberCreateParams;
  export import AccountNumberUpdateParams = API.AccountNumberUpdateParams;
  export import AccountNumberListParams = API.AccountNumberListParams;

  export import BookkeepingAccounts = API.BookkeepingAccounts;
  export import BookkeepingAccount = API.BookkeepingAccount;
  export import BookkeepingAccountsPage = API.BookkeepingAccountsPage;
  export import BookkeepingAccountCreateParams = API.BookkeepingAccountCreateParams;
  export import BookkeepingAccountListParams = API.BookkeepingAccountListParams;

  export import BookkeepingEntrySets = API.BookkeepingEntrySets;
  export import BookkeepingEntrySet = API.BookkeepingEntrySet;
  export import BookkeepingEntrySetCreateParams = API.BookkeepingEntrySetCreateParams;

  export import BookkeepingEntries = API.BookkeepingEntries;
  export import BookkeepingEntry = API.BookkeepingEntry;
  export import BookkeepingEntriesPage = API.BookkeepingEntriesPage;
  export import BookkeepingEntryListParams = API.BookkeepingEntryListParams;

  export import RealTimeDecisions = API.RealTimeDecisions;
  export import RealTimeDecision = API.RealTimeDecision;
  export import RealTimeDecisionActionParams = API.RealTimeDecisionActionParams;

  export import RealTimePaymentsTransfers = API.RealTimePaymentsTransfers;
  export import RealTimePaymentsTransfer = API.RealTimePaymentsTransfer;
  export import RealTimePaymentsTransfersPage = API.RealTimePaymentsTransfersPage;
  export import RealTimePaymentsTransferCreateParams = API.RealTimePaymentsTransferCreateParams;
  export import RealTimePaymentsTransferListParams = API.RealTimePaymentsTransferListParams;

  export import BalanceLookups = API.BalanceLookups;
  export import BalanceLookupLookupResponse = API.BalanceLookupLookupResponse;
  export import BalanceLookupLookupParams = API.BalanceLookupLookupParams;

  export import Cards = API.Cards;
  export import Card = API.Card;
  export import CardDetails = API.CardDetails;
  export import CardsPage = API.CardsPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;

  export import CardDisputes = API.CardDisputes;
  export import CardDispute = API.CardDispute;
  export import CardDisputesPage = API.CardDisputesPage;
  export import CardDisputeCreateParams = API.CardDisputeCreateParams;
  export import CardDisputeListParams = API.CardDisputeListParams;

  export import CardProfiles = API.CardProfiles;
  export import CardProfile = API.CardProfile;
  export import CardProfilesPage = API.CardProfilesPage;
  export import CardProfileCreateParams = API.CardProfileCreateParams;
  export import CardProfileListParams = API.CardProfileListParams;

  export import CardPurchaseSupplements = API.CardPurchaseSupplements;
  export import CardPurchaseSupplement = API.CardPurchaseSupplement;
  export import CardPurchaseSupplementsPage = API.CardPurchaseSupplementsPage;
  export import CardPurchaseSupplementListParams = API.CardPurchaseSupplementListParams;

  export import ExternalAccounts = API.ExternalAccounts;
  export import ExternalAccount = API.ExternalAccount;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export import ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export import ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export import ExternalAccountListParams = API.ExternalAccountListParams;

  export import Exports = API.Exports;
  export import Export = API.Export;
  export import ExportsPage = API.ExportsPage;
  export import ExportCreateParams = API.ExportCreateParams;
  export import ExportListParams = API.ExportListParams;

  export import DigitalWalletTokens = API.DigitalWalletTokens;
  export import DigitalWalletToken = API.DigitalWalletToken;
  export import DigitalWalletTokensPage = API.DigitalWalletTokensPage;
  export import DigitalWalletTokenListParams = API.DigitalWalletTokenListParams;

  export import Transactions = API.Transactions;
  export import Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export import TransactionListParams = API.TransactionListParams;

  export import PendingTransactions = API.PendingTransactions;
  export import PendingTransaction = API.PendingTransaction;
  export import PendingTransactionsPage = API.PendingTransactionsPage;
  export import PendingTransactionListParams = API.PendingTransactionListParams;

  export import Programs = API.Programs;
  export import Program = API.Program;
  export import ProgramsPage = API.ProgramsPage;
  export import ProgramListParams = API.ProgramListParams;

  export import DeclinedTransactions = API.DeclinedTransactions;
  export import DeclinedTransaction = API.DeclinedTransaction;
  export import DeclinedTransactionsPage = API.DeclinedTransactionsPage;
  export import DeclinedTransactionListParams = API.DeclinedTransactionListParams;

  export import Limits = API.Limits;
  export import Limit = API.Limit;
  export import LimitsPage = API.LimitsPage;
  export import LimitCreateParams = API.LimitCreateParams;
  export import LimitUpdateParams = API.LimitUpdateParams;
  export import LimitListParams = API.LimitListParams;

  export import AccountTransfers = API.AccountTransfers;
  export import AccountTransfer = API.AccountTransfer;
  export import AccountTransfersPage = API.AccountTransfersPage;
  export import AccountTransferCreateParams = API.AccountTransferCreateParams;
  export import AccountTransferListParams = API.AccountTransferListParams;

  export import ACHTransfers = API.ACHTransfers;
  export import ACHTransfer = API.ACHTransfer;
  export import ACHTransfersPage = API.ACHTransfersPage;
  export import ACHTransferCreateParams = API.ACHTransferCreateParams;
  export import ACHTransferListParams = API.ACHTransferListParams;

  export import InboundACHTransferReturns = API.InboundACHTransferReturns;
  export import InboundACHTransferReturn = API.InboundACHTransferReturn;
  export import InboundACHTransferReturnsPage = API.InboundACHTransferReturnsPage;
  export import InboundACHTransferReturnListParams = API.InboundACHTransferReturnListParams;

  export import ACHPrenotifications = API.ACHPrenotifications;
  export import ACHPrenotification = API.ACHPrenotification;
  export import ACHPrenotificationsPage = API.ACHPrenotificationsPage;
  export import ACHPrenotificationCreateParams = API.ACHPrenotificationCreateParams;
  export import ACHPrenotificationListParams = API.ACHPrenotificationListParams;

  export import Documents = API.Documents;
  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentListParams = API.DocumentListParams;

  export import WireTransfers = API.WireTransfers;
  export import WireTransfer = API.WireTransfer;
  export import WireTransfersPage = API.WireTransfersPage;
  export import WireTransferCreateParams = API.WireTransferCreateParams;
  export import WireTransferListParams = API.WireTransferListParams;

  export import CheckTransfers = API.CheckTransfers;
  export import CheckTransfer = API.CheckTransfer;
  export import CheckTransfersPage = API.CheckTransfersPage;
  export import CheckTransferCreateParams = API.CheckTransferCreateParams;
  export import CheckTransferListParams = API.CheckTransferListParams;
  export import CheckTransferStopPaymentParams = API.CheckTransferStopPaymentParams;

  export import Entities = API.Entities;
  export import Entity = API.Entity;
  export import EntitiesPage = API.EntitiesPage;
  export import EntityCreateParams = API.EntityCreateParams;
  export import EntityListParams = API.EntityListParams;

  export import InboundACHTransfers = API.InboundACHTransfers;
  export import InboundACHTransfer = API.InboundACHTransfer;
  export import InboundACHTransfersPage = API.InboundACHTransfersPage;
  export import InboundACHTransferListParams = API.InboundACHTransferListParams;
  export import InboundACHTransferTransferReturnParams = API.InboundACHTransferTransferReturnParams;

  export import InboundWireDrawdownRequests = API.InboundWireDrawdownRequests;
  export import InboundWireDrawdownRequest = API.InboundWireDrawdownRequest;
  export import InboundWireDrawdownRequestsPage = API.InboundWireDrawdownRequestsPage;
  export import InboundWireDrawdownRequestListParams = API.InboundWireDrawdownRequestListParams;

  export import WireDrawdownRequests = API.WireDrawdownRequests;
  export import WireDrawdownRequest = API.WireDrawdownRequest;
  export import WireDrawdownRequestsPage = API.WireDrawdownRequestsPage;
  export import WireDrawdownRequestCreateParams = API.WireDrawdownRequestCreateParams;
  export import WireDrawdownRequestListParams = API.WireDrawdownRequestListParams;

  export import Events = API.Events;
  export import Event = API.Event;
  export import EventsPage = API.EventsPage;
  export import EventListParams = API.EventListParams;

  export import EventSubscriptions = API.EventSubscriptions;
  export import EventSubscription = API.EventSubscription;
  export import EventSubscriptionsPage = API.EventSubscriptionsPage;
  export import EventSubscriptionCreateParams = API.EventSubscriptionCreateParams;
  export import EventSubscriptionUpdateParams = API.EventSubscriptionUpdateParams;
  export import EventSubscriptionListParams = API.EventSubscriptionListParams;

  export import Files = API.Files;
  export import File = API.File;
  export import FilesPage = API.FilesPage;
  export import FileCreateParams = API.FileCreateParams;
  export import FileListParams = API.FileListParams;

  export import Groups = API.Groups;
  export import Group = API.Group;

  export import OauthConnections = API.OauthConnections;
  export import OauthConnection = API.OauthConnection;
  export import OauthConnectionsPage = API.OauthConnectionsPage;
  export import OauthConnectionListParams = API.OauthConnectionListParams;

  export import CheckDeposits = API.CheckDeposits;
  export import CheckDeposit = API.CheckDeposit;
  export import CheckDepositsPage = API.CheckDepositsPage;
  export import CheckDepositCreateParams = API.CheckDepositCreateParams;
  export import CheckDepositListParams = API.CheckDepositListParams;

  export import RoutingNumbers = API.RoutingNumbers;
  export import RoutingNumber = API.RoutingNumber;
  export import RoutingNumbersPage = API.RoutingNumbersPage;
  export import RoutingNumberListParams = API.RoutingNumberListParams;

  export import AccountStatements = API.AccountStatements;
  export import AccountStatement = API.AccountStatement;
  export import AccountStatementsPage = API.AccountStatementsPage;
  export import AccountStatementListParams = API.AccountStatementListParams;

  export import Simulations = API.Simulations;
}

export default Increase;
