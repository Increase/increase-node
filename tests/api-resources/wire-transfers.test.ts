// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wireTransfers', () => {
  test('create: only required params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'string',
      amount: 1,
      beneficiary_name: 'x',
      message_to_recipient: 'x',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'string',
      amount: 1,
      beneficiary_name: 'x',
      message_to_recipient: 'x',
      account_number: 'x',
      beneficiary_address_line1: 'x',
      beneficiary_address_line2: 'x',
      beneficiary_address_line3: 'x',
      external_account_id: 'string',
      require_approval: true,
      routing_number: 'xxxxxxxxx',
      unique_identifier: 'x',
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

  test('list', async () => {
    const response = await increase.wireTransfers.list();
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
          account_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'string',
          external_account_id: 'string',
          limit: 0,
          unique_identifier: 'x',
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
