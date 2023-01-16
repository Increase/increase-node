# Accounts

Models:

- <code><a href="./resources/accounts.ts">Account</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./resources/accounts.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<Account>></code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./resources/accounts.ts">retrieve</a>(accountId) -> Promise<Core.APIResponse<Account>></code>
- <code title="patch /accounts/{account_id}">client.accounts.<a href="./resources/accounts.ts">update</a>(accountId, { ...params }) -> Promise<Core.APIResponse<Account>></code>
- <code title="get /accounts">client.accounts.<a href="./resources/accounts.ts">list</a>({ ...params }) -> Core.PagePromise<AccountsPage></code>
- <code title="post /accounts/{account_id}/close">client.accounts.<a href="./resources/accounts.ts">close</a>(accountId) -> Promise<Core.APIResponse<Account>></code>

# AccountNumbers

Models:

- <code><a href="./resources/account-numbers.ts">AccountNumber</a></code>

Methods:

- <code title="post /account_numbers">client.accountNumbers.<a href="./resources/account-numbers.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<AccountNumber>></code>
- <code title="get /account_numbers/{account_number_id}">client.accountNumbers.<a href="./resources/account-numbers.ts">retrieve</a>(accountNumberId) -> Promise<Core.APIResponse<AccountNumber>></code>
- <code title="patch /account_numbers/{account_number_id}">client.accountNumbers.<a href="./resources/account-numbers.ts">update</a>(accountNumberId, { ...params }) -> Promise<Core.APIResponse<AccountNumber>></code>
- <code title="get /account_numbers">client.accountNumbers.<a href="./resources/account-numbers.ts">list</a>({ ...params }) -> Core.PagePromise<AccountNumbersPage></code>

# RealTimeDecisions

Models:

- <code><a href="./resources/real-time-decisions.ts">RealTimeDecision</a></code>

Methods:

- <code title="get /real_time_decisions/{real_time_decision_id}">client.realTimeDecisions.<a href="./resources/real-time-decisions.ts">retrieve</a>(realTimeDecisionId) -> Promise<Core.APIResponse<RealTimeDecision>></code>
- <code title="post /real_time_decisions/{real_time_decision_id}/action">client.realTimeDecisions.<a href="./resources/real-time-decisions.ts">action</a>(realTimeDecisionId, { ...params }) -> Promise<Core.APIResponse<RealTimeDecision>></code>

# Cards

Models:

- <code><a href="./resources/cards.ts">Card</a></code>
- <code><a href="./resources/cards.ts">CardDetails</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./resources/cards.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<Card>></code>
- <code title="get /cards/{card_id}">client.cards.<a href="./resources/cards.ts">retrieve</a>(cardId) -> Promise<Core.APIResponse<Card>></code>
- <code title="patch /cards/{card_id}">client.cards.<a href="./resources/cards.ts">update</a>(cardId, { ...params }) -> Promise<Core.APIResponse<Card>></code>
- <code title="get /cards">client.cards.<a href="./resources/cards.ts">list</a>({ ...params }) -> Core.PagePromise<CardsPage></code>
- <code title="get /cards/{card_id}/details">client.cards.<a href="./resources/cards.ts">retrieveSensitiveDetails</a>(cardId) -> Promise<Core.APIResponse<CardDetails>></code>

# CardDisputes

Models:

- <code><a href="./resources/card-disputes.ts">CardDispute</a></code>

Methods:

- <code title="post /card_disputes">client.cardDisputes.<a href="./resources/card-disputes.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<CardDispute>></code>
- <code title="get /card_disputes/{card_dispute_id}">client.cardDisputes.<a href="./resources/card-disputes.ts">retrieve</a>(cardDisputeId) -> Promise<Core.APIResponse<CardDispute>></code>
- <code title="get /card_disputes">client.cardDisputes.<a href="./resources/card-disputes.ts">list</a>({ ...params }) -> Core.PagePromise<CardDisputesPage></code>

# CardProfiles

Models:

- <code><a href="./resources/card-profiles.ts">CardProfile</a></code>

Methods:

- <code title="post /card_profiles">client.cardProfiles.<a href="./resources/card-profiles.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<CardProfile>></code>
- <code title="get /card_profiles/{card_profile_id}">client.cardProfiles.<a href="./resources/card-profiles.ts">retrieve</a>(cardProfileId) -> Promise<Core.APIResponse<CardProfile>></code>
- <code title="get /card_profiles">client.cardProfiles.<a href="./resources/card-profiles.ts">list</a>({ ...params }) -> Core.PagePromise<CardProfilesPage></code>

# ExternalAccounts

Models:

- <code><a href="./resources/external-accounts.ts">ExternalAccount</a></code>

Methods:

- <code title="post /external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<ExternalAccount>></code>
- <code title="get /external_accounts/{external_account_id}">client.externalAccounts.<a href="./resources/external-accounts.ts">retrieve</a>(externalAccountId) -> Promise<Core.APIResponse<ExternalAccount>></code>
- <code title="patch /external_accounts/{external_account_id}">client.externalAccounts.<a href="./resources/external-accounts.ts">update</a>(externalAccountId, { ...params }) -> Promise<Core.APIResponse<ExternalAccount>></code>
- <code title="get /external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">list</a>({ ...params }) -> Core.PagePromise<ExternalAccountsPage></code>

# DigitalWalletTokens

Models:

- <code><a href="./resources/digital-wallet-tokens.ts">DigitalWalletToken</a></code>

Methods:

- <code title="get /digital_wallet_tokens/{digital_wallet_token_id}">client.digitalWalletTokens.<a href="./resources/digital-wallet-tokens.ts">retrieve</a>(digitalWalletTokenId) -> Promise<Core.APIResponse<DigitalWalletToken>></code>
- <code title="get /digital_wallet_tokens">client.digitalWalletTokens.<a href="./resources/digital-wallet-tokens.ts">list</a>({ ...params }) -> Core.PagePromise<DigitalWalletTokensPage></code>

# Transactions

Models:

- <code><a href="./resources/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /transactions/{transaction_id}">client.transactions.<a href="./resources/transactions.ts">retrieve</a>(transactionId) -> Promise<Core.APIResponse<Transaction>></code>
- <code title="get /transactions">client.transactions.<a href="./resources/transactions.ts">list</a>({ ...params }) -> Core.PagePromise<TransactionsPage></code>

# PendingTransactions

Models:

- <code><a href="./resources/pending-transactions.ts">PendingTransaction</a></code>

Methods:

- <code title="get /pending_transactions/{pending_transaction_id}">client.pendingTransactions.<a href="./resources/pending-transactions.ts">retrieve</a>(pendingTransactionId) -> Promise<Core.APIResponse<PendingTransaction>></code>
- <code title="get /pending_transactions">client.pendingTransactions.<a href="./resources/pending-transactions.ts">list</a>({ ...params }) -> Core.PagePromise<PendingTransactionsPage></code>

# DeclinedTransactions

Models:

- <code><a href="./resources/declined-transactions.ts">DeclinedTransaction</a></code>

Methods:

- <code title="get /declined_transactions/{declined_transaction_id}">client.declinedTransactions.<a href="./resources/declined-transactions.ts">retrieve</a>(declinedTransactionId) -> Promise<Core.APIResponse<DeclinedTransaction>></code>
- <code title="get /declined_transactions">client.declinedTransactions.<a href="./resources/declined-transactions.ts">list</a>({ ...params }) -> Core.PagePromise<DeclinedTransactionsPage></code>

# Limits

Models:

- <code><a href="./resources/limits.ts">Limit</a></code>

Methods:

- <code title="post /limits">client.limits.<a href="./resources/limits.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<Limit>></code>
- <code title="get /limits/{limit_id}">client.limits.<a href="./resources/limits.ts">retrieve</a>(limitId) -> Promise<Core.APIResponse<Limit>></code>
- <code title="patch /limits/{limit_id}">client.limits.<a href="./resources/limits.ts">update</a>(limitId, { ...params }) -> Promise<Core.APIResponse<Limit>></code>
- <code title="get /limits">client.limits.<a href="./resources/limits.ts">list</a>({ ...params }) -> Core.PagePromise<LimitsPage></code>

# AccountTransfers

Models:

- <code><a href="./resources/account-transfers.ts">AccountTransfer</a></code>

Methods:

- <code title="post /account_transfers">client.accountTransfers.<a href="./resources/account-transfers.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<AccountTransfer>></code>
- <code title="get /account_transfers/{account_transfer_id}">client.accountTransfers.<a href="./resources/account-transfers.ts">retrieve</a>(accountTransferId) -> Promise<Core.APIResponse<AccountTransfer>></code>
- <code title="get /account_transfers">client.accountTransfers.<a href="./resources/account-transfers.ts">list</a>({ ...params }) -> Core.PagePromise<AccountTransfersPage></code>

# ACHTransfers

Models:

- <code><a href="./resources/ach-transfers.ts">ACHTransfer</a></code>

Methods:

- <code title="post /ach_transfers">client.achTransfers.<a href="./resources/ach-transfers.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<ACHTransfer>></code>
- <code title="get /ach_transfers/{ach_transfer_id}">client.achTransfers.<a href="./resources/ach-transfers.ts">retrieve</a>(achTransferId) -> Promise<Core.APIResponse<ACHTransfer>></code>
- <code title="get /ach_transfers">client.achTransfers.<a href="./resources/ach-transfers.ts">list</a>({ ...params }) -> Core.PagePromise<ACHTransfersPage></code>

# ACHPrenotifications

Models:

- <code><a href="./resources/ach-prenotifications.ts">ACHPrenotification</a></code>

Methods:

- <code title="post /ach_prenotifications">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<ACHPrenotification>></code>
- <code title="get /ach_prenotifications/{ach_prenotification_id}">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">retrieve</a>(achPrenotificationId) -> Promise<Core.APIResponse<ACHPrenotification>></code>
- <code title="get /ach_prenotifications">client.achPrenotifications.<a href="./resources/ach-prenotifications.ts">list</a>({ ...params }) -> Core.PagePromise<ACHPrenotificationsPage></code>

# WireTransfers

Models:

- <code><a href="./resources/wire-transfers.ts">WireTransfer</a></code>

Methods:

- <code title="post /wire_transfers">client.wireTransfers.<a href="./resources/wire-transfers.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<WireTransfer>></code>
- <code title="get /wire_transfers/{wire_transfer_id}">client.wireTransfers.<a href="./resources/wire-transfers.ts">retrieve</a>(wireTransferId) -> Promise<Core.APIResponse<WireTransfer>></code>
- <code title="get /wire_transfers">client.wireTransfers.<a href="./resources/wire-transfers.ts">list</a>({ ...params }) -> Core.PagePromise<WireTransfersPage></code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/reverse">client.wireTransfers.<a href="./resources/wire-transfers.ts">reverse</a>(wireTransferId) -> Promise<Core.APIResponse<WireTransfer>></code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/submit">client.wireTransfers.<a href="./resources/wire-transfers.ts">submit</a>(wireTransferId) -> Promise<Core.APIResponse<WireTransfer>></code>

# CheckTransfers

Models:

- <code><a href="./resources/check-transfers.ts">CheckTransfer</a></code>

Methods:

- <code title="post /check_transfers">client.checkTransfers.<a href="./resources/check-transfers.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<CheckTransfer>></code>
- <code title="get /check_transfers/{check_transfer_id}">client.checkTransfers.<a href="./resources/check-transfers.ts">retrieve</a>(checkTransferId) -> Promise<Core.APIResponse<CheckTransfer>></code>
- <code title="get /check_transfers">client.checkTransfers.<a href="./resources/check-transfers.ts">list</a>({ ...params }) -> Core.PagePromise<CheckTransfersPage></code>
- <code title="post /check_transfers/{check_transfer_id}/stop_payment">client.checkTransfers.<a href="./resources/check-transfers.ts">stopPayment</a>(checkTransferId) -> Promise<Core.APIResponse<CheckTransfer>></code>

# Entities

Models:

- <code><a href="./resources/entities/entities.ts">Entity</a></code>

Methods:

- <code title="post /entities">client.entities.<a href="./resources/entities/entities.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<Entity>></code>
- <code title="get /entities/{entity_id}">client.entities.<a href="./resources/entities/entities.ts">retrieve</a>(entityId) -> Promise<Core.APIResponse<Entity>></code>
- <code title="get /entities">client.entities.<a href="./resources/entities/entities.ts">list</a>({ ...params }) -> Core.PagePromise<EntitiesPage></code>

## SupplementalDocuments

Methods:

- <code title="post /entities/{entity_id}/supplemental_documents">client.entities.supplementalDocuments.<a href="./resources/entities/supplemental-documents.ts">create</a>(entityId, { ...params }) -> Promise<Core.APIResponse<Entity>></code>

# WireDrawdownRequests

Models:

- <code><a href="./resources/wire-drawdown-requests.ts">WireDrawdownRequest</a></code>

Methods:

- <code title="post /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<WireDrawdownRequest>></code>
- <code title="get /wire_drawdown_requests/{wire_drawdown_request_id}">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">retrieve</a>(wireDrawdownRequestId) -> Promise<Core.APIResponse<WireDrawdownRequest>></code>
- <code title="get /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./resources/wire-drawdown-requests.ts">list</a>({ ...params }) -> Core.PagePromise<WireDrawdownRequestsPage></code>

# Events

Models:

- <code><a href="./resources/events.ts">Event</a></code>

Methods:

- <code title="get /events/{event_id}">client.events.<a href="./resources/events.ts">retrieve</a>(eventId) -> Promise<Core.APIResponse<Event>></code>
- <code title="get /events">client.events.<a href="./resources/events.ts">list</a>({ ...params }) -> Core.PagePromise<EventsPage></code>

# EventSubscriptions

Models:

- <code><a href="./resources/event-subscriptions.ts">EventSubscription</a></code>

Methods:

- <code title="post /event_subscriptions">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<EventSubscription>></code>
- <code title="get /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">retrieve</a>(eventSubscriptionId) -> Promise<Core.APIResponse<EventSubscription>></code>
- <code title="patch /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">update</a>(eventSubscriptionId, { ...params }) -> Promise<Core.APIResponse<EventSubscription>></code>
- <code title="get /event_subscriptions">client.eventSubscriptions.<a href="./resources/event-subscriptions.ts">list</a>({ ...params }) -> Core.PagePromise<EventSubscriptionsPage></code>

# Files

Models:

- <code><a href="./resources/files.ts">File</a></code>

Methods:

- <code title="post /files">client.files.<a href="./resources/files.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<File>></code>
- <code title="get /files/{file_id}">client.files.<a href="./resources/files.ts">retrieve</a>(fileId) -> Promise<Core.APIResponse<File>></code>
- <code title="get /files">client.files.<a href="./resources/files.ts">list</a>({ ...params }) -> Core.PagePromise<FilesPage></code>

# Groups

Models:

- <code><a href="./resources/groups.ts">Group</a></code>

Methods:

- <code title="get /groups/current">client.groups.<a href="./resources/groups.ts">retrieveDetails</a>() -> Promise<Core.APIResponse<Group>></code>

# OauthConnections

Models:

- <code><a href="./resources/oauth-connections.ts">OauthConnection</a></code>

Methods:

- <code title="get /oauth_connections/{oauth_connection_id}">client.oauthConnections.<a href="./resources/oauth-connections.ts">retrieve</a>(oauthConnectionId) -> Promise<Core.APIResponse<OauthConnection>></code>
- <code title="get /oauth_connections">client.oauthConnections.<a href="./resources/oauth-connections.ts">list</a>({ ...params }) -> Core.PagePromise<OauthConnectionsPage></code>

# CheckDeposits

Models:

- <code><a href="./resources/check-deposits.ts">CheckDeposit</a></code>

Methods:

- <code title="post /check_deposits">client.checkDeposits.<a href="./resources/check-deposits.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<CheckDeposit>></code>
- <code title="get /check_deposits/{check_deposit_id}">client.checkDeposits.<a href="./resources/check-deposits.ts">retrieve</a>(checkDepositId) -> Promise<Core.APIResponse<CheckDeposit>></code>
- <code title="get /check_deposits">client.checkDeposits.<a href="./resources/check-deposits.ts">list</a>({ ...params }) -> Core.PagePromise<CheckDepositsPage></code>

# RoutingNumbers

Models:

- <code><a href="./resources/routing-numbers.ts">RoutingNumber</a></code>

Methods:

- <code title="get /routing_numbers">client.routingNumbers.<a href="./resources/routing-numbers.ts">list</a>({ ...params }) -> Core.PagePromise<RoutingNumbersPage></code>

# AccountStatements

Models:

- <code><a href="./resources/account-statements.ts">AccountStatement</a></code>

Methods:

- <code title="get /account_statements/{account_statement_id}">client.accountStatements.<a href="./resources/account-statements.ts">retrieve</a>(accountStatementId) -> Promise<Core.APIResponse<AccountStatement>></code>
- <code title="get /account_statements">client.accountStatements.<a href="./resources/account-statements.ts">list</a>({ ...params }) -> Core.PagePromise<AccountStatementsPage></code>

# Simulations

## AccountTransfers

Methods:

- <code title="post /simulations/account_transfers/{account_transfer_id}/complete">client.simulations.accountTransfers.<a href="./resources/simulations/account-transfers.ts">complete</a>(accountTransferId) -> Promise<Core.APIResponse<AccountTransfer>></code>

## AccountStatements

Methods:

- <code title="post /simulations/account_statements">client.simulations.accountStatements.<a href="./resources/simulations/account-statements.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<AccountStatement>></code>

## ACHTransfers

Models:

- <code><a href="./resources/simulations/ach-transfers.ts">ACHTransferSimulation</a></code>

Methods:

- <code title="post /simulations/inbound_ach_transfers">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">createInbound</a>({ ...params }) -> Promise<Core.APIResponse<ACHTransferSimulation>></code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/return">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">return</a>(achTransferId) -> Promise<Core.APIResponse<ACHTransfer>></code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/submit">client.simulations.achTransfers.<a href="./resources/simulations/ach-transfers.ts">submit</a>(achTransferId) -> Promise<Core.APIResponse<ACHTransfer>></code>

## CardDisputes

Methods:

- <code title="post /simulations/card_disputes/{card_dispute_id}/action">client.simulations.cardDisputes.<a href="./resources/simulations/card-disputes.ts">action</a>(cardDisputeId, { ...params }) -> Promise<Core.APIResponse<CardDispute>></code>

## CheckTransfers

Methods:

- <code title="post /simulations/check_transfers/{check_transfer_id}/mail">client.simulations.checkTransfers.<a href="./resources/simulations/check-transfers.ts">mail</a>(checkTransferId) -> Promise<Core.APIResponse<CheckTransfer>></code>

## DigitalWalletTokenRequests

Models:

- <code><a href="./resources/simulations/digital-wallet-token-requests.ts">DigitalWalletTokenRequestCreateResponse</a></code>

Methods:

- <code title="post /simulations/digital_wallet_token_requests">client.simulations.digitalWalletTokenRequests.<a href="./resources/simulations/digital-wallet-token-requests.ts">create</a>({ ...params }) -> Promise<Core.APIResponse<DigitalWalletTokenRequestCreateResponse>></code>

## CheckDeposits

Methods:

- <code title="post /simulations/check_deposits/{check_deposit_id}/reject">client.simulations.checkDeposits.<a href="./resources/simulations/check-deposits.ts">reject</a>(checkDepositId) -> Promise<Core.APIResponse<CheckDeposit>></code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/submit">client.simulations.checkDeposits.<a href="./resources/simulations/check-deposits.ts">submit</a>(checkDepositId) -> Promise<Core.APIResponse<CheckDeposit>></code>

## WireTransfers

Models:

- <code><a href="./resources/simulations/wire-transfers.ts">WireTransferSimulation</a></code>

Methods:

- <code title="post /simulations/inbound_wire_transfers">client.simulations.wireTransfers.<a href="./resources/simulations/wire-transfers.ts">createInbound</a>({ ...params }) -> Promise<Core.APIResponse<WireTransferSimulation>></code>

## Cards

Models:

- <code><a href="./resources/simulations/cards.ts">CardAuthorizationSimulation</a></code>

Methods:

- <code title="post /simulations/card_authorizations">client.simulations.cards.<a href="./resources/simulations/cards.ts">authorize</a>({ ...params }) -> Promise<Core.APIResponse<CardAuthorizationSimulation>></code>
- <code title="post /simulations/card_settlements">client.simulations.cards.<a href="./resources/simulations/cards.ts">settlement</a>({ ...params }) -> Promise<Core.APIResponse<Transaction>></code>

## RealTimePaymentsTransfers

Models:

- <code><a href="./resources/simulations/real-time-payments-transfers.ts">InboundRealTimePaymentsTransferSimulationResult</a></code>

Methods:

- <code title="post /simulations/inbound_real_time_payments_transfers">client.simulations.realTimePaymentsTransfers.<a href="./resources/simulations/real-time-payments-transfers.ts">createInbound</a>({ ...params }) -> Promise<Core.APIResponse<InboundRealTimePaymentsTransferSimulationResult>></code>
