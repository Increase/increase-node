// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource checkDeposits', () => {
  test('create: only required params', async () => {
    const response = await increase.checkDeposits.create({
      account_id: 'string',
      amount: 0,
      back_image_file_id: 'string',
      currency: 'x',
      front_image_file_id: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.checkDeposits.create({
      account_id: 'string',
      amount: 0,
      back_image_file_id: 'string',
      currency: 'x',
      front_image_file_id: 'string',
    });
  });

  test('retrieve', async () => {
    const response = await increase.checkDeposits.retrieve('check_deposit_instruction_q2shv7x9qhevfm71kor8');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkDeposits.retrieve('check_deposit_instruction_q2shv7x9qhevfm71kor8', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.checkDeposits.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkDeposits.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.checkDeposits.list(
        {
          account_id: 'string',
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
