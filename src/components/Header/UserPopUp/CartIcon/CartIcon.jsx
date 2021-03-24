import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectproductCartCount } from '../../../../store/cart/reducer'
import {CartWrapper, ShoppingCartOutlinedStyled, StyledCount} from './StyledCartIcon'

const mapStateToProps = (state) => ({productCartCount: selectproductCartCount(state)})

const CartIcon = connect(mapStateToProps, null)(({productCartCount}) => (
  <CartWrapper>
    <Link to="/cart">
      <ShoppingCartOutlinedStyled />
      <StyledCount>
        {productCartCount}
      </StyledCount>
    </Link>
  </CartWrapper>
))

export default CartIcon