// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource groups', () => {
  test('retrieve_details', async () => {
    const response = await increase.groups.retrieveDetails()

  })

  test('retrieve_details: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.groups.retrieveDetails({ path: '/_stainless_unknown_path' }))
    .rejects
    .toThrow(Increase.NotFoundError)
  })
})