import {
  CLEAR_REFRESH_TIMER, LOG_IN, LOG_OUT, SET_REFRESH_TIMER
} from './actionType';

export const logIn = () => ({
  type: LOG_IN,
})

export const logOut = () => ({
  type: LOG_OUT,
})

export const setRefreshTimer = (payload) => ({
  type: SET_REFRESH_TIMER,
  payload
})

export const clearRefreshTimer = () => ({
  type: CLEAR_REFRESH_TIMER
})