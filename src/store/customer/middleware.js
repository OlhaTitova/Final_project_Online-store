import axios from 'axios'
import { message } from 'antd'

const BASE_ENDPOINT = '/customers'

const headers = {
  authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export const createCustomer = (credentials, history) => {
  axios.post(BASE_ENDPOINT, credentials)
    .then((res) => {
      if (res.status === 200) {
        history.push('/')
        message.info('New account created successfully')
      }
    })
    .catch((error) => {
      if (error.response) {
        const requestMessage = error.response.data.message
        message.error(`Error: ${requestMessage}`)
      }
    })
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
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error.response)
    })
  return res
}