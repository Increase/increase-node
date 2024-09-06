// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardDisputes', () => {
  test('action: only required params', async () => {
    const responsePromise = client.simulations.cardDisputes.action('card_dispute_h9sc95nbl1cgltpp7men', {
      status: 'accepted',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('action: required and optional params', async () => {
    const response = await client.simulations.cardDisputes.action('card_dispute_h9sc95nbl1cgltpp7men', {
      status: 'accepted',
      explanation: 'This was a valid recurring transaction',
    });
  });
});
