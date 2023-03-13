// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource ach_transfers', () => {
  test('create_inbound: only required params', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
    });
  });

  test('create_inbound: required and optional params', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_name: 'x',
      company_id: 'x',
    });
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return: only required params', async () => {
    const response = await increase.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return: required and optional params', async () => {
    const response = await increase.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {
      reason: 'insufficient_fund',
    });
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit', async () => {
    const response = await increase.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
