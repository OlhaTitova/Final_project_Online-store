import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProductCartLength } from '../../../../store/cart/reducer'
import {CartWrapper, ShoppingCartOutlinedStyled, StyledCount} from './StyledCartIcon'

const mapStateToProps = (state) => ({productCartLength: selectProductCartLength(state)})

const CartIcon = connect(mapStateToProps, null)(({productCartLength}) => (
  <CartWrapper>
    <Link to="/cart">
      <ShoppingCartOutlinedStyled />
      <StyledCount>
        {productCartLength}
      </StyledCount>
    </Link>
  </CartWrapper>
))

export default CartIcon