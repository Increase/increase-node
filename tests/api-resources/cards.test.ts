// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource cards', () => {
  test('create: only required params', async () => {
    const response = await increase.cards.create({ account_id: 'account_in71c4amph0vgo2qllky' })

  })

  test('create: required and optional params', async () => {
    const response = await increase.cards.create({ account_id: 'account_in71c4amph0vgo2qllky',description: 'Card for Ian Crease',billing_address: { line1: 'x',line2: 'x',city: 'x',state: 'x',postal_code: 'x' },digital_wallet: { email: 'x',phone: 'x' } })
  })

  test('retrieve', async () => {
    const response = await increase.cards.retrieve('string')

  })

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cards.retrieve('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('update: only required params', async () => {
    const response = await increase.cards.update('string', {})

  })

  test('update: required and optional params', async () => {
    const response = await increase.cards.update('string', { description: 'New description',status: 'active',billing_address: { line1: 'x',line2: 'x',city: 'x',state: 'x',postal_code: 'x' },digital_wallet: { email: 'x',phone: 'x' } })
  })

  test('list: only required params', async () => {
    const response = await increase.cards.list()

  })

  test('list: required and optional params', async () => {
    const response = await increase.cards.list({ cursor: 'string',limit: 0,account_id: 'string',created_at: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } })
  })

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cards.list({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cards.list({ cursor: 'string',limit: 0,account_id: 'string',created_at: { after: '2019-12-27T18:11:19.117Z',before: '2019-12-27T18:11:19.117Z',on_or_after: '2019-12-27T18:11:19.117Z',on_or_before: '2019-12-27T18:11:19.117Z' } }, { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })

  test('retrieve_sensitive_details', async () => {
    const response = await increase.cards.retrieveSensitiveDetails('string')

  })

  test('retrieve_sensitive_details: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.cards.retrieveSensitiveDetails('string', { path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })
})