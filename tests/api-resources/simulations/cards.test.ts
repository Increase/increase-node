// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  test('authorize: only required params', async () => {
    const responsePromise = increase.simulations.cards.authorize({ amount: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('authorize: required and optional params', async () => {
    const response = await increase.simulations.cards.authorize({
      amount: 1,
      card_id: 'string',
      digital_wallet_token_id: 'string',
      event_subscription_id: 'string',
      physical_card_id: 'string',
    });
  });

  test('settlement: only required params', async () => {
    const responsePromise = increase.simulations.cards.settlement({
      card_id: 'string',
      pending_transaction_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('settlement: required and optional params', async () => {
    const response = await increase.simulations.cards.settlement({
      card_id: 'string',
      pending_transaction_id: 'string',
      amount: 1,
    });
  });
});
