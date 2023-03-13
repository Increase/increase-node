// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource check_deposits', () => {
  test('create', async () => {
    const response = await increase.checkDeposits.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
      currency: 'USD',
      front_image_file_id: 'file_hkv175ovmc2tb2v2zbrm',
      back_image_file_id: 'file_26khfk98mzfz90a11oqx',
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

  test('list: only required params', async () => {
    const response = await increase.checkDeposits.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.checkDeposits.list({
      cursor: 'string',
      limit: 0,
      account_id: 'string',
      created_at: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        on_or_after: '2019-12-27T18:11:19.117Z',
        on_or_before: '2019-12-27T18:11:19.117Z',
      },
    });
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
          cursor: 'string',
          limit: 0,
          account_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
