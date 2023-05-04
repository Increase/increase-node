// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource accountTransfers', () => {
  test('create: only required params', async () => {
    const response = await increase.accountTransfers.create({
      account_id: 'string',
      amount: 1,
      description: 'x',
      destination_account_id: 'string',
      require_approval: true,
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.accountTransfers.create({
      account_id: 'string',
      amount: 1,
      description: 'x',
      destination_account_id: 'string',
      require_approval: true,
    });
  });

  test('retrieve', async () => {
    const response = await increase.accountTransfers.retrieve('account_transfer_7k9qe1ysdgqztnt63l7n');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountTransfers.retrieve('account_transfer_7k9qe1ysdgqztnt63l7n', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.accountTransfers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountTransfers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountTransfers.list(
        {
          account_id: 'string',
          'created_at.after': '2019-12-27T18:11:19.117Z',
          'created_at.before': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_after': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_before': '2019-12-27T18:11:19.117Z',
          cursor: 'string',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const response = await increase.accountTransfers.approve('account_transfer_7k9qe1ysdgqztnt63l7n');
  });

  test('approve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountTransfers.approve('account_transfer_7k9qe1ysdgqztnt63l7n', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const response = await increase.accountTransfers.cancel('account_transfer_7k9qe1ysdgqztnt63l7n');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountTransfers.cancel('account_transfer_7k9qe1ysdgqztnt63l7n', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
