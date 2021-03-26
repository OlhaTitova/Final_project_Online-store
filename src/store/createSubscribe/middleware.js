import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'
import { DOMAIN } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
  dispatch(createSubscribe())

  axios.post(BASE_ENDPOINT, newSubscriber)
    .then((response) => {
      console.log(response)
      dispatch(createSubscribeSuccess(response.data))
    })
    .catch((err) => {
      dispatch(createSubscribeError(err.response))
    })
}
export default createNewSubscribe