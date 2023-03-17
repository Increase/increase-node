// File generated from our OpenAPI spec by Stainless.

import Increase from '../index';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  test('with minimal arguments', () => {
    // set API Key via env var
    process.env['INCREASE_API_KEY'] = 'env var api key';
    const client = new Increase();
    expect(client.apiKey).toBe('env var api key');
  });

  test('with apiKey argument', () => {
    process.env['INCREASE_API_KEY'] = 'env var api key';

    const client = new Increase({ apiKey: 'another api key' });
    expect(client.apiKey).toBe('another api key');
  });

  test('with options argument', () => {
    process.env['INCREASE_API_KEY'] = 'env var api key';

    // apiKey
    const client = new Increase({ apiKey: 'my api key' });
    expect(client.apiKey).toBe('my api key');
  });

  test('with disabled authentication', () => {
    // fails if no API Key provided
    expect(() => {
      new Increase();
    }).toThrow();
  });
});

describe('idempotency', () => {
  test('key can be set per-request', async () => {
    const client = new Increase({ apiKey: 'my api key', baseURL: 'http://127.0.0.1:4010' });
    await client.accounts.create({ name: 'New Account!' }, { idempotencyKey: 'my-idempotency-key' });
  });
});
