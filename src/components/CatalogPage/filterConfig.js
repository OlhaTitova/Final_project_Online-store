import axios from 'axios';
import { DOMAIN } from '../../store/general';

function SortArr(arr) {
  return arr.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
        
    return 0;
  })
}

export const categories = SortArr([
  {
    value: 'gamingMonitors',
    title: 'Gaming Monitors'
  },
  {
    value: 'tablets',
    title: 'Tablets'
  },
  {
    value: 'laptops',
    title: 'Laptops'
  },
  {
    value: 'desctops',
    title: 'Desctops'
  }
])

export const brands = SortArr([
  {
    value: 'AOC',
    title: 'AOC'
  },
  {
    value: 'MSI',
    title: 'MSI'
  },
  {
    value: 'LG',
    title: 'LG'
  },
  {
    value: 'Samsung',
    title: 'Samsung'
  },
  {
    value: 'Philips',
    title: 'Philips'
  },
  {
    value: 'Apple',
    title: 'Apple'
  },
  {
    value: 'Lenovo',
    title: 'Lenovo'
  },
  {
    value: 'Huawei',
    title: 'Huawei'
  },
  {
    value: 'Asus',
    title: 'Asus'
  },
  {
    value: 'HP',
    title: 'HP'
  },
  {
    value: 'Dell',
    title: 'Dell'
  },
  {
    value: 'Artline',
    title: 'Artline'
  },
  {
    value: 'Everest',
    title: 'Everest'
  },
])

export const checkFilterConfig = async (param) => {
  let paramStr = ''
  const menuConfig = {
    brand: [],
  }
  Object.keys(param).forEach((key, index) => {
    if (index === 0) {
      return paramStr += `${key}=${param[key].toString()}`
    }
    return paramStr += `&${key}=${param[key].toString()}`
  })
    
  await axios.get(`${DOMAIN}/products/filter?${paramStr}`)
    .then(({data: {products}}) => {
      const refBrand = new Set()

      products.forEach((product) => {
        if (product.brand) refBrand.add(product.brand)
      })

      if (param.categories) {
        brands.forEach(((brand) => {
          if (refBrand.has(brand.value) || param.brand.includes(brand.value)) {
            menuConfig.brand.push(brand)
          }
        }))
      } else delete menuConfig.brand
      return products
    })
    .catch((error) => error)
  return {...menuConfig}
}
