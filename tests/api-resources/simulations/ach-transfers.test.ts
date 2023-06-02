// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource achTransfers', () => {
  test('createInbound: only required params', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'string',
      amount: 0,
    });
  });

  test('createInbound: required and optional params', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'string',
      amount: 0,
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_id: 'x',
      company_name: 'x',
    });
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return', async () => {
    const response = await increase.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
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
