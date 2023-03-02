// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource check_deposits', () => {
  // Prism incorrectly returns an invalid JSON error
  test.skip('reject', async () => {
    const response = await increase.simulations.checkDeposits.reject('string');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('reject: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.reject('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('return', async () => {
    const response = await increase.simulations.checkDeposits.return('string');
  });

  test('return: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.return('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit', async () => {
    const response = await increase.simulations.checkDeposits.submit('string');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.submit('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
