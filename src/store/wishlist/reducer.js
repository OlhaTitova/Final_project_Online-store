import UPDATE_WISHLIST from './actionType'

export const MODULE_NAME = 'wishlist'
export const selectWishlistItems = (state) => state[MODULE_NAME].wishlistItems

export const initialState = {
  wishlistItems: [],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlistItems: payload
      }
    default:
      return {
        ...state
      }
  }
}