// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'increase/resources/index';

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
      throw new Errors.IncreaseError(
        "The INCREASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Increase client with an apiKey option, like new Increase({ apiKey: 'my apiKey' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      environment: opts.environment ?? 'production',
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
  accountTransfers: API.AccountTransfers = new API.AccountTransfers(this);
  achTransfers: API.ACHTransfers = new API.ACHTransfers(this);
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
  physicalCards: API.PhysicalCards = new API.PhysicalCards(this);
  cardPayments: API.CardPayments = new API.CardPayments(this);

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

  static IncreaseError = Errors.IncreaseError;
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
  IncreaseError,
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
  export type Account = API.Account;
  export import AccountsPage = API.AccountsPage;
  export type AccountCreateParams = API.AccountCreateParams;
  export type AccountUpdateParams = API.AccountUpdateParams;
  export type AccountListParams = API.AccountListParams;

  export import AccountNumbers = API.AccountNumbers;
  export type AccountNumber = API.AccountNumber;
  export import AccountNumbersPage = API.AccountNumbersPage;
  export type AccountNumberCreateParams = API.AccountNumberCreateParams;
  export type AccountNumberUpdateParams = API.AccountNumberUpdateParams;
  export type AccountNumberListParams = API.AccountNumberListParams;

  export import BookkeepingAccounts = API.BookkeepingAccounts;
  export type BookkeepingAccount = API.BookkeepingAccount;
  export import BookkeepingAccountsPage = API.BookkeepingAccountsPage;
  export type BookkeepingAccountCreateParams = API.BookkeepingAccountCreateParams;
  export type BookkeepingAccountListParams = API.BookkeepingAccountListParams;

  export import BookkeepingEntrySets = API.BookkeepingEntrySets;
  export type BookkeepingEntrySet = API.BookkeepingEntrySet;
  export type BookkeepingEntrySetCreateParams = API.BookkeepingEntrySetCreateParams;

  export import BookkeepingEntries = API.BookkeepingEntries;
  export type BookkeepingEntry = API.BookkeepingEntry;
  export import BookkeepingEntriesPage = API.BookkeepingEntriesPage;
  export type BookkeepingEntryListParams = API.BookkeepingEntryListParams;

  export import RealTimeDecisions = API.RealTimeDecisions;
  export type RealTimeDecision = API.RealTimeDecision;
  export type RealTimeDecisionActionParams = API.RealTimeDecisionActionParams;

  export import RealTimePaymentsTransfers = API.RealTimePaymentsTransfers;
  export type RealTimePaymentsTransfer = API.RealTimePaymentsTransfer;
  export import RealTimePaymentsTransfersPage = API.RealTimePaymentsTransfersPage;
  export type RealTimePaymentsTransferCreateParams = API.RealTimePaymentsTransferCreateParams;
  export type RealTimePaymentsTransferListParams = API.RealTimePaymentsTransferListParams;

  export import BalanceLookups = API.BalanceLookups;
  export type BalanceLookupLookupResponse = API.BalanceLookupLookupResponse;
  export type BalanceLookupLookupParams = API.BalanceLookupLookupParams;

  export import Cards = API.Cards;
  export type Card = API.Card;
  export type CardDetails = API.CardDetails;
  export import CardsPage = API.CardsPage;
  export type CardCreateParams = API.CardCreateParams;
  export type CardUpdateParams = API.CardUpdateParams;
  export type CardListParams = API.CardListParams;

  export import CardDisputes = API.CardDisputes;
  export type CardDispute = API.CardDispute;
  export import CardDisputesPage = API.CardDisputesPage;
  export type CardDisputeCreateParams = API.CardDisputeCreateParams;
  export type CardDisputeListParams = API.CardDisputeListParams;

  export import CardProfiles = API.CardProfiles;
  export type CardProfile = API.CardProfile;
  export import CardProfilesPage = API.CardProfilesPage;
  export type CardProfileCreateParams = API.CardProfileCreateParams;
  export type CardProfileListParams = API.CardProfileListParams;

  export import CardPurchaseSupplements = API.CardPurchaseSupplements;
  export type CardPurchaseSupplement = API.CardPurchaseSupplement;
  export import CardPurchaseSupplementsPage = API.CardPurchaseSupplementsPage;
  export type CardPurchaseSupplementListParams = API.CardPurchaseSupplementListParams;

  export import ExternalAccounts = API.ExternalAccounts;
  export type ExternalAccount = API.ExternalAccount;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export type ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export type ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export type ExternalAccountListParams = API.ExternalAccountListParams;

  export import Exports = API.Exports;
  export type Export = API.Export;
  export import ExportsPage = API.ExportsPage;
  export type ExportCreateParams = API.ExportCreateParams;
  export type ExportListParams = API.ExportListParams;

  export import DigitalWalletTokens = API.DigitalWalletTokens;
  export type DigitalWalletToken = API.DigitalWalletToken;
  export import DigitalWalletTokensPage = API.DigitalWalletTokensPage;
  export type DigitalWalletTokenListParams = API.DigitalWalletTokenListParams;

  export import Transactions = API.Transactions;
  export type Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export type TransactionListParams = API.TransactionListParams;

  export import PendingTransactions = API.PendingTransactions;
  export type PendingTransaction = API.PendingTransaction;
  export import PendingTransactionsPage = API.PendingTransactionsPage;
  export type PendingTransactionListParams = API.PendingTransactionListParams;

  export import Programs = API.Programs;
  export type Program = API.Program;
  export import ProgramsPage = API.ProgramsPage;
  export type ProgramListParams = API.ProgramListParams;

  export import DeclinedTransactions = API.DeclinedTransactions;
  export type DeclinedTransaction = API.DeclinedTransaction;
  export import DeclinedTransactionsPage = API.DeclinedTransactionsPage;
  export type DeclinedTransactionListParams = API.DeclinedTransactionListParams;

  export import AccountTransfers = API.AccountTransfers;
  export type AccountTransfer = API.AccountTransfer;
  export import AccountTransfersPage = API.AccountTransfersPage;
  export type AccountTransferCreateParams = API.AccountTransferCreateParams;
  export type AccountTransferListParams = API.AccountTransferListParams;

  export import ACHTransfers = API.ACHTransfers;
  export type ACHTransfer = API.ACHTransfer;
  export import ACHTransfersPage = API.ACHTransfersPage;
  export type ACHTransferCreateParams = API.ACHTransferCreateParams;
  export type ACHTransferListParams = API.ACHTransferListParams;

  export import ACHPrenotifications = API.ACHPrenotifications;
  export type ACHPrenotification = API.ACHPrenotification;
  export import ACHPrenotificationsPage = API.ACHPrenotificationsPage;
  export type ACHPrenotificationCreateParams = API.ACHPrenotificationCreateParams;
  export type ACHPrenotificationListParams = API.ACHPrenotificationListParams;

  export import Documents = API.Documents;
  export type Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export type DocumentListParams = API.DocumentListParams;

  export import WireTransfers = API.WireTransfers;
  export type WireTransfer = API.WireTransfer;
  export import WireTransfersPage = API.WireTransfersPage;
  export type WireTransferCreateParams = API.WireTransferCreateParams;
  export type WireTransferListParams = API.WireTransferListParams;

  export import CheckTransfers = API.CheckTransfers;
  export type CheckTransfer = API.CheckTransfer;
  export import CheckTransfersPage = API.CheckTransfersPage;
  export type CheckTransferCreateParams = API.CheckTransferCreateParams;
  export type CheckTransferListParams = API.CheckTransferListParams;
  export type CheckTransferStopPaymentParams = API.CheckTransferStopPaymentParams;

  export import Entities = API.Entities;
  export type Entity = API.Entity;
  export import EntitiesPage = API.EntitiesPage;
  export type EntityCreateParams = API.EntityCreateParams;
  export type EntityListParams = API.EntityListParams;
  export type EntityUpdateAddressParams = API.EntityUpdateAddressParams;

  export import InboundACHTransfers = API.InboundACHTransfers;
  export type InboundACHTransfer = API.InboundACHTransfer;
  export import InboundACHTransfersPage = API.InboundACHTransfersPage;
  export type InboundACHTransferListParams = API.InboundACHTransferListParams;
  export type InboundACHTransferNotificationOfChangeParams = API.InboundACHTransferNotificationOfChangeParams;
  export type InboundACHTransferTransferReturnParams = API.InboundACHTransferTransferReturnParams;

  export import InboundWireDrawdownRequests = API.InboundWireDrawdownRequests;
  export type InboundWireDrawdownRequest = API.InboundWireDrawdownRequest;
  export import InboundWireDrawdownRequestsPage = API.InboundWireDrawdownRequestsPage;
  export type InboundWireDrawdownRequestListParams = API.InboundWireDrawdownRequestListParams;

  export import WireDrawdownRequests = API.WireDrawdownRequests;
  export type WireDrawdownRequest = API.WireDrawdownRequest;
  export import WireDrawdownRequestsPage = API.WireDrawdownRequestsPage;
  export type WireDrawdownRequestCreateParams = API.WireDrawdownRequestCreateParams;
  export type WireDrawdownRequestListParams = API.WireDrawdownRequestListParams;

  export import Events = API.Events;
  export type Event = API.Event;
  export import EventsPage = API.EventsPage;
  export type EventListParams = API.EventListParams;

  export import EventSubscriptions = API.EventSubscriptions;
  export type EventSubscription = API.EventSubscription;
  export import EventSubscriptionsPage = API.EventSubscriptionsPage;
  export type EventSubscriptionCreateParams = API.EventSubscriptionCreateParams;
  export type EventSubscriptionUpdateParams = API.EventSubscriptionUpdateParams;
  export type EventSubscriptionListParams = API.EventSubscriptionListParams;

  export import Files = API.Files;
  export type File = API.File;
  export import FilesPage = API.FilesPage;
  export type FileCreateParams = API.FileCreateParams;
  export type FileListParams = API.FileListParams;

  export import Groups = API.Groups;
  export type Group = API.Group;

  export import OauthConnections = API.OauthConnections;
  export type OauthConnection = API.OauthConnection;
  export import OauthConnectionsPage = API.OauthConnectionsPage;
  export type OauthConnectionListParams = API.OauthConnectionListParams;

  export import CheckDeposits = API.CheckDeposits;
  export type CheckDeposit = API.CheckDeposit;
  export import CheckDepositsPage = API.CheckDepositsPage;
  export type CheckDepositCreateParams = API.CheckDepositCreateParams;
  export type CheckDepositListParams = API.CheckDepositListParams;

  export import RoutingNumbers = API.RoutingNumbers;
  export type RoutingNumber = API.RoutingNumber;
  export import RoutingNumbersPage = API.RoutingNumbersPage;
  export type RoutingNumberListParams = API.RoutingNumberListParams;

  export import AccountStatements = API.AccountStatements;
  export type AccountStatement = API.AccountStatement;
  export import AccountStatementsPage = API.AccountStatementsPage;
  export type AccountStatementListParams = API.AccountStatementListParams;

  export import Simulations = API.Simulations;

  export import PhysicalCards = API.PhysicalCards;
  export type PhysicalCard = API.PhysicalCard;
  export import PhysicalCardsPage = API.PhysicalCardsPage;
  export type PhysicalCardCreateParams = API.PhysicalCardCreateParams;
  export type PhysicalCardUpdateParams = API.PhysicalCardUpdateParams;
  export type PhysicalCardListParams = API.PhysicalCardListParams;

  export import CardPayments = API.CardPayments;
  export type CardPayment = API.CardPayment;
  export import CardPaymentsPage = API.CardPaymentsPage;
  export type CardPaymentListParams = API.CardPaymentListParams;
}

export default Increase;
