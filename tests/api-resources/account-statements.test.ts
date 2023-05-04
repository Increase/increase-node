// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource accountStatements', () => {
  test('retrieve', async () => {
    const response = await increase.accountStatements.retrieve('account_statement_lkc03a4skm2k7f38vj15');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountStatements.retrieve('account_statement_lkc03a4skm2k7f38vj15', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.accountStatements.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountStatements.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountStatements.list(
        {
          account_id: 'string',
          cursor: 'string',
          limit: 0,
          'statement_period_start.after': '2019-12-27T18:11:19.117Z',
          'statement_period_start.before': '2019-12-27T18:11:19.117Z',
          'statement_period_start.on_or_after': '2019-12-27T18:11:19.117Z',
          'statement_period_start.on_or_before': '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
