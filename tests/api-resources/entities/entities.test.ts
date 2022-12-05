// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource entities', () => {
  test('create: only required params', async () => {
    const response = await increase.entities.create({
      structure: 'corporation',
      relationship: 'informational',
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.entities.create({
      structure: 'corporation',
      corporation: {
        name: 'National Phonograph Company',
        website: 'https://example.com',
        tax_identifier: '602214076',
        incorporation_state: 'NY',
        address: { line1: '33 Liberty Street', line2: 'x', city: 'New York', state: 'NY', zip: '10045' },
        beneficial_owners: [
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
            company_title: 'x',
            prong: 'ownership',
          },
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
            company_title: 'x',
            prong: 'ownership',
          },
          {
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
            company_title: 'x',
            prong: 'ownership',
          },
        ],
      },
      natural_person: {
        name: 'x',
        date_of_birth: '2019-12-27T18:11:19.117Z',
        address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
        identification: {
          method: 'social_security_number',
          number: 'x',
          passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
        },
      },
      joint: {
        name: 'x',
        individuals: [
          {
            name: 'x',
            date_of_birth: '2019-12-27T18:11:19.117Z',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            identification: {
              method: 'social_security_number',
              number: 'x',
              passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
            },
          },
          {
            name: 'x',
            date_of_birth: '2019-12-27T18:11:19.117Z',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            identification: {
              method: 'social_security_number',
              number: 'x',
              passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
            },
          },
          {
            name: 'x',
            date_of_birth: '2019-12-27T18:11:19.117Z',
            address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
            identification: {
              method: 'social_security_number',
              number: 'x',
              passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
            },
          },
        ],
      },
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
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
          },
          {
            structure: 'individual',
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
          },
          {
            structure: 'individual',
            individual: {
              name: 'x',
              date_of_birth: '2019-12-27T18:11:19.117Z',
              address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
              identification: {
                method: 'social_security_number',
                number: 'x',
                passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
              },
            },
          },
        ],
        grantor: {
          name: 'x',
          date_of_birth: '2019-12-27T18:11:19.117Z',
          address: { line1: 'x', line2: 'x', city: 'x', state: 'x', zip: 'x' },
          identification: {
            method: 'social_security_number',
            number: 'x',
            passport: { file_id: 'string', expiration_date: '2019-12-27T18:11:19.117Z', country: 'x' },
          },
        },
      },
      description: 'x',
      relationship: 'informational',
      supplemental_documents: [{ file_id: 'string' }, { file_id: 'string' }, { file_id: 'string' }],
    });
  });

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
});
