// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource balanceLookups', () => {
  test('lookup: only required params', async () => {
    const response = await increase.balanceLookups.lookup({ account_id: 'string' });
  });

  test('lookup: required and optional params', async () => {
    const response = await increase.balanceLookups.lookup({
      account_id: 'string',
      at_time: '2019-12-27T18:11:19.117Z',
    });
  });
});
