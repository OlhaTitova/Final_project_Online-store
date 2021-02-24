import axios from 'axios'
import { getNewProductsCreator } from './actionCreator'

export const getNewProducts = () => async (dispatch) => {
  axios.get('/products')
    .then((data) => {
      dispatch(getNewProductsCreator(data.data))
    })
    .catch((err) => console.log(err))
}
export default getNewProducts