/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import { getCart, clearCart } from '../../../store/cart/middleware';
import CartEmpty from '../CartEmpty';
import { selectProducts } from '../../../store/cart/reducer';

const mapStateToProps = (state) => ({products: selectProducts(state)})

const CartList = connect(
  mapStateToProps, {
    getCart, clearCart
  }
)(({
  products,
  getCart,
  clearCart,
}) => {
  useEffect(() => {
    setTimeout(() => {
      getCart()
    }, 1000)
  }, [getCart]);

  return (
    <StyledCartList>
      <TheadCart />
      {products && products.length > 0

        ? products.map(((item) => (

          <CartItem
            product={item.product}
            cartQuantity={item.cartQuantity}
            key={item.product._id}
          />
        )
        ))
        : <CartEmpty>Your Shopping Cart is Empty</CartEmpty>}

      <ColumnRowBetween>
        <div className="margin">
          <NavLink to="/">
            <StyledButton size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
          </NavLink>
        </div>
        <div className="margin">
          <StyledButton onClick={() => clearCart()} size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
        </div>
      </ColumnRowBetween>

    </StyledCartList>
  )
})

export default CartList;