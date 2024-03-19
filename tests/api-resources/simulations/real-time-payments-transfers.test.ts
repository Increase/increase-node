// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realTimePaymentsTransfers', () => {
  test('complete', async () => {
    const responsePromise = increase.simulations.realTimePaymentsTransfers.complete(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createInbound: only required params', async () => {
    const responsePromise = increase.simulations.realTimePaymentsTransfers.createInbound({
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
    const response = await increase.simulations.realTimePaymentsTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      debtor_account_number: 'x',
      debtor_name: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      remittance_information: 'x',
      request_for_payment_id: 'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
    });
  });
});
