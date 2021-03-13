import axios from 'axios';
import {headers} from '../store/headers';

export const setConfigs = () => {
  const newConfigs = {
    customId: 'global-configs',
    development: {
      database: {
        uri: 'mongodb+srv://admin:admin@cluster0.pnycf.mongodb.net/storeData?retryWrites=true&w=majority'
      },
      email: {
        mailUser: 'fem8mail@gmail.com',
        mailPassword: '1q2w3e4r-',
        mailService: 'gmail'
      },
      auth: {
        secretOrKey: 'secretKey'
      },
      infinitScrollEnabled: true,
      minOrderValue: 1,
      someCustomParam: 'custom params value'
    },
    production: {
      database: {
        uri: 'mongodb+srv://admin:admin@cluster0.pnycf.mongodb.net/storeData?retryWrites=true&w=majority'
      },
      email: {
        mailUser: 'fem8mail@gmail.com',
        mailPassword: '1q2w3e4r-',
        mailService: 'gmail'
      },
      auth: {
        secretOrKey: 'secretKey'
      },
      infinitScrollEnabled: true,
      minOrderValue: 1,
      someCustomParam: 'custom params value'
    }
  };
  
  axios
    .post('/configs', newConfigs, {headers})
    .then((newConfigs) => console.log(newConfigs))
    .catch((err) => console.log(err.response))
}

export default setConfigs;