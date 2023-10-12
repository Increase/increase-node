// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource achTransfers', () => {
  test('createInbound: only required params', async () => {
    const responsePromise = increase.simulations.achTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createInbound: required and optional params', async () => {
    const response = await increase.simulations.achTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_id: 'x',
      company_name: 'x',
      resolve_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('return', async () => {
    const responsePromise = increase.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit', async () => {
    const responsePromise = increase.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism incorrectly returns an invalid JSON error
  test.skip('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
