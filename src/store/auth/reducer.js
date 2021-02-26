import { LOG_IN, LOG_OUT } from './actionType';

const initialState = {
  isLogin: false
}

export const reducer = (state = initialState, {type}) => {
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
    
    default:
      return state
  }
}

export default reducer