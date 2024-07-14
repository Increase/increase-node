// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realTimePaymentsRequestForPayments', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.realTimePaymentsRequestForPayments.create({
      amount: 100,
      debtor: { address: { country: 'US' }, name: 'Ian Crease' },
      destination_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      expires_at: '2025-12-31',
      remittance_information: 'Invoice 29582',
      source_account_number: '987654321',
      source_routing_number: '101050001',
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
    const response = await increase.realTimePaymentsRequestForPayments.create({
      amount: 100,
      debtor: {
        address: { city: 'x', country: 'US', post_code: 'x', street_name: 'Liberty Street' },
        name: 'Ian Crease',
      },
      destination_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      expires_at: '2025-12-31',
      remittance_information: 'Invoice 29582',
      source_account_number: '987654321',
      source_routing_number: '101050001',
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.realTimePaymentsRequestForPayments.retrieve(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
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
      increase.realTimePaymentsRequestForPayments.retrieve(
        'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.realTimePaymentsRequestForPayments.list();
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
      increase.realTimePaymentsRequestForPayments.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.realTimePaymentsRequestForPayments.list(
        {
          account_id: 'account_id',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
