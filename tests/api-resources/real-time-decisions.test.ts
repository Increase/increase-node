// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource real_time_decisions', () => {
  test('retrieve', async () => {
    const response = await increase.realTimeDecisions.retrieve('real_time_decision_j76n2e810ezcg3zh5qtn');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimeDecisions.retrieve('real_time_decision_j76n2e810ezcg3zh5qtn', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('action: only required params', async () => {
    const response = await increase.realTimeDecisions.action('real_time_decision_j76n2e810ezcg3zh5qtn', {});
  });

  test('action: required and optional params', async () => {
    const response = await increase.realTimeDecisions.action('real_time_decision_j76n2e810ezcg3zh5qtn', {
      card_authorization: { decision: 'approve' },
      digital_wallet_token: {
        approval: { card_profile_id: 'string', phone: 'x', email: 'x' },
        decline: { reason: 'x' },
      },
      digital_wallet_authentication: { result: 'success' },
    });
  });
});
