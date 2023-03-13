// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource wire_drawdown_requests', () => {
  // Prism tests are broken
  test.skip('create: only required params', async () => {
    const response = await increase.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      message_to_recipient: 'Invoice 29582',
      recipient_account_number: '987654321',
      recipient_routing_number: '101050001',
      recipient_name: 'Ian Crease',
    });
  });

  // Prism tests are broken
  test.skip('create: required and optional params', async () => {
    const response = await increase.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      message_to_recipient: 'Invoice 29582',
      recipient_account_number: '987654321',
      recipient_routing_number: '101050001',
      recipient_name: 'Ian Crease',
      recipient_address_line1: '33 Liberty Street',
      recipient_address_line2: 'New York, NY, 10045',
      recipient_address_line3: 'x',
    });
  });

  test('retrieve', async () => {
    const response = await increase.wireDrawdownRequests.retrieve(
      'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireDrawdownRequests.retrieve('wire_drawdown_request_q6lmocus3glo0lr2bfv3', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await increase.wireDrawdownRequests.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.wireDrawdownRequests.list({ cursor: 'string', limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.wireDrawdownRequests.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.wireDrawdownRequests.list(
        { cursor: 'string', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
