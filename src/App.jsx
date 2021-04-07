import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import { setWishlist } from './store/wishlist/middleware'
import ProductSubscribeModal from './components/ProductSubscribeModal/ProductSubscribeModal'
import Router from './components/Router/Router'
import { getCart } from './store/cart/middleware'
import ServiceSection from './components/ServiceSection/ServiceSection'
import AuthModal from './components/AuthModal/AuthModal'
import { getMainCatalogProducts } from './store/productsPreview/middleware'

const App = connect(null, { setWishlist, getCart, getMainCatalogProducts })((
  {
    setWishlist,
    getCart,
    getMainCatalogProducts
  }
) => {
  useEffect(() => {
    getMainCatalogProducts()
    getCart()
    setWishlist()
  }, [getCart, getMainCatalogProducts, setWishlist])

  return (
    <div style={{marginTop: '120px'}}>
      <Header />
      <ProductSubscribeModal />
      <AuthModal />
      <Router />
      <ServiceSection />
      <Footer />
    </div>
  );
})

export default App