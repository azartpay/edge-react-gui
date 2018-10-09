// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../../../../../theme/variables/airbitz.js'

export const rawStyles = {
  button: {
    height: 50,
    backgroundColor: THEME.COLORS.TRANSPARENT,
    paddingHorizontal: 6
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  item: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  left: {
    height: '100%',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6
  },
  center: {
    flex: 1,
    height: '100%',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 6
  },
  right: {
    height: '100%',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6
  },
  text: {
    fontSize: 16,
    fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  underlay: {
    color: `${THEME.COLORS.WHITE}${THEME.ALPHA.LOW}`
  },
  debug: {
    // borderColor: 'red',
    // borderWidth: 1
  }
}

export default StyleSheet.create(rawStyles)
