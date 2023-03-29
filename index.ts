// File generated from our OpenAPI spec by Stainless.

import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import type { Agent } from 'http';
import * as FileFromPath from 'formdata-node/file-from-path';
import * as Errors from '~/error';

const environments = {
  production: 'https://api.increase.com',
  sandbox: 'https://sandbox.increase.com',
};

type Config = {
  /**
   * Defaults to process.env["INCREASE_API_KEY"].
   */
  apiKey?: string;
  environment?: keyof typeof environments;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
};

/** Instantiate the API Client. */
export class Increase extends Core.APIClient {
  apiKey: string;

  constructor(config?: Config) {
    const options: Config = {
      apiKey: process.env['INCREASE_API_KEY'] || '',
      environment: 'production',
      ...config,
    };

    if (!options.apiKey && options.apiKey !== null) {
      throw new Error(
        "The INCREASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Increase client with an apiKey option, like new Increase({ apiKey: 'my api key' }).",
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
    this.apiKey = options.apiKey;
    this.idempotencyHeader = 'Idempotency-Key';
  }

  accounts: API.Accounts = new API.Accounts(this);
  accountNumbers: API.AccountNumbers = new API.AccountNumbers(this);
  realTimeDecisions: API.RealTimeDecisions = new API.RealTimeDecisions(this);
  cards: API.Cards = new API.Cards(this);
  cardDisputes: API.CardDisputes = new API.CardDisputes(this);
  cardProfiles: API.CardProfiles = new API.CardProfiles(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  digitalWalletTokens: API.DigitalWalletTokens = new API.DigitalWalletTokens(this);
  transactions: API.Transactions = new API.Transactions(this);
  pendingTransactions: API.PendingTransactions = new API.PendingTransactions(this);
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

  protected override authHeaders(): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override makeStatusError(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const type = (error as Record<string, any>)?.['type'];

    if (type === 'invalid_parameters_error') {
      return new Errors.InvalidParametersError(status, error, message, headers);
    }

    if (type === 'malformed_request_error') {
      return new Errors.MalformedRequestError(status, error, message, headers);
    }

    if (type === 'invalid_api_key_error') {
      return new Errors.InvalidAPIKeyError(status, error, message, headers);
    }

    if (type === 'environment_mismatch_error') {
      return new Errors.EnvironmentMismatchError(status, error, message, headers);
    }

    if (type === 'insufficient_permissions_error') {
      return new Errors.InsufficientPermissionsError(status, error, message, headers);
    }

    if (type === 'private_feature_error') {
      return new Errors.PrivateFeatureError(status, error, message, headers);
    }

    if (type === 'api_method_not_found_error') {
      return new Errors.APIMethodNotFoundError(status, error, message, headers);
    }

    if (type === 'object_not_found_error') {
      return new Errors.ObjectNotFoundError(status, error, message, headers);
    }

    if (type === 'idempotency_conflict_error') {
      return new Errors.IdempotencyConflictError(status, error, message, headers);
    }

    if (type === 'invalid_operation_error') {
      return new Errors.InvalidOperationError(status, error, message, headers);
    }

    if (type === 'idempotency_unprocessable_error') {
      return new Errors.IdempotencyUnprocessableError(status, error, message, headers);
    }

    if (type === 'rate_limited_error') {
      return new Errors.RateLimitedError(status, error, message, headers);
    }

    if (type === 'internal_server_error') {
      return new Errors.InternalServerError(status, error, message, headers);
    }
    if (status === 500) {
      return new Errors.InternalServerError(
        status,
        { type: 'internal_server_error', title: '', detail: null, status: 500 },
        message,
        headers,
      );
    }

    return super.makeStatusError(status, error, message, headers);
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { allowDots: true, arrayFormat: 'comma' };
  }

  static APIError = Core.APIError;

  static APIConnectionError = Core.APIConnectionError;
  static APIConnectionTimeoutError = Core.APIConnectionTimeoutError;

  static BadRequestError = Core.BadRequestError;
  static AuthenticationError = Core.AuthenticationError;
  static PermissionDeniedError = Core.PermissionDeniedError;
  static NotFoundError = Core.NotFoundError;
  static ConflictError = Core.ConflictError;
  static UnprocessableEntityError = Core.UnprocessableEntityError;
  static RateLimitError = Core.RateLimitError;

  static RateLimitedError = Errors.RateLimitedError;
  static InvalidAPIKeyError = Errors.InvalidAPIKeyError;
  static InternalServerError = Errors.InternalServerError;
  static ObjectNotFoundError = Errors.ObjectNotFoundError;
  static PrivateFeatureError = Errors.PrivateFeatureError;
  static InvalidOperationError = Errors.InvalidOperationError;
  static MalformedRequestError = Errors.MalformedRequestError;
  static APIMethodNotFoundError = Errors.APIMethodNotFoundError;
  static InvalidParametersError = Errors.InvalidParametersError;
  static EnvironmentMismatchError = Errors.EnvironmentMismatchError;
  static IdempotencyConflictError = Errors.IdempotencyConflictError;
  static InsufficientPermissionsError = Errors.InsufficientPermissionsError;
  static IdempotencyUnprocessableError = Errors.IdempotencyUnprocessableError;
}

export const {
  APIError,

  APIConnectionError,
  APIConnectionTimeoutError,

  BadRequestError,
  AuthenticationError,
  PermissionDeniedError,
  NotFoundError,
  ConflictError,
  UnprocessableEntityError,
  RateLimitError,
} = Increase;

export const {
  RateLimitedError,
  InvalidAPIKeyError,
  InternalServerError,
  ObjectNotFoundError,
  PrivateFeatureError,
  InvalidOperationError,
  MalformedRequestError,
  APIMethodNotFoundError,
  InvalidParametersError,
  EnvironmentMismatchError,
  IdempotencyConflictError,
  InsufficientPermissionsError,
  IdempotencyUnprocessableError,
} = Errors;

export import fileFromPath = FileFromPath.fileFromPath;

export namespace Increase {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import Account = API.Account;
  export import AccountsPage = API.AccountsPage;
  export import AccountCreateParams = API.AccountCreateParams;
  export import AccountUpdateParams = API.AccountUpdateParams;
  export import AccountListParams = API.AccountListParams;

  export import AccountNumber = API.AccountNumber;
  export import AccountNumbersPage = API.AccountNumbersPage;
  export import AccountNumberCreateParams = API.AccountNumberCreateParams;
  export import AccountNumberUpdateParams = API.AccountNumberUpdateParams;
  export import AccountNumberListParams = API.AccountNumberListParams;

  export import RealTimeDecision = API.RealTimeDecision;
  export import RealTimeDecisionActionParams = API.RealTimeDecisionActionParams;

  export import Card = API.Card;
  export import CardDetails = API.CardDetails;
  export import CardsPage = API.CardsPage;
  export import CardCreateParams = API.CardCreateParams;
  export import CardUpdateParams = API.CardUpdateParams;
  export import CardListParams = API.CardListParams;

  export import CardDispute = API.CardDispute;
  export import CardDisputesPage = API.CardDisputesPage;
  export import CardDisputeCreateParams = API.CardDisputeCreateParams;
  export import CardDisputeListParams = API.CardDisputeListParams;

  export import CardProfile = API.CardProfile;
  export import CardProfilesPage = API.CardProfilesPage;
  export import CardProfileCreateParams = API.CardProfileCreateParams;
  export import CardProfileListParams = API.CardProfileListParams;

  export import ExternalAccount = API.ExternalAccount;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export import ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export import ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export import ExternalAccountListParams = API.ExternalAccountListParams;

  export import DigitalWalletToken = API.DigitalWalletToken;
  export import DigitalWalletTokensPage = API.DigitalWalletTokensPage;
  export import DigitalWalletTokenListParams = API.DigitalWalletTokenListParams;

  export import Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export import TransactionListParams = API.TransactionListParams;

  export import PendingTransaction = API.PendingTransaction;
  export import PendingTransactionsPage = API.PendingTransactionsPage;
  export import PendingTransactionListParams = API.PendingTransactionListParams;

  export import DeclinedTransaction = API.DeclinedTransaction;
  export import DeclinedTransactionsPage = API.DeclinedTransactionsPage;
  export import DeclinedTransactionListParams = API.DeclinedTransactionListParams;

  export import Limit = API.Limit;
  export import LimitsPage = API.LimitsPage;
  export import LimitCreateParams = API.LimitCreateParams;
  export import LimitUpdateParams = API.LimitUpdateParams;
  export import LimitListParams = API.LimitListParams;

  export import AccountTransfer = API.AccountTransfer;
  export import AccountTransfersPage = API.AccountTransfersPage;
  export import AccountTransferCreateParams = API.AccountTransferCreateParams;
  export import AccountTransferListParams = API.AccountTransferListParams;

  export import ACHTransfer = API.ACHTransfer;
  export import ACHTransfersPage = API.ACHTransfersPage;
  export import ACHTransferCreateParams = API.ACHTransferCreateParams;
  export import ACHTransferListParams = API.ACHTransferListParams;

  export import InboundACHTransferReturn = API.InboundACHTransferReturn;
  export import InboundACHTransferReturnsPage = API.InboundACHTransferReturnsPage;
  export import InboundACHTransferReturnCreateParams = API.InboundACHTransferReturnCreateParams;
  export import InboundACHTransferReturnListParams = API.InboundACHTransferReturnListParams;

  export import ACHPrenotification = API.ACHPrenotification;
  export import ACHPrenotificationsPage = API.ACHPrenotificationsPage;
  export import ACHPrenotificationCreateParams = API.ACHPrenotificationCreateParams;
  export import ACHPrenotificationListParams = API.ACHPrenotificationListParams;

  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentListParams = API.DocumentListParams;

  export import WireTransfer = API.WireTransfer;
  export import WireTransfersPage = API.WireTransfersPage;
  export import WireTransferCreateParams = API.WireTransferCreateParams;
  export import WireTransferListParams = API.WireTransferListParams;

  export import CheckTransfer = API.CheckTransfer;
  export import CheckTransfersPage = API.CheckTransfersPage;
  export import CheckTransferCreateParams = API.CheckTransferCreateParams;
  export import CheckTransferListParams = API.CheckTransferListParams;

  export import Entity = API.Entity;
  export import EntitiesPage = API.EntitiesPage;
  export import EntityCreateParams = API.EntityCreateParams;
  export import EntityListParams = API.EntityListParams;

  export import InboundWireDrawdownRequest = API.InboundWireDrawdownRequest;
  export import InboundWireDrawdownRequestsPage = API.InboundWireDrawdownRequestsPage;
  export import InboundWireDrawdownRequestListParams = API.InboundWireDrawdownRequestListParams;

  export import WireDrawdownRequest = API.WireDrawdownRequest;
  export import WireDrawdownRequestsPage = API.WireDrawdownRequestsPage;
  export import WireDrawdownRequestCreateParams = API.WireDrawdownRequestCreateParams;
  export import WireDrawdownRequestListParams = API.WireDrawdownRequestListParams;

  export import Event = API.Event;
  export import EventsPage = API.EventsPage;
  export import EventListParams = API.EventListParams;

  export import EventSubscription = API.EventSubscription;
  export import EventSubscriptionsPage = API.EventSubscriptionsPage;
  export import EventSubscriptionCreateParams = API.EventSubscriptionCreateParams;
  export import EventSubscriptionUpdateParams = API.EventSubscriptionUpdateParams;
  export import EventSubscriptionListParams = API.EventSubscriptionListParams;

  export import File = API.File;
  export import FilesPage = API.FilesPage;
  export import FileCreateParams = API.FileCreateParams;
  export import FileListParams = API.FileListParams;

  export import Group = API.Group;

  export import OauthConnection = API.OauthConnection;
  export import OauthConnectionsPage = API.OauthConnectionsPage;
  export import OauthConnectionListParams = API.OauthConnectionListParams;

  export import CheckDeposit = API.CheckDeposit;
  export import CheckDepositsPage = API.CheckDepositsPage;
  export import CheckDepositCreateParams = API.CheckDepositCreateParams;
  export import CheckDepositListParams = API.CheckDepositListParams;

  export import RoutingNumber = API.RoutingNumber;
  export import RoutingNumbersPage = API.RoutingNumbersPage;
  export import RoutingNumberListParams = API.RoutingNumberListParams;

  export import AccountStatement = API.AccountStatement;
  export import AccountStatementsPage = API.AccountStatementsPage;
  export import AccountStatementListParams = API.AccountStatementListParams;

  export import PointOfServiceEntryMode = API.PointOfServiceEntryMode;
}

exports = module.exports = Increase;
export default Increase;
