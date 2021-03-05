import axios from 'axios';
import headers from '../headers';
import { setProducts, addProduct, updateProduct } from './actionCreator';

const BASE_ENDPOINT = '/products'

export const getProducts = () => (dispatch) => {
  axios.get('/products')
    .then((data) => {
      if (data.status === 200) {
        dispatch(setProducts(data.data))
      }
    })
    .catch((error) => error.response)
}

export const addOneProduct = (newProduct) => (dispatch) => {
  const res = axios.post(BASE_ENDPOINT, newProduct, {headers})
    .then((data) => {
      if (data.status === 200) {
        dispatch(addProduct(newProduct))
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const updatedOneProduct = (id, newProduct) => (dispatch) => {
  const res = axios.put(`${BASE_ENDPOINT}/${id}`, newProduct, {headers})
    .then((data) => {
      if (data.status === 200) {
        dispatch(updateProduct(data.data))
      }
      return data
    })
    .catch((error) => error)
  return res
}

export const getOneProduct = (itemNo) => () => {
  const res = axios.get(`${BASE_ENDPOINT}/${itemNo}`)
    .then((data) => console.log(data))
    .catch((error) => console.log(error.response))
  return res
}

export const getFilteredProducts = (param, actionCreator) => (dispatch) => {
  let paramStr = ''
  Object.keys(param).forEach((key, index) => {
    if (index === 0) {
      return paramStr += `${key}=${param[key]}`
    }
    return paramStr += `&${key}=${param[key]}`
  })
  
  const res = axios.get(`${BASE_ENDPOINT}/filter?${paramStr}`)
    .then((res) => {
      if (res.status === 200) dispatch(actionCreator(res.data.products))
    })
    .catch((error) => console.log(error.response))

  return res
}