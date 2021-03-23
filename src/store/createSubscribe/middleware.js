import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'
import { DOMAIN, getHeaders } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
  const headers = getHeaders()
  dispatch(createSubscribe())

  axios.post(BASE_ENDPOINT, newSubscriber, { headers })
    .then((response) => {
      dispatch(createSubscribeSuccess(response.data))
    })
    .catch((err) => {
      dispatch(createSubscribeError(err.response))
    })
}
export default createNewSubscribe