// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { AccountTransfers } from './account-transfers';
import { AccountStatements } from './account-statements';
import { ACHTransfers } from './ach-transfers';
import { CardDisputes } from './card-disputes';
import { CardRefunds } from './card-refunds';
import { CheckTransfers } from './check-transfers';
import { Documents } from './documents';
import { DigitalWalletTokenRequests } from './digital-wallet-token-requests';
import { CheckDeposits } from './check-deposits';
import { InboundWireDrawdownRequests } from './inbound-wire-drawdown-requests';
import { WireTransfers } from './wire-transfers';
import { Cards } from './cards';
import { RealTimePaymentsTransfers } from './real-time-payments-transfers';

export class Simulations extends APIResource {
  accountTransfers: AccountTransfers = new AccountTransfers(this.client);
  accountStatements: AccountStatements = new AccountStatements(this.client);
  achTransfers: ACHTransfers = new ACHTransfers(this.client);
  cardDisputes: CardDisputes = new CardDisputes(this.client);
  cardRefunds: CardRefunds = new CardRefunds(this.client);
  checkTransfers: CheckTransfers = new CheckTransfers(this.client);
  documents: Documents = new Documents(this.client);
  digitalWalletTokenRequests: DigitalWalletTokenRequests = new DigitalWalletTokenRequests(this.client);
  checkDeposits: CheckDeposits = new CheckDeposits(this.client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequests = new InboundWireDrawdownRequests(this.client);
  wireTransfers: WireTransfers = new WireTransfers(this.client);
  cards: Cards = new Cards(this.client);
  realTimePaymentsTransfers: RealTimePaymentsTransfers = new RealTimePaymentsTransfers(this.client);
}
