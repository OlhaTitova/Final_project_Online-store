import {
  GET_DESKTOPS,
  GET_GAMING_MONITORS, GET_LAPTOPS, GET_TABLETS
} from './actionTypes'

const initialState = {
  gamingMonitorList: [],
  desktops: [],
  laptopList: [],
  tabletList: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMING_MONITORS:
      return {
        ...state,
        gamingMonitorList: payload
      }

    case GET_DESKTOPS:
      return {
        ...state,
        desktops: payload
      }

    case GET_LAPTOPS:
      return {
        ...state,
        laptopList: payload
      }

    case GET_TABLETS:
      return {
        ...state,
        tabletList: payload
      }

    default:
      return state
  }
}

export default reducer