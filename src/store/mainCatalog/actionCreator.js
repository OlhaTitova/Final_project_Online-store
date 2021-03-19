import {
  GET_GAMING_MONITORS,
  GET_DESKTOPS,
  GET_LAPTOPS,
  GET_TABLETS
} from './actionTypes';

export const getGamingMonitorsCreater = (payload) => ({type: GET_GAMING_MONITORS, payload})
export const getDesctopsCreater = (payload) => ({type: GET_DESKTOPS, payload})
export const getLaptopsCreater = (payload) => ({type: GET_LAPTOPS, payload})
export const getTabletsCreater = (payload) => ({type: GET_TABLETS, payload})

export default getGamingMonitorsCreater