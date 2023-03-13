// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource event_subscriptions', () => {
  test('create: only required params', async () => {
    const response = await increase.eventSubscriptions.create({ url: 'https://website.com/webhooks' });
  });

  test('create: required and optional params', async () => {
    const response = await increase.eventSubscriptions.create({
      url: 'https://website.com/webhooks',
      shared_secret: 'x',
      selected_event_category: 'account.created',
    });
  });

  test('retrieve', async () => {
    const response = await increase.eventSubscriptions.retrieve(
      'event_subscription_001dzz0r20rcdxgb013zqb8m04g',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.eventSubscriptions.retrieve('event_subscription_001dzz0r20rcdxgb013zqb8m04g', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update: only required params', async () => {
    const response = await increase.eventSubscriptions.update(
      'event_subscription_001dzz0r20rcdxgb013zqb8m04g',
      {},
    );
  });

  test('update: required and optional params', async () => {
    const response = await increase.eventSubscriptions.update(
      'event_subscription_001dzz0r20rcdxgb013zqb8m04g',
      { status: 'active' },
    );
  });

  test('list: only required params', async () => {
    const response = await increase.eventSubscriptions.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.eventSubscriptions.list({ cursor: 'string', limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.eventSubscriptions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.eventSubscriptions.list({ cursor: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
