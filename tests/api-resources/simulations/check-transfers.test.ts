// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource checkTransfers', () => {
  test('deposit', async () => {
    const response = await increase.simulations.checkTransfers.deposit('check_transfer_30b43acfu9vw8fyc4f5');
  });

  test('deposit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkTransfers.deposit('check_transfer_30b43acfu9vw8fyc4f5', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('mail', async () => {
    const response = await increase.simulations.checkTransfers.mail('check_transfer_30b43acfu9vw8fyc4f5');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('mail: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkTransfers.mail('check_transfer_30b43acfu9vw8fyc4f5', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
