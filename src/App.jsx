import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {AboutUsPage} from './pages/About-us/AboutUs'
import Button from './components/common/Buttons/Button'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import {Cart} from './components/Cart/Cart'

function App() {
  return (
    <div>
      <Button width={120} height={37} type="borderBlue">Submit</Button>
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
