import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import Footer from './components/Footer/Footer'
import ContactUsPage from './pages/Contact-us/ContactUs'
import ProductPage from './components/ProductPage/ProductPage'
import { HomepageBrands } from './components/BrandsAndFollow/HomePageBrands'
import { HomepageFollowUs } from './components/BrandsAndFollow/FollowUsInstagram'
import CatalogPage from './components/CatalogPage/CatalogPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import WishlistPage from './components/WishlistPage/WishlistPage'
import { setWishlist } from './store/wishlist/middleware'
import {CartPage} from './components/CartPage/CartPage'
import OrderPage from './components/OrderPage/OrderPage'
import { getCart } from './store/cart/middleware'

const App = connect(null, { setWishlist, getCart})(({
  setWishlist,
  getCart
}) => {
  useEffect(() => {
    setWishlist()
    getCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
          <HomepageBrands />
          <HomepageFollowUs />
          {/* <MainCatalog /> */}
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
          <CartPage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
        <Route exact path="/products/:itemNo">
          <ProductPage />
        </Route>
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
})

export default App