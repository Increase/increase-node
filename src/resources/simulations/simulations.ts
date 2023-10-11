// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'increase/resource';
import * as AccountStatementsAPI from 'increase/resources/simulations/account-statements';
import * as AccountTransfersAPI from 'increase/resources/simulations/account-transfers';
import * as ACHTransfersAPI from 'increase/resources/simulations/ach-transfers';
import * as CardDisputesAPI from 'increase/resources/simulations/card-disputes';
import * as CardProfilesAPI from 'increase/resources/simulations/card-profiles';
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
    this.client,
  );
  accountStatements: AccountStatementsAPI.AccountStatements = new AccountStatementsAPI.AccountStatements(
    this.client,
  );
  achTransfers: ACHTransfersAPI.ACHTransfers = new ACHTransfersAPI.ACHTransfers(this.client);
  cardDisputes: CardDisputesAPI.CardDisputes = new CardDisputesAPI.CardDisputes(this.client);
  cardProfiles: CardProfilesAPI.CardProfiles = new CardProfilesAPI.CardProfiles(this.client);
  cardRefunds: CardRefundsAPI.CardRefunds = new CardRefundsAPI.CardRefunds(this.client);
  checkTransfers: CheckTransfersAPI.CheckTransfers = new CheckTransfersAPI.CheckTransfers(this.client);
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this.client);
  digitalWalletTokenRequests: DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests =
    new DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests(this.client);
  checkDeposits: CheckDepositsAPI.CheckDeposits = new CheckDepositsAPI.CheckDeposits(this.client);
  programs: ProgramsAPI.Programs = new ProgramsAPI.Programs(this.client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests =
    new InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests(this.client);
  inboundFundsHolds: InboundFundsHoldsAPI.InboundFundsHolds = new InboundFundsHoldsAPI.InboundFundsHolds(
    this.client,
  );
  interestPayments: InterestPaymentsAPI.InterestPayments = new InterestPaymentsAPI.InterestPayments(
    this.client,
  );
  wireTransfers: WireTransfersAPI.WireTransfers = new WireTransfersAPI.WireTransfers(this.client);
  cards: CardsAPI.Cards = new CardsAPI.Cards(this.client);
  realTimePaymentsTransfers: RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers =
    new RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers(this.client);
  physicalCards: PhysicalCardsAPI.PhysicalCards = new PhysicalCardsAPI.PhysicalCards(this.client);
}

export namespace Simulations {
  export import AccountTransfers = AccountTransfersAPI.AccountTransfers;
  export import AccountStatements = AccountStatementsAPI.AccountStatements;
  export type AccountStatementCreateParams = AccountStatementsAPI.AccountStatementCreateParams;
  export import ACHTransfers = ACHTransfersAPI.ACHTransfers;
  export type ACHTransferSimulation = ACHTransfersAPI.ACHTransferSimulation;
  export type ACHTransferCreateInboundParams = ACHTransfersAPI.ACHTransferCreateInboundParams;
  export type ACHTransferReturnParams = ACHTransfersAPI.ACHTransferReturnParams;
  export import CardDisputes = CardDisputesAPI.CardDisputes;
  export type CardDisputeActionParams = CardDisputesAPI.CardDisputeActionParams;
  export import CardProfiles = CardProfilesAPI.CardProfiles;
  export import CardRefunds = CardRefundsAPI.CardRefunds;
  export type CardRefundCreateParams = CardRefundsAPI.CardRefundCreateParams;
  export import CheckTransfers = CheckTransfersAPI.CheckTransfers;
  export import Documents = DocumentsAPI.Documents;
  export type DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import DigitalWalletTokenRequests = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests;
  export type DigitalWalletTokenRequestCreateResponse =
    DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateResponse;
  export type DigitalWalletTokenRequestCreateParams =
    DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateParams;
  export import CheckDeposits = CheckDepositsAPI.CheckDeposits;
  export import Programs = ProgramsAPI.Programs;
  export type ProgramCreateParams = ProgramsAPI.ProgramCreateParams;
  export import InboundWireDrawdownRequests = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests;
  export type InboundWireDrawdownRequestCreateParams =
    InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestCreateParams;
  export import InboundFundsHolds = InboundFundsHoldsAPI.InboundFundsHolds;
  export type InboundFundsHoldReleaseResponse = InboundFundsHoldsAPI.InboundFundsHoldReleaseResponse;
  export import InterestPayments = InterestPaymentsAPI.InterestPayments;
  export type InterestPaymentSimulationResult = InterestPaymentsAPI.InterestPaymentSimulationResult;
  export type InterestPaymentCreateParams = InterestPaymentsAPI.InterestPaymentCreateParams;
  export import WireTransfers = WireTransfersAPI.WireTransfers;
  export type WireTransferSimulation = WireTransfersAPI.WireTransferSimulation;
  export type WireTransferCreateInboundParams = WireTransfersAPI.WireTransferCreateInboundParams;
  export import Cards = CardsAPI.Cards;
  export type CardAuthorizationSimulation = CardsAPI.CardAuthorizationSimulation;
  export type CardAuthorizeParams = CardsAPI.CardAuthorizeParams;
  export type CardSettlementParams = CardsAPI.CardSettlementParams;
  export import RealTimePaymentsTransfers = RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers;
  export type InboundRealTimePaymentsTransferSimulationResult =
    RealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransferSimulationResult;
  export type RealTimePaymentsTransferCompleteParams =
    RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCompleteParams;
  export type RealTimePaymentsTransferCreateInboundParams =
    RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCreateInboundParams;
  export import PhysicalCards = PhysicalCardsAPI.PhysicalCards;
  export type PhysicalCardShipmentAdvanceParams = PhysicalCardsAPI.PhysicalCardShipmentAdvanceParams;
}
