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

  test('retrieve', async () => {
    const responsePromise = increase.bookkeepingEntrySets.retrieve(
      'bookkeeping_entry_set_n80c6wr2p8gtc6p4ingf',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.bookkeepingEntrySets.retrieve('bookkeeping_entry_set_n80c6wr2p8gtc6p4ingf', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.bookkeepingEntrySets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.bookkeepingEntrySets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.bookkeepingEntrySets.list(
        { cursor: 'string', idempotency_key: 'x', limit: 1, transaction_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
