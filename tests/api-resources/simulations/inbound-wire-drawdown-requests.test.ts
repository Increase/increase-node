// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource inbound_wire_drawdown_requests', () => {
  test('create: only required params', async () => {
    const response = await increase.simulations.inboundWireDrawdownRequests.create({
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      originator_account_number: '987654321',
      originator_routing_number: '101050001',
      beneficiary_account_number: '987654321',
      beneficiary_routing_number: '101050001',
      amount: 10000,
      currency: 'USD',
      message_to_recipient: 'Invoice 29582',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.simulations.inboundWireDrawdownRequests.create({
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      originator_account_number: '987654321',
      originator_routing_number: '101050001',
      beneficiary_account_number: '987654321',
      beneficiary_routing_number: '101050001',
      amount: 10000,
      currency: 'USD',
      message_to_recipient: 'Invoice 29582',
      originator_to_beneficiary_information_line1: 'x',
      originator_to_beneficiary_information_line2: 'x',
      originator_to_beneficiary_information_line3: 'x',
      originator_to_beneficiary_information_line4: 'x',
      originator_name: 'Ian Crease',
      originator_address_line1: '33 Liberty Street',
      originator_address_line2: 'New York, NY, 10045',
      originator_address_line3: 'x',
      beneficiary_name: 'Ian Crease',
      beneficiary_address_line1: '33 Liberty Street',
      beneficiary_address_line2: 'New York, NY, 10045',
      beneficiary_address_line3: 'x',
    });
  });
});
