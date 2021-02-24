import React from 'react'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import Button from './components/common/Buttons/Button'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import { ProductCard } from './components/ProductCard/ProductCard'

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
      <hr />
      <Button>Submit</Button>
      <hr />
      <Button onClick={() => console.log('text')} type="borderBlue">Submit</Button>
      <hr />
      <Button type="borderGrey">Submit</Button>
      <hr />
      <Button type="black">Submit</Button>
      <hr />
      <Button type="yellow">Submit</Button>
      <hr />
      <Button width={120} height={37} type="borderBlue">Submit</Button>
      <hr />
      <Button width={385} height={50} type="black">Submit</Button>
      <hr />
      <BannerSlider />
      <NewProductsSlider />
    </div>
  )
}

export default App
