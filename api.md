# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">BalanceLookup</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(accountId) -> Account</code>
- <code title="patch /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(accountId, { ...params }) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountsPage</code>
- <code title="get /accounts/{account_id}/balance">client.accounts.<a href="./src/resources/accounts.ts">balance</a>(accountId, { ...params }) -> BalanceLookup</code>
- <code title="post /accounts/{account_id}/close">client.accounts.<a href="./src/resources/accounts.ts">close</a>(accountId) -> Account</code>

# AccountNumbers

Types:

- <code><a href="./src/resources/account-numbers.ts">AccountNumber</a></code>

Methods:

- <code title="post /account_numbers">client.accountNumbers.<a href="./src/resources/account-numbers.ts">create</a>({ ...params }) -> AccountNumber</code>
- <code title="get /account_numbers/{account_number_id}">client.accountNumbers.<a href="./src/resources/account-numbers.ts">retrieve</a>(accountNumberId) -> AccountNumber</code>
- <code title="patch /account_numbers/{account_number_id}">client.accountNumbers.<a href="./src/resources/account-numbers.ts">update</a>(accountNumberId, { ...params }) -> AccountNumber</code>
- <code title="get /account_numbers">client.accountNumbers.<a href="./src/resources/account-numbers.ts">list</a>({ ...params }) -> AccountNumbersPage</code>

# AccountTransfers

Types:

- <code><a href="./src/resources/account-transfers.ts">AccountTransfer</a></code>

Methods:

- <code title="post /account_transfers">client.accountTransfers.<a href="./src/resources/account-transfers.ts">create</a>({ ...params }) -> AccountTransfer</code>
- <code title="get /account_transfers/{account_transfer_id}">client.accountTransfers.<a href="./src/resources/account-transfers.ts">retrieve</a>(accountTransferId) -> AccountTransfer</code>
- <code title="get /account_transfers">client.accountTransfers.<a href="./src/resources/account-transfers.ts">list</a>({ ...params }) -> AccountTransfersPage</code>
- <code title="post /account_transfers/{account_transfer_id}/approve">client.accountTransfers.<a href="./src/resources/account-transfers.ts">approve</a>(accountTransferId) -> AccountTransfer</code>
- <code title="post /account_transfers/{account_transfer_id}/cancel">client.accountTransfers.<a href="./src/resources/account-transfers.ts">cancel</a>(accountTransferId) -> AccountTransfer</code>

# Cards

Types:

- <code><a href="./src/resources/cards.ts">Card</a></code>
- <code><a href="./src/resources/cards.ts">CardDetails</a></code>
- <code><a href="./src/resources/cards.ts">CardIframeURL</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./src/resources/cards.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /cards/{card_id}">client.cards.<a href="./src/resources/cards.ts">retrieve</a>(cardId) -> Card</code>
- <code title="patch /cards/{card_id}">client.cards.<a href="./src/resources/cards.ts">update</a>(cardId, { ...params }) -> Card</code>
- <code title="get /cards">client.cards.<a href="./src/resources/cards.ts">list</a>({ ...params }) -> CardsPage</code>
- <code title="post /cards/{card_id}/create_details_iframe">client.cards.<a href="./src/resources/cards.ts">createDetailsIframe</a>(cardId, { ...params }) -> CardIframeURL</code>
- <code title="get /cards/{card_id}/details">client.cards.<a href="./src/resources/cards.ts">details</a>(cardId) -> CardDetails</code>
- <code title="post /cards/{card_id}/update_pin">client.cards.<a href="./src/resources/cards.ts">updatePin</a>(cardId, { ...params }) -> CardDetails</code>

# CardPayments

Types:

- <code><a href="./src/resources/card-payments.ts">CardPayment</a></code>

Methods:

- <code title="get /card_payments/{card_payment_id}">client.cardPayments.<a href="./src/resources/card-payments.ts">retrieve</a>(cardPaymentId) -> CardPayment</code>
- <code title="get /card_payments">client.cardPayments.<a href="./src/resources/card-payments.ts">list</a>({ ...params }) -> CardPaymentsPage</code>

# CardPurchaseSupplements

Types:

- <code><a href="./src/resources/card-purchase-supplements.ts">CardPurchaseSupplement</a></code>

Methods:

- <code title="get /card_purchase_supplements/{card_purchase_supplement_id}">client.cardPurchaseSupplements.<a href="./src/resources/card-purchase-supplements.ts">retrieve</a>(cardPurchaseSupplementId) -> CardPurchaseSupplement</code>
- <code title="get /card_purchase_supplements">client.cardPurchaseSupplements.<a href="./src/resources/card-purchase-supplements.ts">list</a>({ ...params }) -> CardPurchaseSupplementsPage</code>

# PhysicalCards

Types:

- <code><a href="./src/resources/physical-cards.ts">PhysicalCard</a></code>

Methods:

- <code title="post /physical_cards">client.physicalCards.<a href="./src/resources/physical-cards.ts">create</a>({ ...params }) -> PhysicalCard</code>
- <code title="get /physical_cards/{physical_card_id}">client.physicalCards.<a href="./src/resources/physical-cards.ts">retrieve</a>(physicalCardId) -> PhysicalCard</code>
- <code title="patch /physical_cards/{physical_card_id}">client.physicalCards.<a href="./src/resources/physical-cards.ts">update</a>(physicalCardId, { ...params }) -> PhysicalCard</code>
- <code title="get /physical_cards">client.physicalCards.<a href="./src/resources/physical-cards.ts">list</a>({ ...params }) -> PhysicalCardsPage</code>

# DigitalCardProfiles

Types:

- <code><a href="./src/resources/digital-card-profiles.ts">DigitalCardProfile</a></code>

Methods:

- <code title="post /digital_card_profiles">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">create</a>({ ...params }) -> DigitalCardProfile</code>
- <code title="get /digital_card_profiles/{digital_card_profile_id}">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">retrieve</a>(digitalCardProfileId) -> DigitalCardProfile</code>
- <code title="get /digital_card_profiles">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">list</a>({ ...params }) -> DigitalCardProfilesPage</code>
- <code title="post /digital_card_profiles/{digital_card_profile_id}/archive">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">archive</a>(digitalCardProfileId) -> DigitalCardProfile</code>
- <code title="post /digital_card_profiles/{digital_card_profile_id}/clone">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">clone</a>(digitalCardProfileId, { ...params }) -> DigitalCardProfile</code>

# PhysicalCardProfiles

Types:

- <code><a href="./src/resources/physical-card-profiles.ts">PhysicalCardProfile</a></code>

Methods:

- <code title="post /physical_card_profiles">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">create</a>({ ...params }) -> PhysicalCardProfile</code>
- <code title="get /physical_card_profiles/{physical_card_profile_id}">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">retrieve</a>(physicalCardProfileId) -> PhysicalCardProfile</code>
- <code title="get /physical_card_profiles">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">list</a>({ ...params }) -> PhysicalCardProfilesPage</code>
- <code title="post /physical_card_profiles/{physical_card_profile_id}/archive">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">archive</a>(physicalCardProfileId) -> PhysicalCardProfile</code>
- <code title="post /physical_card_profiles/{physical_card_profile_id}/clone">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">clone</a>(physicalCardProfileId, { ...params }) -> PhysicalCardProfile</code>

# DigitalWalletTokens

Types:

- <code><a href="./src/resources/digital-wallet-tokens.ts">DigitalWalletToken</a></code>

Methods:

- <code title="get /digital_wallet_tokens/{digital_wallet_token_id}">client.digitalWalletTokens.<a href="./src/resources/digital-wallet-tokens.ts">retrieve</a>(digitalWalletTokenId) -> DigitalWalletToken</code>
- <code title="get /digital_wallet_tokens">client.digitalWalletTokens.<a href="./src/resources/digital-wallet-tokens.ts">list</a>({ ...params }) -> DigitalWalletTokensPage</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /transactions/{transaction_id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionId) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionsPage</code>

# PendingTransactions

Types:

- <code><a href="./src/resources/pending-transactions.ts">PendingTransaction</a></code>

Methods:

- <code title="post /pending_transactions">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">create</a>({ ...params }) -> PendingTransaction</code>
- <code title="get /pending_transactions/{pending_transaction_id}">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">retrieve</a>(pendingTransactionId) -> PendingTransaction</code>
- <code title="get /pending_transactions">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">list</a>({ ...params }) -> PendingTransactionsPage</code>
- <code title="post /pending_transactions/{pending_transaction_id}/release">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">release</a>(pendingTransactionId) -> PendingTransaction</code>

# DeclinedTransactions

Types:

- <code><a href="./src/resources/declined-transactions.ts">DeclinedTransaction</a></code>

Methods:

- <code title="get /declined_transactions/{declined_transaction_id}">client.declinedTransactions.<a href="./src/resources/declined-transactions.ts">retrieve</a>(declinedTransactionId) -> DeclinedTransaction</code>
- <code title="get /declined_transactions">client.declinedTransactions.<a href="./src/resources/declined-transactions.ts">list</a>({ ...params }) -> DeclinedTransactionsPage</code>

# ACHTransfers

Types:

- <code><a href="./src/resources/ach-transfers.ts">ACHTransfer</a></code>

Methods:

- <code title="post /ach_transfers">client.achTransfers.<a href="./src/resources/ach-transfers.ts">create</a>({ ...params }) -> ACHTransfer</code>
- <code title="get /ach_transfers/{ach_transfer_id}">client.achTransfers.<a href="./src/resources/ach-transfers.ts">retrieve</a>(achTransferId) -> ACHTransfer</code>
- <code title="get /ach_transfers">client.achTransfers.<a href="./src/resources/ach-transfers.ts">list</a>({ ...params }) -> ACHTransfersPage</code>
- <code title="post /ach_transfers/{ach_transfer_id}/approve">client.achTransfers.<a href="./src/resources/ach-transfers.ts">approve</a>(achTransferId) -> ACHTransfer</code>
- <code title="post /ach_transfers/{ach_transfer_id}/cancel">client.achTransfers.<a href="./src/resources/ach-transfers.ts">cancel</a>(achTransferId) -> ACHTransfer</code>

# ACHPrenotifications

Types:

- <code><a href="./src/resources/ach-prenotifications.ts">ACHPrenotification</a></code>

Methods:

- <code title="post /ach_prenotifications">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">create</a>({ ...params }) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications/{ach_prenotification_id}">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">retrieve</a>(achPrenotificationId) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">list</a>({ ...params }) -> ACHPrenotificationsPage</code>

# InboundACHTransfers

Types:

- <code><a href="./src/resources/inbound-ach-transfers.ts">InboundACHTransfer</a></code>

Methods:

- <code title="get /inbound_ach_transfers/{inbound_ach_transfer_id}">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">retrieve</a>(inboundACHTransferId) -> InboundACHTransfer</code>
- <code title="get /inbound_ach_transfers">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">list</a>({ ...params }) -> InboundACHTransfersPage</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/create_notification_of_change">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">createNotificationOfChange</a>(inboundACHTransferId, { ...params }) -> InboundACHTransfer</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/decline">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">decline</a>(inboundACHTransferId, { ...params }) -> InboundACHTransfer</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/transfer_return">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">transferReturn</a>(inboundACHTransferId, { ...params }) -> InboundACHTransfer</code>

# WireTransfers

Types:

- <code><a href="./src/resources/wire-transfers.ts">WireTransfer</a></code>

Methods:

- <code title="post /wire_transfers">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">create</a>({ ...params }) -> WireTransfer</code>
- <code title="get /wire_transfers/{wire_transfer_id}">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">retrieve</a>(wireTransferId) -> WireTransfer</code>
- <code title="get /wire_transfers">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">list</a>({ ...params }) -> WireTransfersPage</code>
- <code title="post /wire_transfers/{wire_transfer_id}/approve">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">approve</a>(wireTransferId) -> WireTransfer</code>
- <code title="post /wire_transfers/{wire_transfer_id}/cancel">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">cancel</a>(wireTransferId) -> WireTransfer</code>

# InboundWireTransfers

Types:

- <code><a href="./src/resources/inbound-wire-transfers.ts">InboundWireTransfer</a></code>

Methods:

- <code title="get /inbound_wire_transfers/{inbound_wire_transfer_id}">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">retrieve</a>(inboundWireTransferId) -> InboundWireTransfer</code>
- <code title="get /inbound_wire_transfers">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">list</a>({ ...params }) -> InboundWireTransfersPage</code>
- <code title="post /inbound_wire_transfers/{inbound_wire_transfer_id}/reverse">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">reverse</a>(inboundWireTransferId, { ...params }) -> InboundWireTransfer</code>

# WireDrawdownRequests

Types:

- <code><a href="./src/resources/wire-drawdown-requests.ts">WireDrawdownRequest</a></code>

Methods:

- <code title="post /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">create</a>({ ...params }) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests/{wire_drawdown_request_id}">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">retrieve</a>(wireDrawdownRequestId) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">list</a>({ ...params }) -> WireDrawdownRequestsPage</code>

# InboundWireDrawdownRequests

Types:

- <code><a href="./src/resources/inbound-wire-drawdown-requests.ts">InboundWireDrawdownRequest</a></code>

Methods:

- <code title="get /inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}">client.inboundWireDrawdownRequests.<a href="./src/resources/inbound-wire-drawdown-requests.ts">retrieve</a>(inboundWireDrawdownRequestId) -> InboundWireDrawdownRequest</code>
- <code title="get /inbound_wire_drawdown_requests">client.inboundWireDrawdownRequests.<a href="./src/resources/inbound-wire-drawdown-requests.ts">list</a>({ ...params }) -> InboundWireDrawdownRequestsPage</code>

# CheckTransfers

Types:

- <code><a href="./src/resources/check-transfers.ts">CheckTransfer</a></code>

Methods:

- <code title="post /check_transfers">client.checkTransfers.<a href="./src/resources/check-transfers.ts">create</a>({ ...params }) -> CheckTransfer</code>
- <code title="get /check_transfers/{check_transfer_id}">client.checkTransfers.<a href="./src/resources/check-transfers.ts">retrieve</a>(checkTransferId) -> CheckTransfer</code>
- <code title="get /check_transfers">client.checkTransfers.<a href="./src/resources/check-transfers.ts">list</a>({ ...params }) -> CheckTransfersPage</code>
- <code title="post /check_transfers/{check_transfer_id}/approve">client.checkTransfers.<a href="./src/resources/check-transfers.ts">approve</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/cancel">client.checkTransfers.<a href="./src/resources/check-transfers.ts">cancel</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/stop_payment">client.checkTransfers.<a href="./src/resources/check-transfers.ts">stopPayment</a>(checkTransferId, { ...params }) -> CheckTransfer</code>

# InboundCheckDeposits

Types:

- <code><a href="./src/resources/inbound-check-deposits.ts">InboundCheckDeposit</a></code>

Methods:

- <code title="get /inbound_check_deposits/{inbound_check_deposit_id}">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">retrieve</a>(inboundCheckDepositId) -> InboundCheckDeposit</code>
- <code title="get /inbound_check_deposits">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">list</a>({ ...params }) -> InboundCheckDepositsPage</code>
- <code title="post /inbound_check_deposits/{inbound_check_deposit_id}/decline">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">decline</a>(inboundCheckDepositId) -> InboundCheckDeposit</code>
- <code title="post /inbound_check_deposits/{inbound_check_deposit_id}/return">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">return</a>(inboundCheckDepositId, { ...params }) -> InboundCheckDeposit</code>

# RealTimePaymentsTransfers

Types:

- <code><a href="./src/resources/real-time-payments-transfers.ts">RealTimePaymentsTransfer</a></code>

Methods:

- <code title="post /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">create</a>({ ...params }) -> RealTimePaymentsTransfer</code>
- <code title="get /real_time_payments_transfers/{real_time_payments_transfer_id}">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">retrieve</a>(realTimePaymentsTransferId) -> RealTimePaymentsTransfer</code>
- <code title="get /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">list</a>({ ...params }) -> RealTimePaymentsTransfersPage</code>
- <code title="post /real_time_payments_transfers/{real_time_payments_transfer_id}/approve">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">approve</a>(realTimePaymentsTransferId) -> RealTimePaymentsTransfer</code>
- <code title="post /real_time_payments_transfers/{real_time_payments_transfer_id}/cancel">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">cancel</a>(realTimePaymentsTransferId) -> RealTimePaymentsTransfer</code>

# InboundRealTimePaymentsTransfers

Types:

- <code><a href="./src/resources/inbound-real-time-payments-transfers.ts">InboundRealTimePaymentsTransfer</a></code>

Methods:

- <code title="get /inbound_real_time_payments_transfers/{inbound_real_time_payments_transfer_id}">client.inboundRealTimePaymentsTransfers.<a href="./src/resources/inbound-real-time-payments-transfers.ts">retrieve</a>(inboundRealTimePaymentsTransferId) -> InboundRealTimePaymentsTransfer</code>
- <code title="get /inbound_real_time_payments_transfers">client.inboundRealTimePaymentsTransfers.<a href="./src/resources/inbound-real-time-payments-transfers.ts">list</a>({ ...params }) -> InboundRealTimePaymentsTransfersPage</code>

# CheckDeposits

Types:

- <code><a href="./src/resources/check-deposits.ts">CheckDeposit</a></code>

Methods:

- <code title="post /check_deposits">client.checkDeposits.<a href="./src/resources/check-deposits.ts">create</a>({ ...params }) -> CheckDeposit</code>
- <code title="get /check_deposits/{check_deposit_id}">client.checkDeposits.<a href="./src/resources/check-deposits.ts">retrieve</a>(checkDepositId) -> CheckDeposit</code>
- <code title="get /check_deposits">client.checkDeposits.<a href="./src/resources/check-deposits.ts">list</a>({ ...params }) -> CheckDepositsPage</code>

# Lockboxes

Types:

- <code><a href="./src/resources/lockboxes.ts">Lockbox</a></code>

Methods:

- <code title="post /lockboxes">client.lockboxes.<a href="./src/resources/lockboxes.ts">create</a>({ ...params }) -> Lockbox</code>
- <code title="get /lockboxes/{lockbox_id}">client.lockboxes.<a href="./src/resources/lockboxes.ts">retrieve</a>(lockboxId) -> Lockbox</code>
- <code title="patch /lockboxes/{lockbox_id}">client.lockboxes.<a href="./src/resources/lockboxes.ts">update</a>(lockboxId, { ...params }) -> Lockbox</code>
- <code title="get /lockboxes">client.lockboxes.<a href="./src/resources/lockboxes.ts">list</a>({ ...params }) -> LockboxesPage</code>

# InboundMailItems

Types:

- <code><a href="./src/resources/inbound-mail-items.ts">InboundMailItem</a></code>

Methods:

- <code title="get /inbound_mail_items/{inbound_mail_item_id}">client.inboundMailItems.<a href="./src/resources/inbound-mail-items.ts">retrieve</a>(inboundMailItemId) -> InboundMailItem</code>
- <code title="get /inbound_mail_items">client.inboundMailItems.<a href="./src/resources/inbound-mail-items.ts">list</a>({ ...params }) -> InboundMailItemsPage</code>

# RoutingNumbers

Types:

- <code><a href="./src/resources/routing-numbers.ts">RoutingNumberListResponse</a></code>

Methods:

- <code title="get /routing_numbers">client.routingNumbers.<a href="./src/resources/routing-numbers.ts">list</a>({ ...params }) -> RoutingNumberListResponsesPage</code>

# ExternalAccounts

Types:

- <code><a href="./src/resources/external-accounts.ts">ExternalAccount</a></code>

Methods:

- <code title="post /external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts/{external_account_id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">retrieve</a>(externalAccountId) -> ExternalAccount</code>
- <code title="patch /external_accounts/{external_account_id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">update</a>(externalAccountId, { ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">list</a>({ ...params }) -> ExternalAccountsPage</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">Entity</a></code>

Methods:

- <code title="post /entities">client.entities.<a href="./src/resources/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="get /entities/{entity_id}">client.entities.<a href="./src/resources/entities.ts">retrieve</a>(entityId) -> Entity</code>
- <code title="patch /entities/{entity_id}">client.entities.<a href="./src/resources/entities.ts">update</a>(entityId, { ...params }) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities.ts">list</a>({ ...params }) -> EntitiesPage</code>
- <code title="post /entities/{entity_id}/archive">client.entities.<a href="./src/resources/entities.ts">archive</a>(entityId) -> Entity</code>
- <code title="post /entities/{entity_id}/archive_beneficial_owner">client.entities.<a href="./src/resources/entities.ts">archiveBeneficialOwner</a>(entityId, { ...params }) -> Entity</code>
- <code title="post /entities/{entity_id}/confirm">client.entities.<a href="./src/resources/entities.ts">confirm</a>(entityId, { ...params }) -> Entity</code>
- <code title="post /entities/{entity_id}/create_beneficial_owner">client.entities.<a href="./src/resources/entities.ts">createBeneficialOwner</a>(entityId, { ...params }) -> Entity</code>
- <code title="post /entities/{entity_id}/update_address">client.entities.<a href="./src/resources/entities.ts">updateAddress</a>(entityId, { ...params }) -> Entity</code>
- <code title="post /entities/{entity_id}/update_beneficial_owner_address">client.entities.<a href="./src/resources/entities.ts">updateBeneficialOwnerAddress</a>(entityId, { ...params }) -> Entity</code>
- <code title="post /entities/{entity_id}/update_industry_code">client.entities.<a href="./src/resources/entities.ts">updateIndustryCode</a>(entityId, { ...params }) -> Entity</code>

# SupplementalDocuments

Types:

- <code><a href="./src/resources/supplemental-documents.ts">EntitySupplementalDocument</a></code>

Methods:

- <code title="post /entity_supplemental_documents">client.supplementalDocuments.<a href="./src/resources/supplemental-documents.ts">create</a>({ ...params }) -> EntitySupplementalDocument</code>
- <code title="get /entity_supplemental_documents">client.supplementalDocuments.<a href="./src/resources/supplemental-documents.ts">list</a>({ ...params }) -> EntitySupplementalDocumentsPage</code>

# Programs

Types:

- <code><a href="./src/resources/programs.ts">Program</a></code>

Methods:

- <code title="get /programs/{program_id}">client.programs.<a href="./src/resources/programs.ts">retrieve</a>(programId) -> Program</code>
- <code title="get /programs">client.programs.<a href="./src/resources/programs.ts">list</a>({ ...params }) -> ProgramsPage</code>

# AccountStatements

Types:

- <code><a href="./src/resources/account-statements.ts">AccountStatement</a></code>

Methods:

- <code title="get /account_statements/{account_statement_id}">client.accountStatements.<a href="./src/resources/account-statements.ts">retrieve</a>(accountStatementId) -> AccountStatement</code>
- <code title="get /account_statements">client.accountStatements.<a href="./src/resources/account-statements.ts">list</a>({ ...params }) -> AccountStatementsPage</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>

Methods:

- <code title="post /files">client.files.<a href="./src/resources/files.ts">create</a>({ ...params }) -> File</code>
- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileId) -> File</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FilesPage</code>

# FileLinks

Types:

- <code><a href="./src/resources/file-links.ts">FileLink</a></code>

Methods:

- <code title="post /file_links">client.fileLinks.<a href="./src/resources/file-links.ts">create</a>({ ...params }) -> FileLink</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>

Methods:

- <code title="post /documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /documents/{document_id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(documentId) -> Document</code>
- <code title="get /documents">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentsPage</code>

# Exports

Types:

- <code><a href="./src/resources/exports.ts">Export</a></code>

Methods:

- <code title="post /exports">client.exports.<a href="./src/resources/exports.ts">create</a>({ ...params }) -> Export</code>
- <code title="get /exports/{export_id}">client.exports.<a href="./src/resources/exports.ts">retrieve</a>(exportId) -> Export</code>
- <code title="get /exports">client.exports.<a href="./src/resources/exports.ts">list</a>({ ...params }) -> ExportsPage</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">Event</a></code>

Methods:

- <code title="get /events/{event_id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(eventId) -> Event</code>
- <code title="get /events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventsPage</code>

# EventSubscriptions

Types:

- <code><a href="./src/resources/event-subscriptions.ts">EventSubscription</a></code>

Methods:

- <code title="post /event_subscriptions">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">create</a>({ ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">retrieve</a>(eventSubscriptionId) -> EventSubscription</code>
- <code title="patch /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">update</a>(eventSubscriptionId, { ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">list</a>({ ...params }) -> EventSubscriptionsPage</code>

# RealTimeDecisions

Types:

- <code><a href="./src/resources/real-time-decisions.ts">RealTimeDecision</a></code>

Methods:

- <code title="get /real_time_decisions/{real_time_decision_id}">client.realTimeDecisions.<a href="./src/resources/real-time-decisions.ts">retrieve</a>(realTimeDecisionId) -> RealTimeDecision</code>
- <code title="post /real_time_decisions/{real_time_decision_id}/action">client.realTimeDecisions.<a href="./src/resources/real-time-decisions.ts">action</a>(realTimeDecisionId, { ...params }) -> RealTimeDecision</code>

# BookkeepingAccounts

Types:

- <code><a href="./src/resources/bookkeeping-accounts.ts">BookkeepingAccount</a></code>
- <code><a href="./src/resources/bookkeeping-accounts.ts">BookkeepingBalanceLookup</a></code>

Methods:

- <code title="post /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">create</a>({ ...params }) -> BookkeepingAccount</code>
- <code title="patch /bookkeeping_accounts/{bookkeeping_account_id}">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">update</a>(bookkeepingAccountId, { ...params }) -> BookkeepingAccount</code>
- <code title="get /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">list</a>({ ...params }) -> BookkeepingAccountsPage</code>
- <code title="get /bookkeeping_accounts/{bookkeeping_account_id}/balance">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">balance</a>(bookkeepingAccountId, { ...params }) -> BookkeepingBalanceLookup</code>

# BookkeepingEntrySets

Types:

- <code><a href="./src/resources/bookkeeping-entry-sets.ts">BookkeepingEntrySet</a></code>

Methods:

- <code title="post /bookkeeping_entry_sets">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">create</a>({ ...params }) -> BookkeepingEntrySet</code>
- <code title="get /bookkeeping_entry_sets/{bookkeeping_entry_set_id}">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">retrieve</a>(bookkeepingEntrySetId) -> BookkeepingEntrySet</code>
- <code title="get /bookkeeping_entry_sets">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">list</a>({ ...params }) -> BookkeepingEntrySetsPage</code>

# BookkeepingEntries

Types:

- <code><a href="./src/resources/bookkeeping-entries.ts">BookkeepingEntry</a></code>

Methods:

- <code title="get /bookkeeping_entries/{bookkeeping_entry_id}">client.bookkeepingEntries.<a href="./src/resources/bookkeeping-entries.ts">retrieve</a>(bookkeepingEntryId) -> BookkeepingEntry</code>
- <code title="get /bookkeeping_entries">client.bookkeepingEntries.<a href="./src/resources/bookkeeping-entries.ts">list</a>({ ...params }) -> BookkeepingEntriesPage</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">Group</a></code>

Methods:

- <code title="get /groups/current">client.groups.<a href="./src/resources/groups.ts">retrieve</a>() -> Group</code>

# OAuthApplications

Types:

- <code><a href="./src/resources/oauth-applications.ts">OAuthApplication</a></code>

Methods:

- <code title="get /oauth_applications/{oauth_application_id}">client.oauthApplications.<a href="./src/resources/oauth-applications.ts">retrieve</a>(oauthApplicationId) -> OAuthApplication</code>
- <code title="get /oauth_applications">client.oauthApplications.<a href="./src/resources/oauth-applications.ts">list</a>({ ...params }) -> OAuthApplicationsPage</code>

# OAuthConnections

Types:

- <code><a href="./src/resources/oauth-connections.ts">OAuthConnection</a></code>

Methods:

- <code title="get /oauth_connections/{oauth_connection_id}">client.oauthConnections.<a href="./src/resources/oauth-connections.ts">retrieve</a>(oauthConnectionId) -> OAuthConnection</code>
- <code title="get /oauth_connections">client.oauthConnections.<a href="./src/resources/oauth-connections.ts">list</a>({ ...params }) -> OAuthConnectionsPage</code>

# OAuthTokens

Types:

- <code><a href="./src/resources/oauth-tokens.ts">OAuthToken</a></code>

Methods:

- <code title="post /oauth/tokens">client.oauthTokens.<a href="./src/resources/oauth-tokens.ts">create</a>({ ...params }) -> OAuthToken</code>

# IntrafiAccountEnrollments

Types:

- <code><a href="./src/resources/intrafi-account-enrollments.ts">IntrafiAccountEnrollment</a></code>

Methods:

- <code title="post /intrafi_account_enrollments">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">create</a>({ ...params }) -> IntrafiAccountEnrollment</code>
- <code title="get /intrafi_account_enrollments/{intrafi_account_enrollment_id}">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">retrieve</a>(intrafiAccountEnrollmentId) -> IntrafiAccountEnrollment</code>
- <code title="get /intrafi_account_enrollments">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">list</a>({ ...params }) -> IntrafiAccountEnrollmentsPage</code>
- <code title="post /intrafi_account_enrollments/{intrafi_account_enrollment_id}/unenroll">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">unenroll</a>(intrafiAccountEnrollmentId) -> IntrafiAccountEnrollment</code>

# IntrafiBalances

Types:

- <code><a href="./src/resources/intrafi-balances.ts">IntrafiBalance</a></code>

Methods:

- <code title="get /accounts/{account_id}/intrafi_balance">client.intrafiBalances.<a href="./src/resources/intrafi-balances.ts">intrafiBalance</a>(accountId) -> IntrafiBalance</code>

# IntrafiExclusions

Types:

- <code><a href="./src/resources/intrafi-exclusions.ts">IntrafiExclusion</a></code>

Methods:

- <code title="post /intrafi_exclusions">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">create</a>({ ...params }) -> IntrafiExclusion</code>
- <code title="get /intrafi_exclusions/{intrafi_exclusion_id}">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">retrieve</a>(intrafiExclusionId) -> IntrafiExclusion</code>
- <code title="get /intrafi_exclusions">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">list</a>({ ...params }) -> IntrafiExclusionsPage</code>
- <code title="post /intrafi_exclusions/{intrafi_exclusion_id}/archive">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">archive</a>(intrafiExclusionId) -> IntrafiExclusion</code>

# CardTokens

Types:

- <code><a href="./src/resources/card-tokens.ts">CardToken</a></code>
- <code><a href="./src/resources/card-tokens.ts">CardTokenCapabilities</a></code>

Methods:

- <code title="get /card_tokens/{card_token_id}">client.cardTokens.<a href="./src/resources/card-tokens.ts">retrieve</a>(cardTokenId) -> CardToken</code>
- <code title="get /card_tokens">client.cardTokens.<a href="./src/resources/card-tokens.ts">list</a>({ ...params }) -> CardTokensPage</code>
- <code title="get /card_tokens/{card_token_id}/capabilities">client.cardTokens.<a href="./src/resources/card-tokens.ts">capabilities</a>(cardTokenId) -> CardTokenCapabilities</code>

# CardPushTransfers

Types:

- <code><a href="./src/resources/card-push-transfers.ts">CardPushTransfer</a></code>

Methods:

- <code title="post /card_push_transfers">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">create</a>({ ...params }) -> CardPushTransfer</code>
- <code title="get /card_push_transfers/{card_push_transfer_id}">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">retrieve</a>(cardPushTransferId) -> CardPushTransfer</code>
- <code title="get /card_push_transfers">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">list</a>({ ...params }) -> CardPushTransfersPage</code>
- <code title="post /card_push_transfers/{card_push_transfer_id}/approve">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">approve</a>(cardPushTransferId) -> CardPushTransfer</code>
- <code title="post /card_push_transfers/{card_push_transfer_id}/cancel">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">cancel</a>(cardPushTransferId) -> CardPushTransfer</code>

# CardValidations

Types:

- <code><a href="./src/resources/card-validations.ts">CardValidation</a></code>

Methods:

- <code title="post /card_validations">client.cardValidations.<a href="./src/resources/card-validations.ts">create</a>({ ...params }) -> CardValidation</code>
- <code title="get /card_validations/{card_validation_id}">client.cardValidations.<a href="./src/resources/card-validations.ts">retrieve</a>(cardValidationId) -> CardValidation</code>
- <code title="get /card_validations">client.cardValidations.<a href="./src/resources/card-validations.ts">list</a>({ ...params }) -> CardValidationsPage</code>

# Simulations

## InterestPayments

Methods:

- <code title="post /simulations/interest_payments">client.simulations.interestPayments.<a href="./src/resources/simulations/interest-payments.ts">create</a>({ ...params }) -> Transaction</code>

## AccountTransfers

Methods:

- <code title="post /simulations/account_transfers/{account_transfer_id}/complete">client.simulations.accountTransfers.<a href="./src/resources/simulations/account-transfers.ts">complete</a>(accountTransferId) -> AccountTransfer</code>

## CardAuthorizations

Types:

- <code><a href="./src/resources/simulations/card-authorizations.ts">CardAuthorizationCreateResponse</a></code>

Methods:

- <code title="post /simulations/card_authorizations">client.simulations.cardAuthorizations.<a href="./src/resources/simulations/card-authorizations.ts">create</a>({ ...params }) -> CardAuthorizationCreateResponse</code>

## CardAuthorizationExpirations

Methods:

- <code title="post /simulations/card_authorization_expirations">client.simulations.cardAuthorizationExpirations.<a href="./src/resources/simulations/card-authorization-expirations.ts">create</a>({ ...params }) -> CardPayment</code>

## CardSettlements

Methods:

- <code title="post /simulations/card_settlements">client.simulations.cardSettlements.<a href="./src/resources/simulations/card-settlements.ts">create</a>({ ...params }) -> Transaction</code>

## CardReversals

Methods:

- <code title="post /simulations/card_reversals">client.simulations.cardReversals.<a href="./src/resources/simulations/card-reversals.ts">create</a>({ ...params }) -> CardPayment</code>

## CardIncrements

Methods:

- <code title="post /simulations/card_increments">client.simulations.cardIncrements.<a href="./src/resources/simulations/card-increments.ts">create</a>({ ...params }) -> CardPayment</code>

## CardFuelConfirmations

Methods:

- <code title="post /simulations/card_fuel_confirmations">client.simulations.cardFuelConfirmations.<a href="./src/resources/simulations/card-fuel-confirmations.ts">create</a>({ ...params }) -> CardPayment</code>

## CardRefunds

Methods:

- <code title="post /simulations/card_refunds">client.simulations.cardRefunds.<a href="./src/resources/simulations/card-refunds.ts">create</a>({ ...params }) -> Transaction</code>

## PhysicalCards

Methods:

- <code title="post /simulations/physical_cards/{physical_card_id}/tracking_updates">client.simulations.physicalCards.<a href="./src/resources/simulations/physical-cards.ts">create</a>(physicalCardId, { ...params }) -> PhysicalCard</code>
- <code title="post /simulations/physical_cards/{physical_card_id}/advance_shipment">client.simulations.physicalCards.<a href="./src/resources/simulations/physical-cards.ts">advanceShipment</a>(physicalCardId, { ...params }) -> PhysicalCard</code>

## DigitalWalletTokenRequests

Types:

- <code><a href="./src/resources/simulations/digital-wallet-token-requests.ts">DigitalWalletTokenRequestCreateResponse</a></code>

Methods:

- <code title="post /simulations/digital_wallet_token_requests">client.simulations.digitalWalletTokenRequests.<a href="./src/resources/simulations/digital-wallet-token-requests.ts">create</a>({ ...params }) -> DigitalWalletTokenRequestCreateResponse</code>

## PendingTransactions

Methods:

- <code title="post /simulations/pending_transactions/{pending_transaction_id}/release_inbound_funds_hold">client.simulations.pendingTransactions.<a href="./src/resources/simulations/pending-transactions.ts">releaseInboundFundsHold</a>(pendingTransactionId) -> PendingTransaction</code>

## ACHTransfers

Methods:

- <code title="post /simulations/ach_transfers/{ach_transfer_id}/acknowledge">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">acknowledge</a>(achTransferId) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/create_notification_of_change">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">createNotificationOfChange</a>(achTransferId, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/return">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">return</a>(achTransferId, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/settle">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">settle</a>(achTransferId, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/submit">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">submit</a>(achTransferId) -> ACHTransfer</code>

## InboundACHTransfers

Methods:

- <code title="post /simulations/inbound_ach_transfers">client.simulations.inboundACHTransfers.<a href="./src/resources/simulations/inbound-ach-transfers.ts">create</a>({ ...params }) -> InboundACHTransfer</code>

## WireTransfers

Methods:

- <code title="post /simulations/wire_transfers/{wire_transfer_id}/reverse">client.simulations.wireTransfers.<a href="./src/resources/simulations/wire-transfers.ts">reverse</a>(wireTransferId) -> WireTransfer</code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/submit">client.simulations.wireTransfers.<a href="./src/resources/simulations/wire-transfers.ts">submit</a>(wireTransferId) -> WireTransfer</code>

## InboundWireTransfers

Methods:

- <code title="post /simulations/inbound_wire_transfers">client.simulations.inboundWireTransfers.<a href="./src/resources/simulations/inbound-wire-transfers.ts">create</a>({ ...params }) -> InboundWireTransfer</code>

## WireDrawdownRequests

Methods:

- <code title="post /simulations/wire_drawdown_requests/{wire_drawdown_request_id}/refuse">client.simulations.wireDrawdownRequests.<a href="./src/resources/simulations/wire-drawdown-requests.ts">refuse</a>(wireDrawdownRequestId) -> WireDrawdownRequest</code>
- <code title="post /simulations/wire_drawdown_requests/{wire_drawdown_request_id}/submit">client.simulations.wireDrawdownRequests.<a href="./src/resources/simulations/wire-drawdown-requests.ts">submit</a>(wireDrawdownRequestId) -> WireDrawdownRequest</code>

## InboundWireDrawdownRequests

Methods:

- <code title="post /simulations/inbound_wire_drawdown_requests">client.simulations.inboundWireDrawdownRequests.<a href="./src/resources/simulations/inbound-wire-drawdown-requests.ts">create</a>({ ...params }) -> InboundWireDrawdownRequest</code>

## CheckTransfers

Methods:

- <code title="post /simulations/check_transfers/{check_transfer_id}/mail">client.simulations.checkTransfers.<a href="./src/resources/simulations/check-transfers.ts">mail</a>(checkTransferId) -> CheckTransfer</code>

## InboundCheckDeposits

Methods:

- <code title="post /simulations/inbound_check_deposits">client.simulations.inboundCheckDeposits.<a href="./src/resources/simulations/inbound-check-deposits.ts">create</a>({ ...params }) -> InboundCheckDeposit</code>

## RealTimePaymentsTransfers

Methods:

- <code title="post /simulations/real_time_payments_transfers/{real_time_payments_transfer_id}/complete">client.simulations.realTimePaymentsTransfers.<a href="./src/resources/simulations/real-time-payments-transfers.ts">complete</a>(realTimePaymentsTransferId, { ...params }) -> RealTimePaymentsTransfer</code>

## InboundRealTimePaymentsTransfers

Methods:

- <code title="post /simulations/inbound_real_time_payments_transfers">client.simulations.inboundRealTimePaymentsTransfers.<a href="./src/resources/simulations/inbound-real-time-payments-transfers.ts">create</a>({ ...params }) -> InboundRealTimePaymentsTransfer</code>

## CheckDeposits

Methods:

- <code title="post /simulations/check_deposits/{check_deposit_id}/reject">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">reject</a>(checkDepositId) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/return">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">return</a>(checkDepositId) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/submit">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">submit</a>(checkDepositId) -> CheckDeposit</code>

## InboundMailItems

Methods:

- <code title="post /simulations/inbound_mail_items">client.simulations.inboundMailItems.<a href="./src/resources/simulations/inbound-mail-items.ts">create</a>({ ...params }) -> InboundMailItem</code>

## Programs

Methods:

- <code title="post /simulations/programs">client.simulations.programs.<a href="./src/resources/simulations/programs.ts">create</a>({ ...params }) -> Program</code>

## AccountStatements

Methods:

- <code title="post /simulations/account_statements">client.simulations.accountStatements.<a href="./src/resources/simulations/account-statements.ts">create</a>({ ...params }) -> AccountStatement</code>

## Documents

Methods:

- <code title="post /simulations/documents">client.simulations.documents.<a href="./src/resources/simulations/documents.ts">create</a>({ ...params }) -> Document</code>

## CardTokens

Methods:

- <code title="post /simulations/card_tokens">client.simulations.cardTokens.<a href="./src/resources/simulations/card-tokens.ts">create</a>({ ...params }) -> CardToken</code>
