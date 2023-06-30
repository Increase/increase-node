// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cardDisputes', () => {
  test('action: only required params', async () => {
    const response = await increase.simulations.cardDisputes.action('card_dispute_h9sc95nbl1cgltpp7men', {
      status: 'accepted',
    });
  });

  test('action: required and optional params', async () => {
    const response = await increase.simulations.cardDisputes.action('card_dispute_h9sc95nbl1cgltpp7men', {
      status: 'accepted',
      explanation: 'x',
    });
  });
});
