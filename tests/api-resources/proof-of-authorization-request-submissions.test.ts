// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proofOfAuthorizationRequestSubmissions', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.proofOfAuthorizationRequestSubmissions.create({
      authorization_terms: 'I agree to the terms of service.',
      authorized_at: '2020-01-31T23:59:59Z',
      authorizer_email: 'user@example.com',
      authorizer_name: 'Ian Crease',
      proof_of_authorization_request_id: 'proof_of_authorization_request_iwp8no25h3rjvil6ad3b',
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
    const response = await increase.proofOfAuthorizationRequestSubmissions.create({
      authorization_terms: 'I agree to the terms of service.',
      authorized_at: '2020-01-31T23:59:59Z',
      authorizer_email: 'user@example.com',
      authorizer_name: 'Ian Crease',
      proof_of_authorization_request_id: 'proof_of_authorization_request_iwp8no25h3rjvil6ad3b',
      authorizer_company: 'National Phonograph Company',
      authorizer_ip_address: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.proofOfAuthorizationRequestSubmissions.retrieve(
      'proof_of_authorization_request_submission_uqhqroiley7n0097vizn',
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
      increase.proofOfAuthorizationRequestSubmissions.retrieve(
        'proof_of_authorization_request_submission_uqhqroiley7n0097vizn',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.proofOfAuthorizationRequestSubmissions.list();
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
    await expect(
      increase.proofOfAuthorizationRequestSubmissions.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.proofOfAuthorizationRequestSubmissions.list(
        { cursor: 'string', limit: 1, proof_of_authorization_request_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
