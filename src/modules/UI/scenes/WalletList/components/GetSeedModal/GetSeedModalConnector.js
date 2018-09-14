// @flow

import { connect } from 'react-redux'

import * as CORE_SELECTORS from '../../../../../Core/selectors.js'
import type { Dispatch, GetState, State } from '../../../../../ReduxTypes'
import GetSeedModal from './GetSeedModal.ui'
import type { GetSeedModalDispatchProps, GetSeedModalStateProps } from './GetSeedModal.ui'

const checkCurrentPassword = (password: string) => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState()
  const account = CORE_SELECTORS.getAccount(state)
  const isPassword = await account.checkPassword(password)
  dispatch({ type: isPassword ? 'UNLOCK_WALLET_SEED' : 'LOCK_WALLET_SEED' })
}

const nullFunc = () => null

const mapStateToProps = (state: State): GetSeedModalStateProps => {
  const wallet = CORE_SELECTORS.getWallet(state, state.ui.scenes.walletList.walletId)
  const walletId = state.ui.scenes.walletList.walletId
  const walletName = CORE_SELECTORS.getWalletName(state, walletId)

  return {
    visibilityBoolean: state.ui.scenes.walletList.getSeedWalletModalVisible,
    getSeed: wallet ? wallet.getDisplayPrivateSeed : nullFunc,
    walletId: walletId,
    privateSeedUnlocked: state.ui.scenes.walletList.privateSeedUnlocked,
    walletName
  }
}

const mapDispatchToProps = (dispatch: Dispatch): GetSeedModalDispatchProps => {
  const close = () => {
    dispatch({ type: 'CLOSE_GETSEED_WALLET_MODAL' })
    dispatch({ type: 'LOCK_WALLET_SEED' })
  }

  return {
    onExitButtonFxn: close,
    onNegative: () => dispatch({ type: 'LOCK_WALLET_SEED' }),
    onPositive: (password: string) => dispatch(checkCurrentPassword(password)),
    onDone: close
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetSeedModal)
