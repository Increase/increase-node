// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  const date = '2022-01-31T23:59:59Z';
  const payload = '{"id":"event_123abc","created_at":"2020-01-31T23:59:59Z"}';
  const headers = {
    'Increase-Webhook-Signature': `t=${date},v1=3f9c3dcc820ca3adfae8e196d05b09dfef63b91db5ce5ac1407090f2aa424a6f`,
  };
  const secret = 'whsec_zlFsbBZ8Xcodlpcu6NDTdSzZRLSdhkst';
  const fakeNow = new Date(date).valueOf();

  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  describe('unwrap', () => {
    it('deserializes the payload object', () => {
      const unwrapped = increase.webhooks.unwrap(payload, headers, secret);
      expect(unwrapped).toEqual({
        id: 'event_123abc',
        created_at: '2020-01-31T23:59:59Z',
      });
    });
  });

  describe('verifySignature', () => {
    it('should pass for valid signature', () => {
      increase.webhooks.verifySignature(payload, headers, secret);
    });

    it('should throw an error for invalid secret format', () => {
      expect(() => {
        increase.webhooks.verifySignature(payload, headers, null);
      }).toThrowErrorMatchingInlineSnapshot(
        `"The webhook secret must either be set using the env var, INCREASE_WEBHOOK_SECRET, on the client class, Increase({ webhook_secret: '123' }), or passed to this function"`,
      );
    });

    it('should throw for invalid signature', () => {
      expect(() =>
        increase.webhooks.verifySignature(payload, headers, Buffer.from('foo').toString('base64')),
      ).toThrowErrorMatchingInlineSnapshot(
        `"The given webhook signature does not match the expected signature"`,
      );
    });

    it('should throw for missing timestamp', () => {
      expect(() =>
        increase.webhooks.verifySignature(
          payload,
          {
            'Increase-Webhook-Signature': `v1=3f9c3dcc820ca3adfae8e196d05b09dfef63b91db5ce5ac1407090f2aa424a6f`,
          },
          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(`"Unable to verify signature, missing timestamp"`);
    });

    it('should throw if signature is missing', () => {
      expect(() =>
        increase.webhooks.verifySignature(
          payload,
          {
            'Increase-Webhook-Signature': `t=123`,
          },
          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(`"Unable to verify signature, missing signature"`);
    });

    it('should throw if payload is not a string', () => {
      expect(() =>
        increase.webhooks.verifySignature({ payload: 'not a string' } as any, headers, secret),
      ).toThrowErrorMatchingInlineSnapshot(
        `"The given webhook signature does not match the expected signature"`,
      );
    });
  });
});
