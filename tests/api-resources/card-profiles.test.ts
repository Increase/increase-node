// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource cardProfiles', () => {
  test('create: only required params', async () => {
    const response = await increase.cardProfiles.create({
      description: 'x',
      digital_wallets: {
        issuer_name: 'x',
        card_description: 'x',
        background_image_file_id: 'string',
        app_icon_file_id: 'string',
      },
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.cardProfiles.create({
      description: 'x',
      digital_wallets: {
        text_color: { red: 0, green: 0, blue: 0 },
        issuer_name: 'x',
        card_description: 'x',
        contact_website: 'string',
        contact_email: 'x',
        contact_phone: 'x',
        background_image_file_id: 'string',
        app_icon_file_id: 'string',
      },
      physical_cards: { contact_phone: 'x', front_image_file_id: 'string', carrier_image_file_id: 'string' },
    });
  });

  test('retrieve', async () => {
    const response = await increase.cardProfiles.retrieve('card_profile_cox5y73lob2eqly18piy');
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
    const response = await increase.cardProfiles.list();
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
        { cursor: 'string', limit: 0, status: { in: ['pending', 'pending', 'pending'] } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
