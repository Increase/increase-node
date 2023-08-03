// File generated from our OpenAPI spec by Stainless.

import Increase from 'increase';

const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource beneficialOwners', () => {
  test('create: only required params', async () => {
    const response = await increase.entities.beneficialOwners.create('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner: {
        individual: {
          name: 'x',
          date_of_birth: '2019-12-27',
          address: { line1: 'x', city: 'x', state: 'x', zip: 'x' },
          identification: { method: 'social_security_number', number: 'xxxx' },
        },
        prong: 'ownership',
      },
    });
  });

  test('create: required and optional params', async () => {
    const response = await increase.entities.beneficialOwners.create('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner: {
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
        prong: 'ownership',
      },
    });
  });
});
