import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {Cart} from './components/CartPage/Cart/Cart'
import StyledButton from './components/common/Buttons/StyledButton'
import {AboutUsPage} from './pages/About-us/AboutUs'
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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <Route exact path="/aboutus">
        <AboutUsPage />
      </Route>
      <Route exact path="/" />
      <NewProductsSlider />
      <Cart />
    </div>
  )
}

export default App
