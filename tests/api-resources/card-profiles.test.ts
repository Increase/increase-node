// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource card_profiles', () => {
  test('create', async () => {
    const response = await increase.cardProfiles.create({
      description: 'My Card Profile',
      digital_wallets: {
        issuer_name: 'MyBank',
        card_description: 'MyBank Signature Card',
        background_image_file_id: 'file_1ai913suu1zfn1pdetru',
        app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
      },
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

  test('list: only required params', async () => {
    const response = await increase.cardProfiles.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.cardProfiles.list({
      cursor: 'string',
      limit: 0,
      status: { in: ['pending', 'pending', 'pending'] },
    });
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
