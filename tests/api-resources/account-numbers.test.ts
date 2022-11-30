// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource account_numbers', () => {
  test('create', async () => {
    const response = await increase.accountNumbers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      name: 'Rent payments',
    });
  });

  test('retrieve', async () => {
    const response = await increase.accountNumbers.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accountNumbers.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await increase.accountNumbers.update('string', {});
  });

  test('update: required and optional params', async () => {
    const response = await increase.accountNumbers.update('string', { name: 'x', status: 'disabled' });
  });

  test('list: only required params', async () => {
    const response = await increase.accountNumbers.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.accountNumbers.list({
      cursor: 'string',
      limit: 0,
      status: 'active',
      account_id: 'string',
    });
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
        { cursor: 'string', limit: 0, status: 'active', account_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
