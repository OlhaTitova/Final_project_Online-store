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
  getCart, clearCart, addToCart
} from '../../../store/cart/middleware';
import CartEmpty from '../CartEmpty';
import { selectProducts } from '../../../store/cart/reducer';

const mapStateToProps = (state) => ({products: selectProducts(state)})

const CartList = connect(
  mapStateToProps, {
    getCart, clearCart, addToCart
  }
)(({
  products,
  getCart,
  clearCart,
  addToCart
}) => {
  useEffect(() => {
    getCart()
  }, [getCart]);

  const productID_1 = '603ced9ce8326900152cfd00';
  const productID_2 = '603ced9ae8326900152cfcf4';

  console.log(products);

  return (
    <StyledCartList>
      <StyledButton size="xl" shape="round" onClick={() => addToCart(products, productID_1, 5)}>Add to cart_1</StyledButton>
      <StyledButton size="xl" shape="round" onClick={() => addToCart(products, productID_2, 20)}>Add to cart_2</StyledButton>
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