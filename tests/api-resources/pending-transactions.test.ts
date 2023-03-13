// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource pending_transactions', () => {
  test('retrieve', async () => {
    const response = await increase.pendingTransactions.retrieve('pending_transaction_k1sfetcau2qbvjbzgju4');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.pendingTransactions.retrieve('pending_transaction_k1sfetcau2qbvjbzgju4', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await increase.pendingTransactions.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.pendingTransactions.list({
      cursor: 'string',
      limit: 0,
      account_id: 'string',
      route_id: 'string',
      source_id: 'string',
      status: { in: ['pending', 'pending', 'pending'] },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.pendingTransactions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.pendingTransactions.list(
        {
          cursor: 'string',
          limit: 0,
          account_id: 'string',
          route_id: 'string',
          source_id: 'string',
          status: { in: ['pending', 'pending', 'pending'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
