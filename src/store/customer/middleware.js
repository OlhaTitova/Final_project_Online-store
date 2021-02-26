/* eslint-disable no-console */
import axios from 'axios'

const BASE_ENDPOINT = '/customers'

const headers = {
  authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export const createCustomer = (credentials) => () => {
  const res = axios.post(BASE_ENDPOINT, credentials)
    .then((customer) => customer)
    .catch((error) => error.response)
  return res
}

export const changePassword = (passwords) => () => {
  const res = axios.put(`${BASE_ENDPOINT}/password`, passwords, {headers})
    .then((data) => data)
    .catch((error) => error.response)
  return res
}

export const updateCustomer = (credentials) => () => {
  const res = axios.put(BASE_ENDPOINT, credentials, {headers})
    .then((data) => data)
    .catch((error) => error)
  return res
}

export const getCustomer = () => () => {
  const res = axios.get(`${BASE_ENDPOINT}/customer`, {headers})
    .then((data) => data)
    .catch((error) => error)
  return res
}