// @flow

import type { EdgeAccount, EdgeContext } from 'edge-core-js'
import { LoginScreen } from 'edge-login-ui-rn'
import React, { Component } from 'react'
import { View } from 'react-native'
import slowlog from 'react-native-slowlog'

import THEME from '../../../../theme/variables/airbitz'
import makeAccountCallbacks from '../../../Core/Account/callbacks'
import { getUsernames } from '../../../Core/Context/api'
import type { Dispatch } from '../../../ReduxTypes'

type Props = {
  initializeAccount: (EdgeAccount, touchIdInfo: ?Object) => void,
  context: EdgeContext,
  addUsernames: (Array<string>) => void,
  account: ?EdgeAccount,
  recoveryLogin: string,
  dispatch: Dispatch,
  username?: string
}
type State = { key: number }
export default class Login extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { key: 0 }
    slowlog(this, /.*/, global.slowlogOptions)
  }

  onLogin = (error: ?Error = null, account: ?EdgeAccount, touchIdInfo: ?Object = null) => {
    const { addUsernames, context, initializeAccount } = this.props
    if (error || !account) return
    addUsernames(getUsernames(context))
    initializeAccount(account, touchIdInfo)
  }

  UNSAFE_componentWillReceiveProps (nextProps: Props) {
    // If we have logged out, destroy and recreate the login screen:
    if (this.props.account && nextProps.account && nextProps.account !== this.props.account) {
      if (typeof nextProps.account.username === 'undefined') {
        this.setState({ key: this.state.key + 1 })
      }
    }
  }

  render () {
    const { context, dispatch, recoveryLogin, username } = this.props
    const callbacks = makeAccountCallbacks(dispatch)
    const loading = Object.keys(context).length <= 0

    return loading ? null : (
      <View style={{ flex: 1 }} testID={'edge: login-scene'}>
        <LoginScreen
          username={username}
          accountOptions={{ callbacks }}
          context={context}
          recoveryLogin={recoveryLogin}
          onLogin={this.onLogin}
          fontDescription={{
            regularFontFamily: THEME.FONTS.DEFAULT
          }}
          key={this.state.key.toString()}
        />
      </View>
    )
  }
}
