// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource realTimePaymentsTransfers', () => {
  test('create: only required params', async () => {
    const response = await increase.realTimePaymentsTransfers.create({
      amount: 1,
      creditor_name: 'x',
      remittance_information: 'x',
      source_account_number_id: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.realTimePaymentsTransfers.create({
      amount: 1,
      creditor_name: 'x',
      remittance_information: 'x',
      source_account_number_id: 'string',
      destination_account_number: 'x',
      destination_routing_number: 'xxxxxxxxx',
      external_account_id: 'string',
      require_approval: true,
    });
  });

  test('retrieve', async () => {
    const response = await increase.realTimePaymentsTransfers.retrieve(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimePaymentsTransfers.retrieve('real_time_payments_transfer_iyuhl5kdn7ssmup83mvq', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.realTimePaymentsTransfers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimePaymentsTransfers.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimePaymentsTransfers.list(
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
