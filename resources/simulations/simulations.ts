// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core'
import { APIResource } from '~/resource'
import type * as FormData from 'formdata-node'
import { multipartFormRequestOptions, maybeMultipartFormRequestOptions } from '~/core'
import { isRequestOptions } from '~/core'
import { AccountTransfers } from './account-transfers'
import { AccountStatements } from './account-statements'
import { ACHTransfers } from './ach-transfers'
import { CheckTransfers } from './check-transfers'
import { DigitalWalletTokenRequests } from './digital-wallet-token-requests'
import { CheckDeposits } from './check-deposits'
import { WireTransfers } from './wire-transfers'
import { Cards } from './cards'
import { RealTimePaymentsTransfers } from './real-time-payments-transfers'
import * as Shared from '~/resources/shared'

export class Simulations extends APIResource {
  accountTransfers: AccountTransfers = new AccountTransfers(this.client);
  accountStatements: AccountStatements = new AccountStatements(this.client);
  achTransfers: ACHTransfers = new ACHTransfers(this.client);
  checkTransfers: CheckTransfers = new CheckTransfers(this.client);
  digitalWalletTokenRequests: DigitalWalletTokenRequests = new DigitalWalletTokenRequests(this.client);
  checkDeposits: CheckDeposits = new CheckDeposits(this.client);
  wireTransfers: WireTransfers = new WireTransfers(this.client);
  cards: Cards = new Cards(this.client);
  realTimePaymentsTransfers: RealTimePaymentsTransfers = new RealTimePaymentsTransfers(this.client);

}