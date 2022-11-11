// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource oauth_connections', () => {
  test('retrieve', async () => {
    const response = await increase.oauthConnections.retrieve('string')

  })

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.oauthConnections.retrieve('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: only required params', async () => {
    const response = await increase.oauthConnections.list()

  })

  test('list: required and optional params', async () => {
    const response = await increase.oauthConnections.list({ cursor: 'string',limit: 0 })
  })

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.oauthConnections.list({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.oauthConnections.list({ cursor: 'string',limit: 0 }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })
})