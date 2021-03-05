import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_CART,
  SET_CART_SUMMARY
} from './actionType';

const initialState = {
  cartSummary: 0,
  products: [],
  customer: {}
}

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
    case DECREASE_QUANTITY:
    case INCREASE_QUANTITY:
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
      }
    case CLEAR_CART:
      return {
        ...state,
        products: {},
      }
    case SET_CART:
      return {
        ...state,
        products: payload.products,
        customer: payload.customerId,
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