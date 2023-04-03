// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wire_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'string',
      account_number: 'x',
      amount: 1,
      beneficiary_address_line1: 'x',
      beneficiary_address_line2: 'x',
      beneficiary_address_line3: 'x',
      beneficiary_name: 'x',
      external_account_id: 'string',
      message_to_recipient: 'x',
      require_approval: true,
      routing_number: 'xxxxxxxxx',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.wireTransfers.create({
      account_id: 'string',
      account_number: 'x',
      amount: 1,
      beneficiary_address_line1: 'x',
      beneficiary_address_line2: 'x',
      beneficiary_address_line3: 'x',
      beneficiary_name: 'x',
      external_account_id: 'string',
      message_to_recipient: 'x',
      require_approval: true,
      routing_number: 'xxxxxxxxx',
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
          'created_at.after': '2019-12-27T18:11:19.117Z',
          'created_at.before': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_after': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_before': '2019-12-27T18:11:19.117Z',
          cursor: 'string',
          external_account_id: 'string',
          limit: 0,
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
