// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.entities.create({ structure: 'corporation' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await increase.entities.create({
      structure: 'corporation',
      corporation: {
        address: { city: 'New York', line1: '33 Liberty Street', line2: 'x', state: 'NY', zip: '10045' },
        beneficial_owners: [
          {
            company_title: 'CEO',
            individual: {
              address: {
                city: 'New York',
                line1: '33 Liberty Street',
                line2: 'x',
                state: 'NY',
                zip: '10045',
              },
              confirmed_no_us_tax_id: true,
              date_of_birth: '1970-01-31',
              identification: {
                drivers_license: {
                  back_file_id: 'back_file_id',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                  state: 'x',
                },
                method: 'social_security_number',
                number: '078051120',
                other: {
                  back_file_id: 'back_file_id',
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                },
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'Ian Crease',
            },
            prongs: ['control'],
          },
        ],
        incorporation_state: 'NY',
        industry_code: 'x',
        name: 'National Phonograph Company',
        tax_identifier: '602214076',
        website: 'https://example.com',
      },
      description: 'x',
      government_authority: {
        address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
        authorized_persons: [{ name: 'x' }, { name: 'x' }, { name: 'x' }],
        category: 'municipality',
        name: 'x',
        tax_identifier: 'x',
        website: 'website',
      },
      joint: {
        individuals: [
          {
            address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            date_of_birth: '2019-12-27',
            identification: {
              drivers_license: {
                back_file_id: 'back_file_id',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
                state: 'x',
              },
              method: 'social_security_number',
              number: 'xxxx',
              other: {
                back_file_id: 'back_file_id',
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
              },
              passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
            },
            name: 'x',
          },
          {
            address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            date_of_birth: '2019-12-27',
            identification: {
              drivers_license: {
                back_file_id: 'back_file_id',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
                state: 'x',
              },
              method: 'social_security_number',
              number: 'xxxx',
              other: {
                back_file_id: 'back_file_id',
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
              },
              passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
            },
            name: 'x',
          },
          {
            address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            date_of_birth: '2019-12-27',
            identification: {
              drivers_license: {
                back_file_id: 'back_file_id',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
                state: 'x',
              },
              method: 'social_security_number',
              number: 'xxxx',
              other: {
                back_file_id: 'back_file_id',
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'file_id',
              },
              passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
            },
            name: 'x',
          },
        ],
        name: 'x',
      },
      natural_person: {
        address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
        confirmed_no_us_tax_id: true,
        date_of_birth: '2019-12-27',
        identification: {
          drivers_license: {
            back_file_id: 'back_file_id',
            expiration_date: '2019-12-27',
            file_id: 'file_id',
            state: 'x',
          },
          method: 'social_security_number',
          number: 'xxxx',
          other: {
            back_file_id: 'back_file_id',
            country: 'x',
            description: 'x',
            expiration_date: '2019-12-27',
            file_id: 'file_id',
          },
          passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
        },
        name: 'x',
      },
      supplemental_documents: [{ file_id: 'file_makxrc67oh9l6sg7w9yc' }],
      trust: {
        address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
        category: 'revocable',
        formation_document_file_id: 'formation_document_file_id',
        formation_state: 'x',
        grantor: {
          address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
          confirmed_no_us_tax_id: true,
          date_of_birth: '2019-12-27',
          identification: {
            drivers_license: {
              back_file_id: 'back_file_id',
              expiration_date: '2019-12-27',
              file_id: 'file_id',
              state: 'x',
            },
            method: 'social_security_number',
            number: 'xxxx',
            other: {
              back_file_id: 'back_file_id',
              country: 'x',
              description: 'x',
              expiration_date: '2019-12-27',
              file_id: 'file_id',
            },
            passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
          },
          name: 'x',
        },
        name: 'x',
        tax_identifier: 'x',
        trustees: [
          {
            individual: {
              address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              date_of_birth: '2019-12-27',
              identification: {
                drivers_license: {
                  back_file_id: 'back_file_id',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                  state: 'x',
                },
                method: 'social_security_number',
                number: 'xxxx',
                other: {
                  back_file_id: 'back_file_id',
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                },
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'x',
            },
            structure: 'individual',
          },
          {
            individual: {
              address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              date_of_birth: '2019-12-27',
              identification: {
                drivers_license: {
                  back_file_id: 'back_file_id',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                  state: 'x',
                },
                method: 'social_security_number',
                number: 'xxxx',
                other: {
                  back_file_id: 'back_file_id',
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                },
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'x',
            },
            structure: 'individual',
          },
          {
            individual: {
              address: { city: 'x', line1: 'x', line2: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              date_of_birth: '2019-12-27',
              identification: {
                drivers_license: {
                  back_file_id: 'back_file_id',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                  state: 'x',
                },
                method: 'social_security_number',
                number: 'xxxx',
                other: {
                  back_file_id: 'back_file_id',
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'file_id',
                },
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'x',
            },
            structure: 'individual',
          },
        ],
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = increase.entities.retrieve('entity_n8y8tnk2p9339ti393yi');
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
      increase.entities.retrieve('entity_n8y8tnk2p9339ti393yi', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = increase.entities.list();
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
    await expect(increase.entities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.entities.list(
        {
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['active', 'archived', 'disabled'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = increase.entities.archive('entity_n8y8tnk2p9339ti393yi');
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
      increase.entities.archive('entity_n8y8tnk2p9339ti393yi', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('confirm', async () => {
    const responsePromise = increase.entities.confirm('entity_n8y8tnk2p9339ti393yi', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateAddress: only required params', async () => {
    const responsePromise = increase.entities.updateAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { city: 'New York', line1: '33 Liberty Street', state: 'NY', zip: '10045' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateAddress: required and optional params', async () => {
    const response = await increase.entities.updateAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { city: 'New York', line1: '33 Liberty Street', line2: 'Unit 2', state: 'NY', zip: '10045' },
    });
  });
});
