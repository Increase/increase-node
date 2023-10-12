// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';
import { Response } from 'node-fetch';

const increase = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beneficialOwners', () => {
  test('create: only required params', async () => {
    const responsePromise = increase.entities.beneficialOwners.create({
      beneficial_owner: {
        individual: {
          name: 'Ian Crease',
          date_of_birth: '1970-01-31',
          address: { line1: '33 Liberty Street', city: 'New York', state: 'NY', zip: '10045' },
          identification: { method: 'social_security_number', number: '078051120' },
        },
        prongs: ['control'],
      },
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
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
    const response = await increase.entities.beneficialOwners.create({
      beneficial_owner: {
        individual: {
          name: 'Ian Crease',
          date_of_birth: '1970-01-31',
          address: { line1: '33 Liberty Street', line2: 'x', city: 'New York', state: 'NY', zip: '10045' },
          confirmed_no_us_tax_id: true,
          identification: {
            method: 'social_security_number',
            number: '078051120',
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
        company_title: 'CEO',
        prongs: ['control'],
      },
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = increase.entities.beneficialOwners.archive({
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await increase.entities.beneficialOwners.archive({
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
    });
  });

  test('updateAddress: only required params', async () => {
    const responsePromise = increase.entities.beneficialOwners.updateAddress({
      address: { line1: '33 Liberty Street', city: 'New York', state: 'NY', zip: '10045' },
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
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
    const response = await increase.entities.beneficialOwners.updateAddress({
      address: { line1: '33 Liberty Street', line2: 'Unit 2', city: 'New York', state: 'NY', zip: '10045' },
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
    });
  });
});
