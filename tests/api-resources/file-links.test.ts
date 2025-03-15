// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fileLinks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fileLinks.create({ file_id: 'file_makxrc67oh9l6sg7w9yc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fileLinks.create({
      file_id: 'file_makxrc67oh9l6sg7w9yc',
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.fileLinks.retrieve('file_link_roapsuicj7kp1lzyus04');
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
      client.fileLinks.retrieve('file_link_roapsuicj7kp1lzyus04', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = client.fileLinks.list({ file_id: 'file_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.fileLinks.list({
      file_id: 'file_id',
      created_at: {
        after: '2019-12-27T18:11:19.117Z',
        before: '2019-12-27T18:11:19.117Z',
        on_or_after: '2019-12-27T18:11:19.117Z',
        on_or_before: '2019-12-27T18:11:19.117Z',
      },
      cursor: 'cursor',
      idempotency_key: 'x',
      limit: 1,
    });
  });
});
