// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource ach_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.achTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 100,
      statement_descriptor: 'New ACH transfer',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.achTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      addendum: 'x',
      amount: 100,
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
      routing_number: '101050001',
      standard_entry_class_code: 'corporate_credit_or_debit',
      statement_descriptor: 'New ACH transfer',
    });
  });

  test('retrieve', async () => {
    const response = await increase.achTransfers.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await increase.achTransfers.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.achTransfers.list({
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
    await expect(increase.achTransfers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.list(
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
    const response = await increase.achTransfers.approve('string');
  });

  test('approve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.approve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const response = await increase.achTransfers.cancel('string');
  });

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achTransfers.cancel('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
