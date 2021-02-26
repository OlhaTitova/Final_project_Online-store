import { SET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT } from './actionType';

const initialState = {
  products: []
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }

    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products]
      }

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) => (+el.itemNo !== +payload.itemNo ? el : payload))
      }
  
    default:
      return state
  }
}

export default reducer