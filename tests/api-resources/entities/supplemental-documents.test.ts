// File generated from our OpenAPI spec by Stainless.

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource supplemental_documents', () => {
  test('create', async () => {
    const response = await increase.entities.supplementalDocuments.create('entity_n8y8tnk2p9339ti393yi', {
      file_id: 'file_makxrc67oh9l6sg7w9yc',
    });
  });
});
