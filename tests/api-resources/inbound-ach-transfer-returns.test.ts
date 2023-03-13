// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource inbound_ach_transfer_returns', () => {
  test('create', async () => {
    const response = await increase.inboundACHTransferReturns.create({
      transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
      reason: 'payment_stopped',
    });
  });

  test('retrieve', async () => {
    const response = await increase.inboundACHTransferReturns.retrieve(
      'inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk',
    );
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.inboundACHTransferReturns.retrieve('inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: only required params', async () => {
    const response = await increase.inboundACHTransferReturns.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.inboundACHTransferReturns.list({ cursor: 'string', limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.inboundACHTransferReturns.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.inboundACHTransferReturns.list(
        { cursor: 'string', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
