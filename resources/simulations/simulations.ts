// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '~/resource';
import { AccountTransfers } from './account-transfers';
import { ACHTransfers } from './ach-transfers';
import { CheckTransfers } from './check-transfers';
import { CheckDeposits } from './check-deposits';
import { WireTransfers } from './wire-transfers';
import { Cards } from './cards';
import { RealTimePaymentsTransfers } from './real-time-payments-transfers';

export class Simulations extends APIResource {
  accountTransfers: AccountTransfers = new AccountTransfers(this.client);
  achTransfers: ACHTransfers = new ACHTransfers(this.client);
  checkTransfers: CheckTransfers = new CheckTransfers(this.client);
  checkDeposits: CheckDeposits = new CheckDeposits(this.client);
  wireTransfers: WireTransfers = new WireTransfers(this.client);
  cards: Cards = new Cards(this.client);
  realTimePaymentsTransfers: RealTimePaymentsTransfers = new RealTimePaymentsTransfers(this.client);
}
