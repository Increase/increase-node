// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { Increase } from './client';

export { Increase };
export default Increase;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export const {
  IncreaseError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  RateLimitedError,
  InvalidAPIKeyError,
  AuthenticationError,
  InternalServerError,
  ObjectNotFoundError,
  PrivateFeatureError,
  PermissionDeniedError,
  InvalidOperationError,
  MalformedRequestError,
  APIMethodNotFoundError,
  InvalidParametersError,
  UnprocessableEntityError,
  EnvironmentMismatchError,
  InsufficientPermissionsError,
  IdempotencyKeyAlreadyUsedError,
} = Errors;

export * from './client';
