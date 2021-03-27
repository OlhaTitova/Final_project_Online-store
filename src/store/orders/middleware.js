import axios from 'axios';
import { getHeaders, DOMAIN } from '../general';

const BASE_ENDPOINT = `${DOMAIN}/orders`;

const getOrders = () => {
  const headers = getHeaders()
  const results = axios.get(`${BASE_ENDPOINT}`, {headers})
    .then((data) => data)
    .catch((error) => error.response)
  return results
}
export default getOrders;