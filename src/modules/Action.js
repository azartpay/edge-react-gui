// @flow

type ActionType =
  | 'CLOSE_DELETE_WALLET_MODAL'
  | 'CLOSE_GETSEED_WALLET_MODAL'
  | 'CLOSE_RENAME_WALLET_MODAL'
  | 'CLOSE_RESYNC_WALLET_MODAL'
  | 'CLOSE_SPLIT_WALLET_MODAL'
  | 'CLOSE_VIEW_XPUB_WALLET_MODAL'
  | 'LOCK_WALLET_SEED'
  | 'OPEN_DELETE_WALLET_MODAL'
  | 'OPEN_GETSEED_WALLET_MODAL'
  | 'OPEN_RENAME_WALLET_MODAL'
  | 'OPEN_RESYNC_WALLET_MODAL'
  | 'OPEN_SPLIT_WALLET_MODAL'
  | 'OPEN_VIEW_XPUB_WALLET_MODAL'
  | 'UNLOCK_WALLET_SEED'
  | 'selectFromWalletCryptoExchange'
  | 'selectToWalletCryptoExchange'
  | 'swapFromToCryptoWallets'
  | 'openWalletSelectorModal'
  | 'updateCryptoExchangeRate'
  | 'updateCryptoReverseExchangeRate'
  | 'updateCryptoExchangeInfo'
  | 'updateCryptoReverseExchangeInfo'
  | 'updateShiftTransactionFee'
  | 'invalidateShiftTransaction'
  | 'shiftCryptoCurrency'
  | 'shiftComplete'
  | 'shiftError'
  | 'openCryptoExecConfModal'
  | 'closeCryptoExecConfModal'
  | 'startMakeSpendCrypto'
  | 'doneMakeSpendCrypto'
  | 'setCryptoExchangeAmounts'
  | 'receivedTRansactionError'
  | 'receivedInsufficentFundsError'
  | 'genericShapeShiftError'
  | 'CHANGE_EXCHANGE_FEE'
  | 'onAvailableShapeShiftTokens'
  | 'START_SHIFT_TRANSACTION'
  | 'DONE_SHIFT_TRANSACTION'
  | 'OPEN_AB_ALERT'
  | 'CLOSE_AB_ALERT'
  | 'useLegacyRequestAddress'
  | 'useRegularRequestAddress'
  | 'UPDATE_RECEIVE_ADDRESS_SUCCESS'
  | 'newReceiveAddress'
  | 'saveEdgeLobby'
  | 'invalidateEdgeLobby'
  | 'setLobbyError'
  | 'eraseDeepLink'
  | 'accountInitComplete'
  | 'disableOTPReset'
  | 'setConfirmPasswordError'
  | 'ACCOUNT/LOGGED_IN'
  | 'LOGOUT'
  | 'Core/Context/ADD_CONTEXT'
  | 'Core/Context/ADD_USERNAMES'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_REQUEST'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_SUCCESS'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_ERROR'
  | 'Core/Wallets/UPDATE_WALLETS'
  | 'ExchangeRates/UPDATE_EXCHANGE_RATES'
  | 'Logs/SEND_LOGS_PENDING'
  | 'Logs/SEND_LOGS_REQUEST'
  | 'Logs/SEND_LOGS_SUCCESS'
  | 'Logs/SEND_LOGS_FAILURE'
  | string

type LegacyAction = {
  type: ActionType,
  data?: any
}

export type Action = LegacyAction
