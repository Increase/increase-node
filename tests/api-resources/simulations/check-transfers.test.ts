// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource check_transfers', () => {
  test('deposit', async () => {
    const response = await increase.simulations.checkTransfers.deposit('string');
  });

  test('deposit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkTransfers.deposit('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('mail', async () => {
    const response = await increase.simulations.checkTransfers.mail('string');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('mail: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkTransfers.mail('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
