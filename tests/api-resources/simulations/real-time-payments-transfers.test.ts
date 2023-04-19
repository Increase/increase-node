// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource real_time_payments_transfers', () => {
  test('complete', async () => {
    const response = await increase.simulations.realTimePaymentsTransfers.complete(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
      { rejection: { reject_reason_code: 'account_closed' } },
    );
  });

  test('create_inbound: only required params', async () => {
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

  test('create_inbound: required and optional params', async () => {
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
