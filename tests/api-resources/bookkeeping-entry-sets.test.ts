// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource bookkeepingEntrySets', () => {
  test('create: only required params', async () => {
    const response = await increase.bookkeepingEntrySets.create({
      date: '2019-12-27T18:11:19.117Z',
      entries: [
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
      ],
      transaction_id: 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.bookkeepingEntrySets.create({
      date: '2019-12-27T18:11:19.117Z',
      entries: [
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
        { account_id: 'string', amount: 0 },
      ],
      transaction_id: 'string',
    });
  });
});
