// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource physicalCards', () => {
  test('shipmentAdvance: only required params', async () => {
    const responsePromise = increase.simulations.physicalCards.shipmentAdvance(
      'physical_card_ode8duyq5v2ynhjoharl',
      { shipment_status: 'shipped' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('shipmentAdvance: required and optional params', async () => {
    const response = await increase.simulations.physicalCards.shipmentAdvance(
      'physical_card_ode8duyq5v2ynhjoharl',
      { shipment_status: 'shipped' },
    );
  });
});
