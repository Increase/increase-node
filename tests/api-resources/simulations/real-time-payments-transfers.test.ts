// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource real_time_payments_transfers', () => {
  test('create_inbound: only required params', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
    });
  });

  test('create_inbound: required and optional params', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.createInbound({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      request_for_payment_id: 'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
      debtor_name: 'x',
      debtor_account_number: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      remittance_information: 'x',
    });
  });
});
