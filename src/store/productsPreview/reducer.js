import {
  GET_DESKTOPS,
  GET_GAMING_MONITORS,
  GET_LAPTOPS,
  GET_TABLETS,
  START_LOADING,
  STOP_LOADING
} from './actionTypes'

export const MODULE_NAME = 'mainCatalog'
export const selectCatalog = (state) => state[MODULE_NAME]
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading

const initialState = {
  isLoading: false,
  gamingMonitorList: [],
  desktopList: [],
  laptopList: [],
  tabletList: []
}

export const mainCatalogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMING_MONITORS:
      return {
        ...state,
        gamingMonitorList: payload
      }

    case GET_DESKTOPS:
      return {
        ...state,
        desktopList: payload
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
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return {
        ...state
      }
  }
}

export default mainCatalogReducer