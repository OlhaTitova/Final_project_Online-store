import { batch } from 'react-redux';
import {
  GET_GAMING_MONITORS,
  GET_DESKTOPS,
  GET_LAPTOPS,
  GET_TABLETS
} from './actionTypes';

export const getMainCatalogCreater = (combinePayload) => {
  const {
    gamingMonitorList,
    desctopsList,
    laptopList,
    tabletList
  } = combinePayload

  return (dispatch) => {
    batch(() => {
      dispatch({type: GET_GAMING_MONITORS, payload: gamingMonitorList})
      dispatch({type: GET_DESKTOPS, payload: desctopsList})
      dispatch({type: GET_LAPTOPS, payload: laptopList})
      dispatch({type: GET_TABLETS, payload: tabletList})
    })
  }
}

export default getMainCatalogCreater