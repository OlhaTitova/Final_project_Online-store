import { SET_SUBSCRIBER, SET_SUBSCRIBER_SUCCESS, SET_SUBSCRIBER_ERROR } from './actionType'

export const createSubscribe = () => ({type: SET_SUBSCRIBER})
export const createSubscribeSuccess = (payload) => ({type: SET_SUBSCRIBER_SUCCESS, payload})
export const createSubscribeError = (payload) => ({type: SET_SUBSCRIBER_ERROR, payload})