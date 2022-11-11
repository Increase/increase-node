// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource digital_wallet_token_requests', () => {
  test('create: only required params', async () => {
    const response = await increase.simulations.digitalWalletTokenRequests.create({ card_id: 'card_oubs0hwk5rn6knuecxg2' })

  })

  test('create: required and optional params', async () => {
    const response = await increase.simulations.digitalWalletTokenRequests.create({ card_id: 'card_oubs0hwk5rn6knuecxg2' })
  })
})