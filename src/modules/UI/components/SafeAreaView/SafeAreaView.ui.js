// @flow

import React from 'react'
import type { Node } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz.js'
import Gradient from '../../components/Gradient/Gradient.ui'

type props = {
  style: StyleSheet.Styles,
  children: Node
}

// The Gradient Component is a hack to make the upper portion of the safe area view have the edge gradient
const SafeAreaViewComponent = ({ style, children }: props) => {
  return (
    <SafeAreaView style={[style, { flex: 1 }]}>
      {children}
      <Gradient
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: THEME.HEADER,
          zIndex: -1000
        }}
      />
    </SafeAreaView>
  )
}

export default SafeAreaViewComponent
