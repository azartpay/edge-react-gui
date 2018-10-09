// @flow

/* globals test expect */

import { createWallet as createWalletReducer } from './reducer.js'

const dummyAction = { type: 'DUMMY_ACTION_PLEASE_IGNORE' }

test('initialState', () => {
  const expected = {
    isCreatingWallet: false
  }
  const actual = createWalletReducer(undefined, dummyAction)

  expect(actual).toEqual(expected)
})
