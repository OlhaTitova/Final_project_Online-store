import axios from 'axios'
import headers from '../../Constants'
import {
  setCart,
  // getCartCreator,
//   addToCart, changeQuantity, removeFromCart, clearCart,
} from './actionCreator'

// const newCart = {
//   products: [
//     {
//       product: '603ced9ae8326900152cfced',
//       cartQuantity: 1
//     }
//   ]
// };

// const createCart = (newCart) => (dispatch) => {
//   const res = axios.post('/cart', newCart)
//     .then((newCart) => dispatch(addToCart(newCart)))
//     .catch((err) => err.response)
//   if (res.status === 200) {
    
//   }
// }

// const updatedCart = {
//     products: [
//       {
//         product: "603ced9ae8326900152cfced",
//         cartQuantity: 2
//       },
//       {
//         product: "603ced9ae8326900152cfcee",
//         cartQuantity: 3
//       }
//     ]
//   };
  
//   const updateCart = (updatedCart) => (dispatch) => {

//     const res = axios.put("/cart", updatedCart)
//         .then(updatedCart => updatedCart)
//         .catch((err) => err.response)
//         if (res.status === 200) {
//           dispatch()
//         }
//     }

export const authLogInCart = (credentials) => () => {
  axios.post('/customers/login', credentials)
    .then((data) => localStorage.setItem('token', data.data.token))
    .catch((error) => console.log(error.response))
}

export const addProductToCart = (productId) => (dispatch) => {
  const res = axios.put(`/cart/${productId}`, null, {headers})
    .then((updatedCart) => dispatch(setCart(updatedCart.data)))
    .catch((error) => error.response)
  //   if (res.status === 200) {
  //     dispatch(addToCart())
  //   }
  return res
}

export const getCart = () => (dispatch) => {
  axios.get('/cart')
    .then((carts) => {
      console.log(4444444444444);
      if (carts.status === 200) {
        dispatch(setCart(carts.data))
      }
    })
    .catch((err) => console.log(err.response));
}

export default addProductToCart;
    
// const decreaseProductQuantity = () => (dispatch) => {
//     const res = axios.delete("/cart/product/603ced9ae8326900152cfcee")
//     .then(updatedCart => {
//       /*Do something with updatedCart*/
//     })
//     .catch(err => {
//       /*Do something with error, e.g. show error to user*/
//     });
// }

// const removeFromCart = () => (dispatch) => {
//     const res = axios.delete("/cart/603ced9ae8326900152cfcee")
//     .then(result => {
//       /*Do something with result*/
//     })
//     .catch(err => {
//       /*Do something with error, e.g. show error to user*/
//     });
// }

// const clearCart = () => (dispatch) => {
//   const res = axios.delete('/cart')
//     .then((result) => {
//       /* Do something with result */
//     })
//     .catch((err) => {
//       /* Do something with error, e.g. show error to user */
//     });
// }
