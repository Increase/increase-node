// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bookkeepingEntrySets', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.bookkeepingEntrySets.create({
      entries: [
        { account_id: 'bookkeeping_account_9husfpw68pzmve9dvvc7', amount: 100 },
        { account_id: 'bookkeeping_account_t2obldz1rcu15zr54umg', amount: -100 },
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
        { account_id: 'bookkeeping_account_9husfpw68pzmve9dvvc7', amount: 100 },
        { account_id: 'bookkeeping_account_t2obldz1rcu15zr54umg', amount: -100 },
      ],
      date: '2020-01-31T23:59:59Z',
      transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
    });
  });
});
