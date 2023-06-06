# Accounts

Models:

- <code><a href="./resources/accounts.ts">Account</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./resources/accounts.ts">retrieve</a>(accountId) -> Account</code>
- <code title="patch /accounts/{account_id}">client.accounts.<a href="./resources/accounts.ts">update</a>(accountId, { ...params }) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./resources/accounts.ts">list</a>({ ...params }) -> AccountsPage</code>
- <code title="post /accounts/{account_id}/close">client.accounts.<a href="./resources/accounts.ts">close</a>(accountId) -> Account</code>

# AccountNumbers

Models:

- <code><a href="./resources/account-numbers.ts">AccountNumber</a></code>

Methods:

- <code title="post /account_numbers">client.accountNumbers.<a href="./resources/account-numbers.ts">create</a>({ ...params }) -> AccountNumber</code>
- <code title="get /account_numbers/{account_number_id}">client.accountNumbers.<a href="./resources/account-numbers.ts">retrieve</a>(accountNumberId) -> AccountNumber</code>
- <code title="patch /account_numbers/{account_number_id}">client.accountNumbers.<a href="./resources/account-numbers.ts">update</a>(accountNumberId, { ...params }) -> AccountNumber</code>
- <code title="get /account_numbers">client.accountNumbers.<a href="./resources/account-numbers.ts">list</a>({ ...params }) -> AccountNumbersPage</code>

# BookkeepingAccounts

Models:

- <code><a href="./resources/bookkeeping-accounts.ts">BookkeepingAccount</a></code>

Methods:

- <code title="post /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./resources/bookkeeping-accounts.ts">create</a>({ ...params }) -> BookkeepingAccount</code>
- <code title="get /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./resources/bookkeeping-accounts.ts">list</a>({ ...params }) -> BookkeepingAccountsPage</code>

# BookkeepingEntrySets

Models:

- <code><a href="./resources/bookkeeping-entry-sets.ts">BookkeepingEntrySet</a></code>

Methods:

- <code title="post /bookkeeping_entry_sets">client.bookkeepingEntrySets.<a href="./resources/bookkeeping-entry-sets.ts">create</a>({ ...params }) -> BookkeepingEntrySet</code>

# BookkeepingEntries

Models:

- <code><a href="./resources/bookkeeping-entries.ts">BookkeepingEntry</a></code>

Methods:

- <code title="get /bookkeeping_entries">client.bookkeepingEntries.<a href="./resources/bookkeeping-entries.ts">list</a>({ ...params }) -> BookkeepingEntriesPage</code>

# RealTimeDecisions

Models:

- <code><a href="./resources/real-time-decisions.ts">RealTimeDecision</a></code>

Methods:

- <code title="get /real_time_decisions/{real_time_decision_id}">client.realTimeDecisions.<a href="./resources/real-time-decisions.ts">retrieve</a>(realTimeDecisionId) -> RealTimeDecision</code>
- <code title="post /real_time_decisions/{real_time_decision_id}/action">client.realTimeDecisions.<a href="./resources/real-time-decisions.ts">action</a>(realTimeDecisionId, { ...params }) -> RealTimeDecision</code>

# RealTimePaymentsTransfers

Models:

- <code><a href="./resources/real-time-payments-transfers.ts">RealTimePaymentsTransfer</a></code>

Methods:

- <code title="post /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./resources/real-time-payments-transfers.ts">create</a>({ ...params }) -> RealTimePaymentsTransfer</code>
- <code title="get /real_time_payments_transfers/{real_time_payments_transfer_id}">client.realTimePaymentsTransfers.<a href="./resources/real-time-payments-transfers.ts">retrieve</a>(realTimePaymentsTransferId) -> RealTimePaymentsTransfer</code>
- <code title="get /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./resources/real-time-payments-transfers.ts">list</a>({ ...params }) -> RealTimePaymentsTransfersPage</code>

# BalanceLookups

Models:

- <code><a href="./resources/balance-lookups.ts">BalanceLookupLookupResponse</a></code>

Methods:

- <code title="post /balance_lookups">client.balanceLookups.<a href="./resources/balance-lookups.ts">lookup</a>({ ...params }) -> BalanceLookupLookupResponse</code>

# Cards

Models:

- <code><a href="./resources/cards.ts">Card</a></code>
- <code><a href="./resources/cards.ts">CardDetails</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./resources/cards.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /cards/{card_id}">client.cards.<a href="./resources/cards.ts">retrieve</a>(cardId) -> Card</code>
- <code title="patch /cards/{card_id}">client.cards.<a href="./resources/cards.ts">update</a>(cardId, { ...params }) -> Card</code>
- <code title="get /cards">client.cards.<a href="./resources/cards.ts">list</a>({ ...params }) -> CardsPage</code>
- <code title="get /cards/{card_id}/details">client.cards.<a href="./resources/cards.ts">retrieveSensitiveDetails</a>(cardId) -> CardDetails</code>

# CardDisputes

Models:

- <code><a href="./resources/card-disputes.ts">CardDispute</a></code>

Methods:

- <code title="post /card_disputes">client.cardDisputes.<a href="./resources/card-disputes.ts">create</a>({ ...params }) -> CardDispute</code>
- <code title="get /card_disputes/{card_dispute_id}">client.cardDisputes.<a href="./resources/card-disputes.ts">retrieve</a>(cardDisputeId) -> CardDispute</code>
- <code title="get /card_disputes">client.cardDisputes.<a href="./resources/card-disputes.ts">list</a>({ ...params }) -> CardDisputesPage</code>

# CardProfiles

Models:

- <code><a href="./resources/card-profiles.ts">CardProfile</a></code>

Methods:

- <code title="post /card_profiles">client.cardProfiles.<a href="./resources/card-profiles.ts">create</a>({ ...params }) -> CardProfile</code>
- <code title="get /card_profiles/{card_profile_id}">client.cardProfiles.<a href="./resources/card-profiles.ts">retrieve</a>(cardProfileId) -> CardProfile</code>
- <code title="get /card_profiles">client.cardProfiles.<a href="./resources/card-profiles.ts">list</a>({ ...params }) -> CardProfilesPage</code>

# ExternalAccounts

Models:

- <code><a href="./resources/external-accounts.ts">ExternalAccount</a></code>

Methods:

- <code title="post /external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts/{external_account_id}">client.externalAccounts.<a href="./resources/external-accounts.ts">retrieve</a>(externalAccountId) -> ExternalAccount</code>
- <code title="patch /external_accounts/{external_account_id}">client.externalAccounts.<a href="./resources/external-accounts.ts">update</a>(externalAccountId, { ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">list</a>({ ...params }) -> ExternalAccountsPage</code>

# Exports

Models:

- <code><a href="./resources/exports.ts">Export</a></code>

Methods:

- <code title="post /exports">client.exports.<a href="./resources/exports.ts">create</a>({ ...params }) -> Export</code>
- <code title="get /exports/{export_id}">client.exports.<a href="./resources/exports.ts">retrieve</a>(exportId) -> Export</code>
- <code title="get /exports">client.exports.<a href="./resources/exports.ts">list</a>({ ...params }) -> ExportsPage</code>

# DigitalWalletTokens

Models:

- <code><a href="./resources/digital-wallet-tokens.ts">DigitalWalletToken</a></code>

Methods:

- <code title="get /digital_wallet_tokens/{digital_wallet_token_id}">client.digitalWalletTokens.<a href="./resources/digital-wallet-tokens.ts">retrieve</a>(digitalWalletTokenId) -> DigitalWalletToken</code>
- <code title="get /digital_wallet_tokens">client.digitalWalletTokens.<a href="./resources/digital-wallet-tokens.ts">list</a>({ ...params }) -> DigitalWalletTokensPage</code>

# Transactions

Models:

- <code><a href="./resources/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /transactions/{transaction_id}">client.transactions.<a href="./resources/transactions.ts">retrieve</a>(transactionId) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./resources/transactions.ts">list</a>({ ...params }) -> TransactionsPage</code>

# PendingTransactions

Models:

- <code><a href="./resources/pending-transactions.ts">PendingTransaction</a></code>

Methods:

- <code title="get /pending_transactions/{pending_transaction_id}">client.pendingTransactions.<a href="./resources/pending-transactions.ts">retrieve</a>(pendingTransactionId) -> PendingTransaction</code>
- <code title="get /pending_transactions">client.pendingTransactions.<a href="./resources/pending-transactions.ts">list</a>({ ...params }) -> PendingTransactionsPage</code>

# Programs

Models:

- <code><a href="./resources/programs.ts">Program</a></code>

Methods:

- <code title="get /programs/{program_id}">client.programs.<a href="./resources/programs.ts">retrieve</a>(programId) -> Program</code>
- <code title="get /programs">client.programs.<a href="./resources/programs.ts">list</a>({ ...params }) -> ProgramsPage</code>

# DeclinedTransactions

Models:

- <code><a href="./resources/declined-transactions.ts">DeclinedTransaction</a></code>

Methods:

- <code title="get /declined_transactions/{declined_transaction_id}">client.declinedTransactions.<a href="./resources/declined-transactions.ts">retrieve</a>(declinedTransactionId) -> DeclinedTransaction</code>
- <code title="get /declined_transactions">client.declinedTransactions.<a href="./resources/declined-transactions.ts">list</a>({ ...params }) -> DeclinedTransactionsPage</code>

# Limits

Models:

- <code><a href="./resources/limits.ts">Limit</a></code>

Methods:

- <code title="post /limits">client.limits.<a href="./resources/limits.ts">create</a>({ ...params }) -> Limit</code>
- <code title="get /limits/{limit_id}">client.limits.<a href="./resources/limits.ts">retrieve</a>(limitId) -> Limit</code>
- <code title="patch /limits/{limit_id}">client.limits.<a href="./resources/limits.ts">update</a>(limitId, { ...params }) -> Limit</code>
- <code title="get /limits">client.limits.<a href="./resources/limits.ts">list</a>({ ...params }) -> LimitsPage</code>

# AccountTransfers

Models:

- <code><a href="./resources/account-transfers.ts">AccountTransfer</a></code>

Methods:

- <code title="post /account_transfers">client.accountTransfers.<a href="./resources/account-transfers.ts">create</a>({ ...params }) -> AccountTransfer</code>
- <code title="get /account_transfers/{account_transfer_id}">client.accountTransfers.<a href="./resources/account-transfers.ts">retrieve</a>(accountTransferId) -> AccountTransfer</code>
- <code title="get /account_transfers">client.accountTransfers.<a href="./resources/account-transfers.ts">list</a>({ ...params }) -> AccountTransfersPage</code>
- <code title="post /account_transfers/{account_transfer_id}/approve">client.accountTransfers.<a href="./resources/account-transfers.ts">approve</a>(accountTransferId) -> AccountTransfer</code>
- <code title="post /account_transfers/{account_transfer_id}/cancel">client.accountTransfers.<a href="./resources/account-transfers.ts">cancel</a>(accountTransferId) -> AccountTransfer</code>

# ACHTransfers

Models:

- <code><a href="./resources/ach-transfers.ts">ACHTransfer</a></code>

Methods:

- <code title="post /ach_transfers">client.achTransfers.<a href="./resources/ach-transfers.ts">create</a>({ ...params }) -> ACHTransfer</code>
- <code title="get /ach_transfers/{ach_transfer_id}">client.achTransfers.<a href="./resources/ach-transfers.ts">retrieve</a>(achTransferId) -> ACHTransfer</code>
- <code title="get /ach_transfers">client.achTransfers.<a href="./resources/ach-transfers.ts">list</a>({ ...params }) -> ACHTransfersPage</code>
- <code title="post /ach_transfers/{ach_transfer_id}/approve">client.achTransfers.<a href="./resources/ach-transfers.ts">approve</a>(achTransferId) -> ACHTransfer</code>
- <code title="post /ach_transfers/{ach_transfer_id}/cancel">client.achTransfers.<a href="./resources/ach-transfers.ts">cancel</a>(achTransferId) -> ACHTransfer</code>

# InboundACHTransferReturns

Models:

- <code><a href="./resources/inbound-ach-transfer-returns.ts">InboundACHTransferReturn</a></code>

Methods:

- <code title="post /inbound_ach_transfer_returns">client.inboundACHTransferReturns.<a href="./resources/inbound-ach-transfer-returns.ts">create</a>({ ...params }) -> InboundACHTransferReturn</code>
- <code title="get /inbound_ach_transfer_returns/{inbound_ach_transfer_return_id}">client.inboundACHTransferReturns.<a href="./resources/inbound-ach-transfer-returns.ts">retrieve</a>(inboundACHTransferReturnId) -> InboundACHTransferReturn</code>
- <code title="get /inbound_ach_transfer_returns">client.inboundACHTransferReturns.<a href="./resources/inbound-ach-transfer-returns.ts">list</a>({ ...params }) -> InboundACHTransferReturnsPage</code>

# ACHPrenotifications

Models:

- <code><a href="./resources/ach-prenotifications.ts">ACHPrenotification</a></code>

Methods:

- <code title="post /ach_prenotifications">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">create</a>({ ...params }) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications/{ach_prenotification_id}">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">retrieve</a>(achPrenotificationId) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">list</a>({ ...params }) -> ACHPrenotificationsPage</code>

# Documents

Models:

- <code><a href="./resources/documents.ts">Document</a></code>

Methods:

- <code title="get /documents/{document_id}">client.documents.<a href="./resources/documents.ts">retrieve</a>(documentId) -> Document</code>
- <code title="get /documents">client.documents.<a href="./resources/documents.ts">list</a>({ ...params }) -> DocumentsPage</code>

# WireTransfers

Models:

- <code><a href="./resources/wire-transfers.ts">WireTransfer</a></code>

Methods:

- <code title="post /wire_transfers">client.wireTransfers.<a href="./resources/wire-transfers.ts">create</a>({ ...params }) -> WireTransfer</code>
- <code title="get /wire_transfers/{wire_transfer_id}">client.wireTransfers.<a href="./resources/wire-transfers.ts">retrieve</a>(wireTransferId) -> WireTransfer</code>
- <code title="get /wire_transfers">client.wireTransfers.<a href="./resources/wire-transfers.ts">list</a>({ ...params }) -> WireTransfersPage</code>
- <code title="post /wire_transfers/{wire_transfer_id}/approve">client.wireTransfers.<a href="./resources/wire-transfers.ts">approve</a>(wireTransferId) -> WireTransfer</code>
- <code title="post /wire_transfers/{wire_transfer_id}/cancel">client.wireTransfers.<a href="./resources/wire-transfers.ts">cancel</a>(wireTransferId) -> WireTransfer</code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/reverse">client.wireTransfers.<a href="./resources/wire-transfers.ts">reverse</a>(wireTransferId) -> WireTransfer</code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/submit">client.wireTransfers.<a href="./resources/wire-transfers.ts">submit</a>(wireTransferId) -> WireTransfer</code>

# CheckTransfers

Models:

- <code><a href="./resources/check-transfers.ts">CheckTransfer</a></code>

Methods:

- <code title="post /check_transfers">client.checkTransfers.<a href="./resources/check-transfers.ts">create</a>({ ...params }) -> CheckTransfer</code>
- <code title="get /check_transfers/{check_transfer_id}">client.checkTransfers.<a href="./resources/check-transfers.ts">retrieve</a>(checkTransferId) -> CheckTransfer</code>
- <code title="get /check_transfers">client.checkTransfers.<a href="./resources/check-transfers.ts">list</a>({ ...params }) -> CheckTransfersPage</code>
- <code title="post /check_transfers/{check_transfer_id}/approve">client.checkTransfers.<a href="./resources/check-transfers.ts">approve</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/cancel">client.checkTransfers.<a href="./resources/check-transfers.ts">cancel</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/stop_payment">client.checkTransfers.<a href="./resources/check-transfers.ts">stopPayment</a>(checkTransferId) -> CheckTransfer</code>

# Entities

Models:

- <code><a href="./resources/entities/entities.ts">Entity</a></code>

Methods:

- <code title="post /entities">client.entities.<a href="./resources/entities/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="get /entities/{entity_id}">client.entities.<a href="./resources/entities/entities.ts">retrieve</a>(entityId) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./resources/entities/entities.ts">list</a>({ ...params }) -> EntitiesPage</code>

## SupplementalDocuments

Models:

- <code><a href="./resources/entities/supplemental-documents.ts">SupplementalDocument</a></code>

Methods:

- <code title="post /entities/{entity_id}/supplemental_documents">client.entities.supplementalDocuments.<a href="./resources/entities/supplemental-documents.ts">create</a>(entityId, { ...params }) -> Entity</code>
- <code title="get /entity_supplemental_documents">client.entities.supplementalDocuments.<a href="./resources/entities/supplemental-documents.ts">list</a>({ ...params }) -> SupplementalDocumentsPage</code>

# InboundWireDrawdownRequests

Models:

- <code><a href="./resources/inbound-wire-drawdown-requests.ts">InboundWireDrawdownRequest</a></code>

Methods:

- <code title="get /inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}">client.inboundWireDrawdownRequests.<a href="./resources/inbound-wire-drawdown-requests.ts">retrieve</a>(inboundWireDrawdownRequestId) -> InboundWireDrawdownRequest</code>
- <code title="get /inbound_wire_drawdown_requests">client.inboundWireDrawdownRequests.<a href="./resources/inbound-wire-drawdown-requests.ts">list</a>({ ...params }) -> InboundWireDrawdownRequestsPage</code>

# WireDrawdownRequests

Models:

- <code><a href="./resources/wire-drawdown-requests.ts">WireDrawdownRequest</a></code>

Methods:

- <code title="post /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">create</a>({ ...params }) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests/{wire_drawdown_request_id}">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">retrieve</a>(wireDrawdownRequestId) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">list</a>({ ...params }) -> WireDrawdownRequestsPage</code>

# Events

Models:

- <code><a href="./resources/events.ts">Event</a></code>

Methods:

- <code title="get /events/{event_id}">client.events.<a href="./resources/events.ts">retrieve</a>(eventId) -> Event</code>
- <code title="get /events">client.events.<a href="./resources/events.ts">list</a>({ ...params }) -> EventsPage</code>

# EventSubscriptions

Models:

- <code><a href="./resources/event-subscriptions.ts">EventSubscription</a></code>

Methods:

- <code title="post /event_subscriptions">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">create</a>({ ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">retrieve</a>(eventSubscriptionId) -> EventSubscription</code>
- <code title="patch /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">update</a>(eventSubscriptionId, { ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">list</a>({ ...params }) -> EventSubscriptionsPage</code>

# Files

Models:

- <code><a href="./resources/files.ts">File</a></code>

Methods:

- <code title="post /files">client.files.<a href="./resources/files.ts">create</a>({ ...params }) -> File</code>
- <code title="get /files/{file_id}">client.files.<a href="./resources/files.ts">retrieve</a>(fileId) -> File</code>
- <code title="get /files">client.files.<a href="./resources/files.ts">list</a>({ ...params }) -> FilesPage</code>

# Groups

Models:

- <code><a href="./resources/groups.ts">Group</a></code>

Methods:

- <code title="get /groups/current">client.groups.<a href="./resources/groups.ts">retrieveDetails</a>() -> Group</code>

# OauthConnections

Models:

- <code><a href="./resources/oauth-connections.ts">OauthConnection</a></code>

Methods:

- <code title="get /oauth_connections/{oauth_connection_id}">client.oauthConnections.<a href="./resources/oauth-connections.ts">retrieve</a>(oauthConnectionId) -> OauthConnection</code>
- <code title="get /oauth_connections">client.oauthConnections.<a href="./resources/oauth-connections.ts">list</a>({ ...params }) -> OauthConnectionsPage</code>

# CheckDeposits

Models:

- <code><a href="./resources/check-deposits.ts">CheckDeposit</a></code>

Methods:

- <code title="post /check_deposits">client.checkDeposits.<a href="./resources/check-deposits.ts">create</a>({ ...params }) -> CheckDeposit</code>
- <code title="get /check_deposits/{check_deposit_id}">client.checkDeposits.<a href="./resources/check-deposits.ts">retrieve</a>(checkDepositId) -> CheckDeposit</code>
- <code title="get /check_deposits">client.checkDeposits.<a href="./resources/check-deposits.ts">list</a>({ ...params }) -> CheckDepositsPage</code>

# RoutingNumbers

Models:

- <code><a href="./resources/routing-numbers.ts">RoutingNumber</a></code>

Methods:

- <code title="get /routing_numbers">client.routingNumbers.<a href="./resources/routing-numbers.ts">list</a>({ ...params }) -> RoutingNumbersPage</code>

# AccountStatements

Models:

- <code><a href="./resources/account-statements.ts">AccountStatement</a></code>

Methods:

- <code title="get /account_statements/{account_statement_id}">client.accountStatements.<a href="./resources/account-statements.ts">retrieve</a>(accountStatementId) -> AccountStatement</code>
- <code title="get /account_statements">client.accountStatements.<a href="./resources/account-statements.ts">list</a>({ ...params }) -> AccountStatementsPage</code>

# Simulations

## AccountTransfers

Methods:

- <code title="post /simulations/account_transfers/{account_transfer_id}/complete">client.simulations.accountTransfers.<a href="./resources/simulations/account-transfers.ts">complete</a>(accountTransferId) -> AccountTransfer</code>

## AccountStatements

Methods:

- <code title="post /simulations/account_statements">client.simulations.accountStatements.<a href="./resources/simulations/account-statements.ts">create</a>({ ...params }) -> AccountStatement</code>

## ACHTransfers

Models:

- <code><a href="./resources/simulations/ach-transfers.ts">ACHTransferSimulation</a></code>

Methods:

- <code title="post /simulations/inbound_ach_transfers">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">createInbound</a>({ ...params }) -> ACHTransferSimulation</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/return">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">return</a>(achTransferId, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/submit">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">submit</a>(achTransferId) -> ACHTransfer</code>

## CardDisputes

Methods:

- <code title="post /simulations/card_disputes/{card_dispute_id}/action">client.simulations.cardDisputes.<a href="./resources/simulations/card-disputes.ts">action</a>(cardDisputeId, { ...params }) -> CardDispute</code>

## CardRefunds

Methods:

- <code title="post /simulations/card_refunds">client.simulations.cardRefunds.<a href="./resources/simulations/card-refunds.ts">create</a>({ ...params }) -> Transaction</code>

## CheckTransfers

Methods:

- <code title="post /simulations/check_transfers/{check_transfer_id}/deposit">client.simulations.checkTransfers.<a href="./resources/simulations/check-transfers.ts">deposit</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /simulations/check_transfers/{check_transfer_id}/mail">client.simulations.checkTransfers.<a href="./resources/simulations/check-transfers.ts">mail</a>(checkTransferId) -> CheckTransfer</code>
- <code title="post /simulations/check_transfers/{check_transfer_id}/return">client.simulations.checkTransfers.<a href="./resources/simulations/check-transfers.ts">return</a>(checkTransferId, { ...params }) -> CheckTransfer</code>

## Documents

Methods:

- <code title="post /simulations/documents">client.simulations.documents.<a href="./resources/simulations/documents.ts">create</a>({ ...params }) -> Document</code>

## DigitalWalletTokenRequests

Models:

- <code><a href="./resources/simulations/digital-wallet-token-requests.ts">DigitalWalletTokenRequestCreateResponse</a></code>

Methods:

- <code title="post /simulations/digital_wallet_token_requests">client.simulations.digitalWalletTokenRequests.<a href="./resources/simulations/digital-wallet-token-requests.ts">create</a>({ ...params }) -> DigitalWalletTokenRequestCreateResponse</code>

## CheckDeposits

Methods:

- <code title="post /simulations/check_deposits/{check_deposit_id}/reject">client.simulations.checkDeposits.<a href="./resources/simulations/check-deposits.ts">reject</a>(checkDepositId) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/return">client.simulations.checkDeposits.<a href="./resources/simulations/check-deposits.ts">return</a>(checkDepositId) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/submit">client.simulations.checkDeposits.<a href="./resources/simulations/check-deposits.ts">submit</a>(checkDepositId) -> CheckDeposit</code>

## Programs

Methods:

- <code title="post /simulations/programs">client.simulations.programs.<a href="./resources/simulations/programs.ts">create</a>({ ...params }) -> Program</code>

## InboundWireDrawdownRequests

Methods:

- <code title="post /simulations/inbound_wire_drawdown_requests">client.simulations.inboundWireDrawdownRequests.<a href="./resources/simulations/inbound-wire-drawdown-requests.ts">create</a>({ ...params }) -> InboundWireDrawdownRequest</code>

## InterestPayments

Models:

- <code><a href="./resources/simulations/interest-payments.ts">InterestPaymentSimulationResult</a></code>

Methods:

- <code title="post /simulations/interest_payment">client.simulations.interestPayments.<a href="./resources/simulations/interest-payments.ts">create</a>({ ...params }) -> InterestPaymentSimulationResult</code>

## WireTransfers

Models:

- <code><a href="./resources/simulations/wire-transfers.ts">WireTransferSimulation</a></code>

Methods:

- <code title="post /simulations/inbound_wire_transfers">client.simulations.wireTransfers.<a href="./resources/simulations/wire-transfers.ts">createInbound</a>({ ...params }) -> WireTransferSimulation</code>

## Cards

Models:

- <code><a href="./resources/simulations/cards.ts">CardAuthorizationSimulation</a></code>

Methods:

- <code title="post /simulations/card_authorizations">client.simulations.cards.<a href="./resources/simulations/cards.ts">authorize</a>({ ...params }) -> CardAuthorizationSimulation</code>
- <code title="post /simulations/card_settlements">client.simulations.cards.<a href="./resources/simulations/cards.ts">settlement</a>({ ...params }) -> Transaction</code>

## RealTimePaymentsTransfers

Models:

- <code><a href="./resources/simulations/real-time-payments-transfers.ts">InboundRealTimePaymentsTransferSimulationResult</a></code>

Methods:

- <code title="post /simulations/real_time_payments_transfers/{real_time_payments_transfer_id}/complete">client.simulations.realTimePaymentsTransfers.<a href="./resources/simulations/real-time-payments-transfers.ts">complete</a>(realTimePaymentsTransferId, { ...params }) -> RealTimePaymentsTransfer</code>
- <code title="post /simulations/inbound_real_time_payments_transfers">client.simulations.realTimePaymentsTransfers.<a href="./resources/simulations/real-time-payments-transfers.ts">createInbound</a>({ ...params }) -> InboundRealTimePaymentsTransferSimulationResult</code>
