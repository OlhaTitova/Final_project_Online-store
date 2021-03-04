import axios from 'axios'
import headers from '../../Constants'
import {
  setCart,
  decreaseQuantityCreator,
  addToCartCreator,
  removeFromCartCreator,
  clearCartCreator
} from './actionCreator'

export const addToCart = (productId) => (dispatch) => {
  axios.put(`/cart/${productId}`, null, {
    headers
  })
    .then((updatedCart) => {
      dispatch(addToCartCreator(updatedCart.data));
    })
    .catch((error) => error.response)
  // return res
}

export const getCart = () => (dispatch) => {
  axios.get('/cart', {
    headers
  })
    .then((carts) => {
      // if (carts.status === 200) {
      dispatch(setCart(carts.data))
      // }
    })
    .catch((err) => (err.response));
}

export const decreaseQuantity = (productID) => (dispatch) => {
  const res = axios.delete(`/cart/product/${productID}`, {
    headers
  })
    .then((updatedCart) => dispatch(decreaseQuantityCreator(updatedCart.data)))
    .catch((err) => err.response);
  return res;
}

export const removeFromCart = (productID) => (dispatch) => {
  axios.delete(`/cart/${productID}`, {
    headers
  })
    .then((result) => dispatch(removeFromCartCreator(result.data)))
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