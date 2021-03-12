import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import StyledButton from './components/common/Buttons/StyledButton'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import { Cart } from './components/CartWrapper/Cart/Cart'
import ProductPage from './components/ProductPage/ProductPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
        </Route>
        <Route exact path="/signin">
          <LogIn />
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
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/products/:itemNo">
          <ProductPage />
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
