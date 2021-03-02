import {
  GET_CART, ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART, CLEAR_CART, SET_CART
} from './actionType';

export const getCartCreator = () => ({
  type: GET_CART,
})

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: {
    product,
    quantity,
  },
})
export const changeQuantity = (product, quantity) => ({
  type: CHANGE_QUANTITY,
  payload: {
    product,
    quantity,
  },
})
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id
  },
})
export const clearCart = () => ({
  type: CLEAR_CART,
})
export const setCart = (cart) => ({
  type: SET_CART,
  payload: {
    cart
  },
})