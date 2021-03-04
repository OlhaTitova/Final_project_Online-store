/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween, RowColumn} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import {
  getCart, addToCart, clearCart
} from '../../../store/cart/middleware';
import CartEmpty from '../CartEmpty/CartEmpty';

const MapStateToProps = (state) => ({cart: state.cart.cart})

const CartList = connect(
  MapStateToProps, {
    addToCart, getCart, clearCart
  }
)(({
  cart,
  getCart,
  addToCart,
  clearCart
}) => {
  const productID = '603ced9ae8326900152cfcf0';

  useEffect(() => {
    getCart()
  }, [getCart]);

  console.log(cart);

  return (
    <StyledCartList>
      <StyledButton size="xl" shape="round" onClick={() => addToCart(productID, 10)}>Add to cart</StyledButton>
      <TheadCart />
      {cart && cart.products && cart.products.length > 0

        ? cart.products.map(((item) => (

          <CartItem
            product={item.product}
            cartQuantity={item.cartQuantity}
            key={item.product._id}
          />
        )
        ))
        : <CartEmpty>Your Shopping Cart is Empty</CartEmpty>}

      <ColumnRowBetween>
        <RowColumn>
          <div className="margin">
            <NavLink to="/">
              <StyledButton size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
            </NavLink>
          </div>
          <div className="margin">
            <StyledButton onClick={() => clearCart()} size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
          </div>
        </RowColumn>
        <div className="margin">
          <StyledButton onClick={() => getCart()} size="xl" shape="round" color="black">
            Update Shopping Cart
          </StyledButton>
        </div>
      </ColumnRowBetween>

    </StyledCartList>
  )
})

export default CartList;