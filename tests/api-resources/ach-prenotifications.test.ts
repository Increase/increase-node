// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource ach_prenotifications', () => {
  test('create: only required params', async () => {
    const response = await increase.achPrenotifications.create({
      account_number: 'x',
      addendum: 'x',
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_name: 'x',
      credit_debit_indicator: 'credit',
      effective_date: '2019-12-27',
      individual_id: 'x',
      individual_name: 'x',
      routing_number: 'xxxxxxxxx',
      standard_entry_class_code: 'corporate_credit_or_debit',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.achPrenotifications.create({
      account_number: 'x',
      addendum: 'x',
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_name: 'x',
      credit_debit_indicator: 'credit',
      effective_date: '2019-12-27',
      individual_id: 'x',
      individual_name: 'x',
      routing_number: 'xxxxxxxxx',
      standard_entry_class_code: 'corporate_credit_or_debit',
    });
  });

  test('retrieve', async () => {
    const response = await increase.achPrenotifications.retrieve('ach_prenotification_ubjf9qqsxl3obbcn1u34');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achPrenotifications.retrieve('ach_prenotification_ubjf9qqsxl3obbcn1u34', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.achPrenotifications.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.achPrenotifications.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.achPrenotifications.list(
        {
          'created_at.after': '2019-12-27T18:11:19.117Z',
          'created_at.before': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_after': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_before': '2019-12-27T18:11:19.117Z',
          cursor: 'string',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
