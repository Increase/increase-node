// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardProfiles', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.cardProfiles.create({
      description: 'My Card Profile',
      digital_wallets: {
        issuer_name: 'MyBank',
        card_description: 'MyBank Signature Card',
        background_image_file_id: 'file_1ai913suu1zfn1pdetru',
        app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
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
    const response = await increase.cardProfiles.create({
      description: 'My Card Profile',
      digital_wallets: {
        text_color: { red: 26, green: 43, blue: 59 },
        issuer_name: 'MyBank',
        card_description: 'MyBank Signature Card',
        contact_website: 'https://example.com',
        contact_email: 'user@example.com',
        contact_phone: '+18885551212',
        background_image_file_id: 'file_1ai913suu1zfn1pdetru',
        app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
      },
      physical_cards: { contact_phone: 'x', front_image_file_id: 'string', carrier_image_file_id: 'string' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.cardProfiles.retrieve('card_profile_cox5y73lob2eqly18piy');
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
      increase.cardProfiles.retrieve('card_profile_cox5y73lob2eqly18piy', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.cardProfiles.list();
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
    await expect(increase.cardProfiles.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cardProfiles.list(
        {
          cursor: 'string',
          limit: 0,
          physical_cards_status: { in: ['not_eligible', 'rejected', 'pending_creating'] },
          status: { in: ['pending', 'rejected', 'active'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = increase.cardProfiles.archive('card_profile_cox5y73lob2eqly18piy');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.cardProfiles.archive('card_profile_cox5y73lob2eqly18piy', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
