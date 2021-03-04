import {
  ADD_TO_CART, DECREASE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, SET_CART, SET_CART_SUMMARY
} from './actionType';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
})
export const addToCartCreator = (cart) => ({
  type: ADD_TO_CART,
  payload: cart,
})
export const decreaseQuantityCreator = (cart) => ({
  type: DECREASE_QUANTITY,
  payload: cart,
})
export const removeFromCartCreator = (cart) => ({
  type: REMOVE_FROM_CART,
  payload: cart,
})
export const clearCartCreator = () => ({
  type: CLEAR_CART,
})
export const setCartSummaryCreator = (sum) => ({
  type: SET_CART_SUMMARY,
  payload: sum
})