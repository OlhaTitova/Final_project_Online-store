import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import { Cart } from './components/CartWrapper/Cart/Cart'
import Footer from './components/Footer/Footer'
import ContactUsPage from './pages/Contact-us/ContactUs'
import ProductPage from './components/ProductPage/ProductPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/Checkout/Payment/Payment'

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
        <Route exact path="/contactus">
          <ContactUsPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/products/:itemNo">
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
