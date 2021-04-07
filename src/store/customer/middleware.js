import axios from 'axios';
import { message } from 'antd';
import { DOMAIN, getHeaders } from '../../utils/constants';

const BASE_ENDPOINT = `${DOMAIN}/customers`;

export const createCustomer = (credentials, history) => {
  axios.post(BASE_ENDPOINT, credentials)
    .then((res) => {
      if (res.status === 200) {
        history.push('/signin')
        message.info('New account created successfully')
      }
    })
    .catch((error) => {
      const { message } = error.response.data
      if (message) {
        message.error(`Error: ${message}`)
      }
    })
}

export const changePassword = (passwords) => {
  const headers = getHeaders();
  const res = axios.put(`${BASE_ENDPOINT}/password`, passwords, {headers})
    .then((data) => {
      if (data.status === 200) {
        if (data.data.message === 'Password successfully changed') {
          message.success('Your password have been changed')
        }
        if (data.data.password === 'Password does not match') {
          message.error('Old password is wrong ')
        }
      }
    })
    .catch((error) => {
      if (error.response) {
        const requestMessage = error.response.data.message
        message.error(`Error: ${requestMessage}`)
      }
    })
  return res
}

export const updateCustomer = (credentials, succesMessage) => {
  const headers = getHeaders();
  const res = axios.put(BASE_ENDPOINT, credentials, {headers})
    .then((data) => {
      if (data.status === 200) {
        if (succesMessage) {
          message.success('Your contact information has been changed')
        }
      }
    })
    .catch((error) => error.response)
  return res
}
  
export const getCustomer = () => {
  const headers = getHeaders()
  const res = axios.get(`${BASE_ENDPOINT}/customer`, { headers })
    .then((data) => data)
    .catch((error) => error.response)
  return res
}