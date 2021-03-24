import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_CART,
  SET_CART_SUMMARY,
  GET_BRANCHES,
  GET_SHIPPING_COST,
  GET_CUSTOMER,
  GET_ORDER,
  CLEAR_ORDER
} from './actionType';

export const MODULE_NAME = 'cart';
export const selectProducts = (state) => state[MODULE_NAME].products;
export const selectProductCartLength = (state) => state[MODULE_NAME].productCartLength;
export const selectCartSummary = (state) => state[MODULE_NAME].summary;
export const selectCustomer = (state) => state[MODULE_NAME].customer;
export const selectCities = (state) => state[MODULE_NAME].cities;
export const selectBranches = (state) => state[MODULE_NAME].branches;
export const selectShippingCost = (state) => state[MODULE_NAME].shippingCost;
export const selectOrder = (state) => state[MODULE_NAME].order;

const initialState = {
  summary: 0,
  products: [],
  customer: {},
  branches: [],
  shippingCost: 0,
  order: {},
  productCartLength: 0,
  cities: [
    {
      CityName: 'Kyiv',
      Ref: '8d5a980d-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Dnipro',
      Ref: 'db5c88f0-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Kharkiv',
      Ref: 'db5c88e0-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Lviv',
      Ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
    },
    {
      CityName: 'Odessa',
      Ref: 'db5c88d0-391c-11dd-90d9-001a92567626'
    },
  ],
}

export const cartReducer = (state = initialState, {type, payload}) => {
  console.log(payload)
  const summaryTotalItems = (payload) => payload.products.reduce(
    (sum, curr) => sum + curr.cartQuantity * curr.product.currentPrice,
    0
  )

  switch (type) {
    case ADD_TO_CART:
    case DECREASE_QUANTITY:
    case INCREASE_QUANTITY:
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
        summary: summaryTotalItems(payload)
      }
    case CLEAR_CART:
      return {
        ...state,
        products: [],
        summary: 0,
        shippingCost: 0,
      }
    case SET_CART:
      return {
        ...state,
        products: payload.products,
        productsLength: payload.products.length,
        customer: payload.customerId || {},
        summary: summaryTotalItems(payload)
      }
    case SET_CART_SUMMARY:
      return {
        ...state,
        summary: payload,
      }
    case GET_BRANCHES:
      return {
        ...state,
        branches: payload,
        shippingCost: 0,
      }
    case GET_SHIPPING_COST:
      return {
        ...state,
        shippingCost: payload,
      }
    case GET_CUSTOMER:
      return {
        ...state,
        customer: payload.customerId,
      }
    case GET_ORDER:
      return {
        ...state,
        order: payload,
      }
    case CLEAR_ORDER:
      return {
        ...state,
        order: {},
      }
    default:
      return state
  }
}

export default cartReducer