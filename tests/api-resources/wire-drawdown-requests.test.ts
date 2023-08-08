// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wireDrawdownRequests', () => {
  // Prism tests are broken
  test.skip('create: only required params', async () => {
    const responsePromise = increase.wireDrawdownRequests.create({
      account_number_id: 'string',
      amount: 1,
      message_to_recipient: 'x',
      recipient_account_number: 'x',
      recipient_name: 'x',
      recipient_routing_number: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are broken
  test.skip('create: required and optional params', async () => {
    const response = await increase.wireDrawdownRequests.create({
      account_number_id: 'string',
      amount: 1,
      message_to_recipient: 'x',
      recipient_account_number: 'x',
      recipient_name: 'x',
      recipient_routing_number: 'x',
      recipient_address_line1: 'x',
      recipient_address_line2: 'x',
      recipient_address_line3: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.wireDrawdownRequests.retrieve(
      'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireDrawdownRequests.retrieve('wire_drawdown_request_q6lmocus3glo0lr2bfv3', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.wireDrawdownRequests.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.wireDrawdownRequests.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireDrawdownRequests.list(
        { cursor: 'string', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
