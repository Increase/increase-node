// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proofOfAuthorizationRequestSubmissions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.proofOfAuthorizationRequestSubmissions.create({
      authorization_terms: 'I agree to the terms of service.',
      authorized_at: '2020-01-31T23:59:59Z',
      authorizer_email: 'user@example.com',
      authorizer_name: 'Ian Crease',
      customer_has_been_offboarded: true,
      proof_of_authorization_request_id: 'proof_of_authorization_request_iwp8no25h3rjvil6ad3b',
      validated_account_ownership_via_credential: true,
      validated_account_ownership_with_account_statement: true,
      validated_account_ownership_with_microdeposit: true,
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
    const response = await client.proofOfAuthorizationRequestSubmissions.create({
      authorization_terms: 'I agree to the terms of service.',
      authorized_at: '2020-01-31T23:59:59Z',
      authorizer_email: 'user@example.com',
      authorizer_name: 'Ian Crease',
      customer_has_been_offboarded: true,
      proof_of_authorization_request_id: 'proof_of_authorization_request_iwp8no25h3rjvil6ad3b',
      validated_account_ownership_via_credential: true,
      validated_account_ownership_with_account_statement: true,
      validated_account_ownership_with_microdeposit: true,
      additional_evidence_file_id: 'file_makxrc67oh9l6sg7w9yc',
      authorizer_company: 'National Phonograph Company',
      authorizer_ip_address: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.proofOfAuthorizationRequestSubmissions.retrieve(
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
      client.proofOfAuthorizationRequestSubmissions.retrieve(
        'proof_of_authorization_request_submission_uqhqroiley7n0097vizn',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.proofOfAuthorizationRequestSubmissions.list();
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
      client.proofOfAuthorizationRequestSubmissions.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.proofOfAuthorizationRequestSubmissions.list(
        {
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          proof_of_authorization_request_id: 'proof_of_authorization_request_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
