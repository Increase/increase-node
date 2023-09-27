// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource physicalCards', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.physicalCards.create({
      card_id: 'string',
      card_profile_id: 'string',
      cardholder: { first_name: 'x', last_name: 'x' },
      shipment: {
        method: 'usps',
        address: { name: 'x', line1: 'x', city: 'x', state: 'x', postal_code: 'x' },
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await increase.physicalCards.create({
      card_id: 'string',
      card_profile_id: 'string',
      cardholder: { first_name: 'x', last_name: 'x' },
      shipment: {
        method: 'usps',
        address: {
          name: 'x',
          line1: 'x',
          line2: 'x',
          line3: 'x',
          phone_number: 'x',
          city: 'x',
          state: 'x',
          postal_code: 'x',
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.physicalCards.retrieve('physical_card_ode8duyq5v2ynhjoharl');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.physicalCards.retrieve('physical_card_ode8duyq5v2ynhjoharl', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = increase.physicalCards.update('physical_card_ode8duyq5v2ynhjoharl', {
      status: 'active',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await increase.physicalCards.update('physical_card_ode8duyq5v2ynhjoharl', {
      status: 'active',
    });
  });

  test('list', async () => {
    const responsePromise = increase.physicalCards.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.physicalCards.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.physicalCards.list(
        {
          card_id: 'string',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'string',
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
