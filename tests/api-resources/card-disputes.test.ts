// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cardDisputes', () => {
  test('create: only required params', async () => {
    const response = await increase.cardDisputes.create({
      disputed_transaction_id: 'string',
      explanation: 'x',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.cardDisputes.create({
      disputed_transaction_id: 'string',
      explanation: 'x',
    });
  });

  test('retrieve', async () => {
    const response = await increase.cardDisputes.retrieve('card_dispute_h9sc95nbl1cgltpp7men');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cardDisputes.retrieve('card_dispute_h9sc95nbl1cgltpp7men', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.cardDisputes.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cardDisputes.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cardDisputes.list(
        {
          'created_at.after': '2019-12-27T18:11:19.117Z',
          'created_at.before': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_after': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_before': '2019-12-27T18:11:19.117Z',
          cursor: 'string',
          limit: 0,
          'status.in': ['pending_reviewing', 'pending_reviewing', 'pending_reviewing'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
