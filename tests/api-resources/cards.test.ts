// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cards', () => {
  test('create: only required params', async () => {
    const response = await increase.cards.create({
      account_id: 'string',
      billing_address: { line1: 'x', city: 'x', state: 'x', postal_code: 'x' },
      description: 'x',
      digital_wallet: {},
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.cards.create({
      account_id: 'string',
      billing_address: { line1: 'x', line2: 'x', city: 'x', state: 'x', postal_code: 'x' },
      description: 'x',
      digital_wallet: { email: 'x', phone: 'x', card_profile_id: 'string' },
    });
  });

  test('retrieve', async () => {
    const response = await increase.cards.retrieve('card_oubs0hwk5rn6knuecxg2');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cards.retrieve('card_oubs0hwk5rn6knuecxg2', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update', async () => {
    const response = await increase.cards.update('card_oubs0hwk5rn6knuecxg2', {
      billing_address: { line1: 'x', city: 'x', state: 'x', postal_code: 'x' },
      description: 'x',
      digital_wallet: {},
      status: 'active',
    });
  });

  test('list', async () => {
    const response = await increase.cards.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cards.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cards.list(
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

  test('retrieve_sensitive_details', async () => {
    const response = await increase.cards.retrieveSensitiveDetails('card_oubs0hwk5rn6knuecxg2');
  });

  test('retrieve_sensitive_details: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cards.retrieveSensitiveDetails('card_oubs0hwk5rn6knuecxg2', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
