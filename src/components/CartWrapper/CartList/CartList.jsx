import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import TheadCart from '../TheadCart/TheadCart';
import { CartItem } from '../CartItem/CartItem';
import { ColumnRowBetween, RowColumn} from '../Flex';
import StyledButton from '../../common/Buttons/StyledButton';
import StyledCartList from './StyledCartList';
import {
  getCart, addToCart, decreaseQuantity
} from '../../../store/cart/middleware';
import CartEmpty from '../CartEmpty/CartEmpty';

const MapStateToProps = (state) => ({cart: state.cart.cart})

const CartList = connect(
  MapStateToProps, {
    addToCart, decreaseQuantity, getCart
  }
)(({
  addToCart,
  // authLogInCart,
  getCart,
  cart
}) => {
  const productID = '603ced9ce8326900152cfd00';

  useEffect(() => {
    getCart()
  }, [getCart]);

  console.log(cart);
  console.log(cart.products);

  return (
    <StyledCartList>
      <StyledButton size="xl" shape="round" onClick={() => addToCart(productID)}>Add to cart</StyledButton>
      <TheadCart />
     
      {Object.keys(cart).length > 0

        ? cart.products.map(((item) => (

          <CartItem
            product={item.product}
            cartQuantity={item.cartQuantity}
            key={item.product.itemNo}
          />
        )
        ))
        : <CartEmpty>Your Shopping Cart is Empty</CartEmpty>}
      <ColumnRowBetween>
        <RowColumn>
          <div className="margin">
            <StyledButton size="xl" shape="round" color="borderGrey">Continue Shopping</StyledButton>
          </div>
          <div className="margin">
            <StyledButton size="xl" shape="round" color="black">Clear Shopping Cart</StyledButton>
          </div>

        </RowColumn>
        <div className="margin">

          <StyledButton size="xl" shape="round" color="black">
            Update Shopping Cart
          </StyledButton>
        </div>

      </ColumnRowBetween>
    </StyledCartList>
  )
})

export default CartList;