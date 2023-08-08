// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource inboundWireDrawdownRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.simulations.inboundWireDrawdownRequests.create({
      amount: 0,
      beneficiary_account_number: 'x',
      beneficiary_routing_number: 'x',
      currency: 'x',
      message_to_recipient: 'x',
      originator_account_number: 'x',
      originator_routing_number: 'x',
      recipient_account_number_id: 'string',
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
      amount: 0,
      beneficiary_account_number: 'x',
      beneficiary_routing_number: 'x',
      currency: 'x',
      message_to_recipient: 'x',
      originator_account_number: 'x',
      originator_routing_number: 'x',
      recipient_account_number_id: 'string',
      beneficiary_address_line1: 'x',
      beneficiary_address_line2: 'x',
      beneficiary_address_line3: 'x',
      beneficiary_name: 'x',
      originator_address_line1: 'x',
      originator_address_line2: 'x',
      originator_address_line3: 'x',
      originator_name: 'x',
      originator_to_beneficiary_information_line1: 'x',
      originator_to_beneficiary_information_line2: 'x',
      originator_to_beneficiary_information_line3: 'x',
      originator_to_beneficiary_information_line4: 'x',
    });
  });
});
