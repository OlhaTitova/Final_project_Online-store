import axios from 'axios';
import {
  getGamingMonitorsCreater,
  getDesctopsCreater,
  getLaptopsCreater,
  getTabletsCreater
} from './actionCreator';

export const getMainCatalogProducts = () => (dispatch) => {
  axios.get('/products')
    .then((data) => {
      const gamingMonitorList = []
      const laptopList = []
      const tabletList = []
      const desctopsList = []

      data.data.forEach((product) => {
        switch (product.categories) {
          case 'gamingMonitors':
            gamingMonitorList.push(product)
            break

          case 'desctops':
            desctopsList.push(product)
            break

          case 'laptops':
            laptopList.push(product)
            break

          case 'tablets':
            tabletList.push(product)
            break

          default:
            return null
        }

        return null
      })

      dispatch(getGamingMonitorsCreater(gamingMonitorList))
      dispatch(getDesctopsCreater(desctopsList))
      dispatch(getLaptopsCreater(laptopList))
      dispatch(getTabletsCreater(tabletList))
    })
    .catch((error) => error.response)
}

export default getMainCatalogProducts