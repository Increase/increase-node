// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource accountTransfers', () => {
  // Prism tests are broken
  test.skip('complete', async () => {
    const response = await increase.simulations.accountTransfers.complete(
      'account_transfer_7k9qe1ysdgqztnt63l7n',
    );
  });

  // Prism tests are broken
  test.skip('complete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.accountTransfers.complete('account_transfer_7k9qe1ysdgqztnt63l7n', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
