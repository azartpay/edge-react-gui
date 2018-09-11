// @flow

import {
  MAX_NON_PASSWORD_DAYS_LIMIT,
  MAX_NON_PASSWORD_LOGINS_LIMIT,
  NON_PASSWORD_DAYS_GROWTH_RATE,
  NON_PASSWORD_DAYS_POSTPONEMENT,
  NON_PASSWORD_LOGINS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_POSTPONEMENT,
  initialState,
  passwordReminderReducer,
  untranslatedReducer
} from './passwordReminderReducer.js'
import type { PasswordReminderState } from './passwordReminderReducer.js'

export type { PasswordReminderState }
export {
  passwordReminderReducer,
  untranslatedReducer,
  initialState,
  MAX_NON_PASSWORD_DAYS_LIMIT,
  MAX_NON_PASSWORD_LOGINS_LIMIT,
  NON_PASSWORD_DAYS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_GROWTH_RATE,
  NON_PASSWORD_LOGINS_POSTPONEMENT,
  NON_PASSWORD_DAYS_POSTPONEMENT
}
