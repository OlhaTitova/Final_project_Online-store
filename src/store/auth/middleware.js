import axios from 'axios'
import { logOut } from './actionCreator'

export const authLogIn = (credentials) => () => {
  axios.post('/customers/login', credentials)
    .then((data) => localStorage.setItem('token', data.data.token))
    .catch((error) => console.log(error.response))
}

export const authLogOut = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(logOut())
}

export default authLogIn
