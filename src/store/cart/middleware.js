import axios from 'axios'
import headers from '../../Constants'
import {
  getCartCreator,
//   addToCart, changeQuantity, removeFromCart, clearCart, setCart
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

export const addProductToCart = (productId) => () => {
  const res = axios.put(`/cart/${productId}`, null, {headers})
    .then((updatedCart) => console.log(updatedCart))
    .catch((error) => error.response)
  //   if (res.status === 200) {
  //     dispatch(addToCart())
  //   }
  return res
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

export const getCart = () => (dispatch) => {
  axios.get('/cart')
    .then((cart) => dispatch(getCartCreator(cart)))
    .catch((err) => err);
}

// const clearCart = () => (dispatch) => {
//     const res = axios.delete("/cart")
//     .then(result => {
//       /*Do something with result*/
//     })
//     .catch(err => {
//       /*Do something with error, e.g. show error to user*/
//     });
// }
