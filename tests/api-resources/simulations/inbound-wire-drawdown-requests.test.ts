// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundWireDrawdownRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.simulations.inboundWireDrawdownRequests.create({
      amount: 10000,
      beneficiary_account_number: '987654321',
      beneficiary_routing_number: '101050001',
      currency: 'USD',
      message_to_recipient: 'Invoice 29582',
      originator_account_number: '987654321',
      originator_routing_number: '101050001',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
    const response = await increase.simulations.inboundWireDrawdownRequests.create({
      amount: 10000,
      beneficiary_account_number: '987654321',
      beneficiary_routing_number: '101050001',
      currency: 'USD',
      message_to_recipient: 'Invoice 29582',
      originator_account_number: '987654321',
      originator_routing_number: '101050001',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      beneficiary_address_line1: '33 Liberty Street',
      beneficiary_address_line2: 'New York, NY, 10045',
      beneficiary_address_line3: 'x',
      beneficiary_name: 'Ian Crease',
      originator_address_line1: '33 Liberty Street',
      originator_address_line2: 'New York, NY, 10045',
      originator_address_line3: 'x',
      originator_name: 'Ian Crease',
      originator_to_beneficiary_information_line1: 'x',
      originator_to_beneficiary_information_line2: 'x',
      originator_to_beneficiary_information_line3: 'x',
      originator_to_beneficiary_information_line4: 'x',
    });
  });
});
