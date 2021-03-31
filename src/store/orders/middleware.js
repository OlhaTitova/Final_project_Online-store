import axios from 'axios';
import { DOMAIN, getHeaders } from '../../utils/constants';

const BASE_ENDPOINT = `${DOMAIN}/orders`;

const getOrders = () => {
  const headers = getHeaders()
  const results = axios.get(`${BASE_ENDPOINT}`, {headers})
    .then((data) => data)
    .catch((error) => error.response)
  return results
}
export default getOrders;