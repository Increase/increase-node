// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'increase/resource';
import { AccountTransfers } from './account-transfers';
import { AccountStatements } from './account-statements';
import { ACHTransfers } from './ach-transfers';
import { CardDisputes } from './card-disputes';
import { CardProfiles } from './card-profiles';
import { CardRefunds } from './card-refunds';
import { CheckTransfers } from './check-transfers';
import { Documents } from './documents';
import { DigitalWalletTokenRequests } from './digital-wallet-token-requests';
import { CheckDeposits } from './check-deposits';
import { Programs } from './programs';
import { InboundWireDrawdownRequests } from './inbound-wire-drawdown-requests';
import { InboundFundsHolds } from './inbound-funds-holds';
import { InterestPayments } from './interest-payments';
import { WireTransfers } from './wire-transfers';
import { Cards } from './cards';
import { RealTimePaymentsTransfers } from './real-time-payments-transfers';
import * as API from './';

export class Simulations extends APIResource {
  accountTransfers: AccountTransfers = new AccountTransfers(this.client);
  accountStatements: AccountStatements = new AccountStatements(this.client);
  achTransfers: ACHTransfers = new ACHTransfers(this.client);
  cardDisputes: CardDisputes = new CardDisputes(this.client);
  cardProfiles: CardProfiles = new CardProfiles(this.client);
  cardRefunds: CardRefunds = new CardRefunds(this.client);
  checkTransfers: CheckTransfers = new CheckTransfers(this.client);
  documents: Documents = new Documents(this.client);
  digitalWalletTokenRequests: DigitalWalletTokenRequests = new DigitalWalletTokenRequests(this.client);
  checkDeposits: CheckDeposits = new CheckDeposits(this.client);
  programs: Programs = new Programs(this.client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequests = new InboundWireDrawdownRequests(this.client);
  inboundFundsHolds: InboundFundsHolds = new InboundFundsHolds(this.client);
  interestPayments: InterestPayments = new InterestPayments(this.client);
  wireTransfers: WireTransfers = new WireTransfers(this.client);
  cards: Cards = new Cards(this.client);
  realTimePaymentsTransfers: RealTimePaymentsTransfers = new RealTimePaymentsTransfers(this.client);
}

export namespace Simulations {
  export import AccountTransfers = API.AccountTransfers;

  export import AccountStatements = API.AccountStatements;
  export import AccountStatementCreateParams = API.AccountStatementCreateParams;

  export import ACHTransfers = API.ACHTransfers;
  export import ACHTransferSimulation = API.ACHTransferSimulation;
  export import ACHTransferCreateInboundParams = API.ACHTransferCreateInboundParams;
  export import ACHTransferReturnParams = API.ACHTransferReturnParams;

  export import CardDisputes = API.CardDisputes;
  export import CardDisputeActionParams = API.CardDisputeActionParams;

  export import CardProfiles = API.CardProfiles;

  export import CardRefunds = API.CardRefunds;
  export import CardRefundCreateParams = API.CardRefundCreateParams;

  export import CheckTransfers = API.CheckTransfers;

  export import Documents = API.Documents;
  export import DocumentCreateParams = API.DocumentCreateParams;

  export import DigitalWalletTokenRequests = API.DigitalWalletTokenRequests;
  export import DigitalWalletTokenRequestCreateResponse = API.DigitalWalletTokenRequestCreateResponse;
  export import DigitalWalletTokenRequestCreateParams = API.DigitalWalletTokenRequestCreateParams;

  export import CheckDeposits = API.CheckDeposits;

  export import Programs = API.Programs;
  export import ProgramCreateParams = API.ProgramCreateParams;

  export import InboundWireDrawdownRequests = API.InboundWireDrawdownRequests;
  export import InboundWireDrawdownRequestCreateParams = API.InboundWireDrawdownRequestCreateParams;

  export import InboundFundsHolds = API.InboundFundsHolds;
  export import InboundFundsHoldReleaseResponse = API.InboundFundsHoldReleaseResponse;

  export import InterestPayments = API.InterestPayments;
  export import InterestPaymentSimulationResult = API.InterestPaymentSimulationResult;
  export import InterestPaymentCreateParams = API.InterestPaymentCreateParams;

  export import WireTransfers = API.WireTransfers;
  export import WireTransferSimulation = API.WireTransferSimulation;
  export import WireTransferCreateInboundParams = API.WireTransferCreateInboundParams;

  export import Cards = API.Cards;
  export import CardAuthorizationSimulation = API.CardAuthorizationSimulation;
  export import CardAuthorizeParams = API.CardAuthorizeParams;
  export import CardSettlementParams = API.CardSettlementParams;

  export import RealTimePaymentsTransfers = API.RealTimePaymentsTransfers;
  export import InboundRealTimePaymentsTransferSimulationResult = API.InboundRealTimePaymentsTransferSimulationResult;
  export import RealTimePaymentsTransferCompleteParams = API.RealTimePaymentsTransferCompleteParams;
  export import RealTimePaymentsTransferCreateInboundParams = API.RealTimePaymentsTransferCreateInboundParams;
}
