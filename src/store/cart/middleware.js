/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import headers from '../headers'
import {
  setCart,
  decreaseQuantityCreator,
  addToCartCreator,
  removeFromCartCreator,
  clearCartCreator,
  increaseQuantityCreator
} from './actionCreator'

export const addToCart = (products, productId, quantity) => (dispatch) => {
  const data = products ? products.map((el) => ({
    product: el.product._id,
    cartQuantity: el.cartQuantity,
  })) : []

  axios.put('/cart',
    {
      products: [
        ...data,
        {
          product: productId,
          cartQuantity: quantity,
        }
      ]
    },
    {
      headers
    })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(addToCartCreator(updatedCart.data));
      }
    })
    .catch((error) => error.response)
}

export const getCart = () => (dispatch) => {
  axios.get('/cart', {
    headers
  })
    .then((carts) => {
      if (carts.status === 200) {
        dispatch(setCart(carts.data))
      }
    })
    .catch((err) => (err.response));
}

export const increaseQuantity = (productId) => (dispatch) => {
  axios.put(`/cart/${productId}`, null, {
    headers
  })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(increaseQuantityCreator(updatedCart.data));
      }
    })
    .catch((error) => error.response)
}

export const decreaseQuantity = (productID) => (dispatch) => {
  const res = axios.delete(`/cart/product/${productID}`, {
    headers
  })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(decreaseQuantityCreator(updatedCart.data))
      }
    })
    .catch((err) => err.response);
  return res;
}

export const removeFromCart = (productID) => (dispatch) => {
  axios.delete(`/cart/${productID}`, {
    headers
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(removeFromCartCreator(result.data))
      }
    })
    .catch((err) => err.response);
}

export const clearCart = () => (dispatch) => {
  axios.delete('/cart', {
    headers
  })
    .then(() => dispatch(clearCartCreator()))
    .catch((err) => err.response);
}

export default addToCart;