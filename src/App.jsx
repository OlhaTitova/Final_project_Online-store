import React from 'react'
import { ProductCard } from './components/ProductCard/ProductCard'
import { BannerSlider } from './components/BannerSlider/BannerSlider'

function App() {
  return (
    <div>
      <ProductCard
        title="Apple MacBook Air 13 256Gb Space Gray (MWTJ2) 2020"
        img="https://i.citrus.ua/imgcache/size_800/uploads/shop/0/8/08d983e24e5cced849bd3ab8ac562b35.jpg"
        lastPrice="544"
        nowPrice="644"
        reviews="999"
        rating={2}
        isGoodsInStock={false}
      />
      <BannerSlider />
    </div>
  )
}

export default App
