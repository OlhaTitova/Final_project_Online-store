import {
  CLEAR_REFRESH_TIMER, LOG_IN, LOG_OUT, SET_REFRESH_TIMER
} from './actionType';

export const MODULE_NAME = 'auth'

export const selectIsLogin = (state) => state[MODULE_NAME].isLogin

const initialState = {
  isLogin: false,
  refreshTimerId: null
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        isLogin: true
      }
    case LOG_OUT:
      return {
        ...state,
        isLogin: false
      }
    case SET_REFRESH_TIMER:
      return {
        ...state,
        refreshTimerId: payload
      }
    case CLEAR_REFRESH_TIMER:
      return {
        ...state,
        refreshTimerId: clearInterval(state.refreshTimerId)
      }
    default:
      return state
  }
}

export default reducer