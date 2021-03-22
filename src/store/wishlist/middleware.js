/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { DOMAIN, getHeaders } from '../general'
import updateWishlistCreator from './actionCreator'

const BASE_ENDPOINT = `${DOMAIN}/wishlist`

const getParsedListFromLS = () => {
  const check = localStorage.getItem('wishlist')
  if (!check) localStorage.setItem('wishlist', JSON.stringify([]))

  const items = localStorage.getItem('wishlist')
  return JSON.parse(items)
}
const addProductToLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = [...prevItems, product]
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
}
const removeProductFromLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = prevItems.filter((item) => item._id !== product._id)
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
}

export const setWishlist = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  const itemsToSet = []
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.get(BASE_ENDPOINT, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) itemsToSet.push(...data.products)
      })
      .catch((err) => console.log(err.response))
  } else {
    itemsToSet.push(...getParsedListFromLS())
  }

  const dataToAdd = {
    wishitstItems: itemsToSet,
    wishitstLength: itemsToSet.length
  }
  dispatch(updateWishlistCreator(dataToAdd))
}

export const addProductToWishlist = (product) => async (dispatch, getState) => {
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []

  if (isLogin) {
    const headers = getHeaders()
    await axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
      .then((response) => {
        const {data, status} = response
        if (data && status === 200) updatedList.push(...data.products)
      })
      .catch((err) => console.log(err.response))
  } else {
    const updatedItems = addProductToLS(product)
    updatedList.push(...updatedItems)
  }
  const dataToAdd = {
    wishitstItems: updatedList,
    wishitstLength: updatedList.length
  }
  dispatch(updateWishlistCreator(dataToAdd))
}

export const removeProductFromWishlist = (product) => async (dispatch, getState) => {
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) updatedList.push(...data.products)
      })
      .catch((err) => console.log(err.response))
  } else {
    const updatedItems = removeProductFromLS(product)
    updatedList.push(...updatedItems)
  }

  const dataToAdd = {
    wishitstItems: updatedList,
    wishitstLength: updatedList.length
  }
  dispatch(updateWishlistCreator(dataToAdd))
}
