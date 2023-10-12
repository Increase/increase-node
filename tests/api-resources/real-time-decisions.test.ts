// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realTimeDecisions', () => {
  test('retrieve', async () => {
    const responsePromise = increase.realTimeDecisions.retrieve('real_time_decision_j76n2e810ezcg3zh5qtn');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimeDecisions.retrieve('real_time_decision_j76n2e810ezcg3zh5qtn', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('action', async () => {
    const responsePromise = increase.realTimeDecisions.action('real_time_decision_j76n2e810ezcg3zh5qtn', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
