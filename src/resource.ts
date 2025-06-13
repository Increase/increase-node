// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Increase } from './index';

export abstract class APIResource {
  protected _client: Increase;

  constructor(client: Increase) {
    this._client = client;
  }
}
