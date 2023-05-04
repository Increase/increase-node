// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource checkDeposits', () => {
  // Prism incorrectly returns an invalid JSON error
  test.skip('reject', async () => {
    const response = await increase.simulations.checkDeposits.reject('check_deposit_f06n9gpg7sxn8t19lfc1');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('reject: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.reject('check_deposit_f06n9gpg7sxn8t19lfc1', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('return', async () => {
    const response = await increase.simulations.checkDeposits.return('check_deposit_f06n9gpg7sxn8t19lfc1');
  });

  test('return: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.return('check_deposit_f06n9gpg7sxn8t19lfc1', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit', async () => {
    const response = await increase.simulations.checkDeposits.submit('check_deposit_f06n9gpg7sxn8t19lfc1');
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.checkDeposits.submit('check_deposit_f06n9gpg7sxn8t19lfc1', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
