import React from 'react'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import Button from './components/common/Buttons/Button'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import {Cart} from './components/Cart/Cart'

function App() {
  return (
    <div>
      <Button width={120} height={37} type="borderBlue">Submit</Button>
      <BannerSlider />
      <NewProductsSlider />
      <Cart />
    </div>
  )
}

export default App
