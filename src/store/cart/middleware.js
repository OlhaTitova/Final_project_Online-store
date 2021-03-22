/* eslint-disable no-underscore-dangle */
import { message } from 'antd'
import axios from 'axios'
import {
  addCartToLS, decreaseQuantityLS, getCartLS, increaseQuantityLS, removeFromCartLS
} from '../../utils/cartLS'
import {
  setCart,
  decreaseQuantityCreator,
  addToCartCreator,
  removeFromCartCreator,
  clearCartCreator,
  increaseQuantityCreator,
  getBranches,
  getShippingCostCreator,
  getOrderCreator,
  clearOrderCreator
} from './actionCreator'
import { DOMAIN, getHeaders } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/cart`

export const addToCart = (product, quantity) => (dispatch, getStore) => {
  const { cart: { products } } = getStore()

  const productId = product._id

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
  axios.put(BASE_ENDPOINT, {products: updatedCart}, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(addToCartCreator(updatedCart.data));
        message.success('Product added to cart!')
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        addCartToLS(product, quantity)
        message.success('Product added to cart!')
      }
    })
}

export const getCart = () => (dispatch) => {
  const headers = getHeaders()
  axios.get(BASE_ENDPOINT, { headers })
    .then((cart) => {
      if (cart.data !== null) {
        dispatch(setCart(cart.data))
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch(setCart({products: getCartLS()}))
      }
    });
}

export const increaseQuantity = (product) => (dispatch) => {
  const headers = getHeaders()
  axios.put(`${BASE_ENDPOINT}/${product._id}`, null, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(increaseQuantityCreator(updatedCart.data));
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(increaseQuantityCreator({products: increaseQuantityLS(product._id)}))
      }
    })
}

export const decreaseQuantity = (productID) => (dispatch) => {
  const headers = getHeaders()
  axios.delete(`${BASE_ENDPOINT}/product/${productID}`, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(decreaseQuantityCreator(updatedCart.data))
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(decreaseQuantityCreator({products: decreaseQuantityLS(productID)}))
      }
    })
}

export const removeFromCart = (productID) => (dispatch) => {
  const headers = getHeaders()
  axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
    .then((result) => {
      if (result.status === 200) {
        dispatch(removeFromCartCreator(result.data))
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(removeFromCartCreator({products: removeFromCartLS(productID)}))
      }
    })
}

export const clearCart = (isLogin) => (dispatch) => {
  const headers = getHeaders()
  axios.delete(BASE_ENDPOINT, { headers })
    .then(() => {
      if (isLogin) dispatch(clearCartCreator())
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch(clearCartCreator())
        localStorage.removeItem('cart')
      }
    })
}

export const getCity = (props) => (dispatch) => {
  axios.post('https://api.novaposhta.ua/v2.0/json/', {
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      Language: 'ru',
      CityRef: props,
    },
    apiKey: '469ae707669208ac6f2d113fc7edbe13'
  })
    .then((data) => {
      const dataBranches = data.data.data.map((item) => ({
        branchName: item.DescriptionRu,
        branchRef: item.Ref
      }))
      dispatch(getBranches(dataBranches))
    })
    .catch((error) => error.response)
}

export const getShippingCost = (recipientCityRef) => (dispatch) => {
  axios.post('https://api.novaposhta.ua/v2.0/json/', {
    modelName: 'InternetDocument',
    calledMethod: 'getDocumentPrice',
    methodProperties: {
      CitySender: '8d5a980d-391c-11dd-90d9-001a92567626',
      CityRecipient: recipientCityRef.current.props.value,
      Weight: '10',
      ServiceType: 'DoorsDoors',
      Cost: '100',
      CargoType: 'Cargo',
      SeatsAmount: '10',
      PackCalculate: {
        PackCount: '1',
        PackRef: '1499fa4a-d26e-11e1-95e4-0026b97ed48a'
      },
      RedeliveryCalculate: {
        CargoType: 'Money',
        Amount: '100'
      }
    },
    apiKey: '469ae707669208ac6f2d113fc7edbe13'
  })
    .then((data) => {
      dispatch(getShippingCostCreator(data.data.data[0].Cost))
    })
    .catch((error) => error.response)
}

export const PlaceOrder = (
  products, isLogin, values, customer, shippingCost, valuePaymentInfo,
) => (dispatch) => {
  dispatch(clearOrderCreator())
  // eslint-disable-next-line prefer-const
  let body = {
    canceled: false,
    deliveryAddress: JSON.stringify({
      country: values.country,
      city: values.recipientCity,
      branch: values.recipientBranch,
    }),
    shipping: JSON.stringify(shippingCost),
    paymentInfo: JSON.stringify(valuePaymentInfo),
    status: 'not shipped',
    email: values.email,
    mobile: values.phoneNumber,
    firstName: values.firstName,
    letterSubject: `${values.firstName}, thank you for order!`,
    letterHtml: '<h1>Your order is placed. OrderNo and details about order in your dashboard.</h1>'
  }
  if (isLogin) {
    body.customerId = customer
  } else {
    body.products = JSON.stringify(products)
  }
  
  axios
    .post('/orders', body)
    .then((newOrder) => {
      dispatch(getOrderCreator(newOrder.data.order))
      clearCart(isLogin)(dispatch)
    })
    .catch((err) => err.response)
}

export const addLSToServer = () => (dispatch) => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  
  const updatedCartForServer = cartLS.map((item) => ({
    product: item.product._id,
    cartQuantity: item.cartQuantity
  }))

  const headers = getHeaders()
  axios.put(BASE_ENDPOINT, {products: updatedCartForServer}, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(addToCartCreator(updatedCart.data));
        localStorage.removeItem('cart')
      }
    })
    .catch((error) => error.response)
}

export default addToCart;