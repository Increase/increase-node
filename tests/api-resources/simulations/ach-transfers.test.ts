// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource achTransfers', () => {
  test('acknowledge', async () => {
    const responsePromise = client.simulations.achTransfers.acknowledge('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('acknowledge: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.simulations.achTransfers.acknowledge('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('createNotificationOfChange: only required params', async () => {
    const responsePromise = client.simulations.achTransfers.createNotificationOfChange(
      'ach_transfer_uoxatyh3lt5evrsdvo7q',
      { change_code: 'incorrect_account_number', corrected_data: '123456789' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createNotificationOfChange: required and optional params', async () => {
    const response = await client.simulations.achTransfers.createNotificationOfChange(
      'ach_transfer_uoxatyh3lt5evrsdvo7q',
      { change_code: 'incorrect_account_number', corrected_data: '123456789' },
    );
  });

  test('return', async () => {
    const responsePromise = client.simulations.achTransfers.return('ach_transfer_uoxatyh3lt5evrsdvo7q', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('settle', async () => {
    const responsePromise = client.simulations.achTransfers.settle('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('settle: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.simulations.achTransfers.settle('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('submit', async () => {
    const responsePromise = client.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.simulations.achTransfers.submit('ach_transfer_uoxatyh3lt5evrsdvo7q', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
