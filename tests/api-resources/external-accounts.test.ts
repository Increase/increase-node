// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource external_accounts', () => {
  test('create: only required params', async () => {
    const response = await increase.externalAccounts.create({
      routing_number: '101050001',
      account_number: '987654321',
      description: 'Landlord',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.externalAccounts.create({
      routing_number: '101050001',
      account_number: '987654321',
      funding: 'checking',
      description: 'Landlord',
    });
  });

  test('retrieve', async () => {
    const response = await increase.externalAccounts.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.externalAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await increase.externalAccounts.update('string', {});
  });

  test('update: required and optional params', async () => {
    const response = await increase.externalAccounts.update('string', { description: 'New description' });
  });

  test('list: only required params', async () => {
    const response = await increase.externalAccounts.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.externalAccounts.list({ cursor: 'string', limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.externalAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.externalAccounts.list({ cursor: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
