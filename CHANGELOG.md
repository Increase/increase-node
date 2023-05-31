# Changelog

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
