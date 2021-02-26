import React from 'react'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {Cart} from './components/CartPage/Cart/Cart'
import ButtonStyled from './components/common/Buttons/Button'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <ButtonStyled size="xxs" smallHeight shape="round" color="borderBlue">Submit</ButtonStyled>
      <ButtonStyled size="xxxl" shape="round" color="black">Submit</ButtonStyled>
      <ButtonStyled size="xxl" shape="round" color="yellow">Submit</ButtonStyled>
      <ButtonStyled size="xl" smallHeight shape="round">Submit</ButtonStyled>
      <ButtonStyled size="lg" shape="round" color="borderGrey">Submit</ButtonStyled>
      <ButtonStyled size="md" smallHeight shape="round" color="borderBlue">Submit</ButtonStyled>
      <ButtonStyled size="sm" shape="round">Submit</ButtonStyled>
      <ButtonStyled size="xs" shape="round" color="yellow">Submit</ButtonStyled>
      <ButtonStyled size="xxs" smallHeight shape="round">Submit</ButtonStyled>
      <BannerSlider />
      <NewProductsSlider />
      <Cart />
    </div>
  )
}

export default App
