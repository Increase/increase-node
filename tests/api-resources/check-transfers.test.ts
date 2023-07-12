// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource checkTransfers', () => {
  test('create: only required params', async () => {
    const response = await increase.checkTransfers.create({
      account_id: 'string',
      address_city: 'x',
      address_line1: 'x',
      address_state: 'x',
      address_zip: 'x',
      amount: 1,
      message: 'x',
      recipient_name: 'x',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.checkTransfers.create({
      account_id: 'string',
      address_city: 'x',
      address_line1: 'x',
      address_state: 'x',
      address_zip: 'x',
      amount: 1,
      message: 'x',
      recipient_name: 'x',
      address_line2: 'x',
      note: 'x',
      require_approval: true,
      return_address: { name: 'x', line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
      source_account_number_id: 'string',
      unique_identifier: 'x',
    });
  });

  test('retrieve', async () => {
    const response = await increase.checkTransfers.retrieve('check_transfer_30b43acfu9vw8fyc4f5');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkTransfers.retrieve('check_transfer_30b43acfu9vw8fyc4f5', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.checkTransfers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkTransfers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkTransfers.list(
        {
          account_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'string',
          limit: 0,
          unique_identifier: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const response = await increase.checkTransfers.approve('check_transfer_30b43acfu9vw8fyc4f5');
  });

  test('approve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkTransfers.approve('check_transfer_30b43acfu9vw8fyc4f5', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const response = await increase.checkTransfers.cancel('check_transfer_30b43acfu9vw8fyc4f5');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkTransfers.cancel('check_transfer_30b43acfu9vw8fyc4f5', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism doesn't accept no request body being sent but returns 415 if it is sent
  test.skip('stopPayment', async () => {
    const response = await increase.checkTransfers.stopPayment('check_transfer_30b43acfu9vw8fyc4f5', {});
  });
});
