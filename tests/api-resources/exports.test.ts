// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource exports', () => {
  test('create: only required params', async () => {
    const response = await increase.exports.create({
      balance_csv: {},
      category: 'transaction_csv',
      transaction_csv: {},
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.exports.create({
      balance_csv: {
        account_id: 'string',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      category: 'transaction_csv',
      transaction_csv: {
        account_id: 'string',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
    });
  });

  test('retrieve', async () => {
    const response = await increase.exports.retrieve('export_8s4m48qz3bclzje0zwh9');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.exports.retrieve('export_8s4m48qz3bclzje0zwh9', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.exports.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.exports.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.exports.list({ cursor: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
