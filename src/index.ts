// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageParams, PageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AccountNumber,
  AccountNumberCreateParams,
  AccountNumberListParams,
  AccountNumberUpdateParams,
  AccountNumbers,
  AccountNumbersPage,
} from './resources/account-numbers';
import {
  AccountStatement,
  AccountStatementListParams,
  AccountStatements,
  AccountStatementsPage,
} from './resources/account-statements';
import {
  AccountTransfer,
  AccountTransferCreateParams,
  AccountTransferListParams,
  AccountTransfers,
  AccountTransfersPage,
} from './resources/account-transfers';
import {
  Account,
  AccountBalanceParams,
  AccountCreateParams,
  AccountListParams,
  AccountUpdateParams,
  Accounts,
  AccountsPage,
  BalanceLookup,
} from './resources/accounts';
import {
  ACHPrenotification,
  ACHPrenotificationCreateParams,
  ACHPrenotificationListParams,
  ACHPrenotifications,
  ACHPrenotificationsPage,
} from './resources/ach-prenotifications';
import {
  ACHTransfer,
  ACHTransferCreateParams,
  ACHTransferListParams,
  ACHTransfers,
  ACHTransfersPage,
} from './resources/ach-transfers';
import {
  BookkeepingAccount,
  BookkeepingAccountBalanceParams,
  BookkeepingAccountCreateParams,
  BookkeepingAccountListParams,
  BookkeepingAccountUpdateParams,
  BookkeepingAccounts,
  BookkeepingAccountsPage,
  BookkeepingBalanceLookup,
} from './resources/bookkeeping-accounts';
import {
  BookkeepingEntries,
  BookkeepingEntriesPage,
  BookkeepingEntry,
  BookkeepingEntryListParams,
} from './resources/bookkeeping-entries';
import {
  BookkeepingEntrySet,
  BookkeepingEntrySetCreateParams,
  BookkeepingEntrySetListParams,
  BookkeepingEntrySets,
  BookkeepingEntrySetsPage,
} from './resources/bookkeeping-entry-sets';
import {
  CardDispute,
  CardDisputeCreateParams,
  CardDisputeListParams,
  CardDisputes,
  CardDisputesPage,
} from './resources/card-disputes';
import {
  CardPayment,
  CardPaymentListParams,
  CardPayments,
  CardPaymentsPage,
} from './resources/card-payments';
import {
  CardPurchaseSupplement,
  CardPurchaseSupplementListParams,
  CardPurchaseSupplements,
  CardPurchaseSupplementsPage,
} from './resources/card-purchase-supplements';
import {
  Card,
  CardCreateParams,
  CardDetails,
  CardListParams,
  CardUpdateParams,
  Cards,
  CardsPage,
} from './resources/cards';
import {
  CheckDeposit,
  CheckDepositCreateParams,
  CheckDepositListParams,
  CheckDeposits,
  CheckDepositsPage,
} from './resources/check-deposits';
import {
  CheckTransfer,
  CheckTransferCreateParams,
  CheckTransferListParams,
  CheckTransferStopPaymentParams,
  CheckTransfers,
  CheckTransfersPage,
} from './resources/check-transfers';
import {
  DeclinedTransaction,
  DeclinedTransactionListParams,
  DeclinedTransactions,
  DeclinedTransactionsPage,
} from './resources/declined-transactions';
import {
  DigitalCardProfile,
  DigitalCardProfileCloneParams,
  DigitalCardProfileCreateParams,
  DigitalCardProfileListParams,
  DigitalCardProfiles,
  DigitalCardProfilesPage,
} from './resources/digital-card-profiles';
import {
  DigitalWalletToken,
  DigitalWalletTokenListParams,
  DigitalWalletTokens,
  DigitalWalletTokensPage,
} from './resources/digital-wallet-tokens';
import { Document, DocumentListParams, Documents, DocumentsPage } from './resources/documents';
import {
  Entities,
  EntitiesPage,
  Entity,
  EntityArchiveBeneficialOwnerParams,
  EntityConfirmParams,
  EntityCreateBeneficialOwnerParams,
  EntityCreateParams,
  EntityListParams,
  EntityUpdateAddressParams,
  EntityUpdateBeneficialOwnerAddressParams,
  EntityUpdateIndustryCodeParams,
} from './resources/entities';
import {
  EventSubscription,
  EventSubscriptionCreateParams,
  EventSubscriptionListParams,
  EventSubscriptionUpdateParams,
  EventSubscriptions,
  EventSubscriptionsPage,
} from './resources/event-subscriptions';
import { Event, EventListParams, Events, EventsPage } from './resources/events';
import { Export, ExportCreateParams, ExportListParams, Exports, ExportsPage } from './resources/exports';
import {
  ExternalAccount,
  ExternalAccountCreateParams,
  ExternalAccountListParams,
  ExternalAccountUpdateParams,
  ExternalAccounts,
  ExternalAccountsPage,
} from './resources/external-accounts';
import { File, FileCreateParams, FileListParams, Files, FilesPage } from './resources/files';
import { Group, Groups } from './resources/groups';
import {
  InboundACHTransfer,
  InboundACHTransferCreateNotificationOfChangeParams,
  InboundACHTransferDeclineParams,
  InboundACHTransferListParams,
  InboundACHTransferTransferReturnParams,
  InboundACHTransfers,
  InboundACHTransfersPage,
} from './resources/inbound-ach-transfers';
import {
  InboundCheckDeposit,
  InboundCheckDepositListParams,
  InboundCheckDepositReturnParams,
  InboundCheckDeposits,
  InboundCheckDepositsPage,
} from './resources/inbound-check-deposits';
import {
  InboundMailItem,
  InboundMailItemListParams,
  InboundMailItems,
  InboundMailItemsPage,
} from './resources/inbound-mail-items';
import {
  InboundRealTimePaymentsTransfer,
  InboundRealTimePaymentsTransferListParams,
  InboundRealTimePaymentsTransfers,
  InboundRealTimePaymentsTransfersPage,
} from './resources/inbound-real-time-payments-transfers';
import {
  InboundWireDrawdownRequest,
  InboundWireDrawdownRequestListParams,
  InboundWireDrawdownRequests,
  InboundWireDrawdownRequestsPage,
} from './resources/inbound-wire-drawdown-requests';
import {
  InboundWireTransfer,
  InboundWireTransferListParams,
  InboundWireTransfers,
  InboundWireTransfersPage,
} from './resources/inbound-wire-transfers';
import {
  IntrafiAccountEnrollment,
  IntrafiAccountEnrollmentCreateParams,
  IntrafiAccountEnrollmentListParams,
  IntrafiAccountEnrollments,
  IntrafiAccountEnrollmentsPage,
} from './resources/intrafi-account-enrollments';
import { IntrafiBalance, IntrafiBalances } from './resources/intrafi-balances';
import {
  IntrafiExclusion,
  IntrafiExclusionCreateParams,
  IntrafiExclusionListParams,
  IntrafiExclusions,
  IntrafiExclusionsPage,
} from './resources/intrafi-exclusions';
import {
  Lockbox,
  LockboxCreateParams,
  LockboxListParams,
  LockboxUpdateParams,
  Lockboxes,
  LockboxesPage,
} from './resources/lockboxes';
import {
  OAuthApplication,
  OAuthApplicationListParams,
  OAuthApplications,
  OAuthApplicationsPage,
} from './resources/oauth-applications';
import {
  OAuthConnection,
  OAuthConnectionListParams,
  OAuthConnections,
  OAuthConnectionsPage,
} from './resources/oauth-connections';
import { OAuthToken, OAuthTokenCreateParams, OAuthTokens } from './resources/oauth-tokens';
import {
  PendingTransaction,
  PendingTransactionListParams,
  PendingTransactions,
  PendingTransactionsPage,
} from './resources/pending-transactions';
import {
  PhysicalCardProfile,
  PhysicalCardProfileCloneParams,
  PhysicalCardProfileCreateParams,
  PhysicalCardProfileListParams,
  PhysicalCardProfiles,
  PhysicalCardProfilesPage,
} from './resources/physical-card-profiles';
import {
  PhysicalCard,
  PhysicalCardCreateParams,
  PhysicalCardListParams,
  PhysicalCardUpdateParams,
  PhysicalCards,
  PhysicalCardsPage,
} from './resources/physical-cards';
import { Program, ProgramListParams, Programs, ProgramsPage } from './resources/programs';
import {
  ProofOfAuthorizationRequestSubmission,
  ProofOfAuthorizationRequestSubmissionCreateParams,
  ProofOfAuthorizationRequestSubmissionListParams,
  ProofOfAuthorizationRequestSubmissions,
  ProofOfAuthorizationRequestSubmissionsPage,
} from './resources/proof-of-authorization-request-submissions';
import {
  ProofOfAuthorizationRequest,
  ProofOfAuthorizationRequestListParams,
  ProofOfAuthorizationRequests,
  ProofOfAuthorizationRequestsPage,
} from './resources/proof-of-authorization-requests';
import {
  RealTimeDecision,
  RealTimeDecisionActionParams,
  RealTimeDecisions,
} from './resources/real-time-decisions';
import {
  RealTimePaymentsRequestForPayment,
  RealTimePaymentsRequestForPaymentCreateParams,
  RealTimePaymentsRequestForPaymentListParams,
  RealTimePaymentsRequestForPayments,
  RealTimePaymentsRequestForPaymentsPage,
} from './resources/real-time-payments-request-for-payments';
import {
  RealTimePaymentsTransfer,
  RealTimePaymentsTransferCreateParams,
  RealTimePaymentsTransferListParams,
  RealTimePaymentsTransfers,
  RealTimePaymentsTransfersPage,
} from './resources/real-time-payments-transfers';
import {
  RoutingNumberListParams,
  RoutingNumberListResponse,
  RoutingNumberListResponsesPage,
  RoutingNumbers,
} from './resources/routing-numbers';
import {
  EntitySupplementalDocument,
  EntitySupplementalDocumentsPage,
  SupplementalDocumentCreateParams,
  SupplementalDocumentListParams,
  SupplementalDocuments,
} from './resources/supplemental-documents';
import { Transaction, TransactionListParams, Transactions, TransactionsPage } from './resources/transactions';
import {
  WireDrawdownRequest,
  WireDrawdownRequestCreateParams,
  WireDrawdownRequestListParams,
  WireDrawdownRequests,
  WireDrawdownRequestsPage,
} from './resources/wire-drawdown-requests';
import {
  WireTransfer,
  WireTransferCreateParams,
  WireTransferListParams,
  WireTransfers,
  WireTransfersPage,
} from './resources/wire-transfers';
import { Webhooks } from './resources/webhooks';
import { Simulations } from './resources/simulations/simulations';

const environments = {
  production: 'https://api.increase.com',
  sandbox: 'https://sandbox.increase.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['INCREASE_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['INCREASE_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.increase.com`
   * - `sandbox` corresponds to `https://sandbox.increase.com`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['INCREASE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Increase API.
 */
export class Increase extends Core.APIClient {
  apiKey: string;
  webhookSecret: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Increase API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['INCREASE_API_KEY'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['INCREASE_WEBHOOK_SECRET'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['INCREASE_BASE_URL'] ?? https://api.increase.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('INCREASE_BASE_URL'),
    apiKey = Core.readEnv('INCREASE_API_KEY'),
    webhookSecret = Core.readEnv('INCREASE_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.IncreaseError(
        "The INCREASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Increase client with an apiKey option, like new Increase({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      webhookSecret,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.IncreaseError(
        'Ambiguous URL; The `baseURL` option (or INCREASE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

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
    this.webhookSecret = webhookSecret;
  }

  accounts: API.Accounts = new API.Accounts(this);
  accountNumbers: API.AccountNumbers = new API.AccountNumbers(this);
  cards: API.Cards = new API.Cards(this);
  cardPayments: API.CardPayments = new API.CardPayments(this);
  cardPurchaseSupplements: API.CardPurchaseSupplements = new API.CardPurchaseSupplements(this);
  cardDisputes: API.CardDisputes = new API.CardDisputes(this);
  physicalCards: API.PhysicalCards = new API.PhysicalCards(this);
  digitalCardProfiles: API.DigitalCardProfiles = new API.DigitalCardProfiles(this);
  physicalCardProfiles: API.PhysicalCardProfiles = new API.PhysicalCardProfiles(this);
  digitalWalletTokens: API.DigitalWalletTokens = new API.DigitalWalletTokens(this);
  transactions: API.Transactions = new API.Transactions(this);
  pendingTransactions: API.PendingTransactions = new API.PendingTransactions(this);
  declinedTransactions: API.DeclinedTransactions = new API.DeclinedTransactions(this);
  accountTransfers: API.AccountTransfers = new API.AccountTransfers(this);
  achTransfers: API.ACHTransfers = new API.ACHTransfers(this);
  achPrenotifications: API.ACHPrenotifications = new API.ACHPrenotifications(this);
  inboundACHTransfers: API.InboundACHTransfers = new API.InboundACHTransfers(this);
  wireTransfers: API.WireTransfers = new API.WireTransfers(this);
  inboundWireTransfers: API.InboundWireTransfers = new API.InboundWireTransfers(this);
  wireDrawdownRequests: API.WireDrawdownRequests = new API.WireDrawdownRequests(this);
  inboundWireDrawdownRequests: API.InboundWireDrawdownRequests = new API.InboundWireDrawdownRequests(this);
  checkTransfers: API.CheckTransfers = new API.CheckTransfers(this);
  inboundCheckDeposits: API.InboundCheckDeposits = new API.InboundCheckDeposits(this);
  realTimePaymentsTransfers: API.RealTimePaymentsTransfers = new API.RealTimePaymentsTransfers(this);
  inboundRealTimePaymentsTransfers: API.InboundRealTimePaymentsTransfers =
    new API.InboundRealTimePaymentsTransfers(this);
  checkDeposits: API.CheckDeposits = new API.CheckDeposits(this);
  lockboxes: API.Lockboxes = new API.Lockboxes(this);
  inboundMailItems: API.InboundMailItems = new API.InboundMailItems(this);
  routingNumbers: API.RoutingNumbers = new API.RoutingNumbers(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  entities: API.Entities = new API.Entities(this);
  supplementalDocuments: API.SupplementalDocuments = new API.SupplementalDocuments(this);
  programs: API.Programs = new API.Programs(this);
  proofOfAuthorizationRequests: API.ProofOfAuthorizationRequests = new API.ProofOfAuthorizationRequests(this);
  proofOfAuthorizationRequestSubmissions: API.ProofOfAuthorizationRequestSubmissions =
    new API.ProofOfAuthorizationRequestSubmissions(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  accountStatements: API.AccountStatements = new API.AccountStatements(this);
  files: API.Files = new API.Files(this);
  documents: API.Documents = new API.Documents(this);
  exports: API.Exports = new API.Exports(this);
  events: API.Events = new API.Events(this);
  eventSubscriptions: API.EventSubscriptions = new API.EventSubscriptions(this);
  realTimeDecisions: API.RealTimeDecisions = new API.RealTimeDecisions(this);
  bookkeepingAccounts: API.BookkeepingAccounts = new API.BookkeepingAccounts(this);
  bookkeepingEntrySets: API.BookkeepingEntrySets = new API.BookkeepingEntrySets(this);
  bookkeepingEntries: API.BookkeepingEntries = new API.BookkeepingEntries(this);
  groups: API.Groups = new API.Groups(this);
  oauthApplications: API.OAuthApplications = new API.OAuthApplications(this);
  oauthConnections: API.OAuthConnections = new API.OAuthConnections(this);
  oauthTokens: API.OAuthTokens = new API.OAuthTokens(this);
  intrafiAccountEnrollments: API.IntrafiAccountEnrollments = new API.IntrafiAccountEnrollments(this);
  intrafiBalances: API.IntrafiBalances = new API.IntrafiBalances(this);
  intrafiExclusions: API.IntrafiExclusions = new API.IntrafiExclusions(this);
  realTimePaymentsRequestForPayments: API.RealTimePaymentsRequestForPayments =
    new API.RealTimePaymentsRequestForPayments(this);
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
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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
  static InsufficientPermissionsError = Errors.InsufficientPermissionsError;
  static IdempotencyKeyAlreadyUsedError = Errors.IdempotencyKeyAlreadyUsedError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Increase.Accounts = Accounts;
Increase.AccountsPage = AccountsPage;
Increase.AccountNumbers = AccountNumbers;
Increase.AccountNumbersPage = AccountNumbersPage;
Increase.Cards = Cards;
Increase.CardsPage = CardsPage;
Increase.CardPayments = CardPayments;
Increase.CardPaymentsPage = CardPaymentsPage;
Increase.CardPurchaseSupplements = CardPurchaseSupplements;
Increase.CardPurchaseSupplementsPage = CardPurchaseSupplementsPage;
Increase.CardDisputes = CardDisputes;
Increase.CardDisputesPage = CardDisputesPage;
Increase.PhysicalCards = PhysicalCards;
Increase.PhysicalCardsPage = PhysicalCardsPage;
Increase.DigitalCardProfiles = DigitalCardProfiles;
Increase.DigitalCardProfilesPage = DigitalCardProfilesPage;
Increase.PhysicalCardProfiles = PhysicalCardProfiles;
Increase.PhysicalCardProfilesPage = PhysicalCardProfilesPage;
Increase.DigitalWalletTokens = DigitalWalletTokens;
Increase.DigitalWalletTokensPage = DigitalWalletTokensPage;
Increase.Transactions = Transactions;
Increase.TransactionsPage = TransactionsPage;
Increase.PendingTransactions = PendingTransactions;
Increase.PendingTransactionsPage = PendingTransactionsPage;
Increase.DeclinedTransactions = DeclinedTransactions;
Increase.DeclinedTransactionsPage = DeclinedTransactionsPage;
Increase.AccountTransfers = AccountTransfers;
Increase.AccountTransfersPage = AccountTransfersPage;
Increase.ACHTransfers = ACHTransfers;
Increase.ACHTransfersPage = ACHTransfersPage;
Increase.ACHPrenotifications = ACHPrenotifications;
Increase.ACHPrenotificationsPage = ACHPrenotificationsPage;
Increase.InboundACHTransfers = InboundACHTransfers;
Increase.InboundACHTransfersPage = InboundACHTransfersPage;
Increase.WireTransfers = WireTransfers;
Increase.WireTransfersPage = WireTransfersPage;
Increase.InboundWireTransfers = InboundWireTransfers;
Increase.InboundWireTransfersPage = InboundWireTransfersPage;
Increase.WireDrawdownRequests = WireDrawdownRequests;
Increase.WireDrawdownRequestsPage = WireDrawdownRequestsPage;
Increase.InboundWireDrawdownRequests = InboundWireDrawdownRequests;
Increase.InboundWireDrawdownRequestsPage = InboundWireDrawdownRequestsPage;
Increase.CheckTransfers = CheckTransfers;
Increase.CheckTransfersPage = CheckTransfersPage;
Increase.InboundCheckDeposits = InboundCheckDeposits;
Increase.InboundCheckDepositsPage = InboundCheckDepositsPage;
Increase.RealTimePaymentsTransfers = RealTimePaymentsTransfers;
Increase.RealTimePaymentsTransfersPage = RealTimePaymentsTransfersPage;
Increase.InboundRealTimePaymentsTransfers = InboundRealTimePaymentsTransfers;
Increase.InboundRealTimePaymentsTransfersPage = InboundRealTimePaymentsTransfersPage;
Increase.CheckDeposits = CheckDeposits;
Increase.CheckDepositsPage = CheckDepositsPage;
Increase.Lockboxes = Lockboxes;
Increase.LockboxesPage = LockboxesPage;
Increase.InboundMailItems = InboundMailItems;
Increase.InboundMailItemsPage = InboundMailItemsPage;
Increase.RoutingNumbers = RoutingNumbers;
Increase.RoutingNumberListResponsesPage = RoutingNumberListResponsesPage;
Increase.ExternalAccounts = ExternalAccounts;
Increase.ExternalAccountsPage = ExternalAccountsPage;
Increase.Entities = Entities;
Increase.EntitiesPage = EntitiesPage;
Increase.SupplementalDocuments = SupplementalDocuments;
Increase.EntitySupplementalDocumentsPage = EntitySupplementalDocumentsPage;
Increase.Programs = Programs;
Increase.ProgramsPage = ProgramsPage;
Increase.ProofOfAuthorizationRequests = ProofOfAuthorizationRequests;
Increase.ProofOfAuthorizationRequestsPage = ProofOfAuthorizationRequestsPage;
Increase.ProofOfAuthorizationRequestSubmissions = ProofOfAuthorizationRequestSubmissions;
Increase.ProofOfAuthorizationRequestSubmissionsPage = ProofOfAuthorizationRequestSubmissionsPage;
Increase.AccountStatements = AccountStatements;
Increase.AccountStatementsPage = AccountStatementsPage;
Increase.Files = Files;
Increase.FilesPage = FilesPage;
Increase.Documents = Documents;
Increase.DocumentsPage = DocumentsPage;
Increase.Exports = Exports;
Increase.ExportsPage = ExportsPage;
Increase.Events = Events;
Increase.EventsPage = EventsPage;
Increase.EventSubscriptions = EventSubscriptions;
Increase.EventSubscriptionsPage = EventSubscriptionsPage;
Increase.RealTimeDecisions = RealTimeDecisions;
Increase.BookkeepingAccounts = BookkeepingAccounts;
Increase.BookkeepingAccountsPage = BookkeepingAccountsPage;
Increase.BookkeepingEntrySets = BookkeepingEntrySets;
Increase.BookkeepingEntrySetsPage = BookkeepingEntrySetsPage;
Increase.BookkeepingEntries = BookkeepingEntries;
Increase.BookkeepingEntriesPage = BookkeepingEntriesPage;
Increase.Groups = Groups;
Increase.OAuthApplications = OAuthApplications;
Increase.OAuthApplicationsPage = OAuthApplicationsPage;
Increase.OAuthConnections = OAuthConnections;
Increase.OAuthConnectionsPage = OAuthConnectionsPage;
Increase.OAuthTokens = OAuthTokens;
Increase.IntrafiAccountEnrollments = IntrafiAccountEnrollments;
Increase.IntrafiAccountEnrollmentsPage = IntrafiAccountEnrollmentsPage;
Increase.IntrafiBalances = IntrafiBalances;
Increase.IntrafiExclusions = IntrafiExclusions;
Increase.IntrafiExclusionsPage = IntrafiExclusionsPage;
Increase.RealTimePaymentsRequestForPayments = RealTimePaymentsRequestForPayments;
Increase.RealTimePaymentsRequestForPaymentsPage = RealTimePaymentsRequestForPaymentsPage;
Increase.Simulations = Simulations;
export declare namespace Increase {
  export type RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export {
    Accounts as Accounts,
    type Account as Account,
    type BalanceLookup as BalanceLookup,
    AccountsPage as AccountsPage,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountBalanceParams as AccountBalanceParams,
  };

  export {
    AccountNumbers as AccountNumbers,
    type AccountNumber as AccountNumber,
    AccountNumbersPage as AccountNumbersPage,
    type AccountNumberCreateParams as AccountNumberCreateParams,
    type AccountNumberUpdateParams as AccountNumberUpdateParams,
    type AccountNumberListParams as AccountNumberListParams,
  };

  export {
    Cards as Cards,
    type Card as Card,
    type CardDetails as CardDetails,
    CardsPage as CardsPage,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
  };

  export {
    CardPayments as CardPayments,
    type CardPayment as CardPayment,
    CardPaymentsPage as CardPaymentsPage,
    type CardPaymentListParams as CardPaymentListParams,
  };

  export {
    CardPurchaseSupplements as CardPurchaseSupplements,
    type CardPurchaseSupplement as CardPurchaseSupplement,
    CardPurchaseSupplementsPage as CardPurchaseSupplementsPage,
    type CardPurchaseSupplementListParams as CardPurchaseSupplementListParams,
  };

  export {
    CardDisputes as CardDisputes,
    type CardDispute as CardDispute,
    CardDisputesPage as CardDisputesPage,
    type CardDisputeCreateParams as CardDisputeCreateParams,
    type CardDisputeListParams as CardDisputeListParams,
  };

  export {
    PhysicalCards as PhysicalCards,
    type PhysicalCard as PhysicalCard,
    PhysicalCardsPage as PhysicalCardsPage,
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardUpdateParams as PhysicalCardUpdateParams,
    type PhysicalCardListParams as PhysicalCardListParams,
  };

  export {
    DigitalCardProfiles as DigitalCardProfiles,
    type DigitalCardProfile as DigitalCardProfile,
    DigitalCardProfilesPage as DigitalCardProfilesPage,
    type DigitalCardProfileCreateParams as DigitalCardProfileCreateParams,
    type DigitalCardProfileListParams as DigitalCardProfileListParams,
    type DigitalCardProfileCloneParams as DigitalCardProfileCloneParams,
  };

  export {
    PhysicalCardProfiles as PhysicalCardProfiles,
    type PhysicalCardProfile as PhysicalCardProfile,
    PhysicalCardProfilesPage as PhysicalCardProfilesPage,
    type PhysicalCardProfileCreateParams as PhysicalCardProfileCreateParams,
    type PhysicalCardProfileListParams as PhysicalCardProfileListParams,
    type PhysicalCardProfileCloneParams as PhysicalCardProfileCloneParams,
  };

  export {
    DigitalWalletTokens as DigitalWalletTokens,
    type DigitalWalletToken as DigitalWalletToken,
    DigitalWalletTokensPage as DigitalWalletTokensPage,
    type DigitalWalletTokenListParams as DigitalWalletTokenListParams,
  };

  export {
    Transactions as Transactions,
    type Transaction as Transaction,
    TransactionsPage as TransactionsPage,
    type TransactionListParams as TransactionListParams,
  };

  export {
    PendingTransactions as PendingTransactions,
    type PendingTransaction as PendingTransaction,
    PendingTransactionsPage as PendingTransactionsPage,
    type PendingTransactionListParams as PendingTransactionListParams,
  };

  export {
    DeclinedTransactions as DeclinedTransactions,
    type DeclinedTransaction as DeclinedTransaction,
    DeclinedTransactionsPage as DeclinedTransactionsPage,
    type DeclinedTransactionListParams as DeclinedTransactionListParams,
  };

  export {
    AccountTransfers as AccountTransfers,
    type AccountTransfer as AccountTransfer,
    AccountTransfersPage as AccountTransfersPage,
    type AccountTransferCreateParams as AccountTransferCreateParams,
    type AccountTransferListParams as AccountTransferListParams,
  };

  export {
    ACHTransfers as ACHTransfers,
    type ACHTransfer as ACHTransfer,
    ACHTransfersPage as ACHTransfersPage,
    type ACHTransferCreateParams as ACHTransferCreateParams,
    type ACHTransferListParams as ACHTransferListParams,
  };

  export {
    ACHPrenotifications as ACHPrenotifications,
    type ACHPrenotification as ACHPrenotification,
    ACHPrenotificationsPage as ACHPrenotificationsPage,
    type ACHPrenotificationCreateParams as ACHPrenotificationCreateParams,
    type ACHPrenotificationListParams as ACHPrenotificationListParams,
  };

  export {
    InboundACHTransfers as InboundACHTransfers,
    type InboundACHTransfer as InboundACHTransfer,
    InboundACHTransfersPage as InboundACHTransfersPage,
    type InboundACHTransferListParams as InboundACHTransferListParams,
    type InboundACHTransferCreateNotificationOfChangeParams as InboundACHTransferCreateNotificationOfChangeParams,
    type InboundACHTransferDeclineParams as InboundACHTransferDeclineParams,
    type InboundACHTransferTransferReturnParams as InboundACHTransferTransferReturnParams,
  };

  export {
    WireTransfers as WireTransfers,
    type WireTransfer as WireTransfer,
    WireTransfersPage as WireTransfersPage,
    type WireTransferCreateParams as WireTransferCreateParams,
    type WireTransferListParams as WireTransferListParams,
  };

  export {
    InboundWireTransfers as InboundWireTransfers,
    type InboundWireTransfer as InboundWireTransfer,
    InboundWireTransfersPage as InboundWireTransfersPage,
    type InboundWireTransferListParams as InboundWireTransferListParams,
  };

  export {
    WireDrawdownRequests as WireDrawdownRequests,
    type WireDrawdownRequest as WireDrawdownRequest,
    WireDrawdownRequestsPage as WireDrawdownRequestsPage,
    type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
    type WireDrawdownRequestListParams as WireDrawdownRequestListParams,
  };

  export {
    InboundWireDrawdownRequests as InboundWireDrawdownRequests,
    type InboundWireDrawdownRequest as InboundWireDrawdownRequest,
    InboundWireDrawdownRequestsPage as InboundWireDrawdownRequestsPage,
    type InboundWireDrawdownRequestListParams as InboundWireDrawdownRequestListParams,
  };

  export {
    CheckTransfers as CheckTransfers,
    type CheckTransfer as CheckTransfer,
    CheckTransfersPage as CheckTransfersPage,
    type CheckTransferCreateParams as CheckTransferCreateParams,
    type CheckTransferListParams as CheckTransferListParams,
    type CheckTransferStopPaymentParams as CheckTransferStopPaymentParams,
  };

  export {
    InboundCheckDeposits as InboundCheckDeposits,
    type InboundCheckDeposit as InboundCheckDeposit,
    InboundCheckDepositsPage as InboundCheckDepositsPage,
    type InboundCheckDepositListParams as InboundCheckDepositListParams,
    type InboundCheckDepositReturnParams as InboundCheckDepositReturnParams,
  };

  export {
    RealTimePaymentsTransfers as RealTimePaymentsTransfers,
    type RealTimePaymentsTransfer as RealTimePaymentsTransfer,
    RealTimePaymentsTransfersPage as RealTimePaymentsTransfersPage,
    type RealTimePaymentsTransferCreateParams as RealTimePaymentsTransferCreateParams,
    type RealTimePaymentsTransferListParams as RealTimePaymentsTransferListParams,
  };

  export {
    InboundRealTimePaymentsTransfers as InboundRealTimePaymentsTransfers,
    type InboundRealTimePaymentsTransfer as InboundRealTimePaymentsTransfer,
    InboundRealTimePaymentsTransfersPage as InboundRealTimePaymentsTransfersPage,
    type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams,
  };

  export {
    CheckDeposits as CheckDeposits,
    type CheckDeposit as CheckDeposit,
    CheckDepositsPage as CheckDepositsPage,
    type CheckDepositCreateParams as CheckDepositCreateParams,
    type CheckDepositListParams as CheckDepositListParams,
  };

  export {
    Lockboxes as Lockboxes,
    type Lockbox as Lockbox,
    LockboxesPage as LockboxesPage,
    type LockboxCreateParams as LockboxCreateParams,
    type LockboxUpdateParams as LockboxUpdateParams,
    type LockboxListParams as LockboxListParams,
  };

  export {
    InboundMailItems as InboundMailItems,
    type InboundMailItem as InboundMailItem,
    InboundMailItemsPage as InboundMailItemsPage,
    type InboundMailItemListParams as InboundMailItemListParams,
  };

  export {
    RoutingNumbers as RoutingNumbers,
    type RoutingNumberListResponse as RoutingNumberListResponse,
    RoutingNumberListResponsesPage as RoutingNumberListResponsesPage,
    type RoutingNumberListParams as RoutingNumberListParams,
  };

  export {
    ExternalAccounts as ExternalAccounts,
    type ExternalAccount as ExternalAccount,
    ExternalAccountsPage as ExternalAccountsPage,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
    type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
    type ExternalAccountListParams as ExternalAccountListParams,
  };

  export {
    Entities as Entities,
    type Entity as Entity,
    EntitiesPage as EntitiesPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityListParams as EntityListParams,
    type EntityArchiveBeneficialOwnerParams as EntityArchiveBeneficialOwnerParams,
    type EntityConfirmParams as EntityConfirmParams,
    type EntityCreateBeneficialOwnerParams as EntityCreateBeneficialOwnerParams,
    type EntityUpdateAddressParams as EntityUpdateAddressParams,
    type EntityUpdateBeneficialOwnerAddressParams as EntityUpdateBeneficialOwnerAddressParams,
    type EntityUpdateIndustryCodeParams as EntityUpdateIndustryCodeParams,
  };

  export {
    SupplementalDocuments as SupplementalDocuments,
    type EntitySupplementalDocument as EntitySupplementalDocument,
    EntitySupplementalDocumentsPage as EntitySupplementalDocumentsPage,
    type SupplementalDocumentCreateParams as SupplementalDocumentCreateParams,
    type SupplementalDocumentListParams as SupplementalDocumentListParams,
  };

  export {
    Programs as Programs,
    type Program as Program,
    ProgramsPage as ProgramsPage,
    type ProgramListParams as ProgramListParams,
  };

  export {
    ProofOfAuthorizationRequests as ProofOfAuthorizationRequests,
    type ProofOfAuthorizationRequest as ProofOfAuthorizationRequest,
    ProofOfAuthorizationRequestsPage as ProofOfAuthorizationRequestsPage,
    type ProofOfAuthorizationRequestListParams as ProofOfAuthorizationRequestListParams,
  };

  export {
    ProofOfAuthorizationRequestSubmissions as ProofOfAuthorizationRequestSubmissions,
    type ProofOfAuthorizationRequestSubmission as ProofOfAuthorizationRequestSubmission,
    ProofOfAuthorizationRequestSubmissionsPage as ProofOfAuthorizationRequestSubmissionsPage,
    type ProofOfAuthorizationRequestSubmissionCreateParams as ProofOfAuthorizationRequestSubmissionCreateParams,
    type ProofOfAuthorizationRequestSubmissionListParams as ProofOfAuthorizationRequestSubmissionListParams,
  };

  export {
    AccountStatements as AccountStatements,
    type AccountStatement as AccountStatement,
    AccountStatementsPage as AccountStatementsPage,
    type AccountStatementListParams as AccountStatementListParams,
  };

  export {
    Files as Files,
    type File as File,
    FilesPage as FilesPage,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };

  export {
    Documents as Documents,
    type Document as Document,
    DocumentsPage as DocumentsPage,
    type DocumentListParams as DocumentListParams,
  };

  export {
    Exports as Exports,
    type Export as Export,
    ExportsPage as ExportsPage,
    type ExportCreateParams as ExportCreateParams,
    type ExportListParams as ExportListParams,
  };

  export {
    Events as Events,
    type Event as Event,
    EventsPage as EventsPage,
    type EventListParams as EventListParams,
  };

  export {
    EventSubscriptions as EventSubscriptions,
    type EventSubscription as EventSubscription,
    EventSubscriptionsPage as EventSubscriptionsPage,
    type EventSubscriptionCreateParams as EventSubscriptionCreateParams,
    type EventSubscriptionUpdateParams as EventSubscriptionUpdateParams,
    type EventSubscriptionListParams as EventSubscriptionListParams,
  };

  export {
    RealTimeDecisions as RealTimeDecisions,
    type RealTimeDecision as RealTimeDecision,
    type RealTimeDecisionActionParams as RealTimeDecisionActionParams,
  };

  export {
    BookkeepingAccounts as BookkeepingAccounts,
    type BookkeepingAccount as BookkeepingAccount,
    type BookkeepingBalanceLookup as BookkeepingBalanceLookup,
    BookkeepingAccountsPage as BookkeepingAccountsPage,
    type BookkeepingAccountCreateParams as BookkeepingAccountCreateParams,
    type BookkeepingAccountUpdateParams as BookkeepingAccountUpdateParams,
    type BookkeepingAccountListParams as BookkeepingAccountListParams,
    type BookkeepingAccountBalanceParams as BookkeepingAccountBalanceParams,
  };

  export {
    BookkeepingEntrySets as BookkeepingEntrySets,
    type BookkeepingEntrySet as BookkeepingEntrySet,
    BookkeepingEntrySetsPage as BookkeepingEntrySetsPage,
    type BookkeepingEntrySetCreateParams as BookkeepingEntrySetCreateParams,
    type BookkeepingEntrySetListParams as BookkeepingEntrySetListParams,
  };

  export {
    BookkeepingEntries as BookkeepingEntries,
    type BookkeepingEntry as BookkeepingEntry,
    BookkeepingEntriesPage as BookkeepingEntriesPage,
    type BookkeepingEntryListParams as BookkeepingEntryListParams,
  };

  export { Groups as Groups, type Group as Group };

  export {
    OAuthApplications as OAuthApplications,
    type OAuthApplication as OAuthApplication,
    OAuthApplicationsPage as OAuthApplicationsPage,
    type OAuthApplicationListParams as OAuthApplicationListParams,
  };

  export {
    OAuthConnections as OAuthConnections,
    type OAuthConnection as OAuthConnection,
    OAuthConnectionsPage as OAuthConnectionsPage,
    type OAuthConnectionListParams as OAuthConnectionListParams,
  };

  export {
    OAuthTokens as OAuthTokens,
    type OAuthToken as OAuthToken,
    type OAuthTokenCreateParams as OAuthTokenCreateParams,
  };

  export {
    IntrafiAccountEnrollments as IntrafiAccountEnrollments,
    type IntrafiAccountEnrollment as IntrafiAccountEnrollment,
    IntrafiAccountEnrollmentsPage as IntrafiAccountEnrollmentsPage,
    type IntrafiAccountEnrollmentCreateParams as IntrafiAccountEnrollmentCreateParams,
    type IntrafiAccountEnrollmentListParams as IntrafiAccountEnrollmentListParams,
  };

  export { IntrafiBalances as IntrafiBalances, type IntrafiBalance as IntrafiBalance };

  export {
    IntrafiExclusions as IntrafiExclusions,
    type IntrafiExclusion as IntrafiExclusion,
    IntrafiExclusionsPage as IntrafiExclusionsPage,
    type IntrafiExclusionCreateParams as IntrafiExclusionCreateParams,
    type IntrafiExclusionListParams as IntrafiExclusionListParams,
  };

  export {
    RealTimePaymentsRequestForPayments as RealTimePaymentsRequestForPayments,
    type RealTimePaymentsRequestForPayment as RealTimePaymentsRequestForPayment,
    RealTimePaymentsRequestForPaymentsPage as RealTimePaymentsRequestForPaymentsPage,
    type RealTimePaymentsRequestForPaymentCreateParams as RealTimePaymentsRequestForPaymentCreateParams,
    type RealTimePaymentsRequestForPaymentListParams as RealTimePaymentsRequestForPaymentListParams,
  };

  export { Webhooks as Webhooks };

  export { Simulations as Simulations };
}

export { toFile, fileFromPath } from './uploads';
export {
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
  InsufficientPermissionsError,
  IdempotencyKeyAlreadyUsedError,
} from './error';

export default Increase;
