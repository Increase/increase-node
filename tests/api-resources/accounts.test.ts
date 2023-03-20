// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource accounts', () => {
  test('create: only required params', async () => {
    const response = await increase.accounts.create({ name: 'New Account!' });
  });

  test('create: required and optional params', async () => {
    const response = await increase.accounts.create({
      entity_id: 'string',
      program_id: 'string',
      informational_entity_id: 'string',
      name: 'New Account!',
    });
  });

  test('retrieve', async () => {
    const response = await increase.accounts.retrieve('account_in71c4amph0vgo2qllky');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.retrieve('account_in71c4amph0vgo2qllky', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await increase.accounts.update('account_in71c4amph0vgo2qllky', {});
  });

  test('update: required and optional params', async () => {
    const response = await increase.accounts.update('account_in71c4amph0vgo2qllky', {
      name: 'My renamed account',
    });
  });

  test('list: only required params', async () => {
    const response = await increase.accounts.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.accounts.list({
      cursor: 'string',
      limit: 0,
      entity_id: 'string',
      status: 'open',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.list(
        { cursor: 'string', limit: 0, entity_id: 'string', status: 'open' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('close', async () => {
    const response = await increase.accounts.close('account_in71c4amph0vgo2qllky');
  });

  // Prism tests are broken
  test.skip('close: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.close('account_in71c4amph0vgo2qllky', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
