// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wire_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 100,
      message_to_recipient: 'New account transfer',
      beneficiary_name: 'Ian Crease',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      routing_number: '101050001',
      external_account_id: 'string',
      amount: 100,
      message_to_recipient: 'New account transfer',
      beneficiary_name: 'Ian Crease',
      beneficiary_address_line1: '33 Liberty Street',
      beneficiary_address_line2: 'New York',
      beneficiary_address_line3: 'NY 10045',
      require_approval: true,
    });
  });

  test('retrieve', async () => {
    const response = await increase.wireTransfers.retrieve('wire_transfer_5akynk7dqsq25qwk9q2u');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.retrieve('wire_transfer_5akynk7dqsq25qwk9q2u', {
        path: '/_stainless_unknown_path',
      }),
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
      external_account_id: 'string',
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
          external_account_id: 'string',
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

  test('approve', async () => {
    const response = await increase.wireTransfers.approve('wire_transfer_5akynk7dqsq25qwk9q2u');
  });

  test('approve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.approve('wire_transfer_5akynk7dqsq25qwk9q2u', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const response = await increase.wireTransfers.cancel('wire_transfer_5akynk7dqsq25qwk9q2u');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.cancel('wire_transfer_5akynk7dqsq25qwk9q2u', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('reverse', async () => {
    const response = await increase.wireTransfers.reverse('wire_transfer_5akynk7dqsq25qwk9q2u');
  });

  // Prism tests are broken
  test.skip('reverse: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.reverse('wire_transfer_5akynk7dqsq25qwk9q2u', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('submit', async () => {
    const response = await increase.wireTransfers.submit('wire_transfer_5akynk7dqsq25qwk9q2u');
  });

  // Prism tests are broken
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireTransfers.submit('wire_transfer_5akynk7dqsq25qwk9q2u', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
