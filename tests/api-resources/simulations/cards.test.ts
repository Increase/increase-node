// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cards', () => {
  test('authorize: only required params', async () => {
    const response = await increase.simulations.cards.authorize({
      amount: 1,
      card_id: 'string',
      digital_wallet_token_id: 'string',
    });
  });

  test('authorize: required and optional params', async () => {
    const response = await increase.simulations.cards.authorize({
      amount: 1,
      card_id: 'string',
      digital_wallet_token_id: 'string',
    });
  });

  test('settlement: only required params', async () => {
    const response = await increase.simulations.cards.settlement({
      amount: 1,
      card_id: 'string',
      pending_transaction_id: 'string',
    });
  });

  test('settlement: required and optional params', async () => {
    const response = await increase.simulations.cards.settlement({
      amount: 1,
      card_id: 'string',
      pending_transaction_id: 'string',
    });
  });
});
