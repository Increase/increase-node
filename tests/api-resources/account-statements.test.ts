// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource account_statements', () => {
  test('retrieve', async () => {
    const response = await increase.accountStatements.retrieve('string')

  })

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountStatements.retrieve('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: only required params', async () => {
    const response = await increase.accountStatements.list()

  })

  test('list: required and optional params', async () => {
    const response = await increase.accountStatements.list({ cursor: 'string',limit: 0,account_id: 'string',statement_period_start: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } })
  })

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountStatements.list({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.accountStatements.list({ cursor: 'string',limit: 0,account_id: 'string',statement_period_start: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })
})