import { SET_SUBSCRIBER, SET_SUBSCRIBER_SUCCESS, SET_SUBSCRIBER_ERROR } from './actionType'

export const MODULE_NAME = 'createSubscribeModule'

const initialState = {
  isLoading: false,
  error: null,
}
export const subscribersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SUBSCRIBER: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SET_SUBSCRIBER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
      }
    }
    case SET_SUBSCRIBER_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}