import axios from 'axios'
import { message } from 'antd'
import { DOMAIN } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`

const createNewSubscribe = (credentials) => {
  axios.post(BASE_ENDPOINT, credentials,)
    .then((response) => {
      if (response.status === 200) {
        message.info('You have been subscribed to updates!')
      }
    })
    .catch((error) => {
      if (error.response) {
        const requestMessage = error.response.data.message
        message.error(`Error: ${requestMessage}.`)
      }
    })
}
export default createNewSubscribe