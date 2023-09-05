// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource entities', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.entities.create({
      relationship: 'affiliated',
      structure: 'corporation',
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
    const response = await increase.entities.create({
      relationship: 'affiliated',
      structure: 'corporation',
      corporation: {
        name: 'x',
        website: 'string',
        tax_identifier: 'x',
        incorporation_state: 'x',
        address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
        beneficial_owners: [
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
            company_title: 'x',
            prongs: ['ownership', 'ownership', 'ownership'],
          },
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
            company_title: 'x',
            prongs: ['ownership', 'ownership', 'ownership'],
          },
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
            company_title: 'x',
            prongs: ['ownership', 'ownership', 'ownership'],
          },
        ],
      },
      description: 'x',
      joint: {
        name: 'x',
        individuals: [
          {
            name: 'x',
            date_of_birth: '2019-12-27',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            identification: {
              method: 'social_security_number',
              number: 'xxxx',
              passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
              drivers_license: {
                file_id: 'string',
                back_file_id: 'string',
                expiration_date: '2019-12-27',
                state: 'x',
              },
              other: {
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'string',
                back_file_id: 'string',
              },
            },
          },
          {
            name: 'x',
            date_of_birth: '2019-12-27',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            identification: {
              method: 'social_security_number',
              number: 'xxxx',
              passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
              drivers_license: {
                file_id: 'string',
                back_file_id: 'string',
                expiration_date: '2019-12-27',
                state: 'x',
              },
              other: {
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'string',
                back_file_id: 'string',
              },
            },
          },
          {
            name: 'x',
            date_of_birth: '2019-12-27',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            confirmed_no_us_tax_id: true,
            identification: {
              method: 'social_security_number',
              number: 'xxxx',
              passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
              drivers_license: {
                file_id: 'string',
                back_file_id: 'string',
                expiration_date: '2019-12-27',
                state: 'x',
              },
              other: {
                country: 'x',
                description: 'x',
                expiration_date: '2019-12-27',
                file_id: 'string',
                back_file_id: 'string',
              },
            },
          },
        ],
      },
      natural_person: {
        name: 'x',
        date_of_birth: '2019-12-27',
        address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
        confirmed_no_us_tax_id: true,
        identification: {
          method: 'social_security_number',
          number: 'xxxx',
          passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
          drivers_license: {
            file_id: 'string',
            back_file_id: 'string',
            expiration_date: '2019-12-27',
            state: 'x',
          },
          other: {
            country: 'x',
            description: 'x',
            expiration_date: '2019-12-27',
            file_id: 'string',
            back_file_id: 'string',
          },
        },
      },
      supplemental_documents: [{ file_id: 'string' }, { file_id: 'string' }, { file_id: 'string' }],
      trust: {
        name: 'x',
        category: 'revocable',
        tax_identifier: 'x',
        formation_state: 'x',
        address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
        formation_document_file_id: 'string',
        trustees: [
          {
            structure: 'individual',
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
          },
          {
            structure: 'individual',
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
          },
          {
            structure: 'individual',
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              confirmed_no_us_tax_id: true,
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
                passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
                drivers_license: {
                  file_id: 'string',
                  back_file_id: 'string',
                  expiration_date: '2019-12-27',
                  state: 'x',
                },
                other: {
                  country: 'x',
                  description: 'x',
                  expiration_date: '2019-12-27',
                  file_id: 'string',
                  back_file_id: 'string',
                },
              },
            },
          },
        ],
        grantor: {
          name: 'x',
          date_of_birth: '2019-12-27',
          address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
          confirmed_no_us_tax_id: true,
          identification: {
            method: 'social_security_number',
            number: 'xxxx',
            passport: { file_id: 'string', expiration_date: '2019-12-27', country: 'x' },
            drivers_license: {
              file_id: 'string',
              back_file_id: 'string',
              expiration_date: '2019-12-27',
              state: 'x',
            },
            other: {
              country: 'x',
              description: 'x',
              expiration_date: '2019-12-27',
              file_id: 'string',
              back_file_id: 'string',
            },
          },
        },
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
          cursor: 'string',
          limit: 0,
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

  test('updateAddress: only required params', async () => {
    const responsePromise = increase.entities.updateAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { line1: 'x', city: 'x', state: 'x', zip: 'x' },
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
      address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
    });
  });
});
