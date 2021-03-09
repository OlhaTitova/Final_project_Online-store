/* eslint-disable no-underscore-dangle */
import { message } from 'antd'
import axios from 'axios'
import {getHeaders} from '../headers'
import {
  setCart,
  decreaseQuantityCreator,
  addToCartCreator,
  removeFromCartCreator,
  clearCartCreator,
  increaseQuantityCreator
} from './actionCreator'

export const addToCart = (productId, quantity) => (dispatch, getStore) => {
  const { cart: { products } } = getStore()

  let updatedCart = []
  const isExistInCart = products ? products.find((el) => el.product._id === productId) : null

  if (isExistInCart) {
    updatedCart = products.map((el) => {
      if (el.product._id === isExistInCart.product._id) {
        return {
          ...el,
          cartQuantity: el.cartQuantity + quantity
        }
      }
      return el
    })
  } else {
    updatedCart = [
      ...products,
      {
        product: productId,
        cartQuantity: quantity,
      }
    ]
  }

  const headers = getHeaders()
  axios.put('/cart', {products: updatedCart}, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(addToCartCreator(updatedCart.data));
        message.success('Товар добавлен в корзину!')
      }
    })
    .catch((error) => error.response)
}

export const getCart = () => (dispatch) => {
  const headers = getHeaders()
  axios.get('/cart', { headers })
    .then((carts) => {
      if (carts.status === 200) {
        dispatch(setCart(carts.data))
      }
    })
    .catch((err) => (err.response));
}

export const increaseQuantity = (productId) => (dispatch) => {
  const headers = getHeaders()
  axios.put(`/cart/${productId}`, null, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(increaseQuantityCreator(updatedCart.data));
      }
    })
    .catch((error) => error.response)
}

export const decreaseQuantity = (productID) => (dispatch) => {
  const headers = getHeaders()
  const res = axios.delete(`/cart/product/${productID}`, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(decreaseQuantityCreator(updatedCart.data))
      }
    })
    .catch((err) => err.response);
  return res;
}

export const removeFromCart = (productID) => (dispatch) => {
  const headers = getHeaders()
  axios.delete(`/cart/${productID}`, { headers })
    .then((result) => {
      if (result.status === 200) {
        dispatch(removeFromCartCreator(result.data))
      }
    })
    .catch((err) => err.response);
}

export const clearCart = () => (dispatch) => {
  const headers = getHeaders()
  axios.delete('/cart', { headers })
    .then(() => dispatch(clearCartCreator()))
    .catch((err) => err.response);
}

export default addToCart;