// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource programs', () => {
  test('create: only required params', async () => {
    const response = await increase.simulations.programs.create({ name: 'x' });
  });

  test('create: required and optional params', async () => {
    const response = await increase.simulations.programs.create({ name: 'x' });
  });
});
