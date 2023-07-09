#!/usr/bin/env yarn tsn -T

import Increase, { InvalidAPIKeyError } from 'increase';

const client = new Increase({ apiKey: 'invalid API key' });

async function main() {
  try {
    await client.accounts.retrieve('<account id>');
  } catch (err) {
    if (err instanceof InvalidAPIKeyError) {
      console.log(`Caught InvalidAPIKeyError`);
    } else {
      console.log(`Caught unknown error`);
    }

    console.log(err);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
