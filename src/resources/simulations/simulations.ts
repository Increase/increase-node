// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountStatementsAPI from './account-statements';
import * as AccountTransfersAPI from './account-transfers';
import * as ACHTransfersAPI from './ach-transfers';
import * as CardAuthorizationExpirationsAPI from './card-authorization-expirations';
import * as CardAuthorizationsAPI from './card-authorizations';
import * as CardDisputesAPI from './card-disputes';
import * as CardFuelConfirmationsAPI from './card-fuel-confirmations';
import * as CardIncrementsAPI from './card-increments';
import * as CardRefundsAPI from './card-refunds';
import * as CardReversalsAPI from './card-reversals';
import * as CardSettlementsAPI from './card-settlements';
import * as CheckDepositsAPI from './check-deposits';
import * as CheckTransfersAPI from './check-transfers';
import * as DigitalWalletTokenRequestsAPI from './digital-wallet-token-requests';
import * as DocumentsAPI from './documents';
import * as InboundACHTransfersAPI from './inbound-ach-transfers';
import * as InboundCheckDepositsAPI from './inbound-check-deposits';
import * as InboundFundsHoldsAPI from './inbound-funds-holds';
import * as InboundMailItemsAPI from './inbound-mail-items';
import * as InboundRealTimePaymentsTransfersAPI from './inbound-real-time-payments-transfers';
import * as InboundWireDrawdownRequestsAPI from './inbound-wire-drawdown-requests';
import * as InboundWireTransfersAPI from './inbound-wire-transfers';
import * as InterestPaymentsAPI from './interest-payments';
import * as PhysicalCardsAPI from './physical-cards';
import * as ProgramsAPI from './programs';
import * as RealTimePaymentsTransfersAPI from './real-time-payments-transfers';
import * as WireTransfersAPI from './wire-transfers';

export class Simulations extends APIResource {
  interestPayments: InterestPaymentsAPI.InterestPayments = new InterestPaymentsAPI.InterestPayments(
    this._client,
  );
  cardAuthorizations: CardAuthorizationsAPI.CardAuthorizations = new CardAuthorizationsAPI.CardAuthorizations(
    this._client,
  );
  cardAuthorizationExpirations: CardAuthorizationExpirationsAPI.CardAuthorizationExpirations =
    new CardAuthorizationExpirationsAPI.CardAuthorizationExpirations(this._client);
  cardSettlements: CardSettlementsAPI.CardSettlements = new CardSettlementsAPI.CardSettlements(this._client);
  cardReversals: CardReversalsAPI.CardReversals = new CardReversalsAPI.CardReversals(this._client);
  cardIncrements: CardIncrementsAPI.CardIncrements = new CardIncrementsAPI.CardIncrements(this._client);
  cardFuelConfirmations: CardFuelConfirmationsAPI.CardFuelConfirmations =
    new CardFuelConfirmationsAPI.CardFuelConfirmations(this._client);
  cardRefunds: CardRefundsAPI.CardRefunds = new CardRefundsAPI.CardRefunds(this._client);
  cardDisputes: CardDisputesAPI.CardDisputes = new CardDisputesAPI.CardDisputes(this._client);
  physicalCards: PhysicalCardsAPI.PhysicalCards = new PhysicalCardsAPI.PhysicalCards(this._client);
  digitalWalletTokenRequests: DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests =
    new DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests(this._client);
  inboundFundsHolds: InboundFundsHoldsAPI.InboundFundsHolds = new InboundFundsHoldsAPI.InboundFundsHolds(
    this._client,
  );
  accountTransfers: AccountTransfersAPI.AccountTransfers = new AccountTransfersAPI.AccountTransfers(
    this._client,
  );
  achTransfers: ACHTransfersAPI.ACHTransfers = new ACHTransfersAPI.ACHTransfers(this._client);
  inboundACHTransfers: InboundACHTransfersAPI.InboundACHTransfers =
    new InboundACHTransfersAPI.InboundACHTransfers(this._client);
  wireTransfers: WireTransfersAPI.WireTransfers = new WireTransfersAPI.WireTransfers(this._client);
  inboundWireTransfers: InboundWireTransfersAPI.InboundWireTransfers =
    new InboundWireTransfersAPI.InboundWireTransfers(this._client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests =
    new InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests(this._client);
  checkTransfers: CheckTransfersAPI.CheckTransfers = new CheckTransfersAPI.CheckTransfers(this._client);
  inboundCheckDeposits: InboundCheckDepositsAPI.InboundCheckDeposits =
    new InboundCheckDepositsAPI.InboundCheckDeposits(this._client);
  realTimePaymentsTransfers: RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers =
    new RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers(this._client);
  inboundRealTimePaymentsTransfers: InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfers =
    new InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfers(this._client);
  checkDeposits: CheckDepositsAPI.CheckDeposits = new CheckDepositsAPI.CheckDeposits(this._client);
  inboundMailItems: InboundMailItemsAPI.InboundMailItems = new InboundMailItemsAPI.InboundMailItems(
    this._client,
  );
  programs: ProgramsAPI.Programs = new ProgramsAPI.Programs(this._client);
  accountStatements: AccountStatementsAPI.AccountStatements = new AccountStatementsAPI.AccountStatements(
    this._client,
  );
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
}

export namespace Simulations {
  export import InterestPayments = InterestPaymentsAPI.InterestPayments;
  export import InterestPaymentCreateParams = InterestPaymentsAPI.InterestPaymentCreateParams;
  export import CardAuthorizations = CardAuthorizationsAPI.CardAuthorizations;
  export import CardAuthorizationCreateResponse = CardAuthorizationsAPI.CardAuthorizationCreateResponse;
  export import CardAuthorizationCreateParams = CardAuthorizationsAPI.CardAuthorizationCreateParams;
  export import CardAuthorizationExpirations = CardAuthorizationExpirationsAPI.CardAuthorizationExpirations;
  export import CardAuthorizationExpirationCreateParams = CardAuthorizationExpirationsAPI.CardAuthorizationExpirationCreateParams;
  export import CardSettlements = CardSettlementsAPI.CardSettlements;
  export import CardSettlementCreateParams = CardSettlementsAPI.CardSettlementCreateParams;
  export import CardReversals = CardReversalsAPI.CardReversals;
  export import CardReversalCreateParams = CardReversalsAPI.CardReversalCreateParams;
  export import CardIncrements = CardIncrementsAPI.CardIncrements;
  export import CardIncrementCreateParams = CardIncrementsAPI.CardIncrementCreateParams;
  export import CardFuelConfirmations = CardFuelConfirmationsAPI.CardFuelConfirmations;
  export import CardFuelConfirmationCreateParams = CardFuelConfirmationsAPI.CardFuelConfirmationCreateParams;
  export import CardRefunds = CardRefundsAPI.CardRefunds;
  export import CardRefundCreateParams = CardRefundsAPI.CardRefundCreateParams;
  export import CardDisputes = CardDisputesAPI.CardDisputes;
  export import CardDisputeActionParams = CardDisputesAPI.CardDisputeActionParams;
  export import PhysicalCards = PhysicalCardsAPI.PhysicalCards;
  export import PhysicalCardAdvanceShipmentParams = PhysicalCardsAPI.PhysicalCardAdvanceShipmentParams;
  export import DigitalWalletTokenRequests = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests;
  export import DigitalWalletTokenRequestCreateResponse = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateResponse;
  export import DigitalWalletTokenRequestCreateParams = DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequestCreateParams;
  export import InboundFundsHolds = InboundFundsHoldsAPI.InboundFundsHolds;
  export import InboundFundsHoldReleaseResponse = InboundFundsHoldsAPI.InboundFundsHoldReleaseResponse;
  export import AccountTransfers = AccountTransfersAPI.AccountTransfers;
  export import ACHTransfers = ACHTransfersAPI.ACHTransfers;
  export import ACHTransferCreateNotificationOfChangeParams = ACHTransfersAPI.ACHTransferCreateNotificationOfChangeParams;
  export import ACHTransferReturnParams = ACHTransfersAPI.ACHTransferReturnParams;
  export import InboundACHTransfers = InboundACHTransfersAPI.InboundACHTransfers;
  export import InboundACHTransferCreateParams = InboundACHTransfersAPI.InboundACHTransferCreateParams;
  export import WireTransfers = WireTransfersAPI.WireTransfers;
  export import InboundWireTransfers = InboundWireTransfersAPI.InboundWireTransfers;
  export import InboundWireTransferCreateParams = InboundWireTransfersAPI.InboundWireTransferCreateParams;
  export import InboundWireDrawdownRequests = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests;
  export import InboundWireDrawdownRequestCreateParams = InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequestCreateParams;
  export import CheckTransfers = CheckTransfersAPI.CheckTransfers;
  export import InboundCheckDeposits = InboundCheckDepositsAPI.InboundCheckDeposits;
  export import InboundCheckDepositCreateParams = InboundCheckDepositsAPI.InboundCheckDepositCreateParams;
  export import RealTimePaymentsTransfers = RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers;
  export import RealTimePaymentsTransferCompleteParams = RealTimePaymentsTransfersAPI.RealTimePaymentsTransferCompleteParams;
  export import InboundRealTimePaymentsTransfers = InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfers;
  export import InboundRealTimePaymentsTransferCreateParams = InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransferCreateParams;
  export import CheckDeposits = CheckDepositsAPI.CheckDeposits;
  export import InboundMailItems = InboundMailItemsAPI.InboundMailItems;
  export import InboundMailItemCreateParams = InboundMailItemsAPI.InboundMailItemCreateParams;
  export import Programs = ProgramsAPI.Programs;
  export import ProgramCreateParams = ProgramsAPI.ProgramCreateParams;
  export import AccountStatements = AccountStatementsAPI.AccountStatements;
  export import AccountStatementCreateParams = AccountStatementsAPI.AccountStatementCreateParams;
  export import Documents = DocumentsAPI.Documents;
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
}
