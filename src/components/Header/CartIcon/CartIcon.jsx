import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectproductCartCount } from '../../../store/cart/reducer'
import {CartWrapper, ShoppingCartOutlinedStyled, StyledCount} from './StyledCartIcon'

const mapStateToProps = (state) => ({productCartCount: selectproductCartCount(state)})

const CartIcon = connect(mapStateToProps, null)(({productCartCount}) => (
  <CartWrapper>
    <Link to="/cart">
      <ShoppingCartOutlinedStyled />
      {productCartCount > 0
        ? (
          <StyledCount>
            {productCartCount}
          </StyledCount>
        )
        : null}
      
    </Link>
  </CartWrapper>
))

export default CartIcon