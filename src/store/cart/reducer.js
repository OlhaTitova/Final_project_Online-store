import {
  ADD_TO_CART, DECREASE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, SET_CART, SET_CART_SUMMARY
} from './actionType';

const initialState = {
  cart: {},
  cartSummary: 0
}

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      }
    case DECREASE_QUANTITY:
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
    case SET_CART_SUMMARY:
      return {
        ...state,
        cartSummary: payload,
      }

    default:
      return state
  }
}

export default cartReducer