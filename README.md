# Increase Node API Library

[![NPM version](https://img.shields.io/npm/v/increase.svg)](https://npmjs.org/package/increase)

The Increase Node library provides convenient access to the Increase REST API from applications written in server-side JavaScript.
It includes TypeScript definitions for all request params and response fields.

## Documentation

The API documentation can be found [here](https://increase.com/documentation).

## Installation

```sh
npm install --save increase
# or
yarn add increase
```

## Usage

```js
import Increase from 'increase';

const increase = new Increase({
  apiKey: 'my api key', // defaults to process.env["INCREASE_API_KEY"]
  environment: 'sandbox', // defaults to 'production'
});

async function main() {
  const account = await increase.accounts.create({
    name: 'My First Increase Account',
  });

  console.log(account.id);
}
main().catch(console.error)
```

### Usage with TypeScript

Importing, instantiating, and interacting with the library are the same as above.
If you like, you may reference our types directly:

```ts
import Increase from 'increase';

const increase = new Increase({
  apiKey: 'my api key', // defaults to process.env["INCREASE_API_KEY"]
  environment: 'sandbox', // defaults to 'production'
});

async function main() {
  const params: Increase.AccountCreateParams = { name: 'My First Increase Account' };

  const account: Increase.Account = await increase.accounts.create(params);

}
main().catch(console.error)
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

```ts
async function main() {
  const account = await increase.accounts.create({ naem: 'Oops' })
    .catch((err) => {
      if (err instanceof Increase.APIError) {
        console.log(err.status); // 400
        console.log(err.name); // BadRequestError
        console.log(err.error?.type); // missing_param
        console.log(err.error?.title); // Missing param "name"
        console.log(err.error?.detail); // Looks like "naem" may have been a typo?
        console.log(err.error?.status); // 400
        console.log(err.headers); // {server: 'nginx', ...}
      }
    })

}
main().catch(console.error)
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 409 Conflict, 429 Rate Limit,
and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const increase = new Increase({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
increase.accounts.create({ name: 'Jack' }, {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 60 seconds by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const increase = new Increase({
  timeout: 20 * 1000, // 20 seconds (default is 60s)
});

// Override per-request:
increase.accounts.list({ status: 'open' }, {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

List methods in the Increase API are paginated.
Use `for await … of` syntax to iterate through items across all pages.

```js
async function fetchAllAccounts(params) {
  const allAccounts = [];
  // Automatically fetches more pages as needed.
  for await (const account of increase.accounts.list()) {
    allAccounts.push(account);
  }
  return allAccounts;
};
```

## Configuring an HTTP(S) Agent (e.g., for proxies)

By default, this library uses a stable agent for all http/https requests to reuse TCP connections, eliminating many TCP & TLS handshakes and shaving around 100ms off most requests.

If you would like to disable or customize this behavior, for example to use the API behind a proxy, you can pass an `httpAgent` which is used for all requests (be they http or https), for example:

<!-- prettier-ignore -->
```ts
import http from 'http';
import HttpsProxyAgent from 'https-proxy-agent';

// Configure the default for all requests:
const increase = new Increase({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});

// Override per-request:
increase.accounts.list({ status: 'open' }, {
  baseURL: 'http://localhost:8080/test-api',
  httpAgent: new http.Agent({ keepAlive: false }),
})
```

## Status

This package is in beta. Its internals and interfaces are not stable
and subject to change without a major semver bump;
please reach out if you rely on any undocumented behavior.

We are keen for your feedback; please email us at [dev-feedback@increase.com](mailto:dev-feedback@increase.com)
or open an issue with questions, bugs, or suggestions.

## Requirements

Node.js version 12 or higher.

If you are interested in other runtime environments, please open or upvote an issue on Github.
