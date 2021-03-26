import UPDATE_WISHLIST from './actionType'

export const MODULE_NAME = 'wishlist'
export const selectWishlistItems = (state) => state[MODULE_NAME].wishlistItems
export const selectWishlistLength = (state) => state[MODULE_NAME].wishlistLength

export const initialState = {
  wishlistItems: [],
  wishlistLength: 0
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishlistItems: payload.wishlistItems,
        wishlistLength: payload.wishlistLength
      }
    default:
      return {
        ...state
      }
  }
}