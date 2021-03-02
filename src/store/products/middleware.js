import axios from 'axios';
import { setProducts, addProduct, updateProduct } from './actionCreator';

const BASE_ENDPOINT = '/products'

const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

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
    .then((data) => console.log(data))
    .catch((error) => console.log(error.response))
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