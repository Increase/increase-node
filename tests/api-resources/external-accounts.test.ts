// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource externalAccounts', () => {
  test('create: only required params', async () => {
    const response = await increase.externalAccounts.create({
      account_number: 'x',
      description: 'x',
      routing_number: 'xxxxxxxxx',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.externalAccounts.create({
      account_number: 'x',
      description: 'x',
      routing_number: 'xxxxxxxxx',
      funding: 'checking',
    });
  });

  test('retrieve', async () => {
    const response = await increase.externalAccounts.retrieve('external_account_ukk55lr923a3ac0pp7iv');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.externalAccounts.retrieve('external_account_ukk55lr923a3ac0pp7iv', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update', async () => {
    const response = await increase.externalAccounts.update('external_account_ukk55lr923a3ac0pp7iv', {});
  });

  test('list', async () => {
    const response = await increase.externalAccounts.list();
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
      increase.externalAccounts.list(
        { cursor: 'string', limit: 0, status: { in: ['active', 'active', 'active'] } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
