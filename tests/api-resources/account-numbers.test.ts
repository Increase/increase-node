// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource account_numbers', () => {
  test('create: only required params', async () => {
    const response = await increase.accountNumbers.create({ account_id: 'string', name: 'x' });
  });

  test('create: required and optional params', async () => {
    const response = await increase.accountNumbers.create({ account_id: 'string', name: 'x' });
  });

  test('retrieve', async () => {
    const response = await increase.accountNumbers.retrieve('account_number_v18nkfqm6afpsrvy82b2');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountNumbers.retrieve('account_number_v18nkfqm6afpsrvy82b2', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update', async () => {
    const response = await increase.accountNumbers.update('account_number_v18nkfqm6afpsrvy82b2', {
      name: 'x',
      status: 'active',
    });
  });

  test('list', async () => {
    const response = await increase.accountNumbers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountNumbers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountNumbers.list(
        { account_id: 'string', cursor: 'string', limit: 0, status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
