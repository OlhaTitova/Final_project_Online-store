import axios from 'axios';
import headers from '../../Constants';
import { setProducts, addProduct, updateProduct } from './actionCreator';

const BASE_ENDPOINT = '/products'

export const getProducts = () => (dispatch) => {
  const res = axios.get('/products')
    .then((data) => data)
    .catch((error) => error.response)
  if (res.status === 200) {
    dispatch(setProducts(res.data))
  }
}

export const addOneProduct = (newProduct) => (dispatch) => {
  const res = axios.post(BASE_ENDPOINT, newProduct, {headers})
    .then((data) => data)
    .catch((error) => error.response)
  if (res.status === 200) {
    dispatch(addProduct(newProduct))
  }
  return res
}

export const updatedOneProduct = (id, newProduct) => (dispatch) => {
  const res = axios.put(`${BASE_ENDPOINT}/${id}`, newProduct, {headers})
    .then((data) => data)
    .catch((error) => error)
  if (res.status === 200) {
    dispatch(updateProduct(res.data))
  }
  return res
}

export const getOneProduct = (itemNo) => () => {
  const res = axios.get(`${BASE_ENDPOINT}/${itemNo}`)
    .then((data) => data)
    .catch((error) => error)
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
    .then((data) => data)
    .catch((error) => error)
  if (res.status === 200) dispatch(actionCreator(res.data))
}