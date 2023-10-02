// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bookkeepingEntrySets', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.bookkeepingEntrySets.create({
      entries: [
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await increase.bookkeepingEntrySets.create({
      entries: [
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
      ],
      date: '2019-12-27T18:11:19.117Z',
      transaction_id: 'string',
    });
  });
});
