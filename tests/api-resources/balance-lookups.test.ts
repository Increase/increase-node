// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource balanceLookups', () => {
  test('lookup: only required params', async () => {
    const responsePromise = increase.balanceLookups.lookup({ account_id: 'account_in71c4amph0vgo2qllky' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('lookup: required and optional params', async () => {
    const response = await increase.balanceLookups.lookup({
      account_id: 'account_in71c4amph0vgo2qllky',
      at_time: '2019-12-27T18:11:19.117Z',
    });
  });
});
