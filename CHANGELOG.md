# Changelog

## [0.7.1](https://github.com/Increase/increase-node/compare/v0.7.0...v0.7.1) (2023-07-17)


### Features

* **api:** add physical_card_id ([#67](https://github.com/Increase/increase-node/issues/67)) ([b1f92d3](https://github.com/Increase/increase-node/commit/b1f92d350b44e51a33a7053666ec1396996008c4))


### Bug Fixes

* fix errors with "named" client export in CJS ([#70](https://github.com/Increase/increase-node/issues/70)) ([2000849](https://github.com/Increase/increase-node/commit/200084971efad026e0ae309356a2367fed1adc73))


### Documentation

* **readme:** improvements to formatting code snippets ([#64](https://github.com/Increase/increase-node/issues/64)) ([f7b65e9](https://github.com/Increase/increase-node/commit/f7b65e9ffa990f686c5699bc1fef0ca5b6c7fbe6))


### Chores

* **internal:** add helper function for b64 ([#68](https://github.com/Increase/increase-node/issues/68)) ([9ac500a](https://github.com/Increase/increase-node/commit/9ac500a1e7086e6eb2ef379d4d1cf7c7ae201c46))
* **internal:** let `toFile` helper accept promises to objects with name/type properties ([#69](https://github.com/Increase/increase-node/issues/69)) ([b167997](https://github.com/Increase/increase-node/commit/b16799783a94103de0bd64508975a01bfcc12f25))
* **internal:** remove unused streaming implementation ([#66](https://github.com/Increase/increase-node/issues/66)) ([264a739](https://github.com/Increase/increase-node/commit/264a739869652468ede2a9e6b7b42d616986b8aa))

## [0.7.0](https://github.com/Increase/increase-node/compare/v0.6.0...v0.7.0) (2023-07-12)


### ⚠ BREAKING CHANGES

* **api:** add unique_identifier, driver's license backs, inbound funds holds, and more ([#62](https://github.com/Increase/increase-node/issues/62))

### Features

* **api:** add unique_identifier, driver's license backs, inbound funds holds, and more ([#62](https://github.com/Increase/increase-node/issues/62)) ([e253f9c](https://github.com/Increase/increase-node/commit/e253f9c102cf0dc6ae9a8d410edeb5d9acc2ca1a))
* **client:** add support for passing a `signal` request option ([#61](https://github.com/Increase/increase-node/issues/61)) ([a6f79cf](https://github.com/Increase/increase-node/commit/a6f79cfbd172c1389e614b88ea903fcfe976ba2d))
* **client:** improve timeout handling to reuse agent ([#53](https://github.com/Increase/increase-node/issues/53)) ([06559f9](https://github.com/Increase/increase-node/commit/06559f9aa0dce45009612658eca8741c2384fc2c))
* **client:** support passing a custom `fetch` function ([#57](https://github.com/Increase/increase-node/issues/57)) ([7d974fe](https://github.com/Increase/increase-node/commit/7d974fe8a82d8283165ac5f5c14ad7112dab9eda))


### Bug Fixes

* **client:** properly handle multi-byte characters in Content-Length ([#58](https://github.com/Increase/increase-node/issues/58)) ([d75d738](https://github.com/Increase/increase-node/commit/d75d7384d40656252f0021f08083e6b77ea82f0a))
* **examples:** avoid swallowing errors in example scripts ([#55](https://github.com/Increase/increase-node/issues/55)) ([c21fb83](https://github.com/Increase/increase-node/commit/c21fb83ed08b5b4352d634bd10d12cf2b61e809e))
* fix errors in package source files when users go to definition in VSCode ([#52](https://github.com/Increase/increase-node/issues/52)) ([1eeacd4](https://github.com/Increase/increase-node/commit/1eeacd4a52545ab310d35c12698919b8a6312493))
* include README.md, LICENSE and CHANGELOG.md in published package ([#49](https://github.com/Increase/increase-node/issues/49)) ([e0e3baa](https://github.com/Increase/increase-node/commit/e0e3baa15f2b9001eebfdf3e5cb0f8749298dbcd))
* **streaming:** do not abort successfully completed streams ([#60](https://github.com/Increase/increase-node/issues/60)) ([1505b16](https://github.com/Increase/increase-node/commit/1505b16f45fd00a4e87a4ed38237bf51f02e7b32))
* **streaming:** fix response body streaming in non-Chrome environments ([#54](https://github.com/Increase/increase-node/issues/54)) ([f45d825](https://github.com/Increase/increase-node/commit/f45d8256456b25d3b153bb9b514e87ccec8c9b7a))
* **streaming:** polyfill ReadableStream async iterator and text decoding ([#48](https://github.com/Increase/increase-node/issues/48)) ([fd21d9a](https://github.com/Increase/increase-node/commit/fd21d9a8fa0388765ac97515b758c6ecaf0af140))
* support `PromiseLike` input to `toFile` ([#51](https://github.com/Increase/increase-node/issues/51)) ([af64015](https://github.com/Increase/increase-node/commit/af64015afd02218cc2053a52fbc0940ea3a7ad9b))


### Chores

* **internal:** fix release please version config ([#46](https://github.com/Increase/increase-node/issues/46)) ([12ed2c6](https://github.com/Increase/increase-node/commit/12ed2c6687f50b35ab48fb60ae346831d9a02879))


### Refactors

* improve streaming implementation ([#50](https://github.com/Increase/increase-node/issues/50)) ([1b19296](https://github.com/Increase/increase-node/commit/1b192961cfff15c17e1c2d05983ecb39234f3c51))
* **streaming:** make response body streaming polyfill more spec-compliant ([#56](https://github.com/Increase/increase-node/issues/56)) ([d98e28e](https://github.com/Increase/increase-node/commit/d98e28ef0c88ca27370a7b401219618472f49ee9))


### Documentation

* **readme:** minor improvements ([#59](https://github.com/Increase/increase-node/issues/59)) ([7bc48c1](https://github.com/Increase/increase-node/commit/7bc48c174b070af513bf84d15e001670d6499270))

## [0.6.0](https://github.com/Increase/increase-node/compare/v0.5.0...v0.6.0) (2023-07-07)


### ⚠ BREAKING CHANGES

* **api:** add card profiles simulation method ([#42](https://github.com/Increase/increase-node/issues/42))
* import issue with ESM ([#37](https://github.com/Increase/increase-node/issues/37))

### Features

* **api:** add card profiles simulation method ([#42](https://github.com/Increase/increase-node/issues/42)) ([a756866](https://github.com/Increase/increase-node/commit/a756866b4e3200ba8bef94149e99bf050b83cfcd))
* **client:** add support for `defaultQuery` option ([#35](https://github.com/Increase/increase-node/issues/35)) ([eae9716](https://github.com/Increase/increase-node/commit/eae971676c567cb7c1ddba31aae0155e778179d2))


### Bug Fixes

* import issue with ESM ([#37](https://github.com/Increase/increase-node/issues/37)) ([c321dd8](https://github.com/Increase/increase-node/commit/c321dd8593b9c33eb0a3422474cfd66339da2741))


### Refactors

* mark `.responseHeaders` and `.response` as deprecated ([#41](https://github.com/Increase/increase-node/issues/41)) ([54ca3fa](https://github.com/Increase/increase-node/commit/54ca3faf33ade035d6c2be8d6931286b2ca4a0b6))
* move to src directory, improve ecosystem compatibility ([#33](https://github.com/Increase/increase-node/issues/33)) ([7961453](https://github.com/Increase/increase-node/commit/7961453587e1df95b0739f481a10cb5773173046))


### Chores

* **internal:** fix tsc usage ([#40](https://github.com/Increase/increase-node/issues/40)) ([5411f7e](https://github.com/Increase/increase-node/commit/5411f7ea3f4f21900f12fdd6ccf44989c7214493))
* set `noEmit: true` in `tsconfig.json`, since it's for typechecking only ([#43](https://github.com/Increase/increase-node/issues/43)) ([2d40060](https://github.com/Increase/increase-node/commit/2d40060684c161d8eb61fc7230d6887859a856be))


### Documentation

* **api.md:** add context to types exported in a different resource ([#44](https://github.com/Increase/increase-node/issues/44)) ([7204785](https://github.com/Increase/increase-node/commit/72047859b486cc374a8d49781ce342090c79f264))
* **api.md:** fix links not referencing `src` directory ([#36](https://github.com/Increase/increase-node/issues/36)) ([35cccbe](https://github.com/Increase/increase-node/commit/35cccbe76b89d7e8debda7d96e8209623a856f55))
* **client:** improve documentation for client options ([#38](https://github.com/Increase/increase-node/issues/38)) ([2133c8e](https://github.com/Increase/increase-node/commit/2133c8ee1777d4af86d0abf57631a5194e3673f2))
* **types:** add documentation for enum members ([#39](https://github.com/Increase/increase-node/issues/39)) ([aeca9c3](https://github.com/Increase/increase-node/commit/aeca9c370994cf9634d0bcab9513e47ecdb25776))

## [0.5.0](https://github.com/Increase/increase-node/compare/v0.4.0...v0.5.0) (2023-06-29)


### ⚠ BREAKING CHANGES

* **api:** remove many enum members from document category ([#27](https://github.com/Increase/increase-node/issues/27))
* **types:** singularize array item types ([#25](https://github.com/Increase/increase-node/issues/25))

### Features

* **api/types:** mark more check transfer intention properties as nullable ([#26](https://github.com/Increase/increase-node/issues/26)) ([324580e](https://github.com/Increase/increase-node/commit/324580e75db774e8ca3c6561e288c217915b7722))
* support ESM and web platform runtimes; easier file uploads ([#28](https://github.com/Increase/increase-node/issues/28)) ([1d53a8d](https://github.com/Increase/increase-node/commit/1d53a8dd26cfa10c36a1813a9e8d5a78697439e4))
* **types:** export nested types through the root client export ([#23](https://github.com/Increase/increase-node/issues/23)) ([c68b1ae](https://github.com/Increase/increase-node/commit/c68b1ae49b52828121c5042303d74dc10f2960fc))


### Bug Fixes

* **form-data:** strip out undefined properties ([#21](https://github.com/Increase/increase-node/issues/21)) ([dd73783](https://github.com/Increase/increase-node/commit/dd73783b3541ff86ac53e22f397d53a87872f925))


### Refactors

* **api:** remove `other` from reason enum ([#24](https://github.com/Increase/increase-node/issues/24)) ([5d7206a](https://github.com/Increase/increase-node/commit/5d7206a911039f9f2b8c8f40db589777afbad113))
* **api:** remove many enum members from document category ([#27](https://github.com/Increase/increase-node/issues/27)) ([ddcd780](https://github.com/Increase/increase-node/commit/ddcd7807953bc64a4e9f055bb9cd1a671554eaa5))
* **types:** singularize array item types ([#25](https://github.com/Increase/increase-node/issues/25)) ([bb00a48](https://github.com/Increase/increase-node/commit/bb00a48c7c6aee72593c9e79decc9a4127873587))


### Styles

* minor reordering of types and properties ([#29](https://github.com/Increase/increase-node/issues/29)) ([0e6dbc5](https://github.com/Increase/increase-node/commit/0e6dbc537b6a5ff9464de3f3ce2c164f00b79680))


### Chores

* speed up build script slightly ([#30](https://github.com/Increase/increase-node/issues/30)) ([b8ad73c](https://github.com/Increase/increase-node/commit/b8ad73c54aacb5a582826a4d8cfb594f3e1450ee))


### Documentation

* rearrange sections in api.md ([#31](https://github.com/Increase/increase-node/issues/31)) ([a8859f4](https://github.com/Increase/increase-node/commit/a8859f4fcca63820dc3568f7fd9c5a8c5b79c445))

## [0.4.0](https://github.com/Increase/increase-node/compare/v0.3.0...v0.4.0) (2023-06-19)


### ⚠ BREAKING CHANGES

* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#18](https://github.com/Increase/increase-node/issues/18))
* **api:** rename return reason enum member ([#12](https://github.com/Increase/increase-node/issues/12))
* change nested query parameters to be objects ([#8](https://github.com/Increase/increase-node/issues/8))


### Features
* **client:** add support for specifying client-level default headers ([#5](https://github.com/Increase/increase-node/issues/5)) ([609c71a](https://github.com/Increase/increase-node/commit/609c71a7f657ec14fba3fa919d8b0dd4ff1ecb5d))
* **api:** add new endpoints + properties + enums ([#9](https://github.com/Increase/increase-node/issues/9)) ([8fd90c4](https://github.com/Increase/increase-node/commit/8fd90c4b8a50ce9f5a23cc17ee71508df6e34eca))


### Bug Fixes

* **internal:** improve stream cancellation handling of abort controllers ([#17](https://github.com/Increase/increase-node/issues/17)) ([e8f15dd](https://github.com/Increase/increase-node/commit/e8f15dd5c2001dd6b3023266a2471c019ed96739))


### Chores

* **internal:** improve SSE decoding of lines ([#14](https://github.com/Increase/increase-node/issues/14)) ([74b9bdc](https://github.com/Increase/increase-node/commit/74b9bdcaa44639cd99865d8a2701a2232314f0fd))
* **internal:** restructure core streaming implementation ([#7](https://github.com/Increase/increase-node/issues/7)) ([b97964b](https://github.com/Increase/increase-node/commit/b97964bd5e22ed7ce4ffdd8e4a8fe5005db40976))


### Refactors

* **api:** remove unused properties and enum members ([#16](https://github.com/Increase/increase-node/issues/16)) ([51c8ab5](https://github.com/Increase/increase-node/commit/51c8ab5e5415d722768af8c53c5c8453398545a6))
* change nested query parameters to be objects ([#8](https://github.com/Increase/increase-node/issues/8)) ([fdcd3a4](https://github.com/Increase/increase-node/commit/fdcd3a47ff31cece47a646853086f9d9e024720c))
* **api:** rename return reason enum member ([#12](https://github.com/Increase/increase-node/issues/12)) ([51ba5d4](https://github.com/Increase/increase-node/commit/51ba5d42e07dbde522cf7ff49863fc0935c350bb))
* **docs:** cleanup api.md response types ([539848e](https://github.com/Increase/increase-node/commit/539848e9001e424f9492f60d82cfb861316cfcb2))
* move error type definitions to error.ts ([#15](https://github.com/Increase/increase-node/issues/15)) ([e50a9a1](https://github.com/Increase/increase-node/commit/e50a9a1f43e107ae989306f73f210e6b88493d60))


### Documentation

* drop official support for EOL Node versions (Node 12, 13, 14, 15) ([#18](https://github.com/Increase/increase-node/issues/18)) ([f3be71b](https://github.com/Increase/increase-node/commit/f3be71b1191f72a6785f6be07dcf79b45b9640ac))
* point to github repo instead of email contact ([#13](https://github.com/Increase/increase-node/issues/13)) ([72d7fef](https://github.com/Increase/increase-node/commit/72d7fef408e625906e2ec59c29b9a63ea5a9d64c))
* slight improvement to file uploads example ([#10](https://github.com/Increase/increase-node/issues/10)) ([b134725](https://github.com/Increase/increase-node/commit/b1347253a900c1af41a66363bc225a2b09a9e4c3))


### Build System

* add `.github` folder to `.npmignore` ([#19](https://github.com/Increase/increase-node/issues/19)) ([a263289](https://github.com/Increase/increase-node/commit/a263289da32b5e0d708c5c21a92a6a58faf74abc))

## [0.3.0](https://github.com/Increase/increase-node/compare/increase-v0.2.0...increase-v0.3.0) (2023-05-31)


### ⚠ BREAKING CHANGES

* **api:** `notification_of_change` has been removed in favor of the new `notifications_of_change` list field

### Features

* add additional coercion functions ([5f106bf](https://github.com/Increase/increase-node/commit/5f106bf9d3e0ee1c5b5fc81d112677e2c7580b82))
* add internal support for streaming responses ([a1c321e](https://github.com/Increase/increase-node/commit/a1c321edc8fd648c9f318e047db5dafb7e37eabe))
* add internal support for streaming responses ([a1c321e](https://github.com/Increase/increase-node/commit/a1c321edc8fd648c9f318e047db5dafb7e37eabe))
* add webhook HMAC verification helper methods ([7a00853](https://github.com/Increase/increase-node/commit/7a00853a03b5b606df2c5c9095c53db2a4957af8))
* **api:** add `at_time` property for balance lookups ([0b6c0de](https://github.com/Increase/increase-node/commit/0b6c0de8d25b04fb95b16d902d90d116d617af76))
* **api:** add `collection_receivable` to transaction source category enum ([e743cc9](https://github.com/Increase/increase-node/commit/e743cc9ad5855d7c16b2c1f3a1a41dc06581d01d))
* **api:** add `expires_at` property ([c257707](https://github.com/Increase/increase-node/commit/c2577077bd280793bedf9ff8f802017784da7468))
* **api:** add `simulations.checkTransfers.return()` method ([e7d330a](https://github.com/Increase/increase-node/commit/e7d330ab5d899ed2305530c0f23fe1fe36eee1a8))
* **api:** add `simulations.checkTransfers.return()` method ([e7d330a](https://github.com/Increase/increase-node/commit/e7d330ab5d899ed2305530c0f23fe1fe36eee1a8))
* **api:** add bookkeeping accounts, entries, and entry sets, and several other changes ([d63d4e7](https://github.com/Increase/increase-node/commit/d63d4e71e0d10e70f8d9257ff3ad903b41c64fbe))
* **api:** add new endpoints ([7d4ebe6](https://github.com/Increase/increase-node/commit/7d4ebe6f0a38e7fade250ece8e50c8d9f6c6d653))
* **api:** add new endpoints, several params, fields, enum members, and documentation updates ([8ffb013](https://github.com/Increase/increase-node/commit/8ffb0130a53a90c5b00c314850f33bc5af4cb070))
* **api:** add new enum members ([0785f7a](https://github.com/Increase/increase-node/commit/0785f7a13f2c7194ed3f9f940a34b262c6b25027))
* **api:** add new fields ([3d9c69b](https://github.com/Increase/increase-node/commit/3d9c69bddf970739f0b91eb4962a058e9ee756c8))
* **api:** add new methods ([ca41987](https://github.com/Increase/increase-node/commit/ca41987401784ddb2266bd1a32b08f2f58864ceb))
* **api:** add optional `pending_transaction_id` field to pending transaction ([fa011e7](https://github.com/Increase/increase-node/commit/fa011e7adb44fb954efa3024b01f88aab3d789ed))
* **api:** add wire decline object ([2d2e77e](https://github.com/Increase/increase-node/commit/2d2e77eaf2c7244d7491153f32f70aae537a62c9))
* **api:** enum updates ([f09e25a](https://github.com/Increase/increase-node/commit/f09e25a7e4683beb2779fd76a46c2c629414810b))
* **api:** make routeType an enum & add ACHTransfer.effectiveDate ([77fd8ea](https://github.com/Increase/increase-node/commit/77fd8ea44236307fb6a8e7d464db55f8e3ba5fd9))
* **api:** make routeType an enum & add ACHTransfer.effectiveDate ([77fd8ea](https://github.com/Increase/increase-node/commit/77fd8ea44236307fb6a8e7d464db55f8e3ba5fd9))
* **api:** replace notification_of_change with a list, and add merchant_acceptor_id ([831e49e](https://github.com/Increase/increase-node/commit/831e49e0d1fbf8dd57ea204d89b1be2d69d1ee75))
* **api:** updates ([ad907d5](https://github.com/Increase/increase-node/commit/ad907d5bf9f6fd2ffe7c8fb89c884d5ba0065593))
* **api:** updates ([ca80997](https://github.com/Increase/increase-node/commit/ca80997fc7397066ac6149e8db65d6541bf012de))
* **api:** updates ([ca80997](https://github.com/Increase/increase-node/commit/ca80997fc7397066ac6149e8db65d6541bf012de))
* **api:** updates ([651bf76](https://github.com/Increase/increase-node/commit/651bf7670c167ffc41eb40c0e226fc76062a4305))
* **api:** updates ([e58e324](https://github.com/Increase/increase-node/commit/e58e3241015e95afac62550f5b0f1d152dba999b))
* **client:** handle trailing slash in base url properly ([a03d867](https://github.com/Increase/increase-node/commit/a03d86797fa71036cc45b241a1de1b5edb82e416))
* **docs:** add more doc comments ([b8bc790](https://github.com/Increase/increase-node/commit/b8bc790a3e06fa3b8a9e6a5299c9e8e1db0b671d))
* **docs:** updates ([6cea39c](https://github.com/Increase/increase-node/commit/6cea39cd892b2fdae5b7b2a171f9acbcab0e6f62))
* improve docs and add new property ([418fe83](https://github.com/Increase/increase-node/commit/418fe831af1fcb216ea938930a956b6f1d3083d7))
* improve error types ([db09c19](https://github.com/Increase/increase-node/commit/db09c19c6017817aba695bffd29c63cf5e31f5f3))
* improve error types ([db09c19](https://github.com/Increase/increase-node/commit/db09c19c6017817aba695bffd29c63cf5e31f5f3))
* **internal:** add support for positional params ([9cafda3](https://github.com/Increase/increase-node/commit/9cafda3db2f6d124839dabd66e4997826384d197))
* **internal:** add support for positional params ([9cafda3](https://github.com/Increase/increase-node/commit/9cafda3db2f6d124839dabd66e4997826384d197))
* **internal:** improve example generation ([e0fa5b3](https://github.com/Increase/increase-node/commit/e0fa5b3a5654d032d0ff98964ed055a27be4c5e7))
* **internal:** improve example generation ([e0fa5b3](https://github.com/Increase/increase-node/commit/e0fa5b3a5654d032d0ff98964ed055a27be4c5e7))
* **internal:** internal fixes ([4848450](https://github.com/Increase/increase-node/commit/4848450f8a0cbfa465097b154ccf866766146490))
* **internal:** internal fixes ([4848450](https://github.com/Increase/increase-node/commit/4848450f8a0cbfa465097b154ccf866766146490))
* **internal:** re-export `fileFromPath` helper util from the root ([09c0c79](https://github.com/Increase/increase-node/commit/09c0c795a42f8f15ae6008aa8e6baaaa22261dc2))
* **internal:** re-export `fileFromPath` helper util from the root ([09c0c79](https://github.com/Increase/increase-node/commit/09c0c795a42f8f15ae6008aa8e6baaaa22261dc2))
* send Idempotency-Key by default for POST requests ([4c15f76](https://github.com/Increase/increase-node/commit/4c15f76c2f04b92e0dd99045f4f801013c105afc))
* send Idempotency-Key by default for POST requests ([4c15f76](https://github.com/Increase/increase-node/commit/4c15f76c2f04b92e0dd99045f4f801013c105afc))
* **tsconfig:** set declarationMap: true ([50c755f](https://github.com/Increase/increase-node/commit/50c755f0f5df98074094175e71670d4f45366fb4))
* **tsconfig:** set declarationMap: true ([50c755f](https://github.com/Increase/increase-node/commit/50c755f0f5df98074094175e71670d4f45366fb4))
* update docs ([facb322](https://github.com/Increase/increase-node/commit/facb322b04c7951ea764b7db610902812cf5a7be))


### Bug Fixes

* allow importing in typescript without manually installing @types/web ([d802d9e](https://github.com/Increase/increase-node/commit/d802d9e0d145e1b183d476b47764a48f0de08497))
* bump @types/node version ([7915638](https://github.com/Increase/increase-node/commit/7915638b2e4302a5ed0b9adc024916fccde742c4))
* change unknown type generation to `interface{}` ([532c5ec](https://github.com/Increase/increase-node/commit/532c5ec12522300e92b4a05f731f8911a6afd3ec))
* change unknown type generation to `interface{}` ([532c5ec](https://github.com/Increase/increase-node/commit/532c5ec12522300e92b4a05f731f8911a6afd3ec))
* **client:** properly expose `maxRetries` option ([dfdce20](https://github.com/Increase/increase-node/commit/dfdce20b7a485d0f15182546f47ae340c6280ae7))
* **internal:** fix TS error when setting global AbortController polyfill ([00c0df8](https://github.com/Increase/increase-node/commit/00c0df83c4ad058271e7207db244ed12c3fe856d))
* **internal:** fix TS error when setting global AbortController polyfill ([00c0df8](https://github.com/Increase/increase-node/commit/00c0df83c4ad058271e7207db244ed12c3fe856d))
* polyfill AbortController more safely ([71e0db3](https://github.com/Increase/increase-node/commit/71e0db32ccd0073e052edf6b33bd170e6c5bf7c8))
* polyfill AbortController more safely ([71e0db3](https://github.com/Increase/increase-node/commit/71e0db32ccd0073e052edf6b33bd170e6c5bf7c8))
* **sse:** handle server-sent events more robustly ([8dddf91](https://github.com/Increase/increase-node/commit/8dddf917c64db1623b7f4c756539abfe67ab4dd0))


### Reverts

* remove `crypto` module import ([b82e4b7](https://github.com/Increase/increase-node/commit/b82e4b7b2755d9ae1556a0d2bb9d5f30218e56fd))
* remove `crypto` module import ([b82e4b7](https://github.com/Increase/increase-node/commit/b82e4b7b2755d9ae1556a0d2bb9d5f30218e56fd))


### Refactors

* **docs:** cleanup api.md response types ([539848e](https://github.com/Increase/increase-node/commit/539848e9001e424f9492f60d82cfb861316cfcb2))
* remove ability to read the api key from the environment ([3051874](https://github.com/Increase/increase-node/commit/30518740b1c8226ee79d959febb32b517631d0bd))
* reorganize pagination class definitions ([972a30e](https://github.com/Increase/increase-node/commit/972a30e58fb19c4e46d38dddd2b2acd1288f1e36))
* reorganize pagination class definitions ([972a30e](https://github.com/Increase/increase-node/commit/972a30e58fb19c4e46d38dddd2b2acd1288f1e36))
