import axios from 'axios'
import headers from '../../Constants'
import {
  setCart, decreaseQuantityCreator, addToCartCreator, removeFromCartCreator, clearCartCreator
} from './actionCreator'

// export const authLogInCart = (credentials) => {
//   axios.post('/customers/login', credentials)
//     .then((data) => localStorage.setItem('token', data.data.token))
//     .catch((error) => console.log(error.response))
// }
// authLogInCart({loginOrEmail: 'admin', password: 'adminPassword'});

export const addToCart = (productId) => (dispatch) => {
  const res = axios.put(`/cart/${productId}`, null, {headers})
    .then((updatedCart) => dispatch(addToCartCreator(updatedCart.data)))
    .catch((error) => error.response)
  return res
}

export const getCart = () => (dispatch) => {
  axios.get('/cart', {headers})
    .then((carts) => {
    //   console.log(4444444444444);
      if (carts.status === 200) {
        dispatch(setCart(carts.data))
      }
    })
    .catch((err) => (err.response));
}
    
export const decreaseQuantity = (productID) => (dispatch) => {
  axios.delete(`/cart/product/${productID}`, {headers})
    .then((updatedCart) => dispatch(decreaseQuantityCreator(updatedCart)))
    .catch((err) => err.response);
}

export const removeFromCart = (productID) => (dispatch) => {
  axios.delete(`/cart/${productID}`)
    .then((result) => dispatch(removeFromCartCreator(result)))
    .catch((err) => err.response);
}

export const clearCart = () => (dispatch) => {
  axios.delete('/cart')
    .then((result) => dispatch(clearCartCreator(result)))
    .catch((err) => err.response);
}

export default addToCart;