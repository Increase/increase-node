// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource account_statements', () => {
  test('create', async () => {
    const response = await increase.simulations.accountStatements.create({
      account_id: 'account_in71c4amph0vgo2qllky',
    });
  });
});
