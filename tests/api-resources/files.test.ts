// File generated from our OpenAPI spec by Stainless.

import { fileFromPath } from 'formdata-node/file-from-path';

import Increase from '~/index';
const increase = new Increase({ apiKey: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource files', () => {
  // skipped: prism mock server is broken for file uploads
  test.skip('create: only required params', async () => {
    const response = await increase.files.create({
      description: 'x',
      file: await fileFromPath('README.md'),
      purpose: 'check_image_front',
    });
  });

  // skipped: prism mock server is broken for file uploads
  test.skip('create: required and optional params', async () => {
    const response = await increase.files.create({
      description: 'x',
      file: await fileFromPath('README.md'),
      purpose: 'check_image_front',
    });
  });

  test('retrieve', async () => {
    const response = await increase.files.retrieve('file_makxrc67oh9l6sg7w9yc');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.files.retrieve('file_makxrc67oh9l6sg7w9yc', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('list', async () => {
    const response = await increase.files.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(increase.files.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Increase.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      increase.files.list(
        {
          'created_at.after': '2019-12-27T18:11:19.117Z',
          'created_at.before': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_after': '2019-12-27T18:11:19.117Z',
          'created_at.on_or_before': '2019-12-27T18:11:19.117Z',
          cursor: 'string',
          limit: 0,
          'purpose.in': ['check_image_front', 'check_image_front', 'check_image_front'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
