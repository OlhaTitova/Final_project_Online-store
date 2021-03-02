import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import StyledButton from './components/common/Buttons/StyledButton'
import {AboutUsPage} from './pages/About-us/AboutUs'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import {Cart} from './components/CartWrapper/Cart/Cart'

function App() {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/buttons">Buttons</NavLink>
      
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
        </Route>
        <Route exact path="/signup">
          <CreateCustomerPage />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/buttons">
          <StyledButton shape="round">Submit</StyledButton>
          <StyledButton size="sm" shape="round">Submit</StyledButton>
          <StyledButton size="xl" shape="round" color="black">Submit</StyledButton>
          <StyledButton size="lg" shape="round">Submit</StyledButton>
          <StyledButton size="md" shape="round" color="borderGrey">Submit</StyledButton>
          <StyledButton size="xs" shape="round" color="borderBlue">Submit</StyledButton>
          <StyledButton size="sm" shape="round" color="yellow">Submit</StyledButton>
        </Route>
      </Switch>
      
    </div>
  )
}

export default App
