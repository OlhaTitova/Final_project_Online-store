import React from 'react'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {Cart} from './components/CartPage/Cart/Cart'
import StyledButton from './components/common/Buttons/Button'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <StyledButton size="xxs" smallHeight shape="round" color="borderBlue">Submit</StyledButton>
      <StyledButton size="xxxl" shape="round" color="black">Submit</StyledButton>
      <StyledButton size="xxl" shape="round" color="yellow">Submit</StyledButton>
      <StyledButton size="xl" smallHeight shape="round">Submit</StyledButton>
      <StyledButton size="lg" shape="round" color="borderGrey">Submit</StyledButton>
      <StyledButton size="md" smallHeight shape="round" color="borderBlue">Submit</StyledButton>
      <StyledButton size="sm" shape="round">Submit</StyledButton>
      <StyledButton size="xs" shape="round" color="yellow">Submit</StyledButton>
      <StyledButton size="xxs" smallHeight shape="round">Submit</StyledButton>
      <BannerSlider />
      <NewProductsSlider />
      <Cart />
    </div>
  )
}

export default App
