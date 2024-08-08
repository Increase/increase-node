// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wireDrawdownRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      message_to_recipient: 'Invoice 29582',
      recipient_account_number: '987654321',
      recipient_name: 'Ian Crease',
      recipient_routing_number: '101050001',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      message_to_recipient: 'Invoice 29582',
      recipient_account_number: '987654321',
      recipient_name: 'Ian Crease',
      recipient_routing_number: '101050001',
      originator_address_line1: 'x',
      originator_address_line2: 'x',
      originator_address_line3: 'x',
      originator_name: 'x',
      recipient_address_line1: '33 Liberty Street',
      recipient_address_line2: 'New York, NY, 10045',
      recipient_address_line3: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.wireDrawdownRequests.retrieve(
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
      client.wireDrawdownRequests.retrieve('wire_drawdown_request_q6lmocus3glo0lr2bfv3', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.wireDrawdownRequests.list();
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
    await expect(client.wireDrawdownRequests.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.wireDrawdownRequests.list(
        { cursor: 'cursor', idempotency_key: 'x', limit: 1, status: 'pending_submission' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
