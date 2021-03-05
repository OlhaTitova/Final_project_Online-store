import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_CART,
  SET_CART_SUMMARY
} from './actionType';

export const MODULE_NAME = 'cart';
export const selectProducts = (state) => state[MODULE_NAME].products;
export const selectCartSummary = (state) => state[MODULE_NAME].summary;
export const selectCustomer = (state) => state[MODULE_NAME].customer;

const initialState = {
  summary: 0,
  products: [],
  customer: {}
}

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
    case DECREASE_QUANTITY:
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: payload.products,
        summary: payload.products.reduce(
          (sum, curr) => sum + curr.cartQuantity * curr.product.currentPrice,
          0
        )
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
        summary: payload.products.reduce(
          (sum, curr) => sum + curr.cartQuantity * curr.product.currentPrice,
          0
        )
      }
    case CLEAR_CART:
      return {
        ...state,
        products: [],
        summary: 0,
      }
    case SET_CART:
      return {
        ...state,
        products: payload.products,
        customer: payload.customerId,
        summary: payload.products.reduce(
          (sum, curr) => sum + curr.cartQuantity * curr.product.currentPrice,
          0
        )
      }
    case SET_CART_SUMMARY:
      return {
        ...state,
        summary: payload,
      }
        
    default:
      return state
  }
}

export default cartReducer