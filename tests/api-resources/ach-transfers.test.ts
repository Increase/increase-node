// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource ach_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.achTransfers.create({
      account_id: 'string',
      account_number: 'x',
      addendum: 'x',
      amount: 0,
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_name: 'x',
      effective_date: '2019-12-27',
      external_account_id: 'string',
      funding: 'checking',
      individual_id: 'x',
      individual_name: 'x',
      require_approval: true,
      routing_number: 'xxxxxxxxx',
      standard_entry_class_code: 'corporate_credit_or_debit',
      statement_descriptor: 'x',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.achTransfers.create({
      account_id: 'string',
      account_number: 'x',
      addendum: 'x',
      amount: 0,
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_name: 'x',
      effective_date: '2019-12-27',
      external_account_id: 'string',
      funding: 'checking',
      individual_id: 'x',
      individual_name: 'x',
      require_approval: true,
      routing_number: 'xxxxxxxxx',
      standard_entry_class_code: 'corporate_credit_or_debit',
      statement_descriptor: 'x',
    });
  });

  test('retrieve', async () => {
    const response = await increase.achTransfers.retrieve('ach_transfer_uoxatyh3lt5evrsdvo7q');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.retrieve('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.achTransfers.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.achTransfers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.list(
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
    const response = await increase.achTransfers.approve('ach_transfer_uoxatyh3lt5evrsdvo7q');
  });

  test('approve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.approve('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const response = await increase.achTransfers.cancel('ach_transfer_uoxatyh3lt5evrsdvo7q');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.cancel('ach_transfer_uoxatyh3lt5evrsdvo7q', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
