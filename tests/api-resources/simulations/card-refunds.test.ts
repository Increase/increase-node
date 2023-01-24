// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource card_refunds', () => {
  test('create', async () => {
    const response = await increase.simulations.cardRefunds.create({
      transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
    });
  });
});
