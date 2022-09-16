// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource entities', () => {
  test('retrieve', async () => {
    const response = await increase.entities.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.entities.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: only required params', async () => {
    const response = await increase.entities.list();
  });

  test('list: required and optional params', async () => {
    const response = await increase.entities.list({ cursor: 'string', limit: 0 });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.entities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.entities.list({ cursor: 'string', limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  // Prism tests are broken
  test.skip('create_corporation: only required params', async () => {
    const response = await increase.entities.createCorporation({
      address_line1: '33 Liberty Street',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: '10045',
      name: 'National Phonograph Company',
      state: 'NJ',
    });
  });

  // Prism tests are broken
  test.skip('create_corporation: required and optional params', async () => {
    const response = await increase.entities.createCorporation({
      address_line1: '33 Liberty Street',
      address_line2: 'x',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: '10045',
      beneficial_owners: [
        {
          address_line1: 'x',
          address_line2: 'x',
          address_city: 'x',
          address_state: 'x',
          address_zip: 'x',
          date_of_birth: '2019-12-27T18:11:19.117Z',
          name: 'x',
          social_security_number_last4: 'xxxx',
          prong: 'ownership',
          company_title: 'x',
        },
        {
          address_line1: 'x',
          address_line2: 'x',
          address_city: 'x',
          address_state: 'x',
          address_zip: 'x',
          date_of_birth: '2019-12-27T18:11:19.117Z',
          name: 'x',
          social_security_number_last4: 'xxxx',
          prong: 'ownership',
          company_title: 'x',
        },
        {
          address_line1: 'x',
          address_line2: 'x',
          address_city: 'x',
          address_state: 'x',
          address_zip: 'x',
          date_of_birth: '2019-12-27T18:11:19.117Z',
          name: 'x',
          social_security_number_last4: 'xxxx',
          prong: 'ownership',
          company_title: 'x',
        },
      ],
      name: 'National Phonograph Company',
      state: 'NJ',
      tax_id: '602214076',
      ss4_file_id: 'string',
      website: 'https://example.com',
    });
  });

  // Prism tests are broken
  test.skip('create_person: only required params', async () => {
    const response = await increase.entities.createPerson({
      address_line1: '33 Liberty Street',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: '10045',
      date_of_birth: '1970-01-31',
      name: 'Ian Crease',
      social_security_number_last4: '1120',
    });
  });

  // Prism tests are broken
  test.skip('create_person: required and optional params', async () => {
    const response = await increase.entities.createPerson({
      address_line1: '33 Liberty Street',
      address_line2: 'x',
      address_city: 'New York',
      address_state: 'NY',
      address_zip: '10045',
      date_of_birth: '1970-01-31',
      name: 'Ian Crease',
      social_security_number_last4: '1120',
    });
  });
});
