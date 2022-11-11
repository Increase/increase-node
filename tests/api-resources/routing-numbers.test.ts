// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path'

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234',baseURL: 'http://127.0.0.1:4010' });

describe('resource routing_numbers', () => {
  test('list: only required params', async () => {
    const response = await increase.routingNumbers.list({ routing_number: 'xxxxxxxxx' })

  })

  test('list: required and optional params', async () => {
    const response = await increase.routingNumbers.list({ cursor: 'string',limit: 0,routing_number: 'xxxxxxxxx' })
  })
})