// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wire_transfers', () => {
  test('create_inbound: only required params', async () => {
    const response = await increase.simulations.wireTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
    });
  });

  test('create_inbound: required and optional params', async () => {
    const response = await increase.simulations.wireTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      beneficiary_address_line1: 'x',
      beneficiary_address_line2: 'x',
      beneficiary_address_line3: 'x',
      beneficiary_name: 'x',
      beneficiary_reference: 'x',
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
