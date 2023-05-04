// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource bookkeepingAccounts', () => {
  test('create: only required params', async () => {
    const response = await increase.bookkeepingAccounts.create({
      account_id: 'string',
      compliance_category: 'commingled_cash',
      entity_id: 'string',
      name: 'x',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.bookkeepingAccounts.create({
      account_id: 'string',
      compliance_category: 'commingled_cash',
      entity_id: 'string',
      name: 'x',
    });
  });

  test('list', async () => {
    const response = await increase.bookkeepingAccounts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.bookkeepingAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.bookkeepingAccounts.list({ cursor: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
