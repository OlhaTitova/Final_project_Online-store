import {
  GET_CART, ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, SET_CART
} from './actionType';

const initialState = {
  cart: {},
}

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      }

    case CHANGE_QUANTITY:
      return {
        ...state,
        cart: payload,
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload,
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: {},
      }
    case SET_CART:
      return {
        ...state,
        cart: payload,
      }

    default:
      return state
  }
}

export default cartReducer