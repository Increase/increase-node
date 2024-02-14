// File generated from our OpenAPI spec by Stainless.

import * as Core from 'increase/core';
import { APIResource } from 'increase/resource';
import * as SimulationsAPI from 'increase/resources/simulations/simulations';
import * as CardPaymentsAPI from 'increase/resources/card-payments';
import * as AccountStatementsAPI from 'increase/resources/simulations/account-statements';
import * as AccountTransfersAPI from 'increase/resources/simulations/account-transfers';
import * as ACHTransfersAPI from 'increase/resources/simulations/ach-transfers';
import * as CardDisputesAPI from 'increase/resources/simulations/card-disputes';
import * as CardRefundsAPI from 'increase/resources/simulations/card-refunds';
import * as CardsAPI from 'increase/resources/simulations/cards';
import * as CheckDepositsAPI from 'increase/resources/simulations/check-deposits';
import * as CheckTransfersAPI from 'increase/resources/simulations/check-transfers';
import * as DigitalWalletTokenRequestsAPI from 'increase/resources/simulations/digital-wallet-token-requests';
import * as DocumentsAPI from 'increase/resources/simulations/documents';
import * as InboundFundsHoldsAPI from 'increase/resources/simulations/inbound-funds-holds';
import * as InboundWireDrawdownRequestsAPI from 'increase/resources/simulations/inbound-wire-drawdown-requests';
import * as InterestPaymentsAPI from 'increase/resources/simulations/interest-payments';
import * as PhysicalCardsAPI from 'increase/resources/simulations/physical-cards';
import * as ProgramsAPI from 'increase/resources/simulations/programs';
import * as RealTimePaymentsTransfersAPI from 'increase/resources/simulations/real-time-payments-transfers';
import * as WireTransfersAPI from 'increase/resources/simulations/wire-transfers';

export class Simulations extends APIResource {
  accountTransfers: AccountTransfersAPI.AccountTransfers = new AccountTransfersAPI.AccountTransfers(
    this._client,
  );
  accountStatements: AccountStatementsAPI.AccountStatements = new AccountStatementsAPI.AccountStatements(
    this._client,
  );
  achTransfers: ACHTransfersAPI.ACHTransfers = new ACHTransfersAPI.ACHTransfers(this._client);
  cardDisputes: CardDisputesAPI.CardDisputes = new CardDisputesAPI.CardDisputes(this._client);
  cardRefunds: CardRefundsAPI.CardRefunds = new CardRefundsAPI.CardRefunds(this._client);
  checkTransfers: CheckTransfersAPI.CheckTransfers = new CheckTransfersAPI.CheckTransfers(this._client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
  digitalWalletTokenRequests: DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests =
    new DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests(this._client);
  checkDeposits: CheckDepositsAPI.CheckDeposits = new CheckDepositsAPI.CheckDeposits(this._client);
  programs: ProgramsAPI.Programs = new ProgramsAPI.Programs(this._client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests =
    new InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests(this._client);
  inboundFundsHolds: InboundFundsHoldsAPI.InboundFundsHolds = new InboundFundsHoldsAPI.InboundFundsHolds(
    this._client,
  );
  interestPayments: InterestPaymentsAPI.InterestPayments = new InterestPaymentsAPI.InterestPayments(
    this._client,
  );
  wireTransfers: WireTransfersAPI.WireTransfers = new WireTransfersAPI.WireTransfers(this._client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  realTimePaymentsTransfers: RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers =
    new RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers(this._client);
  physicalCards: PhysicalCardsAPI.PhysicalCards = new PhysicalCardsAPI.PhysicalCards(this._client);

  /**
   * Simulates expiring a card authorization immediately.
   */
  cardAuthorizationExpirations(
    body: SimulationCardAuthorizationExpirationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_authorization_expirations', { body, ...options });
  }

  /**
   * Simulates the fuel confirmation of an authorization by a card acquirer. This
   * happens asynchronously right after a fuel pump transaction is completed. A fuel
   * confirmation can only happen once per authorization.
   */
  cardFuelConfirmations(
    body: SimulationCardFuelConfirmationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_fuel_confirmations', { body, ...options });
  }

  /**
   * Simulates the increment of an authorization by a card acquirer. An authorization
   * can be incremented multiple times.
   */
  cardIncrements(
    body: SimulationCardIncrementsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_increments', { body, ...options });
  }

  /**
   * Simulates the reversal of an authorization by a card acquirer. An authorization
   * can be partially reversed multiple times, up until the total authorized amount.
   * Marks the pending transaction as complete if the authorization is fully
   * reversed.
   */
  cardReversals(
    body: SimulationCardReversalsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CardPaymentsAPI.CardPayment> {
    return this._client.post('/simulations/card_reversals', { body, ...options });
  }
}

export interface SimulationCardAuthorizationExpirationsParams {
  /**
   * The identifier of the Card Payment to expire.
   */
  card_payment_id: string;
}

export interface SimulationCardFuelConfirmationsParams {
  /**
   * The amount of the fuel_confirmation in minor units in the card authorization's
   * currency.
   */
  amount: number;

  /**
   * The identifier of the Card Payment to create a fuel_confirmation on.
   */
  card_payment_id: string;
}

export interface SimulationCardIncrementsParams {
  /**
   * The amount of the increment in minor units in the card authorization's currency.
   */
  amount: number;

  /**
   * The identifier of the Card Payment to create a increment on.
   */
  card_payment_id: string;

  /**
   * The identifier of the Event Subscription to use. If provided, will override the
   * default real time event subscription. Because you can only create one real time
   * decision event subscription, you can use this field to route events to any
   * specified event subscription for testing purposes.
   */
  event_subscription_id?: string;
}

export interface SimulationCardReversalsParams {
  /**
   * The identifier of the Card Payment to create a reversal on.
   */
  card_payment_id: string;

  /**
   * The amount of the reversal in minor units in the card authorization's currency.
   * This defaults to the authorization amount.
   */
  amount?: number;
}

export namespace Simulations {
  export import SimulationCardAuthorizationExpirationsParams = SimulationsAPI.SimulationCardAuthorizationExpirationsParams;
  export import SimulationCardFuelConfirmationsParams = SimulationsAPI.SimulationCardFuelConfirmationsParams;
  export import SimulationCardIncrementsParams = SimulationsAPI.SimulationCardIncrementsParams;
  export import SimulationCardReversalsParams = SimulationsAPI.SimulationCardReversalsParams;
  export import AccountTransfers = AccountTransfersAPI.AccountTransfers;
  export import AccountStatements = AccountStatementsAPI.AccountStatements;
  export import AccountStatementCreateParams = AccountStatementsAPI.AccountStatementCreateParams;
  export import ACHTransfers = ACHTransfersAPI.ACHTransfers;
  export import ACHTransferCreateInboundParams = ACHTransfersAPI.ACHTransferCreateInboundParams;
  export import ACHTransferReturnParams = ACHTransfersAPI.ACHTransferReturnParams;
  export import CardDisputes = CardDisputesAPI.CardDisputes;
  export import CardDisputeActionParams = CardDisputesAPI.CardDisputeActionParams;
  export import CardRefunds = CardRefundsAPI.CardRefunds;
  export import CardRefundCreateParams = CardRefundsAPI.CardRefundCreateParams;
  export import CheckTransfers = CheckTransfersAPI.CheckTransfers;
  export import Documents = DocumentsAPI.Documents;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DigitalWalletTokenRequests = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests;
  export import DigitalWalletTokenRequestCreateResponse = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateResponse;
  export import DigitalWalletTokenRequestCreateParams = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateParams;
  export import CheckDeposits = CheckDepositsAPI.CheckDeposits;
  export import Programs = ProgramsAPI.Programs;
  export import ProgramCreateParams = ProgramsAPI.ProgramCreateParams;
  export import InboundWireDrawdownRequests = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests;
  export import InboundWireDrawdownRequestCreateParams = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestCreateParams;
  export import InboundFundsHolds = InboundFundsHoldsAPI.InboundFundsHolds;
  export import InboundFundsHoldReleaseResponse = InboundFundsHoldsAPI.InboundFundsHoldReleaseResponse;
  export import InterestPayments = InterestPaymentsAPI.InterestPayments;
  export import InterestPaymentCreateParams = InterestPaymentsAPI.InterestPaymentCreateParams;
  export import WireTransfers = WireTransfersAPI.WireTransfers;
  export import WireTransferCreateInboundParams = WireTransfersAPI.WireTransferCreateInboundParams;
  export import Cards = CardsAPI.Cards;
  export import CardAuthorizationSimulation = CardsAPI.CardAuthorizationSimulation;
  export import CardAuthorizeParams = CardsAPI.CardAuthorizeParams;
  export import CardSettlementParams = CardsAPI.CardSettlementParams;
  export import RealTimePaymentsTransfers = RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers;
  export import InboundRealTimePaymentsTransferSimulationResult = RealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransferSimulationResult;
  export import RealTimePaymentsTransferCompleteParams = RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCompleteParams;
  export import RealTimePaymentsTransferCreateInboundParams = RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCreateInboundParams;
  export import PhysicalCards = PhysicalCardsAPI.PhysicalCards;
  export import PhysicalCardShipmentAdvanceParams = PhysicalCardsAPI.PhysicalCardShipmentAdvanceParams;
}
