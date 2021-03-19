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
    title: 'Gaming Monitor'
  },
  {
    value: 'tablets',
    title: 'Tablet'
  },
  {
    value: 'laptops',
    title: 'Laptop'
  },
  {
    value: 'desctops',
    title: 'Desctop'
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