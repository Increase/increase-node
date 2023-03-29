// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';

export class InvalidParametersError extends Core.BadRequestError {
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
    headers: Core.Headers | undefined,
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

export class MalformedRequestError extends Core.BadRequestError {
  detail: string | null;

  override status: 400;

  title: string;

  type: 'malformed_request_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidAPIKeyError extends Core.AuthenticationError {
  detail: string | null;

  override status: 401;

  title: string;

  type: 'invalid_api_key_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class EnvironmentMismatchError extends Core.PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'environment_mismatch_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InsufficientPermissionsError extends Core.PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'insufficient_permissions_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class PrivateFeatureError extends Core.PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'private_feature_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class APIMethodNotFoundError extends Core.NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'api_method_not_found_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class ObjectNotFoundError extends Core.NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'object_not_found_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class IdempotencyConflictError extends Core.ConflictError {
  detail: string | null;

  override status: 409;

  title: string;

  type: 'idempotency_conflict_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidOperationError extends Core.ConflictError {
  detail: string | null;

  override status: 409;

  title: string;

  type: 'invalid_operation_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class IdempotencyUnprocessableError extends Core.UnprocessableEntityError {
  detail: string | null;

  override status: 422;

  title: string;

  type: 'idempotency_unprocessable_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class RateLimitedError extends Core.RateLimitError {
  detail: string | null;

  override status: 429;

  title: string;

  type: 'rate_limited_error';

  retry_after?: number | null;

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
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

export class InternalServerError extends Core.InternalServerError {
  detail: string | null;

  override status: 500;

  title: string;

  type: 'internal_server_error';

  constructor(
    status: number | undefined,
    error: Object | undefined,
    message: string | undefined,
    headers: Core.Headers | undefined,
  ) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}
