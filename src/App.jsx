import React from 'react'
import { ProductCard } from './components/ProductCard/ProductCard'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import Button from './components/Buttons/Button'

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
      <br />
      <Button>Submit</Button>
      <br />
      <Button onClick={() => console.log('text')} type="borderBlue">Submit</Button>
      <br />
      <Button type="borderGrey">Submit</Button>
      <br />
      <Button type="black">Submit</Button>
      <br />
      <Button type="yellow">Submit</Button>
      <br />
      <Button size="sm" type="borderBlue">Submit</Button>
      <br />
      <Button size="md" type="black">Submit</Button>
      <br />
      <Button size="lg">Submit</Button>
      <BannerSlider />
    </div>
  )
}

export default App
