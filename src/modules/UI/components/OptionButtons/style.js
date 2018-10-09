// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz'

export const styles = {
  // buttons
  buttonsWrap: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  stylizedButtonTextWrap: {},
  cancelButtonWrap: {
    alignSelf: 'flex-start'
  },
  cancelButton: {
    color: THEME.COLORS.SECONDARY
  },
  doneButtonWrap: {
    alignSelf: 'flex-end',
    marginLeft: 4
  }
}

export default StyleSheet.create(styles)
