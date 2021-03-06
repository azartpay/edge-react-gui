// @flow

import React, { Component } from 'react'
import { View } from 'react-native'

import { PrimaryModalConnector as PrimaryModal } from './PrimaryModal/PrimaryModalConnector.js'
import { SecondaryModalConnector as SecondaryModal } from './SecondaryModal/SecondaryModalConnector.js'

type Props = {
  onPrivateKeyAccept: () => void,
  onPrivateKeyReject: () => void,
  reset: () => void
}
export class PrivateKeyModal extends Component<Props> {
  render () {
    const { onPrivateKeyAccept, reset } = this.props
    return (
      <View>
        <PrimaryModal onAccept={onPrivateKeyAccept} />
        <SecondaryModal onModalHide={reset} />
      </View>
    )
  }
}

export default PrivateKeyModal
