// File generated from our OpenAPI spec by Stainless.

import { Headers } from 'increase/core';
import Increase from 'increase';

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

  test('defaultHeaders are passed through', () => {
    const client = new Increase({ defaultHeaders: { 'X-My-Default-Header': '2' }, apiKey: 'my api key' });

    const { req } = client.buildRequest({ path: '/foo', method: 'post' });
    expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Increase({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Increase({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Increase({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        apiKey: 'my api key',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Increase({ baseURL: 'http://localhost:5000/custom/path/', apiKey: 'my api key' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Increase({ baseURL: 'http://localhost:5000/custom/path', apiKey: 'my api key' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Increase({ maxRetries: 1, apiKey: 'my api key' });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Increase({ apiKey: 'my api key' });
    expect(client2.maxRetries).toEqual(2);
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
    await client.accounts.create({ name: 'x' }, { idempotencyKey: 'my-idempotency-key' });
  });
});
