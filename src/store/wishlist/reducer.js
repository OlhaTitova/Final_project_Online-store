import UPDATE_WISHLIST from './actionType'

export const MODULE_NAME = 'wishlist'
export const selectWishlistItems = (state) => state[MODULE_NAME].wishitstItems
export const selectWishlistLength = (state) => state[MODULE_NAME].wishitstLength

const initialState = {
  wishitstItems: [],
  wishitstLength: 0
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_WISHLIST:
      return {
        ...state,
        wishitstItems: payload.wishitstItems,
        wishitstLength: payload.wishitstLength
      }
    default:
      return state
  }
}