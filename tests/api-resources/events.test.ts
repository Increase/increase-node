// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource events', () => {
  test('retrieve', async () => {
    const response = await increase.events.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.events.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: only required params', async () => {
    const response = await increase.events.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.events.list({
      cursor: 'string',
      limit: 0,
      associated_object_id: 'string',
      created_at: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        on_or_after: '2019-12-27T18:11:19.117Z',
        on_or_before: '2019-12-27T18:11:19.117Z',
      },
      category: { in: ['account.created', 'account.created', 'account.created'] },
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.events.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.events.list(
        {
          cursor: 'string',
          limit: 0,
          associated_object_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          category: { in: ['account.created', 'account.created', 'account.created'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
