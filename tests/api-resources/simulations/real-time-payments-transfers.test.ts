// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource realTimePaymentsTransfers', () => {
  test('complete', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.complete(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
      {},
    );
  });

  test('createInbound: only required params', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.createInbound({
      account_number_id: 'string',
      amount: 1,
    });
  });

  test('createInbound: required and optional params', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.createInbound({
      account_number_id: 'string',
      amount: 1,
      debtor_account_number: 'x',
      debtor_name: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      remittance_information: 'x',
      request_for_payment_id: 'string',
    });
  });
});
