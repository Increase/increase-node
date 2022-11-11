// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cards', () => {
  test('authorize: only required params', async () => {
    const response = await increase.simulations.cards.authorize({
      amount: 1000,
      card_id: 'card_oubs0hwk5rn6knuecxg2',
    });
  });

  test('authorize: required and optional params', async () => {
    const response = await increase.simulations.cards.authorize({
      amount: 1000,
      card_id: 'card_oubs0hwk5rn6knuecxg2',
    });
  });

  test('settlement: only required params', async () => {
    const response = await increase.simulations.cards.settlement({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      pending_transaction_id: 'pending_transaction_k1sfetcau2qbvjbzgju4',
    });
  });

  test('settlement: required and optional params', async () => {
    const response = await increase.simulations.cards.settlement({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      pending_transaction_id: 'pending_transaction_k1sfetcau2qbvjbzgju4',
      amount: 0,
    });
  });
});
