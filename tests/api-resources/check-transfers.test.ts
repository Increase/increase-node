// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource check_transfers', () => {
  test('create: only required params', async () => {
    const response = await increase.checkTransfers.create({ account_id: 'account_in71c4amph0vgo2qllky',address_line1: '33 Liberty Street',address_city: 'New York',address_state: 'NY',address_zip: '10045',amount: 1000,message: 'Check payment',recipient_name: 'Ian Crease' })

  })

  test('create: required and optional params', async () => {
    const response = await increase.checkTransfers.create({ account_id: 'account_in71c4amph0vgo2qllky',address_line1: '33 Liberty Street',address_line2: 'x',address_city: 'New York',address_state: 'NY',address_zip: '10045',amount: 1000,message: 'Check payment',recipient_name: 'Ian Crease' })
  })

  test('retrieve', async () => {
    const response = await increase.checkTransfers.retrieve('string')

  })

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkTransfers.retrieve('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: only required params', async () => {
    const response = await increase.checkTransfers.list()

  })

  test('list: required and optional params', async () => {
    const response = await increase.checkTransfers.list({ cursor: 'string',limit: 0,account_id: 'string',created_at: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } })
  })

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkTransfers.list({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkTransfers.list({ cursor: 'string',limit: 0,account_id: 'string',created_at: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  // Prism doesn't accept no request body being sent but returns 415 if it is sent
  test.skip('stop_payment', async () => {
    const response = await increase.checkTransfers.stopPayment('string')

  })

  // Prism doesn't accept no request body being sent but returns 415 if it is sent
  test.skip('stop_payment: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.checkTransfers.stopPayment('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })
})