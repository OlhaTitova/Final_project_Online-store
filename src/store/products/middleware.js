import axios from 'axios';
import {
  setProducts,
  addProduct,
  updateProduct,
  setProductsToCatalog,
  setCatalogProductsQuantity,
  cleanCatalogProducts,
  setSearchProducts
} from './actionCreator';
import { DOMAIN, getHeaders } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/products`

export const getProducts = () => (dispatch) => {
  axios.get(BASE_ENDPOINT)
    .then((data) => {
      if (data.status === 200) {
        dispatch(setProducts(data.data))
      }
    })
    .catch((error) => error.response)
}

export const addOneProduct = (newProduct) => (dispatch) => {
  const headers = getHeaders()
  const res = axios.post(BASE_ENDPOINT, newProduct, { headers })
    .then((data) => {
      if (data.status === 200) {
        dispatch(addProduct(newProduct))
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const updateOneProduct = (id, newProduct) => (dispatch) => {
  const headers = getHeaders()
  const res = axios.put(`${BASE_ENDPOINT}/${id}`, newProduct, { headers })
    .then((data) => {
      if (data.status === 200) {
        dispatch(updateProduct(data.data))
      }
      return data
    })
    .catch((error) => error.response)

  return res
}

export const getOneProduct = (itemNo) => {
  const res = axios.get(`${BASE_ENDPOINT}/${itemNo}`)
    .then((data) => data)
    .catch((error) => error.response)
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
      return res
    })
    .catch((error) => error.response)
  return res
}

export const getProductsToCatalog = (param) => (dispatch) => {
  dispatch(cleanCatalogProducts())
  const res = axios.get(`${BASE_ENDPOINT}/filter${param}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(setProductsToCatalog(res.data.products))
        dispatch(setCatalogProductsQuantity(res.data.productsQuantity))
      }
      return res
    })
    .catch((error) => {
      dispatch(setCatalogProductsQuantity(0))
      return error
    })
  return res
}

export const getSearchProducts = (searchPhrases) => (dispatch) => {
  axios
    .post(`${BASE_ENDPOINT}/search`, searchPhrases)
    .then(({data}) => {
      dispatch(setSearchProducts(data))
    })
    .catch((err) => err);
}