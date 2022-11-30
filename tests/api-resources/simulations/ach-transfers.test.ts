// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource ach_transfers', () => {
  test('create_inbound', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
    });
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return', async () => {
    const response = await increase.simulations.achTransfers.return('string');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.achTransfers.return('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit', async () => {
    const response = await increase.simulations.achTransfers.submit('string');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.achTransfers.submit('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
