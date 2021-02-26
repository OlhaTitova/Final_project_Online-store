import React from 'react'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {Cart} from './components/CartPage/Cart/Cart'
import StyledButton from './components/common/Buttons/StyledButton'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <StyledButton shape="round">Submit</StyledButton>
      <StyledButton size="sm" shape="round">Submit</StyledButton>
      <StyledButton size="xl" shape="round" color="black">Submit</StyledButton>
      <StyledButton size="lg" shape="round">Submit</StyledButton>
      <StyledButton size="md" shape="round" color="borderGrey">Submit</StyledButton>
      <StyledButton size="xs" shape="round" color="borderBlue">Submit</StyledButton>
      <StyledButton size="sm" shape="round" color="yellow">Submit</StyledButton>
      <BannerSlider />
      <NewProductsSlider />
      <Cart />
    </div>
  )
}

export default App
