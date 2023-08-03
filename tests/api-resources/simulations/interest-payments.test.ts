// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource interestPayments', () => {
  test('create: only required params', async () => {
    const response = await increase.simulations.interestPayments.create({ account_id: 'string', amount: 1 });
  });

  test('create: required and optional params', async () => {
    const response = await increase.simulations.interestPayments.create({
      account_id: 'string',
      amount: 1,
      period_end: '2019-12-27T18:11:19.117Z',
      period_start: '2019-12-27T18:11:19.117Z',
    });
  });
});
