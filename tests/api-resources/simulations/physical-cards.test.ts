// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource physicalCards', () => {
  test('advanceShipment: only required params', async () => {
    const responsePromise = client.simulations.physicalCards.advanceShipment(
      'physical_card_ode8duyq5v2ynhjoharl',
      { shipment_status: 'pending' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('advanceShipment: required and optional params', async () => {
    const response = await client.simulations.physicalCards.advanceShipment(
      'physical_card_ode8duyq5v2ynhjoharl',
      { shipment_status: 'pending' },
    );
  });
});
