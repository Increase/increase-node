// File generated from our OpenAPI spec by Stainless.

import { castToError, Headers } from './core';

export class IncreaseError extends Error {}

export class APIError extends IncreaseError {
  readonly status: number | undefined;
  readonly headers: Headers | undefined;
  readonly error: Object | undefined;

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    super(`${APIError.makeMessage(status, error, message)}`);
    this.status = status;
    this.headers = headers;
    this.error = error;
  }

  private static makeMessage(status: number | undefined, error: any, message: string | undefined) {
    const msg =
      error?.message ?
        typeof error.message === 'string' ?
          error.message
        : JSON.stringify(error.message)
      : error ? JSON.stringify(error)
      : message;

    if (status && msg) {
      return `${status} ${msg}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (msg) {
      return msg;
    }
    return '(no status code or body)';
  }

  static generate(
    status: number | undefined,
    errorResponse: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    if (!status) {
      return new APIConnectionError({ cause: castToError(errorResponse) });
    }

    const error = errorResponse as Record<string, any>;

    const type = error?.['type'];

    if (type === 'invalid_parameters_error') {
      return new InvalidParametersError(status, error, message, headers);
    }

    if (type === 'malformed_request_error') {
      return new MalformedRequestError(status, error, message, headers);
    }

    if (type === 'invalid_api_key_error') {
      return new InvalidAPIKeyError(status, error, message, headers);
    }

    if (type === 'environment_mismatch_error') {
      return new EnvironmentMismatchError(status, error, message, headers);
    }

    if (type === 'insufficient_permissions_error') {
      return new InsufficientPermissionsError(status, error, message, headers);
    }

    if (type === 'private_feature_error') {
      return new PrivateFeatureError(status, error, message, headers);
    }

    if (type === 'api_method_not_found_error') {
      return new APIMethodNotFoundError(status, error, message, headers);
    }

    if (type === 'object_not_found_error') {
      return new ObjectNotFoundError(status, error, message, headers);
    }

    if (type === 'idempotency_conflict_error') {
      return new IdempotencyConflictError(status, error, message, headers);
    }

    if (type === 'invalid_operation_error') {
      return new InvalidOperationError(status, error, message, headers);
    }

    if (type === 'unique_identifier_already_exists_error') {
      return new UniqueIdentifierAlreadyExistsError(status, error, message, headers);
    }

    if (type === 'idempotency_unprocessable_error') {
      return new IdempotencyUnprocessableError(status, error, message, headers);
    }

    if (type === 'rate_limited_error') {
      return new RateLimitedError(status, error, message, headers);
    }

    if (type === 'internal_server_error') {
      return new InternalServerError(status, error, message, headers);
    }
    if (status === 500) {
      return new InternalServerError(
        status,
        { detail: null, status: 500, title: '', type: 'internal_server_error' },
        message,
        headers,
      );
    }

    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }

    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }

    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }

    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }

    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }

    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }

    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }

    return new APIError(status, error, message, headers);
  }
}

export class APIUserAbortError extends APIError {
  override readonly status: undefined = undefined;

  constructor({ message }: { message?: string } = {}) {
    super(undefined, undefined, message || 'Request was aborted.', undefined);
  }
}

export class APIConnectionError extends APIError {
  override readonly status: undefined = undefined;

  constructor({ message, cause }: { message?: string; cause?: Error | undefined }) {
    super(undefined, undefined, message || 'Connection error.', undefined);
    // in some environments the 'cause' property is already declared
    // @ts-ignore
    if (cause) this.cause = cause;
  }
}

export class APIConnectionTimeoutError extends APIConnectionError {
  constructor({ message }: { message?: string } = {}) {
    super({ message: message ?? 'Request timed out.' });
  }
}

export class BadRequestError extends APIError {
  override readonly status: 400 = 400;
}

export class AuthenticationError extends APIError {
  override readonly status: 401 = 401;
}

export class PermissionDeniedError extends APIError {
  override readonly status: 403 = 403;
}

export class NotFoundError extends APIError {
  override readonly status: 404 = 404;
}

export class ConflictError extends APIError {
  override readonly status: 409 = 409;
}

export class UnprocessableEntityError extends APIError {
  override readonly status: 422 = 422;
}

export class RateLimitError extends APIError {
  override readonly status: 429 = 429;
}

export class InvalidParametersError extends BadRequestError {
  detail: string | null;

  /**
   * All errors related to parsing the request parameters.
   */
  errors: Array<unknown>;

  override status: 400;

  title: string;

  type: 'invalid_parameters_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.errors = data?.['errors'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class MalformedRequestError extends BadRequestError {
  detail: string | null;

  override status: 400;

  title: string;

  type: 'malformed_request_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidAPIKeyError extends AuthenticationError {
  detail: string | null;

  override status: 401;

  title: string;

  type: 'invalid_api_key_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class EnvironmentMismatchError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'environment_mismatch_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InsufficientPermissionsError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'insufficient_permissions_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class PrivateFeatureError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'private_feature_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class APIMethodNotFoundError extends NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'api_method_not_found_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class ObjectNotFoundError extends NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'object_not_found_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class IdempotencyConflictError extends ConflictError {
  detail: string | null;

  override status: 409;

  title: string;

  type: 'idempotency_conflict_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidOperationError extends ConflictError {
  detail: string | null;

  override status: 409;

  title: string;

  type: 'invalid_operation_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class UniqueIdentifierAlreadyExistsError extends ConflictError {
  detail: string | null;

  resource_id: string;

  override status: 409;

  title: string;

  type: 'unique_identifier_already_exists_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.resource_id = data?.['resource_id'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class IdempotencyUnprocessableError extends UnprocessableEntityError {
  detail: string | null;

  override status: 422;

  title: string;

  type: 'idempotency_unprocessable_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class RateLimitedError extends RateLimitError {
  detail: string | null;

  override status: 429;

  title: string;

  type: 'rate_limited_error';

  retry_after?: number | null;

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
    this.retry_after = data?.['retry_after'];
  }
}

export class InternalServerError extends APIError {
  detail: string | null;

  override status: 500;

  title: string;

  type: 'internal_server_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}
