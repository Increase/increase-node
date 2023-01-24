// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource limits', () => {
  test('create: only required params', async () => {
    const response = await increase.limits.create({
      metric: 'volume',
      model_id: 'account_in71c4amph0vgo2qllky',
      value: 1234,
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.limits.create({
      metric: 'volume',
      interval: 'month',
      model_id: 'account_in71c4amph0vgo2qllky',
      value: 1234,
    });
  });

  test('retrieve', async () => {
    const response = await increase.limits.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.limits.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('update', async () => {
    const response = await increase.limits.update('string', { status: 'inactive' });
  });

  test('list: only required params', async () => {
    const response = await increase.limits.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.limits.list({ cursor: 'string', limit: 0, model_id: 'x', status: 'x' });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.limits.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.limits.list(
        { cursor: 'string', limit: 0, model_id: 'x', status: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
