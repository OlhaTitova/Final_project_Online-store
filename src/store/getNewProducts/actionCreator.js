import { GET_NEW_PRODUCTS } from './actionType'

export const getNewProductsCreator = (payload) => ({type: GET_NEW_PRODUCTS, payload})
export default getNewProductsCreator