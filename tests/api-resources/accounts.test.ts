// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.accounts.create({ name: 'New Account!' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await increase.accounts.create({
      name: 'New Account!',
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
      informational_entity_id: 'string',
      program_id: 'program_i2v2os4mwza1oetokh9i',
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.accounts.retrieve('account_in71c4amph0vgo2qllky');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.retrieve('account_in71c4amph0vgo2qllky', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = increase.accounts.update('account_in71c4amph0vgo2qllky', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = increase.accounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
        {
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'string',
          entity_id: 'string',
          informational_entity_id: 'string',
          limit: 1,
          status: 'open',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('balance', async () => {
    const responsePromise = increase.accounts.balance('account_in71c4amph0vgo2qllky');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('balance: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.balance('account_in71c4amph0vgo2qllky', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('balance: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.balance(
        'account_in71c4amph0vgo2qllky',
        { at_time: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('close', async () => {
    const responsePromise = increase.accounts.close('account_in71c4amph0vgo2qllky');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are broken
  test.skip('close: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.accounts.close('account_in71c4amph0vgo2qllky', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
