// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'increase/resource';
import { HeadersLike } from 'increase/core';
import { createHmac } from 'crypto';
import { getRequiredHeader } from 'increase/core';

export class Webhooks extends APIResource {
  /**
   * Validates that the given payload was sent by Increase and parses the payload.
   */
  unwrap(
    payload: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): Record<string, unknown> {
    if (secret) {
      this.verifySignature(payload, headers, secret);
    }

    return JSON.parse(payload);
  }

  private validateSecret(secret: string | null | undefined): asserts secret is string {
    if (typeof secret !== 'string') {
      throw new Error(
        `The webhook secret must either be set using the env var, INCREASE_WEBHOOK_SECRET, on the client class, Increase({ webhook_secret: '123' }), or passed to this function`,
      );
    }
  }

  private signPayload(payload: string, { timestamp, secret }: { timestamp: string; secret: string }) {
    const hmac = createHmac('sha256', secret);
    hmac.update(`${timestamp}.${payload}`);

    return hmac.digest('hex');
  }

  /** Make an assertion, if not `true`, then throw. */
  private assert(expr: unknown, msg = ''): asserts expr {
    if (!expr) {
      throw new Error(msg);
    }
  }

  /** Compare to array buffers or data views in a way that timing based attacks
   * cannot gain information about the platform. */
  private timingSafeEqual(
    a: ArrayBufferView | ArrayBufferLike | DataView,
    b: ArrayBufferView | ArrayBufferLike | DataView,
  ): boolean {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    if (!(a instanceof DataView)) {
      a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
      b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    this.assert(a instanceof DataView);
    this.assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while (++i < length) {
      out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
  }

  /**
   * Validates whether or not the webhook payload was sent by Increase.
   *
   * An error will be raised if the webhook payload was not sent by Increase.
   */
  verifySignature(
    payload: string,
    headers: HeadersLike,
    secret: string | undefined | null = this._client.webhookSecret,
  ): void {
    this.validateSecret(secret);

    interface ParsedSignature {
      t?: string;
      v1?: string;
    }

    const { t: timestamp, v1: signature } = getRequiredHeader(headers, 'Increase-Webhook-Signature')
      .split(',')
      .map((kv) => kv.split('='))
      .reduce((acc, [k, v]) => ({ ...acc, [k as string]: v }), {} as ParsedSignature);

    if (timestamp === undefined) {
      throw new Error('Unable to verify signature, missing timestamp');
    }

    if (signature === undefined) {
      throw new Error('Unable to verify signature, missing signature');
    }

    const expectedSignature = this.signPayload(payload, { timestamp, secret });

    const textEncoder = new TextEncoder();
    if (this.timingSafeEqual(textEncoder.encode(signature), textEncoder.encode(expectedSignature))) {
      return;
    }

    throw new Error('The given webhook signature does not match the expected signature');
  }
}
