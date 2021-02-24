import { GET_NEW_PRODUCTS } from './actionType'

export const MODULE_NAME = 'newProductsModule'

const initialState = {
  newProducts: []
}
export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_NEW_PRODUCTS: {
      return {
        ...state,
        newProducts: payload
      }
    }
    default: {
      return state
    }
  }
}
export default reducer