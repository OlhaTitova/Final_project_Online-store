import {
  ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, SET_CART, SET_CART_SUMMARY
} from './actionType';

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
})
export const addToCart = (cart) => ({
  type: ADD_TO_CART,
  payload: cart,
})
export const changeQuantity = (cart) => ({
  type: CHANGE_QUANTITY,
  payload: cart,
})
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})
export const clearCart = () => ({
  type: CLEAR_CART,
})
export const setCartSummary = (sum) => ({
  type: SET_CART_SUMMARY,
  payload: sum
})