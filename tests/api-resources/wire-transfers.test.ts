// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wire_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      routing_number: '101050001',
      amount: 100,
      message_to_recipient: 'New account transfer',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      routing_number: '101050001',
      amount: 100,
      message_to_recipient: 'New account transfer',
      beneficiary_name: 'Ian Crease',
      beneficiary_address_line1: '33 Liberty Street',
      beneficiary_address_line2: 'New York',
      beneficiary_address_line3: 'NY 10045',
    });
  });

  test('retrieve', async () => {
    const response = await increase.wireTransfers.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await increase.wireTransfers.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.wireTransfers.list({
      cursor: 'string',
      limit: 0,
      account_id: 'string',
      created_at: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        on_or_after: '2019-12-27T18:11:19.117Z',
        on_or_before: '2019-12-27T18:11:19.117Z',
      },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.wireTransfers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.list(
        {
          cursor: 'string',
          limit: 0,
          account_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('reverse', async () => {
    const response = await increase.wireTransfers.reverse('string');
  });

  // Prism tests are broken
  test.skip('reverse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.reverse('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('submit', async () => {
    const response = await increase.wireTransfers.submit('string');
  });

  // Prism tests are broken
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.submit('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
