// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simulations', () => {
  test('cardAuthorizationExpirations: only required params', async () => {
    const responsePromise = increase.simulations.cardAuthorizationExpirations({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cardAuthorizationExpirations: required and optional params', async () => {
    const response = await increase.simulations.cardAuthorizationExpirations({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
  });

  test('cardFuelConfirmations: only required params', async () => {
    const responsePromise = increase.simulations.cardFuelConfirmations({
      amount: 5000,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cardFuelConfirmations: required and optional params', async () => {
    const response = await increase.simulations.cardFuelConfirmations({
      amount: 5000,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
  });

  test('cardIncrements: only required params', async () => {
    const responsePromise = increase.simulations.cardIncrements({
      amount: 500,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cardIncrements: required and optional params', async () => {
    const response = await increase.simulations.cardIncrements({
      amount: 500,
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
      event_subscription_id: 'string',
    });
  });

  test('cardReversals: only required params', async () => {
    const responsePromise = increase.simulations.cardReversals({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cardReversals: required and optional params', async () => {
    const response = await increase.simulations.cardReversals({
      card_payment_id: 'card_payment_nd3k2kacrqjli8482ave',
      amount: 1,
    });
  });
});
