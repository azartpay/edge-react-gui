// @flow

import type { EdgeLobby } from 'edge-core-js'

import type { Action } from '../../modules/ReduxTypes.js'

const initialState = {
  lobby: null,
  error: null,
  isProcessing: false
}
export type InitialEdgeLoginState = {
  lobby: null | EdgeLobby,
  error: null | Error,
  isProcessing: boolean
}
export default function (state: InitialEdgeLoginState = initialState, action: Action) {
  switch (action.type) {
    case 'EDGE_LOGIN/PROCESS_LOGIN': {
      return {
        ...state,
        isProcessing: true
      }
    }

    case 'EDGE_LOGIN/INVALIDATE_LOBBY': {
      return {
        ...state,
        lobby: null,
        isProcessing: false
      }
    }

    case 'EDGE_LOGIN/SET_LOBBY_ERROR': {
      return {
        ...state,
        lobby: null,
        error: action.data
      }
    }

    case 'EDGE_LOGIN/SAVE_LOBBY': {
      return {
        ...state,
        lobby: action.data,
        error: null
      }
    }

    default:
      return state
  }
}
