/* eslint-disable no-underscore-dangle */
import { message } from 'antd'
import axios from 'axios'
import { addCartToLS, getCartLS } from '../../utils/cartLS'
import {getHeaders} from '../headers'
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
  axios.put('/cart', {products: updatedCart}, { headers })
    .then((updatedCart) => {
      if (updatedCart.status === 200) {
        dispatch(addToCartCreator(updatedCart.data));
        message.success('Product added to cart!')
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        addCartToLS(product, quantity)
      }
    })
}

export const getCart = () => (dispatch) => {
  const headers = getHeaders()
  axios.get('/cart', { headers })
    .then((carts) => {
      console.log(carts)
      if (carts.status === 200) {
        dispatch(setCart(carts.data))
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        dispatch(setCart({products: getCartLS()}))
      }
    });
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
    .then(() => {
      dispatch(clearCartCreator())
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
    letterSubject: 'Thank you for order! You are welcome!',
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
      console.log(newOrder)
      dispatch(getOrderCreator(newOrder.data.order))
      clearCart(isLogin)(dispatch)
    })
    .catch((err) => console.log(err.response))
}

export default addToCart;

// "{"canceled":false,"deliveryAddress":"{\"country\":\"Ukraine\",\"city\":\"db5c88f0-391c-11dd-90d9-001a92567626\",\"branch\":\"7b422fbd-e1b8-11e3-8c4a-0050568002cf\"}","shipping":"116","paymentInfo":"\"Cash\"","status":"not shipped","email":"o.titova.ua@gmail.com","mobile":"380674242090","firstName":"Olha","letterSubject":"Thank you for order! You are welcome!","letterHtml":"<h1>Your order is placed. OrderNo and details about order in your dashboard.</h1>","products":"[{\"product\":{\"enabled\":true,\"imageUrls\":[\"https://i8.rozetka.ua/goods/21130867/philips_346b1c_00_images_21130867451.jpg\",\"https://i2.rozetka.ua/goods/21130867/philips_346b1c_00_images_21130867891.jpg\",\"https://i8.rozetka.ua/goods/21130868/philips_346b1c_00_images_21130868236.jpg\",\"https://i2.rozetka.ua/goods/21130868/philips_346b1c_00_images_21130868456.jpg\"],\"quantity\":1,\"_id\":\"604ffa584e7ef5001533940a\",\"name\":\"monitor philips 346b1c/00\",\"currentPrice\":15500,\"previousPrice\":16500,\"categories\":\"gamingMonitors\",\"color\":\"grey\",\"productUrl\":\"/gamingMonitors\",\"brand\":\"Philips\",\"newProduct\":\"yes\",\"reviews\":[4,3,5,4,5,5,4,4,5,2,5,4,5],\"params\":{\"updateFrequency\":\"100 Hz\",\"countryOfmanufacture\":\"China\",\"displayDiagonal\":\"34\\\"\",\"displayResolution\":\"3840x2160\",\"responseTime\":\"4ms\",\"screenSize\":\"34 inches\",\"aspectRatio\":\"21:9\"},\"description\":\"Height adjustable SmartErgoBase allows for quick and effortless adjustments of height tilt and rotation for an ideal and ergonomic sitting angle\",\"itemNo\":\"996598\",\"date\":\"2021-03-16T00:22:48.973Z\",\"__v\":0},\"cartQuantity\":3}]"}"