import axios from 'axios'
import { DOMAIN } from '../general'
import { clearRefreshTimer, logIn, logOut } from './actionCreator'
import updateWishlistCreator from '../wishlist/actionCreator'
import { initialState as wishlistInitialState} from '../wishlist/reducer'
import { clearCart } from '../cart/middleware'
// import { setCart } from '../cart/actionCreator'
// import { getCartLS } from '../../utils/cartLS'

const BASE_ENDPOINT = '/customers'

export const authLogIn = (credentials) => async (dispatch) => {
  const res = await axios.post(`${DOMAIN}${BASE_ENDPOINT}/login`, credentials)
    .then((data) => {
      if (data.status === 200) {
        localStorage.setItem('credentials', JSON.stringify(credentials))
        dispatch(logIn())
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const authLogOut = () => (dispatch) => {
  localStorage.removeItem('credentials')
  localStorage.removeItem('token')
  localStorage.removeItem('wishlist')
  dispatch(clearRefreshTimer())
  dispatch(logOut())
  dispatch(updateWishlistCreator(wishlistInitialState))
  dispatch(clearCart())
}

export default authLogIn
